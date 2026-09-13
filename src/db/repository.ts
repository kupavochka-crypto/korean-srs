import { db, newId } from './schema';
import type {
  Achievement,
  Category,
  DailyActivity,
  ImportedWordDraft,
  LearningLanguage,
  Pack,
  Phrase,
  Progression,
  ReviewRecord,
  Source,
  Word,
} from '../types';
import { hanziToReading } from '../domain/pinyin';
import {
  ALL_PHRASE_DEFS,
  BTS_PHRASE_PACK_ID,
  SKZ_PHRASE_PACK_ID,
  seedAllPhrases,
  seedPhrasesFromDefs,
} from '../domain/phrases';
import { DEFAULT_CATEGORIES, NOTEBOOK_WORDS } from '../domain/seed-data';
import { toRomaja } from '../domain/romaja';
import { allSeedSources } from '../domain/sources';
import { allSeedPacks } from '../domain/packs';
import { achievementDefs } from '../domain/gamification';
import { calculateNextReview, type SrsRatingValue } from '../domain/srs-engine';

export const MASTERED_INTERVAL_DAYS = 21;

function dateString(date: number): string {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function startOfToday(): number {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d.getTime();
}

export async function ensureDefaultCategories(): Promise<void> {
  const count = await db.categories.count();
  if (count > 0) return;
  const now = Date.now();
  await db.categories.bulkAdd(
    DEFAULT_CATEGORIES.map((c, i) => ({
      id: newId(),
      name: c.name,
      colorHex: c.colorHex,
      emoji: c.emoji,
      createdAt: now + i,
      isDefault: true,
    }))
  );
}

export async function ensureNotebookWords(): Promise<void> {
  const count = await db.words.count();
  if (count > 0) return;
  const categories = await db.categories.toArray();
  const now = Date.now();
  const words: Word[] = NOTEBOOK_WORDS.map((item, i) => {
    const category = categories.find((c) => c.name === item.categoryName);
    return {
      id: newId(),
      korean: item.korean,
      hanja: null,
      romaja: toRomaja(item.korean),
      translation: item.translation,
      exampleSentence: null,
      exampleTranslation: null,
      categoryId: category?.id ?? null,
      sourceId: null,
      tags: [],
      difficulty: 'Начальный',
      createdAt: now + i,
      intervalDays: 0,
      easeFactor: 2.5,
      repetitions: 0,
      nextReviewAt: now,
      lastResult: null,
      totalReviews: 0,
      correctReviews: 0,
      masteredAt: null,
      language: 'ko',
      pinyin: null,
      tones: null,
    };
  });
  await db.words.bulkAdd(words);
}

export function normalizeKorean(text: string): string {
  return text.trim().normalize('NFC').replace(/\s+/g, '');
}

export async function findWordByKorean(korean: string): Promise<Word | undefined> {
  const norm = normalizeKorean(korean);
  if (!norm) return undefined;
  const all = await db.words.toArray();
  return all.find((w) => normalizeKorean(w.korean) === norm);
}

export async function findSimilarByTranslation(translation: string): Promise<Word | undefined> {
  const norm = translation.trim().toLowerCase();
  if (!norm) return undefined;
  const all = await db.words.toArray();
  return all.find((w) => w.translation.trim().toLowerCase() === norm);
}

export async function initialize(): Promise<void> {
  await ensureDefaultCategories();
  await ensureNotebookWords();
  await ensureSeedSources();
  await ensureSeedPacks();
  await ensureSeedPhrases();
  await ensureAchievements();
  await backfillMasteredAt();
  await backfillWordLanguage();
  await migrateProgressionProfiles();
}

export async function backfillWordLanguage(): Promise<void> {
  const words = await db.words.toArray();
  const patches = words.filter((w) => !w.language).map((w) => ({ ...w, language: 'ko' as const }));
  if (patches.length > 0) await db.words.bulkPut(patches);
}

export async function migrateProgressionProfiles(): Promise<void> {
  const main = await db.progression.get('main');
  if (main) {
    await db.progression.put({ ...main, id: 'ko' });
    await db.progression.delete('main');
  }
  if (!(await db.progression.get('ko'))) {
    await db.progression.put({ id: 'ko', xp: 0, rewardedMissionDate: null, completedPackIds: [] });
  }
  if (!(await db.progression.get('zh'))) {
    await db.progression.put({ id: 'zh', xp: 0, rewardedMissionDate: null, completedPackIds: [] });
  }
}

export async function ensureSeedPhrases(): Promise<void> {
  const count = await db.phrases.count();
  if (count === 0) {
    await db.phrases.bulkAdd(seedAllPhrases());
    return;
  }

  let all = await db.phrases.toArray();
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const p of all) {
    if (seen.has(p.korean)) dups.push(p.id);
    else seen.add(p.korean);
  }
  if (dups.length > 0) await db.phrases.bulkDelete(dups);

  const existingKoreans = new Set(all.map((p) => p.korean));
  const missingDefs = ALL_PHRASE_DEFS.filter((def) => !existingKoreans.has(def.korean));
  if (missingDefs.length > 0) {
    await db.phrases.bulkAdd(seedPhrasesFromDefs(missingDefs, Date.now()));
    all = await db.phrases.toArray();
  }

  const sourceByKorean = new Map(
    ALL_PHRASE_DEFS.map((def) => [
      def.korean,
      def.sourcePackId ?? (def.themeId === 'stray-kids' ? SKZ_PHRASE_PACK_ID : BTS_PHRASE_PACK_ID),
    ])
  );
  for (const phrase of all) {
    const nextPackId = sourceByKorean.get(phrase.korean);
    if (!nextPackId || phrase.sourcePackId === nextPackId) continue;
    if (
      !phrase.sourcePackId ||
      phrase.sourcePackId === BTS_PHRASE_PACK_ID ||
      phrase.sourcePackId === SKZ_PHRASE_PACK_ID
    ) {
      await db.phrases.update(phrase.id, { sourcePackId: nextPackId });
    }
  }
}

