import { db, newId } from './schema';
import type {
  Achievement,
  Category,
  DailyActivity,
  ImportedWordDraft,
  LearningLanguage,
  Pack,
  Phrase,
  PracticeEvent,
  PracticeMode,
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
  ZH_PHRASE_DEFS,
  seedAllPhrases,
  seedPhrasesFromDefs,
} from '../domain/phrases';
import { DEFAULT_CATEGORIES, NOTEBOOK_WORDS } from '../domain/seed-data';
import { toRomaja } from '../domain/romaja';
import { allSeedSources } from '../domain/sources';
import { bootstrapPacks } from '../domain/packs';
import { achievementDefs } from '../domain/gamification';
import { calculateNextReview, type SrsRatingValue } from '../domain/srs-engine';
import { categoryLookupKey, pickCategoryStyle, wordCategoryIds } from '../domain/categories';
import { markTagsToCategoriesMigrated, tagsToCategoriesMigrated } from '../domain/settings';

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
  const now = Date.now();
  for (const [i, c] of DEFAULT_CATEGORIES.entries()) {
    const existing = await findCategoryByName(c.name, 'ko');
    if (existing) continue;
    await db.categories.add({
      id: newId(),
      name: c.name,
      colorHex: c.colorHex,
      emoji: c.emoji,
      createdAt: now + i,
      isDefault: true,
      language: 'ko' as const,
    });
  }
}

export async function dedupeCategories(): Promise<void> {
  const categories = await db.categories.toArray();
  const groups = new Map<string, Category[]>();

  for (const c of categories) {
    const key = categoryLookupKey(c.name, c.language ?? 'ko');
    const list = groups.get(key) ?? [];
    list.push(c);
    groups.set(key, list);
  }

  const remap = new Map<string, string>();
  const toDelete: string[] = [];

  for (const group of groups.values()) {
    if (group.length <= 1) continue;
    group.sort((a, b) => {
      if (Boolean(a.isDefault) !== Boolean(b.isDefault)) return a.isDefault ? -1 : 1;
      return a.createdAt - b.createdAt;
    });
    const keep = group[0]!;
    for (const dup of group.slice(1)) {
      remap.set(dup.id, keep.id);
      toDelete.push(dup.id);
    }
  }

  if (toDelete.length === 0) return;

  const words = await db.words.toArray();
  const patches: Word[] = [];
  for (const w of words) {
    const ids = wordCategoryIds(w);
    const next = [...new Set(ids.map((id) => remap.get(id) ?? id))];
    if (next.length === ids.length && next.every((id, i) => id === ids[i])) continue;
    patches.push({ ...w, categoryIds: next });
  }
  if (patches.length > 0) await db.words.bulkPut(patches);
  await db.categories.bulkDelete(toDelete);
}

export async function pruneEmptyLegacyDefaultCategories(): Promise<void> {
  const allowed = new Set(DEFAULT_CATEGORIES.map((c) => categoryLookupKey(c.name, 'ko')));
  const categories = await db.categories.toArray();
  const usedIds = new Set<string>();
  for (const w of await db.words.toArray()) {
    for (const id of wordCategoryIds(w)) usedIds.add(id);
  }
  const toDelete = categories
    .filter((c) => c.isDefault)
    .filter((c) => !allowed.has(categoryLookupKey(c.name, c.language ?? 'ko')))
    .filter((c) => !usedIds.has(c.id))
    .map((c) => c.id);
  if (toDelete.length > 0) await db.categories.bulkDelete(toDelete);
}

export async function migrateCategoryLanguage(): Promise<void> {
  const cats = await db.categories.toArray();
  const patches = cats.filter((c) => !c.language).map((c) => ({ ...c, language: 'ko' as const }));
  if (patches.length > 0) await db.categories.bulkPut(patches);
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
      categoryIds: category?.id ? [category.id] : [],
      sourceId: null,
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
  await backfillZhReadings();
  await migrateProgressionProfiles();
  await migrateCategoryLanguage();
  await migrateTagsToCategories();
  await dedupeCategories();
  await pruneEmptyLegacyDefaultCategories();
}

type LegacyWord = Word & {
  categoryId?: string | null;
  tags?: string[];
};

