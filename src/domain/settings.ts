import type { LearningLanguage } from '../types';
import {
  DEFAULT_MISSION_WORD_COUNT,
  isMissionWordCount,
  type MissionWordCount,
} from './mission-word-count';

const REWARD_THRESHOLD_KEY = 'reward_threshold';
const GEMINI_PROXY_KEY = 'gemini_proxy_url';
const THEME_KEY = 'theme_id';
const SHOW_ROMAJA_KEY = 'show_romaja';
const GREETING_KEY_PREFIX = 'greeting_';
const CARD_VOICE_KEY = 'voice_card';
const LISTEN_VOICE_KEY = 'voice_listen';
const COLOR_THEME_KEY = 'color_theme';
const DAILY_WORD_GOAL_KEY = 'daily_word_goal';
const DAILY_WORD_GOAL_KO_KEY = 'daily_goal_ko';
const DAILY_WORD_GOAL_ZH_KEY = 'daily_goal_zh';
const ONBOARDING_KEY = 'onboarding_completed';
const MYMEMORY_EMAIL_KEY = 'mymemory_email';
const LEARNING_LANG_KEY = 'learning_language';
const RECENT_CATEGORIES_KEY = 'recent_category_ids';
const RECENT_CATEGORIES_KO_KEY = 'recent_categories_ko';
const RECENT_CATEGORIES_ZH_KEY = 'recent_categories_zh';
const LAST_REVIEW_CATEGORY_KO_KEY = 'last_review_category_id_ko';
const LAST_REVIEW_CATEGORY_ZH_KEY = 'last_review_category_id_zh';
const LAST_REVIEW_CATEGORY_WORDS_KO_KEY = 'last_review_category_words_ko';
const LAST_REVIEW_CATEGORY_WORDS_ZH_KEY = 'last_review_category_words_zh';
const SELECTED_MISSION_PACK_KEY = 'selected_mission_pack_id';
const SELECTED_MISSION_KO_KEY = 'selected_mission_ko';
const SELECTED_MISSION_ZH_KEY = 'selected_mission_zh';
const PROFILE_SETTINGS_MIGRATED_KEY = 'profile_settings_migrated_v1';
const TAGS_TO_CATEGORIES_MIGRATED_KEY = 'tags_to_categories_migrated_v1';
const CONTENT_CATALOG_VERSION_KEY = 'content_catalog_version';
const CONTENT_CATALOG_SYNCED_AT_KEY = 'content_catalog_synced_at';
const MISSION_WORD_COUNT_KO_KEY = 'mission_word_count_ko';
const MISSION_WORD_COUNT_ZH_KEY = 'mission_word_count_zh';
const VISIBLE_MISSIONS_KO_KEY = 'visible_mission_ids_ko';
const VISIBLE_MISSIONS_ZH_KEY = 'visible_mission_ids_zh';
const TRUE_RETENTION_MODE_KEY = 'stats_true_retention';

export const CONTENT_SYNC_INTERVAL_MS = 24 * 60 * 60 * 1000;

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

function readDailyGoalKey(key: string): number | null {
  try {
    const raw = Number(localStorage.getItem(key));
    if (Number.isInteger(raw) && raw >= 1 && raw <= 200) return raw;
  } catch {
    // storage unavailable
  }
  return null;
}

export function storedDailyWordGoalFor(lang: LearningLanguage): number {
  const key = lang === 'zh' ? DAILY_WORD_GOAL_ZH_KEY : DAILY_WORD_GOAL_KO_KEY;
  return readDailyGoalKey(key) ?? DEFAULT_DAILY_WORD_GOAL;
}

export function saveDailyWordGoalFor(lang: LearningLanguage, value: number) {
  try {
    const clamped = Math.max(1, Math.min(200, Math.floor(value)));
    const key = lang === 'zh' ? DAILY_WORD_GOAL_ZH_KEY : DAILY_WORD_GOAL_KO_KEY;
    localStorage.setItem(key, String(clamped));
  } catch {
    // storage unavailable
  }
}

/** @deprecated use storedDailyWordGoalFor(activeLang) */
export function storedDailyWordGoal(): number {
  return storedDailyWordGoalFor(storedLearningLanguage());
}

/** @deprecated use saveDailyWordGoalFor(activeLang, value) */
export function saveDailyWordGoal(value: number) {
  saveDailyWordGoalFor(storedLearningLanguage(), value);
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

function readRecentCategoryIds(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string').slice(0, 5) : [];
  } catch {
    return [];
  }
}

