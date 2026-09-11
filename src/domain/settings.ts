const REWARD_THRESHOLD_KEY = 'reward_threshold';
const GEMINI_PROXY_KEY = 'gemini_proxy_url';
const THEME_KEY = 'theme_id';

export const DEFAULT_REWARD_THRESHOLD = 5;
export const DEFAULT_THEME_ID = 'bts';
export const DEFAULT_GEMINI_PROXY_URL = 'https://vercel-proxy-zeta-fawn.vercel.app/api/gemini';

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

export function storedGeminiProxy(): string {
  try {
    const raw = localStorage.getItem(GEMINI_PROXY_KEY);
    if (raw === null) return DEFAULT_GEMINI_PROXY_URL;
    return raw.trim();
  } catch {
    return DEFAULT_GEMINI_PROXY_URL;
  }
}

export function saveGeminiProxy(url: string) {
  try {
    localStorage.setItem(GEMINI_PROXY_KEY, url.trim());
  } catch {
    // storage unavailable
  }
}

export function storedThemeId(): string {
  try {
    const raw = localStorage.getItem(THEME_KEY);
    if (raw) return raw.trim();
  } catch {
    // storage unavailable
  }
  return DEFAULT_THEME_ID;
}

export function saveThemeId(id: string) {
  try {
    localStorage.setItem(THEME_KEY, id.trim());
  } catch {
    // storage unavailable
  }
}