export async function migrateTagsToCategories(): Promise<void> {
  if (tagsToCategoriesMigrated()) return;

  const rawWords = (await db.words.toArray()) as LegacyWord[];
  let categories = await db.categories.toArray();

  const byName = new Map<string, Category>();
  for (const c of categories) {
    byName.set(categoryLookupKey(c.name, c.language ?? 'ko'), c);
  }

  async function resolveTagName(tag: string, lang: LearningLanguage): Promise<string | null> {
    const trimmed = tag.trim();
    if (!trimmed) return null;
    const key = categoryLookupKey(trimmed, lang);
    let cat = byName.get(key);
    if (!cat) {
      const style = pickCategoryStyle(trimmed);
      cat = {
        id: newId(),
        name: trimmed,
        colorHex: style.colorHex,
        emoji: style.emoji,
        createdAt: Date.now(),
        isDefault: false,
        language: lang,
      };
      await db.categories.add(cat);
      categories = [...categories, cat];
      byName.set(key, cat);
    }
    return cat.id;
  }

  for (const word of rawWords) {
    const lang = (word.language ?? 'ko') as LearningLanguage;
    const ids = new Set<string>();

    if (word.categoryId) ids.add(word.categoryId);
    if (word.categoryIds?.length) {
      for (const id of word.categoryIds) ids.add(id);
    }

    for (const tag of word.tags ?? []) {
      const id = await resolveTagName(tag, lang);
      if (id) ids.add(id);
    }

    const categoryIds = [...ids];
    const { categoryId: _c, tags: _t, ...rest } = word;
    await db.words.put({ ...rest, categoryIds } as Word);
  }

  markTagsToCategoriesMigrated();
}

export async function backfillZhReadings(): Promise<void> {
  const words = await db.words.toArray();
  const patches: Word[] = [];
  for (const w of words) {
    if ((w.language ?? 'ko') !== 'zh') continue;
    const reading = hanziToReading(w.korean);
    const pinyin = w.pinyin?.trim() || reading.pinyin || null;
    const tones = w.tones?.trim() || reading.tones || null;
    const romaja = w.romaja?.trim() || pinyin || '';
    if (w.pinyin === pinyin && w.tones === tones && w.romaja === romaja) continue;
    patches.push({ ...w, pinyin, tones, romaja });
  }
  if (patches.length > 0) await db.words.bulkPut(patches);
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

  await mergePhraseDefs(ALL_PHRASE_DEFS);

  all = await db.phrases.toArray();
  const hasZh = all.some((p) => (p.language ?? 'ko') === 'zh');
  if (!hasZh) {
    const existingKoreans = new Set(all.map((p) => p.korean));
    const zhMissing = ZH_PHRASE_DEFS.filter((def) => !existingKoreans.has(def.korean));
    if (zhMissing.length > 0) {
      await db.phrases.bulkAdd(seedPhrasesFromDefs(zhMissing, Date.now()));
    }
  }
}

export async function allPhrases(): Promise<Phrase[]> {
  return db.phrases.orderBy('createdAt').toArray();
}

export async function getPackById(id: string): Promise<Pack | undefined> {
  return db.packs.get(id);
}

export async function insertPack(pack: Pack): Promise<void> {
  await db.packs.add(pack);
}

export async function updatePack(pack: Pack): Promise<void> {
  await db.packs.put(pack);
}

export async function mergePhraseDefs(defs: typeof ALL_PHRASE_DEFS): Promise<number> {
  let changed = 0;
  let all = await db.phrases.toArray();
  const existingKoreans = new Set(all.map((p) => p.korean));
  const missingDefs = defs.filter((def) => !existingKoreans.has(def.korean));
  if (missingDefs.length > 0) {
    await db.phrases.bulkAdd(seedPhrasesFromDefs(missingDefs, Date.now()));
    changed += missingDefs.length;
    all = await db.phrases.toArray();
  }

  const defByKorean = new Map(defs.map((def) => [def.korean, def]));
  for (const phrase of all) {
    const def = defByKorean.get(phrase.korean);
    if (!def) continue;
    const lang = def.sourcePackId?.startsWith('seed-zh-') ? 'zh' : 'ko';
    const nextPackId =
      def.sourcePackId ??
      (def.themeId === 'stray-kids' ? SKZ_PHRASE_PACK_ID : BTS_PHRASE_PACK_ID);
    const patch: Partial<Phrase> = {};
    if (phrase.translation !== def.translation) patch.translation = def.translation;
    if ((phrase.language ?? 'ko') !== lang) patch.language = lang;
    if (def.pinyin && phrase.pinyin !== def.pinyin) patch.pinyin = def.pinyin;
    if (
      nextPackId &&
      phrase.sourcePackId !== nextPackId &&
      (!phrase.sourcePackId ||
        phrase.sourcePackId === BTS_PHRASE_PACK_ID ||
        phrase.sourcePackId === SKZ_PHRASE_PACK_ID)
    ) {
      patch.sourcePackId = nextPackId;
    }
    if (Object.keys(patch).length > 0) {
      await db.phrases.update(phrase.id, patch);
      changed += 1;
    }
  }
  return changed;
}

