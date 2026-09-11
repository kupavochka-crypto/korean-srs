import { store, useStore } from '../store/AppStore';
import { gifUrl } from '../domain/bts';

export default function ListeningScreen() {
  useStore();
  const question = store.getQuizQuestion();
  const selected = store.getSelectedOptionIndex();
  const checked = store.getIsAnswerChecked();
  const score = store.getQuizScore();
  const total = store.getQuizTotalCount();
  const reward = store.getQuizReward();

  if (!question) {
    return (
      <div className="cards-done center">
        <div style={{ fontSize: 48, marginBottom: 12 }}>🎧</div>
        <h2>Нужно минимум 2 слова</h2>
        <p className="muted">Добавьте слова в словарь, чтобы начать аудирование.</p>
      </div>
    );
  }

  return (
    <div>
      <div className="card quiz-card" style={{ marginBottom: 16 }}>
        <button
          className="speaker-btn"
          style={{ width: 56, height: 56, fontSize: 24, margin: '0 auto' }}
          onClick={() => store.replayQuizAudio()}
        >
          🔊
        </button>
        <p className="quiz-korean">{question.korean}</p>
        <p className="muted" style={{ margin: 0 }}>
          {question.romaja}
        </p>
        <div className="quiz-options">
          {question.options.map((option, i) => {
            let cls = 'quiz-option';
            if (checked) {
              if (i === question.correctOptionIndex) cls += ' correct';
              else if (i === selected) cls += ' wrong';
            } else if (i === selected) {
              cls += ' selected';
            }
            return (
              <button
                key={i}
                className={cls}
                onClick={() => store.selectQuizOption(i)}
              >
                {option}
              </button>
            );
          })}
        </div>

        {checked ? (
          <>
            <div className="reveal-row">
              <span>
                Ответ:{' '}
                {selected === question.correctOptionIndex ? '✅ Правильно!' : '❌ Неправильно'}
              </span>
              <span>
                Слово: {question.korean} · {question.romaja}
              </span>
            </div>
            <button
              className="primary-btn mt20"
              onClick={() => store.loadNextQuizQuestion()}
            >
              <span>
                Дальше
                <span className="btn-kor">다음</span>
              </span>
            </button>
          </>
        ) : (
          <button
            className="primary-btn mt20"
            onClick={() => store.checkQuizAnswer()}
            disabled={selected === null}
            style={selected === null ? { opacity: 0.5 } : {}}
          >
            <span>
              Проверить
              <span className="btn-kor">확인</span>
            </span>
          </button>
        )}
      </div>

      <p className="quiz-score center">
        Счёт: {score} / {total}
      </p>

      {reward.rewardGifName && (
        <div className="reward-overlay" onClick={() => store.dismissQuizReward()}>
          <div className="reward-box">
            <img src={gifUrl(reward.rewardGifName)} alt="BTS reward" />
            <h3>Отлично! 🎉</h3>
            <p>Продолжайте в том же духе!</p>
            <button className="primary-btn" onClick={() => store.dismissQuizReward()}>
              Продолжить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}