import { storedThemeId } from './settings';
import type { BTSGreeting } from '../types';
import {
  BTS_PROFILES,
  SKZ_PROFILES,
  greetingQuotesForTheme,
  type MemberProfile,
  type GreetingQuote,
} from './greeting-quotes';

export type { MemberProfile, GreetingQuote };

/** Portrait slots per member: `{base}.png`, `{base}_02.png` … `{base}_07.png` */
export const PORTRAIT_VARIANT_COUNT = 7;

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  greetings: MemberProfile[];
  gifNames: string[];
  statusGifName: string;
  gifDir: string;
  portraitDir: string;
  portraitVariantCount: number;
  /** Drop PNGs here: public/portraits/victory/ or public/skz-portraits/victory/ */
  victoryPortraitDir: string;
  victoryPortraitNames: string[];
  victoryGifNames: string[];
}

export type VictoryAsset =
  | { kind: 'victory-portrait'; name: string }
  | { kind: 'gif'; name: string }
  | { kind: 'portrait'; name: string };

const BTS_GREETINGS = BTS_PROFILES;

const BTS_GIF_NAMES = [
  'bts_jhope_01',
  'bts_jhope_02',
  'bts_jhope_smile',
  'bts_jimin_01',
  'bts_jimin_02',
  'bts_jimin_concert',
  'bts_jin_black_swan',
  'bts_jin_idol',
  'bts_jin_life_goes_on',
  'bts_jk_please_wait',
  'bts_jungkook_01',
  'bts_jungkook_02',
  'bts_jungkook_03',
  'bts_rm_black_swan',
  'bts_rm_life_goes_on',
  'bts_rm_wink',
  'bts_suga_01',
  'bts_suga_02',
  'bts_suga_dna',
  'bts_v_01',
  'bts_v_02',
  'bts_v_life_goes_on',
];

const SKZ_GREETINGS = SKZ_PROFILES;

const SKZ_GIF_NAMES = [
  'skz_bangchan_01',
  'skz_leeknow_01',
  'skz_changbin_01',
  'skz_hyunjin_01',
  'skz_han_01',
  'skz_felix_01',
  'skz_seungmin_01',
  'skz_in_01',
];

/** Curated GIFs with win/celebration vibe — reuse files from public/bts-gifs/ */
const BTS_VICTORY_GIF_NAMES = [
  'bts_jimin_concert',
  'bts_jin_idol',
  'bts_jhope_smile',
  'bts_jungkook_01',
  'bts_jungkook_02',
  'bts_jungkook_03',
  'bts_jhope_01',
  'bts_jhope_02',
  'bts_v_01',
  'bts_v_02',
];

/** Drop custom victory PNGs into public/portraits/victory/ */
const BTS_VICTORY_PORTRAIT_NAMES = [
  'bts_rm_victory',
  'bts_jin_victory',
  'bts_suga_victory',
  'bts_jhope_victory',
  'bts_jimin_victory',
  'bts_v_victory',
  'bts_jungkook_victory',
];

const SKZ_VICTORY_GIF_NAMES = [...SKZ_GIF_NAMES];

/** Drop custom victory PNGs into public/skz-portraits/victory/ */
const SKZ_VICTORY_PORTRAIT_NAMES = [
  'skz_bangchan_victory',
  'skz_leeknow_victory',
  'skz_changbin_victory',
  'skz_hyunjin_victory',
  'skz_han_victory',
  'skz_felix_victory',
  'skz_seungmin_victory',
  'skz_in_victory',
];

export const THEMES: Theme[] = [
  {
    id: 'bts',
    name: 'BTS',
    emoji: '💜',
    greetings: BTS_GREETINGS,
    gifNames: BTS_GIF_NAMES,
    statusGifName: 'bts_jk_please_wait',
    gifDir: 'bts-gifs',
    portraitDir: 'portraits',
    portraitVariantCount: PORTRAIT_VARIANT_COUNT,
    victoryPortraitDir: 'portraits/victory',
    victoryPortraitNames: BTS_VICTORY_PORTRAIT_NAMES,
    victoryGifNames: BTS_VICTORY_GIF_NAMES,
  },
  {
    id: 'stray-kids',
    name: 'Stray Kids',
    emoji: '🖤',
    greetings: SKZ_GREETINGS,
    gifNames: SKZ_GIF_NAMES,
    statusGifName: 'skz_status',
    gifDir: 'skz-gifs',
    portraitDir: 'skz-portraits',
    portraitVariantCount: PORTRAIT_VARIANT_COUNT,
    victoryPortraitDir: 'skz-portraits/victory',
    victoryPortraitNames: SKZ_VICTORY_PORTRAIT_NAMES,
    victoryGifNames: SKZ_VICTORY_GIF_NAMES,
  },
];

