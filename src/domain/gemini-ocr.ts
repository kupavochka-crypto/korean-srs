import type { ScannedWord } from '../types';
import { containsHangul } from './romaja';
import { storedGeminiProxy } from './settings';

const MODEL_CANDIDATES = [
  'gemini-3.8-flash',
  'gemini-3.7-flash',
  'gemini-3.6-flash',
  'gemini-3.5-flash',
  'gemini-flash-latest',
];

const AUDIO_MODEL_CANDIDATES = [
  'gemini-2.5-flash',
  'gemini-2.0-flash',
  'gemini-3.5-flash',
  'gemini-3.6-flash',
  'gemini-3.7-flash',
  'gemini-3.8-flash',
  'gemini-flash-latest',
];

interface GenerateOptions {
  audioFirst?: boolean;
  thinking?: boolean;
  fileRef?: { uri: string; mimeType: string };
}

type ContentPart =
  | { text: string }
  | { inline_data: { mime_type: string; data: string } }
  | { file_data: { mime_type: string; file_uri: string } };

const AUDIO_REQUEST_TIMEOUT_MS = 120_000;
const DEFAULT_REQUEST_TIMEOUT_MS = 45_000;

export class GeminiOcrError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'GeminiOcrError';
  }
}

export const missingApiKeyError = () =>
  new GeminiOcrError('Укажите ключ Gemini API, чтобы распознавать текст с фото.');

const invalidResponseError = () =>
  new GeminiOcrError('Gemini вернул неожиданный ответ.');

const networkResponseError = (cause?: string) =>
  new GeminiOcrError(
    cause ??
      'Не удалось связаться с Gemini. Проверьте интернет или вставьте текст песни вручную.'
  );

const invalidImageError = () =>
  new GeminiOcrError('Не удалось подготовить изображение для распознавания.');

const API_KEY_STORAGE = 'gemini_api_key';
const API_KEY_REMEMBER_STORAGE = 'gemini_api_key_remember';

let sessionApiKey = '';

export function storedApiKeyRemember(): boolean {
  try {
    const flag = localStorage.getItem(API_KEY_REMEMBER_STORAGE);
    if (flag === '0') return false;
    if (flag === '1') return true;
    // Legacy installs: persisted key before remember toggle existed.
    return Boolean(localStorage.getItem(API_KEY_STORAGE)?.trim());
  } catch {
    return false;
  }
}

function setApiKeyRemember(remember: boolean) {
  try {
    localStorage.setItem(API_KEY_REMEMBER_STORAGE, remember ? '1' : '0');
  } catch {
    // storage unavailable
  }
}

export function storedApiKey(): string {
  const session = sessionApiKey.trim();
  if (session) return session;
  if (!storedApiKeyRemember()) return '';
  try {
    return (localStorage.getItem(API_KEY_STORAGE) ?? '').trim();
  } catch {
    return '';
  }
}

export function resolvedApiKey(override?: string): string {
  const trimmed = (override ?? '').trim();
  if (trimmed && trimmed !== 'YOUR_GEMINI_API_KEY') return trimmed;
  const stored = storedApiKey();
  if (stored && stored !== 'YOUR_GEMINI_API_KEY') return stored;
  return '';
}

export function saveApiKey(key: string, remember = storedApiKeyRemember()) {
  const trimmed = key.trim();
  try {
    if (remember) {
      sessionApiKey = '';
      if (trimmed) localStorage.setItem(API_KEY_STORAGE, trimmed);
      else localStorage.removeItem(API_KEY_STORAGE);
      setApiKeyRemember(true);
      return;
    }
    sessionApiKey = trimmed;
    localStorage.removeItem(API_KEY_STORAGE);
    setApiKeyRemember(false);
  } catch {
    // storage unavailable
  }
}

export function clearApiKey() {
  sessionApiKey = '';
  try {
    localStorage.removeItem(API_KEY_STORAGE);
    setApiKeyRemember(false);
  } catch {
    // storage unavailable
  }
}

const HANGUL_REGEX = /[\uAC00-\uD7A3\u1100-\u11FF\u3130-\u318F]+/g;

