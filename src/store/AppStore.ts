import { useSyncExternalStore } from 'react';
import * as repo from '../db/repository';
import type {
  Category,
  Difficulty,
  DuplicateAction,
  DuplicateWordPayload,
  ImportedWordDraft,
  Progression,
  Achievement,
  Pack,
  Phrase,
  QuizOption,
  QuizQuestion,
  Source,
  Word,
  LearningLanguage,
} from '../types';
import { toRomaja } from '../domain/romaja';
import { speak } from '../domain/tts';
import { randomGreeting, randomGifName, activeTheme } from '../domain/themes';
import {
  xpForReview,
  todayMission,
  missionCompleted,
  newlyEarnedAchievements,
  XP_WRITE_MODE_CORRECT,
  XP_PACK_COMPLETED,
  type GamificationStats,
} from '../domain/gamification';
import { packFullyImported, packReviewed } from '../domain/daily-challenge';
import type { SrsRatingValue } from '../domain/srs-engine';
import { newId } from '../db/schema';
import {
  storedRewardThreshold,
  storedThemeId,
  saveThemeId,
  storedGreetingId,
  saveGreetingId,
  storedShowRomaja,
  saveShowRomaja,
  storedCardVoice,
  saveCardVoice,
  storedListenVoice,
  saveListenVoice,
  storedColorTheme,
  saveColorTheme,
  applyColorTheme,
  storedDailyWordGoalFor,
  saveDailyWordGoalFor,
  storedOnboardingCompleted,
  storedLearningLanguage,
  saveLearningLanguage,
  pushRecentCategoryIdFor,
  storedSelectedMissionPackIdFor,
  saveSelectedMissionPackIdFor,
  migrateProfileSettings,
  type ColorTheme,
} from '../domain/settings';
import { activeMissionPack, suggestedMissionPacks } from '../domain/daily-challenge';
import { wordLanguage } from '../domain/language';
import { hanziToReading } from '../domain/pinyin';
import { voiceCharacter } from '../domain/voice-chars';
import { setLocale as applyLocale, getLocale as readLocale, type Locale } from '../domain/i18n';

function resolveInitialGreetingId(): string {
  const themeId = storedThemeId();
  const saved = storedGreetingId(themeId);
  const greetings = activeTheme().greetings;
  if (saved && greetings.some((g) => g.id === saved)) return saved;
  return randomGreeting().id;
}

