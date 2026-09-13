import type { Pack, PackPhraseDef, Phrase } from '../types';
import { newId } from '../db/schema';

export const BTS_PHRASE_PACK_ID = 'seed-phrases-bts';
export const SKZ_PHRASE_PACK_ID = 'seed-phrases-skz';

const SPRING_DAY = 'seed-bts-springday';
const BUTTER = 'seed-bts-butter';
const DYNAMITE = 'seed-bts-dynamite';
const MANIAC = 'seed-skz-maniac';
const S_CLASS = 'seed-skz-sclass';

export const BTS_PHRASE_DEFS: PackPhraseDef[] = [
  { korean: '보고 싶다', translation: 'Я скучаю по тебе', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '다시 만나자', translation: 'Давай встретимся снова', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '얼마나 기다렸어', translation: 'Как долго я ждал', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '눈이 내린다', translation: 'Идёт снег', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '봄이 오면', translation: 'Когда придёт весна', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '조금만 더', translation: 'Ещё чуть-чуть', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '손을 잡아', translation: 'Возьми меня за руку', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '마음이 따뜻해', translation: 'На душе тепло', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '잊지 마', translation: 'Не забывай', sourcePackId: SPRING_DAY, themeId: 'bts' },
  { korean: '괜찮아', translation: 'Всё в порядке', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '춤을 춰요', translation: 'Танцую', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '노래를 불러요', translation: 'Пою песню', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '기분이 좋아요', translation: 'Настроение хорошее', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '자유롭게', translation: 'Свободно', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '우리 함께', translation: 'Мы вместе', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '같이 가자', translation: 'Пойдём вместе', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '내일도 보자', translation: 'Увидимся и завтра', sourcePackId: BUTTER, themeId: 'bts' },
  { korean: '사랑해', translation: 'Я люблю тебя', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '오늘 하루', translation: 'Сегодняшний день', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '너를 생각해', translation: 'Я думаю о тебе', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '빛이 나다', translation: 'Сиять', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '꿈꿔 왔어', translation: 'Я мечтал об этом', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '끝까지', translation: 'До конца', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '지금 이 순간', translation: 'В этот момент', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '함께 빛나자', translation: 'Давай сиять вместе', sourcePackId: DYNAMITE, themeId: 'bts' },
  { korean: '하루하루', translation: 'День за днём', sourcePackId: DYNAMITE, themeId: 'bts' },
];

export const SKZ_PHRASE_DEFS: PackPhraseDef[] = [
  { korean: '미치고 싶어', translation: 'Хочу сойти с ума (от энергии)', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '다르게 살아', translation: 'Живи иначе', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '이상해도 괜찮아', translation: 'Странным быть — нормально', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '느껴봐', translation: 'Почувствуй', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '자기야', translation: 'Эй, ты (ласково)', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '평범하지 않아', translation: 'Я не обычный', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '날 따라와', translation: 'Иди за мной', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '틀려도 괜찮아', translation: 'Не страшно ошибаться', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '숨겨왔던', translation: 'То, что скрывал', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '터져 나와', translation: 'Вырывается наружу', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '우리는 다르다', translation: 'Мы другие', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '정신 차려', translation: 'Соберись', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '완전 미쳤어', translation: 'Это полное безумие', sourcePackId: MANIAC, themeId: 'stray-kids' },
  { korean: '특별해', translation: 'Ты особенный', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '별처럼 빛나', translation: 'Сияй как звезда', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '자신 있게', translation: 'Уверенно', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '매력 넘쳐', translation: 'Переполнен очарованием', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '스타일이 달라', translation: 'Другой стиль', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '최고야', translation: 'Это лучшее', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '넌 S클래스', translation: 'Ты — S-класс', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '빛나는 너', translation: 'Сияющий ты', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '개성 있어', translation: 'У тебя есть индивидуальность', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '무대 위에서', translation: 'На сцене', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '우리 빛나자', translation: 'Давай сиять вместе', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '더 높이', translation: 'Ещё выше', sourcePackId: S_CLASS, themeId: 'stray-kids' },
  { korean: '자신감 넘쳐', translation: 'Уверенность переполняет', sourcePackId: S_CLASS, themeId: 'stray-kids' },
];

