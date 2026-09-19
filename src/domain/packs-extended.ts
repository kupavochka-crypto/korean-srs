import type { Pack } from '../types';
import { buildMissionPack, mergeWords } from './pack-builder';

const KO_BASE: readonly (readonly [string, string])[] = [
  ['사랑', 'любовь'],
  ['밤', 'ночь'],
  ['별', 'звезда'],
  ['꿈', 'мечта'],
  ['마음', 'сердце, душа'],
  ['함께', 'вместе'],
  ['행복', 'счастье'],
  ['노래', 'песня'],
  ['춤', 'танец'],
  ['빛', 'свет'],
  ['시간', 'время'],
  ['기억', 'воспоминание'],
  ['오늘', 'сегодня'],
  ['하늘', 'небо'],
  ['친구', 'друг'],
];

const ZH_BASE: readonly (readonly [string, string, string])[] = [
  ['你好', 'привет', 'nǐ hǎo'],
  ['谢谢', 'спасибо', 'xiè xie'],
  ['喜欢', 'нравиться', 'xǐ huan'],
  ['今天', 'сегодня', 'jīn tiān'],
  ['明天', 'завтра', 'míng tiān'],
  ['朋友', 'друг', 'péng you'],
  ['心', 'сердце', 'xīn'],
  ['爱', 'любовь', 'ài'],
  ['梦', 'мечта', 'mèng'],
  ['星', 'звезда', 'xīng'],
  ['时间', 'время', 'shí jiān'],
  ['回忆', 'воспоминание', 'huí yì'],
  ['一起', 'вместе', 'yì qǐ'],
  ['快乐', 'радость', 'kuài lè'],
  ['故事', 'история', 'gù shi'],
];

type KoDef = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  colorHex: string;
  createdAt: number;
  theme: readonly (readonly [string, string])[];
};

type ZhDef = {
  id: string;
  title: string;
  subtitle: string;
  emoji: string;
  colorHex: string;
  createdAt: number;
  theme: readonly (readonly [string, string, string])[];
};

