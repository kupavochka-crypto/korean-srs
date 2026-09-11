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
  sourceId: string | null;
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
  masteredAt: number | null;
}

export type SourceType = 'song' | 'post' | 'variety' | 'fanchant' | 'textbook' | 'user';

export interface Source {
  id: string;
  type: SourceType;
  artistId: string | null;
  title: string;
  koreanTitle: string;
  album: string | null;
  snippet: string | null;
  createdAt: number;
}

export interface Artist {
  id: string;
  stageName: string;
  koreanName: string;
  imageName: string;
  colorHex: string;
  role: string;
  tierThreshold: number;
}

export interface PackWordDef {
  korean: string;
  translation: string;
  hanja?: string | null;
  exampleSentence?: string | null;
  exampleTranslation?: string | null;
  tags?: string[];
  difficulty?: Difficulty;
}

export interface Pack {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  colorHex: string;
  difficulty: Difficulty;
  sourceId: string | null;
  wordDefs: PackWordDef[];
  createdAt: number;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: number | null;
}

export interface Progression {
  id: string;
  xp: number;
  rewardedMissionDate: string | null;
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

export interface QuizOption {
  text: string;
  romaja?: string;
}

export interface QuizQuestion {
  kind: 'listen' | 'reverse';
  targetWordId: string;
  prompt: string;
  promptRomaja?: string;
  options: QuizOption[];
  correctOptionIndex: number;
}