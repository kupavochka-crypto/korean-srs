const REWARD_THRESHOLD_KEY = 'reward_threshold';

export const DEFAULT_REWARD_THRESHOLD = 5;

export function storedRewardThreshold(): number {
  try {
    const raw = Number(localStorage.getItem(REWARD_THRESHOLD_KEY));
    if (Number.isInteger(raw) && raw >= 1) return raw;
  } catch {
    // storage unavailable
  }
  return DEFAULT_REWARD_THRESHOLD;
}

export function saveRewardThreshold(value: number) {
  try {
    const clamped = Math.max(1, Math.floor(value));
    localStorage.setItem(REWARD_THRESHOLD_KEY, String(clamped));
  } catch {
    // storage unavailable
  }
}