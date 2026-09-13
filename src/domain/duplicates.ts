import type { Word } from '../types';

export function normalizeLemma(value: string): string {
  return value.trim().normalize('NFC');
}

export function normalizeTranslation(value: string): string {
  return value.trim().toLowerCase().normalize('NFC');
}

export function findWordByKorean(words: Word[], korean: string): Word | undefined {
  const key = normalizeLemma(korean);
  if (!key) return undefined;
  return words.find((w) => normalizeLemma(w.korean) === key);
}

export function findWordByTranslation(words: Word[], translation: string): Word | undefined {
  const key = normalizeTranslation(translation);
  if (!key) return undefined;
  return words.find((w) => normalizeTranslation(w.translation) === key);
}

export function findDuplicate(
  words: Word[],
  korean: string,
  translation?: string
): Word | undefined {
  return findWordByKorean(words, korean) ?? (translation ? findWordByTranslation(words, translation) : undefined);
}
