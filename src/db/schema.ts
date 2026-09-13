import Dexie, { type Table } from 'dexie';
import type { Achievement, Category, Pack, Phrase, Progression, ReviewRecord, Source, Word } from '../types';

export class KoreanDB extends Dexie {
  words!: Table<Word, string>;
  categories!: Table<Category, string>;
  reviews!: Table<ReviewRecord, number>;
  sources!: Table<Source, string>;
  packs!: Table<Pack, string>;
  achievements!: Table<Achievement, string>;
  progression!: Table<Progression, string>;
  phrases!: Table<Phrase, string>;

  constructor() {
    super('korean-srs');
    this.version(1).stores({
      words: '&id, korean, categoryId, nextReviewAt, createdAt',
      categories: '&id, name, createdAt',
      reviews: '++id, wordId, dateString, timestamp',
    });
    this.version(2).stores({
      words: '&id, korean, categoryId, sourceId, nextReviewAt, createdAt',
      categories: '&id, name, createdAt',
      reviews: '++id, wordId, dateString, timestamp',
      sources: '&id, type, artistId, title, createdAt',
      packs: '&id, sourceId, difficulty, createdAt',
      achievements: '&id, earnedAt',
    });
    this.version(3).stores({
      words: '&id, korean, categoryId, sourceId, nextReviewAt, createdAt',
      categories: '&id, name, createdAt',
      reviews: '++id, wordId, dateString, timestamp',
      sources: '&id, type, artistId, title, createdAt',
      packs: '&id, sourceId, difficulty, createdAt',
      achievements: '&id, earnedAt',
      progression: '&id',
    });
    this.version(4).stores({
      words: '&id, korean, categoryId, sourceId, nextReviewAt, createdAt, language',
      categories: '&id, name, createdAt',
      reviews: '++id, wordId, dateString, timestamp',
      sources: '&id, type, artistId, title, createdAt',
      packs: '&id, sourceId, difficulty, createdAt',
      achievements: '&id, earnedAt',
      progression: '&id',
      phrases: '&id, sourcePackId, createdAt, language',
    });
  }
}

export const db = new KoreanDB();

export function newId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}