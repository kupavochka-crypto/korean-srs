import type { LearningLanguage, Word } from '../types';

export function categoryLookupKey(name: string, lang: LearningLanguage = 'ko'): string {
  return `${lang}:${name.trim().normalize('NFC').toLowerCase()}`;
}

export function wordCategoryIds(word: Word): string[] {
  return word.categoryIds ?? [];
}

export function wordHasCategory(word: Word, categoryId: string): boolean {
  return wordCategoryIds(word).includes(categoryId);
}

export function mergeCategoryIds(...lists: (string[] | undefined)[]): string[] {
  const set = new Set<string>();
  for (const list of lists) {
    for (const id of list ?? []) {
      if (id) set.add(id);
    }
  }
  return [...set];
}

export const CATEGORY_EMOJI_OPTIONS = ['📌', '🍱', '✈️', '💼', '📚', '💬', '😊', '🌿', '🎯', '🎁', '🏠', '⭐'];
export const CATEGORY_COLOR_OPTIONS = [
  '#E53935',
  '#FB8C00',
  '#00897B',
  '#1E88E5',
  '#8E24AA',
  '#43A047',
  '#F06292',
  '#558B2F',
  '#5E35B1',
  '#00ACC1',
];

export function pickCategoryStyle(seed: string): { emoji: string; colorHex: string } {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash + seed.charCodeAt(i) * (i + 1)) % 1000;
  }
  return {
    emoji: CATEGORY_EMOJI_OPTIONS[hash % CATEGORY_EMOJI_OPTIONS.length],
    colorHex: CATEGORY_COLOR_OPTIONS[hash % CATEGORY_COLOR_OPTIONS.length],
  };
}