export function extractKoreanWords(text: string): string[] {
  const matches = text.match(HANGUL_REGEX) ?? [];
  const seen = new Set<string>();
  const result: string[] = [];
  for (const m of matches) {
    const word = m.trim();
    if (word && !seen.has(word)) {
      seen.add(word);
      result.push(word);
    }
  }
  return result;
}

export async function recognizeVocabulary(image: File, apiKey: string): Promise<ScannedWord[]> {
  const trimmedKey = apiKey.trim();
  let lastError: Error = missingApiKeyError();

  if (trimmedKey) {
    try {
      const raw = await recognizeWithGemini(image, trimmedKey);
      const parsed = parseScannedVocabulary(raw);
      if (parsed.length > 0) return parsed;
    } catch (error) {
      lastError = error instanceof Error ? error : invalidResponseError();
    }
  }

  if (trimmedKey) {
    throw lastError;
  }
  throw missingApiKeyError();
}

export async function translateToRussian(
  words: string[],
  apiKey: string
): Promise<Record<string, string>> {
  const unique = Array.from(
    new Set(words.map((w) => w.trim()).filter((w) => w.length > 0))
  );
  if (unique.length === 0) return {};
  const trimmedKey = apiKey.trim();
  if (!trimmedKey) throw missingApiKeyError();

  const list = unique.map((w, i) => `${i + 1}. ${w}`).join('\n');
  const prompt = `Translate these Korean words and phrases into natural Russian.
Return ONLY a JSON array, no markdown, no commentary:
[{"korean":"커피","translation":"кофе"}]
If a word has several meanings, pick the most common everyday one.

Words:
${list}`;

  const raw = await generateWithFallback(trimmedKey, prompt, null, null);
  const parsed = parseScannedVocabulary(raw);
  const map: Record<string, string> = {};
  for (const item of parsed) {
    if (item.translation) {
      map[item.korean] = item.translation;
    }
  }
  return map;
}

export function parseScannedVocabulary(text: string): ScannedWord[] {
  const jsonPairs = parseJSONPairs(text);
  if (jsonPairs && jsonPairs.length > 0) return jsonPairs;

  const result: ScannedWord[] = [];
  const seen = new Set<string>();
  const separators = ['\t', ' | ', '|', ' — ', ' – ', ' - ', ' – ', ':', '：'];

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line) continue;

    let korean = '';
    let translation = '';
    for (const sep of separators) {
      const idx = line.indexOf(sep);
      if (idx >= 0) {
        korean = line.slice(0, idx).trim();
        translation = line.slice(idx + sep.length).trim();
        break;
      }
    }

    if (!korean) {
      const hangul = extractKoreanWords(line);
      const first = hangul[0];
      if (!first) continue;
      korean = first;
      translation = line
        .replace(first, '')
        .trim()
        .replace(/^[\s.,;:!?()–—-]+|[\s.,;:!?()–—-]+$/g, '');
    }

    if (!korean || !containsHangul(korean) || seen.has(korean)) continue;
    if (extractKoreanWords(translation).join('') === translation) {
      translation = '';
    }
    seen.add(korean);
    result.push({ korean, translation });
  }

  if (result.length === 0) {
    for (const word of extractKoreanWords(text)) {
      result.push({ korean: word, translation: '' });
    }
  }
  return result;
}

function parseJSONPairs(text: string): ScannedWord[] | null {
  const cleaned = text
    .replace(/```json/g, '')
    .replace(/```/g, '')
    .trim();
  const start = cleaned.indexOf('[');
  const end = cleaned.lastIndexOf(']');
  if (start < 0 || end < start) return null;
  const jsonSlice = cleaned.slice(start, end + 1);
  let array: unknown;
  try {
    array = JSON.parse(jsonSlice);
  } catch {
    return null;
  }
  if (!Array.isArray(array)) return null;

  const result: ScannedWord[] = [];
  const seen = new Set<string>();
  for (const item of array) {
    if (!item || typeof item !== 'object') continue;
    const obj = item as Record<string, unknown>;
    const korean =
      (typeof obj['korean'] === 'string' ? obj['korean'] : (typeof obj['word'] === 'string' ? obj['word'] : ''))
        .trim();
    const translation =
      (typeof obj['translation'] === 'string' ? obj['translation'] : (typeof obj['russian'] === 'string' ? obj['russian'] : ''))
        .trim();
    if (!korean || seen.has(korean)) continue;
    seen.add(korean);
    result.push({ korean, translation });
  }
  return result;
}

