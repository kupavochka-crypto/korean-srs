import type { Achievement, Artist } from '../types';
import type { SrsRatingValue } from './srs-engine';

export interface GamificationStats {
  totalWords: number;
  totalReviews: number;
  correctReviews: number;
  masteredWords: number;
  todayReviews: number;
  streak: number;
}

export const XP_BY_RATING: Record<SrsRatingValue, number> = {
  1: 0,
  2: 1,
  3: 3,
  4: 5,
};

export function xpForReview(rating: SrsRatingValue, streak: number): number {
  const base = XP_BY_RATING[rating] ?? 0;
  const bonus = streak >= 3 ? 1 : 0;
  return base + bonus;
}

export function currentLevelIndex(xp: number, artists: Artist[]): number {
  let index = -1;
  for (let i = 0; i < artists.length; i++) {
    if (xp >= artists[i].tierThreshold) index = i;
  }
  return index;
}

export function currentArtist(xp: number, artists: Artist[]): Artist | null {
  const idx = currentLevelIndex(xp, artists);
  return idx >= 0 ? artists[idx] : null;
}

export function nextArtist(xp: number, artists: Artist[]): Artist | null {
  const idx = currentLevelIndex(xp, artists);
  return idx + 1 < artists.length ? artists[idx + 1] : null;
}

export function levelProgress(xp: number, artists: Artist[]): number {
  const idx = currentLevelIndex(xp, artists);
  if (idx < 0) {
    const next = artists[0];
    return next ? Math.max(0, Math.min(1, xp / next.tierThreshold)) : 0;
  }
  if (idx + 1 >= artists.length) return 1;
  const cur = artists[idx].tierThreshold;
  const next = artists[idx + 1].tierThreshold;
  return Math.max(0, Math.min(1, (xp - cur) / (next - cur)));
}

export type MissionKind = 'reviews' | 'words' | 'master' | 'streak' | 'accuracy';

export interface MissionDef {
  kind: MissionKind;
  title: string;
  description: string;
  target: number;
  rewardXp: number;
}

export const MISSIONS: MissionDef[] = [
  { kind: 'reviews', title: 'Повторение дня', description: 'Просмотреть 20 карточек', target: 20, rewardXp: 20 },
  { kind: 'words', title: 'Новые слова', description: 'Довести словарь до 10 слов', target: 10, rewardXp: 15 },
  { kind: 'master', title: 'Запоминание', description: 'Выучить 5 слов навсегда', target: 5, rewardXp: 25 },
  { kind: 'streak', title: 'Серия', description: '3 дня подряд без пропусков', target: 3, rewardXp: 30 },
  { kind: 'accuracy', title: 'Точность', description: 'Правильность ответов ≥ 80%', target: 80, rewardXp: 20 },
];

export function todayMission(date: Date): MissionDef {
  const start = new Date(date.getFullYear(), 0, 0);
  const dayOfYear = Math.floor((date.getTime() - start.getTime()) / (24 * 60 * 60 * 1000));
  return MISSIONS[dayOfYear % MISSIONS.length];
}

export function missionProgressRatio(def: MissionDef, stats: GamificationStats): number {
  let current = 0;
  switch (def.kind) {
    case 'reviews':
      current = stats.todayReviews;
      break;
    case 'words':
      current = stats.totalWords;
      break;
    case 'master':
      current = stats.masteredWords;
      break;
    case 'streak':
      current = stats.streak;
      break;
    case 'accuracy': {
      const acc = stats.totalReviews > 0 ? (stats.correctReviews / stats.totalReviews) * 100 : 0;
      current = Math.round(acc * 100) / 100;
      break;
    }
  }
  return Math.max(0, Math.min(1, current / def.target));
}

export function missionCompleted(def: MissionDef, stats: GamificationStats): boolean {
  return missionProgressRatio(def, stats) >= 1;
}

export function achievementDefs(): Omit<Achievement, 'earnedAt'>[] {
  return [
    { id: 'words_10', title: 'Первые слова', description: '10 слов в словаре', icon: 'book' },
    { id: 'words_50', title: 'Словолюб', description: '50 слов в словаре', icon: 'journals' },
    { id: 'reviews_100', title: 'Сто раз', description: '100 повторений карточек', icon: 'folder' },
    { id: 'reviews_500', title: 'Полтысячи', description: '500 повторений карточек', icon: 'fire' },
    { id: 'streak_3', title: 'Первый шаг', description: '3 дня подряд', icon: 'flower1' },
    { id: 'streak_7', title: 'Неделя сил', description: '7 дней подряд', icon: 'stars' },
    { id: 'mastered_10', title: 'Коллекционер', description: '10 выученных слов', icon: 'award' },
    { id: 'mastered_50', title: 'Мастер словаря', description: '50 выученных слов', icon: 'gem' },
    { id: 'accuracy_90', title: 'Снайпер', description: 'Точность 90% (30+ повторов)', icon: 'bullseye' },
  ];
}

export function newlyEarnedAchievements(
  earned: Set<string>,
  stats: GamificationStats
): Omit<Achievement, 'earnedAt'>[] {
  const accuracy =
    stats.totalReviews > 0 ? (stats.correctReviews / stats.totalReviews) * 100 : 0;
  const checks: Record<string, boolean> = {
    words_10: stats.totalWords >= 10,
    words_50: stats.totalWords >= 50,
    reviews_100: stats.totalReviews >= 100,
    reviews_500: stats.totalReviews >= 500,
    streak_3: stats.streak >= 3,
    streak_7: stats.streak >= 7,
    mastered_10: stats.masteredWords >= 10,
    mastered_50: stats.masteredWords >= 50,
    accuracy_90: stats.totalReviews >= 30 && accuracy >= 90,
  };
  return achievementDefs().filter((a) => checks[a.id] && !earned.has(a.id));
}