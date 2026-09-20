import type { Category, NotebookWord } from '../types';

export const NOTEBOOK_WORDS: NotebookWord[] = [
  { korean: '초', translation: 'секунда', transcription: 'секундо', categoryName: 'Основы' },
  { korean: '차', translation: 'чай', transcription: 'чай', categoryName: 'Еда' },
  { korean: '커피', translation: 'кофе', transcription: 'кофе', categoryName: 'Еда' },
  { korean: '오후', translation: 'после полудня', transcription: 'после полудня (P.M.)', categoryName: 'Основы' },
  { korean: '호주', translation: 'Австралия', transcription: 'Австралия', categoryName: 'Путешествия' },
  { korean: '코코아', translation: 'какао', transcription: 'какао', categoryName: 'Еда' },
  { korean: '포도', translation: 'виноград', transcription: 'виноград', categoryName: 'Еда' },
  { korean: '스키', translation: 'катание на лыжах', transcription: 'катание на лыжах', categoryName: 'Основы' },
  { korean: '터키', translation: 'Турция', transcription: 'Турция', categoryName: 'Путешествия' },
  { korean: '페루', translation: 'Перу', transcription: 'Перу', categoryName: 'Путешествия' },
  { korean: '기차', translation: 'поезд', transcription: 'поезд', categoryName: 'Путешествия' },
  { korean: '모스크바', translation: 'Москва', transcription: 'Москва', categoryName: 'Путешествия' },
  { korean: '콩', translation: 'зернышки / фасоль', transcription: 'зернышки', categoryName: 'Еда' },
  { korean: '밥', translation: 'рис / еда', transcription: 'рис', categoryName: 'Еда' },
  { korean: '한문', translation: '1 минута', transcription: '1 минута', categoryName: 'Основы' },
  { korean: '자동차', translation: 'автомобиль / машина', transcription: 'автомобиль', categoryName: 'Путешествия' },
  { korean: '지하철', translation: 'метро', transcription: 'подвал / метро', categoryName: 'Путешествия' },
  { korean: '인천', translation: 'Инчхон', transcription: 'Инчхон', categoryName: 'Путешествия' },
  { korean: '프랑스', translation: 'Франция', transcription: 'Франция', categoryName: 'Путешествия' },
];

const NOTEBOOK_CATEGORY_STYLES: Record<string, { colorHex: string; emoji: string }> = {
  Основы: { colorHex: '#E53935', emoji: '📌' },
  Еда: { colorHex: '#FB8C00', emoji: '🍱' },
  Путешествия: { colorHex: '#00897B', emoji: '✈️' },
};

export const DEFAULT_CATEGORIES: Omit<Category, 'id' | 'createdAt' | 'isDefault'>[] = [
  ...new Set(NOTEBOOK_WORDS.map((w) => w.categoryName)),
].map((name) => ({
  name,
  colorHex: NOTEBOOK_CATEGORY_STYLES[name]?.colorHex ?? '#1E88E5',
  emoji: NOTEBOOK_CATEGORY_STYLES[name]?.emoji ?? '📌',
}));

export function lookupNotebookWord(korean: string): NotebookWord | undefined {
  const trimmed = korean.trim();
  return NOTEBOOK_WORDS.find((w) => w.korean === trimmed);
}