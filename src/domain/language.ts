import type { LearningLanguage, TranslateLang, Word } from '../types';
import { hanziToReading } from './pinyin';

export function wordLanguage(word: Word): LearningLanguage {
  return word.language ?? 'ko';
}

export function lemmaOf(word: Word): string {
  return word.korean;
}

export function zhReading(word: Word): { pinyin: string; tones: string } {
  const hanzi = word.korean.trim();
  if (!hanzi) return { pinyin: '', tones: '' };

  const storedPinyin = word.pinyin?.trim() ?? '';
  const storedTones = word.tones?.trim() ?? '';
  if (storedPinyin && storedTones) {
    return { pinyin: storedPinyin, tones: storedTones };
  }

  const computed = hanziToReading(hanzi);
  return {
    pinyin: storedPinyin || computed.pinyin,
    tones: storedTones || computed.tones,
  };
}

export function displayReading(word: Word): string {
  if (wordLanguage(word) === 'zh') {
    return zhReading(word).pinyin;
  }
  return word.romaja;
}

export function showReadingEnabled(showRomaja: boolean, lang: LearningLanguage): boolean {
  return showRomaja || lang === 'zh';
}

export function ttsLangFor(word: Word): string {
  return wordLanguage(word) === 'zh' ? 'zh-CN' : 'ko-KR';
}

export function ttsLang(language: LearningLanguage): string {
  return language === 'zh' ? 'zh-CN' : 'ko-KR';
}

/** @deprecated use displayReading */
export function displayScript(word: Word): string {
  return displayReading(word);
}

export function searchableFields(word: Word): string[] {
  const fields = [word.korean, word.translation, word.romaja];
  if (word.hanja) fields.push(word.hanja);
  if (word.pinyin) fields.push(word.pinyin);
  if (word.tones) fields.push(word.tones);
  return fields;
}

export function matchesWordSearch(word: Word, query: string): boolean {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return searchableFields(word).some((f) => f.toLowerCase().includes(q));
}

export function translatePair(language: LearningLanguage): { from: TranslateLang; to: TranslateLang } {
  return language === 'zh' ? { from: 'zh-CN', to: 'ru' } : { from: 'ko', to: 'ru' };
}

export function translateLangKey(lang: TranslateLang): 'translate.langKo' | 'translate.langRu' | 'translate.langZh' {
  if (lang === 'ko') return 'translate.langKo';
  if (lang === 'ru') return 'translate.langRu';
  return 'translate.langZh';
}

/** Native script label for in-panel translate hints */
export function translateLangNative(lang: TranslateLang): string {
  if (lang === 'ko') return '한국어';
  if (lang === 'ru') return 'Русский';
  return '中文';
}
