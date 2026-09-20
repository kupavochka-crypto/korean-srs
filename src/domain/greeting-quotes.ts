export interface GreetingQuote {
  korean: string;
  russian: string;
  chinese?: string;
}

export interface MemberProfile {
  id: string;
  artistName: string;
  imageName: string;
}

export const BTS_PROFILES: MemberProfile[] = [
  { id: 'rm', artistName: 'RM', imageName: 'bts_rm' },
  { id: 'jin', artistName: 'Jin', imageName: 'bts_jin' },
  { id: 'suga', artistName: 'SUGA', imageName: 'bts_suga' },
  { id: 'jhope', artistName: 'j-hope', imageName: 'bts_jhope' },
  { id: 'jimin', artistName: 'Jimin', imageName: 'bts_jimin' },
  { id: 'v', artistName: 'V', imageName: 'bts_v' },
  { id: 'jungkook', artistName: 'Jungkook', imageName: 'bts_jungkook' },
];

export const SKZ_PROFILES: MemberProfile[] = [
  { id: 'bangchan', artistName: 'Bang Chan', imageName: 'skz_bangchan' },
  { id: 'leeknow', artistName: 'Lee Know', imageName: 'skz_leeknow' },
  { id: 'changbin', artistName: 'Changbin', imageName: 'skz_changbin' },
  { id: 'hyunjin', artistName: 'Hyunjin', imageName: 'skz_hyunjin' },
  { id: 'han', artistName: 'HAN', imageName: 'skz_han' },
  { id: 'felix', artistName: 'Felix', imageName: 'skz_felix' },
  { id: 'seungmin', artistName: 'Seungmin', imageName: 'skz_seungmin' },
  { id: 'in', artistName: 'I.N', imageName: 'skz_in' },
];