export function storedRecentCategoryIdsFor(lang: LearningLanguage): string[] {
  const key = lang === 'zh' ? RECENT_CATEGORIES_ZH_KEY : RECENT_CATEGORIES_KO_KEY;
  return readRecentCategoryIds(key);
}

export function pushRecentCategoryIdFor(lang: LearningLanguage, id: string | null) {
  if (!id) return;
  try {
    const key = lang === 'zh' ? RECENT_CATEGORIES_ZH_KEY : RECENT_CATEGORIES_KO_KEY;
    const next = [id, ...storedRecentCategoryIdsFor(lang).filter((x) => x !== id)].slice(0, 5);
    localStorage.setItem(key, JSON.stringify(next));
  } catch {
    // storage unavailable
  }
}

/** @deprecated use storedRecentCategoryIdsFor(activeLang) */
export function storedRecentCategoryIds(): string[] {
  return storedRecentCategoryIdsFor(storedLearningLanguage());
}

/** @deprecated use pushRecentCategoryIdFor(activeLang, id) */
export function pushRecentCategoryId(id: string | null) {
  pushRecentCategoryIdFor(storedLearningLanguage(), id);
}

export function storedLastReviewCategoryIdFor(lang: LearningLanguage): string | null {
  try {
    const key = lang === 'zh' ? LAST_REVIEW_CATEGORY_ZH_KEY : LAST_REVIEW_CATEGORY_KO_KEY;
    const raw = localStorage.getItem(key)?.trim();
    return raw || null;
  } catch {
    return null;
  }
}

export function saveLastReviewCategoryIdFor(lang: LearningLanguage, id: string | null) {
  try {
    const key = lang === 'zh' ? LAST_REVIEW_CATEGORY_ZH_KEY : LAST_REVIEW_CATEGORY_KO_KEY;
    if (id) localStorage.setItem(key, id);
    else localStorage.removeItem(key);
  } catch {
    // storage unavailable
  }
}

export function storedLastReviewCategoryWordCountFor(lang: LearningLanguage): number {
  try {
    const key = lang === 'zh' ? LAST_REVIEW_CATEGORY_WORDS_ZH_KEY : LAST_REVIEW_CATEGORY_WORDS_KO_KEY;
    const raw = localStorage.getItem(key);
    if (!raw) return 0;
    const n = Number.parseInt(raw, 10);
    return Number.isFinite(n) && n > 0 ? n : 0;
  } catch {
    return 0;
  }
}

export function saveLastReviewCategoryWordCountFor(lang: LearningLanguage, count: number) {
  try {
    const key = lang === 'zh' ? LAST_REVIEW_CATEGORY_WORDS_ZH_KEY : LAST_REVIEW_CATEGORY_WORDS_KO_KEY;
    if (count > 0) localStorage.setItem(key, String(count));
    else localStorage.removeItem(key);
  } catch {
    // storage unavailable
  }
}

/** Empty string = auto daily mission rotation */
export function storedSelectedMissionPackIdFor(lang: LearningLanguage): string {
  try {
    const key = lang === 'zh' ? SELECTED_MISSION_ZH_KEY : SELECTED_MISSION_KO_KEY;
    return localStorage.getItem(key)?.trim() ?? '';
  } catch {
    return '';
  }
}

export function saveSelectedMissionPackIdFor(lang: LearningLanguage, packId: string | null) {
  try {
    const key = lang === 'zh' ? SELECTED_MISSION_ZH_KEY : SELECTED_MISSION_KO_KEY;
    if (packId?.trim()) {
      localStorage.setItem(key, packId.trim());
    } else {
      localStorage.removeItem(key);
    }
  } catch {
    // storage unavailable
  }
}

/** @deprecated use storedSelectedMissionPackIdFor(activeLang) */
export function storedSelectedMissionPackId(): string {
  return storedSelectedMissionPackIdFor(storedLearningLanguage());
}

/** @deprecated use saveSelectedMissionPackIdFor(activeLang, packId) */
export function saveSelectedMissionPackId(packId: string | null) {
  saveSelectedMissionPackIdFor(storedLearningLanguage(), packId);
}

export function storedMissionWordCountFor(lang: LearningLanguage): MissionWordCount {
  try {
    const key = lang === 'zh' ? MISSION_WORD_COUNT_ZH_KEY : MISSION_WORD_COUNT_KO_KEY;
    const raw = localStorage.getItem(key);
    if (raw && isMissionWordCount(raw === 'all' ? 'all' : Number(raw))) {
      return raw === 'all' ? 'all' : (Number(raw) as MissionWordCount);
    }
  } catch {
    // storage unavailable
  }
  return DEFAULT_MISSION_WORD_COUNT;
}

