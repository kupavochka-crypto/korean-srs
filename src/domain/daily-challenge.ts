import type { Pack, Word } from '../types';

export function dayOfYear(date: Date): number {
  const start = new Date(date.getFullYear(), 0, 0);
  return Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
}

export function dailyChallengePack(packs: Pack[], date: Date = new Date()): Pack | null {
  if (packs.length === 0) return null;
  const dated = packs.filter((p) => p.releaseDate);
  const today = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const released = dated.find((p) => p.releaseDate === today);
  if (released) return released;
  return packs[dayOfYear(date) % packs.length];
}

export function packImportedCount(pack: Pack, koreanSet: Set<string>): { imported: number; total: number } {
  const total = pack.wordDefs.length;
  const imported = pack.wordDefs.filter((d) => koreanSet.has(d.korean)).length;
  return { imported, total };
}

export function packFullyImported(pack: Pack, koreanSet: Set<string>): boolean {
  const { imported, total } = packImportedCount(pack, koreanSet);
  return total > 0 && imported === total;
}

export function packReviewed(pack: Pack, words: { korean: string; totalReviews: number }[]): boolean {
  const set = new Set(pack.wordDefs.map((d) => d.korean));
  const packWords = words.filter((w) => set.has(w.korean));
  return packWords.length > 0 && packWords.every((w) => w.totalReviews >= 1);
}

export function dailyChallengePackId(packs: Pack[], date: Date = new Date()): string | null {
  return dailyChallengePack(packs, date)?.id ?? null;
}

export function packCompletionRatio(pack: Pack, words: Word[]): number {
  if (pack.wordDefs.length === 0) return 0;
  const koreanSet = new Set(words.map((w) => w.korean));
  return packImportedCount(pack, koreanSet).imported / pack.wordDefs.length;
}

export function isPackCompleted(pack: Pack, words: Word[]): boolean {
  const koreanSet = new Set(words.map((w) => w.korean));
  return packFullyImported(pack, koreanSet) && packReviewed(pack, words);
}

export function activeMissionPack(
  packs: Pack[],
  selectedPackId: string | null | undefined,
  date: Date = new Date()
): Pack | null {
  if (packs.length === 0) return null;
  const trimmed = selectedPackId?.trim();
  if (trimmed) {
    const picked = packs.find((p) => p.id === trimmed);
    if (picked) return picked;
  }
  return dailyChallengePack(packs, date);
}

export function isMissionCompleted(
  pack: Pack,
  words: Word[],
  completedPackIds: Set<string>
): boolean {
  return completedPackIds.has(pack.id) || isPackCompleted(pack, words);
}

/** Active missions only — incomplete first, then by least progress */
export function availableMissionPacks(
  packs: Pack[],
  words: Word[],
  completedPackIds: Set<string>,
  date: Date = new Date()
): Pack[] {
  const open = packs.filter((p) => !isMissionCompleted(p, words, completedPackIds));
  return suggestedMissionPacks(open, words, date);
}

export function completedMissionPacks(
  packs: Pack[],
  words: Word[],
  completedPackIds: Set<string>
): Pack[] {
  return packs
    .filter((p) => isMissionCompleted(p, words, completedPackIds))
    .sort((a, b) => a.title.localeCompare(b.title, 'ru'));
}

export function nextMissionPack(
  packs: Pack[],
  words: Word[],
  completedPackIds: Set<string>,
  currentPackId: string | null | undefined,
  date: Date = new Date()
): Pack | null {
  const open = packs.filter((p) => !isMissionCompleted(p, words, completedPackIds));
  const ordered = suggestedMissionPacks(open.length > 0 ? open : packs, words, date);
  if (ordered.length === 0) return null;
  const idx = currentPackId ? ordered.findIndex((p) => p.id === currentPackId) : -1;
  return ordered[(idx + 1) % ordered.length];
}

/** Incomplete packs first, then by least progress — for mission picker */
export function suggestedMissionPacks(
  packs: Pack[],
  words: Word[],
  date: Date = new Date()
): Pack[] {
  const daily = dailyChallengePack(packs, date);
  const koreanSet = new Set(words.map((w) => w.korean));
  const scored = packs.map((pack) => {
    const { imported, total } = packImportedCount(pack, koreanSet);
    const ratio = total > 0 ? imported / total : 0;
    const complete = ratio >= 1;
    return { pack, ratio, complete };
  });
  scored.sort((a, b) => {
    if (a.complete !== b.complete) return a.complete ? 1 : -1;
    if (a.ratio !== b.ratio) return a.ratio - b.ratio;
    if (daily && a.pack.id === daily.id) return -1;
    if (daily && b.pack.id === daily.id) return 1;
    return a.pack.title.localeCompare(b.pack.title, 'ru');
  });
  return scored.map((s) => s.pack);
}