export function getTheme(id: string): Theme {
  return THEMES.find((t) => t.id === id) ?? THEMES[0];
}

export function activeTheme(): Theme {
  return getTheme(storedThemeId());
}

export function themeProfiles(): MemberProfile[] {
  return activeTheme().greetings;
}

export function profileById(id: string | null): MemberProfile {
  const profiles = activeTheme().greetings;
  return profiles.find((p) => p.id === id) ?? profiles[0];
}

export function quoteIndexForSlot(memberId: string, variant: number, themeId?: string): number {
  const theme = themeId ? getTheme(themeId) : activeTheme();
  const memberIdx = theme.greetings.findIndex((p) => p.id === memberId);
  const pool = greetingQuotesForTheme(theme.id);
  if (pool.length === 0) return 0;
  return (Math.max(0, memberIdx) * PORTRAIT_VARIANT_COUNT + (variant - 1)) % pool.length;
}

export function resolveGreeting(id: string, variant: number, themeId?: string): BTSGreeting {
  const theme = themeId ? getTheme(themeId) : activeTheme();
  const profile = theme.greetings.find((p) => p.id === id) ?? theme.greetings[0];
  const pool = greetingQuotesForTheme(theme.id);
  const quote = pool[quoteIndexForSlot(profile.id, variant, theme.id)] ?? pool[0] ?? {
    korean: '',
    russian: '',
  };
  return {
    id: profile.id,
    artistName: profile.artistName,
    imageName: profile.imageName,
    korean: quote.korean,
    russian: quote.russian,
    chinese: quote.chinese,
  };
}

export function greetingById(id: string | null, variant = 1): BTSGreeting {
  const profile = profileById(id);
  return resolveGreeting(profile.id, variant);
}

export function randomGreeting(excludingId?: string): MemberProfile {
  const profiles = activeTheme().greetings;
  const pool = excludingId ? profiles.filter((p) => p.id !== excludingId) : profiles;
  return pool[Math.floor(Math.random() * pool.length)] ?? profiles[0];
}

/** Tap greeting card: next photo slot (new quote), then next member. */
export function nextGreetingPortrait(
  currentId: string,
  currentVariant: number
): { id: string; variant: number } {
  const profiles = activeTheme().greetings;
  if (currentVariant < PORTRAIT_VARIANT_COUNT) {
    return { id: currentId, variant: currentVariant + 1 };
  }
  const idx = profiles.findIndex((p) => p.id === currentId);
  const nextProfile = profiles[(idx + 1) % profiles.length] ?? profiles[0];
  return { id: nextProfile.id, variant: 1 };
}

export function randomGifName(): string {
  const names = activeTheme().gifNames;
  return names[Math.floor(Math.random() * names.length)] ?? names[0];
}

export function gifUrl(name: string): string {
  const theme = activeTheme();
  return `${import.meta.env.BASE_URL}${theme.gifDir}/${name}.gif`;
}

export function portraitUrl(name: string, themeId?: string): string {
  const theme = themeId ? getTheme(themeId) : activeTheme();
  return `${import.meta.env.BASE_URL}${theme.portraitDir}/${name}.png`;
}

/** e.g. bts_jungkook → bts_jungkook, bts_jungkook_02 … bts_jungkook_07 */
export function portraitVariantNames(
  baseName: string,
  count: number = PORTRAIT_VARIANT_COUNT
): string[] {
  const names = [baseName];
  for (let i = 2; i <= count; i++) {
    names.push(`${baseName}_${String(i).padStart(2, '0')}`);
  }
  return names;
}

export function randomPortraitVariant(count: number = PORTRAIT_VARIANT_COUNT): number {
  return 1 + Math.floor(Math.random() * count);
}

export function portraitVariantForSeed(seed: string, count: number = PORTRAIT_VARIANT_COUNT): number {
  return (hashString(seed) % count) + 1;
}