export async function allPhrases(): Promise<Phrase[]> {
  return db.phrases.orderBy('createdAt').toArray();
}

export async function ensureSeedPacks(): Promise<void> {
  const existing = await db.packs.toArray();
  const ids = new Set(existing.map((p) => p.id));
  const missing = allSeedPacks().filter((p) => !ids.has(p.id));
  if (missing.length > 0) await db.packs.bulkAdd(missing);
}

export async function allPacks(): Promise<Pack[]> {
  return db.packs.orderBy('createdAt').toArray();
}

export async function addPackWords(pack: Pack): Promise<number> {
  const existing = await db.words.toArray();
  const koreanSet = new Set(existing.map((w) => w.korean));
  const category = await findOrCreateCategory(pack.title, pack.emoji, pack.colorHex);
  const now = Date.now();
  let added = 0;
  const packLang = pack.language ?? 'ko';
  for (const def of pack.wordDefs) {
    if (koreanSet.has(def.korean)) continue;
    const reading =
      packLang === 'zh'
        ? def.pinyin
          ? { pinyin: def.pinyin, tones: hanziToReading(def.korean).tones }
          : hanziToReading(def.korean)
        : { pinyin: null as string | null, tones: null as string | null };
    const word: Word = {
      id: newId(),
      korean: def.korean,
      hanja: def.hanja ?? null,
      romaja: packLang === 'zh' ? (reading.pinyin ?? '') : toRomaja(def.korean),
      translation: def.translation,
      exampleSentence: def.exampleSentence ?? null,
      exampleTranslation: def.exampleTranslation ?? null,
      categoryId: category.id,
      sourceId: pack.sourceId,
      tags: def.tags ?? [],
      difficulty: def.difficulty ?? pack.difficulty,
      createdAt: now + added,
      intervalDays: 0,
      easeFactor: 2.5,
      repetitions: 0,
      nextReviewAt: now,
      lastResult: null,
      totalReviews: 0,
      correctReviews: 0,
      masteredAt: null,
      language: packLang,
      pinyin: reading.pinyin,
      tones: reading.tones,
    };
    await db.words.add(word);
    koreanSet.add(def.korean);
    added += 1;
  }
  return added;
}

export async function ensureSeedSources(): Promise<void> {
  const count = await db.sources.count();
  if (count > 0) return;
  await db.sources.bulkAdd(allSeedSources());
}

export async function allSources(): Promise<Source[]> {
  return db.sources.orderBy('createdAt').toArray();
}

export async function ensureAchievements(): Promise<void> {
  const count = await db.achievements.count();
  if (count > 0) return;
  const defs = achievementDefs();
  await db.achievements.bulkAdd(defs.map((d) => ({ ...d, earnedAt: null })));
}

export async function allAchievements(): Promise<Achievement[]> {
  return db.achievements.toArray();
}

export async function markAchievementsEarned(ids: string[], now: number = Date.now()): Promise<void> {
  if (ids.length === 0) return;
  const defs = await db.achievements.toArray();
  const patches = defs
    .filter((a) => ids.includes(a.id) && !a.earnedAt)
    .map((a) => ({ ...a, earnedAt: now }));
  if (patches.length > 0) await db.achievements.bulkPut(patches);
}

export async function getProgression(lang: LearningLanguage = 'ko'): Promise<Progression> {
  await migrateProgressionProfiles();
  const existing = await db.progression.get(lang);
  if (existing) return existing;
  const fresh: Progression = { id: lang, xp: 0, rewardedMissionDate: null, completedPackIds: [] };
  await db.progression.put(fresh);
  return fresh;
}