const EXTENDED_KO: KoDef[] = [
  { id: 'seed-bts-bst', title: 'BTS — Blood Sweat & Tears', subtitle: 'Путь через боль · 피 땀 눈물', emoji: '🩸', colorHex: '#B71C1C', createdAt: 20, theme: [['피', 'кровь'], ['땀', 'пот'], ['눈물', 'слёзы'], ['운명', 'судьба'], ['깨닫다', 'осознавать']] },
  { id: 'seed-bts-fire', title: 'BTS — FIRE', subtitle: 'Зажигай · 불타올라', emoji: '🔥', colorHex: '#FF5722', createdAt: 21, theme: [['불', 'огонь'], ['타오르다', 'пылать'], ['열정', 'страсть'], ['후회', 'сожаление'], ['젊음', 'молодость']] },
  { id: 'seed-bts-dna', title: 'BTS — DNA', subtitle: 'Связь навсегда · DNA', emoji: '🧬', colorHex: '#E91E63', createdAt: 22, theme: [['운명', 'судьба'], ['연결', 'связь'], ['영원', 'вечность'], ['설레다', 'трепетать'], ['너', 'ты']] },
  { id: 'seed-bts-idol', title: 'BTS — IDOL', subtitle: 'Любовь фанатов · 아이돌', emoji: '👑', colorHex: '#9C27B0', createdAt: 23, theme: [['아이돌', 'айдол'], ['팬', 'фанат'], ['무대', 'сцена'], ['자신', 'уверенность'], ['빛나다', 'сиять']] },
  { id: 'seed-bts-lgo', title: 'BTS — Life Goes On', subtitle: 'Жизнь продолжается', emoji: '🍂', colorHex: '#795548', createdAt: 24, theme: [['겨울', 'зима'], ['봄', 'весна'], ['위로', 'утешение'], ['일상', 'повседневность'], ['다시', 'снова']] },
  { id: 'seed-bts-micdrop', title: 'BTS — MIC Drop', subtitle: 'Мощный финал · 마이크 드롭', emoji: '🎤', colorHex: '#212121', createdAt: 25, theme: [['마이크', 'микрофон'], ['성공', 'успех'], ['증명', 'доказательство'], ['반전', 'переворот'], ['자랑', 'гордость']] },
  { id: 'seed-skz-thunderous', title: 'Stray Kids — Thunderous', subtitle: 'Громовой удар · 소리꾼', emoji: '⚡', colorHex: '#FFC107', createdAt: 26, theme: [['천둥', 'гром'], ['소리', 'звук'], ['울리다', 'реverb/звучать'], ['전통', 'традиция'], ['비트', 'бит']] },
  { id: 'seed-skz-case143', title: 'Stray Kids — CASE 143', subtitle: 'Код любви · CASE 143', emoji: '💘', colorHex: '#F06292', createdAt: 27, theme: [['사건', 'случай'], ['코드', 'код'], ['고백', 'признание'], ['설레다', 'волноваться'], ['너', 'ты']] },
  { id: 'seed-skz-backdoor', title: 'Stray Kids — Back Door', subtitle: 'Секретный вход · Back Door', emoji: '🚪', colorHex: '#00897B', createdAt: 28, theme: [['문', 'дверь'], ['비밀', 'секрет'], ['파티', 'вечеринка'], ['분위기', 'атмосфера'], ['신나다', 'зажигать']] },
  { id: 'seed-skz-rockstar', title: 'Stray Kids — ROCK-STAR', subtitle: 'Рок-звезда · ROCK-STAR', emoji: '🎸', colorHex: '#546E7A', createdAt: 29, theme: [['록', 'рок'], ['스타', 'звезда'], ['카리스마', 'charisma'], ['무대', 'сцена'], ['열정', 'страсть']] },
  { id: 'seed-bp-hylt', title: 'BLACKPINK — How You Like That', subtitle: 'Как тебе это · How You Like That', emoji: '💗', colorHex: '#AD1457', createdAt: 30, theme: [['어둠', 'тьма'], ['빛', 'свет'], ['역습', 'контрудар'], ['자신감', 'уверенность'], ['멋지다', 'круто']] },
  { id: 'seed-bp-pinkvenom', title: 'BLACKPINK — Pink Venom', subtitle: 'Розовый яд · Pink Venom', emoji: '🐍', colorHex: '#D81B60', createdAt: 31, theme: [['독', 'яд'], ['분홍', 'розовый'], ['매혹', 'очарование'], ['위험', 'опасность'], ['강렬', 'интенсивный']] },
  { id: 'seed-bp-killthislove', title: 'BLACKPINK — Kill This Love', subtitle: 'Разрушь любовь · Kill This Love', emoji: '💔', colorHex: '#880E4F', createdAt: 32, theme: [['사랑', 'любовь'], ['깨다', 'разбить'], ['용기', 'смелость'], ['이별', 'расставание'], ['새로', 'заново']] },
  { id: 'seed-nj-ditto', title: 'NewJeans — Ditto', subtitle: 'Эхо чувств · Ditto', emoji: '🐰', colorHex: '#5C6BC0', createdAt: 33, theme: [['그리움', 'тоска'], ['겨울', 'зима'], ['운동장', 'спортплощадка'], ['너', 'ты'], ['기억', 'память']] },
  { id: 'seed-nj-hypeboy', title: 'NewJeans — Hype Boy', subtitle: 'Тот самый парень · Hype Boy', emoji: '💫', colorHex: '#3949AB', createdAt: 34, theme: [['소년', 'парень'], ['두근', 'тук-тук'], ['설렘', 'волнение'], ['귀엽다', 'милый'], ['좋아', 'нравится']] },
  { id: 'seed-nj-supershy', title: 'NewJeans — Super Shy', subtitle: 'Супер стеснительная · Super Shy', emoji: '😳', colorHex: '#7986CB', createdAt: 35, theme: [['수줍', 'стеснительный'], ['전화', 'телефон'], ['기다리다', 'ждать'], ['용기', 'смелость'], ['고백', 'признание']] },
  { id: 'seed-aespa-nextlevel', title: 'aespa — Next Level', subtitle: 'Новый уровень · Next Level', emoji: '🦾', colorHex: '#7B1FA2', createdAt: 36, theme: [['다음', 'следующий'], ['레벨', 'уровень'], ['세계', 'мир'], ['모험', 'приключение'], ['도전', 'вызов']] },
  { id: 'seed-aespa-spicy', title: 'aespa — Spicy', subtitle: 'Остро и ярко · Spicy', emoji: '🌶️', colorHex: '#C2185B', createdAt: 37, theme: [['매운맛', 'острый вкус'], ['열기', 'жар'], ['당당', 'уверенно'], ['스타일', 'стиль'], ['빛나다', 'сиять']] },
  { id: 'seed-iu-blueming', title: 'IU — Blueming', subtitle: 'Цветёт синим · Blueming', emoji: '🌼', colorHex: '#0288D1', createdAt: 38, theme: [['꽃', 'цветок'], ['피다', 'цвести'], ['봄', 'весна'], ['설레다', 'трепетать'], ['연락', 'сообщение']] },
  { id: 'seed-iu-celebrity', title: 'IU — Celebrity', subtitle: 'Ты — знаменитость · Celebrity', emoji: '✨', colorHex: '#0277BD', createdAt: 39, theme: [['유명', 'знаменитый'], ['특별', 'особенный'], ['빛', 'свет'], ['존재', 'существование'], ['응원', 'поддержка']] },
  { id: 'seed-svt-super', title: 'SEVENTEEN — SUPER', subtitle: 'Супер-я · SUPER', emoji: '🌟', colorHex: '#F57C00', createdAt: 40, theme: [['슈퍼', 'супер'], ['팀', 'команда'], ['무대', 'сцена'], ['완벽', 'идеально'], ['에너지', 'энергия']] },
  { id: 'seed-twice-cheerup', title: 'TWICE — Cheer Up', subtitle: 'Не грусти · Cheer Up', emoji: '🍊', colorHex: '#FF7043', createdAt: 41, theme: [['응원', 'поддержка'], ['미소', 'улыбка'], ['힘', 'сила'], ['걱정', 'беспокойство'], ['기쁨', 'радость']] },
  { id: 'seed-idle-tomboy', title: '(G)I-DLE — Tomboy', subtitle: 'Свободный дух · Tomboy', emoji: '🎩', colorHex: '#455A64', createdAt: 42, theme: [['자유', 'свобода'], ['당당', 'уверенно'], ['개성', 'индивидуальность'], ['멋', 'стиль'], ['나', 'я']] },
  { id: 'seed-lsf-unforgiven', title: 'LE SSERAFIM — UNFORGIVEN', subtitle: 'Без извинений · UNFORGIVEN', emoji: '🔥', colorHex: '#BF360C', createdAt: 43, theme: [['용서', 'прощение'], ['도전', 'вызов'], ['두려움', 'страх'], ['깨다', 'сломать'], ['앞으로', 'вперёд']] },
];

