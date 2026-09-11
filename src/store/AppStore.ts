import { useSyncExternalStore } from 'react';
import * as repo from '../db/repository';
import type { Category, Difficulty, ImportedWordDraft, Progression, Achievement, Pack, QuizOption, QuizQuestion, Source, Word } from '../types';
import { toRomaja } from '../domain/romaja';
import { speak } from '../domain/tts';
import { randomGreeting, randomGifName, activeTheme } from '../domain/themes';
import { xpForReview, todayMission, missionCompleted, newlyEarnedAchievements, type GamificationStats } from '../domain/gamification';
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
  type ColorTheme,
} from '../domain/settings';
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

export interface QuizRewardState {
  consecutiveCorrect: number;
  rewardGifName: string | null;
}

function createStore() {
  let currentTab: Tab = 'home';
  let allWords: Word[] = [];
  let categories: Category[] = [];
  let sources: Source[] = [];
  let packs: Pack[] = [];
  let progression: Progression = { id: 'main', xp: 0, rewardedMissionDate: null };
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
  let selectedWordForDetail: Word | null = null;
  let editingWord: Word | null = null;
  let prefilledKorean = '';
  let prefilledCategoryId: string | null = null;
  let currentGreetingId: string = resolveInitialGreetingId();
  let showRomaja: boolean = storedShowRomaja();
  let cardVoiceId: string = storedCardVoice();
  let listenVoiceId: string = storedListenVoice();
  let colorTheme: ColorTheme = storedColorTheme();

  const listeners = new Set<() => void>();
  let snapshot = { v: 0 };

  function emit() {
    snapshot = { v: snapshot.v + 1 };
    listeners.forEach((l) => l());
  }

  async function refresh() {
    allWords = await repo.allWords();
    categories = await repo.allCategories();
    sources = await repo.allSources();
    packs = await repo.allPacks();
    emit();
  }

  async function loadGamification() {
    progression = await repo.getProgression();
    achievements = await repo.allAchievements();
  }

  function statsSnapshot(todayReviews: number, streak: number): GamificationStats {
    const totalReviews = allWords.reduce((acc, w) => acc + w.totalReviews, 0);
    const correctReviews = allWords.reduce((acc, w) => acc + w.correctReviews, 0);
    return {
      totalWords: allWords.length,
      totalReviews,
      correctReviews,
      masteredWords: allWords.filter((w) => !!w.masteredAt).length,
      todayReviews,
      streak,
    };
  }

  async function applyReviewGamification(rating: SrsRatingValue) {
    const todayReviews = await repo.todayReviewsCount();
    const streak = await repo.streakCount();
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
    const todayReviews = await repo.todayReviewsCount();
    const streak = await repo.streakCount();
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
      await repo.initialize();
      await refresh();
      await loadGamification();
    },

    getTab: () => currentTab,
    getWords: () => allWords,
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
    getPacks: () => packs,
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
    setLocale(locale: Locale) {
      applyLocale(locale);
      emit();
    },

    get isReady(): boolean {
      return snapshot.v > 0;
    },

    async selectTab(tab: Tab) {
      if (tab !== 'listening' && currentTab === 'listening') {
        quizReward = { consecutiveCorrect: 0, rewardGifName: null };
      }
      currentTab = tab;
      emit();
      if (tab === 'cards' && cardsQueue.length === 0) {
        await this.startDueReview();
      } else if (tab === 'listening' && (quizQuestion === null || quizQuestion.kind !== 'listen')) {
        await this.loadNextQuizQuestion('listen');
      } else if (tab === 'quiz' && (quizQuestion === null || quizQuestion.kind !== 'reverse')) {
        await this.loadNextQuizQuestion('reverse');
      }
    },

    async startDueReview() {
      cardsQueue = await repo.dueWords();
      currentCardIndex = 0;
      isCardFlipped = false;
      currentTab = 'cards';
      emit();
      this.speakCurrentCard();
    },

    async startReviewAll() {
      cardsQueue = [...allWords].sort(() => Math.random() - 0.5);
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
        speak(cardsQueue[currentCardIndex].korean, voiceCharacter(cardVoiceId));
      }
    },

    speakText(korean: string) {
      speak(korean, voiceCharacter(cardVoiceId));
    },

    async loadNextQuizQuestion(kind: 'listen' | 'reverse') {
      const words = allWords;
      if (words.length < 2) {
        quizQuestion = null;
        emit();
        return;
      }
      const target = words[Math.floor(Math.random() * words.length)];
      const keyOf = (w: Word) => (kind === 'listen' ? w.translation : w.korean);
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
        prompt = target.korean;
        promptRomaja = target.romaja;
      } else {
        options = [{ text: target.korean, romaja: target.romaja }];
        distractors.forEach((d) => options.push({ text: d.korean, romaja: d.romaja }));
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
      if (kind === 'listen') speak(target.korean, voiceCharacter(listenVoiceId));
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

    openSettings() {
      isScanOcrOpen = false;
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

    openPacks() {
      isPacksOpen = true;
      emit();
    },

    closePacks() {
      isPacksOpen = false;
      emit();
    },

    async addPack(packId: string) {
      const pack = packs.find((p) => p.id === packId);
      if (!pack) return;
      await repo.addPackWords(pack);
      await refresh();
      await evaluateDailyGamification();
      emit();
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
      applyColorTheme();
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
      romaja: string;
      translation: string;
      exampleSentence: string;
      exampleTranslation: string;
      categoryId: string | null;
      sourceId: string | null;
      difficulty: Difficulty;
    }) {
      const finalRomaja = params.romaja.trim() || toRomaja(params.korean);
      const now = Date.now();
      const sourceId = params.sourceId?.trim() ? params.sourceId.trim() : null;

      if (editingWord) {
        const w = editingWord;
        const updated: Word = {
          ...w,
          korean: params.korean.trim(),
          hanja: params.hanja.trim() || null,
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
      } else {
        const word: Word = {
          id: newId(),
          korean: params.korean.trim(),
          hanja: params.hanja.trim() || null,
          romaja: finalRomaja,
          translation: params.translation.trim(),
          exampleSentence: params.exampleSentence.trim() || null,
          exampleTranslation: params.exampleTranslation.trim() || null,
          categoryId: params.categoryId,
          sourceId,
          tags: [],
          difficulty: params.difficulty,
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
      }

      isAddWordOpen = false;
      editingWord = null;
      prefilledKorean = '';
      await refresh();
      await evaluateDailyGamification();
      emit();
    },

    async importWords(drafts: ImportedWordDraft[]) {
      const now = Date.now();
      for (const draft of drafts) {
        const korean = draft.korean.trim();
        const translation = draft.translation.trim();
        if (!korean || !translation) continue;
        const tags = draft.tags.map((t) => t.trim()).filter((t) => t.length > 0);
        const category = categories.find((c) =>
          tags.some((t) => t.toLowerCase() === c.name.toLowerCase())
        );
        const word: Word = {
          id: newId(),
          korean,
          hanja: null,
          romaja: toRomaja(korean),
          translation,
          exampleSentence: null,
          exampleTranslation: null,
          categoryId: category?.id ?? null,
          sourceId: null,
          tags,
          difficulty: 'Начальный',
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
      }
      isScanOcrOpen = false;
      await refresh();
      await evaluateDailyGamification();
      emit();
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
      return allWords
        .filter((w) => w.nextReviewAt <= Date.now())
        .sort((a, b) => a.nextReviewAt - b.nextReviewAt);
    },

    difficultWords(): Word[] {
      return allWords.filter(
        (w) =>
          w.lastResult === 'AGAIN' ||
          w.lastResult === 'HARD' ||
          (w.totalReviews > 0 && w.easeFactor < 2.0)
      );
    },

    filteredWords(): Word[] {
      const query = searchQuery.trim().toLowerCase();
      return allWords.filter((w) => {
        const matchesCategory = selectedCategoryId === null || w.categoryId === selectedCategoryId;
        if (!matchesCategory) return false;
        if (!query) return true;
        return (
          w.korean.toLowerCase().includes(query) ||
          w.translation.toLowerCase().includes(query) ||
          w.romaja.toLowerCase().includes(query) ||
          (w.hanja?.toLowerCase().includes(query) ?? false)
        );
      });
    },

    totalWordsCount(): number {
      return allWords.length;
    },

    masteredWordsCount(): number {
      return allWords.filter((w) => !!w.masteredAt).length;
    },

    avgDaysToMaster(): number | null {
      const mastered = allWords.filter((w) => !!w.masteredAt);
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
        count: allWords.filter((w) => !!w.masteredAt && w.masteredAt! >= m.from && w.masteredAt! < m.to)
          .length,
      }));
    },

    masteredByCategory(): { categoryName: string; count: number }[] {
      const names = new Map<string, number>();
      for (const w of allWords) {
        if (!w.masteredAt) continue;
        const name = w.categoryId ? this.categoryName(w.categoryId) : 'Без категории';
        names.set(name, (names.get(name) ?? 0) + 1);
      }
      return Array.from(names.entries()).map(([categoryName, count]) => ({ categoryName, count }));
    },

    async todayReviewsCount(): Promise<number> {
      return repo.todayReviewsCount();
    },

    async streakCount(): Promise<number> {
      return repo.streakCount();
    },

    accuracyPercent(): number {
      const total = allWords.reduce((acc, w) => acc + w.totalReviews, 0);
      const correct = allWords.reduce((acc, w) => acc + w.correctReviews, 0);
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