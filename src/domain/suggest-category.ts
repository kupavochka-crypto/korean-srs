import type { Category, CategorySuggestion, Word } from '../types';
import { normalizeLemma, normalizeTranslation } from './duplicates';

export interface SuggestContext {
  words: Word[];
  categories: Category[];
  recentCategoryIds?: string[];
  contextCategoryId?: string | null;
  contextTitle?: string | null;
}

function tokens(text: string): string[] {
  return normalizeTranslation(text)
    .split(/[\s,./;:!?()[\]«»"'`]+/)
    .filter((t) => t.length >= 2);
}

function firstChar(text: string): string {
  return normalizeLemma(text).charAt(0);
}

export function suggestCategories(
  input: { korean: string; translation: string },
  ctx: SuggestContext
): CategorySuggestion[] {
  const scored = new Map<string, CategorySuggestion>();

  function add(s: CategorySuggestion) {
    if (!s.name.trim()) return;
    const key = s.categoryId ?? `create:${s.name.toLowerCase()}`;
    const prev = scored.get(key);
    if (!prev || s.score > prev.score) scored.set(key, s);
  }

  if (ctx.contextCategoryId) {
    const cat = ctx.categories.find((c) => c.id === ctx.contextCategoryId);
    if (cat) {
      add({
        categoryId: cat.id,
        name: cat.name,
        emoji: cat.emoji,
        reason: 'context',
        score: 100,
      });
    }
  }

  if (ctx.contextTitle) {
    const existing = ctx.categories.find(
      (c) => c.name.toLowerCase() === ctx.contextTitle!.trim().toLowerCase()
    );
    if (existing) {
      add({
        categoryId: existing.id,
        name: existing.name,
        emoji: existing.emoji,
        reason: 'batch',
        score: 90,
      });
    } else {
      add({
        categoryId: null,
        name: ctx.contextTitle.trim(),
        reason: 'create',
        score: 85,
      });
    }
  }

  for (const [i, id] of (ctx.recentCategoryIds ?? []).entries()) {
    const cat = ctx.categories.find((c) => c.id === id);
    if (cat) {
      add({
        categoryId: cat.id,
        name: cat.name,
        emoji: cat.emoji,
        reason: 'recent',
        score: 70 - i * 5,
      });
    }
  }

  const inTokens = new Set(tokens(input.translation));
  const inChar = firstChar(input.korean);
  const neighborCounts = new Map<string, number>();
  for (const w of ctx.words) {
    if (!w.categoryId) continue;
    let hit = 0;
    if (inChar && firstChar(w.korean) === inChar) hit += 1;
    for (const tok of tokens(w.translation)) {
      if (inTokens.has(tok)) hit += 2;
    }
    if (hit > 0) neighborCounts.set(w.categoryId, (neighborCounts.get(w.categoryId) ?? 0) + hit);
  }
  for (const [id, score] of neighborCounts) {
    const cat = ctx.categories.find((c) => c.id === id);
    if (cat) {
      add({
        categoryId: cat.id,
        name: cat.name,
        emoji: cat.emoji,
        reason: 'neighbor',
        score: 40 + Math.min(20, score),
      });
    }
  }

  const freq = new Map<string, number>();
  for (const w of ctx.words) {
    if (!w.categoryId) continue;
    freq.set(w.categoryId, (freq.get(w.categoryId) ?? 0) + 1);
  }
  const top = [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, 3);
  for (const [id, count] of top) {
    const cat = ctx.categories.find((c) => c.id === id);
    if (cat) {
      add({
        categoryId: cat.id,
        name: cat.name,
        emoji: cat.emoji,
        reason: 'frequent',
        score: 20 + Math.min(10, count),
      });
    }
  }

  return [...scored.values()].sort((a, b) => b.score - a.score).slice(0, 6);
}
