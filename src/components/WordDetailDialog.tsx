import { store, useStore } from '../store/AppStore';
import { showReadingEnabled, wordLanguage } from '../domain/language';
import ChineseReading from './ChineseReading';
import { formatSource } from '../domain/sources';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function WordDetailDialog() {
  useStore();
  const word = store.getSelectedWordForDetail();
  if (!word) return null;

  const source = store.sourceFor(word.sourceId);
  const isZh = wordLanguage(word) === 'zh';
  const status = word.repetitions >= 3
    ? t('detail.mastered')
    : word.nextReviewAt <= Date.now()
    ? t('detail.toReview')
    : t('detail.inProgress');

  return (
    <div className="overlay" onClick={() => store.closeWordDetail()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('detail.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeWordDetail()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <div className="word-meta" style={{ marginBottom: 16 }}>
          <label className="form-label">{t('add.category')}</label>
          <select
            className="form-input"
            value={word.categoryId ?? ''}
            onChange={(e) => {
              const next = e.target.value || null;
              void store.updateWordCategory(word.id, next);
            }}
          >
            <option value="">{t('progress.noCategory')}</option>
            {store.getCategories().map((c) => (
              <option key={c.id} value={c.id}>
                {c.emoji} {c.name}
              </option>
            ))}
          </select>
          <span className="badge mt8">{t('word.level')} {word.difficulty}</span>
          {source && <span className="badge">{formatSource(source)}</span>}
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
          {!isZh && word.hanja && (
            <span style={{ fontSize: 18, color: 'var(--text-secondary)' }}>{word.hanja}</span>
          )}
          <button className="icon-btn" onClick={() => store.speakText(word.korean)}>
            <WIcon name="volume-up" />
          </button>
        </div>
        {isZh ? (
          <ChineseReading word={word} layout="detail" />
        ) : (
          showReadingEnabled(store.getShowRomaja(), wordLanguage(word)) &&
          word.romaja && (
            <p style={{ fontSize: 16, color: 'var(--text-secondary)', margin: 0 }}>{word.romaja}</p>
          )
        )}

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
          <div>{t('detail.status')}: {status}</div>
          <div>{t('detail.reps')}: {word.repetitions}</div>
          <div>{t('cards.interval', { count: word.intervalDays })}</div>
          <div>
            {t('detail.nextReview')}: {new Date(word.nextReviewAt).toLocaleDateString('ru-RU')}
          </div>
        </div>

        <button className="primary-btn mt20" onClick={() => store.openEditWord(word)}>
          <span>{t('common.edit')}</span>
        </button>
        <button
          className="danger-btn"
          onClick={() => {
            if (confirm(t('detail.deleteConfirm'))) {
              store.deleteWord(word);
            }
          }}
        >
          {t('common.delete')}
        </button>
      </div>
    </div>
  );
}