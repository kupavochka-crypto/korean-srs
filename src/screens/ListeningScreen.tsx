import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { gifUrl } from '../domain/themes';
import ScreenHeader from '../components/ScreenHeader';
import { showReadingEnabled } from '../domain/language';
import { t } from '../domain/i18n';
import { tabSubtitle, tL } from '../domain/learning-ui';
import WIcon from '../ui/WIcon';

export default function ListeningScreen() {
  useStore();
  const question = store.getQuizQuestion();
  const selected = store.getSelectedOptionIndex();
  const checked = store.getIsAnswerChecked();
  const score = store.getQuizScore();
  const total = store.getQuizTotalCount();
  const reward = store.getQuizReward();
  const lang = store.getLearningLanguage();
  const [wordRevealed, setWordRevealed] = useState(false);

  useEffect(() => {
    setWordRevealed(false);
  }, [question?.prompt, question?.targetWordId]);

  if (!question) {
    return (
      <div>
        <ScreenHeader title={t('tab.listening')} subtitle={tabSubtitle('listening', lang)} />
        <div className="cards-done center">
          <div className="empty-state-icon">
            <WIcon name="headphones" size={48} style={{ color: 'var(--red)' }} />
          </div>
          <h2>{t('listen.needWords')}</h2>
          <p className="muted">{t('listen.needWordsDesc')}</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ScreenHeader title={t('tab.listening')} subtitle={tabSubtitle('listening', lang)} />
      <div className="card quiz-card quiz-card--listen" style={{ marginBottom: 16 }}>
        <button
          type="button"
          className={`quiz-mode-badge ${wordRevealed ? 'quiz-mode-badge--revealed' : ''}`}
          onClick={() => setWordRevealed((v) => !v)}
          aria-label={wordRevealed ? t('listen.hideWord') : t('listen.showWord')}
          aria-pressed={wordRevealed}
        >
          <WIcon name="headphones" size={13} style={{ color: 'var(--red)' }} />
          <span className="quiz-mode-badge-lang">{tL('quiz.modeListenWord', lang)}</span>
        </button>
        <button
          className="speaker-btn speaker-btn-lg"
          onClick={() => store.replayQuizAudio()}
          aria-label={t('listen.tapToListen')}
        >
          <WIcon name="volume-up" size={24} />
        </button>
        {checked || wordRevealed ? (
          <>
            <p className="quiz-korean">{question.prompt}</p>
            {showReadingEnabled(store.getShowRomaja(), lang) && question.promptRomaja && (
              <p className="muted listen-romaja">{question.promptRomaja}</p>
            )}
          </>
        ) : (
          <p className="muted listen-prompt-hint">{t('listen.tapToListen')}</p>
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
              <button key={i} className={cls} onClick={() => store.selectQuizOption(i)}>
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
                {t('listen.revealWord')}: {question.options[question.correctOptionIndex].text}
              </span>
            </div>
            <button className="primary-btn mt20" onClick={() => store.loadNextQuizQuestion('listen')}>
              <span>
                {t('common.next')}
                <span className="btn-kor">{tL('btn.next', lang)}</span>
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
              <span className="btn-kor">{tL('btn.check', lang)}</span>
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
