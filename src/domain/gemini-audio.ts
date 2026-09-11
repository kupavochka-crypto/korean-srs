import type { ScannedWord } from '../types';
import {
  extractKoreanWords,
  GeminiOcrError,
  generateGeminiAudio,
  generateGeminiAudioFromFile,
  translateToRussian,
} from './gemini-ocr';

const MAX_AUDIO_BYTES = 10 * 1024 * 1024;
const MAX_INLINE_AUDIO_BYTES = 2 * 1024 * 1024;

const AUDIO_MIME: Record<string, string> = {
  mp3: 'audio/mpeg',
  mpeg: 'audio/mpeg',
  mpga: 'audio/mpeg',
  mp4: 'audio/mp4',
  m4a: 'audio/m4a',
  wav: 'audio/wav',
  webm: 'audio/webm',
  ogg: 'audio/ogg',
  aac: 'audio/aac',
  flac: 'audio/flac',
};

interface GeminiUploadedFile {
  name: string;
  uri: string;
  mimeType?: string;
  state?: 'PROCESSING' | 'ACTIVE' | 'FAILED';
}

export class GeminiAudioError extends GeminiOcrError {
  constructor(message: string) {
    super(message);
    this.name = 'GeminiAudioError';
  }
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function resolveMimeType(file: File): string {
  if (file.type && file.type.startsWith('audio/')) return file.type;
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  return AUDIO_MIME[ext] ?? 'audio/mpeg';
}

/** Gemini Files API expects IANA types; browsers often report MP3 as audio/mpeg. */
function normalizeMimeType(file: File): string {
  const resolved = resolveMimeType(file);
  if (resolved === 'audio/mp3' || resolved === 'audio/x-mpeg' || resolved === 'audio/mpga') {
    return 'audio/mpeg';
  }
  return resolved;
}

function validateAudioFile(file: File) {
  if (file.size > MAX_AUDIO_BYTES) {
    throw new GeminiAudioError(
      'Файл слишком большой (макс. 10 МБ). Сожмите аудио или вставьте текст вручную.'
    );
  }
  const ext = file.name.split('.').pop()?.toLowerCase() ?? '';
  const hasAudioType = file.type.startsWith('audio/');
  const hasKnownExt = ext in AUDIO_MIME;
  if (!hasAudioType && !hasKnownExt) {
    throw new GeminiAudioError('Поддерживаются аудиофайлы: mp3, m4a, wav, webm, ogg.');
  }
}

function parseUploadError(payload: string, status: number): string {
  try {
    const json = JSON.parse(payload) as { error?: { message?: string } };
    if (json.error?.message) return json.error.message;
  } catch {
    // ignore
  }
  if (status === 403 || status === 401) {
    return 'Ключ Gemini отклонён при загрузке аудио. Проверьте ключ в настройках.';
  }
  return `Не удалось загрузить аудио в Gemini (${status}). Вставьте текст песни вручную.`;
}

async function uploadAudioFile(file: File, apiKey: string): Promise<GeminiUploadedFile> {
  const mimeType = normalizeMimeType(file);
  const startUrl = 'https://generativelanguage.googleapis.com/upload/v1beta/files';

  const startResponse = await fetch(startUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-goog-api-key': apiKey,
      'X-Goog-Upload-Protocol': 'resumable',
      'X-Goog-Upload-Command': 'start',
      'X-Goog-Upload-Header-Content-Length': String(file.size),
      'X-Goog-Upload-Header-Content-Type': mimeType,
    },
    body: JSON.stringify({ file: { display_name: file.name || 'audio.mp3' } }),
  });

  if (!startResponse.ok) {
    throw new GeminiAudioError(parseUploadError(await startResponse.text(), startResponse.status));
  }

  const uploadUrl =
    startResponse.headers.get('X-Goog-Upload-URL') ??
    startResponse.headers.get('x-goog-upload-url');
  if (!uploadUrl) {
    throw new GeminiAudioError('Gemini не вернул URL для загрузки аудио.');
  }

  const uploadResponse = await fetch(uploadUrl, {
    method: 'POST',
    headers: {
      'Content-Length': String(file.size),
      'X-Goog-Upload-Offset': '0',
      'X-Goog-Upload-Command': 'upload, finalize',
    },
    body: file,
  });

  if (!uploadResponse.ok) {
    throw new GeminiAudioError(parseUploadError(await uploadResponse.text(), uploadResponse.status));
  }

  const data = (await uploadResponse.json()) as { file?: GeminiUploadedFile };
  const uploaded = data.file;
  if (!uploaded?.name || !uploaded.uri) {
    throw new GeminiAudioError('Gemini не вернул ссылку на загруженный файл.');
  }

  return waitForFileActive(
    { ...uploaded, mimeType: uploaded.mimeType ?? mimeType },
    apiKey
  );
}

