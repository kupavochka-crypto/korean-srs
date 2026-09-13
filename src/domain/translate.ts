import type { LearningLanguage, TranslateLang } from '../types';

const MYMEMORY_URL = 'https://api.mymemory.translated.net/get';
const MAX_BYTES = 500;

export type TranslateErrorCode = 'quota' | 'network' | 'empty' | 'too_long' | 'unknown';

export class TranslateError extends Error {
  code: TranslateErrorCode;
  constructor(code: TranslateErrorCode, message: string) {
    super(message);
    this.code = code;
  }
}

export interface TranslateResult {
  text: string;
  from: TranslateLang;
  to: TranslateLang;
}

function byteLength(text: string): number {
  return new TextEncoder().encode(text).length;
}

export function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export async function translateText(
  text: string,
  from: TranslateLang,
  to: TranslateLang,
  email?: string | null
): Promise<TranslateResult> {
  const q = text.trim();
  if (!q) throw new TranslateError('empty', 'empty');
  if (byteLength(q) > MAX_BYTES) throw new TranslateError('too_long', 'too_long');

  const params = new URLSearchParams({
    q,
    langpair: `${from}|${to}`,
  });
  const trimmedEmail = email?.trim();
  if (trimmedEmail && isValidEmail(trimmedEmail)) {
    params.set('de', trimmedEmail);
  }

  let json: {
    responseStatus?: number;
    responseData?: { translatedText?: string };
    quotaFinished?: boolean;
    exception_code?: string | number;
  };
  try {
    const res = await fetch(`${MYMEMORY_URL}?${params.toString()}`);
    json = await res.json();
  } catch {
    throw new TranslateError('network', 'network');
  }

  const translated = json.responseData?.translatedText?.trim() ?? '';
  const raw = `${json.exception_code ?? ''} ${translated}`.toUpperCase();
  if (json.quotaFinished || raw.includes('QUOTA') || (json.responseStatus ?? 200) === 429) {
    throw new TranslateError('quota', 'quota');
  }
  if (!translated || json.responseStatus === 403) {
    throw new TranslateError('unknown', 'unknown');
  }

  return { text: translated, from, to };
}

export function translateDirection(learningLanguage: LearningLanguage): {
  from: TranslateLang;
  to: TranslateLang;
  reverse: { from: TranslateLang; to: TranslateLang };
} {
  const from: TranslateLang = learningLanguage === 'zh' ? 'zh-CN' : 'ko';
  const to: TranslateLang = 'ru';
  return {
    from,
    to,
    reverse: { from: to, to: from },
  };
}
