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
  'app.subtitle.zh': {
    ru: 'Китайский с любимой группой',
    en: 'Learn Chinese with your favorite group',
  },
  'common.loading': { ru: 'Загрузка…', en: 'Loading…' },
  'common.save': { ru: 'Сохранить', en: 'Save' },
  'common.add': { ru: 'Добавить', en: 'Add' },
  'common.check': { ru: 'Проверить', en: 'Check' },
  'common.next': { ru: 'Дальше', en: 'Next' },
  'common.cancel': { ru: 'Отмена', en: 'Cancel' },
  'common.delete': { ru: 'Удалить', en: 'Delete' },
  'common.edit': { ru: 'Изменить', en: 'Edit' },
  'common.close': { ru: 'Закрыть', en: 'Close' },
  'common.back': { ru: 'Назад', en: 'Back' },

  'tab.home': { ru: 'Главная', en: 'Home' },
  'tab.cards': { ru: 'Карточки', en: 'Cards' },
  'tab.listening': { ru: 'Слушай', en: 'Listen' },
  'tab.quiz': { ru: 'Напиши', en: 'Write' },
  'tab.dictionary': { ru: 'Словарь', en: 'Dictionary' },
  'tab.gallery': { ru: 'Достижения', en: 'Achievements' },
  'tab.progress': { ru: 'Прогресс', en: 'Progress' },
  'tab.settings': { ru: 'Настройки', en: 'Settings' },

  'home.sectionStats': { ru: 'Показатели дня', en: 'Today' },
  'home.stats.words': { ru: 'Всего слов', en: 'Total words' },
  'home.stats.toReview': { ru: 'К повторению', en: 'To review' },
  'home.stats.toReviewShort': { ru: 'к повтор.', en: 'due' },
  'home.stats.doneShort': { ru: 'готово', en: 'done' },
  'home.stats.cardsDoneToday': {
    ru: 'Карточки на сегодня закрыты',
    en: "Today's cards are done",
  },
  'home.stats.startShort': { ru: 'начни', en: 'start' },
  'home.stats.reviewedToday': { ru: 'за сегодня', en: 'done today' },
  'home.stats.vocabGoal': { ru: 'цель {count} слов', en: 'goal {count} words' },
  'home.stats.modeCards': { ru: 'Карточки', en: 'Cards' },
  'home.stats.modeQuiz': { ru: 'Напиши', en: 'Write' },
  'home.stats.modeListen': { ru: 'Слушай', en: 'Listen' },
  'home.stats.miniGoal': { ru: 'цель {count}', en: 'goal {count}' },
  'home.stats.todayTotal': {
    ru: 'Сегодня: {count} действий ({delta} к вчера)',
    en: 'Today: {count} actions ({delta} vs yesterday)',
  },
  'home.stats.modeBreakdown': {
    ru: 'Карточки {cards} · Напиши {quiz} · Слушай {listen}',
    en: 'Cards {cards} · Write {quiz} · Listen {listen}',
  },
  'home.stats.motivationBetter': { ru: 'Ты круче вчерашнего себя', en: "You're beating yesterday's you" },
  'home.stats.motivationCatchUp': {
    ru: 'Ещё чуть-чуть до вчерашнего рекорда ({n})',
    en: 'Almost at yesterday\'s record ({n})',
  },
  'home.stats.motivationEqual': { ru: 'На уровне вчера — держи темп', en: 'Same as yesterday — keep going' },
  'home.stats.lastCategory': { ru: 'Последняя категория: {name}', en: 'Last category: {name}' },
  'home.stats.lastCategoryEmpty': {
    ru: 'Сегодня в этой категории карточки ещё не отрабатывались',
    en: 'No card reviews in this category today yet',
  },
  'home.stats.tabOverview': { ru: 'Сегодня', en: 'Today' },
  'home.stats.tabRatings': { ru: 'Прогресс', en: 'Progress' },
  'home.stats.tabCategory': { ru: 'Категория', en: 'Category' },
  'home.stats.ratingsTitle': { ru: 'Оценки за сегодня', en: "Today's ratings" },
  'home.stats.ratingsTotal': { ru: '{count} карточек', en: '{count} cards' },
  'home.stats.ratingsEmpty': {
    ru: 'Сегодня карточки ещё не отрабатывались',
    en: 'No card reviews today yet',
  },
  'home.stats.ratingsModeAll': { ru: 'Все ответы', en: 'All reviews' },
  'home.stats.ratingsModeRetention': { ru: 'True Retention', en: 'True Retention' },
  'home.stats.ratingsRetentionHint': {
    ru: 'Только первый ответ на слово за день — как в Anki',
    en: 'First answer per word per day — like Anki true retention',
  },
  'home.stats.ratingsInsight': {
    ru: '{hard} сложных из {total}',
    en: '{hard} difficult out of {total}',
  },
  'home.stats.categoryContinue': { ru: 'Продолжить карточки', en: 'Continue cards' },
  'home.stats.categoryReviewAll': { ru: 'Пройти все слова категории', en: 'Review all in category' },
  'home.stats.categoryDue': { ru: 'к повтор.: {count}', en: 'due: {count}' },
  'home.stats.categoryDifficult': { ru: 'трудных: {count}', en: 'difficult: {count}' },
  'home.stats.categoryInDeck': { ru: '{count} слов в категории', en: '{count} words in category' },
  'home.stats.categoryInDeckShort': { ru: 'слов', en: 'words' },
  'home.stats.categoryAllClear': {
    ru: 'Цель выполнена — можно закрепить ещё раз',
    en: 'Goal complete — review again to reinforce',
  },
  'home.stats.categoryTodayCards': {
    ru: 'Сегодня в категории: {count} карточек',
    en: 'Today in category: {count} cards',
  },
  'home.stats.categoryMissing': {
    ru: 'Пока нет последней категории',
    en: 'No last category yet',
  },
  'home.stats.categoryMissingHint': {
    ru: 'Отработайте слова по категории в словаре — она появится здесь',
    en: 'Review words by category in the dictionary to see it here',
  },
  'home.stats.categoryOpenDictionary': { ru: 'Открыть словарь', en: 'Open dictionary' },
  'home.startReview': { ru: 'Пoехали!', en: "Let's go!" },
  'home.startCards': { ru: 'Пoехали!', en: "Let's go!" },
  'home.sectionQuick': { ru: 'Быстрые действия', en: 'Quick actions' },
  'home.quick.add': { ru: 'Добавить', en: 'Add word' },
  'home.quick.scan': { ru: 'Сканировать', en: 'Scan' },

  'scan.title': { ru: 'Сканирование (OCR)', en: 'Scan (OCR)' },
  'scan.proSection': { ru: 'Pro · фото', en: 'Pro · photo' },
  'scan.proHint': {
    ru: 'Распознавание с камеры или из галереи через Gemini. Нужен ваш API ключ в настройках.',
    en: 'Recognize text from camera or gallery via Gemini. Requires your API key in Settings.',
  },
  'scan.freeSection': { ru: 'Базовое · текст', en: 'Basic · text' },
  'scan.freeHint': {
    ru: 'Вставьте готовый список слов — разбор на устройстве, без интернета и без ключа.',
    en: 'Paste a ready word list — parsed on device, no internet or API key needed.',
  },
  'scan.camera': { ru: 'Камера', en: 'Camera' },
  'scan.gallery': { ru: 'Галерея', en: 'Gallery' },
  'scan.text': { ru: 'Текст', en: 'Text' },
  'scan.noApiKey': { ru: 'Ключ Gemini API не настроен.', en: 'Gemini API key is not set.' },
  'scan.openSettings': { ru: 'Настроить в Настройках', en: 'Set up in Settings' },
  'scan.processing': { ru: 'Распознавание…', en: 'Recognizing…' },
  'scan.noImageText': {
    ru: 'Не удалось распознать корейский текст на изображении.',
    en: 'Could not recognize Korean text in the image.',
  },
  'scan.noApiKeyInline': {
    ru: 'Укажите ключ Gemini API в настройках.',
    en: 'Set your Gemini API key in Settings.',
  },
  'scan.save': { ru: 'Сохранить ({count})', en: 'Save ({count})' },
  'home.quick.difficult': { ru: 'Трудные ({count})', en: 'Difficult ({count})' },
  'home.quick.help': { ru: 'Помощь', en: 'Help' },
  'home.quick.packs': { ru: 'Все подборки', en: 'All collections' },
  'home.sectionSongSets': { ru: 'Уроки по песням', en: 'Song lessons' },
  'home.allSongSets': { ru: 'Все подборки', en: 'All collections' },
  'home.songSetWords': { ru: '{count} слов', en: '{count} words' },
  'home.quick.song': { ru: 'Учить по песне', en: 'Learn by song' },

  'song.title': { ru: 'Учить по песне', en: 'Learn by song' },
  'song.reviewTitle': { ru: 'Распознанные слова', en: 'Recognized words' },
  'song.backToInput': { ru: 'Назад', en: 'Back' },
  'song.intro': {
    ru: 'Загрузите аудio, запишите или вставьте текст песни — приложение разберёт слова. Название нужно только при сохранении.',
    en: 'Upload audio, record, or paste lyrics — the app will parse words. A name is only needed when saving.',
  },
  'song.saveSection': { ru: 'Сохранение', en: 'Save' },
  'song.nameLabel': { ru: 'Название категории', en: 'Category name' },
  'song.namePlaceholder': { ru: 'например: Dynamite', en: 'e.g. Dynamite' },
  'song.nameHint': {
    ru: 'Слова сохранятся в категорию с этим названием — это не поиск песни.',
    en: 'Words are saved into a category with this name — this is not a song search.',
  },
  'song.nameRequired': {
    ru: 'Укажите название категории перед сохранением.',
    en: 'Enter a category name before saving.',
  },
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
  'song.parseHintName': {
    ru: 'Укажите название категории перед сохранением.',
    en: 'Enter a category name before saving.',
  },
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
  'song.translateProvider': { ru: 'Перевод слов', en: 'Word translation' },
  'song.providerAuto': { ru: 'Авто', en: 'Auto' },
  'song.providerGemini': { ru: 'Gemini', en: 'Gemini' },
  'song.providerMymemory': { ru: 'MyMemory (бесплатно)', en: 'MyMemory (free)' },
  'song.badgePro': { ru: 'Pro', en: 'Pro' },
  'song.badgeFree': { ru: 'Free', en: 'Free' },
  'song.manualText': { ru: 'Текст', en: 'Text' },
  'home.emptyTitle': { ru: 'Ваш словарь пока пуст.', en: 'Your dictionary is empty.' },
  'home.emptyText': {
    ru: 'Добавьте свои первые слова вручную или отсканируйте текст из учебника!',
    en: 'Add your first words manually or scan text from your textbook!',
  },
  'home.mentor': { ru: 'Твой наставник', en: 'Your mentor' },
  'home.mentor.level': { ru: 'Уровень {n}', en: 'Level {n}' },
  'home.mentor.next': { ru: 'Следующий наставник: {name}', en: 'Next mentor: {name}' },
  'home.mentor.toNext': { ru: 'до «{name}» ещё {count} HP', en: '{count} HP to "{name}"' },
  'home.mentor.allOpen': { ru: 'все участники открыты', en: 'all members unlocked' },
  'home.mission': { ru: 'Цель на день', en: 'Daily goal' },
  'home.mission.reward': { ru: '+{count} HP', en: '+{count} HP' },

  'gallery.title': { ru: 'Уровни и наставники', en: 'Levels & mentors' },
  'gallery.sectionCards': { ru: 'Наставники', en: 'Mentors' },
  'gallery.xpHint': {
    ru: 'HP открывает наставников и повышает твой фан-статус.',
    en: 'HP unlocks mentors and raises your fan status.',
  },
  'gallery.unlocked': { ru: '✓ Получена', en: '✓ Unlocked' },
  'gallery.sectionAchievements': { ru: 'Достижения', en: 'Achievements' },
  'gallery.toNext': { ru: 'до «{name}» ещё {count} HP', en: '{count} HP to "{name}"' },
  'gallery.allOpen': { ru: 'все участники открыты', en: 'all members unlocked' },
  'gallery.empty': {
    ru: 'Изучайте слова и повторяйте карточки, чтобы открывать награды.',
    en: 'Study words and review cards to unlock rewards.',
  },
  'gallery.member': { ru: 'Участник', en: 'Member' },

  'listen.subtitle': { ru: 'слушай и выбирай', en: 'listen and choose' },
  'listen.tapToListen': { ru: 'Нажмите, чтобы прослушать', en: 'Tap to listen' },
  'listen.modeBadgeAria': {
    ru: 'Режим: угадай слово по звуку',
    en: 'Mode: guess the word by sound',
  },
  'listen.showWord': { ru: 'Показать слово', en: 'Show word' },
  'listen.hideWord': { ru: 'Скрыть слово', en: 'Hide word' },
  'listen.revealWord': { ru: 'Слово', en: 'Word' },

  'quiz.subtitle': { ru: 'listen · выбор · ввод', en: 'listen · choice · write' },

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

  'packs.title': { ru: 'Подборки слов', en: 'Word collections' },
  'packs.search': { ru: 'Поиск — песня, слово или перевод', en: 'Search song, word or translation' },
  'packs.added': { ru: '✓ Добавлено', en: '✓ Added' },
  'packs.empty': { ru: 'Ничего не нашлось. Попробуйте другой запрос.', en: 'Nothing found. Try another query.' },
  'packs.footer': {
    ru: 'Слова из подборки добавляются в словарь, если их там ещё нет. Дальше — те же карточки и квиз.',
    en: 'Pack words are added to your dictionary if they are not there yet. Then you study them in cards and quizzes.',
  },
  'packs.words': { ru: '{count} слов', en: '{count} words' },

  'cards.nothingDueTitle': { ru: 'Закрепим слова', en: 'Keep practicing' },
  'cards.nothingDueDesc': {
    ru: 'К сроку ничего не подошло, но {count} слов ждут — пройди их ещё раз.',
    en: 'Nothing is due, but {count} words are ready — review them again.',
  },
  'cards.noWordsTitle': { ru: 'Словарь пуст', en: 'Dictionary is empty' },
  'cards.noWordsDesc': {
    ru: 'Добавь первые слова — и можно начинать.',
    en: 'Add your first words to get started.',
  },
  'cards.reviewAll': { ru: 'Повторить все слова', en: 'Review all words' },
  'cards.reviewAllCount': { ru: 'Пройти все слова ({count})', en: 'Review all words ({count})' },
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
  'cards.session.tabPractice': { ru: 'Карточки', en: 'Cards' },
  'cards.session.tabStats': { ru: 'Показатели', en: 'Stats' },
  'cards.session.statsTotal': { ru: 'Сегодня всего', en: 'Today total' },
  'cards.session.statsCategory': { ru: 'Категория: {name}', en: 'Category: {name}' },
  'cards.session.todayTotal': { ru: 'Всего за день: {count}', en: 'Total today: {count}' },
  'cards.session.difficultInCategory': {
    ru: 'Трудные слова в категории ({count})',
    en: 'Difficult words in category ({count})',
  },
  'cards.session.noDifficultInCategory': {
    ru: 'В этой категории нет трудных слов',
    en: 'No difficult words in this category',
  },
  'cards.session.categoryRatings': { ru: 'Оценки за сегодня', en: 'Today’s ratings' },

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
  'add.category': { ru: 'Категории', en: 'Categories' },
  'add.source': { ru: 'Источник (откуда слово)', en: 'Source (where the word is from)' },
  'add.noSource': { ru: '✍️ Без источника', en: '✍️ No source' },
  'add.level': { ru: 'Уровень', en: 'Level' },
  'add.errKorean': { ru: 'Укажите корейское слово.', en: 'Enter the Korean word.' },
  'add.errHanzi': { ru: 'Укажите иероглиф.', en: 'Enter hanzi.' },
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
  'dict.searchZh': { ru: 'Поиск: иероглиф, pinyin, перевод…', en: 'Search: hanzi, pinyin, translation…' },
  'dict.emptyZh': {
    ru: 'Китайский профиль пуст — добавьте слова или выберите Mandopop-миссию.',
    en: 'Chinese profile is empty — add words or pick a Mandopop mission.',
  },
  'dict.selectOnAria': { ru: 'Выйти из выбора', en: 'Exit selection' },
  'dict.selectOffAria': { ru: 'Выбрать слова', en: 'Select words' },
  'dict.selectionEmpty': {
    ru: 'Нажмите на слова, чтобы выбрать их.',
    en: 'Tap words to select them.',
  },
  'dict.selectionHint': {
    ru: 'Выбрано: {count}. Нажмите на слово, чтобы выбрать или убрать.',
    en: 'Selected: {count}. Tap a word to toggle it.',
  },
  'dict.bulkActions': { ru: 'Действия с выбранными словами', en: 'Actions for selected words' },
  'dict.assignCategory': { ru: 'Назначить категорию', en: 'Assign category' },
  'dict.deleteSelected': { ru: 'Удалить', en: 'Delete' },
  'dict.deleteConfirm': {
    ru: 'Удалить {count} слов из словаря?',
    en: 'Delete {count} words from the dictionary?',
  },
  'dict.all': { ru: 'Все', en: 'All' },
  'dict.addCategory': { ru: '+ Категория', en: '+ Category' },
  'dict.emptyFound': { ru: 'Ничего не найдено по вашему запросу.', en: 'Nothing found for your query.' },
  'dict.emptyEmpty': { ru: 'Словарь пуст. Добавьте слова!', en: 'The dictionary is empty. Add some words!' },
  'dict.categories': { ru: '✏️ Категории', en: '✏️ Categories' },
  'dict.delete': { ru: '🗑 Удалить', en: '🗑 Delete' },
  'dict.categoriesDialog': {
    ru: 'Назначить категории ({count} слов)',
    en: 'Assign categories ({count} words)',
  },
  'dict.categoriesHint': {
    ru: 'Выбранные категории добавятся к уже назначенным.',
    en: 'Selected categories will be added to existing ones.',
  },
  'dict.pickCategories': { ru: 'Выберите категории', en: 'Pick categories' },
  'dict.noCategoriesYet': {
    ru: 'Категорий пока нет — создайте первую.',
    en: 'No categories yet — create one.',
  },
  'dict.assign': { ru: 'Назначить', en: 'Assign' },
  'category.pickOrCreate': {
    ru: 'Выберите категорию или создайте новую',
    en: 'Pick a category or create a new one',
  },
  'category.addMore': { ru: 'ещё категория…', en: 'another category…' },
  'category.create': { ru: '+ «{name}»', en: '+ «{name}»' },
  'category.createTitle': { ru: 'Новая категория', en: 'New category' },
  'category.editTitle': { ru: 'Редактировать категорию', en: 'Edit category' },
  'category.nameLabel': { ru: 'Название', en: 'Name' },
  'category.namePlaceholder': { ru: 'Хобби', en: 'Hobbies' },
  'category.emojiLabel': { ru: 'Эмодзи', en: 'Emoji' },
  'category.colorLabel': { ru: 'Цвет', en: 'Color' },
  'category.saveCreate': { ru: 'Создать', en: 'Create' },
  'category.saveEdit': { ru: 'Сохранить', en: 'Save' },
  'category.errNameRequired': {
    ru: 'Введите название категории.',
    en: 'Enter a category name.',
  },
  'category.manage': { ru: 'Управление категориями', en: 'Manage categories' },
  'category.manageDone': { ru: 'Готово', en: 'Done' },
  'category.editAria': { ru: 'Изменить категорию', en: 'Edit category' },
  'category.deleteAria': { ru: 'Удалить категорию', en: 'Delete category' },
  'dict.addWordAria': { ru: 'Добавить слово', en: 'Add word' },
  'dict.importFile': { ru: 'Импорт из файла', en: 'Import from file' },
  'dict.importFileAria': { ru: 'Импорт слов из файла', en: 'Import words from file' },

  'add.importFile': { ru: 'Импорт из файла', en: 'Import from file' },

  'import.recognizedTitle': {
    ru: 'Распознанные слова ({count} готовых{known})',
    en: 'Recognized words ({count} ready{known})',
  },
  'import.recognizedKnown': { ru: ' · {count} уже в словаре', en: ' · {count} already in dictionary' },

  'fileImport.title': { ru: 'Импорт из файла', en: 'Import from file' },
  'fileImport.intro': {
    ru: 'Загрузите список слов — формат совместим с Anki, Excel и Quizlet.',
    en: 'Upload a word list — compatible with Anki, Excel, and Quizlet.',
  },
  'fileImport.formatsTitle': { ru: 'Поддерживаемые форматы', en: 'Supported formats' },
  'fileImport.formatTsv': {
    ru: 'TSV / TXT — слово и перевод через Tab (рекомендуется, экспорт Anki)',
    en: 'TSV / TXT — word and translation separated by Tab (recommended, Anki export)',
  },
  'fileImport.formatCsv': {
    ru: 'CSV — через запятую; кавычки для значений с запятыми',
    en: 'CSV — comma-separated; use quotes for values containing commas',
  },
  'fileImport.formatJson': {
    ru: 'JSON — массив [{ "korean": "…", "translation": "…" }]',
    en: 'JSON — array [{ "korean": "…", "translation": "…" }]',
  },
  'fileImport.formatAnki': {
    ru: 'Anki — строки #separator:tab или #separator:comma в начале файла',
    en: 'Anki — #separator:tab or #separator:comma header lines at file start',
  },
  'fileImport.exampleTsv': {
    ru: 'Пример TSV: 안녕하세요[TAB]здравствуйте',
    en: 'TSV example: 안녕하세요[TAB]здравствуйте',
  },
  'fileImport.exampleCsv': {
    ru: 'Пример CSV: Word,Translation',
    en: 'CSV example: Word,Translation',
  },
  'fileImport.pickFile': { ru: 'Выбрать файл', en: 'Choose file' },
  'fileImport.parsing': { ru: 'Разбор файла…', en: 'Parsing file…' },
  'fileImport.empty': {
    ru: 'В файле не найдено пар «слово — перевод».',
    en: 'No word–translation pairs found in the file.',
  },
  'fileImport.error': { ru: 'Не удалось прочитать файл.', en: 'Could not read the file.' },
  'fileImport.tooLarge': {
    ru: 'Файл слишком большой (макс. 512 КБ).',
    en: 'File is too large (max 512 KB).',
  },
  'fileImport.save': { ru: 'Сохранить ({count})', en: 'Save ({count})' },
  'fileImport.badgeFree': { ru: 'Free', en: 'Free' },

  'progress.stat': { ru: 'Статистика', en: 'Statistics' },
  'progress.mastered': { ru: 'Выучено', en: 'Mastered' },
  'progress.masteredHint': {
    ru: 'Слово с интервалом {days}+ дней — достижение, не сбрасывается',
    en: 'Word reached {days}+ day interval — a milestone that never resets',
  },
  'progress.streakHint': {
    ru: 'Карточки, «Напиши» или «Слушай»',
    en: 'Cards, Write, or Listen practice',
  },
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
  'settings.group.general': { ru: 'Общие', en: 'General' },
  'settings.group.account': { ru: 'Аккаунт', en: 'Account' },
  'backup.sectionTitle': { ru: 'Резервная копия', en: 'Backup' },
  'backup.sectionHint': {
    ru: 'Экспортируйте слова, статистику и настройки в файл JSON.',
    en: 'Export words, stats, and settings to a JSON file.',
  },
  'backup.export': { ru: 'Экспорт данных', en: 'Export data' },
  'backup.import': { ru: 'Импорт данных', en: 'Import data' },
  'backup.exporting': { ru: 'Экспорт…', en: 'Exporting…' },
  'backup.importing': { ru: 'Импорт…', en: 'Importing…' },
  'backup.confirmTitle': { ru: 'Импортировать резервную копию?', en: 'Import backup?' },
  'backup.confirmBody': {
    ru: 'Будет заменено: {words} слов, {categories} категорий, {reviews} записей повторений. Текущие данные на этом устройстве будут перезаписаны.',
    en: 'Will replace: {words} words, {categories} categories, {reviews} review records. Current data on this device will be overwritten.',
  },
  'backup.confirmAction': { ru: 'Импортировать', en: 'Import' },
  'backup.cancel': { ru: 'Отмена', en: 'Cancel' },
  'backup.exportDone': { ru: 'Файл сохранён', en: 'File saved' },
  'backup.errorInvalid': { ru: 'Неверный файл резервной копии', en: 'Invalid backup file' },
  'backup.errorTooLarge': { ru: 'Файл слишком большой (макс. 20 МБ)', en: 'File is too large (max 20 MB)' },
  'backup.errorGeneric': { ru: 'Не удалось выполнить операцию', en: 'Operation failed' },
  'settings.group.pro': { ru: 'Pro', en: 'Pro' },
  'settings.group.content': { ru: 'Тема и контент', en: 'Theme & content' },
  'settings.group.integrations': { ru: 'Сканирование', en: 'Scanning' },
  'settings.group.help': { ru: 'Справка', en: 'Help' },
  'settings.proOcrNote': {
    ru: 'Функция в доработке. Если у вас есть Gemini API ключ, вы можете подключить распознавание текста с фото — укажите ключ ниже.',
    en: 'This feature is still being improved. If you have a Gemini API key, you can enable photo text recognition — enter it below.',
  },
  'settings.lang': { ru: 'Язык', en: 'Language' },
  'settings.langHint': { ru: 'Язык интерфейса. Данные слов не меняются.', en: 'Interface language. Word data is unchanged.' },
  'settings.ocr': { ru: 'Распознавание текста', en: 'Text recognition' },
  'settings.apiKey': { ru: 'Gemini API ключ', en: 'Gemini API key' },
  'settings.apiKeyHint': {
    ru: 'Нужен для сканирования текста с фото.',
    en: 'Needed to scan text from photos.',
  },
  'settings.apiKeyRemember': { ru: 'Запомнить в браузере', en: 'Remember in browser' },
  'settings.apiKeyRememberHint': {
    ru: 'Если выключено, ключ хранится только до закрытия вкладки.',
    en: 'When off, the key is kept only until you close the tab.',
  },
  'settings.apiKeySecurityHint': {
    ru: 'Ограничьте ключ в Google Cloud: только Generative Language API и ваш сайт. Ключ не попадает в резервную копию.',
    en: 'Restrict your key in Google Cloud: Generative Language API only and your site. The key is not included in backups.',
  },
  'settings.apiKeyClear': { ru: 'Удалить ключ', en: 'Delete key' },
  'settings.proxy': { ru: 'Прокси для Gemini', en: 'Gemini proxy' },
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
    ru: 'В настройках в разделе «Прокси для Gemini» по умолчанию стоит адрес {proxy}. Не удаляйте его — он нужен для стабильной работы сканирования. Если его нет — вставьте адрес обратно.',
    en: 'In Settings → “Gemini proxy” a default URL {proxy} is set. Keep it — scanning needs it for reliable operation. If missing, paste it back.',
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
    ru: 'Добавляйте слова вручную, сканируйте из учебника или выбирайте их пачкой, чтобы разложить по категориям. Прогресс 📊 показывает, сколько слов вы уже запомнили.',
    en: 'Add words manually, scan from a textbook or import packs, and organize them with categories. Progress 📊 shows how many words you have memorized.',
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

  'tab.phrases': { ru: 'Фразы', en: 'Phrases' },
  'home.challenge': { ru: 'Миссия', en: 'Mission' },
  'home.challengePick': { ru: 'Выбрать миссию', en: 'Choose mission' },
  'home.challengeToday': { ru: 'Подборка дня (авто)', en: 'Daily pick (auto)' },
  'home.challengeSuggested': { ru: 'сегодня', en: 'today' },
  'home.challengeStart': { ru: 'Добавить слова', en: 'Add words' },
  'home.challengeDone': { ru: 'Подборка добавлена ✓', en: 'Collection added ✓' },
  'missionPick.title': { ru: 'Выберите миссию', en: 'Choose a mission' },
  'missionPick.tabAvailable': { ru: 'Доступные', en: 'Available' },
  'missionPick.tabCompleted': { ru: 'Пройденные', en: 'Completed' },
  'missionPick.refresh': { ru: 'Обновить подборку', en: 'Refresh collection' },
  'missionPick.refreshing': { ru: 'Загружаем миссии…', en: 'Loading missions…' },
  'missionPick.refreshHint': {
    ru: 'Заменит текущие 7 миссий на новые из каталога',
    en: 'Replaces the current 7 missions with new ones from the catalog',
  },
  'missionPick.completedBadge': { ru: 'Пройдена', en: 'Completed' },
  'missionPick.completedProgress': {
    ru: '{total} слов · {pct}% · пройдена',
    en: '{total} words · {pct}% · completed',
  },
  'missionPick.dailySub': {
    ru: '{title} · {total} слов · осталось {left}',
    en: '{title} · {total} words · {left} left',
  },
  'missionPick.completedEmpty': {
    ru: 'Пока нет пройденных миссий — начни с доступных',
    en: 'No completed missions yet — start with available ones',
  },
  'missionPick.availableEmpty': {
    ru: 'Нет доступных миссий — нажми «Обновить подборку» или загляни в «Пройденные»',
    en: 'No missions available — tap Refresh or check Completed',
  },
  'missionPick.hint': {
    ru: 'Сейчас доступно 7 миссий. Пройденные сохраняются во вкладке «Пройденные».',
    en: '7 missions are available now. Completed ones stay in the Completed tab.',
  },
  'missionPick.progress': {
    ru: '{total} слов · {pct}% · осталось {count}',
    en: '{total} words · {pct}% · {count} left',
  },
  'missionPick.noDaily': { ru: 'Ротация по календарю', en: 'Calendar rotation' },
  'missionStart.title': { ru: 'Готов начать?', en: 'Ready to start?' },
  'missionStart.wordCountLabel': { ru: 'Сколько слов учить', en: 'How many words to study' },
  'missionStart.wordCountAll': { ru: 'Все', en: 'All' },
  'missionStart.wordCountCapped': {
    ru: 'Выбрано больше, чем есть — возьмём {total}',
    en: 'You chose more than available — we will use {total}',
  },
  'missionStart.wordCountUnavailable': {
    ru: 'В подборках максимум {max} слов',
    en: 'Collections have at most {max} words',
  },
  'missionStart.wordCountMaxHint': {
    ru: 'Сейчас в подборках до {max} слов — 50 и 100 появятся, когда добавим больше песен',
    en: 'Collections currently hold up to {max} words — 50 and 100 unlock with more songs',
  },
  'missionStart.wordsChosen': { ru: 'Выбрано: {count}', en: 'Selected: {count}' },
  'missionStart.wordsInCollection': {
    ru: 'Всего в подборке: {count}',
    en: 'In collection: {count}',
  },
  'missionStart.wordsSession': {
    ru: '{count} слов в этой тренировке',
    en: '{count} words in this session',
  },
  'missionStart.desc': {
    ru: 'Тренировка: карточки и повторение слов из этой подборки.',
    en: 'Training: flashcards and review for words in this collection.',
  },
  'missionStart.wordsTotal': { ru: '{count} слов в подборке', en: '{count} words in collection' },
  'missionStart.wordsReady': { ru: '{count} уже в словаре', en: '{count} already in dictionary' },
  'missionStart.wordsNew': { ru: '{count} добавим перед стартом', en: '{count} will be added before start' },
  'missionStart.start': { ru: 'Да, начать', en: 'Yes, start' },
  'missionStart.addAndStart': { ru: 'Добавить и начать', en: 'Add & start' },
  'missionStart.later': { ru: 'Позже', en: 'Not now' },
  'home.quick.translate': { ru: 'Перевод', en: 'Translate' },
  'home.quick.phrases': { ru: 'Фразы', en: 'Phrases' },

  'dict.reviewCards': { ru: 'Карточки', en: 'Cards' },
  'dict.reviewQuiz': { ru: 'Квиз', en: 'Quiz' },

  'dup.title': { ru: 'Похожее слово найдено', en: 'Similar word found' },
  'dup.desc': { ru: 'Выберите, что сделать с новым словом.', en: 'Choose what to do with the new word.' },
  'dup.new': { ru: 'Новое', en: 'New' },
  'dup.existing': { ru: 'В словаре', en: 'Existing' },
  'dup.skip': { ru: 'Пропустить', en: 'Skip' },
  'dup.cancel': { ru: 'Не добавлять', en: "Don't add" },
  'dup.update': { ru: 'Обновить', en: 'Update' },
  'dup.keepBoth': { ru: 'Сохранить оба', en: 'Keep both' },

  'progress.boards': { ru: 'Доски прогресса', en: 'Progress boards' },
  'progress.planFact': { ru: 'Как идёт неделя', en: 'Your week' },
  'progress.plan': { ru: 'План', en: 'Plan' },
  'progress.fact': { ru: 'Факт', en: 'Actual' },
  'progress.forecast': { ru: 'При текущем темпе: ~{count}', en: 'At current pace: ~{count}' },
  'progress.weeklyGrowth': { ru: 'За неделю: {pct}%', en: 'This week: {pct}%' },
  'progress.xpRank': { ru: 'Уровень {level}', en: 'Level {level}' },
  'progress.goal': { ru: 'Цель: {count}/день', en: 'Goal: {count}/day' },
  'progress.topCategories': { ru: 'Топ категорий', en: 'Top categories' },

  'quiz.modeReverse': { ru: 'Выбор ответа', en: 'Multiple choice' },
  'quiz.modeWrite': { ru: 'Написать по переводу', en: 'Write by translation' },
  'quiz.writePrompt': { ru: 'Напишите слово:', en: 'Write the word:' },
  'quiz.writePlaceholder': { ru: 'Корейское слово…', en: 'Korean word…' },
  'quiz.writePlaceholderZh': { ru: 'Иероглиф…', en: 'Hanzi…' },

  'translate.title': { ru: 'Перевод', en: 'Translate' },
  'translate.btn': { ru: 'Перевести', en: 'Translate' },
  'translate.loading': { ru: 'Перевод…', en: 'Translating…' },
  'translate.placeholder': { ru: 'Введите текст', en: 'Enter text' },
  'translate.resultPlaceholder': { ru: 'Перевод появится здесь', en: 'Translation will appear here' },
  'translate.error': { ru: 'Ошибка перевода', en: 'Translation error' },
  'translate.quota': { ru: 'Дневной лимит исчерпан', en: 'Daily limit exceeded' },
  'translate.quotaHint': {
    ru: 'Укажите email для MyMemory — лимит вырастет до ~50 000 символов/день.',
    en: 'Add your email for MyMemory — limit increases to ~50,000 chars/day.',
  },
  'translate.saveEmail': { ru: 'Сохранить и повторить', en: 'Save and retry' },
  'translate.addWord': { ru: 'Добавить в словарь', en: 'Add to dictionary' },
  'translate.dirToRu': { ru: '→ Русский', en: '→ Russian' },
  'translate.dirToLearning': { ru: '→ Язык обучения', en: '→ Learning language' },
  'translate.langKo': { ru: 'Корейский', en: 'Korean' },
  'translate.langRu': { ru: 'Русский', en: 'Russian' },
  'translate.langZh': { ru: 'Китайский', en: 'Chinese' },
  'translate.swap': { ru: 'Поменять языки местами', en: 'Swap languages' },
  'translate.clear': { ru: 'Очистить', en: 'Clear' },
  'translate.copy': { ru: 'Копировать', en: 'Copy' },

  'settings.dailyGoal': { ru: 'Дневная цель', en: 'Daily goal' },
  'settings.dailyGoalLabel': { ru: 'Слов в день', en: 'Words per day' },
  'settings.dailyGoalHint': {
    ru: 'Используется на экране прогресса для графика план/факт.',
    en: 'Used on the progress screen for plan vs actual chart.',
  },
  'settings.wordsPerDay': { ru: 'сл/день', en: 'w/day' },
  'settings.learningLanguage': { ru: 'Язык обучения', en: 'Learning language' },
  'settings.langKo': { ru: 'Корейский', en: 'Korean' },
  'settings.langZh': { ru: 'Китайский (MVP)', en: 'Chinese (MVP)' },
  'settings.learningLanguageHint': {
    ru: 'Два независимых профиля: словарь, SRS, HP и цели хранятся отдельно для ko и zh.',
    en: 'Two independent profiles: dictionary, SRS, HP, and goals are separate for ko and zh.',
  },
  'home.zhProfileHint': {
    ru: 'Китайский профиль пуст — добавьте слова или выберите Mandopop-миссию на главной.',
    en: 'Chinese profile is empty — add words or pick a Mandopop mission on Home.',
  },
  'settings.translateSection': { ru: 'Перевод (MyMemory)', en: 'Translation (MyMemory)' },
  'settings.mymemoryEmail': { ru: 'Email для MyMemory', en: 'MyMemory email' },
  'settings.mymemoryEmailHint': {
    ru: 'Email отправляется только в MyMemory, не на наш сервер.',
    en: 'Email is sent only to MyMemory, not to our server.',
  },
  'settings.guideModes': { ru: 'Режимы обучения', en: 'Learning modes' },
  'settings.guideModesHint': {
    ru: 'Полное знакомство с Ури — с самого начала.',
    en: 'Full intro with Uri — from the very beginning.',
  },

  'onboard.story.intro.lead': { ru: 'Привет, я — Ури!', en: "Hi, I'm Uri!" },
  'onboard.story.intro.nameTitle': { ru: 'Woori · 우리', en: 'Woori · 우리' },
  'onboard.story.intro.nameBody': {
    ru: 'По-корейски 우리 — это «мы». Не «я зубрю один», а учимся вместе: твои слова, твой прогресс, наша команда.',
    en: 'In Korean, 우리 means "we". Not studying alone — we learn together: your words, your progress, our team.',
  },
  'onboard.story.intro.body': {
    ru: 'Я помогаю учить корейский и китайский — добавляешь слова, повторяешь вовремя, играешь в режимах, а я слежу, чтобы всё шло весело. Вот, что я умею…',
    en: 'I help you learn Korean and Chinese — add words, review on time, play in different modes, and I keep things fun. Here is what we can do…',
  },
  'onboard.story.intro.hook': {
    ru: 'Сейчас за минуту расскажу подробнее — поехали?',
    en: 'Give me a minute to walk you through it — ready?',
  },

  'onboard.story.daily.lead': { ru: 'Начнём с главного — карточки!', en: "Let's start with the basics — flashcards!" },
  'onboard.story.daily.body': {
    ru: 'Каждый день переворачиваешь карточку, вспоминаешь перевод и честно говоришь, как было. Я сама подскажу, когда повторить: забыл — увидишь скоро, легко — подожду подольше.',
    en: 'Every day you flip a card, recall the translation, and rate yourself honestly. I schedule the next review: forgot — see it soon, easy — wait longer.',
  },
  'onboard.story.daily.hook': {
    ru: 'Заглядывай каждый день — так слова приживаются.',
    en: 'Drop in every day — that is how words stick.',
  },

  'onboard.story.play.lead': { ru: 'Когда слова подружатся с тобой — играем!', en: 'Once words feel familiar — we play!' },
  'onboard.story.play.body': {
    ru: 'Слушай — услышишь слово и выберешь перевод. Квиз — перевод на экране, выбираешь ответ. Напиши — сам пишешь слово или иероглиф (для китайского — с pinyin и тонами). Три режима, один заряд.',
    en: 'Listen — hear a word and pick the translation. Quiz — translation on screen, pick the answer. Write — type the word or hanzi yourself (Chinese includes pinyin and tones). Three modes, one energy boost.',
  },
  'onboard.story.play.hook': {
    ru: 'Попробуешь все — станет ещё интереснее.',
    en: 'Try them all — it gets more fun.',
  },

  'onboard.story.world.lead': { ru: 'А вокруг словаря — целый мир!', en: 'Around your dictionary — a whole world!' },
  'onboard.story.world.body': {
    ru: 'Коллекции, песни, скан учебника — и фразы из K-pop и C-drama. Выполняешь цель дня. Два профиля — корейский и китайский — каждый со своим словарём.',
    en: 'Collections, songs, textbook scans — and K-pop and C-drama phrases. Hit your daily goal. Two profiles — Korean and Chinese — each with its own dictionary.',
  },
  'onboard.story.world.dictTitle': {
    ru: 'Словарь и категории',
    en: 'Dictionary and categories',
  },
  'onboard.story.world.dictBody': {
    ru: 'Добавляй слова вручную или из коллекций и песен — и складывай в категории. Так проще находить нужное, когда приходит время повторять.',
    en: 'Add words manually or from collections and songs — and organize them into categories. Easier to find what you need when it is time to review.',
  },
  'onboard.story.world.dictSoon': {
    ru: 'Можно импортировать целые наборы слов из файла — TSV, CSV или JSON.',
    en: 'You can import whole word sets from a file — TSV, CSV, or JSON.',
  },
  'onboard.story.world.themesTitle': {
    ru: 'Мотивация · твоя группа',
    en: 'Motivation · your group',
  },
  'onboard.story.world.themesBody': {
    ru: 'Копишь HP за учёбу, выполняешь цели — и открываешь наставников. Выбери тему BTS или Stray Kids — и наставники, приветствия и награды будут от твоей группы.',
    en: 'Earn HP as you learn, hit your goals — and unlock mentors. Pick BTS or Stray Kids — mentors, greetings, and rewards come from your group.',
  },
  'onboard.story.world.themesTail': {
    ru: 'С любимой командой учить корейский (и китайский!) куда интереснее.',
    en: 'Learning Korean (and Chinese!) is more interesting with your favorite group.',
  },
  'onboard.story.world.hook': {
    ru: 'Чем больше учишь — тем интереснее становится.',
    en: 'The more you learn, the more there is to explore.',
  },

  'onboard.story.themes.lead': {
    ru: 'Ещё кое-что, что делает учёбу веселее.',
    en: 'One more thing that makes learning fun.',
  },

  'onboard.story.goal.lead': { ru: 'Последнее — твой темп.', en: 'Last thing — your pace.' },
  'onboard.story.goal.body': {
    ru: 'Сколько новых слов в день тебе комфортно? Я запомню и буду подсказывать.',
    en: 'How many new words per day feels right? I will remember and nudge you gently.',
  },

  'onboard.rating.again': { ru: 'Забыл', en: 'Again' },
  'onboard.rating.hard': { ru: 'Трудно', en: 'Hard' },
  'onboard.rating.good': { ru: 'Хорошо', en: 'Good' },
  'onboard.rating.easy': { ru: 'Легко', en: 'Easy' },
  'onboard.skip': { ru: 'Пропустить', en: 'Skip' },
  'onboard.start': { ru: 'Поехали!', en: "Let's go!" },

  'phrases.title': { ru: 'Фразы', en: 'Phrases' },
  'phrases.desc': {
    ru: 'Фразы из песен {group} — нажмите 🔊 для озвучки (Web Speech).',
    en: 'Phrases from {group} songs — tap 🔊 to listen (Web Speech).',
  },
  'phrases.empty': { ru: 'Фразы загружаются при первом запуске.', en: 'Phrases load on first launch.' },
  'phrases.descZh': {
    ru: 'Фразы из Mandopop и C-drama — нажмите 🔊 для озвучки.',
    en: 'Mandopop and C-drama phrases — tap 🔊 to listen.',
  },
  'phrases.emptyZh': { ru: 'Китайские фразы загружаются при первом запуске. Обновите страницу.', en: 'Chinese phrases load on first launch. Refresh the page.' },
  'phrases.fromSong': { ru: 'из песни «{song}»', en: 'from «{song}»' },

  'add.hanzi': { ru: 'Иероглиф (hanzi) *', en: 'Hanzi *' },
  'add.pinyin': { ru: 'Пиньинь', en: 'Pinyin' },
  'add.tones': { ru: 'Тоны', en: 'Tones' },
  'add.suggested': { ru: 'Предложено:', en: 'Suggested:' },
  'add.createCat': { ru: 'Создать: {name}', en: 'Create: {name}' },

  'word.songBadge': { ru: 'Песня: {name}', en: 'Song: {name}' },
};

export function t(key: string, params?: Record<string, string | number>): string {
  const entry = STRINGS[key];
  const base = entry ? (currentLocale === 'en' ? entry.en : entry.ru) : key;
  if (!params) return base;
  return base.replace(/\{(\w+)\}/g, (match, name) =>
    params[name] !== undefined ? String(params[name]) : match
  );
}