async function recognizeWithGemini(image: File, apiKey: string): Promise<string> {
  const jpegBase64 = await normalizedJPEG(image);
  const prompt = `This is a photo of a Korean notebook, textbook, sign or vocabulary list.
Extract every Korean Hangul word or short phrase.
If a Russian or English translation is written next to that word on the image, copy that translation exactly.
If no translation is visible for a word, leave translation as an empty string. Do not invent it.
Return ONLY a JSON array, no markdown, no commentary:
[{"korean":"커피","translation":"кофе"}]`;
  return generateWithFallback(apiKey, prompt, jpegBase64, null);
}

export async function generateGeminiText(
  apiKey: string,
  prompt: string,
  inlineData?: { mimeType: string; data: string } | null
): Promise<string> {
  const jpegBase64 =
    inlineData?.mimeType.startsWith('image/') ? inlineData.data : null;
  const audioBase64 =
    inlineData && !inlineData.mimeType.startsWith('image/') ? inlineData : null;
  return generateWithFallback(apiKey, prompt, jpegBase64, audioBase64);
}

export async function generateGeminiAudio(
  apiKey: string,
  prompt: string,
  audioInline: { mimeType: string; data: string }
): Promise<string> {
  return generateWithFallback(apiKey, prompt, null, audioInline, {
    audioFirst: true,
    thinking: false,
    models: AUDIO_MODEL_CANDIDATES,
  });
}

export async function generateGeminiAudioFromFile(
  apiKey: string,
  prompt: string,
  fileUri: string,
  mimeType: string
): Promise<string> {
  return generateWithFallback(apiKey, prompt, null, null, {
    audioFirst: true,
    thinking: false,
    models: AUDIO_MODEL_CANDIDATES,
    fileRef: { uri: fileUri, mimeType },
  });
}

async function generateWithFallback(
  apiKey: string,
  prompt: string,
  jpegBase64: string | null,
  audioInline?: { mimeType: string; data: string } | null,
  options: GenerateOptions & { models?: string[] } = {}
): Promise<string> {
  const models = options.models ?? (audioInline ? AUDIO_MODEL_CANDIDATES : MODEL_CANDIDATES);
  let lastError: Error = invalidResponseError();
  for (const model of models) {
    try {
      return await generateContent(model, apiKey, prompt, jpegBase64, audioInline, options);
    } catch (error) {
      lastError = error instanceof Error ? error : invalidResponseError();
    }
  }
  throw lastError;
}

async function generateContent(
  model: string,
  apiKey: string,
  prompt: string,
  jpegBase64: string | null,
  audioInline?: { mimeType: string; data: string } | null,
  options: GenerateOptions = {}
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const isAudioRequest = !!audioInline || !!options.fileRef;
  let mediaPart: ContentPart | null = null;

  if (jpegBase64) {
    mediaPart = { inline_data: { mime_type: 'image/jpeg', data: jpegBase64 } };
  } else if (options.fileRef) {
    mediaPart = {
      file_data: {
        mime_type: options.fileRef.mimeType,
        file_uri: options.fileRef.uri,
      },
    };
  } else if (audioInline) {
    mediaPart = { inline_data: { mime_type: audioInline.mimeType, data: audioInline.data } };
  }

  const parts: ContentPart[] = [];
  if (mediaPart && options.audioFirst) {
    parts.push(mediaPart, { text: prompt });
  } else {
    parts.push({ text: prompt });
    if (mediaPart) parts.push(mediaPart);
  }

  const useThinking = options.thinking ?? !isAudioRequest;
  const body: Record<string, unknown> = {
    contents: [{ parts }],
  };
  if (useThinking) {
    body.generationConfig = {
      thinkingConfig: { thinkingLevel: 'low' },
    };
  }

  const controller = new AbortController();
  const timeoutMs = isAudioRequest ? AUDIO_REQUEST_TIMEOUT_MS : DEFAULT_REQUEST_TIMEOUT_MS;
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  // Audio/file requests bypass proxy: Vercel proxy limits body to ~4.5 MB and times out at 30s.
  const proxyUrl = isAudioRequest ? '' : storedGeminiProxy();
  let response: Response;
  try {
    if (proxyUrl) {
      response = await fetch(proxyUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model, key: apiKey, body }),
        signal: controller.signal,
      });
    } else {
      response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
    }
  } catch (error) {
    clearTimeout(timeout);
    const aborted = error instanceof Error && error.name === 'AbortError';
    throw networkResponseError(
      aborted
        ? 'Распознавание аудио заняло слишком много времени. Попробуйте короче фрагмент или вставьте текст вручную.'
        : undefined
    );
  }
  clearTimeout(timeout);

  if (!response.ok) {
    throw new GeminiOcrError(humanReadableAPIError(await response.text(), response.status, model));
  }

  const data = await response.json().catch(() => null);
  const text = extractText(data);
  if (text) return text;
  throw new GeminiOcrError(describeResponseFailure(data));
}

