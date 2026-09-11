import type { Word } from '../types';
import { store } from '../store/AppStore';
import { colorFromHex } from '../theme/colors';

function srsStatus(word: Word): { text: string; cls: string } {
  if (word.repetitions >= 3) {
    return { text: 'Выучено', cls: 'badge-mastered' };
  }
  if (word.nextReviewAt <= Date.now()) {
    return { text: 'Повторить', cls: 'badge-due' };
  }
  const days = Math.max(1, Math.round((word.nextReviewAt - Date.now()) / (24 * 60 * 60 * 1000)));
  return { text: `Через ${days} дн`, cls: '' };
}

export default function WordCard({ word }: { word: Word }) {
  const category = store.categoryFor(word.categoryId);
  const status = srsStatus(word);
  const difficultyLabel = word.difficulty;

  return (
    <div className="word-item card-flat" onClick={() => store.openWordDetail(word)}>
      <div className="word-item-head">
        <div className="word-item-main">
          <span className="word-korean">{word.korean}</span>
          {word.hanja && <span className="word-hanja">{word.hanja}</span>}
          <span className="word-romaja">{word.romaja}</span>
        </div>
        <button
          className="icon-btn"
          onClick={(e) => {
            e.stopPropagation();
            store.speakText(word.korean);
          }}
        >
          🔊
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
        <span className="badge">Ур. {difficultyLabel}</span>
        <span className={`badge ${status.cls}`}>{status.text}</span>
        {word.tags.map((tag) => (
          <span className="badge" key={tag}>
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
}