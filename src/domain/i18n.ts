export type Locale = 'ru' | 'en';

const LOCALE_KEY = 'woori_locale';

export function storedLocale(): Locale | null {
  try {
    const raw = localStorage.getItem(LOCALE_KEY);
    if (raw === 'ru' || raw === 'en') return raw;
  } catch {
    // storage unavailable
  }
  return null;
}

export function detectLocale(): Locale {
  const navLang = typeof navigator !== 'undefined' ? (navigator.language || '').toLowerCase() : '';
  return navLang.startsWith('en') ? 'en' : 'ru';
}

function saveLocale(locale: Locale) {
  try {
    localStorage.setItem(LOCALE_KEY, locale);
  } catch {
    // storage unavailable
  }
}

let currentLocale: Locale = storedLocale() ?? detectLocale();

export function getLocale(): Locale {
  return currentLocale;
}

export function setLocale(locale: Locale) {
  currentLocale = locale;
  saveLocale(locale);
}

type Dict = Record<string, { ru: string; en: string }>;

const STRINGS: Dict = {
  'app.subtitle': {
    ru: 'Корейский с любимой группой',
    en: 'Learn Korean with your favorite group',
  },
  'common.loading': { ru: 'Загрузка…', en: 'Loading…' },
  'common.save': { ru: 'Сохранить', en: 'Save' },
  'common.add': { ru: 'Добавить', en: 'Add' },
  'common.check': { ru: 'Проверить', en: 'Check' },
  'common.next': { ru: 'Дальше', en: 'Next' },
  'common.cancel': { ru: 'Отмена', en: 'Cancel' },
  'common.delete': { ru: 'Удалить', en: 'Delete' },
  'common.edit': { ru: 'Изменить', en: 'Edit' },
  'common.close': { ru: 'Задать', en: 'Close' },

  'tab.home': { ru: 'Главная', en: 'Home' },
  'tab.cards': { ru: 'Карточки', en: 'Cards' },
  'tab.listening': { ru: 'Аудирование', en: 'Listening' },
  'tab.quiz': { ru: 'Квиз', en: 'Quiz' },
  'tab.dictionary': { ru: 'Словарь', en: 'Dictionary' },
  'tab.gallery': { ru: 'Коллекция', en: 'Collection' },
  'tab.progress': { ru: 'Прогресс', en: 'Progress' },
  'tab.settings': { ru: 'Настройки', en: 'Settings' },

  'home.sectionStats': { ru: 'Показатели дня', en: 'Today' },
  'home.stats.words': { ru: 'Всего слов', en: 'Total words' },
  'home.stats.toReview': { ru: 'К повторению', en: 'To review' },
  'home.startReview': { ru: 'Начать повторение', en: 'Start review' },
  'home.startCards': { ru: 'Начать карточки', en: 'Start cards' },
  'home.sectionQuick': { ru: 'Быстрые действия', en: 'Quick actions' },
  'home.quick.add': { ru: 'Добавить', en: 'Add word' },
  'home.quick.scan': { ru: 'Сканировать', en: 'Scan' },
  'home.quick.difficult': { ru: 'Трудные ({count})', en: 'Difficult ({count})' },
  'home.quick.help': { ru: 'Помощь', en: 'Help' },
  'home.quick.packs': { ru: 'Паки слов', en: 'Word packs' },
  'home.quick.song': { ru: 'Учить по песне', en: 'Learn by song' },

  'song.title': { ru: 'Учить по песне', en: 'Learn by song' },
  'song.reviewTitle': { ru: 'Распознанные слова', en: 'Recognized words' },
  'song.backToInput': { ru: 'Назад', en: 'Back' },
  'song.nameLabel': { ru: 'Название песни', en: 'Song title' },
  'song.namePlaceholder': { ru: 'Dynamite', en: 'Dynamite' },
  'song.nameHint': {
    ru: 'Слова будут добавлены в категорию с этим названием.',
    en: 'Words will be added to a category with this title.',
  },
  'song.nameRequired': { ru: 'Укажите название песни.', en: 'Enter the song title.' },
  'song.audioHint': {
    ru: 'Аудио загружается напрямую в Gemini (не через прокси). Если не работает — вставьте текст вручную.',
    en: 'Audio is sent directly to Gemini (not via proxy). If it fails, paste lyrics manually.',
  },
  'song.upload': { ru: 'Загрузить', en: 'Upload' },
  'song.record': { ru: 'Записать', en: 'Record' },
  'song.stopRecord': { ru: 'Стоп', en: 'Stop' },
  'song.transcribeRecord': { ru: 'Распознать запись', en: 'Transcribe recording' },
  'song.recordManualHint': {
    ru: 'Запись сохранена. Нажмите «Распознать запись» или вставьте текст вручную.',
    en: 'Recording saved. Tap “Transcribe recording” or paste lyrics manually.',
  },
  'song.parseHintName': { ru: 'Сначала укажите название песни.', en: 'Enter the song title first.' },
  'song.parseHintLyrics': {
    ru: 'Вставьте текст или распознайте аудио.',
    en: 'Paste lyrics or transcribe audio first.',
  },
  'song.noApiKey': {
    ru: 'Ключ Gemini API не настроен — загрузка аудио недоступна.',
    en: 'Gemini API key is not set — audio upload is unavailable.',
  },
  'song.openSettings': { ru: 'Настроить', en: 'Settings' },
  'song.micDenied': {
    ru: 'Нет доступа к микрофону. Вставьте текст песни вручную.',
    en: 'Microphone access denied. Paste lyrics manually.',
  },
  'song.transcribing': { ru: 'Распознавание аудио…', en: 'Transcribing audio…' },
  'song.parsing': { ru: 'Разбор слов…', en: 'Parsing words…' },
  'song.lyricsManual': { ru: 'Текст песни (вручную)', en: 'Song lyrics (manual)' },
  'song.lyricsLabel': { ru: 'Текст песни', en: 'Song lyrics' },
  'song.lyricsPlaceholder': {
    ru: 'Вставьте корейский текст построчно…',
    en: 'Paste Korean lyrics line by line…',
  },
  'song.parse': { ru: 'Разобрать слова', en: 'Parse words' },
  'song.noWords': { ru: 'Не найдено корейских слов.', en: 'No Korean words found.' },
  'song.errorUnknown': { ru: 'Неизвестная ошибка.', en: 'Unknown error.' },
  'song.summary': {
    ru: '{newCount} новых · {knownCount} уже знаю · {inSongCount} в этой песне',
    en: '{newCount} new · {knownCount} known · {inSongCount} in this song',
  },
  'song.sectionNew': { ru: 'Новые слова', en: 'New words' },
  'song.sectionKnown': { ru: 'Уже знаю', en: 'Already know' },
  'song.sectionKnownHint': {
    ru: 'Эти слова уже есть в вашем словаре.',
    en: 'These words are already in your dictionary.',
  },
  'song.sectionInSong': { ru: 'Уже в этой песне', en: 'Already in this song' },
  'song.sectionInSongHint': {
    ru: 'Эти слова уже добавлены из этой песни раньше.',
    en: 'These words were already imported from this song.',
  },
  'song.badgeKnown': { ru: 'знаю', en: 'known' },
  'song.badgeInSong': { ru: 'в песне', en: 'in song' },
  'song.mastered': { ru: 'выучено', en: 'mastered' },
  'song.save': { ru: 'Добавить ({count})', en: 'Add ({count})' },
  'home.emptyTitle': { ru: 'Ваш словарь пока пуст.', en: 'Your dictionary is empty.' },
  'home.emptyText': {
    ru: 'Добавьте свои первые слова вручную или отсканируйте текст из учебника!',
    en: 'Add your first words manually or scan text from your textbook!',
  },
  'home.mentor': { ru: 'Твой наставник', en: 'Your mentor' },
  'home.mentor.none': { ru: 'Коллекция фотокарточек', en: 'Photo-card collection' },
  'home.mentor.toNext': { ru: 'до «{name}» ещё {count} XP', en: '{count} XP to "{name}"' },
  'home.mentor.allOpen': { ru: 'все участники открыты', en: 'all members unlocked' },
  'home.mission': { ru: 'Миссия дня', en: "Today's mission" },
  'home.mission.reward': { ru: '+{count} XP', en: '+{count} XP' },

  'gallery.title': { ru: 'Коллекция', en: 'Collection' },
  'gallery.sectionCards': { ru: 'Фотокарточки', en: 'Photocards' },
  'gallery.unlocked': { ru: '✓ Получена', en: '✓ Unlocked' },
  'gallery.sectionAchievements': { ru: 'Достижения', en: 'Achievements' },
  'gallery.toNext': { ru: 'до «{name}» ещё {count} XP', en: '{count} XP to "{name}"' },
  'gallery.allOpen': { ru: 'все участники открыты', en: 'all members unlocked' },
  'gallery.empty': {
    ru: 'Изучайте слова и повторяйте карточки, чтобы открывать награды.',
    en: 'Study words and review cards to unlock rewards.',
  },
  'gallery.member': { ru: 'Участник', en: 'Member' },

  'listen.tapToListen': { ru: 'Нажмите, чтобы прослушать', en: 'Tap to listen' },
  'listen.revealWord': { ru: 'Слово', en: 'Word' },

  'mission.reviews.title': { ru: 'Повторение дня', en: 'Daily review' },
  'mission.reviews.desc': { ru: 'Просмотреть 20 карточек', en: 'Review 20 cards' },
  'mission.words.title': { ru: 'Новые слова', en: 'New words' },
  'mission.words.desc': { ru: 'Довести словарь до 10 слов', en: 'Reach 10 words in your dictionary' },
  'mission.master.title': { ru: 'Запоминание', en: 'Memorizing' },
  'mission.master.desc': { ru: 'Выучить 5 слов навсегда', en: 'Master 5 words forever' },
  'mission.streak.title': { ru: 'Серия', en: 'Streak' },
  'mission.streak.desc': { ru: '3 дня подряд без пропусков', en: '3 days in a row' },
  'mission.accuracy.title': { ru: 'Точность', en: 'Accuracy' },
  'mission.accuracy.desc': { ru: 'Правильность ответов ≥ 80%', en: 'Answer accuracy ≥ 80%' },

  'achievement.words_10.title': { ru: 'Первые слова', en: 'First words' },
  'achievement.words_10.desc': { ru: '10 слов в словаре', en: '10 words in dictionary' },
  'achievement.words_50.title': { ru: 'Словолюб', en: 'Word lover' },
  'achievement.words_50.desc': { ru: '50 слов в словаре', en: '50 words in dictionary' },
  'achievement.reviews_100.title': { ru: 'Сто раз', en: 'Hundred times' },
  'achievement.reviews_100.desc': { ru: '100 повторений карточек', en: '100 card reviews' },
  'achievement.reviews_500.title': { ru: 'Полтысячи', en: 'Half a thousand' },
  'achievement.reviews_500.desc': { ru: '500 повторений карточек', en: '500 card reviews' },
  'achievement.streak_3.title': { ru: 'Первый шаг', en: 'First step' },
  'achievement.streak_3.desc': { ru: '3 дня подряд', en: '3 days in a row' },
  'achievement.streak_7.title': { ru: 'Неделя сил', en: 'Week of power' },
  'achievement.streak_7.desc': { ru: '7 дней подряд', en: '7 days in a row' },
  'achievement.mastered_10.title': { ru: 'Коллекционер', en: 'Collector' },
  'achievement.mastered_10.desc': { ru: '10 выученных слов', en: '10 mastered words' },
  'achievement.mastered_50.title': { ru: 'Мастер словаря', en: 'Dictionary master' },
  'achievement.mastered_50.desc': { ru: '50 выученных слов', en: '50 mastered words' },
  'achievement.accuracy_90.title': { ru: 'Снайпер', en: 'Sniper' },
  'achievement.accuracy_90.desc': { ru: 'Точность 90% (30+ повторов)', en: '90% accuracy (30+ reviews)' },

  'packs.title': { ru: 'Паки слов', en: 'Word packs' },
  'packs.search': { ru: 'Поиск пака — по слову или переводу', en: 'Search packs by word or translation' },
  'packs.added': { ru: '✓ Добавлено', en: '✓ Added' },
  'packs.empty': { ru: 'Ничего не нашлось. Попробуйте другой запрос.', en: 'Nothing found. Try another query.' },
  'packs.footer': {
    ru: 'Слова из пака добавляются в словарь, если их там ещё нет. Потом они учат по тем же карточкам и квизам.',
    en: 'Pack words are added to your dictionary if they are not there yet. Then you study them in cards and quizzes.',
  },
  'packs.words': { ru: '{count} слов', en: '{count} words' },

  'cards.nothing': { ru: 'Повторять нечего', en: 'Nothing to review' },
  'cards.nothingDesc': { ru: 'Нет слов, требующих повторения.', en: 'No words are due for review.' },
  'cards.reviewAll': { ru: 'Повторить все слова', en: 'Review all words' },
  'cards.difficult': { ru: 'Трудные слова ({count})', en: 'Difficult words ({count})' },
  'cards.doneTitle': { ru: 'Отличная работа!', en: 'Great job!' },
  'cards.doneDesc': {
    ru: 'Вы прошли все карточки этой серии.',
    en: 'You finished all the cards in this session.',
  },
  'cards.progress': { ru: 'Карточка {i} из {total}', en: 'Card {i} of {total}' },
  'cards.tapToFlip': { ru: 'Нажмите, чтобы перевернуть', en: 'Tap to flip' },
  'cards.evaluate': { ru: 'Оцените ваш ответ', en: 'Rate your answer' },
  'cards.reps': { ru: 'Повторы: {count}', en: 'Reviews: {count}' },
  'cards.interval': { ru: 'Интервал: {count} дн', en: 'Interval: {count} d' },
  'cards.nextReview': { ru: 'Повторить через {count} дн', en: 'Review in {count} d' },
  'cards.editAria': { ru: 'Редактировать слово', en: 'Edit word' },
  'cards.speakAria': { ru: 'Озвучить', en: 'Speak' },

  'detail.title': { ru: 'Слово', en: 'Word' },
  'detail.mastered': { ru: 'Выучено', en: 'Mastered' },
  'detail.toReview': { ru: 'К повторению', en: 'To review' },
  'detail.inProgress': { ru: 'Изучается', en: 'In progress' },
  'detail.status': { ru: 'Статус', en: 'Status' },
  'detail.reps': { ru: 'Повторы', en: 'Reviews' },
  'detail.interval': { ru: 'Интервал', en: 'Interval' },
  'detail.nextReview': { ru: 'Следующее повторение', en: 'Next review' },
  'detail.deleteConfirm': { ru: 'Удалить слово?', en: 'Delete this word?' },

  'add.titleNew': { ru: 'Добавить слово', en: 'Add word' },
  'add.titleEdit': { ru: 'Изменить слово', en: 'Edit word' },
  'add.korean': { ru: 'Корейское слово *', en: 'Korean word *' },
  'add.translation': { ru: 'Перевод *', en: 'Translation *' },
  'add.romaja': { ru: 'Ромадзия (автозаполнение)', en: 'Romanization (auto)' },
  'add.hanja': { ru: 'Ханча (необязательно)', en: 'Hanja (optional)' },
  'add.exampleSentence': { ru: 'Пример предложения', en: 'Example sentence' },
  'add.exampleTranslation': { ru: 'Перевод примера', en: 'Example translation' },
  'add.category': { ru: 'Категория', en: 'Category' },
  'add.source': { ru: 'Источник (откуда слово)', en: 'Source (where the word is from)' },
  'add.noSource': { ru: '✍️ Без источника', en: '✍️ No source' },
  'add.level': { ru: 'Уровень', en: 'Level' },
  'add.errKorean': { ru: 'Укажите корейское слово.', en: 'Enter the Korean word.' },
  'add.errTranslation': { ru: 'Укажите перевод.', en: 'Enter the translation.' },

  'listen.needWords': { ru: 'Нужно минимум 2 слова', en: 'Need at least 2 words' },
  'listen.needWordsDesc': {
    ru: 'Добавьте слова в словарь, чтобы начать аудирование.',
    en: 'Add words to your dictionary to start listening.',
  },
  'listen.correct': { ru: '✅ Правильно!', en: '✅ Correct!' },
  'listen.wrong': { ru: '❌ Неправильно', en: '❌ Wrong' },
  'listen.answer': { ru: 'Ответ', en: 'Answer' },
  'listen.word': { ru: 'Слово', en: 'Word' },
  'listen.score': { ru: 'Счёт: {score} / {total}', en: 'Score: {score} / {total}' },
  'reward.title': { ru: 'Отлично! 🎉', en: 'Awesome! 🎉' },
  'reward.body': { ru: 'Продолжайте в том же духе!', en: 'Keep it up!' },
  'reward.continue': { ru: 'Продолжить', en: 'Continue' },

  'quiz.title': { ru: 'Квиз', en: 'Quiz' },
  'quiz.desc': {
    ru: 'Показано русское слово — выберите правильный вариант по-корейски.',
    en: 'You see a word in your language — pick the correct Korean option.',
  },
  'quiz.start': { ru: 'Начать', en: 'Start' },

  'dict.search': { ru: 'Поиск: корейский, перевод, ромадзия…', en: 'Search: Korean, translation, romanization…' },
  'dict.selectOnAria': { ru: 'Выйти из выбора', en: 'Exit selection' },
  'dict.selectOffAria': { ru: 'Выбрать слова', en: 'Select words' },
  'dict.selectionHint': {
    ru: 'Выбрано: {count}. Нажмите на слово, чтобы выбрать или убрать.',
    en: 'Selected: {count}. Tap a word to toggle it.',
  },
  'dict.all': { ru: 'Все', en: 'All' },
  'dict.addCategory': { ru: '+ Категория', en: '+ Category' },
  'dict.emptyFound': { ru: 'Ничего не найдено по вашему запросу.', en: 'Nothing found for your query.' },
  'dict.emptyEmpty': { ru: 'Словарь пуст. Добавьте слова!', en: 'The dictionary is empty. Add some words!' },
  'dict.tags': { ru: '✏️ Теги', en: '✏️ Tags' },
  'dict.delete': { ru: '🗑 Удалить', en: '🗑 Delete' },
  'dict.tagsDialog': { ru: 'Назначить теги ({count} слов)', en: 'Assign tags ({count} words)' },
  'dict.tagsHint': {
    ru: 'Теги будут добавлены ко всем выбранным словам (существующие сохранятся).',
    en: 'Tags will be added to all selected words (existing ones stay).',
  },
  'dict.assign': { ru: 'Назначить', en: 'Assign' },
  'dict.addWordAria': { ru: 'Добавить слово', en: 'Add word' },

  'progress.stat': { ru: 'Статистика', en: 'Statistics' },
  'progress.mastered': { ru: 'Выучено', en: 'Mastered' },
  'progress.daysToMaster': { ru: 'Дней до выуч.', en: 'Days to master' },
  'progress.dueToday': { ru: 'К сегодня', en: 'Due today' },
  'progress.today': { ru: 'Сегодня', en: 'Today' },
  'progress.streakDays': { ru: 'Серия дней', en: 'Day streak' },
  'progress.byMonth': { ru: 'Запомнено по месяцам', en: 'Mastered by month' },
  'progress.byCat': { ru: 'Выучено по категориям', en: 'Mastered by category' },
  'progress.byCatDict': { ru: 'Слова по категориям', en: 'Words by category' },
  'progress.noCategory': { ru: 'Без категории', en: 'No category' },
  'progress.proverb': { ru: 'Многие капли образуют гору', en: 'Many drops form a mountain' },

  'word.status.mastered': { ru: 'Выучено', en: 'Mastered' },
  'word.status.due': { ru: 'Повторить', en: 'Review' },
  'word.status.in': { ru: 'Через {count} дн', en: 'In {count} d' },
  'word.level': { ru: 'Ур.', en: 'Lv.' },

  'settings.title': { ru: 'Настройки', en: 'Settings' },
  'settings.back': { ru: 'Настройки', en: 'Settings' },
  'settings.group.interface': { ru: 'Интерфейс', en: 'Interface' },
  'settings.group.appearance': { ru: 'Оформление', en: 'Appearance' },
  'settings.group.learning': { ru: 'Обучение', en: 'Learning' },
  'settings.group.content': { ru: 'Тема и контент', en: 'Theme & content' },
  'settings.group.integrations': { ru: 'Сканирование', en: 'Scanning' },
  'settings.group.help': { ru: 'Справка', en: 'Help' },
  'settings.lang': { ru: 'Язык', en: 'Language' },
  'settings.langHint': { ru: 'Язык интерфейса. Данные слов не меняются.', en: 'Interface language. Word data is unchanged.' },
  'settings.ocr': { ru: 'Распознавание текста', en: 'Text recognition' },
  'settings.apiKey': { ru: 'Gemini API ключ', en: 'Gemini API key' },
  'settings.apiKeyHint': {
    ru: 'Нужен для сканирования текста с фото. Ключ сохраняется в браузере.',
    en: 'Needed to scan text from photos. The key is stored in your browser.',
  },
  'settings.proxy': { ru: 'Обход ограничений региона', en: 'Region restrictions bypass' },
  'settings.proxyLabel': { ru: 'Адрес прокси (Cloudflare Worker)', en: 'Proxy URL (Cloudflare Worker)' },
  'settings.proxyHint': {
    ru: 'По умолчанию уже стоит общий адрес — сканирование работает сразу. Очистите поле для прямого подключения или вставьте свой адрес.',
    en: 'A shared proxy is set by default, so scanning works right away. Clear the field to connect directly or paste your own URL.',
  },
  'settings.listenSection': { ru: 'Аудирование', en: 'Listening' },
  'settings.listenThreshold': { ru: 'Правильных ответов подряд для GIF-награды', en: 'Consecutive correct answers for a GIF reward' },
  'settings.listenThresholdHint': {
    ru: 'Награда показывается при каждой кратности: {first}, {second}, {third}...',
    en: 'The reward shows at each multiple: {first}, {second}, {third}...',
  },
  'settings.display': { ru: 'Отображение', en: 'Display' },
  'settings.colorTheme': { ru: 'Тема оформления', en: 'Appearance' },
  'settings.colorThemeHint': {
    ru: 'Светлая, тёмная или как в системе',
    en: 'Light, dark or follow the system',
  },
  'settings.colorThemeSystem': { ru: 'Как в системе', en: 'System' },
  'settings.colorThemeLight': { ru: 'Светлая', en: 'Light' },
  'settings.colorThemeDark': { ru: 'Тёмная', en: 'Dark' },
  'settings.showRomaja': { ru: 'Английская транскрипция', en: 'Show romanization' },
  'settings.showRomajaHint': {
    ru: 'Показывать romanization под словами и на карточках',
    en: 'Show romanization under words and on cards',
  },
  'settings.voices': { ru: 'Голоса', en: 'Voices' },
  'settings.voicesCards': { ru: 'Карточки', en: 'Cards' },
  'settings.voicesCardsHint': { ru: 'Тембр и скорость озвучки на карточках.', en: 'Timbre and speed on cards.' },
  'settings.voicesListen': { ru: 'Аудирование', en: 'Listening' },
  'settings.voicesListenHint': {
    ru: 'Тембр и скорость озвучки вопросов аудирования.',
    en: 'Timbre and speed for listening questions.',
  },
  'settings.theme': { ru: 'Тема', en: 'Theme' },
  'settings.themeHint': {
    ru: 'Тема меняет приветствия, GIF-награды и картинки в приложении.',
    en: 'The theme changes greetings, GIF rewards and pictures.',
  },
  'settings.themePreview': { ru: 'Тема: предпросмотр', en: 'Theme preview' },
  'settings.guide': { ru: 'Инструкция', en: 'Guide' },
  'settings.guideHow': { ru: 'Как установить и настроить', en: 'How to install and configure' },
  'settings.guideHint': {
    ru: 'Пошаговая инструкция для новичков: установка на телефон, подключение распознавания и часто задаваемые вопросы.',
    en: 'Step-by-step guide: installing on a phone, enabling recognition and FAQs.',
  },

  'guide.title': { ru: 'Как пользоваться приложением', en: 'How to use the app' },
  'guide.intro': {
    ru: '«Woori · 우리» — это приложение для запоминания корейских слов. Всё хранится на вашем телефоне и работает даже без интернета. Пошаговая инструкция ниже.',
    en: '“Woori · 우리” is an app for memorizing Korean words. Everything is stored on your phone and works offline. A step-by-step guide is below.',
  },
  'guide.ok': { ru: 'Понятно, спасибо', en: 'Got it, thanks' },
  'guide.install.title': { ru: 'Как установить приложение', en: 'How to install the app' },
  'guide.install.iphone.title': { ru: 'На iPhone (Safari)', en: 'On iPhone (Safari)' },
  'guide.install.iphone.text': {
    ru: '1. Откройте адрес приложения в браузере Safari. 2. Нажмите кнопку «Поделиться» (квадрат со стрелкой вверх внизу). 3. Выберите «На экран "Домой"». 4. Нажмите «Добавить». Появится иконка приложения — как у обычных.',
    en: '1. Open the app URL in Safari. 2. Tap the Share button (square with an up arrow). 3. Choose “Add to Home Screen”. 4. Tap “Add”. An app icon appears like a native app.',
  },
  'guide.install.android.title': { ru: 'На телефоне с Android (Chrome)', en: 'On Android (Chrome)' },
  'guide.install.android.text': {
    ru: '1. Откройте адрес приложения в Chrome. 2. Нажмите на три точки (⋮) вверху. 3. Выберите «Установить приложение» или «Добавить на главный экран». 4. Подтвердите. Иконка появится на рабочем столе.',
    en: '1. Open the app URL in Chrome. 2. Tap the three dots (⋮) at the top. 3. Choose “Install app” or “Add to Home screen”. 4. Confirm. The icon appears on your home screen.',
  },
  'guide.ocr.title': { ru: 'Как включить распознавание с фото', en: 'How to enable photo recognition' },
  'guide.ocr.key.title': { ru: 'Получить бесплатный ключ', en: 'Get a free key' },
  'guide.ocr.key.text': {
    ru: '1. Зайдите в настройки (⚙️ внизу). 2. Нажмите ссылку «AI Studio». 3. Войдите аккаунтом Google и нажмите «Получить ключ» / «Create API key». Это бесплатно. 4. Скопируйте длинный ключ (начинается с AIza...).',
    en: '1. Open Settings (⚙️ at the bottom). 2. Tap the “AI Studio” link. 3. Sign in with Google and tap “Create API key”. It is free. 4. Copy the long key (starts with AIza...).',
  },
  'guide.ocr.paste.title': { ru: 'Вставить ключ в приложение', en: 'Paste the key into the app' },
  'guide.ocr.paste.text': {
    ru: 'Вернитесь в приложение и вставьте ключ в поле «Gemini API ключ» в настройках. Нажмите на экране ещё раз, чтобы сохранить.',
    en: 'Return to the app and paste the key into the “Gemini API key” field in Settings. Tap elsewhere to save.',
  },
  'guide.ocr.scan.title': { ru: 'Начать сканирование', en: 'Start scanning' },
  'guide.ocr.scan.text': {
    ru: 'Нажмите «📷 Сканировать» на главном экране, сфотографируйте страницу учебника или тетрадь — приложение распознает слова и переводы.',
    en: 'Tap “📷 Scan” on the home screen and photograph a textbook page — the app recognizes words and translations.',
  },
  'guide.fail.title': { ru: 'Если сканирование не работает', en: 'If scanning does not work' },
  'guide.fail.key.title': { ru: 'Проверьте ключ', en: 'Check the key' },
  'guide.fail.key.text': {
    ru: 'Ошибка «Ключ Gemini отклонён» — значит ключ вписан неверно или заканчивается его лимит. Получите новый ключ заново по шагам из раздела 2.',
    en: 'The “Gemini key rejected” error means the key is wrong or its quota is used up. Get a new key following the steps in section 2.',
  },
  'guide.fail.proxy.title': { ru: 'Проверьте адрес помощника (прокси)', en: 'Check the helper URL (proxy)' },
  'guide.fail.proxy.text': {
    ru: 'В настройках в разделе «Обход ограничений региона» по умолчанию стоит адрес {proxy}. Не удаляйте его — он помогает сканированию работать из вашей страны. Если его нет — вставьте адрес обратно.',
    en: 'In Settings → “Region restrictions bypass” a default URL {proxy} is set. Keep it — it helps scanning work from your country. If missing, paste it back.',
  },
  'guide.fail.camera.title': { ru: 'Разрешите доступ к камере', en: 'Allow camera access' },
  'guide.fail.camera.text': {
    ru: 'На iPhone: Настройки → Safari → и включите камеру для приложения. На Android: при первом снимке разрешите доступ к камере.',
    en: 'On iPhone: Settings → Safari, enable camera for the app. On Android: allow camera access at the first capture.',
  },
  'guide.practice.title': { ru: 'Как заниматься', en: 'How to study' },
  'guide.practice.cards.title': { ru: 'Карточки 🗂️', en: 'Cards 🗂️' },
  'guide.practice.cards.text': {
    ru: 'Каждый день здесь появляются слова, которые пора повторить. Переворачивайте карточку и честно оценивайте ответ: «Забыл», «Трудно», «Хорошо» или «Легко».',
    en: 'Every day words due for review appear here. Flip the card and honestly rate your answer: “Forgot”, “Hard”, “Good” or “Easy”.',
  },
  'guide.practice.listen.title': { ru: 'Аудирование 🎧 и Квиз 🧠', en: 'Listening 🎧 and Quiz 🧠' },
  'guide.practice.listen.text': {
    ru: 'Проверьте себя: услышите слово и выберите перевод, или увидите русское слово и выберите правильный корейский. За серию верных ответов — приятные картинки-награды.',
    en: 'Test yourself: hear a word and pick the translation, or see a word and pick the Korean one. For a streak of correct answers you get GIF rewards.',
  },
  'guide.practice.dict.title': { ru: 'Словарь 📖 и уроки', en: 'Dictionary 📖 and packs' },
  'guide.practice.dict.text': {
    ru: 'Добавляйте слова вручную, сканируйте из учебника или выбирайте их пачкой, чтобы развесить по тегам. Прогресс 📊 показывает, сколько слов вы уже запомнили.',
    en: 'Add words manually, scan from a textbook or import packs, and organize them with tags. Progress 📊 shows how many words you have memorized.',
  },
  'guide.faq.title': { ru: 'Частые вопросы', en: 'FAQ' },
  'guide.faq.data.title': { ru: 'Что делать, если пропали слова?', en: 'What if my words disappeared?' },
  'guide.faq.data.text': {
    ru: 'Данные хранятся на телефоне. Не удаляйте приложение и не очищайте данные Safari, чтобы ничего не потерять. Обновления безопасны — слова сохраняются.',
    en: 'Data is stored on your phone. Do not delete the app or clear Safari data. Updates are safe — words are kept.',
  },
  'guide.faq.theme.title': { ru: 'Можно ли поменять оформление?', en: 'Can I change the theme?' },
  'guide.faq.theme.text': {
    ru: 'Да! Сейчас выбрана тема «{theme}». Зайдите в настройки → «Тема» и выберите другую. Меняются картинки, приветствия и награды.',
    en: 'Yes! The theme “{theme}” is active. Open Settings → Theme and pick another one. Pictures, greetings and rewards change.',
  },
  'guide.faq.gif.title': { ru: 'Куда делись GIF-награды?', en: 'Where did GIF rewards go?' },
  'guide.faq.gif.text': {
    ru: 'Награды появляются за серию правильных ответов в «Аудировании» и «Квизе». Количество правильных ответов подряд для награды можно настроить в настройках.',
    en: 'Rewards appear for a streak of correct answers in Listening and Quiz. The required streak can be adjusted in Settings.',
  },
};

export function t(key: string, params?: Record<string, string | number>): string {
  const entry = STRINGS[key];
  const base = entry ? (currentLocale === 'en' ? entry.en : entry.ru) : key;
  if (!params) return base;
  return base.replace(/\{(\w+)\}/g, (match, name) =>
    params[name] !== undefined ? String(params[name]) : match
  );
}