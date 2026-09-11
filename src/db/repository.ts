import { db, newId } from './schema';
import type { Category, ReviewRecord, Word } from '../types';
import { DEFAULT_CATEGORIES, NOTEBOOK_WORDS } from '../domain/seed-data';
import { toRomaja } from '../domain/romaja';
import { calculateNextReview, type SrsRatingValue } from '../domain/srs-engine';

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
    };
  });
  await db.words.bulkAdd(words);
}

export async function initialize(): Promise<void> {
  await ensureDefaultCategories();
  await ensureNotebookWords();
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
  const updated: Word = {
    ...word,
    intervalDays: s.intervalDays,
    easeFactor: s.easeFactor,
    repetitions: s.repetitions,
    nextReviewAt: s.nextReviewAt,
    lastResult: s.lastResult,
    totalReviews: s.totalReviews,
    correctReviews: s.correctReviews,
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

export async function todayReviewsCount(now: number = Date.now()): Promise<number> {
  const today = dateString(now);
  return db.reviews.where('dateString').equals(today).count();
}

export async function streakCount(): Promise<number> {
  const records = await db.reviews.toArray();
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