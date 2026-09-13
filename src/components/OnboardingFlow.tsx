import { useState } from 'react';
import { store, useStore } from '../store/AppStore';
import WooriLogo from './WooriLogo';
import { saveOnboardingCompleted, storedDailyWordGoal, saveDailyWordGoal } from '../domain/settings';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

const STEPS = [
  'welcome',
  'srs',
  'motivation',
  'cards',
  'quiz',
  'listening',
  'content',
  'goal',
] as const;

export default function OnboardingFlow() {
  useStore();
  const open = store.getIsOnboardingOpen();
  const skipWelcome = store.getOnboardingSkipWelcome();
  const [stepIdx, setStepIdx] = useState(skipWelcome ? 1 : 0);
  const [goal, setGoal] = useState(storedDailyWordGoal());

  if (!open) return null;

  const step = STEPS[stepIdx];

  function finish() {
    saveOnboardingCompleted(true);
    saveDailyWordGoal(goal);
    store.closeOnboarding();
  }

  function skip() {
    saveOnboardingCompleted(true);
    store.closeOnboarding();
  }

  function next() {
    if (stepIdx >= STEPS.length - 1) {
      finish();
      return;
    }
    setStepIdx(stepIdx + 1);
  }

  function tryMode(mode: 'cards' | 'quiz' | 'listening', sub?: string) {
    saveOnboardingCompleted(true);
    store.closeOnboarding();
    if (mode === 'cards') store.startDueReview();
    else if (mode === 'quiz') {
      store.selectTab('quiz');
      if (sub === 'write') store.loadNextQuizQuestion('write');
      else store.loadNextQuizQuestion('reverse');
    } else store.selectTab('listening');
  }

  return (
    <div className="overlay onboarding-overlay">
      <div className="onboarding-sheet">
        <div className="onboarding-progress">
          {STEPS.map((_, i) => (
            <span key={i} className={`onboarding-dot ${i <= stepIdx ? 'active' : ''}`} />
          ))}
        </div>

        {step === 'welcome' && (
          <div className="onboarding-step center">
            <WooriLogo size={72} />
            <h2>{t('onboard.welcome')}</h2>
            <p className="muted">{t('onboard.welcomeDesc')}</p>
          </div>
        )}

        {step === 'srs' && (
          <div className="onboarding-step">
            <h2>{t('onboard.srs')}</h2>
            <p className="muted">{t('onboard.srsDesc')}</p>
            <div className="onboard-ratings">
              {['again', 'hard', 'good', 'easy'].map((r) => (
                <span key={r} className="badge">{t('onboard.rating.' + r)}</span>
              ))}
            </div>
          </div>
        )}

        {step === 'motivation' && (
          <div className="onboarding-step">
            <h2>{t('onboard.motivation')}</h2>
            <p className="muted">{t('onboard.motivationDesc')}</p>
          </div>
        )}

        {step === 'cards' && (
          <div className="onboarding-step">
            <span className="onboard-icon"><WIcon name="stack" size={32} /></span>
            <h2>{t('onboard.cards')}</h2>
            <p className="muted">{t('onboard.cardsDesc')}</p>
            <button className="secondary-btn" onClick={() => tryMode('cards')}>{t('onboard.try')}</button>
          </div>
        )}

        {step === 'quiz' && (
          <div className="onboarding-step">
            <span className="onboard-icon"><WIcon name="patch-question" size={32} /></span>
            <h2>{t('onboard.quiz')}</h2>
            <p className="muted">{t('onboard.quizDesc')}</p>
            <div className="flow-layout">
              <button className="secondary-btn" onClick={() => tryMode('quiz', 'reverse')}>{t('onboard.tryReverse')}</button>
              <button className="secondary-btn" onClick={() => tryMode('quiz', 'write')}>{t('onboard.tryWrite')}</button>
            </div>
          </div>
        )}

        {step === 'listening' && (
          <div className="onboarding-step">
            <span className="onboard-icon"><WIcon name="headphones" size={32} /></span>
            <h2>{t('onboard.listening')}</h2>
            <p className="muted">{t('onboard.listeningDesc')}</p>
            <button className="secondary-btn" onClick={() => tryMode('listening')}>{t('onboard.try')}</button>
          </div>
        )}

        {step === 'content' && (
          <div className="onboarding-step">
            <h2>{t('onboard.content')}</h2>
            <p className="muted">{t('onboard.contentDesc')}</p>
          </div>
        )}

        {step === 'goal' && (
          <div className="onboarding-step">
            <h2>{t('onboard.goal')}</h2>
            <p className="muted">{t('onboard.goalDesc')}</p>
            <input
              className="form-input"
              type="number"
              min={1}
              value={goal}
              onChange={(e) => setGoal(Math.max(1, Number(e.target.value) || 1))}
            />
          </div>
        )}

        <div className="onboarding-footer">
          <button className="text-btn" onClick={skip}>{t('onboard.skip')}</button>
          <button className="primary-btn" onClick={next}>
            {stepIdx >= STEPS.length - 1 ? t('onboard.start') : t('common.next')}
          </button>
        </div>
      </div>
    </div>
  );
}