export async function putProgression(p: Progression): Promise<void> {
  await db.progression.put(p);
}

export async function backfillMasteredAt(): Promise<void> {
  const words = await db.words.toArray();
  const needsBackfill = words.filter(
    (w) => (!w.masteredAt || typeof w.masteredAt !== 'number') && w.intervalDays >= MASTERED_INTERVAL_DAYS
  );
  if (needsBackfill.length === 0) return;
  const reviews = await db.reviews.toArray();
  const lastReviewAt = new Map<string, number>();
  for (const r of reviews) {
    const prev = lastReviewAt.get(r.wordId);
    if (!prev || r.timestamp > prev) lastReviewAt.set(r.wordId, r.timestamp);
  }
  const patches: Word[] = [];
  for (const w of needsBackfill) {
    patches.push({ ...w, masteredAt: lastReviewAt.get(w.id) ?? w.createdAt });
  }
  if (patches.length > 0) await db.words.bulkPut(patches);
}

export async function allWords(): Promise<Word[]> {
  return db.words.orderBy('createdAt').reverse().toArray();
}

export async function allCategories(): Promise<Category[]> {
  return db.categories.orderBy('createdAt').toArray();
}

export async function dueWords(now: number = Date.now()): Promise<Word[]> {
  const words = await db.words.toArray();
  return words
    .filter((w) => w.nextReviewAt <= now)
    .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
}

export async function randomWords(excludingId: string, limit: number): Promise<Word[]> {
  const words = await db.words.toArray();
  return words.filter((w) => w.id !== excludingId).sort(() => Math.random() - 0.5).slice(0, limit);
}

export async function insertWord(word: Word): Promise<void> {
  await db.words.add(word);
}

export async function updateWord(word: Word): Promise<void> {
  await db.words.put(word);
}

export async function deleteWord(id: string): Promise<void> {
  await db.words.delete(id);
}

export async function insertCategory(category: Category): Promise<void> {
  await db.categories.add(category);
}

export async function findCategoryByName(name: string): Promise<Category | undefined> {
  const trimmed = name.trim();
  if (!trimmed) return undefined;
  const lower = trimmed.toLowerCase();
  const all = await db.categories.toArray();
  return all.find((c) => c.name.toLowerCase() === lower);
}

export async function findOrCreateCategory(
  name: string,
  emoji = '🎵',
  colorHex = '#E53935'
): Promise<Category> {
  const existing = await findCategoryByName(name);
  if (existing) return existing;
  const category: Category = {
    id: newId(),
    name: name.trim(),
    colorHex,
    emoji,
    createdAt: Date.now(),
    isDefault: false,
  };
  await db.categories.add(category);
  return category;
}

export async function insertSource(source: Source): Promise<void> {
  await db.sources.add(source);
}

export async function findSourceByTitle(title: string, type: Source['type'] = 'song'): Promise<Source | undefined> {
  const lower = title.trim().toLowerCase();
  if (!lower) return undefined;
  const all = await db.sources.where('type').equals(type).toArray();
  return all.find((s) => s.title.toLowerCase() === lower);
}

export async function findOrCreateSongSource(title: string): Promise<Source> {
  const existing = await findSourceByTitle(title, 'song');
  if (existing) return existing;
  const source: Source = {
    id: newId(),
    type: 'song',
    artistId: null,
    title: title.trim(),
    koreanTitle: '',
    album: null,
    snippet: null,
    createdAt: Date.now(),
  };
  await db.sources.add(source);
  return source;
}

export async function importSongWords(params: {
  drafts: ImportedWordDraft[];
  categoryId: string;
  sourceId: string;
  soundName: string;
}): Promise<number> {
  const existing = await db.words.toArray();
  const koreanSet = new Set(existing.map((w) => w.korean));
  const now = Date.now();
  let added = 0;

  for (const draft of params.drafts) {
    const korean = draft.korean.trim();
    const translation = draft.translation.trim();
    if (!korean || !translation || koreanSet.has(korean)) continue;

    const tagSet = new Set<string>();
    for (const tag of draft.tags ?? []) {
      const t = tag.trim();
      if (t) tagSet.add(t);
    }
    tagSet.add(params.soundName);

    const word: Word = {
      id: newId(),
      korean,
      hanja: null,
      romaja: toRomaja(korean),
      translation,
      exampleSentence: null,
      exampleTranslation: null,
      categoryId: params.categoryId,
      sourceId: params.sourceId,
      tags: [...tagSet],
      difficulty: 'Начальный',
      createdAt: now + added,
      intervalDays: 0,
      easeFactor: 2.5,
      repetitions: 0,
      nextReviewAt: now,
      lastResult: null,
      totalReviews: 0,
      correctReviews: 0,
      masteredAt: null,
      language: 'ko',
      pinyin: null,
      tones: null,
    };
    await db.words.add(word);
    koreanSet.add(korean);
    added += 1;
  }

  return added;
}

