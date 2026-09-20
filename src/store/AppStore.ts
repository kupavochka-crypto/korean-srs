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
import {
  randomGreeting,
  randomGifName,
  randomPortraitVariant,
  activeTheme,
} from '../domain/themes';
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
import { mergeCategoryIds, wordCategoryIds, wordHasCategory } from '../domain/categories';
import {
  applyBackup,
  createBackupBlob,
  downloadBackup,
  parseBackupFile,
  type BackupSummary,
} from '../domain/backup';
import { syncContentCatalog } from '../domain/content-sync';
import {
  storedRewardThreshold,
  storedThemeId,
  saveThemeId,
  storedGreetingId,
  saveGreetingId,
  storedGreetingPortraitVariant,
  saveGreetingPortraitVariant,
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
  saveLastReviewCategoryIdFor,
  saveLastReviewCategoryWordCountFor,
  storedLastReviewCategoryIdFor,
  storedLastReviewCategoryWordCountFor,
  storedSelectedMissionPackIdFor,
  saveSelectedMissionPackIdFor,
  storedMissionWordCountFor,
  saveMissionWordCountFor,
  storedVisibleMissionIdsFor,
  saveVisibleMissionIdsFor,
  migrateProfileSettings,
  type ColorTheme,
} from '../domain/settings';
import {
  activeMissionPack,
  completedMissionPacks,
  suggestedMissionPacks,
} from '../domain/daily-challenge';
import {
  ensureVisibleMissionIds,
  missionCandidatePool,
  resolveVisibleMissions,
  rotateVisibleMissionIds,
} from '../domain/mission-slots';
import { pickPackWordDefs, type MissionWordCount } from '../domain/mission-word-count';
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

