import type { Pack, PackWordDef } from '../types';

export type MissionWordCount = 10 | 20 | 30 | 50 | 100 | 'all';

export const MISSION_WORD_COUNT_OPTIONS: readonly MissionWordCount[] = [
  10,
  20,
  30,
  50,
  100,
  'all',
];

export const DEFAULT_MISSION_WORD_COUNT: MissionWordCount = 10;

export function isMissionWordCount(value: unknown): value is MissionWordCount {
  return (
    value === 'all' ||
    value === 10 ||
    value === 20 ||
    value === 30 ||
    value === 50 ||
    value === 100
  );
}

export function missionWordLimit(count: MissionWordCount): number | null {
  return count === 'all' ? null : count;
}

export function pickPackWordDefs(pack: Pack, count: MissionWordCount): PackWordDef[] {
  const limit = missionWordLimit(count);
  if (limit === null || limit >= pack.wordDefs.length) return pack.wordDefs;
  return pack.wordDefs.slice(0, limit);
}

export function maxPackWordCount(packs: Pack[]): number {
  if (packs.length === 0) return 0;
  return Math.max(...packs.map((pack) => pack.wordDefs.length));
}

export function isWordCountOptionAvailable(
  option: MissionWordCount,
  maxPackWords: number
): boolean {
  if (option === 'all') return maxPackWords > 0;
  return option <= maxPackWords;
}

export function effectiveWordCount(count: MissionWordCount, packTotal: number): number {
  if (count === 'all') return packTotal;
  return Math.min(count, packTotal);
}

export function packSessionStats(
  pack: Pack,
  koreanSet: Set<string>,
  count: MissionWordCount
): { imported: number; total: number; packTotal: number; chosen: number } {
  const defs = pickPackWordDefs(pack, count);
  const packTotal = pack.wordDefs.length;
  const chosen = count === 'all' ? packTotal : count;
  return {
    imported: defs.filter((d) => koreanSet.has(d.korean)).length,
    total: defs.length,
    packTotal,
    chosen,
  };
}
