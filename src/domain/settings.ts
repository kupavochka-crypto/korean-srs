const REWARD_THRESHOLD_KEY = 'reward_threshold';
const GEMINI_PROXY_KEY = 'gemini_proxy_url';
const THEME_KEY = 'theme_id';
const SHOW_ROMAJA_KEY = 'show_romaja';
const GREETING_KEY_PREFIX = 'greeting_';
const CARD_VOICE_KEY = 'voice_card';
const LISTEN_VOICE_KEY = 'voice_listen';
const COLOR_THEME_KEY = 'color_theme';

export type ColorTheme = 'system' | 'light' | 'dark';
export const DEFAULT_COLOR_THEME: ColorTheme = 'system';

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

export function resolveColorTheme(): 'light' | 'dark' {
  const theme = storedColorTheme();
  if (theme === 'light') return 'light';
  if (theme === 'dark') return 'dark';
  return typeof window !== 'undefined' &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
}

export function applyColorTheme() {
  try {
    const resolved = resolveColorTheme();
    document.documentElement.dataset.colorTheme = resolved;
    document.documentElement.classList.toggle('sl-theme-dark', resolved === 'dark');
    document.documentElement.classList.toggle('sl-theme-light', resolved !== 'dark');
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