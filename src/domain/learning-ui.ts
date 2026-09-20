import type { LearningLanguage } from '../types';
import type { SrsRatingName } from './srs-engine';

type Bilingual = { ko: string; zh: string };

const UI: Record<string, Bilingual> = {
  'app.brand': { ko: 'Woori · 우리', zh: 'Woori · 我们' },

  'tab.subtitle.home': { ko: '홈', zh: '首页' },
  'tab.subtitle.cards': { ko: '복습', zh: '复习' },
  'tab.subtitle.listening': { ko: '들어봐', zh: '听听' },
  'tab.subtitle.quiz': { ko: '써봐', zh: '写写' },
  'tab.subtitle.dictionary': { ko: '단어장', zh: '词典' },
  'tab.subtitle.gallery': { ko: '등급', zh: '等级' },
  'tab.subtitle.progress': { ko: '통계', zh: '统计' },
  'tab.subtitle.settings': { ko: '설정', zh: '设置' },
  'tab.subtitle.phrases': { ko: '표현', zh: '短语' },

  'btn.next': { ko: '다음', zh: '下一个' },
  'btn.check': { ko: '확인', zh: '确认' },
  'btn.go': { ko: '가자!', zh: '走吧!' },
  'btn.guideOk': { ko: '알겠어요', zh: '好的' },
  'btn.guideModes': { ko: '학습 모드', zh: '学习模式' },
  'btn.guideHow': { ko: '사용 설명', zh: '使用说明' },

  'cards.reviewAllNative': { ko: '모든 단어 복습', zh: '复习全部词语' },
  'cards.difficultNative': { ko: '어려운 단어', zh: '难词' },

  'home.quick.add': { ko: '단어 추가', zh: '添加词语' },
  'home.quick.scan': { ko: '텍스트 스캔 (OCR)', zh: '文字扫描' },
  'home.quick.song': { ko: '노래로 배우기', zh: '听歌学词' },
  'home.quick.difficult': { ko: '어려운 단어 복습', zh: '复习难词' },
  'home.quick.phrases': { ko: '표현', zh: '表达' },
  'home.quick.translate': { ko: '번역', zh: '翻译' },

  'srs.again': { ko: '다시', zh: '再来' },
  'srs.hard': { ko: '어려움', zh: '难' },
  'srs.good': { ko: '알맞음', zh: '合适' },
  'srs.easy': { ko: '쉬움', zh: '容易' },

  'voice.neutral': { ko: '기본', zh: '默认' },
  'voice.mentor': { ko: '다정', zh: '温柔' },
  'voice.energetic': { ko: '활기찬', zh: '活力' },
  'voice.soft': { ko: '부드러운', zh: '柔和' },
  'voice.deep': { ko: '낮은', zh: '低沉' },

  'source.song': { ko: '노래', zh: '歌曲' },
  'source.post': { ko: '게시글', zh: '帖子' },
  'source.variety': { ko: '예능', zh: '综艺' },
  'source.fanchant': { ko: '떼창', zh: '应援' },
  'source.textbook': { ko: '교재', zh: '教材' },
  'source.user': { ko: '직접', zh: '自制' },

  'progress.proverb': { ko: '티끌 모아 태산', zh: '积少成多' },

  'quiz.modeListenWord': { ko: '한글', zh: '汉字' },
};

export function tL(key: string, lang: LearningLanguage): string {
  const entry = UI[key];
  if (!entry) return key;
  return entry[lang];
}

export function tabSubtitle(tabId: string, lang: LearningLanguage): string {
  return tL(`tab.subtitle.${tabId}`, lang);
}

export function greetingNative(
  quote: { korean: string; chinese?: string },
  lang: LearningLanguage
): string {
  if (lang === 'zh') return quote.chinese ?? quote.korean;
  return quote.korean;
}

export function srsRatingNative(name: SrsRatingName, lang: LearningLanguage): string {
  const map = { AGAIN: 'srs.again', HARD: 'srs.hard', GOOD: 'srs.good', EASY: 'srs.easy' } as const;
  return tL(map[name], lang);
}

export function voiceNative(voiceId: string, lang: LearningLanguage): string {
  return tL(`voice.${voiceId}`, lang);
}

export function sourceTypeNative(type: string, lang: LearningLanguage): string {
  return tL(`source.${type}`, lang);
}