export function saveMissionWordCountFor(lang: LearningLanguage, count: MissionWordCount) {
  try {
    const key = lang === 'zh' ? MISSION_WORD_COUNT_ZH_KEY : MISSION_WORD_COUNT_KO_KEY;
    localStorage.setItem(key, String(count));
  } catch {
    // storage unavailable
  }
}

export function storedVisibleMissionIdsFor(lang: LearningLanguage): string[] {
  try {
    const key = lang === 'zh' ? VISIBLE_MISSIONS_ZH_KEY : VISIBLE_MISSIONS_KO_KEY;
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? parsed.filter((id) => typeof id === 'string') : [];
  } catch {
    return [];
  }
}

export function saveVisibleMissionIdsFor(lang: LearningLanguage, ids: string[]) {
  try {
    const key = lang === 'zh' ? VISIBLE_MISSIONS_ZH_KEY : VISIBLE_MISSIONS_KO_KEY;
    localStorage.setItem(key, JSON.stringify(ids));
  } catch {
    // storage unavailable
  }
}

/** One-time migration: legacy single-profile keys → per-lang keys */
export function migrateProfileSettings(): void {
  try {
    if (localStorage.getItem(PROFILE_SETTINGS_MIGRATED_KEY) === '1') return;

    const legacyGoal = readDailyGoalKey(DAILY_WORD_GOAL_KEY);
    if (legacyGoal !== null && readDailyGoalKey(DAILY_WORD_GOAL_KO_KEY) === null) {
      localStorage.setItem(DAILY_WORD_GOAL_KO_KEY, String(legacyGoal));
    }
    if (readDailyGoalKey(DAILY_WORD_GOAL_ZH_KEY) === null) {
      localStorage.setItem(DAILY_WORD_GOAL_ZH_KEY, String(DEFAULT_DAILY_WORD_GOAL));
    }

    const legacyMission = localStorage.getItem(SELECTED_MISSION_PACK_KEY)?.trim();
    if (legacyMission && !localStorage.getItem(SELECTED_MISSION_KO_KEY)) {
      localStorage.setItem(SELECTED_MISSION_KO_KEY, legacyMission);
    }

    const legacyRecent = localStorage.getItem(RECENT_CATEGORIES_KEY);
    if (legacyRecent && !localStorage.getItem(RECENT_CATEGORIES_KO_KEY)) {
      localStorage.setItem(RECENT_CATEGORIES_KO_KEY, legacyRecent);
    }

    localStorage.setItem(PROFILE_SETTINGS_MIGRATED_KEY, '1');
  } catch {
    // storage unavailable
  }
}

export function tagsToCategoriesMigrated(): boolean {
  try {
    return localStorage.getItem(TAGS_TO_CATEGORIES_MIGRATED_KEY) === '1';
  } catch {
    return false;
  }
}

export function markTagsToCategoriesMigrated(): void {
  try {
    localStorage.setItem(TAGS_TO_CATEGORIES_MIGRATED_KEY, '1');
  } catch {
    // storage unavailable
  }
}

export function storedContentCatalogVersion(): number {
  try {
    const raw = localStorage.getItem(CONTENT_CATALOG_VERSION_KEY);
    if (!raw) return 0;
    const n = Number(raw);
    return Number.isFinite(n) ? n : 0;
  } catch {
    return 0;
  }
}

export function saveContentCatalogVersion(version: number): void {
  try {
    localStorage.setItem(CONTENT_CATALOG_VERSION_KEY, String(version));
  } catch {
    // storage unavailable
  }
}

export function storedContentCatalogSyncedAt(): number | null {
  try {
    const raw = localStorage.getItem(CONTENT_CATALOG_SYNCED_AT_KEY);
    if (!raw) return null;
    const n = Number(raw);
    return Number.isFinite(n) ? n : null;
  } catch {
    return null;
  }
}

export function saveContentCatalogSyncedAt(timestamp: number): void {
  try {
    localStorage.setItem(CONTENT_CATALOG_SYNCED_AT_KEY, String(timestamp));
  } catch {
    // storage unavailable
  }
}

export function storedTrueRetentionMode(): boolean {
  try {
    return localStorage.getItem(TRUE_RETENTION_MODE_KEY) === '1';
  } catch {
    return false;
  }
}

export function saveTrueRetentionMode(enabled: boolean): void {
  try {
    localStorage.setItem(TRUE_RETENTION_MODE_KEY, enabled ? '1' : '0');
  } catch {
    // storage unavailable
  }
}
