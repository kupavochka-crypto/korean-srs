import type { LearningLanguage, ScannedWord } from '../types';
import { extractKoreanWords, translateToRussian } from './gemini-ocr';
import { translateText } from './translate';
import { storedMymemoryEmail } from './settings';

export type SongTranslateProvider = 'gemini' | 'mymemory' | 'auto';

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function translateWordsMyMemory(
  words: string[],
  learningLanguage: LearningLanguage,
  email?: string
): Promise<Record<string, string>> {
  const from = learningLanguage === 'zh' ? ('zh-CN' as const) : ('ko' as const);
  const map: Record<string, string> = {};
  const accountEmail = email ?? storedMymemoryEmail();

  for (const word of words) {
    try {
      const result = await translateText(word, from, 'ru', accountEmail);
      map[word] = result.text;
    } catch {
      map[word] = '';
    }
    await sleep(320);
  }
  return map;
}

async function translateWordsGemini(
  words: string[],
  apiKey: string
): Promise<Record<string, string>> {
  return translateToRussian(words, apiKey);
}

export async function translateSongWords(
  words: string[],
  provider: SongTranslateProvider,
  opts: {
    apiKey?: string;
    learningLanguage: LearningLanguage;
    email?: string;
  }
): Promise<Record<string, string>> {
  const unique = Array.from(new Set(words.map((w) => w.trim()).filter(Boolean)));
  if (unique.length === 0) return {};

  const key = opts.apiKey?.trim() ?? '';
  let primary: SongTranslateProvider =
    provider === 'auto' ? (key ? 'gemini' : 'mymemory') : provider;
  let fallback: SongTranslateProvider | null =
    provider === 'auto' ? (key ? 'mymemory' : 'gemini') : null;

  if (primary === 'gemini' && !key) {
    primary = 'mymemory';
    fallback = null;
  }

  async function run(p: SongTranslateProvider): Promise<Record<string, string>> {
    if (p === 'gemini') return translateWordsGemini(unique, key);
    return translateWordsMyMemory(unique, opts.learningLanguage, opts.email);
  }

  try {
    const map = await run(primary);
    const missing = unique.filter((w) => !map[w]?.trim());
    if (missing.length > 0 && fallback) {
      const extra = await run(fallback);
      for (const w of missing) {
        if (extra[w]?.trim()) map[w] = extra[w];
      }
    }
    return map;
  } catch (primaryError) {
    if (!fallback) throw primaryError;
    return run(fallback);
  }
}

export async function extractVocabularyFromLyrics(
  lyrics: string,
  provider: SongTranslateProvider,
  opts: {
    apiKey?: string;
    learningLanguage: LearningLanguage;
    email?: string;
  }
): Promise<ScannedWord[]> {
  const words = extractKoreanWords(lyrics);
  if (words.length === 0) return [];

  const translations = await translateSongWords(words, provider, opts);
  return words.map((korean) => ({
    korean,
    translation: translations[korean] || '',
  }));
}
