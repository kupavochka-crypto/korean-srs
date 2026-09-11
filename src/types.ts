export type Difficulty = 'Начальный' | 'Средний' | 'Продвинутый';

export interface Category {
  id: string;
  name: string;
  colorHex: string;
  emoji: string;
  createdAt: number;
  isDefault: boolean;
}

export interface Word {
  id: string;
  korean: string;
  hanja: string | null;
  romaja: string;
  translation: string;
  exampleSentence: string | null;
  exampleTranslation: string | null;
  categoryId: string | null;
  tags: string[];
  difficulty: Difficulty;
  createdAt: number;
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
  nextReviewAt: number;
  lastResult: string | null;
  totalReviews: number;
  correctReviews: number;
}

export interface ReviewRecord {
  id?: number;
  wordId: string;
  rating: number;
  dateString: string;
  timestamp: number;
}

export interface BTSGreeting {
  id: string;
  artistName: string;
  imageName: string;
  russian: string;
  korean: string;
}

export interface NotebookWord {
  korean: string;
  transcription: string;
  translation: string;
  categoryName: string;
}

export interface ScannedWord {
  korean: string;
  translation: string;
}

export interface ImportedWordDraft {
  korean: string;
  translation: string;
  tags: string[];
}

export interface QuizQuestion {
  targetWordId: string;
  korean: string;
  romaja: string;
  options: string[];
  correctOptionIndex: number;
}