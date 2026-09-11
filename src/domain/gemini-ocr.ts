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

const invalidImageError = () =>
  new GeminiOcrError('Не удалось подготовить изображение для распознавания.');

const API_KEY_STORAGE = 'gemini_api_key';

export function storedApiKey(): string {
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

export function saveApiKey(key: string) {
  try {
    localStorage.setItem(API_KEY_STORAGE, key.trim());
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

  const raw = await generateWithFallback(trimmedKey, prompt, null);
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
  return generateWithFallback(apiKey, prompt, jpegBase64);
}

async function generateWithFallback(
  apiKey: string,
  prompt: string,
  jpegBase64: string | null
): Promise<string> {
  let lastError: Error = invalidResponseError();
  for (const model of MODEL_CANDIDATES) {
    try {
      return await generateContent(model, apiKey, prompt, jpegBase64);
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
  jpegBase64: string | null
): Promise<string> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`;
  const parts: Array<{ text?: string; inline_data?: { mime_type: string; data: string } }> = [
    { text: prompt },
  ];
  if (jpegBase64) {
    parts.push({ inline_data: { mime_type: 'image/jpeg', data: jpegBase64 } });
  }
  const body = {
    contents: [{ parts }],
    generationConfig: {
      thinkingConfig: { thinkingLevel: 'low' },
    },
  };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 45000);

  const proxyUrl = storedGeminiProxy();
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
  } catch {
    clearTimeout(timeout);
    throw invalidResponseError();
  }
  clearTimeout(timeout);

  if (!response.ok) {
    throw new GeminiOcrError(humanReadableAPIError(await response.text(), response.status, model));
  }

  const data = await response.json().catch(() => null);
  const text = extractText(data);
  if (text) return text;
  throw invalidResponseError();
}

function extractText(data: unknown): string | null {
  if (!data || typeof data !== 'object') return null;
  const root = data as { candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }> };
  const candidates = root.candidates;
  if (!candidates) return null;
  for (const candidate of candidates) {
    const parts = candidate.content?.parts;
    if (!parts) continue;
    const text = parts.map((p) => p.text ?? '').join('\n').trim();
    if (text) return text;
  }
  return null;
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