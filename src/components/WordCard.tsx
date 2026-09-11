import type { Word } from '../types';
import { store } from '../store/AppStore';
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
          {word.hanja && <span className="word-hanja">{word.hanja}</span>}
          {store.getShowRomaja() && <span className="word-romaja">{word.romaja}</span>}
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
        {source && <span className="badge">{formatSource(source)}</span>}
        {word.tags.map((tag) => (
          <span className="badge" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}