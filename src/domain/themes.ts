import { storedThemeId } from './settings';
import type { BTSGreeting } from '../types';

export interface Theme {
  id: string;
  name: string;
  emoji: string;
  greetings: BTSGreeting[];
  gifNames: string[];
  statusGifName: string;
  gifDir: string;
  portraitDir: string;
}

const BTS_GREETINGS: BTSGreeting[] = [
  {
    id: 'rm',
    artistName: 'RM',
    imageName: 'bts_rm',
    russian: 'Каждый день — шанс стать собой',
    korean: '매일은 더 나다운 내가 될 기회야',
  },
  {
    id: 'jin',
    artistName: 'Jin',
    imageName: 'bts_jin',
    russian: 'Ты уже достоин любви — просто живи',
    korean: '너는 이미 사랑받을 자격이 있어',
  },
  {
    id: 'suga',
    artistName: 'SUGA',
    imageName: 'bts_suga',
    russian: 'Даже маленький шаг — это уже прогресс',
    korean: '작은 한 걸음도 이미 성장이야',
  },
  {
    id: 'jhope',
    artistName: 'j-hope',
    imageName: 'bts_jhope',
    russian: 'Начни с улыбки — путь станет светлее',
    korean: '미소부터 시작하면 길이 밝아져',
  },
  {
    id: 'jimin',
    artistName: 'Jimin',
    imageName: 'bts_jimin',
    russian: 'Будь мягче к себе и смелее вперёд',
    korean: '자신에게는 다정하게, 앞으로는 용기 있게',
  },
  {
    id: 'v',
    artistName: 'V',
    imageName: 'bts_v',
    russian: 'Иди своим ритмом — он тоже верный',
    korean: '네 리듬대로 가도 괜찮아',
  },
  {
    id: 'jungkook',
    artistName: 'Jungkook',
    imageName: 'bts_jungkook',
    russian: 'Ещё одна попытка — и ты уже ближе',
    korean: '한 번 더 하면 이미 더 가까워져',
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
  },
  {
    id: 'leeknow',
    artistName: 'Lee Know',
    imageName: 'skz_leeknow',
    russian: 'Не торопись — всё придёт в свой срок',
    korean: '서두르지 마, 모든 게 제때 온다고',
  },
  {
    id: 'changbin',
    artistName: 'Changbin',
    imageName: 'skz_changbin',
    russian: 'Попробуй ещё раз — и не сдавайся',
    korean: '다시 도전해 봐, 포기하지 마',
  },
  {
    id: 'hyunjin',
    artistName: 'Hyunjin',
    imageName: 'skz_hyunjin',
    russian: 'Даже в темноте ты сияешь',
    korean: '어둠 속에서도 넌 빛나고 있어',
  },
  {
    id: 'han',
    artistName: 'HAN',
    imageName: 'skz_han',
    russian: 'Сегодня ты тоже молодец',
    korean: '오늘도 넌 정말 잘하고 있어',
  },
  {
    id: 'felix',
    artistName: 'Felix',
    imageName: 'skz_felix',
    russian: 'Не бойся быть собой',
    korean: '너 자신을 있는 그대로, 두려워하지 마',
  },
  {
    id: 'seungmin',
    artistName: 'Seungmin',
    imageName: 'skz_seungmin',
    russian: 'Один шаг за другим — и ты справишься',
    korean: '하나씩 천천히, 넌 할 수 있어',
  },
  {
    id: 'in',
    artistName: 'I.N',
    imageName: 'skz_in',
    russian: 'Улыбнись — ты на верном пути',
    korean: '미소 지어 봐, 넌 올바른 길에 있어',
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

export function randomGifName(): string {
  const names = activeTheme().gifNames;
  return names[Math.floor(Math.random() * names.length)] ?? names[0];
}

export function gifUrl(name: string): string {
  const theme = activeTheme();
  return `${import.meta.env.BASE_URL}${theme.gifDir}/${name}.gif`;
}

export function portraitUrl(name: string): string {
  const theme = activeTheme();
  return `${import.meta.env.BASE_URL}${theme.portraitDir}/${name}.png`;
}