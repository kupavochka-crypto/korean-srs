import { store, useStore } from '../store/AppStore';
import SrsRatingBar from '../components/SrsRatingBar';
import { t } from '../domain/i18n';
import type { Word } from '../types';
import WIcon from '../ui/WIcon';

function formatNextReview(word: Word): string {
  const days = Math.max(1, Math.round((word.nextReviewAt - Date.now()) / (24 * 60 * 60 * 1000)));
  return t('cards.nextReview', { count: days });
}

export default function CardsScreen() {
  useStore();
  const queue = store.getCardsQueue();
  const index = store.getCardIndex();
  const flipped = store.getIsCardFlipped();
  const difficultCount = store.difficultWords().length;

  if (queue.length === 0) {
    return (
      <div className="cards-done center">
        <div style={{ fontSize: 48, marginBottom: 12 }}><WIcon name="stars" size={48} style={{ color: 'var(--warning)' }} /></div>
        <h2>{t('cards.nothing')}</h2>
        <p className="muted">{t('cards.nothingDesc')}</p>
        <button className="primary-btn mt20" onClick={() => store.startReviewAll()}>
          <span>
            {t('cards.reviewAll')}
            <span className="btn-kor">모든 단어 복습</span>
          </span>
        </button>
        {difficultCount > 0 && (
          <button className="secondary-btn mt12" onClick={() => store.startDifficultReview()}>
            <span>
              {t('cards.difficult', { count: difficultCount })}
              <span className="btn-kor">어려운 단어</span>
            </span>
          </button>
        )}
      </div>
    );
  }

  if (index >= queue.length) {
    return (
      <div className="cards-done center">
        <div style={{ fontSize: 48, marginBottom: 12 }}><WIcon name="stars" size={48} style={{ color: 'var(--warning)' }} /></div>
        <h2>{t('cards.doneTitle')}</h2>
        <p className="muted">{t('cards.doneDesc')}</p>
        <button className="primary-btn mt20" onClick={() => store.startReviewAll()}>
          <span>
            {t('cards.reviewAll')}
            <span className="btn-kor">모든 단어 복습</span>
          </span>
        </button>
        {difficultCount > 0 && (
          <button className="secondary-btn mt12" onClick={() => store.startDifficultReview()}>
            <span>
              {t('cards.difficult', { count: difficultCount })}
              <span className="btn-kor">어려운 단어</span>
            </span>
          </button>
        )}
      </div>
    );
  }

  const word = queue[index];

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="muted" style={{ fontSize: 13 }}>
          {t('cards.progress', { i: index + 1, total: queue.length })}
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="icon-btn"
            onClick={() => store.openEditWord(word)}
            aria-label={t('cards.editAria')}
          >
            <WIcon name="pencil" />
          </button>
          <button
            className="icon-btn"
            onClick={() => store.speakText(word.korean)}
            aria-label={t('cards.speakAria')}
          >
            <WIcon name="volume-up" />
          </button>
        </div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${((index + 1) / queue.length) * 100}%` }} />
      </div>

      <div className="flip-card" onClick={() => store.flipCard()}>
        <div className={`flip-inner ${flipped ? 'flipped' : ''}`}>
          <div className="flip-face flip-front">
            <div className="flashcard">
              <span className="fc-korean">{word.korean}</span>
              {word.hanja && <span className="fc-hanja">{word.hanja}</span>}
              {store.getShowRomaja() && <span className="fc-romaja">{word.romaja}</span>}
              <button
                className="speaker-btn mt16"
                onClick={(e) => {
                  e.stopPropagation();
                  store.speakText(word.korean);
                }}
              >
                <WIcon name="volume-up" />
              </button>
              <span className="muted mt16" style={{ fontSize: 12 }}>
                {t('cards.tapToFlip')}
              </span>
            </div>
          </div>
          <div className="flip-face flip-back">
            <div className="flashcard">
              <span className="fc-translation">{word.translation}</span>
              <span className="fc-korean mt12" style={{ fontSize: 26 }}>
                {word.korean}
              </span>
              {word.exampleSentence && (
                <div className="fc-example">
                  <div>{word.exampleSentence}</div>
                  {word.exampleTranslation && <div>{word.exampleTranslation}</div>}
                </div>
              )}
              <div className="fc-stats">
                <span>{t('cards.reps', { count: word.repetitions })}</span>
                <span>{t('cards.interval', { count: word.intervalDays })}</span>
                <span>
                  EF: {word.easeFactor.toFixed(2)} · {formatNextReview(word)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {flipped && (
        <div>
          <p className="muted center" style={{ fontSize: 13, marginTop: 16 }}>
            {t('cards.evaluate')}
          </p>
          <SrsRatingBar onRate={(rating) => store.rateCard(rating)} />
        </div>
      )}
    </div>
  );
}