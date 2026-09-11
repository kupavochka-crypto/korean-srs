import type { BTSGreeting } from '../types';

export const BTS_GREETINGS: BTSGreeting[] = [
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

export const BTS_GIF_NAMES = [
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

export function randomGreeting(excluding?: BTSGreeting): BTSGreeting {
  const pool = excluding ? BTS_GREETINGS.filter((g) => g.id !== excluding.id) : BTS_GREETINGS;
  return pool[Math.floor(Math.random() * pool.length)] ?? BTS_GREETINGS[0];
}

export function randomGifName(): string {
  return BTS_GIF_NAMES[Math.floor(Math.random() * BTS_GIF_NAMES.length)] ?? BTS_GIF_NAMES[0];
}

export function gifUrl(name: string): string {
  return `${import.meta.env.BASE_URL}bts-gifs/${name}.gif`;
}

export function portraitUrl(name: string): string {
  return `${import.meta.env.BASE_URL}portraits/${name}.png`;
}