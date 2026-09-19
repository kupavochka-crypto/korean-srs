import type { Pack, Word } from '../types';
import { isMissionCompleted } from './daily-challenge';

export const MISSION_SLOT_COUNT = 7;

export function missionCandidatePool(
  packs: Pack[],
  words: Word[],
  completedPackIds: Set<string>
): Pack[] {
  return packs.filter((pack) => !isMissionCompleted(pack, words, completedPackIds));
}

export function resolveVisibleMissions(packs: Pack[], visibleIds: string[]): Pack[] {
  const byId = new Map(packs.map((pack) => [pack.id, pack]));
  return visibleIds.map((id) => byId.get(id)).filter((pack): pack is Pack => !!pack);
}

export function pickMissionSlots(
  pool: Pack[],
  count: number,
  excludeIds: Set<string>
): Pack[] {
  let candidates = pool.filter((pack) => !excludeIds.has(pack.id));
  if (candidates.length < count) {
    candidates = pool.filter((pack) => !excludeIds.has(pack.id));
  }
  const shuffled = [...candidates].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}

export function ensureVisibleMissionIds(
  pool: Pack[],
  storedIds: string[],
  count = MISSION_SLOT_COUNT
): string[] {
  const poolById = new Map(pool.map((pack) => [pack.id, pack]));
  const valid = storedIds.filter((id) => poolById.has(id)).slice(0, count);
  if (valid.length >= count) return valid;

  const exclude = new Set(valid);
  const add = pickMissionSlots(pool, count - valid.length, exclude).map((pack) => pack.id);
  return [...valid, ...add].slice(0, count);
}

export function rotateVisibleMissionIds(
  pool: Pack[],
  currentIds: string[],
  count = MISSION_SLOT_COUNT
): string[] {
  const exclude = new Set(currentIds);
  const next = pickMissionSlots(pool, count, exclude);
  if (next.length >= count) return next.map((pack) => pack.id);
  return pickMissionSlots(pool, count, new Set()).map((pack) => pack.id);
}
