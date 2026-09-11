import { useSyncExternalStore } from 'react';
import * as repo from '../db/repository';
import type { Category, Difficulty, ImportedWordDraft, QuizQuestion, Word } from '../types';
import { toRomaja } from '../domain/romaja';
import { speak } from '../domain/tts';
import { randomGifName } from '../domain/bts';
import type { SrsRatingValue } from '../domain/srs-engine';
import { newId } from '../db/schema';
import { storedRewardThreshold } from '../domain/settings';

export type Tab = 'home' | 'cards' | 'listening' | 'dictionary' | 'progress' | 'settings';

export const TAB_DEFS: { id: Tab; title: string; korean: string; icon: string }[] = [
  { id: 'home', title: 'Главная', korean: '홈', icon: '🏠' },
  { id: 'cards', title: 'Карточки', korean: '복습', icon: '🗂️' },
  { id: 'listening', title: 'Аудирование', korean: '듣기', icon: '🎧' },
  { id: 'dictionary', title: 'Словарь', korean: '단어장', icon: '📖' },
  { id: 'progress', title: 'Прогресс', korean: '통계', icon: '📊' },
  { id: 'settings', title: 'Настройки', korean: '설정', icon: '⚙️' },
];

export interface QuizRewardState {
  consecutiveCorrect: number;
  rewardGifName: string | null;
}

function createStore() {
  let currentTab: Tab = 'home';
  let allWords: Word[] = [];
  let categories: Category[] = [];

  let searchQuery = '';
  let selectedCategoryId: string | null = null;

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
  let selectedWordForDetail: Word | null = null;
  let editingWord: Word | null = null;
  let prefilledKorean = '';
  let prefilledCategoryId: string | null = null;
  let currentGreetingId: string = 'rm';

  const listeners = new Set<() => void>();
  let snapshot = { v: 0 };

  function emit() {
    snapshot = { v: snapshot.v + 1 };
    listeners.forEach((l) => l());
  }

  async function refresh() {
    allWords = await repo.allWords();
    categories = await repo.allCategories();
    emit();
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
    },

    getTab: () => currentTab,
    getWords: () => allWords,
    getCategories: () => categories,
    getSearchQuery: () => searchQuery,
    getSelectedCategoryId: () => selectedCategoryId,
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
    getSelectedWordForDetail: () => selectedWordForDetail,
    getEditingWord: () => editingWord,
    getPrefilledKorean: () => prefilledKorean,
    getPrefilledCategoryId: () => prefilledCategoryId,
    getGreetingId: () => currentGreetingId,

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
      } else if (tab === 'listening' && quizQuestion === null) {
        await this.loadNextQuizQuestion();
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
      emit();
      await refresh();
      this.speakCurrentCard();
    },

    speakCurrentCard() {
      if (currentCardIndex < cardsQueue.length) {
        speak(cardsQueue[currentCardIndex].korean);
      }
    },

    speakText(korean: string) {
      speak(korean);
    },

    async loadNextQuizQuestion() {
      const words = allWords;
      if (words.length < 2) {
        quizQuestion = null;
        emit();
        return;
      }
      const target = words[Math.floor(Math.random() * words.length)];
      const distractors = await repo.randomWords(target.id, 3);
      const options = [...distractors.map((w) => w.translation), target.translation];
      options.sort(() => Math.random() - 0.5);
      const correctIdx = options.indexOf(target.translation);

      quizQuestion = {
        targetWordId: target.id,
        korean: target.korean,
        romaja: target.romaja,
        options,
        correctOptionIndex: correctIdx < 0 ? 0 : correctIdx,
      };
      selectedOptionIndex = null;
      isAnswerChecked = false;
      quizReward = { rewardGifName: null, consecutiveCorrect: quizReward.consecutiveCorrect };
      emit();
      speak(target.korean);
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
      if (quizQuestion) speak(quizQuestion.korean);
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
      difficulty: Difficulty;
    }) {
      const finalRomaja = params.romaja.trim() || toRomaja(params.korean);
      const now = Date.now();

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
          difficulty: params.difficulty,
        };
        await repo.updateWord(updated);
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
        };
        await repo.insertWord(word);
      }

      isAddWordOpen = false;
      editingWord = null;
      prefilledKorean = '';
      await refresh();
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
        };
        await repo.insertWord(word);
      }
      isScanOcrOpen = false;
      await refresh();
    },

    async deleteWord(word: Word) {
      if (selectedWordForDetail?.id === word.id) {
        selectedWordForDetail = null;
      }
      await repo.deleteWord(word.id);
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
      return allWords.filter((w) => w.repetitions >= 3).length;
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