export type Difficulty = 'Начальный' | 'Средний' | 'Продвинутый';

export type LearningLanguage = 'ko' | 'zh';

export type TranslateLang = 'ko' | 'ru' | 'zh-CN';

export type QuizKind = 'listen' | 'reverse' | 'write';

export type ReviewMode = 'due' | 'all';

export type DuplicateAction = 'skip' | 'abort' | 'update' | 'keep_both';

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
  language?: LearningLanguage;
  hanzi?: string | null;
  pinyin?: string | null;
  tones?: string | null;
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
  pinyin?: string | null;
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
  kind?: 'words' | 'phrases';
  releaseDate?: string | null;
  language?: LearningLanguage;
}

export interface Phrase {
  id: string;
  korean: string;
  translation: string;
  audioUrl?: string | null;
  sourcePackId: string | null;
  difficulty: Difficulty;
  createdAt: number;
  language?: LearningLanguage;
  pinyin?: string | null;
}

export interface PackPhraseDef {
  korean: string;
  translation: string;
  sourcePackId?: string;
  themeId?: string;
  pinyin?: string | null;
  difficulty?: Difficulty;
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  earnedAt: number | null;
}

export interface Progression {
  id: LearningLanguage;
  xp: number;
  rewardedMissionDate: string | null;
  completedPackIds?: string[];
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
  categoryId?: string | null;
  pinyin?: string | null;
}

export interface QuizOption {
  text: string;
  romaja?: string;
}

export interface QuizQuestion {
  kind: QuizKind;
  targetWordId: string;
  prompt: string;
  promptRomaja?: string;
  options: QuizOption[];
  correctOptionIndex: number;
  expectedAnswer?: string;
  writeAnswer?: string;
  source?: 'global' | 'category' | 'filtered';
  categoryId?: string | null;
}

export interface WordSaveParams {
  korean: string;
  hanja: string;
  romaja: string;
  translation: string;
  exampleSentence: string;
  exampleTranslation: string;
  categoryId: string | null;
  sourceId: string | null;
  difficulty: Difficulty;
  pinyin?: string;
  tones?: string;
  hanzi?: string;
}

export interface PendingDuplicate {
  incoming: {
    korean: string;
    translation: string;
    categoryId: string | null;
    pinyin?: string | null;
  };
  existing: Word;
  remaining: number;
}

export interface DuplicateWordPayload {
  korean: string;
  hanja?: string | null;
  hanzi?: string | null;
  pinyin?: string | null;
  tones?: string | null;
  romaja?: string;
  translation: string;
  exampleSentence?: string | null;
  exampleTranslation?: string | null;
  categoryId?: string | null;
  sourceId?: string | null;
  tags?: string[];
  difficulty?: Difficulty;
  language?: LearningLanguage;
}

export interface CategorySuggestion {
  categoryId: string | null;
  name: string;
  emoji?: string;
  reason: 'context' | 'recent' | 'neighbor' | 'batch' | 'frequent' | 'create';
  score: number;
}

export interface DailyActivity {
  dateString: string;
  newWords: number;
  reviews: number;
}
