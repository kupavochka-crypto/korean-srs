export type SrsRatingValue = 1 | 2 | 3 | 4;

export type SrsRatingName = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY';

export interface SrsRatingDef {
  value: SrsRatingValue;
  label: string;
  koreanLabel: string;
  name: SrsRatingName;
}

export const SRS_RATINGS: SrsRatingDef[] = [
  { value: 1, label: 'Забыл', koreanLabel: '다시', name: 'AGAIN' },
  { value: 2, label: 'Трудно', koreanLabel: '어려움', name: 'HARD' },
  { value: 3, label: 'Хорошо', koreanLabel: '알맞음', name: 'GOOD' },
  { value: 4, label: 'Легко', koreanLabel: '쉬움', name: 'EASY' },
];

export function srsRating(value: SrsRatingValue): SrsRatingDef {
  return SRS_RATINGS.find((r) => r.value === value) ?? SRS_RATINGS[0];
}

export interface SrsWordState {
  intervalDays: number;
  easeFactor: number;
  repetitions: number;
  nextReviewAt: number;
  lastResult: string | null;
  totalReviews: number;
  correctReviews: number;
}

export interface SrsResult {
  updatedState: SrsWordState;
}

export const MIN_EASE_FACTOR = 1.3;
export const MILLIS_PER_DAY = 24 * 60 * 60 * 1000;

export function calculateNextReview(
  state: SrsWordState,
  rating: SrsRatingValue,
  now: number = Date.now()
): SrsResult {
  let newInterval: number;
  let newEaseFactor = state.easeFactor;
  let newRepetitions = state.repetitions;

  switch (rating) {
    case 1: // again
      newRepetitions = 0;
      newInterval = 1;
      newEaseFactor = Math.max(MIN_EASE_FACTOR, state.easeFactor - 0.2);
      break;
    case 2: // hard
      newRepetitions = state.repetitions + 1;
      newInterval = state.intervalDays <= 1 ? 1 : Math.round(state.intervalDays * 1.2);
      newEaseFactor = Math.max(MIN_EASE_FACTOR, state.easeFactor - 0.15);
      break;
    case 3: // good
      switch (state.repetitions) {
        case 0:
          newInterval = 1;
          break;
        case 1:
          newInterval = 3;
          break;
        default:
          newInterval = Math.round(state.intervalDays * state.easeFactor);
      }
      newRepetitions = state.repetitions + 1;
      break;
    case 4: // easy
      switch (state.repetitions) {
        case 0:
          newInterval = 3;
          break;
        case 1:
          newInterval = 6;
          break;
        default:
          newInterval = Math.round(state.intervalDays * state.easeFactor * 1.3);
      }
      newEaseFactor = state.easeFactor + 0.15;
      newRepetitions = state.repetitions + 1;
      break;
  }

  if (newInterval < 1) newInterval = 1;

  const nextReviewTimestamp = now + newInterval * MILLIS_PER_DAY;
  const isCorrect = rating !== 1;

  return {
    updatedState: {
      intervalDays: newInterval,
      easeFactor: newEaseFactor,
      repetitions: newRepetitions,
      nextReviewAt: nextReviewTimestamp,
      lastResult: srsRating(rating).name,
      totalReviews: state.totalReviews + 1,
      correctReviews: isCorrect ? state.correctReviews + 1 : state.correctReviews,
    },
  };
}