function extractText(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const root = data as {
    candidates?: Array<{
      content?: { parts?: Array<{ text?: string; thought?: boolean }> };
    }>;
  };
  const candidates = root.candidates;
  if (!candidates?.length) return null;
  for (const candidate of candidates) {
    const parts = candidate.content?.parts;
    if (!parts?.length) continue;
    const text = parts
      .filter((part) => !part.thought)
      .map((part) => part.text ?? '')
      .join('\n')
      .trim();
    if (text) return text;
  }
  return null;
}

function describeResponseFailure(data: unknown): string {
  if (!data || typeof data !== 'object') {
    return 'Gemini вернул пустой ответ. Попробуйте вставить текст песни вручную.';
  }
  const root = data as {
    promptFeedback?: { blockReason?: string; blockReasonMessage?: string };
    candidates?: Array<{ finishReason?: string; finishMessage?: string }>;
  };
  const block = root.promptFeedback?.blockReason;
  if (block) {
    const detail = root.promptFeedback?.blockReasonMessage;
    return detail
      ? `Запрос заблокирован (${block}): ${detail}`
      : `Запрос заблокирован: ${block}. Вставьте текст песни вручную.`;
  }
  const finish = root.candidates?.[0]?.finishReason;
  if (finish && finish !== 'STOP') {
    const msg = root.candidates?.[0]?.finishMessage;
    return msg
      ? `Gemini не смог обработать аудио (${finish}): ${msg}`
      : `Gemini не смог обработать аудио (${finish}). Вставьте текст песни вручную.`;
  }
  return 'Gemini вернул ответ без текста. Попробуйте другой файл или вставьте текст вручную.';
}

function humanReadableAPIError(payload: string, status: number, model: string): string {
  let message = '';
  let statusName = '';
  try {
    const json = JSON.parse(payload) as { error?: { message?: string; status?: string } };
    message = json.error?.message ?? '';
    statusName = json.error?.status ?? '';
  } catch {
    // ignore parse errors
  }

  if (status === 404 || statusName === 'NOT_FOUND') {
    return `Модель ${model} недоступна. Пробую другую или локальное распознавание.`;
  }
  if (
    status === 400 ||
    status === 401 ||
    status === 403 ||
    statusName === 'UNAUTHENTICATED' ||
    statusName === 'PERMISSION_DENIED'
  ) {
    if (message) return `Ключ Gemini отклонён: ${message}`;
    return 'Ключ Gemini отклонён. Проверьте ключ в AI Studio (обычно начинается с AIza).';
  }
  if (status === 429) {
    return 'Превышен лимит Gemini. Подождите немного или используйте локальное распознавание.';
  }
  if (message) return message;
  return `Ошибка Gemini (${status})`;
}

async function normalizedJPEG(image: File): Promise<string> {
  const bitmap = await createImageBitmap(image).catch(() => null);
  if (!bitmap) throw invalidImageError();

  const canvas = document.createElement('canvas');
  const maxSide = 1600;
  const longest = Math.max(bitmap.width, bitmap.height);
  const scale = longest > maxSide ? maxSide / longest : 1;
  canvas.width = Math.max(1, Math.round(bitmap.width * scale));
  canvas.height = Math.max(1, Math.round(bitmap.height * scale));
  const ctx = canvas.getContext('2d');
  if (!ctx) throw invalidImageError();
  ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
  bitmap.close();

  return canvas.toDataURL('image/jpeg', 0.8).replace(/^data:image\/jpeg;base64,/, '');
}