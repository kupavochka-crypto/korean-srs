import { store, useStore } from '../store/AppStore';
import { gifUrl } from '../domain/themes';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

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
        <div style={{ fontSize: 48, marginBottom: 12 }}><WIcon name="headphones" size={48} style={{ color: 'var(--red)' }} /></div>
        <h2>{t('listen.needWords')}</h2>
        <p className="muted">{t('listen.needWordsDesc')}</p>
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
          <WIcon name="volume-up" size={24} />
        </button>
        <p className="quiz-korean">{question.prompt}</p>
        {store.getShowRomaja() && question.promptRomaja && (
          <p className="muted" style={{ margin: 0 }}>
            {question.promptRomaja}
          </p>
        )}
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
              </button>
            );
          })}
        </div>

        {checked ? (
          <>
            <div className="reveal-row">
              <span>
                {t('listen.answer')}:{' '}
                {selected === question.correctOptionIndex ? t('listen.correct') : t('listen.wrong')}
              </span>
              <span>
                {t('listen.word')}: {question.options[question.correctOptionIndex].text}
              </span>
            </div>
            <button
              className="primary-btn mt20"
              onClick={() => store.loadNextQuizQuestion('listen')}
            >
              <span>
                {t('common.next')}
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
              {t('common.check')}
              <span className="btn-kor">확인</span>
            </span>
          </button>
        )}
      </div>

      <p className="quiz-score center">
        {t('listen.score', { score, total })}
      </p>

      {reward.rewardGifName && (
        <div className="reward-overlay" onClick={() => store.dismissQuizReward()}>
          <div className="reward-box">
            <img src={gifUrl(reward.rewardGifName)} alt="BTS reward" />
            <h3>{t('reward.title')}</h3>
            <p>{t('reward.body')}</p>
            <button className="primary-btn" onClick={() => store.dismissQuizReward()}>
              {t('reward.continue')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}