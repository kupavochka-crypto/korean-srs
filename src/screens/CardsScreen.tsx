import { store, useStore } from '../store/AppStore';
import SrsRatingBar from '../components/SrsRatingBar';
import type { Word } from '../types';

function formatNextReview(word: Word): string {
  const days = Math.max(1, Math.round((word.nextReviewAt - Date.now()) / (24 * 60 * 60 * 1000)));
  return `Повторить через ${days} дн`;
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
        <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
        <h2>Повторять нечего</h2>
        <p className="muted">Нет слов, требующих повторения.</p>
        <button className="primary-btn mt20" onClick={() => store.startReviewAll()}>
          <span>
            Повторить все слова
            <span className="btn-kor">모든 단어 복습</span>
          </span>
        </button>
        {difficultCount > 0 && (
          <button className="secondary-btn mt12" onClick={() => store.startDifficultReview()}>
            <span>
              Трудные слова ({difficultCount})
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
        <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
        <h2>Отличная работа!</h2>
        <p className="muted">Вы прошли все карточки этой серии.</p>
        <button className="primary-btn mt20" onClick={() => store.startReviewAll()}>
          <span>
            Повторить все слова
            <span className="btn-kor">모든 단어 복습</span>
          </span>
        </button>
        {difficultCount > 0 && (
          <button className="secondary-btn mt12" onClick={() => store.startDifficultReview()}>
            <span>
              Трудные слова ({difficultCount})
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
          Карточка {index + 1} из {queue.length}
        </span>
        <div style={{ display: 'flex', gap: 8 }}>
          <button
            className="icon-btn"
            onClick={() => store.openEditWord(word)}
            aria-label="Редактировать слово"
          >
            ✏️
          </button>
          <button className="icon-btn" onClick={() => store.speakText(word.korean)} aria-label="Озвучить">
            🔊
          </button>
        </div>
      </div>
      <div className="progress-track">
        <div className="progress-fill" style={{ width: `${((index + 1) / queue.length) * 100}%` }} />
      </div>

      <div className="card" onClick={() => store.flipCard()}>
        <div className="flashcard">
          {!flipped ? (
            <>
              <span className="fc-korean">{word.korean}</span>
              {word.hanja && <span className="fc-hanja">{word.hanja}</span>}
              <span className="fc-romaja">{word.romaja}</span>
              <button
                className="speaker-btn mt16"
                onClick={(e) => {
                  e.stopPropagation();
                  store.speakText(word.korean);
                }}
              >
                🔊
              </button>
              <span className="muted mt16" style={{ fontSize: 12 }}>
                Нажмите, чтобы перевернуть
              </span>
            </>
          ) : (
            <>
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
                <span>Повторы: {word.repetitions}</span>
                <span>Интервал: {word.intervalDays} дн</span>
                <span>
                  EF: {word.easeFactor.toFixed(2)} · {formatNextReview(word)}
                </span>
              </div>
            </>
          )}
        </div>
      </div>

      {flipped && (
        <div>
          <p className="muted center" style={{ fontSize: 13, marginTop: 16 }}>
            Оцените ваш ответ
          </p>
          <SrsRatingBar onRate={(rating) => store.rateCard(rating)} />
        </div>
      )}
    </div>
  );
}