export function portraitCandidateUrls(
  baseName: string,
  options?: { themeId?: string; preferredVariant?: number; variantCount?: number }
): string[] {
  const count = options?.variantCount ?? PORTRAIT_VARIANT_COUNT;
  const names = portraitVariantNames(baseName, count);
  const preferred = options?.preferredVariant;
  const ordered =
    preferred !== undefined && preferred >= 1 && preferred <= names.length
      ? [names[preferred - 1], ...names.filter((_, i) => i !== preferred - 1)]
      : names;
  return ordered.map((name) => portraitUrl(name, options?.themeId));
}

function hashString(value: string): number {
  let hash = 0;
  for (let i = 0; i < value.length; i++) {
    hash = (hash * 31 + value.charCodeAt(i)) | 0;
  }
  return Math.abs(hash);
}

export function staticVictoryAssetPool(themeOrId?: Theme | string): VictoryAsset[] {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  return theme.victoryPortraitNames.map((name) => ({
    kind: 'victory-portrait',
    name,
  }));
}

export function victoryAssetPool(themeOrId?: Theme | string): VictoryAsset[] {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  const portraits = staticVictoryAssetPool(theme);
  const gifs: VictoryAsset[] = theme.victoryGifNames.map((name) => ({
    kind: 'gif',
    name,
  }));
  return [...portraits, ...gifs];
}

export function victoryAssetUrl(asset: VictoryAsset, themeOrId?: Theme | string): string {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  const base = import.meta.env.BASE_URL;
  if (asset.kind === 'victory-portrait') {
    return `${base}${theme.victoryPortraitDir}/${asset.name}.png`;
  }
  if (asset.kind === 'gif') {
    return `${base}${theme.gifDir}/${asset.name}.gif`;
  }
  return `${base}${theme.portraitDir}/${asset.name}.png`;
}

export function pickVictoryAsset(themeOrId?: Theme | string, seed?: string): VictoryAsset | null {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  const pool = victoryAssetPool(theme);
  if (pool.length === 0) return null;
  const day = seed ?? new Date().toISOString().slice(0, 10);
  const idx = hashString(`${day}:${theme.id}`) % pool.length;
  return pool[idx] ?? null;
}

export function pickStaticVictoryAsset(themeOrId?: Theme | string, seed?: string): VictoryAsset | null {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  const pool = staticVictoryAssetPool(theme);
  if (pool.length === 0) return null;
  const day = seed ?? new Date().toISOString().slice(0, 10);
  const idx = hashString(`${day}:${theme.id}`) % pool.length;
  return pool[idx] ?? null;
}

export function memberNameForVictoryAsset(asset: VictoryAsset, themeOrId?: Theme | string): string {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  for (const g of theme.greetings) {
    if (asset.name.includes(g.imageName) || asset.name.includes(`_${g.id}`)) {
      return g.artistName;
    }
  }
  return theme.name;
}

function staticBannerMediaCandidates(
  themeOrId?: Theme | string,
  seed?: string
): { url: string; memberName: string; asset: VictoryAsset }[] {
  const theme =
    typeof themeOrId === 'string'
      ? getTheme(themeOrId)
      : themeOrId ?? activeTheme();
  const day = seed ?? new Date().toISOString().slice(0, 10);
  const pool = staticVictoryAssetPool(theme);
  const primary = pickStaticVictoryAsset(theme, day);
  const ordered: VictoryAsset[] = [];
  if (primary) ordered.push(primary);
  for (const asset of pool) {
    if (primary && asset.kind === primary.kind && asset.name === primary.name) continue;
    ordered.push(asset);
  }
  for (const g of theme.greetings) {
    for (const name of portraitVariantNames(g.imageName, theme.portraitVariantCount)) {
      ordered.push({ kind: 'portrait', name });
    }
  }
  return ordered.map((asset) => ({
    asset,
    url: victoryAssetUrl(asset, theme),
    memberName: memberNameForVictoryAsset(asset, theme),
  }));
}

/** Static PNG only — victory portraits + member portraits (no GIF). */
export function proverbBannerMediaCandidates(
  themeOrId?: Theme | string,
  seed?: string
): { url: string; memberName: string; asset: VictoryAsset }[] {
  return staticBannerMediaCandidates(themeOrId, seed);
}