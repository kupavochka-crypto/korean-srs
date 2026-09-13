import type { LearningLanguage, TranslateLang, Word } from '../types';

export function ttsLang(language: LearningLanguage): string {
  return language === 'zh' ? 'zh-CN' : 'ko-KR';
}

export function lemmaOf(word: Word): string {
  return word.korean;
}

export function displayScript(word: Word): string {
  if (word.language === 'zh' && word.pinyin) {
    return word.pinyin;
  }
  return word.romaja;
}

export function translatePair(language: LearningLanguage): { from: TranslateLang; to: TranslateLang } {
  return language === 'zh' ? { from: 'zh-CN', to: 'ru' } : { from: 'ko', to: 'ru' };
}

export function translateLangKey(lang: TranslateLang): 'translate.langKo' | 'translate.langRu' | 'translate.langZh' {
  if (lang === 'ko') return 'translate.langKo';
  if (lang === 'ru') return 'translate.langRu';
  return 'translate.langZh';
}