export async function recordReview(
  word: Word,
  rating: SrsRatingValue,
  now: number = Date.now()
): Promise<void> {
  const result = calculateNextReview(
    {
      intervalDays: word.intervalDays,
      easeFactor: word.easeFactor,
      repetitions: word.repetitions,
      nextReviewAt: word.nextReviewAt,
      lastResult: word.lastResult,
      totalReviews: word.totalReviews,
      correctReviews: word.correctReviews,
    },
    rating,
    now
  );

  const s = result.updatedState;
  const masteredAt =
    word.masteredAt ?? (s.intervalDays >= MASTERED_INTERVAL_DAYS ? now : null);
  const updated: Word = {
    ...word,
    intervalDays: s.intervalDays,
    easeFactor: s.easeFactor,
    repetitions: s.repetitions,
    nextReviewAt: s.nextReviewAt,
    lastResult: s.lastResult,
    totalReviews: s.totalReviews,
    correctReviews: s.correctReviews,
    masteredAt,
  };
  await db.words.put(updated);

  const record: ReviewRecord = {
    wordId: word.id,
    rating,
    dateString: dateString(now),
    timestamp: now,
  };
  await db.reviews.add(record);
}

async function wordLanguageById(): Promise<Map<string, LearningLanguage>> {
  const words = await db.words.toArray();
  return new Map(words.map((w) => [w.id, w.language ?? 'ko']));
}

async function reviewsForLang(lang?: LearningLanguage): Promise<ReviewRecord[]> {
  const records = await db.reviews.toArray();
  if (!lang) return records;
  const langMap = await wordLanguageById();
  return records.filter((r) => langMap.get(r.wordId) === lang);
}

export async function todayReviewsCount(
  lang?: LearningLanguage,
  now: number = Date.now()
): Promise<number> {
  const today = dateString(now);
  const records = await reviewsForLang(lang);
  return records.filter((r) => r.dateString === today).length;
}

export async function wordsCreatedOnDate(dateStr: string, lang?: LearningLanguage): Promise<number> {
  const all = await db.words.toArray();
  return all.filter(
    (w) => dateString(w.createdAt) === dateStr && (!lang || (w.language ?? 'ko') === lang)
  ).length;
}

export async function dailyActivityLastDays(
  days: number,
  lang?: LearningLanguage,
  now: number = Date.now()
): Promise<DailyActivity[]> {
  const records = await reviewsForLang(lang);
  const result: DailyActivity[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    const ds = dateString(d.getTime());
    const reviews = records.filter((r) => r.dateString === ds).length;
    const newWords = await wordsCreatedOnDate(ds, lang);
    result.push({ dateString: ds, newWords, reviews });
  }
  return result;
}

export async function weeklyWordsGrowth(lang?: LearningLanguage): Promise<number> {
  const now = Date.now();
  const weekMs = 7 * 24 * 60 * 60 * 1000;
  const thisWeekStart = now - weekMs;
  const prevWeekStart = now - 2 * weekMs;
  const all = await db.words.toArray();
  const scoped = lang ? all.filter((w) => (w.language ?? 'ko') === lang) : all;
  const thisWeek = scoped.filter((w) => w.createdAt >= thisWeekStart).length;
  const prevWeek = scoped.filter((w) => w.createdAt >= prevWeekStart && w.createdAt < thisWeekStart).length;
  if (prevWeek === 0) return thisWeek > 0 ? 100 : 0;
  return Math.round(((thisWeek - prevWeek) / prevWeek) * 100);
}

export async function streakCount(lang?: LearningLanguage): Promise<number> {
  const records = await reviewsForLang(lang);
  const dateSet = new Set(records.map((r) => r.dateString));
  if (dateSet.size === 0) return 0;

  let streak = 0;
  let cursor = startOfToday();
  const todayStr = dateString(cursor);

  if (dateSet.has(todayStr)) {
    streak = 1;
    cursor -= 24 * 60 * 60 * 1000;
  } else {
    cursor -= 24 * 60 * 60 * 1000;
    if (!dateSet.has(dateString(cursor))) {
      return 0;
    }
    streak = 1;
    cursor -= 24 * 60 * 60 * 1000;
  }

  while (true) {
    const check = dateString(cursor);
    if (dateSet.has(check)) {
      streak += 1;
      cursor -= 24 * 60 * 60 * 1000;
    } else {
      break;
    }
  }

  return streak;
}