import type { ImportedWordDraft, Word } from '../types';
import { wordHasCategory } from './categories';

export type WordImportStatus = 'new' | 'known' | 'inSongCategory';

export interface ClassifiedDraft extends ImportedWordDraft {
  status: WordImportStatus;
  existingWord?: Word;
}

export function dedupeDrafts(drafts: ImportedWordDraft[]): ImportedWordDraft[] {
  const seen = new Set<string>();
  const result: ImportedWordDraft[] = [];
  for (const draft of drafts) {
    const korean = draft.korean.trim();
    if (!korean || seen.has(korean)) continue;
    seen.add(korean);
    result.push({
      korean,
      translation: draft.translation.trim(),
      categoryIds: draft.categoryIds ?? [],
    });
  }
  return result;
}

export function classifyDrafts(
  drafts: ImportedWordDraft[],
  allWords: Word[],
  categoryIdForSong: string | null
): ClassifiedDraft[] {
  const byKorean = new Map<string, Word>();
  for (const word of allWords) {
    byKorean.set(word.korean, word);
  }

  return dedupeDrafts(drafts).map((draft) => {
    const existing = byKorean.get(draft.korean);
    if (!existing) {
      return { ...draft, status: 'new' as const };
    }
    if (categoryIdForSong && wordHasCategory(existing, categoryIdForSong)) {
      return { ...draft, status: 'inSongCategory' as const, existingWord: existing };
    }
    return { ...draft, status: 'known' as const, existingWord: existing };
  });
}

export function countByStatus(items: ClassifiedDraft[]): {
  newCount: number;
  knownCount: number;
  inSongCount: number;
} {
  let newCount = 0;
  let knownCount = 0;
  let inSongCount = 0;
  for (const item of items) {
    if (item.status === 'new') newCount += 1;
    else if (item.status === 'inSongCategory') inSongCount += 1;
    else knownCount += 1;
  }
  return { newCount, knownCount, inSongCount };
}
