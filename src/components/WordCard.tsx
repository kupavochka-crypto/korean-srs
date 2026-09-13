import type { Word } from '../types';
import { store } from '../store/AppStore';
import { displayReading, showReadingEnabled, wordLanguage } from '../domain/language';
import { formatSource } from '../domain/sources';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

function srsStatus(word: Word): { text: string; cls: string } {
  if (word.repetitions >= 3) {
    return { text: t('word.status.mastered'), cls: 'badge-mastered' };
  }
  if (word.nextReviewAt <= Date.now()) {
    return { text: t('word.status.due'), cls: 'badge-due' };
  }
  const days = Math.max(1, Math.round((word.nextReviewAt - Date.now()) / (24 * 60 * 60 * 1000)));
  return { text: t('word.status.in', { count: days }), cls: '' };
}

export default function WordCard({
  word,
  selectable = false,
  selected = false,
}: {
  word: Word;
  selectable?: boolean;
  selected?: boolean;
}) {
  const category = store.categoryFor(word.categoryId);
  const source = store.sourceFor(word.sourceId);
  const status = srsStatus(word);
  const difficultyLabel = word.difficulty;
  const isZh = wordLanguage(word) === 'zh';
  const reading = displayReading(word);

  return (
    <div
      className={`word-item card-flat ${selectable ? 'word-selectable' : ''} ${selected ? 'word-selected' : ''}`}
      onClick={() => (selectable ? store.toggleSelectWord(word.id) : store.openWordDetail(word))}
    >
      {selectable && (
        <span className={`word-check ${selected ? 'word-check-on' : ''}`}>
          {selected ? <WIcon name="check" size={14} /> : null}
        </span>
      )}
      <div className="word-item-head">
        <div className="word-item-main">
          <span className="word-korean">{word.korean}</span>
          {!isZh && word.hanja && <span className="word-hanja">{word.hanja}</span>}
          {showReadingEnabled(store.getShowRomaja(), wordLanguage(word)) && reading && (
            <span className={isZh ? 'word-pinyin' : 'word-romaja'}>{reading}</span>
          )}
        </div>
        <button
          className="icon-btn"
          onClick={(e) => {
            e.stopPropagation();
            store.speakText(word.korean);
          }}
        >
          <WIcon name="volume-up" />
        </button>
      </div>
      <div className="word-translation">{word.translation}</div>
      {word.exampleSentence && <div className="word-example">{word.exampleSentence}</div>}
      <div className="word-meta">
        {category && (
          <span
            className="badge badge-cat"
            style={{ background: colorFromHex(category.colorHex) }}
          >
            {category.emoji} {category.name}
          </span>
        )}
        <span className="badge">{t('word.level')} {difficultyLabel}</span>
        <span className={`badge ${status.cls}`}>{status.text}</span>
        {source?.type === 'song' && (
          <span className="badge badge-song">{t('word.songBadge', { name: source.title })}</span>
        )}
        {source && source.type !== 'song' && <span className="badge">{formatSource(source)}</span>}
        {word.tags.map((tag) => (
          <span className="badge" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}