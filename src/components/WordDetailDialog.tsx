import { store, useStore } from '../store/AppStore';
import { colorFromHex } from '../theme/colors';

export default function WordDetailDialog() {
  useStore();
  const word = store.getSelectedWordForDetail();
  if (!word) return null;

  const category = store.categoryFor(word.categoryId);
  const status = word.repetitions >= 3 ? 'Выучено' : word.nextReviewAt <= Date.now() ? 'К повторению' : 'Изучается';

  return (
    <div className="overlay" onClick={() => store.closeWordDetail()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">Слово</h3>
          <button className="sheet-close" onClick={() => store.closeWordDetail()}>
            ✕
          </button>
        </div>

        <div className="word-meta" style={{ marginBottom: 16 }}>
          {category && (
            <span className="badge badge-cat" style={{ background: colorFromHex(category.colorHex) }}>
              {category.emoji} {category.name}
            </span>
          )}
          <span className="badge">Ур. {word.difficulty}</span>
          {word.tags.map((t) => (
            <span className="badge" key={t}>
              #{t}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
          <span style={{ fontSize: 34, fontWeight: 700, color: 'var(--charcoal)' }}>
            {word.korean}
          </span>
          {word.hanja && <span style={{ fontSize: 18, color: 'var(--text-secondary)' }}>{word.hanja}</span>}
          <button className="icon-btn" onClick={() => store.speakText(word.korean)}>
            🔊
          </button>
        </div>
        <p style={{ fontSize: 16, color: 'var(--text-secondary)', margin: 0 }}>
          {word.romaja}
        </p>

        <div className="card-flat mt16" style={{ padding: 16 }}>
          <p style={{ fontSize: 18, fontWeight: 600, margin: 0 }}>{word.translation}</p>
        </div>

        {word.exampleSentence && (
          <div className="card-flat mt12" style={{ padding: 16 }}>
            <p style={{ fontSize: 15, margin: 0 }}>{word.exampleSentence}</p>
            {word.exampleTranslation && (
              <p style={{ fontSize: 13, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
                {word.exampleTranslation}
              </p>
            )}
          </div>
        )}

        <div className="card-flat mt12" style={{ padding: 16, fontSize: 13, color: 'var(--text-secondary)' }}>
          <div>Статус: {status}</div>
          <div>Повторы: {word.repetitions}</div>
          <div>Интервал: {word.intervalDays} дн</div>
          <div>
            Следующее повторение:{' '}
            {new Date(word.nextReviewAt).toLocaleDateString('ru-RU')}
          </div>
        </div>

        <button className="primary-btn mt20" onClick={() => store.openEditWord(word)}>
          <span>Изменить</span>
        </button>
        <button
          className="danger-btn"
          onClick={() => {
            if (confirm('Удалить слово?')) {
              store.deleteWord(word);
            }
          }}
        >
          Удалить
        </button>
      </div>
    </div>
  );
}