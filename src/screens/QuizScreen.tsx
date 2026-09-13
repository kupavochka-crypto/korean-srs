import { store, useStore } from '../store/AppStore';
import { gifUrl } from '../domain/themes';
import ScreenHeader from '../components/ScreenHeader';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function QuizScreen() {
  useStore();
  const question = store.getQuizQuestion();
  const selected = store.getSelectedOptionIndex();
  const checked = store.getIsAnswerChecked();
  const score = store.getQuizScore();
  const total = store.getQuizTotalCount();
  const reward = store.getQuizReward();
  const writeInput = store.getWriteInput();

  if (!question) {
    return (
      <div>
        <ScreenHeader title={t('tab.quiz')} subtitle="퀴즈" />
        <div className="cards-done center">
          <div className="empty-state-icon">
            <WIcon name="patch-question" size={48} style={{ color: 'var(--red)' }} />
          </div>
          <h2>{t('quiz.title')}</h2>
          <p className="muted">{t('quiz.desc')}</p>
          <div className="quiz-mode-picker">
            <button className="secondary-btn" onClick={() => store.loadNextQuizQuestion('reverse')}>
              {t('quiz.modeReverse')}
            </button>
            <button className="secondary-btn" onClick={() => store.loadNextQuizQuestion('write')}>
              {t('quiz.modeWrite')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const modeSwitcher = (
    <div className="quiz-mode-picker mb12">
      <button
        className={`select-chip ${question?.kind === 'reverse' ? 'active' : ''}`}
        onClick={() => store.loadNextQuizQuestion('reverse')}
      >
        {t('quiz.modeReverse')}
      </button>
      <button
        className={`select-chip ${question?.kind === 'write' ? 'active' : ''}`}
        onClick={() => store.loadNextQuizQuestion('write')}
      >
        {t('quiz.modeWrite')}
      </button>
    </div>
  );

  if (question.kind === 'write') {
    const expected = question.writeAnswer ?? question.expectedAnswer ?? '';
    const correct =
      checked &&
      writeInput.trim().normalize('NFC').replace(/\s+/g, '') ===
        expected.trim().normalize('NFC').replace(/\s+/g, '');

    return (
      <div>
        <ScreenHeader title={t('tab.quiz')} subtitle="퀴즈" />
        {modeSwitcher}
        <div className="card quiz-card" style={{ marginBottom: 16 }}>
          <p className="quiz-prompt-label">{t('quiz.writePrompt')}</p>
          <p className="quiz-korean quiz-korean-lg">{question.prompt}</p>
          <input
            className="form-input quiz-write-input"
            value={writeInput}
            onChange={(e) => store.setWriteInput(e.target.value)}
            placeholder={t('quiz.writePlaceholder')}
            disabled={checked}
            autoComplete="off"
            autoCorrect="off"
            spellCheck={false}
          />
          {checked ? (
            <>
              <div className="reveal-row">
                <span>{correct ? t('listen.correct') : t('listen.wrong')}</span>
                <span>
                  {t('listen.answer')}: {expected}
                </span>
              </div>
              <button className="primary-btn mt20" onClick={() => store.loadNextQuizQuestion('write')}>
                <span>
                  {t('common.next')}
                  <span className="btn-kor">다음</span>
                </span>
              </button>
            </>
          ) : (
            <button
              className="primary-btn mt20"
              onClick={() => store.checkWriteAnswer()}
              disabled={!writeInput.trim()}
              style={!writeInput.trim() ? { opacity: 0.5 } : {}}
            >
              <span>
                {t('common.check')}
                <span className="btn-kor">확인</span>
              </span>
            </button>
          )}
        </div>
        <p className="quiz-score center">{t('listen.score', { score, total })}</p>
      </div>
    );
  }

  if (question.kind !== 'reverse') {
    return null;
  }

  return (
    <div>
      <ScreenHeader title={t('tab.quiz')} subtitle="퀴즈" />
      {modeSwitcher}
      <div className="card quiz-card" style={{ marginBottom: 16 }}>
        <p className="quiz-korean quiz-korean-lg">{question.prompt}</p>
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
              <button key={i} className={cls} onClick={() => store.selectQuizOption(i)}>
                {option.text}
                {option.romaja && store.getShowRomaja() && (
                  <span className="quiz-option-romaja">{option.romaja}</span>
                )}
              </button>
            );
          })}
        </div>

        {checked ? (
          <>
            <div className="reveal-row">
              <span>
                {selected === question.correctOptionIndex ? t('listen.correct') : t('listen.wrong')}
              </span>
              <span>
                {t('listen.answer')}: {question.options[question.correctOptionIndex].text}
              </span>
            </div>
            <button className="primary-btn mt20" onClick={() => store.loadNextQuizQuestion('reverse')}>
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

      <p className="quiz-score center">{t('listen.score', { score, total })}</p>

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