const EXTENDED_ZH: ZhDef[] = [
  { id: 'seed-zh-qilixiang', title: '周杰伦 — 七里香', subtitle: 'Аромат сирени · 七里香', emoji: '🌸', colorHex: '#8E24AA', createdAt: 110, theme: [['七里香', 'сирень', 'qī lǐ xiāng'], ['夏天', 'лето', 'xià tiān'], ['风', 'ветер', 'fēng'], ['雨', 'дождь', 'yǔ'], ['思念', 'тоска', 'sī niàn']] },
  { id: 'seed-zh-yequ', title: '周杰伦 — 夜曲', subtitle: 'Ночная мелодия · 夜曲', emoji: '🌙', colorHex: '#4527A0', createdAt: 111, theme: [['夜曲', 'ноктюрн', 'yè qǔ'], ['钢琴', 'фортепiano', 'gāng qín'], ['孤独', 'одиночество', 'gū dú'], ['沉默', 'молчание', 'chén mò'], ['回忆', 'воспоминание', 'huí yì']] },
  { id: 'seed-zh-jiandanai', title: '周杰伦 — 简单爱', subtitle: 'Простая любовь · 简单爱', emoji: '💕', colorHex: '#EC407A', createdAt: 112, theme: [['简单', 'простой', 'jiǎn dān'], ['爱情', 'любовь', 'ài qíng'], ['牵手', 'держаться за руки', 'qiān shǒu'], ['温柔', 'нежный', 'wēn róu'], ['微笑', 'улыбка', 'wēi xiào']] },
  { id: 'seed-zh-guangnian', title: '邓紫棋 — 光年之外', subtitle: 'За световыми годами', emoji: '🚀', colorHex: '#6A1B9A', createdAt: 113, theme: [['光年', 'световой год', 'guāng nián'], ['宇宙', 'вселенная', 'yǔ zhòu'], ['离开', 'уходить', 'lí kāi'], ['等待', 'ждать', 'děng dài'], ['命运', 'судьба', 'mìng yùn']] },
  { id: 'seed-zh-xiulian', title: '林俊杰 — 修炼爱情', subtitle: 'Учиться любви · 修炼爱情', emoji: '💞', colorHex: '#D32F2F', createdAt: 114, theme: [['修炼', 'тренироваться', 'xiū liàn'], ['爱情', 'любовь', 'ài qíng'], ['成长', 'расти', 'chéng zhǎng'], ['遗憾', 'сожаление', 'yí hàn'], ['学会', 'научиться', 'xué huì']] },
  { id: 'seed-zh-xiaochou', title: '毛不易 — 消愁', subtitle: 'Заглушить печаль · 消愁', emoji: '🍺', colorHex: '#5D4037', createdAt: 115, theme: [['消愁', 'заглушить грусть', 'xiāo chóu'], ['酒', 'алкоголь', 'jiǔ'], ['故乡', 'родина', 'gù xiāng'], ['理想', 'мечта', 'lǐ xiǎng'], ['生活', 'жизнь', 'shēng huó']] },
  { id: 'seed-zh-yanyuan', title: '薛之谦 — 演员', subtitle: 'Актёр · 演员', emoji: '🎭', colorHex: '#37474F', createdAt: 116, theme: [['演员', 'актёр', 'yǎn yuán'], ['表演', 'играть роль', 'biǎo yǎn'], ['假装', 'притворяться', 'jiǎ zhuāng'], ['配合', 'подыграть', 'pèi hé'], ['心碎', 'разбитое сердце', 'xīn suì']] },
  { id: 'seed-zh-laojie', title: '李荣浩 — 老街', subtitle: 'Старая улица · 老街', emoji: '🏮', colorHex: '#FF8F00', createdAt: 117, theme: [['老街', 'старая улица', 'lǎo jiē'], ['童年', 'детство', 'tóng nián'], ['记忆', 'память', 'jì yì'], ['温暖', 'тёплый', 'wēn nuǎn'], ['怀念', 'скучать', 'huái niàn']] },
  { id: 'seed-zh-hongdou', title: '王菲 — 红豆', subtitle: 'Красная фасоль · 红豆', emoji: '🫘', colorHex: '#C62828', createdAt: 118, theme: [['红豆', 'красная фасоль', 'hóng dòu'], ['相思', 'тоска по любимому', 'xiāng sī'], ['等待', 'ждать', 'děng dài'], ['季节', 'сезон', 'jì jié'], ['温柔', 'нежный', 'wēn róu']] },
  { id: 'seed-zh-jueqiang', title: '五月天 — 倔强', subtitle: 'Упрямство · 倔强', emoji: '✊', colorHex: '#1565C0', createdAt: 119, theme: [['倔强', 'упрямство', 'jué jiàng'], ['梦想', 'мечта', 'mèng xiǎng'], ['坚持', 'настойчивость', 'jiān chí'], ['青春', 'молодость', 'qīng chūn'], ['希望', 'надежда', 'xī wàng']] },
  { id: 'seed-zh-gongting', title: 'C-drama — 宫廷词汇', subtitle: 'Дворцовая лексика', emoji: '🏯', colorHex: '#6D4C41', createdAt: 120, theme: [['皇帝', 'император', 'huáng dì'], ['娘娘', 'императрица', 'niáng niang'], ['殿下', 'ваше высочество', 'diàn xià'], ['奴才', 'слуга', 'nú cai'], ['圣旨', 'указ императора', 'shèng zhǐ']] },
  { id: 'seed-zh-lianai', title: 'C-drama — 恋爱用语', subtitle: 'Слова о любви', emoji: '💌', colorHex: '#F06292', createdAt: 121, theme: [['表白', 'признание', 'biǎo bái'], ['约会', 'свидание', 'yuē huì'], ['心动', 'сердце ёкает', 'xīn dòng'], ['吃醋', 'ревновать', 'chī cù'], ['拥抱', 'обнимать', 'yōng bào']] },
  { id: 'seed-zh-shangwu', title: 'C-drama — 商务口语', subtitle: 'Деловой китайский', emoji: '💼', colorHex: '#455A64', createdAt: 122, theme: [['合作', 'сотрудничество', 'hé zuò'], ['合同', 'контракт', 'hé tong'], ['会议', 'совещание', 'huì yì'], ['项目', 'проект', 'xiàng mù'], ['成功', 'успех', 'chéng gōng']] },
  { id: 'seed-zh-luxing', title: 'C-drama — 旅行词汇', subtitle: 'Путешествия', emoji: '✈️', colorHex: '#00838F', createdAt: 123, theme: [['旅行', 'путешествие', 'lǚ xíng'], ['机场', 'аэропорт', 'jī chǎng'], ['酒店', 'отель', 'jiǔ diàn'], ['地图', 'карта', 'dì tú'], ['风景', 'пейзаж', 'fēng jǐng']] },
];

export function extendedSeedPacks(): Pack[] {
  const ko = EXTENDED_KO.map((def) =>
    buildMissionPack({
      id: def.id,
      title: def.title,
      subtitle: def.subtitle,
      emoji: def.emoji,
      colorHex: def.colorHex,
      createdAt: def.createdAt,
      staged: true,
      words: mergeWords(KO_BASE, def.theme),
    })
  );
  const zh = EXTENDED_ZH.map((def) =>
    buildMissionPack({
      id: def.id,
      title: def.title,
      subtitle: def.subtitle,
      emoji: def.emoji,
      colorHex: def.colorHex,
      createdAt: def.createdAt,
      staged: true,
      language: 'zh',
      words: mergeWords(ZH_BASE, def.theme),
    })
  );
  return [...ko, ...zh];
}
