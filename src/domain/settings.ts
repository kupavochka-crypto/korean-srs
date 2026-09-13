import type { LearningLanguage } from '../types';

const REWARD_THRESHOLD_KEY = 'reward_threshold';
const GEMINI_PROXY_KEY = 'gemini_proxy_url';
const THEME_KEY = 'theme_id';
const SHOW_ROMAJA_KEY = 'show_romaja';
const GREETING_KEY_PREFIX = 'greeting_';
const CARD_VOICE_KEY = 'voice_card';
const LISTEN_VOICE_KEY = 'voice_listen';
const COLOR_THEME_KEY = 'color_theme';
const DAILY_WORD_GOAL_KEY = 'daily_word_goal';
const ONBOARDING_KEY = 'onboarding_completed';
const MYMEMORY_EMAIL_KEY = 'mymemory_email';
const LEARNING_LANG_KEY = 'learning_language';
const RECENT_CATEGORIES_KEY = 'recent_category_ids';
const SELECTED_MISSION_PACK_KEY = 'selected_mission_pack_id';

export type ColorTheme = 'system' | 'light' | 'dark';

export const DEFAULT_DAILY_WORD_GOAL = 10;
export const DEFAULT_COLOR_THEME: ColorTheme = 'system';
export const DEFAULT_LEARNING_LANGUAGE: LearningLanguage = 'ko';

export function storedColorTheme(): ColorTheme {
  try {
    const raw = localStorage.getItem(COLOR_THEME_KEY);
    if (raw === 'light' || raw === 'dark' || raw === 'system') return raw;
  } catch {
    // storage unavailable
  }
  return DEFAULT_COLOR_THEME;
}

export function saveColorTheme(theme: ColorTheme) {
  try {
    localStorage.setItem(COLOR_THEME_KEY, theme);
  } catch {
    // storage unavailable
  }
}

export function resolveColorTheme(preference?: ColorTheme): 'light' | 'dark' {
  const theme = preference ?? storedColorTheme();
  if (theme === 'light') return 'light';
  if (theme === 'dark') return 'dark';
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function applyColorTheme(preference?: ColorTheme) {
  try {
    const resolved = resolveColorTheme(preference);
    document.documentElement.dataset.colorTheme = resolved;
    document.documentElement.classList.toggle('sl-theme-dark', resolved === 'dark');
    document.documentElement.classList.toggle('sl-theme-light', resolved !== 'dark');
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', resolved === 'dark' ? '#0F1117' : '#F8F9FA');
  } catch {
    // document unavailable
  }
}

export const DEFAULT_CARD_VOICE = 'mentor';
export const DEFAULT_LISTEN_VOICE = 'energetic';

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

export function storedShowRomaja(): boolean {
  try {
    return localStorage.getItem(SHOW_ROMAJA_KEY) === '1';
  } catch {
    // storage unavailable
  }
  return false;
}

export function saveShowRomaja(value: boolean) {
  try {
    localStorage.setItem(SHOW_ROMAJA_KEY, value ? '1' : '0');
  } catch {
    // storage unavailable
  }
}

export function storedGreetingId(themeId: string): string | null {
  try {
    const raw = localStorage.getItem(GREETING_KEY_PREFIX + themeId);
    if (raw && raw.trim()) return raw.trim();
  } catch {
    // storage unavailable
  }
  return null;
}

export function saveGreetingId(themeId: string, id: string) {
  try {
    localStorage.setItem(GREETING_KEY_PREFIX + themeId, id.trim());
  } catch {
    // storage unavailable
  }
}

function storedSetting(key: string, fallback: string): string {
  try {
    const raw = localStorage.getItem(key);
    if (raw && raw.trim()) return raw.trim();
  } catch {
    // storage unavailable
  }
  return fallback;
}

function saveSetting(key: string, id: string) {
  try {
    localStorage.setItem(key, id.trim());
  } catch {
    // storage unavailable
  }
}

export function storedCardVoice(): string {
  return storedSetting(CARD_VOICE_KEY, DEFAULT_CARD_VOICE);
}

export function saveCardVoice(id: string) {
  saveSetting(CARD_VOICE_KEY, id);
}

export function storedListenVoice(): string {
  return storedSetting(LISTEN_VOICE_KEY, DEFAULT_LISTEN_VOICE);
}

export function saveListenVoice(id: string) {
  saveSetting(LISTEN_VOICE_KEY, id);
}

export function storedDailyWordGoal(): number {
  try {
    const raw = Number(localStorage.getItem(DAILY_WORD_GOAL_KEY));
    if (Number.isInteger(raw) && raw >= 1 && raw <= 200) return raw;
  } catch {
    // storage unavailable
  }
  return DEFAULT_DAILY_WORD_GOAL;
}

export function saveDailyWordGoal(value: number) {
  try {
    const clamped = Math.max(1, Math.min(200, Math.floor(value)));
    localStorage.setItem(DAILY_WORD_GOAL_KEY, String(clamped));
  } catch {
    // storage unavailable
  }
}

export function storedOnboardingCompleted(): boolean {
  try {
    return localStorage.getItem(ONBOARDING_KEY) === '1';
  } catch {
    return false;
  }
}

export function saveOnboardingCompleted(value: boolean) {
  try {
    localStorage.setItem(ONBOARDING_KEY, value ? '1' : '0');
  } catch {
    // storage unavailable
  }
}

export function storedMymemoryEmail(): string {
  try {
    return localStorage.getItem(MYMEMORY_EMAIL_KEY)?.trim() ?? '';
  } catch {
    return '';
  }
}

export function saveMymemoryEmail(email: string) {
  try {
    localStorage.setItem(MYMEMORY_EMAIL_KEY, email.trim());
  } catch {
    // storage unavailable
  }
}

export function storedLearningLanguage(): LearningLanguage {
  try {
    const raw = localStorage.getItem(LEARNING_LANG_KEY);
    if (raw === 'ko' || raw === 'zh') return raw;
  } catch {
    // storage unavailable
  }
  return DEFAULT_LEARNING_LANGUAGE;
}

export function saveLearningLanguage(lang: LearningLanguage) {
  try {
    localStorage.setItem(LEARNING_LANG_KEY, lang);
  } catch {
    // storage unavailable
  }
}

export function storedRecentCategoryIds(): string[] {
  try {
    const raw = localStorage.getItem(RECENT_CATEGORIES_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string').slice(0, 5) : [];
  } catch {
    return [];
  }
}

export function pushRecentCategoryId(id: string | null) {
  if (!id) return;
  try {
    const next = [id, ...storedRecentCategoryIds().filter((x) => x !== id)].slice(0, 5);
    localStorage.setItem(RECENT_CATEGORIES_KEY, JSON.stringify(next));
  } catch {
    // storage unavailable
  }
}

/** Empty string = auto daily mission rotation */
export function storedSelectedMissionPackId(): string {
  try {
    return localStorage.getItem(SELECTED_MISSION_PACK_KEY)?.trim() ?? '';
  } catch {
    return '';
  }
}

export function saveSelectedMissionPackId(packId: string | null) {
  try {
    if (packId?.trim()) {
      localStorage.setItem(SELECTED_MISSION_PACK_KEY, packId.trim());
    } else {
      localStorage.removeItem(SELECTED_MISSION_PACK_KEY);
    }
  } catch {
    // storage unavailable
  }
}