function resolveInitialGreetingPortraitVariant(): number {
  const themeId = storedThemeId();
  return storedGreetingPortraitVariant(themeId) ?? randomPortraitVariant();
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

export const TAB_DEFS: { id: Tab; title: string; icon: string }[] = [
  { id: 'home', title: 'Главная', icon: 'house' },
  { id: 'cards', title: 'Карточки', icon: 'stack' },
  { id: 'listening', title: 'Слушай', icon: 'headphones' },
  { id: 'quiz', title: 'Напиши', icon: 'patch-question' },
  { id: 'dictionary', title: 'Словарь', icon: 'book' },
  { id: 'gallery', title: 'Достижения', icon: 'images' },
  { id: 'progress', title: 'Прогресс', icon: 'bar-chart' },
  { id: 'settings', title: 'Настройки', icon: 'gear' },
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

let initPromise: Promise<void> | null = null;

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
  let isFileImportOpen = false;
  let isCategoryFormOpen = false;
  let editingCategory: Category | null = null;
  let isCategoryManageMode = false;
  let isGuideOpen = false;
  let isPacksOpen = false;
  let isSongImportOpen = false;
  let selectedWordForDetail: Word | null = null;
  let editingWord: Word | null = null;
  let prefilledKorean = '';
  let prefilledCategoryId: string | null = null;
  let currentGreetingId: string = resolveInitialGreetingId();
  let currentGreetingPortraitVariant: number = resolveInitialGreetingPortraitVariant();
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
  let cardsSource: 'global' | 'dictionary' = 'global';
  let cardsCategoryId: string | null = null;
  let cardsViewMode: 'practice' | 'stats' = 'practice';
  let writeInput = '';
  let completedPackIds = new Set<string>();
  let selectedMissionPackId = storedSelectedMissionPackIdFor(learningLanguage);
  let missionWordCount: MissionWordCount = storedMissionWordCountFor(learningLanguage);
  let visibleMissionPackIds: string[] = storedVisibleMissionIdsFor(learningLanguage);
  let isMissionPickOpen = false;
  let missionPickRefreshing = false;
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

  function missionPool() {
    return missionCandidatePool(packsForProfile(), wordsForProfile(), completedPackIds);
  }

  function clearCardsDictionarySession() {
    cardsSource = 'global';
    cardsCategoryId = null;
    cardsViewMode = 'practice';
  }

  function markDictionaryCardsSession(categoryId: string | null, wordCount?: number) {
    cardsSource = 'dictionary';
    cardsCategoryId = categoryId;
    cardsViewMode = 'practice';
    if (categoryId) {
      saveLastReviewCategoryIdFor(learningLanguage, categoryId);
      pushRecentCategoryIdFor(learningLanguage, categoryId);
      if (wordCount != null && wordCount > 0) {
        saveLastReviewCategoryWordCountFor(learningLanguage, wordCount);
      }
    }
  }

  function rememberCategorySession(categoryId: string, wordCount: number) {
    saveLastReviewCategoryIdFor(learningLanguage, categoryId);
    pushRecentCategoryIdFor(learningLanguage, categoryId);
    if (wordCount > 0) saveLastReviewCategoryWordCountFor(learningLanguage, wordCount);
  }

  function syncVisibleMissionSlots(): Pack[] {
    const profilePacks = packsForProfile();
    const pool = missionPool();
    visibleMissionPackIds = ensureVisibleMissionIds(pool, visibleMissionPackIds);
    saveVisibleMissionIdsFor(learningLanguage, visibleMissionPackIds);
    return resolveVisibleMissions(profilePacks, visibleMissionPackIds);
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
      categoryIds: payload.categoryIds ?? [],
      sourceId: payload.sourceId ?? null,
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
    for (const id of wordCategoryIds(word)) {
      pushRecentCategoryIdFor(wordLanguage(word), id);
    }
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
      if (initPromise) return initPromise;
      initPromise = (async () => {
        migrateProfileSettings();
        await repo.initialize();
        await syncContentCatalog();
        learningLanguage = storedLearningLanguage();
        dailyWordGoal = storedDailyWordGoalFor(learningLanguage);
        selectedMissionPackId = storedSelectedMissionPackIdFor(learningLanguage);
        missionWordCount = storedMissionWordCountFor(learningLanguage);
        visibleMissionPackIds = storedVisibleMissionIdsFor(learningLanguage);
        await refresh();
        syncVisibleMissionSlots();
        await loadGamification();
        if (!storedOnboardingCompleted()) {
          isOnboardingOpen = true;
          onboardingSkipWelcome = false;
          emit();
        }
      })();
      try {
        await initPromise;
      } catch (err) {
        initPromise = null;
        throw err;
      }
    },

    async syncContent() {
      const changed = await syncContentCatalog();
      if (changed) await refresh();
    },

    getTab: () => currentTab,
    getWords: () => wordsForProfile(),
    getCategories: () =>
      categories
        .filter((c) => (c.language ?? 'ko') === learningLanguage)
        .sort((a, b) => b.createdAt - a.createdAt),
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
    getCardsSessionFromDictionary: () => cardsSource === 'dictionary',
    getCardsViewMode: () => cardsViewMode,
    getCardsStatsCategoryId: () =>
      cardsCategoryId ?? storedLastReviewCategoryIdFor(learningLanguage),
    getLastReviewCategoryId: () => storedLastReviewCategoryIdFor(learningLanguage),
    getLastReviewCategoryWordCount: () => storedLastReviewCategoryWordCountFor(learningLanguage),
    getQuizQuestion: () => quizQuestion,
    getSelectedOptionIndex: () => selectedOptionIndex,
    getIsAnswerChecked: () => isAnswerChecked,
    getQuizScore: () => quizScore,
    getQuizTotalCount: () => quizTotalCount,
    getQuizReward: () => quizReward,
    getIsAddWordOpen: () => isAddWordOpen,
    getIsScanOcrOpen: () => isScanOcrOpen,
    getIsFileImportOpen: () => isFileImportOpen,
    getIsCategoryFormOpen: () => isCategoryFormOpen,
    getEditingCategory: () => editingCategory,
    isCategoryManageMode: () => isCategoryManageMode,
    getIsGuideOpen: () => isGuideOpen,
    getIsPacksOpen: () => isPacksOpen,
    getIsSongImportOpen: () => isSongImportOpen,
    getPacks: () => packsForProfile(),
    getSelectedMissionPackId: () => selectedMissionPackId,
    getMissionWordCount: () => missionWordCount,
    setMissionWordCount(count: MissionWordCount) {
      missionWordCount = count;
      saveMissionWordCountFor(learningLanguage, count);
      emit();
    },
    getActiveMissionPack: () => {
      const profilePacks = packsForProfile();
      const trimmed = selectedMissionPackId?.trim();
      if (trimmed) {
        const picked = profilePacks.find((p) => p.id === trimmed);
        if (picked) return picked;
      }
      const visible = resolveVisibleMissions(profilePacks, visibleMissionPackIds);
      return visible[0] ?? activeMissionPack(profilePacks, selectedMissionPackId);
    },
    getSuggestedMissionPacks: () => suggestedMissionPacks(packsForProfile(), wordsForProfile()),
    getVisibleMissionPacks: () => syncVisibleMissionSlots(),
    getCompletedMissionPacks: () =>
      completedMissionPacks(packsForProfile(), wordsForProfile(), completedPackIds),
    getMissionPickRefreshing: () => missionPickRefreshing,

    async refreshMissionCollection() {
      missionPickRefreshing = true;
      emit();
      try {
        await syncContentCatalog({ force: true, discoverStaged: true });
        await refresh();
        const pool = missionPool();
        visibleMissionPackIds = rotateVisibleMissionIds(pool, visibleMissionPackIds);
        saveVisibleMissionIdsFor(learningLanguage, visibleMissionPackIds);
        if (
          selectedMissionPackId &&
          !visibleMissionPackIds.includes(selectedMissionPackId)
        ) {
          selectedMissionPackId = visibleMissionPackIds[0] ?? '';
          saveSelectedMissionPackIdFor(learningLanguage, selectedMissionPackId || null);
        }
      } finally {
        missionPickRefreshing = false;
        emit();
      }
    },
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
    getGreetingPortraitVariant: () => currentGreetingPortraitVariant,
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
      saveMissionWordCountFor(learningLanguage, missionWordCount);
      saveVisibleMissionIdsFor(learningLanguage, visibleMissionPackIds);
      progression = {
        ...progression,
        completedPackIds: [...completedPackIds],
      };
      await repo.putProgression(progression);

      learningLanguage = lang;
      saveLearningLanguage(lang);
      dailyWordGoal = storedDailyWordGoalFor(lang);
      selectedMissionPackId = storedSelectedMissionPackIdFor(lang);
      missionWordCount = storedMissionWordCountFor(lang);
      visibleMissionPackIds = storedVisibleMissionIdsFor(lang);
      progression = await repo.getProgression(lang);
      completedPackIds = new Set(progression.completedPackIds ?? []);
      syncVisibleMissionSlots();

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
      clearCardsDictionarySession();
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
      clearCardsDictionarySession();
      cardsQueue = [...wordsForProfile()].sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startDifficultReview() {
      clearCardsDictionarySession();
      cardsQueue = this.difficultWords().sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startCategoryDifficultReview(categoryId: string) {
      cardsQueue = this.difficultWordsInCategory(categoryId).sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      cardsViewMode = 'practice';
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startCategoryReview(
      categoryId: string,
      mode: 'due' | 'all' = 'due',
      options?: { fromDictionary?: boolean }
    ) {
      const now = Date.now();
      let pool = wordsForProfile().filter((w) => wordHasCategory(w, categoryId));
      if (mode === 'due') pool = pool.filter((w) => w.nextReviewAt <= now);
      if (options?.fromDictionary) markDictionaryCardsSession(categoryId, pool.length);
      else clearCardsDictionarySession();
      rememberCategorySession(categoryId, pool.length);
      cardsQueue = pool.sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startFilteredReview(
      wordIds: string[],
      mode: 'due' | 'all' = 'due',
      options?: { fromDictionary?: boolean }
    ) {
      const idSet = new Set(wordIds);
      const now = Date.now();
      let pool = wordsForProfile().filter((w) => idSet.has(w.id));
      if (mode === 'due') pool = pool.filter((w) => w.nextReviewAt <= now);
      if (options?.fromDictionary) markDictionaryCardsSession(selectedCategoryId, pool.length);
      else clearCardsDictionarySession();
      if (selectedCategoryId) rememberCategorySession(selectedCategoryId, pool.length);
      cardsQueue = pool.sort(() => Math.random() - 0.5);
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    setCardsViewMode(mode: 'practice' | 'stats') {
      cardsViewMode = mode;
      emit();
    },

    async startCategoryQuiz(categoryId: string, kind: 'listen' | 'reverse' | 'write' = 'reverse') {
      saveLastReviewCategoryIdFor(learningLanguage, categoryId);
      pushRecentCategoryIdFor(learningLanguage, categoryId);
      quizWordPool = wordsForProfile().filter((w) => wordHasCategory(w, categoryId));
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
      await repo.recordPracticeEvent(word.id, 'srs', rating >= 2);
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
      await repo.recordPracticeEvent(q.targetWordId, 'quiz_write', isCorrect);
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
      const practiceMode =
        q.kind === 'listen' ? 'quiz_listen' : q.kind === 'reverse' ? 'quiz_reverse' : 'quiz_write';
      void repo.recordPracticeEvent(q.targetWordId, practiceMode, isCorrect);
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

    openFileImport() {
      isFileImportOpen = true;
      emit();
    },

    closeFileImport() {
      isFileImportOpen = false;
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
      isFileImportOpen = false;
      isSongImportOpen = false;
      isPacksOpen = false;
      currentTab = 'settings';
      emit();
    },

    openCreateCategory() {
      editingCategory = null;
      isCategoryFormOpen = true;
      emit();
    },

    openEditCategory(category: Category) {
      editingCategory = category;
      isCategoryFormOpen = true;
      emit();
    },

    closeCategoryForm() {
      isCategoryFormOpen = false;
      editingCategory = null;
      emit();
    },

    toggleCategoryManageMode() {
      isCategoryManageMode = !isCategoryManageMode;
      emit();
    },

    setCategoryManageMode(active: boolean) {
      isCategoryManageMode = active;
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
      syncVisibleMissionSlots();
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

      const sessionDefs = pickPackWordDefs(pack, missionWordCount);
      const packKoreans = new Set(sessionDefs.map((d) => d.korean));
      let pool = wordsForProfile().filter((w) => packKoreans.has(w.korean));

      if (pool.length < sessionDefs.length) {
        await this.addPack(packId, missionWordCount);
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

      const now = Date.now();
      const hasDue = pool.some((w) => w.nextReviewAt <= now);
      await this.startFilteredReview(
        pool.map((w) => w.id),
        hasDue ? 'due' : 'all'
      );
    },

    async addPack(packId: string, wordCount?: MissionWordCount) {
      const pack = packs.find((p) => p.id === packId);
      if (!pack) return;
      const packLang = pack.language ?? 'ko';
      const category = await repo.findOrCreateCategory(
        pack.title,
        pack.emoji,
        pack.colorHex,
        packLang
      );
      const defs = wordCount !== undefined ? pickPackWordDefs(pack, wordCount) : pack.wordDefs;
      const payloads: DuplicateWordPayload[] = [];
      for (const def of defs) {
        const reading =
          packLang === 'zh'
            ? def.pinyin
              ? { pinyin: def.pinyin, tones: hanziToReading(def.korean).tones }
              : hanziToReading(def.korean)
            : { pinyin: null as string | null, tones: null as string | null };
        const extraIds: string[] = [];
        for (const tagName of def.tags ?? []) {
          const extra = await repo.findOrCreateCategory(tagName, '📌', '#1E88E5', packLang);
          extraIds.push(extra.id);
        }
        payloads.push({
          korean: def.korean,
          translation: def.translation,
          hanja: def.hanja ?? null,
          pinyin: reading.pinyin,
          tones: reading.tones,
          romaja: packLang === 'zh' ? (reading.pinyin ?? '') : undefined,
          exampleSentence: def.exampleSentence ?? null,
          exampleTranslation: def.exampleTranslation ?? null,
          categoryIds: mergeCategoryIds([category.id], extraIds),
          sourceId: pack.sourceId,
          difficulty: def.difficulty ?? pack.difficulty,
          language: packLang,
        });
      }
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

    setGreeting(id: string, portraitVariant?: number) {
      currentGreetingId = id;
      currentGreetingPortraitVariant = portraitVariant ?? randomPortraitVariant();
      const themeId = storedThemeId();
      saveGreetingId(themeId, id);
      saveGreetingPortraitVariant(themeId, currentGreetingPortraitVariant);
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
      currentGreetingPortraitVariant = randomPortraitVariant();
      saveGreetingId(id, currentGreetingId);
      saveGreetingPortraitVariant(id, currentGreetingPortraitVariant);
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
      categoryIds: string[];
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
          categoryIds: params.categoryIds,
          sourceId,
          difficulty: params.difficulty,
        };
        await repo.updateWord(updated);
        cardsQueue = cardsQueue.map((w) => (w.id === updated.id ? updated : w));
        for (const id of params.categoryIds) {
          pushRecentCategoryIdFor(learningLanguage, id);
        }
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
        categoryIds: params.categoryIds,
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
          categoryIds: mergeCategoryIds(
            pending.existing.categoryIds,
            pending.incoming.categoryIds
          ),
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
        isFileImportOpen = false;
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
        let categoryIds = [...(draft.categoryIds ?? [])];
        if (selectedCategoryId && !categoryIds.includes(selectedCategoryId)) {
          categoryIds.push(selectedCategoryId);
        }
        payloads.push({
          korean,
          translation,
          categoryIds,
          difficulty: 'Начальный',
          language: learningLanguage,
        });
      }
      await this.enqueueWordsForImport(payloads);
      if (!duplicatePending) {
        isScanOcrOpen = false;
        isFileImportOpen = false;
      }
      emit();
    },

    async importSongWords(drafts: ImportedWordDraft[], soundName: string): Promise<number> {
      const trimmed = soundName.trim();
      if (!trimmed) return 0;

      const category = await repo.findOrCreateCategory(trimmed, '🎵', '#E53935', learningLanguage);
      const source = await repo.findOrCreateSongSource(trimmed);
      const payloads: DuplicateWordPayload[] = drafts
        .filter((d) => d.korean.trim() && d.translation.trim())
        .map((d) => ({
          korean: d.korean.trim(),
          translation: d.translation.trim(),
          categoryIds: mergeCategoryIds([category.id], d.categoryIds),
          sourceId: source.id,
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

    async wordBucketCounts() {
      return repo.wordBucketCounts(learningLanguage);
    },

    async activityIntensity(days: number) {
      return repo.activityIntensityLastDays(days, learningLanguage);
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

    async assignCategoriesToSelected(categoryIds: string[]) {
      const clean = Array.from(new Set(categoryIds.filter(Boolean)));
      if (selectedIds.size === 0 || clean.length === 0) return;
      for (const w of allWords) {
        if (!selectedIds.has(w.id)) continue;
        const merged = mergeCategoryIds(w.categoryIds, clean);
        const prev = wordCategoryIds(w);
        const changed =
          merged.length !== prev.length || merged.some((id, i) => id !== prev[i]);
        if (changed) {
          await repo.updateWord({ ...w, categoryIds: merged });
          for (const id of clean) {
            pushRecentCategoryIdFor(learningLanguage, id);
          }
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
        language: learningLanguage,
      });
      isCategoryFormOpen = false;
      editingCategory = null;
      await refresh();
    },

    async updateCategory(id: string, name: string, emoji: string, colorHex: string) {
      const existing = categories.find((c) => c.id === id);
      if (!existing) return;
      await repo.updateCategory({
        ...existing,
        name: name.trim(),
        colorHex: colorHex.trim(),
        emoji: emoji.trim(),
      });
      isCategoryFormOpen = false;
      editingCategory = null;
      await refresh();
    },

    async deleteCategory(id: string) {
      await repo.deleteCategory(id);
      if (selectedCategoryId === id) {
        selectedCategoryId = null;
      }
      if (storedLastReviewCategoryIdFor(learningLanguage) === id) {
        saveLastReviewCategoryIdFor(learningLanguage, null);
        saveLastReviewCategoryWordCountFor(learningLanguage, 0);
      }
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

    difficultWordsInCategory(categoryId: string): Word[] {
      return this.difficultWords().filter((w) => wordHasCategory(w, categoryId));
    },

    dueWordsInCategory(categoryId: string): Word[] {
      const now = Date.now();
      return wordsForProfile()
        .filter((w) => wordHasCategory(w, categoryId) && w.nextReviewAt <= now)
        .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
    },

    filteredWords(): Word[] {
      const query = searchQuery.trim().toLowerCase();
      return wordsForProfile().filter((w) => {
        const matchesCategory =
          selectedCategoryId === null || wordHasCategory(w, selectedCategoryId);
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
        const ids = wordCategoryIds(w);
        if (ids.length === 0) {
          names.set('Без категории', (names.get('Без категории') ?? 0) + 1);
          continue;
        }
        for (const id of ids) {
          const name = this.categoryName(id) || 'Без категории';
          names.set(name, (names.get(name) ?? 0) + 1);
        }
      }
      return Array.from(names.entries()).map(([categoryName, count]) => ({ categoryName, count }));
    },

    async todayReviewsCount(): Promise<number> {
      return repo.todayReviewsCount(learningLanguage);
    },

    async todayModeCounts(): Promise<repo.ModeDayCounts> {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      return repo.modeCountsForDate(`${y}-${m}-${d}`, learningLanguage);
    },

    async todayRatingCounts(): Promise<repo.CategoryRatingCounts> {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      return repo.ratingCountsForDate(`${y}-${m}-${d}`, learningLanguage);
    },

    async todayTrueRetentionRatingCounts(): Promise<repo.CategoryRatingCounts> {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      return repo.trueRetentionRatingCountsForDate(`${y}-${m}-${d}`, learningLanguage);
    },

    categoryWordIds(categoryId: string): Set<string> {
      return new Set(
        wordsForProfile()
          .filter((w) => wordHasCategory(w, categoryId))
          .map((w) => w.id)
      );
    },

    async categoryModeCountsToday(categoryId: string): Promise<repo.ModeDayCounts> {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      return repo.modeCountsForWordIds(
        `${y}-${m}-${d}`,
        this.categoryWordIds(categoryId),
        learningLanguage
      );
    },

    async categoryRatingCountsToday(categoryId: string): Promise<repo.CategoryRatingCounts> {
      const today = new Date();
      const y = today.getFullYear();
      const m = String(today.getMonth() + 1).padStart(2, '0');
      const d = String(today.getDate()).padStart(2, '0');
      return repo.categoryRatingCountsForWordIds(
        `${y}-${m}-${d}`,
        this.categoryWordIds(categoryId),
        learningLanguage
      );
    },

    async yesterdayModeCounts(): Promise<repo.ModeDayCounts> {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const y = yesterday.getFullYear();
      const m = String(yesterday.getMonth() + 1).padStart(2, '0');
      const d = String(yesterday.getDate()).padStart(2, '0');
      return repo.modeCountsForDate(`${y}-${m}-${d}`, learningLanguage);
    },

    async updateWordCategories(wordId: string, categoryIds: string[]) {
      const word = allWords.find((w) => w.id === wordId);
      if (!word) return;
      const clean = Array.from(new Set(categoryIds.filter(Boolean)));
      await repo.updateWord({ ...word, categoryIds: clean });
      for (const id of clean) {
        pushRecentCategoryIdFor(learningLanguage, id);
      }
      if (selectedWordForDetail?.id === wordId) {
        selectedWordForDetail = { ...word, categoryIds: clean };
      }
      await refresh();
      emit();
    },

    async ensureCategory(name: string, emoji = '📌', colorHex = '#E53935'): Promise<Category> {
      const cat = await repo.findOrCreateCategory(name.trim(), emoji, colorHex, learningLanguage);
      if (!categories.some((c) => c.id === cat.id)) {
        await refresh();
      }
      return cat;
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

    categoriesForWord(word: Word): Category[] {
      return wordCategoryIds(word)
        .map((id) => categories.find((c) => c.id === id))
        .filter((c): c is Category => !!c);
    },

    async exportBackup(): Promise<BackupSummary> {
      const { blob, summary } = await createBackupBlob();
      downloadBackup(blob);
      return summary;
    },

    async importBackup(file: File): Promise<void> {
      const parsed = await parseBackupFile(file);
      if (!parsed.ok) {
        throw new Error(parsed.reason);
      }
      if (!parsed.file) {
        throw new Error('invalid_backup');
      }
      await applyBackup(parsed.file);
      window.location.reload();
    },
  };
}

export const store = createStore();

export function useStore(): { v: number } {
  return useSyncExternalStore(store.subscribe, store.getSnapshot);
}