async function waitForFileActive(file: GeminiUploadedFile, apiKey: string): Promise<GeminiUploadedFile> {
  if (file.state === 'ACTIVE') return file;

  const url = `https://generativelanguage.googleapis.com/v1beta/${file.name}`;
  for (let attempt = 0; attempt < 30; attempt += 1) {
    const response = await fetch(url, {
      headers: { 'x-goog-api-key': apiKey },
    });
    if (!response.ok) {
      throw new GeminiAudioError('Не удалось дождаться обработки аудио на сервере Gemini.');
    }
    const current = (await response.json()) as GeminiUploadedFile;
    if (current.state === 'ACTIVE') return current;
    if (current.state === 'FAILED') {
      throw new GeminiAudioError('Gemini не смог обработать аудиофайл. Вставьте текст вручную.');
    }
    await sleep(2000);
  }

  throw new GeminiAudioError(
    'Таймаут обработки аудио на сервере Gemini. Попробуйте короче фрагмент или вставьте текст вручную.'
  );
}

async function audioToBase64(file: File): Promise<{ mimeType: string; data: string }> {
  const mimeType = normalizeMimeType(file);
  const data = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === 'string' ? reader.result : '';
      const base64 = result.includes(',') ? (result.split(',')[1] ?? '') : result;
      if (!base64) {
        reject(new GeminiAudioError('Не удалось прочитать аудиофайл.'));
        return;
      }
      resolve(base64);
    };
    reader.onerror = () => reject(new GeminiAudioError('Не удалось прочитать аудиофайл.'));
    reader.readAsDataURL(file);
  });

  return { mimeType, data };
}

const TRANSCRIBE_PROMPT = `This is a Korean song audio clip.
Transcribe the sung or spoken Korean lyrics as accurately as possible.
Return ONLY the Hangul lyrics, line by line. No romanization, no translation, no commentary, no markdown.`;

export async function transcribeSongLyrics(file: File, apiKey: string): Promise<string> {
  const trimmedKey = apiKey.trim();
  if (!trimmedKey) {
    throw new GeminiAudioError('Укажите ключ Gemini API, чтобы распознать аудио.');
  }

  validateAudioFile(file);

  let raw = '';
  try {
    const uploaded = await uploadAudioFile(file, trimmedKey);
    raw = await generateGeminiAudioFromFile(
      trimmedKey,
      TRANSCRIBE_PROMPT,
      uploaded.uri,
      uploaded.mimeType ?? normalizeMimeType(file)
    );
  } catch (uploadError) {
    if (file.size > MAX_INLINE_AUDIO_BYTES) {
      throw uploadError instanceof Error
        ? uploadError
        : new GeminiAudioError('Не удалось распознать аудио. Вставьте текст вручную.');
    }
    const inline = await audioToBase64(file);
    raw = await generateGeminiAudio(trimmedKey, TRANSCRIBE_PROMPT, inline);
  }

  const text = raw.trim();
  if (!text) {
    throw new GeminiAudioError('Не удалось распознать текст песни. Вставьте текст вручную.');
  }
  return text;
}

/** Unique Hangul tokens from lyrics, each with a Russian translation. */
export async function extractUniqueVocabularyFromLyrics(
  lyrics: string,
  apiKey: string
): Promise<ScannedWord[]> {
  const words = extractKoreanWords(lyrics);
  if (words.length === 0) return [];

  const trimmedKey = apiKey.trim();
  if (!trimmedKey) {
    return words.map((korean) => ({ korean, translation: '' }));
  }

  const translations = await translateToRussian(words, trimmedKey);
  return words.map((korean) => ({
    korean,
    translation: translations[korean] || '',
  }));
}

export async function recognizeSongVocabularyFromAudio(
  file: File,
  apiKey: string
): Promise<ScannedWord[]> {
  const lyrics = await transcribeSongLyrics(file, apiKey);
  return extractUniqueVocabularyFromLyrics(lyrics, apiKey);
}

/** @deprecated Use extractUniqueVocabularyFromLyrics */
export async function extractVocabularyFromLyrics(
  lyrics: string,
  apiKey: string
): Promise<ScannedWord[]> {
  return extractUniqueVocabularyFromLyrics(lyrics, apiKey);
}