export const ZH_PHRASE_DEFS: PackPhraseDef[] = [
  { korean: '从前从前', translation: 'Когда-то, давным-давно', sourcePackId: 'seed-zh-qingtian', pinyin: 'cóng qián cóng qián' },
  { korean: '故事的开始', translation: 'Начало истории', sourcePackId: 'seed-zh-qingtian', pinyin: 'gù shi de kāi shǐ' },
  { korean: '童年的纸飞机', translation: 'Бумажный самолётик детства', sourcePackId: 'seed-zh-daoxiang', pinyin: 'tóng nián de zhǐ fēi jī' },
  { korean: '回家吧', translation: 'Вернись домой', sourcePackId: 'seed-zh-daoxiang', pinyin: 'huí jiā ba' },
  { korean: '只是因为在人群中多看了你一眼', translation: 'Просто потому что я лишний раз взглянул на тебя в толпе', sourcePackId: 'seed-zh-chuanqi', pinyin: 'zhǐ shì yīn wèi zài rén qún zhōng duō kàn le nǐ yī yǎn' },
  { korean: '你好，很高兴认识你', translation: 'Привет, рад познакомиться', sourcePackId: 'seed-zh-basics', pinyin: 'nǐ hǎo, hěn gāo xìng rèn shi nǐ' },
  { korean: '没关系，慢慢来', translation: 'Ничего страшного, не торопись', sourcePackId: 'seed-zh-basics', pinyin: 'méi guān xi, màn màn lái' },
  { korean: '明天见', translation: 'До завтра', sourcePackId: 'seed-zh-basics', pinyin: 'míng tiān jiàn' },
];

export const ALL_PHRASE_DEFS: PackPhraseDef[] = [...BTS_PHRASE_DEFS, ...SKZ_PHRASE_DEFS, ...ZH_PHRASE_DEFS];

const LEGACY_PHRASE_PACK_IDS = new Set([BTS_PHRASE_PACK_ID, SKZ_PHRASE_PACK_ID]);

const PHRASE_DEF_BY_KOREAN = new Map(ALL_PHRASE_DEFS.map((def) => [def.korean, def]));

const PHRASE_SOURCE_BY_KOREAN = new Map(
  ALL_PHRASE_DEFS.map((def) => [def.korean, def.sourcePackId ?? BTS_PHRASE_PACK_ID])
);

function legacyPhrasePackId(themeId: string): string {
  return themeId === 'stray-kids' ? SKZ_PHRASE_PACK_ID : BTS_PHRASE_PACK_ID;
}

export function phraseSourcePackId(phrase: Phrase): string | null {
  if (phrase.sourcePackId && !LEGACY_PHRASE_PACK_IDS.has(phrase.sourcePackId)) {
    return phrase.sourcePackId;
  }
  return PHRASE_SOURCE_BY_KOREAN.get(phrase.korean) ?? phrase.sourcePackId;
}

export function phraseThemeId(phrase: Phrase): string {
  const def = PHRASE_DEF_BY_KOREAN.get(phrase.korean);
  if (def?.themeId) return def.themeId;
  const packId = phraseSourcePackId(phrase);
  if (packId?.includes('-skz-')) return 'stray-kids';
  if (packId?.includes('-bts-')) return 'bts';
  return 'bts';
}

export function phrasesForTheme(phrases: Phrase[], themeId: string): Phrase[] {
  return phrases.filter((phrase) => phraseThemeId(phrase) === themeId);
}

export function phrasesForProfile(phrases: Phrase[], lang: 'ko' | 'zh', themeId?: string): Phrase[] {
  const byLang = phrases.filter((p) => (p.language ?? 'ko') === lang);
  if (lang === 'zh') return byLang;
  return themeId ? phrasesForTheme(byLang, themeId) : byLang;
}

export function phraseSourcePack(phrase: Phrase, packs: Pack[]): Pack | null {
  const packId = phraseSourcePackId(phrase);
  if (!packId) return null;
  return packs.find((p) => p.id === packId) ?? null;
}

export function seedPhrasesFromDefs(defs: PackPhraseDef[], now = Date.now()): Phrase[] {
  return defs.map((def, i) => ({
    id: newId(),
    korean: def.korean,
    translation: def.translation,
    audioUrl: null,
    sourcePackId: def.sourcePackId ?? legacyPhrasePackId(def.themeId ?? 'bts'),
    difficulty: def.difficulty ?? 'Начальный',
    createdAt: now + i,
    language: def.sourcePackId?.startsWith('seed-zh-') ? 'zh' : 'ko',
    pinyin: def.pinyin ?? null,
  }));
}

export function seedAllPhrases(now = Date.now()): Phrase[] {
  return seedPhrasesFromDefs(ALL_PHRASE_DEFS, now);
}

export function seedBtsPhrases(now = Date.now()): Phrase[] {
  return seedPhrasesFromDefs(BTS_PHRASE_DEFS, now);
}

/** @deprecated use seedAllPhrases */
export const btsSeedPhrases = seedBtsPhrases;
