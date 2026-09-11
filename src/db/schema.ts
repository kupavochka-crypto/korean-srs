import Dexie, { type Table } from 'dexie';
import type { Category, ReviewRecord, Word } from '../types';

export class KoreanDB extends Dexie {
  words!: Table<Word, string>;
  categories!: Table<Category, string>;
  reviews!: Table<ReviewRecord, number>;

  constructor() {
    super('korean-srs');
    this.version(1).stores({
      words: '&id, korean, categoryId, nextReviewAt, createdAt',
      categories: '&id, name, createdAt',
      reviews: '++id, wordId, dateString, timestamp',
    });
    this.version(2).stores({
      words: '&id, korean, categoryId, nextReviewAt, createdAt',
      categories: '&id, name, createdAt',
      reviews: '++id, wordId, dateString, timestamp',
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