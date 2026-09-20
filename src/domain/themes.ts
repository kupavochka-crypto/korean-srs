import { storedThemeId } from './settings';
import type { BTSGreeting } from '../types';

/** Portrait slots per member: `{base}.png`, `{base}_02.png` … `{base}_07.png` */
export const PORTRAIT_VARIANT_COUNT = 7;

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  greetings: BTSGreeting[];
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

const BTS_GREETINGS: BTSGreeting[] = [
  {
    id: 'rm',
    artistName: 'RM',
    imageName: 'bts_rm',
    russian: 'Каждый день — шанс стать собой',
    korean: '매일은 더 나다운 내가 될 기회야',
    chinese: '每天都是成为更好自己的机会',
  },
  {
    id: 'jin',
    artistName: 'Jin',
    imageName: 'bts_jin',
    russian: 'Ты уже достоин любви — просто живи',
    korean: '너는 이미 사랑받을 자격이 있어',
    chinese: '你已经值得被爱——好好生活就好',
  },
  {
    id: 'suga',
    artistName: 'SUGA',
    imageName: 'bts_suga',
    russian: 'Даже маленький шаг — это уже прогресс',
    korean: '작은 한 걸음도 이미 성장이야',
    chinese: '哪怕一小步，也是成长',
  },
  {
    id: 'jhope',
    artistName: 'j-hope',
    imageName: 'bts_jhope',
    russian: 'Начни с улыбки — путь станет светлее',
    korean: '미소부터 시작하면 길이 밝아져',
    chinese: '从微笑开始，路会更亮',
  },
  {
    id: 'jimin',
    artistName: 'Jimin',
    imageName: 'bts_jimin',
    russian: 'Будь мягче к себе и смелее вперёд',
    korean: '자신에게는 다정하게, 앞으로는 용기 있게',
    chinese: '对自己温柔一点，向前勇敢一点',
  },
  {
    id: 'v',
    artistName: 'V',
    imageName: 'bts_v',
    russian: 'Иди своим ритмом — он тоже верный',
    korean: '네 리듬대로 가도 괜찮아',
    chinese: '按你的节奏走，也没问题',
  },
  {
    id: 'jungkook',
    artistName: 'Jungkook',
    imageName: 'bts_jungkook',
    russian: 'Ещё одна попытка — и ты уже ближе',
    korean: '한 번 더 하면 이미 더 가까워져',
    chinese: '再试一次，你就更近了',
  },
];

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

const SKZ_GREETINGS: BTSGreeting[] = [
  {
    id: 'bangchan',
    artistName: 'Bang Chan',
    imageName: 'skz_bangchan',
    russian: 'Ты поднимаешься с каждым новым днём',
    korean: '새로운 날마다 넌 한 걸음씩 올라가고 있어',
    chinese: '每一天你都在向上一步',
  },
  {
    id: 'leeknow',
    artistName: 'Lee Know',
    imageName: 'skz_leeknow',
    russian: 'Не торопись — всё придёт в свой срок',
    korean: '서두르지 마, 모든 게 제때 온다고',
    chinese: '别急，一切都会准时到来',
  },
  {
    id: 'changbin',
    artistName: 'Changbin',
    imageName: 'skz_changbin',
    russian: 'Попробуй ещё раз — и не сдавайся',
    korean: '다시 도전해 봐, 포기하지 마',
    chinese: '再挑战一次，别放弃',
  },
  {
    id: 'hyunjin',
    artistName: 'Hyunjin',
    imageName: 'skz_hyunjin',
    russian: 'Даже в темноте ты сияешь',
    korean: '어둠 속에서도 넌 빛나고 있어',
    chinese: '即使在黑暗里你也在发光',
  },
  {
    id: 'han',
    artistName: 'HAN',
    imageName: 'skz_han',
    russian: 'Сегодня ты тоже молодец',
    korean: '오늘도 넌 정말 잘하고 있어',
    chinese: '今天你也做得很好',
  },
  {
    id: 'felix',
    artistName: 'Felix',
    imageName: 'skz_felix',
    russian: 'Не бойся быть собой',
    korean: '너 자신을 있는 그대로, 두려워하지 마',
    chinese: '做你自己，别害怕',
  },
  {
    id: 'seungmin',
    artistName: 'Seungmin',
    imageName: 'skz_seungmin',
    russian: 'Один шаг за другим — и ты справишься',
    korean: '하나씩 천천히, 넌 할 수 있어',
    chinese: '一步一步来，你可以的',
  },
  {
    id: 'in',
    artistName: 'I.N',
    imageName: 'skz_in',
    russian: 'Улыбнись — ты на верном пути',
    korean: '미소 지어 봐, 넌 올바른 길에 있어',
    chinese: '笑一笑，你在正确的路上',
  },
];

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

export function themeGreetings(): BTSGreeting[] {
  return activeTheme().greetings;
}

export function greetingById(id: string | null): BTSGreeting {
  const greetings = activeTheme().greetings;
  return greetings.find((g) => g.id === id) ?? greetings[0];
}

export function randomGreeting(excluding?: BTSGreeting): BTSGreeting {
  const greetings = activeTheme().greetings;
  const pool = excluding ? greetings.filter((g) => g.id !== excluding.id) : greetings;
  return pool[Math.floor(Math.random() * pool.length)] ?? greetings[0];
}

/** Tap greeting card: next photo slot, then next member. */
export function nextGreetingPortrait(
  current: BTSGreeting,
  currentVariant: number
): { greeting: BTSGreeting; variant: number } {
  const greetings = activeTheme().greetings;
  if (currentVariant < PORTRAIT_VARIANT_COUNT) {
    return { greeting: current, variant: currentVariant + 1 };
  }
  const idx = greetings.findIndex((g) => g.id === current.id);
  const nextGreeting = greetings[(idx + 1) % greetings.length] ?? greetings[0];
  return { greeting: nextGreeting, variant: 1 };
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