export async function ensureSeedPacks(): Promise<void> {
  const existing = await db.packs.toArray();
  const ids = new Set(existing.map((p) => p.id));
  const missing = bootstrapPacks().filter((p) => !ids.has(p.id));
  if (missing.length > 0) await db.packs.bulkAdd(missing);
}

export async function allPacks(): Promise<Pack[]> {
  return db.packs.orderBy('createdAt').toArray();
}

export async function addPackWords(pack: Pack): Promise<number> {
  const existing = await db.words.toArray();
  const koreanSet = new Set(existing.map((w) => w.korean));
  const packLang = pack.language ?? 'ko';
  const category = await findOrCreateCategory(
    pack.title,
    pack.emoji,
    pack.colorHex,
    packLang
  );
  const now = Date.now();
  let added = 0;
  for (const def of pack.wordDefs) {
    if (koreanSet.has(def.korean)) continue;
    const reading =
      packLang === 'zh'
        ? def.pinyin
          ? { pinyin: def.pinyin, tones: hanziToReading(def.korean).tones }
          : hanziToReading(def.korean)
        : { pinyin: null as string | null, tones: null as string | null };
    const extraCategoryIds: string[] = [];
    for (const tagName of def.tags ?? []) {
      const extra = await findOrCreateCategory(tagName, '📌', '#1E88E5', packLang);
      extraCategoryIds.push(extra.id);
    }
    const categoryIds = [...new Set([category.id, ...extraCategoryIds])];
    const word: Word = {
      id: newId(),
      korean: def.korean,
      hanja: def.hanja ?? null,
      romaja: packLang === 'zh' ? (reading.pinyin ?? '') : toRomaja(def.korean),
      translation: def.translation,
      exampleSentence: def.exampleSentence ?? null,
      exampleTranslation: def.exampleTranslation ?? null,
      categoryIds,
      sourceId: pack.sourceId,
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

export async function updateCategory(category: Category): Promise<void> {
  await db.categories.put(category);
}

export async function deleteCategory(id: string): Promise<number> {
  const words = await db.words.toArray();
  const patches: Word[] = [];
  for (const word of words) {
    const ids = word.categoryIds ?? [];
    if (!ids.includes(id)) continue;
    patches.push({
      ...word,
      categoryIds: ids.filter((cid) => cid !== id),
    });
  }
  if (patches.length > 0) await db.words.bulkPut(patches);
  await db.categories.delete(id);
  return patches.length;
}

export async function findCategoryByName(
  name: string,
  lang: LearningLanguage = 'ko'
): Promise<Category | undefined> {
  if (!name.trim()) return undefined;
  const key = categoryLookupKey(name, lang);
  const all = await db.categories.toArray();
  return all.find((c) => categoryLookupKey(c.name, c.language ?? 'ko') === key);
}

export async function findOrCreateCategory(
  name: string,
  emoji = '🎵',
  colorHex = '#E53935',
  lang: LearningLanguage = 'ko'
): Promise<Category> {
  const existing = await findCategoryByName(name, lang);
  if (existing) return existing;
  const category: Category = {
    id: newId(),
    name: name.trim(),
    colorHex,
    emoji,
    createdAt: Date.now(),
    isDefault: false,
    language: lang,
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
}): Promise<number> {
  const existing = await db.words.toArray();
  const koreanSet = new Set(existing.map((w) => w.korean));
  const now = Date.now();
  let added = 0;

  for (const draft of params.drafts) {
    const korean = draft.korean.trim();
    const translation = draft.translation.trim();
    if (!korean || !translation || koreanSet.has(korean)) continue;

    const categoryIds = [...new Set([params.categoryId, ...(draft.categoryIds ?? [])])];

    const word: Word = {
      id: newId(),
      korean,
      hanja: null,
      romaja: toRomaja(korean),
      translation,
      exampleSentence: null,
      exampleTranslation: null,
      categoryIds,
      sourceId: params.sourceId,
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

export async function recordPracticeEvent(
  wordId: string,
  mode: PracticeMode,
  correct: boolean,
  now: number = Date.now()
): Promise<void> {
  const event: PracticeEvent = {
    wordId,
    mode,
    correct,
    dateString: dateString(now),
    timestamp: now,
  };
  await db.practiceEvents.add(event);
}

async function practiceEventsForLang(lang?: LearningLanguage): Promise<PracticeEvent[]> {
  const events = await db.practiceEvents.toArray();
  if (!lang) return events;
  const langMap = await wordLanguageById();
  return events.filter((e) => langMap.get(e.wordId) === lang);
}

export interface ModeDayCounts {
  srs: number;
  quiz: number;
  listen: number;
}

export interface CategoryRatingCounts {
  again: number;
  hard: number;
  good: number;
  easy: number;
}

export const EMPTY_CATEGORY_RATING_COUNTS: CategoryRatingCounts = {
  again: 0,
  hard: 0,
  good: 0,
  easy: 0,
};

function countPracticeModes(events: PracticeEvent[]): { quiz: number; listen: number } {
  let quiz = 0;
  let listen = 0;
  for (const e of events) {
    if (e.mode === 'quiz_listen' || e.mode === 'listening') {
      listen += 1;
    } else if (e.mode === 'quiz_reverse' || e.mode === 'quiz_write') {
      if (e.correct) quiz += 1;
    }
  }
  return { quiz, listen };
}

export async function modeCountsForDate(
  dateStr: string,
  lang?: LearningLanguage
): Promise<ModeDayCounts> {
  const srs = (await reviewsForLang(lang)).filter((r) => r.dateString === dateStr).length;
  const events = (await practiceEventsForLang(lang)).filter((e) => e.dateString === dateStr);
  const { quiz, listen } = countPracticeModes(events);
  return { srs, quiz, listen };
}

export async function modeCountsForWordIds(
  dateStr: string,
  wordIds: Set<string>,
  lang?: LearningLanguage
): Promise<ModeDayCounts> {
  if (wordIds.size === 0) return { srs: 0, quiz: 0, listen: 0 };
  const srs = (await reviewsForLang(lang)).filter(
    (r) => r.dateString === dateStr && wordIds.has(r.wordId)
  ).length;
  const events = (await practiceEventsForLang(lang)).filter(
    (e) => e.dateString === dateStr && wordIds.has(e.wordId)
  );
  const { quiz, listen } = countPracticeModes(events);
  return { srs, quiz, listen };
}

function countRatingsFromReviews(reviews: ReviewRecord[]): CategoryRatingCounts {
  const counts = { ...EMPTY_CATEGORY_RATING_COUNTS };
  for (const r of reviews) {
    if (r.rating === 1) counts.again += 1;
    else if (r.rating === 2) counts.hard += 1;
    else if (r.rating === 3) counts.good += 1;
    else if (r.rating === 4) counts.easy += 1;
  }
  return counts;
}

/** First SRS review per word for a given day (Anki-style true retention). */
function firstReviewPerWord(reviews: ReviewRecord[]): ReviewRecord[] {
  const firstByWord = new Map<string, ReviewRecord>();
  for (const r of reviews) {
    const existing = firstByWord.get(r.wordId);
    if (!existing || r.timestamp < existing.timestamp) {
      firstByWord.set(r.wordId, r);
    }
  }
  return [...firstByWord.values()];
}

export async function ratingCountsForDate(
  dateStr: string,
  lang?: LearningLanguage
): Promise<CategoryRatingCounts> {
  const reviews = (await reviewsForLang(lang)).filter((r) => r.dateString === dateStr);
  return countRatingsFromReviews(reviews);
}

export async function trueRetentionRatingCountsForDate(
  dateStr: string,
  lang?: LearningLanguage
): Promise<CategoryRatingCounts> {
  const reviews = (await reviewsForLang(lang)).filter((r) => r.dateString === dateStr);
  return countRatingsFromReviews(firstReviewPerWord(reviews));
}

export async function categoryRatingCountsForWordIds(
  dateStr: string,
  wordIds: Set<string>,
  lang?: LearningLanguage
): Promise<CategoryRatingCounts> {
  if (wordIds.size === 0) return { ...EMPTY_CATEGORY_RATING_COUNTS };
  const reviews = (await reviewsForLang(lang)).filter(
    (r) => r.dateString === dateStr && wordIds.has(r.wordId)
  );
  return countRatingsFromReviews(reviews);
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

export interface WordBucketCounts {
  new: number;
  learning: number;
  matureNow: number;
  masteredEver: number;
}

export const EMPTY_WORD_BUCKET_COUNTS: WordBucketCounts = {
  new: 0,
  learning: 0,
  matureNow: 0,
  masteredEver: 0,
};

/** Mutually exclusive buckets for vocab donut chart. */
export async function wordBucketCounts(lang?: LearningLanguage): Promise<WordBucketCounts> {
  const all = await db.words.toArray();
  const words = lang ? all.filter((w) => (w.language ?? 'ko') === lang) : all;
  const counts: WordBucketCounts = { new: 0, learning: 0, matureNow: 0, masteredEver: 0 };
  for (const w of words) {
    if (w.totalReviews === 0) {
      counts.new += 1;
    } else if (w.masteredAt) {
      counts.masteredEver += 1;
    } else if (w.intervalDays >= MASTERED_INTERVAL_DAYS) {
      counts.matureNow += 1;
    } else {
      counts.learning += 1;
    }
  }
  return counts;
}

export type ActivityIntensityLevel = 0 | 1 | 2 | 3;

export interface DayActivityIntensity {
  dateString: string;
  level: ActivityIntensityLevel;
  total: number;
}

function activityLevel(total: number): ActivityIntensityLevel {
  if (total <= 0) return 0;
  if (total <= 5) return 1;
  if (total <= 15) return 2;
  return 3;
}

export async function activityIntensityLastDays(
  days: number,
  lang?: LearningLanguage,
  now: number = Date.now()
): Promise<DayActivityIntensity[]> {
  const [reviews, events] = await Promise.all([
    reviewsForLang(lang),
    practiceEventsForLang(lang),
  ]);
  const result: DayActivityIntensity[] = [];
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    d.setHours(0, 0, 0, 0);
    const ds = dateString(d.getTime());
    const reviewCount = reviews.filter((r) => r.dateString === ds).length;
    const eventCount = events.filter((e) => e.dateString === ds).length;
    const total = reviewCount + eventCount;
    result.push({ dateString: ds, level: activityLevel(total), total });
  }
  return result;
}

async function studyDateSet(lang?: LearningLanguage): Promise<Set<string>> {
  const [reviews, events] = await Promise.all([
    reviewsForLang(lang),
    practiceEventsForLang(lang),
  ]);
  const dateSet = new Set<string>();
  for (const r of reviews) dateSet.add(r.dateString);
  for (const e of events) dateSet.add(e.dateString);
  return dateSet;
}

export async function streakCount(lang?: LearningLanguage): Promise<number> {
  const dateSet = await studyDateSet(lang);
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

export interface UserDataExport {
  words: Word[];
  categories: Category[];
  reviews: ReviewRecord[];
  practiceEvents: PracticeEvent[];
  progression: Progression[];
  achievements: Achievement[];
  sources: Source[];
}

export async function exportUserData(): Promise<UserDataExport> {
  const [words, categories, reviews, practiceEvents, progression, achievements, sources] =
    await Promise.all([
      db.words.toArray(),
      db.categories.toArray(),
      db.reviews.toArray(),
      db.practiceEvents.toArray(),
      db.progression.toArray(),
      db.achievements.toArray(),
      db.sources.toArray(),
    ]);
  return { words, categories, reviews, practiceEvents, progression, achievements, sources };
}

export async function importUserData(data: UserDataExport): Promise<void> {
  await db.transaction(
    'rw',
    [
      db.words,
      db.categories,
      db.reviews,
      db.practiceEvents,
      db.progression,
      db.achievements,
      db.sources,
    ],
    async () => {
      await Promise.all([
        db.words.clear(),
        db.categories.clear(),
        db.reviews.clear(),
        db.practiceEvents.clear(),
        db.progression.clear(),
        db.achievements.clear(),
        db.sources.clear(),
      ]);
      if (data.words.length > 0) await db.words.bulkAdd(data.words);
      if (data.categories.length > 0) await db.categories.bulkAdd(data.categories);
      if (data.reviews.length > 0) await db.reviews.bulkAdd(data.reviews);
      if (data.practiceEvents.length > 0) await db.practiceEvents.bulkAdd(data.practiceEvents);
      if (data.progression.length > 0) await db.progression.bulkPut(data.progression);
      if (data.achievements.length > 0) await db.achievements.bulkPut(data.achievements);
      if (data.sources.length > 0) await db.sources.bulkAdd(data.sources);
    }
  );
}