/** Theme-level motivational phrases — not attributed to portrait subjects. */
const MOTIVATIONAL_QUOTES: GreetingQuote[] = [
  {
    korean: '오늘의 너는 어제보다 강해',
    russian: 'Сегодня ты сильнее, чем вчера',
    chinese: '今天的你比昨天更强',
  },
  {
    korean: '멈추지 않는 것만으로도 충분해',
    russian: 'Главное — не останавливаться',
    chinese: '只要不停下来就够了',
  },
  {
    korean: '작은 한 걸음도 이미 성장이야',
    russian: 'Даже маленький шаг — это уже прогресс',
    chinese: '哪怕一小步，也是成长',
  },
  {
    korean: '미소부터 시작하면 길이 밝아져',
    russian: 'Начни с улыбки — путь станет светлее',
    chinese: '从微笑开始，路会更亮',
  },
  {
    korean: '자신에게는 다정하게, 앞으로는 용기 있게',
    russian: 'Будь мягче к себе и смелее вперёд',
    chinese: '对自己温柔一点，向前勇敢一点',
  },
  {
    korean: '네 리듬대로 가도 괜찮아',
    russian: 'Иди своим ритмом — он тоже верный',
    chinese: '按你的节奏走，也没问题',
  },
  {
    korean: '한 번 더 하면 이미 더 가까워져',
    russian: 'Ещё одна попытка — и ты уже ближе',
    chinese: '再试一次，你就更近了',
  },
  {
    korean: '새로운 날마다 넌 한 걸음씩 올라가',
    russian: 'С каждым днём ты поднимаешься выше',
    chinese: '每一天你都在向上一步',
  },
  {
    korean: '서두르지 마, 모든 게 제때 온다',
    russian: 'Не торопись — всё придёт в свой срок',
    chinese: '别急，一切都会准时到来',
  },
  {
    korean: '다시 도전해 봐, 포기하지 마',
    russian: 'Попробуй ещё раз — и не сдавайся',
    chinese: '再挑战一次，别放弃',
  },
  {
    korean: '어둠 속에서도 넌 빛나고 있어',
    russian: 'Даже в темноте ты сияешь',
    chinese: '即使在黑暗里你也在发光',
  },
  {
    korean: '오늘도 넌 정말 잘하고 있어',
    russian: 'Сегодня ты тоже молодец',
    chinese: '今天你也做得很好',
  },
  {
    korean: '너 자신을 있는 그대로 두려워하지 마',
    russian: 'Не бойся быть собой',
    chinese: '做你自己，别害怕',
  },
  {
    korean: '하나씩 천천히, 넌 할 수 있어',
    russian: 'Шаг за шагом — у тебя получится',
    chinese: '一步一步来，你可以的',
  },
  {
    korean: '미소 지어 봐, 넌 올바른 길에 있어',
    russian: 'Улыбнись — ты на верном пути',
    chinese: '笑一笑，你在正确的路上',
  },
  {
    korean: '오늘도 넌 충분히 잘하고 있어',
    russian: 'Сегодня ты уже достаточно старался',
    chinese: '今天你已经足够努力了',
  },
  {
    korean: '포기하지 않으면 반드시 닿을 거야',
    russian: 'Не сдавайся — ты обязательно дойдёшь',
    chinese: '不放弃就一定能到达',
  },
  {
    korean: '실수도 성장의 일부야',
    russian: 'Ошибки — это часть роста',
    chinese: '错误也是成长的一部分',
  },
  {
    korean: '작게 시작해도 괜찮아, 계속 가',
    russian: 'Начни с малого — и двигайся дальше',
    chinese: '从小处开始也没关系，继续走',
  },
  {
    korean: '넌 생각보다 훨씬 강해',
    russian: 'Ты сильнее, чем думаешь',
    chinese: '你比想象中强得多',
  },
  {
    korean: '오늘의 너도 이미 충분히 좋아',
    russian: 'Сегодняшний ты — уже достаточно хорош',
    chinese: '今天的你已经足够好',
  },
  {
    korean: '천천히 가도 괜찮아',
    russian: 'Медленно — тоже нормально',
    chinese: '慢慢来也没关系',
  },
  {
    korean: '매일이 새로운 기회야',
    russian: 'Каждый день — новая возможность',
    chinese: '每天都是新的机会',
  },
  {
    korean: '자신을 믿어, 넌 해낼 수 있어',
    russian: 'Верь в себя — ты справишься',
    chinese: '相信自己，你能做到',
  },
  {
    korean: '남과 비교하지 마',
    russian: 'Не сравнивай себя с другими',
    chinese: '不要和别人比较',
  },
  {
    korean: '네 길은 오직 네 것이야',
    russian: 'Твой путь — только твой',
    chinese: '你的路只属于你',
  },
  {
    korean: '오늘 딱 한 걸음만 내딛어',
    russian: 'Сделай сегодня хотя бы один шаг',
    chinese: '今天只迈一步就好',
  },
  {
    korean: '배우는 것도 용기야',
    russian: 'Учиться — это тоже смелость',
    chinese: '学习也是一种勇气',
  },
  {
    korean: '완벽하지 않아도 괜찮아',
    russian: 'Не идеально — тоже хорошо',
    chinese: '不完美也没关系',
  },
  {
    korean: '쉬는 것도 여정의 일부야',
    russian: 'Отдых — тоже часть пути',
    chinese: '休息也是旅程的一部分',
  },
  {
    korean: '내일은 생각보다 가벼울 거야',
    russian: 'Завтра будет легче, чем кажется',
    chinese: '明天会比想象中轻松',
  },
  {
    korean: '넌 이미 많이 왔어',
    russian: 'Ты уже далеко зашёл',
    chinese: '你已经走了很远',
  },
  {
    korean: '말은 연습하면 늘어',
    russian: 'Слова приходят с практикой',
    chinese: '话靠练习就会进步',
  },
  {
    korean: '단어 하나도 작은 승리야',
    russian: 'Каждое слово — маленькая победа',
    chinese: '每个词都是小胜利',
  },
  {
    korean: '틀려도 괜찮아, 시도해',
    russian: 'Не бойся ошибаться — пробуй',
    chinese: '错了也没关系，试试看',
  },
  {
    korean: '오늘이 어제보다 나아',
    russian: 'Сегодня лучше, чем вчера',
    chinese: '今天比昨天更好',
  },
  {
    korean: '인내도 힘이야',
    russian: 'Терпение тоже сила',
    chinese: '耐心也是力量',
  },
  {
    korean: '넌 올바른 길을 가고 있어',
    russian: 'Ты на правильном пути',
    chinese: '你走在正确的路上',
  },
  {
    korean: '지금 할 수 있는 것부터 시작해',
    russian: 'Начни с того, что можешь сейчас',
    chinese: '从你现在能做的开始',
  },
  {
    korean: '작은 발전도 발전이야',
    russian: 'Маленький прогресс — тоже прогресс',
    chinese: '小小的进步也是进步',
  },
  {
    korean: '오늘은 자신에게 친절하게',
    russian: 'Будь добр к себе сегодня',
    chinese: '今天对自己温柔一点',
  },
  {
    korean: '넌 분명 해낼 거야',
    russian: 'У тебя всё получится',
    chinese: '你一定能做到',
  },
  {
    korean: '매일이 꿈에 가까워지는 날',
    russian: 'Каждый день — шаг к мечте',
    chinese: '每一天都离梦想更近',
  },
  {
    korean: '멈추지 마, 넌 가까워',
    russian: 'Не останавливайся — ты близко',
    chinese: '别停，你已经很近了',
  },
  {
    korean: '점수가 아니라 너를 위해 배워',
    russian: 'Учись ради себя, не ради оценок',
    chinese: '为自己而学，不是为分数',
  },
  {
    korean: '오늘은 공부하기 좋은 날',
    russian: 'Сегодня — хороший день для учёбы',
    chinese: '今天是学习的好日子',
  },
  {
    korean: '넌 몰라도 자라고 있어',
    russian: 'Ты растёшь, даже если не замечаешь',
    chinese: '你没察觉也在成长',
  },
  {
    korean: '오늘 할 수 있는 최선을 해',
    russian: 'Сделай лучшее, что можешь сегодня',
    chinese: '今天尽力就好',
  },
  {
    korean: '두려워 말고 앞으로',
    russian: 'Вперёд — без страха',
    chinese: '别怕，向前走吧',
  },
  {
    korean: '매일 아침은 새로운 시작이야',
    russian: 'Каждое утро — новый старт',
    chinese: '每个早晨都是新开始',
  },
  {
    korean: '조금씩 쌓이면 큰 힘이 돼',
    russian: 'Малое складывается в большую силу',
    chinese: '一点点积累会变成大力量',
  },
  {
    korean: '오늘의 노력이 내일을 바꿔',
    russian: 'Сегодняшние усилия меняют завтра',
    chinese: '今天的努力改变明天',
  },
  {
    korean: '너만의 속도로 충분해',
    russian: 'Твоего темпа достаточно',
    chinese: '你的节奏就够了',
  },
  {
    korean: '한국어 한 문장도 큰 성취야',
    russian: 'Одно предложение по-корейски — уже успех',
    chinese: '一句韩语也是很大的成就',
  },
  {
    korean: '꾸준함이 가장 큰 재능이야',
    russian: 'Постоянство — главный талант',
    chinese: '坚持是最大的天赋',
  },
  {
    korean: '지금 이 순간도 잘하고 있어',
    russian: 'Ты хорошо справляешься прямо сейчас',
    chinese: '此刻你也做得很好',
  },
];

export const BTS_GREETING_QUOTES = MOTIVATIONAL_QUOTES;
export const SKZ_GREETING_QUOTES = MOTIVATIONAL_QUOTES;

export function greetingQuotesForTheme(themeId: string): GreetingQuote[] {
  return themeId === 'stray-kids' ? SKZ_GREETING_QUOTES : BTS_GREETING_QUOTES;
}
