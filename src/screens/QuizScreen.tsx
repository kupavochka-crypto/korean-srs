import { store, useStore } from '../store/AppStore';
import { gifUrl } from '../domain/themes';

export default function QuizScreen() {
  useStore();
  const question = store.getQuizQuestion();
  const selected = store.getSelectedOptionIndex();
  const checked = store.getIsAnswerChecked();
  const score = store.getQuizScore();
  const total = store.getQuizTotalCount();
  const reward = store.getQuizReward();

  if (!question || question.kind !== 'reverse') {
    return (
      <div className="cards-done center">
        <div style={{ fontSize: 48, marginBottom: 12 }}>🧠</div>
        <h2>Квиз</h2>
        <p className="muted">
          Показано русское слово — выберите правильный вариант по-корейски.
        </p>
        <button
          className="primary-btn mt20"
          onClick={() => store.loadNextQuizQuestion('reverse')}
        >
          <span>
            Начать
            <span className="btn-kor">시작</span>
          </span>
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="card quiz-card" style={{ marginBottom: 16 }}>
        <p className="quiz-korean" style={{ fontSize: 30 }}>
          {question.prompt}
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
                {option.text}
                {option.romaja && <span className="quiz-option-romaja">{option.romaja}</span>}
              </button>
            );
          })}
        </div>

        {checked ? (
          <>
            <div className="reveal-row">
              <span>
                {selected === question.correctOptionIndex ? '✅ Правильно!' : '❌ Неправильно'}
              </span>
              <span>
                Ответ: {question.options[question.correctOptionIndex].text}
              </span>
            </div>
            <button
              className="primary-btn mt20"
              onClick={() => store.loadNextQuizQuestion('reverse')}
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