function localToday(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export type Tab =
  | 'home'
  | 'cards'
  | 'listening'
  | 'quiz'
  | 'dictionary'
  | 'phrases'
  | 'progress'
  | 'gallery'
  | 'settings';

export const TAB_DEFS: { id: Tab; title: string; korean: string; icon: string }[] = [
  { id: 'home', title: 'Главная', korean: '홈', icon: 'house' },
  { id: 'cards', title: 'Карточки', korean: '복습', icon: 'stack' },
  { id: 'listening', title: 'Аудирование', korean: '듣기', icon: 'headphones' },
  { id: 'quiz', title: 'Квиз', korean: '퀴즈', icon: 'patch-question' },
  { id: 'dictionary', title: 'Словарь', korean: '단어장', icon: 'book' },
  { id: 'gallery', title: 'Коллекция', korean: '컬렉션', icon: 'images' },
  { id: 'progress', title: 'Прогресс', korean: '통계', icon: 'bar-chart' },
  { id: 'settings', title: 'Настройки', korean: '설정', icon: 'gear' },
];

const COMPLETED_PACKS_KEY = 'completed_pack_ids';

function storedCompletedPackIds(): Set<string> {
  try {
    const raw = localStorage.getItem(COMPLETED_PACKS_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw) as unknown;
    return new Set(Array.isArray(parsed) ? parsed.filter((x) => typeof x === 'string') : []);
  } catch {
    return new Set();
  }
}

export interface QuizRewardState {
  consecutiveCorrect: number;
  rewardGifName: string | null;
}

function createStore() {
  let currentTab: Tab = 'home';
  let tabStack: Tab[] = [];
  let allWords: Word[] = [];
  let categories: Category[] = [];
  let sources: Source[] = [];
  let packs: Pack[] = [];
  let progression: Progression = { id: 'ko', xp: 0, rewardedMissionDate: null, completedPackIds: [] };
  let achievements: Achievement[] = [];

  let searchQuery = '';
  let selectedCategoryId: string | null = null;

  let selectionActive = false;
  let selectedIds: Set<string> = new Set();

  let cardsQueue: Word[] = [];
  let currentCardIndex = 0;
  let isCardFlipped = false;

  let quizQuestion: QuizQuestion | null = null;
  let selectedOptionIndex: number | null = null;
  let isAnswerChecked = false;
  let quizScore = 0;
  let quizTotalCount = 0;
  let quizReward: QuizRewardState = { consecutiveCorrect: 0, rewardGifName: null };

  let isAddWordOpen = false;
  let isScanOcrOpen = false;
  let isCreateCategoryOpen = false;
  let isGuideOpen = false;
  let isPacksOpen = false;
  let isSongImportOpen = false;
  let selectedWordForDetail: Word | null = null;
  let editingWord: Word | null = null;
  let prefilledKorean = '';
  let prefilledCategoryId: string | null = null;
  let currentGreetingId: string = resolveInitialGreetingId();
  let showRomaja: boolean = storedShowRomaja();
  let cardVoiceId: string = storedCardVoice();
  let listenVoiceId: string = storedListenVoice();
  let colorTheme: ColorTheme = storedColorTheme();
  let phrases: Phrase[] = [];
  let learningLanguage: LearningLanguage = storedLearningLanguage();
  let dailyWordGoal = storedDailyWordGoalFor(learningLanguage);
  let zhProfileHint = false;
  let isOnboardingOpen = false;
  let onboardingSkipWelcome = false;
  let isTranslateOpen = false;
  let translateInitialText = '';
  let prefilledTranslation = '';
  let duplicatePending: { existing: Word; incoming: DuplicateWordPayload } | null = null;
  let duplicateQueue: DuplicateWordPayload[] = [];
  let duplicateResolveCallback: ((added: number) => void) | null = null;
  let quizWordPool: Word[] | null = null;
  let quizSource: 'global' | 'category' | 'filtered' = 'global';
  let quizCategoryId: string | null = null;
  let writeInput = '';
  let completedPackIds = new Set<string>();
  let selectedMissionPackId = storedSelectedMissionPackIdFor(learningLanguage);
  let isMissionPickOpen = false;
  let isMissionStartOpen = false;
  let pendingMissionStartPackId: string | null = null;

  const listeners = new Set<() => void>();
  let snapshot = { v: 0 };

  function emit() {
    snapshot = { v: snapshot.v + 1 };
    listeners.forEach((l) => l());
  }

  function wordsForProfile(): Word[] {
    return allWords.filter((w) => wordLanguage(w) === learningLanguage);
  }

  function packsForProfile(): Pack[] {
    return packs.filter((p) => (p.language ?? 'ko') === learningLanguage);
  }

  async function refresh() {
    allWords = await repo.allWords();
    categories = await repo.allCategories();
    sources = await repo.allSources();
    packs = await repo.allPacks();
    phrases = await repo.allPhrases();
    emit();
  }

  async function checkDuplicate(korean: string): Promise<Word | undefined> {
    return repo.findWordByKorean(korean);
  }

  async function insertWordFromPayload(payload: DuplicateWordPayload): Promise<void> {
    const now = Date.now();
    const finalRomaja = payload.romaja?.trim() || toRomaja(payload.korean);
    const word: Word = {
      id: newId(),
      korean: payload.korean.trim(),
      hanja: payload.hanja?.trim() || null,
      pinyin: payload.pinyin?.trim() || null,
      tones: payload.tones?.trim() || null,
      language: payload.language ?? learningLanguage,
      romaja: finalRomaja,
      translation: payload.translation.trim(),
      exampleSentence: payload.exampleSentence?.trim() || null,
      exampleTranslation: payload.exampleTranslation?.trim() || null,
      categoryId: payload.categoryId ?? null,
      sourceId: payload.sourceId ?? null,
      tags: payload.tags ?? [],
      difficulty: payload.difficulty ?? 'Начальный',
      createdAt: now,
      intervalDays: 0,
      easeFactor: 2.5,
      repetitions: 0,
      nextReviewAt: now,
      lastResult: null,
      totalReviews: 0,
      correctReviews: 0,
      masteredAt: null,
    };
    await repo.insertWord(word);
    if (word.categoryId) pushRecentCategoryIdFor(wordLanguage(word), word.categoryId);
  }

  async function processDuplicateQueue(): Promise<number> {
    let added = 0;
    while (duplicateQueue.length > 0) {
      const incoming = duplicateQueue[0];
      const existing = await checkDuplicate(incoming.korean);
      if (existing) {
        duplicatePending = { existing, incoming };
        emit();
        return added;
      }
      await insertWordFromPayload(incoming);
      duplicateQueue.shift();
      added += 1;
    }
    return added;
  }

  async function continueAfterDuplicate(action: DuplicateAction) {
    if (action === 'skip' || action === 'update' || action === 'keep_both') {
      if (duplicateQueue.length > 0) duplicateQueue.shift();
    }
    await processDuplicateQueue();
  }

  async function loadGamification() {
    progression = await repo.getProgression(learningLanguage);
    completedPackIds = new Set(progression.completedPackIds ?? []);
    const legacy = storedCompletedPackIds();
    if (legacy.size > 0 && completedPackIds.size === 0 && learningLanguage === 'ko') {
      completedPackIds = legacy;
      progression = { ...progression, completedPackIds: [...legacy] };
      await repo.putProgression(progression);
      try {
        localStorage.removeItem(COMPLETED_PACKS_KEY);
      } catch {
        // storage unavailable
      }
    }
    achievements = await repo.allAchievements();
  }

  function statsSnapshot(todayReviews: number, streak: number): GamificationStats {
    const profileWords = wordsForProfile();
    const totalReviews = profileWords.reduce((acc, w) => acc + w.totalReviews, 0);
    const correctReviews = profileWords.reduce((acc, w) => acc + w.correctReviews, 0);
    return {
      totalWords: profileWords.length,
      totalReviews,
      correctReviews,
      masteredWords: profileWords.filter((w) => !!w.masteredAt).length,
      todayReviews,
      streak,
    };
  }

  async function applyReviewGamification(rating: SrsRatingValue) {
    const todayReviews = await repo.todayReviewsCount(learningLanguage);
    const streak = await repo.streakCount(learningLanguage);
    const stats = statsSnapshot(todayReviews, streak);

    progression = { ...progression, xp: progression.xp + xpForReview(rating, streak) };

    const todayStr = localToday();
    if (progression.rewardedMissionDate !== todayStr) {
      const mission = todayMission(new Date());
      if (missionCompleted(mission, stats)) {
        progression = {
          ...progression,
          xp: progression.xp + mission.rewardXp,
          rewardedMissionDate: todayStr,
        };
      }
    }

    const earned = new Set(achievements.map((a) => a.id));
    const newOnes = newlyEarnedAchievements(earned, stats);
    if (newOnes.length > 0) {
      await repo.markAchievementsEarned(newOnes.map((a) => a.id), Date.now());
      achievements = await repo.allAchievements();
    }
    await repo.putProgression(progression);
  }

  async function evaluateDailyGamification() {
    const todayReviews = await repo.todayReviewsCount(learningLanguage);
    const streak = await repo.streakCount(learningLanguage);
    const stats = statsSnapshot(todayReviews, streak);

    const todayStr = localToday();
    const earned = new Set(achievements.map((a) => a.id));
    const newOnes = newlyEarnedAchievements(earned, stats);
    let changed = newOnes.length > 0;

    if (progression.rewardedMissionDate !== todayStr) {
      const mission = todayMission(new Date());
      if (missionCompleted(mission, stats)) {
        progression = {
          ...progression,
          xp: progression.xp + mission.rewardXp,
          rewardedMissionDate: todayStr,
        };
        changed = true;
      }
    }

    if (newOnes.length > 0) {
      await repo.markAchievementsEarned(newOnes.map((a) => a.id), Date.now());
      achievements = await repo.allAchievements();
    }
    if (changed) await repo.putProgression(progression);
  }

  return {
    // snapshot API for useSyncExternalStore
    subscribe(listener: () => void): () => void {
      listeners.add(listener);
      return () => listeners.delete(listener);
    },
    getSnapshot(): { v: number } {
      return snapshot;
    },

    async init() {
      migrateProfileSettings();
      await repo.initialize();
      learningLanguage = storedLearningLanguage();
      dailyWordGoal = storedDailyWordGoalFor(learningLanguage);
      selectedMissionPackId = storedSelectedMissionPackIdFor(learningLanguage);
      await refresh();
      await loadGamification();
      if (!storedOnboardingCompleted()) {
        isOnboardingOpen = true;
        onboardingSkipWelcome = false;
        emit();
      }
    },

    getTab: () => currentTab,
    getWords: () => wordsForProfile(),
    getCategories: () => categories,
    getSources: () => sources,
    getXp: () => progression.xp,
    getAchievements: () => achievements,
    getProgression: () => progression,
    sourceFor: (id: string | null) => {
      if (!id) return null;
      return sources.find((s) => s.id === id) ?? null;
    },
    getSearchQuery: () => searchQuery,
    getSelectedCategoryId: () => selectedCategoryId,
    isSelectionActive: () => selectionActive,
    getSelectedIds: () => selectedIds,
    getCardsQueue: () => cardsQueue,
    getCardIndex: () => currentCardIndex,
    getIsCardFlipped: () => isCardFlipped,
    getQuizQuestion: () => quizQuestion,
    getSelectedOptionIndex: () => selectedOptionIndex,
    getIsAnswerChecked: () => isAnswerChecked,
    getQuizScore: () => quizScore,
    getQuizTotalCount: () => quizTotalCount,
    getQuizReward: () => quizReward,
    getIsAddWordOpen: () => isAddWordOpen,
    getIsScanOcrOpen: () => isScanOcrOpen,
    getIsCreateCategoryOpen: () => isCreateCategoryOpen,
    getIsGuideOpen: () => isGuideOpen,
    getIsPacksOpen: () => isPacksOpen,
    getIsSongImportOpen: () => isSongImportOpen,
    getPacks: () => packsForProfile(),
    getSelectedMissionPackId: () => selectedMissionPackId,
    getActiveMissionPack: () => activeMissionPack(packsForProfile(), selectedMissionPackId),
    getSuggestedMissionPacks: () => suggestedMissionPacks(packsForProfile(), wordsForProfile()),
    getZhProfileHint: () => zhProfileHint,
    dismissZhProfileHint() {
      zhProfileHint = false;
      emit();
    },
    getSelectedWordForDetail: () => selectedWordForDetail,
    getEditingWord: () => editingWord,
    getPrefilledKorean: () => prefilledKorean,
    getPrefilledCategoryId: () => prefilledCategoryId,
    getGreetingId: () => currentGreetingId,
    getShowRomaja: () => showRomaja,
    getColorTheme: () => colorTheme,
    getCardVoice: () => voiceCharacter(cardVoiceId),
    getListenVoice: () => voiceCharacter(listenVoiceId),
    getLocale: () => readLocale(),
    getPhrases: () => phrases,
    getDailyWordGoal: () => dailyWordGoal,
    getLearningLanguage: () => learningLanguage,
    getIsOnboardingOpen: () => isOnboardingOpen,
    getOnboardingSkipWelcome: () => onboardingSkipWelcome,
    getIsTranslateOpen: () => isTranslateOpen,
    getTranslateInitialText: () => translateInitialText,
    getDuplicatePending: () => duplicatePending,
    getWriteInput: () => writeInput,
    getPrefilledTranslation: () => prefilledTranslation,
    getCompletedPackIds: () => completedPackIds,
    setLocale(locale: Locale) {
      applyLocale(locale);
      emit();
    },
    setDailyWordGoal(value: number) {
      dailyWordGoal = Math.max(1, Math.floor(value));
      saveDailyWordGoalFor(learningLanguage, dailyWordGoal);
      emit();
    },
    async setLearningLanguage(lang: LearningLanguage) {
      if (lang === learningLanguage) return;

      saveDailyWordGoalFor(learningLanguage, dailyWordGoal);
      saveSelectedMissionPackIdFor(learningLanguage, selectedMissionPackId || null);
      progression = {
        ...progression,
        completedPackIds: [...completedPackIds],
      };
      await repo.putProgression(progression);

      learningLanguage = lang;
      saveLearningLanguage(lang);
      dailyWordGoal = storedDailyWordGoalFor(lang);
      selectedMissionPackId = storedSelectedMissionPackIdFor(lang);
      progression = await repo.getProgression(lang);
      completedPackIds = new Set(progression.completedPackIds ?? []);

      cardsQueue = cardsQueue.filter((w) => wordLanguage(w) === lang);
      if (currentCardIndex >= cardsQueue.length) currentCardIndex = 0;
      quizWordPool = null;
      quizQuestion = null;
      selectedCategoryId = null;
      searchQuery = '';

      zhProfileHint = lang === 'zh' && wordsForProfile().length === 0;
      emit();
    },

    get isReady(): boolean {
      return snapshot.v > 0;
    },

    canGoBack: () => tabStack.length > 0,

    goBack() {
      if (tabStack.length > 0) {
        currentTab = tabStack.pop()!;
      } else {
        currentTab = 'home';
      }
      emit();
    },

    async selectTab(tab: Tab, options?: { fromTabBar?: boolean }) {
      if (tab !== 'listening' && currentTab === 'listening') {
        quizReward = { consecutiveCorrect: 0, rewardGifName: null };
      }
      if (options?.fromTabBar) {
        tabStack = [];
      } else if (tab !== currentTab) {
        tabStack.push(currentTab);
      }
      currentTab = tab;
      emit();
      if (tab === 'cards' && cardsQueue.length === 0) {
        await this.startDueReview();
      } else if (tab === 'listening' && (quizQuestion === null || quizQuestion.kind !== 'listen')) {
        await this.loadNextQuizQuestion('listen');
      } else if (tab === 'quiz' && quizWordPool === null && (quizQuestion === null || quizQuestion.kind !== 'reverse')) {
        quizSource = 'global';
        quizCategoryId = null;
        await this.loadNextQuizQuestion('reverse');
      }
    },

    async startDueReview() {
      const now = Date.now();
      cardsQueue = wordsForProfile()
        .filter((w) => w.nextReviewAt <= now)
        .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startReviewAll() {
      cardsQueue = [...wordsForProfile()].sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startDifficultReview() {
      cardsQueue = this.difficultWords().sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startCategoryReview(categoryId: string, mode: 'due' | 'all' = 'due') {
      const now = Date.now();
      let pool = wordsForProfile().filter((w) => w.categoryId === categoryId);
      if (mode === 'due') pool = pool.filter((w) => w.nextReviewAt <= now);
      cardsQueue = pool.sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startFilteredReview(wordIds: string[], mode: 'due' | 'all' = 'due') {
      const idSet = new Set(wordIds);
      const now = Date.now();
      let pool = wordsForProfile().filter((w) => idSet.has(w.id));
      if (mode === 'due') pool = pool.filter((w) => w.nextReviewAt <= now);
      cardsQueue = pool.sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startCategoryQuiz(categoryId: string, kind: 'listen' | 'reverse' | 'write' = 'reverse') {
      quizWordPool = wordsForProfile().filter((w) => w.categoryId === categoryId);
      quizSource = 'category';
      quizCategoryId = categoryId;
      currentTab = 'quiz';
      await this.loadNextQuizQuestion(kind);
    },

    async startFilteredQuiz(wordIds: string[], kind: 'listen' | 'reverse' | 'write' = 'reverse') {
      const idSet = new Set(wordIds);
      quizWordPool = wordsForProfile().filter((w) => idSet.has(w.id));
      quizSource = 'filtered';
      quizCategoryId = null;
      currentTab = 'quiz';
      await this.loadNextQuizQuestion(kind);
    },

    flipCard() {
      isCardFlipped = !isCardFlipped;
      emit();
    },

    async rateCard(rating: SrsRatingValue) {
      if (currentCardIndex >= cardsQueue.length) return;
      const word = cardsQueue[currentCardIndex];
      await repo.recordReview(word, rating);
      currentCardIndex += 1;
      isCardFlipped = false;
      await refresh();
      await applyReviewGamification(rating);
      emit();
      this.speakCurrentCard();
    },

    speakCurrentCard() {
      if (currentCardIndex < cardsQueue.length) {
        const word = cardsQueue[currentCardIndex];
        const lang = word.language === 'zh' ? 'zh-CN' : 'ko-KR';
        speak(word.korean, voiceCharacter(cardVoiceId), lang);
      }
    },

    speakText(korean: string, language?: LearningLanguage) {
      const lang = (language ?? learningLanguage) === 'zh' ? 'zh-CN' : 'ko-KR';
      speak(korean, voiceCharacter(cardVoiceId), lang);
    },

    async loadNextQuizQuestion(kind: 'listen' | 'reverse' | 'write') {
      const words = quizWordPool ?? wordsForProfile();
      if (kind === 'write') {
        if (words.length < 1) {
          quizQuestion = null;
          emit();
          return;
        }
        const target = words[Math.floor(Math.random() * words.length)];
        const answer = target.korean;
        quizQuestion = {
          kind: 'write',
          targetWordId: target.id,
          prompt: target.translation,
          options: [],
          correctOptionIndex: 0,
          expectedAnswer: answer,
          source: quizSource,
          categoryId: quizCategoryId,
        };
        writeInput = '';
        selectedOptionIndex = null;
        isAnswerChecked = false;
        emit();
        return;
      }

      if (words.length < 2) {
        quizQuestion = null;
        emit();
        return;
      }
      const target = words[Math.floor(Math.random() * words.length)];
      const displayText = (w: Word) => w.korean;
      const keyOf = (w: Word) => (kind === 'listen' ? w.translation : displayText(w));
      const targetKey = keyOf(target);

      const used = new Set([targetKey]);
      const distractors: Word[] = [];
      const pool = [...words].sort(() => Math.random() - 0.5);
      for (const w of pool) {
        if (w.id === target.id) continue;
        if (used.has(keyOf(w))) continue;
        used.add(keyOf(w));
        distractors.push(w);
        if (distractors.length === 3) break;
      }

      let options: QuizOption[];
      let prompt: string;
      let promptRomaja: string | undefined;

      if (kind === 'listen') {
        options = [{ text: target.translation }];
        distractors.forEach((d) => options.push({ text: d.translation }));
        options.sort(() => Math.random() - 0.5);
        prompt = displayText(target);
        promptRomaja = target.language === 'zh' ? target.pinyin ?? undefined : target.romaja;
      } else {
        options = [{ text: displayText(target), romaja: target.romaja }];
        distractors.forEach((d) =>
          options.push({ text: displayText(d), romaja: d.language === 'zh' ? d.pinyin ?? undefined : d.romaja })
        );
        options.sort(() => Math.random() - 0.5);
        prompt = target.translation;
        promptRomaja = undefined;
      }

      const correctIdx = options.findIndex((o) => o.text === targetKey);

      quizQuestion = {
        kind,
        targetWordId: target.id,
        prompt,
        promptRomaja,
        options,
        correctOptionIndex: correctIdx < 0 ? 0 : correctIdx,
      };
      selectedOptionIndex = null;
      isAnswerChecked = false;
      quizReward = { rewardGifName: null, consecutiveCorrect: quizReward.consecutiveCorrect };
      emit();
      if (kind === 'listen') speak(displayText(target), voiceCharacter(listenVoiceId));
    },

    setWriteInput(value: string) {
      writeInput = value;
      emit();
    },

    async checkWriteAnswer() {
      const q = quizQuestion;
      if (!q || q.kind !== 'write' || !q.expectedAnswer) return;
      isAnswerChecked = true;
      quizTotalCount += 1;
      const normalized = (s: string) => s.trim().normalize('NFC').replace(/\s+/g, '');
      const isCorrect = normalized(writeInput) === normalized(q.expectedAnswer);
      if (isCorrect) {
        quizScore += 1;
        progression = { ...progression, xp: progression.xp + XP_WRITE_MODE_CORRECT };
        await repo.putProgression(progression);
        const word = allWords.find((w) => w.id === q.targetWordId);
        if (word) await repo.recordReview(word, 2);
        await refresh();
      }
      emit();
    },

    selectQuizOption(index: number) {
      if (isAnswerChecked) return;
      selectedOptionIndex = index;
      emit();
    },

    checkQuizAnswer() {
      const q = quizQuestion;
      if (!q || selectedOptionIndex === null) return;
      isAnswerChecked = true;
      quizTotalCount += 1;
      const isCorrect = selectedOptionIndex === q.correctOptionIndex;
      if (isCorrect) quizScore += 1;
      const next = { ...quizReward };
      if (isCorrect) {
        next.consecutiveCorrect += 1;
        const threshold = storedRewardThreshold();
        if (next.consecutiveCorrect >= threshold && next.consecutiveCorrect % threshold === 0) {
          next.rewardGifName = randomGifName();
        } else {
          next.rewardGifName = null;
        }
      } else {
        next.consecutiveCorrect = 0;
        next.rewardGifName = null;
      }
      quizReward = next;
      emit();
    },

    dismissQuizReward() {
      quizReward = { ...quizReward, rewardGifName: null };
      emit();
    },

    replayQuizAudio() {
      if (quizQuestion?.kind === 'listen') speak(quizQuestion.prompt, voiceCharacter(listenVoiceId));
    },

    openAddWord(korean = '', categoryId: string | null = null) {
      prefilledKorean = korean;
      prefilledCategoryId = categoryId;
      editingWord = null;
      isAddWordOpen = true;
      emit();
    },

    openEditWord(word: Word) {
      editingWord = word;
      isAddWordOpen = true;
      emit();
    },

    closeAddWord() {
      isAddWordOpen = false;
      editingWord = null;
      prefilledKorean = '';
      prefilledTranslation = '';
      emit();
    },

    openScanOcr() {
      isScanOcrOpen = true;
      emit();
    },

    closeScanOcr() {
      isScanOcrOpen = false;
      emit();
    },

    openSongImport() {
      isSongImportOpen = true;
      emit();
    },

    closeSongImport() {
      isSongImportOpen = false;
      emit();
    },

    openSettings() {
      isScanOcrOpen = false;
      isSongImportOpen = false;
      isPacksOpen = false;
      currentTab = 'settings';
      emit();
    },

    openCreateCategory() {
      isCreateCategoryOpen = true;
      emit();
    },

    closeCreateCategory() {
      isCreateCategoryOpen = false;
      emit();
    },

    openGuide() {
      isGuideOpen = true;
      emit();
    },

    closeGuide() {
      isGuideOpen = false;
      emit();
    },

    openOnboarding(skipWelcome = false) {
      isOnboardingOpen = true;
      onboardingSkipWelcome = skipWelcome;
      emit();
    },

    closeOnboarding() {
      isOnboardingOpen = false;
      emit();
    },

    openTranslate(text = '') {
      translateInitialText = text;
      isTranslateOpen = true;
      emit();
    },

    closeTranslate() {
      isTranslateOpen = false;
      translateInitialText = '';
      emit();
    },

    openAddWordFromTranslate(korean: string, translation: string) {
      prefilledKorean = korean;
      prefilledTranslation = translation;
      isAddWordOpen = true;
      emit();
    },

    openPacks() {
      isPacksOpen = true;
      emit();
    },

    closePacks() {
      isPacksOpen = false;
      emit();
    },

    openMissionPick() {
      isMissionPickOpen = true;
      emit();
    },

    closeMissionPick() {
      isMissionPickOpen = false;
      emit();
    },

    getIsMissionPickOpen: () => isMissionPickOpen,

    selectMissionPack(packId: string | null, options?: { promptStart?: boolean }) {
      selectedMissionPackId = packId?.trim() ?? '';
      saveSelectedMissionPackIdFor(learningLanguage, packId);
      isMissionPickOpen = false;
      if (packId?.trim() && options?.promptStart !== false) {
        pendingMissionStartPackId = packId.trim();
        isMissionStartOpen = true;
      } else {
        pendingMissionStartPackId = null;
        isMissionStartOpen = false;
      }
      emit();
    },

    getPendingMissionStartPackId: () => pendingMissionStartPackId,
    getIsMissionStartOpen: () => isMissionStartOpen,

    dismissMissionStart() {
      isMissionStartOpen = false;
      pendingMissionStartPackId = null;
      emit();
    },

    openMissionStart(packId?: string) {
      const id = (packId ?? selectedMissionPackId)?.trim();
      if (!id) return;
      pendingMissionStartPackId = id;
      isMissionStartOpen = true;
      emit();
    },

    async beginMissionTraining(packId: string) {
      const pack = packs.find((p) => p.id === packId);
      if (!pack) return;

      isMissionStartOpen = false;
      pendingMissionStartPackId = null;

      const packKoreans = new Set(pack.wordDefs.map((d) => d.korean));
      let pool = wordsForProfile().filter((w) => packKoreans.has(w.korean));

      if (pool.length < pack.wordDefs.length) {
        await this.addPack(packId);
        await refresh();
        if (duplicatePending) {
          emit();
          return;
        }
        pool = wordsForProfile().filter((w) => packKoreans.has(w.korean));
      }

      if (pool.length === 0) {
        emit();
        return;
      }

      const category =
        categories.find((c) => c.name === pack.title) ??
        (await repo.findCategoryByName(pack.title));

      const now = Date.now();
      const categoryPool = category
        ? wordsForProfile().filter((w) => w.categoryId === category.id)
        : pool;

      const trainPool = categoryPool.length > 0 ? categoryPool : pool;
      const hasDue = trainPool.some((w) => w.nextReviewAt <= now);

      if (category && hasDue) {
        await this.startCategoryReview(category.id, 'due');
      } else if (category && trainPool.length > 0) {
        await this.startCategoryReview(category.id, 'all');
      } else {
        await this.startFilteredReview(
          trainPool.map((w) => w.id),
          hasDue ? 'due' : 'all'
        );
      }
    },

    async addPack(packId: string) {
      const pack = packs.find((p) => p.id === packId);
      if (!pack) return;
      const category = await repo.findOrCreateCategory(pack.title, pack.emoji, pack.colorHex);
      const packLang = pack.language ?? 'ko';
      const payloads: DuplicateWordPayload[] = pack.wordDefs.map((def) => {
        const reading =
          packLang === 'zh'
            ? def.pinyin
              ? { pinyin: def.pinyin, tones: hanziToReading(def.korean).tones }
              : hanziToReading(def.korean)
            : { pinyin: null as string | null, tones: null as string | null };
        return {
          korean: def.korean,
          translation: def.translation,
          hanja: def.hanja ?? null,
          pinyin: reading.pinyin,
          tones: reading.tones,
          romaja: packLang === 'zh' ? (reading.pinyin ?? '') : undefined,
          exampleSentence: def.exampleSentence ?? null,
          exampleTranslation: def.exampleTranslation ?? null,
          categoryId: category.id,
          sourceId: pack.sourceId,
          tags: def.tags ?? [],
          difficulty: def.difficulty ?? pack.difficulty,
          language: packLang,
        };
      });
      await this.enqueueWordsForImport(payloads);
      await this.checkPackCompletion(packId);
      if (!duplicatePending) await evaluateDailyGamification();
      emit();
    },

    async checkPackCompletion(packId: string) {
      const pack = packs.find((p) => p.id === packId);
      if (!pack || completedPackIds.has(packId)) return;
      const profileWords = wordsForProfile();
      const koreanSet = new Set(profileWords.map((w) => w.korean));
      if (packFullyImported(pack, koreanSet) && packReviewed(pack, profileWords)) {
        completedPackIds = new Set(completedPackIds);
        completedPackIds.add(packId);
        progression = {
          ...progression,
          xp: progression.xp + XP_PACK_COMPLETED,
          completedPackIds: [...completedPackIds],
        };
        await repo.putProgression(progression);
      }
    },

    openWordDetail(word: Word) {
      selectedWordForDetail = word;
      emit();
    },

    closeWordDetail() {
      selectedWordForDetail = null;
      emit();
    },

    setSearchQuery(q: string) {
      searchQuery = q;
      emit();
    },

    setSelectedCategory(id: string | null) {
      selectedCategoryId = id;
      emit();
    },

    setGreeting(id: string) {
      currentGreetingId = id;
      saveGreetingId(storedThemeId(), id);
      emit();
    },

    setShowRomaja(value: boolean) {
      showRomaja = value;
      saveShowRomaja(value);
      emit();
    },

    setColorTheme(theme: ColorTheme) {
      colorTheme = theme;
      saveColorTheme(theme);
      applyColorTheme(theme);
      emit();
    },

    setCardVoice(id: string) {
      cardVoiceId = id;
      saveCardVoice(id);
      emit();
    },

    setListenVoice(id: string) {
      listenVoiceId = id;
      saveListenVoice(id);
      emit();
    },

    selectTheme(id: string) {
      saveThemeId(id);
      currentGreetingId = randomGreeting().id;
      emit();
    },

    async saveWord(params: {
      korean: string;
      hanja: string;
      pinyin?: string;
      tones?: string;
      romaja: string;
      translation: string;
      exampleSentence: string;
      exampleTranslation: string;
      categoryId: string | null;
      sourceId: string | null;
      difficulty: Difficulty;
    }) {
      const finalRomaja = params.romaja.trim() || toRomaja(params.korean);
      const sourceId = params.sourceId?.trim() ? params.sourceId.trim() : null;

      if (editingWord) {
        const w = editingWord;
        const updated: Word = {
          ...w,
          korean: params.korean.trim(),
          hanja: params.hanja.trim() || null,
          pinyin: params.pinyin?.trim() || null,
          tones: params.tones?.trim() || null,
          romaja: finalRomaja,
          translation: params.translation.trim(),
          exampleSentence: params.exampleSentence.trim() || null,
          exampleTranslation: params.exampleTranslation.trim() || null,
          categoryId: params.categoryId,
          sourceId,
          difficulty: params.difficulty,
        };
        await repo.updateWord(updated);
        cardsQueue = cardsQueue.map((w) => (w.id === updated.id ? updated : w));
        if (params.categoryId) pushRecentCategoryIdFor(learningLanguage, params.categoryId);
        isAddWordOpen = false;
        editingWord = null;
        prefilledKorean = '';
        prefilledTranslation = '';
        await refresh();
        await evaluateDailyGamification();
        emit();
        return;
      }

      const payload: DuplicateWordPayload = {
        korean: params.korean.trim(),
        hanja: params.hanja.trim() || null,
        pinyin: params.pinyin?.trim() || null,
        tones: params.tones?.trim() || null,
        romaja: finalRomaja,
        translation: params.translation.trim(),
        exampleSentence: params.exampleSentence.trim() || null,
        exampleTranslation: params.exampleTranslation.trim() || null,
        categoryId: params.categoryId,
        sourceId,
        difficulty: params.difficulty,
        language: learningLanguage,
      };

      const existing = await checkDuplicate(payload.korean);
      if (existing) {
        duplicatePending = { existing, incoming: payload };
        emit();
        return;
      }

      await insertWordFromPayload(payload);
      isAddWordOpen = false;
      editingWord = null;
      prefilledKorean = '';
      prefilledTranslation = '';
      await refresh();
      await evaluateDailyGamification();
      emit();
    },

    async resolveDuplicate(action: DuplicateAction) {
      const pending = duplicatePending;
      if (!pending) return;
      duplicatePending = null;

      if (action === 'abort') {
        duplicateQueue = [];
        duplicateResolveCallback = null;
        emit();
        return;
      }

      if (action === 'update') {
        const updated: Word = {
          ...pending.existing,
          translation: pending.incoming.translation,
          hanja: pending.incoming.hanja ?? pending.existing.hanja,
          romaja: pending.incoming.romaja ?? pending.existing.romaja,
          exampleSentence: pending.incoming.exampleSentence ?? pending.existing.exampleSentence,
          exampleTranslation: pending.incoming.exampleTranslation ?? pending.existing.exampleTranslation,
          categoryId: pending.incoming.categoryId ?? pending.existing.categoryId,
          sourceId: pending.incoming.sourceId ?? pending.existing.sourceId,
        };
        await repo.updateWord(updated);
      } else if (action === 'keep_both') {
        await insertWordFromPayload(pending.incoming);
      }

      await continueAfterDuplicate(action);

      if (duplicateQueue.length === 0 && !duplicatePending) {
        isAddWordOpen = false;
        isScanOcrOpen = false;
        isSongImportOpen = false;
        duplicateResolveCallback?.(1);
        duplicateResolveCallback = null;
      }
      await refresh();
      await evaluateDailyGamification();
      emit();
    },

    async enqueueWordsForImport(payloads: DuplicateWordPayload[]): Promise<number> {
      duplicateQueue = [...payloads];
      const added = await processDuplicateQueue();
      if (!duplicatePending && duplicateQueue.length === 0) {
        await refresh();
        await evaluateDailyGamification();
      }
      return added;
    },

    async importWords(drafts: ImportedWordDraft[]) {
      const payloads: DuplicateWordPayload[] = [];
      for (const draft of drafts) {
        const korean = draft.korean.trim();
        const translation = draft.translation.trim();
        if (!korean || !translation) continue;
        const tags = draft.tags.map((t) => t.trim()).filter((t) => t.length > 0);
        const category = categories.find((c) =>
          tags.some((t) => t.toLowerCase() === c.name.toLowerCase())
        );
        payloads.push({
          korean,
          translation,
          categoryId: category?.id ?? selectedCategoryId,
          tags,
          difficulty: 'Начальный',
          language: learningLanguage,
        });
      }
      await this.enqueueWordsForImport(payloads);
      if (!duplicatePending) isScanOcrOpen = false;
      emit();
    },

    async importSongWords(drafts: ImportedWordDraft[], soundName: string): Promise<number> {
      const trimmed = soundName.trim();
      if (!trimmed) return 0;

      const category = await repo.findOrCreateCategory(trimmed);
      const source = await repo.findOrCreateSongSource(trimmed);
      const payloads: DuplicateWordPayload[] = drafts
        .filter((d) => d.korean.trim() && d.translation.trim())
        .map((d) => ({
          korean: d.korean.trim(),
          translation: d.translation.trim(),
          categoryId: category.id,
          sourceId: source.id,
          tags: [...(d.tags ?? []), trimmed],
          difficulty: 'Начальный' as Difficulty,
          language: learningLanguage,
        }));

      const before = allWords.length;
      await this.enqueueWordsForImport(payloads);
      if (!duplicatePending) isSongImportOpen = false;
      await refresh();
      emit();
      return allWords.length - before;
    },

    async dailyActivity(days: number) {
      return repo.dailyActivityLastDays(days, learningLanguage);
    },

    async weeklyGrowth() {
      return repo.weeklyWordsGrowth(learningLanguage);
    },

    async deleteWord(word: Word) {
      if (selectedWordForDetail?.id === word.id) {
        selectedWordForDetail = null;
      }
      await repo.deleteWord(word.id);
      await refresh();
    },

    toggleSelectionMode() {
      selectionActive = !selectionActive;
      if (!selectionActive) selectedIds = new Set();
      emit();
    },

    toggleSelectWord(id: string) {
      if (selectedIds.has(id)) {
        selectedIds = new Set(selectedIds);
        selectedIds.delete(id);
      } else {
        selectedIds = new Set(selectedIds);
        selectedIds.add(id);
      }
      emit();
    },

    clearSelection() {
      selectionActive = false;
      selectedIds = new Set();
      emit();
    },

    async assignTagsToSelected(tags: string[]) {
      const clean = Array.from(new Set(tags.map((t) => t.trim()).filter(Boolean)));
      if (selectedIds.size === 0) return;
      for (const w of allWords) {
        if (!selectedIds.has(w.id)) continue;
        const merged = Array.from(new Set([...w.tags, ...clean]));
        const changed =
          merged.length !== w.tags.length || merged.some((t, i) => t !== w.tags[i]);
        if (changed) {
          await repo.updateWord({ ...w, tags: merged });
        }
      }
      this.clearSelection();
      await refresh();
    },

    async deleteSelection() {
      const ids = new Set(selectedIds);
      for (const w of allWords) {
        if (ids.has(w.id)) {
          if (selectedWordForDetail?.id === w.id) {
            selectedWordForDetail = null;
          }
          await repo.deleteWord(w.id);
        }
      }
      this.clearSelection();
      await refresh();
    },

    async createCategory(name: string, emoji: string, colorHex: string) {
      await repo.insertCategory({
        id: newId(),
        name: name.trim(),
        colorHex: colorHex.trim(),
        emoji: emoji.trim(),
        createdAt: Date.now(),
        isDefault: false,
      });
      isCreateCategoryOpen = false;
      await refresh();
    },

    // computed
    dueWords(): Word[] {
      return wordsForProfile()
        .filter((w) => w.nextReviewAt <= Date.now())
        .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
    },

    difficultWords(): Word[] {
      return wordsForProfile().filter(
        (w) =>
          w.lastResult === 'AGAIN' ||
          w.lastResult === 'HARD' ||
          (w.totalReviews > 0 && w.easeFactor < 2.0)
      );
    },

    filteredWords(): Word[] {
      const query = searchQuery.trim().toLowerCase();
      return wordsForProfile().filter((w) => {
        const matchesCategory = selectedCategoryId === null || w.categoryId === selectedCategoryId;
        if (!matchesCategory) return false;
        if (!query) return true;
        return (
          w.korean.toLowerCase().includes(query) ||
          w.translation.toLowerCase().includes(query) ||
          w.romaja.toLowerCase().includes(query) ||
          (w.hanja?.toLowerCase().includes(query) ?? false) ||
          (w.pinyin?.toLowerCase().includes(query) ?? false) ||
          (w.tones?.toLowerCase().includes(query) ?? false)
        );
      });
    },

    totalWordsCount(): number {
      return wordsForProfile().length;
    },

    masteredWordsCount(): number {
      return wordsForProfile().filter((w) => !!w.masteredAt).length;
    },

    avgDaysToMaster(): number | null {
      const mastered = wordsForProfile().filter((w) => !!w.masteredAt);
      if (mastered.length === 0) return null;
      const totalDays = mastered.reduce(
        (acc, w) => acc + Math.max(0, (w.masteredAt! - w.createdAt) / (24 * 60 * 60 * 1000)),
        0
      );
      return Math.round(totalDays / mastered.length);
    },

    masteredByMonth(): { month: string; count: number }[] {
      const now = new Date();
      const months: { month: string; from: number; to: number; label: string }[] = [];
      for (let i = 11; i >= 0; i--) {
        const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
        const label = d.toLocaleString('ru-RU', { month: 'short' });
        const next = new Date(d.getFullYear(), d.getMonth() + 1, 1);
        months.push({ month: label, from: d.getTime(), to: next.getTime(), label });
      }
      return months.map((m) => ({
        month: m.label,
        count: wordsForProfile().filter(
          (w) => !!w.masteredAt && w.masteredAt! >= m.from && w.masteredAt! < m.to
        ).length,
      }));
    },

    masteredByCategory(): { categoryName: string; count: number }[] {
      const names = new Map<string, number>();
      for (const w of wordsForProfile()) {
        if (!w.masteredAt) continue;
        const name = w.categoryId ? this.categoryName(w.categoryId) : 'Без категории';
        names.set(name, (names.get(name) ?? 0) + 1);
      }
      return Array.from(names.entries()).map(([categoryName, count]) => ({ categoryName, count }));
    },

    async todayReviewsCount(): Promise<number> {
      return repo.todayReviewsCount(learningLanguage);
    },

    async streakCount(): Promise<number> {
      return repo.streakCount(learningLanguage);
    },

    accuracyPercent(): number {
      const profileWords = wordsForProfile();
      const total = profileWords.reduce((acc, w) => acc + w.totalReviews, 0);
      const correct = profileWords.reduce((acc, w) => acc + w.correctReviews, 0);
      return total > 0 ? Math.round((correct / total) * 100) : 100;
    },

    categoryName(id: string | null): string {
      if (!id) return '';
      return categories.find((c) => c.id === id)?.name ?? '';
    },

    categoryFor(id: string | null): Category | undefined {
      if (!id) return undefined;
      return categories.find((c) => c.id === id);
    },
  };
}

export const store = createStore();

export function useStore(): { v: number } {
  return useSyncExternalStore(store.subscribe, store.getSnapshot);
}