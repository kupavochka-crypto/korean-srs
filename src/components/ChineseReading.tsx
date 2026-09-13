import type { Word } from '../types';
import { showReadingEnabled, wordLanguage, zhReading } from '../domain/language';
import { store } from '../store/AppStore';

type Layout = 'flashcard' | 'inline' | 'detail';

interface Props {
  word: Word;
  layout?: Layout;
}

export default function ChineseReading({ word, layout = 'inline' }: Props) {
  if (wordLanguage(word) !== 'zh') return null;
  if (!showReadingEnabled(store.getShowRomaja(), 'zh')) return null;

  const { pinyin, tones } = zhReading(word);
  if (!pinyin && !tones) return null;

  if (layout === 'flashcard') {
    return (
      <div className="zh-reading zh-reading--flashcard">
        {pinyin ? <span className="fc-pinyin">{pinyin}</span> : null}
        {tones ? <span className="fc-tones">{tones}</span> : null}
      </div>
    );
  }

  if (layout === 'detail') {
    return (
      <div className="zh-reading zh-reading--detail">
        {pinyin ? <p className="zh-reading-pinyin">{pinyin}</p> : null}
        {tones ? <p className="zh-reading-tones">{tones}</p> : null}
      </div>
    );
  }

  return (
    <span className="zh-reading zh-reading--inline">
      {pinyin ? <span className="word-pinyin">{pinyin}</span> : null}
      {pinyin && tones ? <span className="zh-reading-sep"> · </span> : null}
      {tones ? <span className="word-tones">{tones}</span> : null}
    </span>
  );
}
