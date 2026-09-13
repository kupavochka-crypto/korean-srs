import { useEffect, useState, type ReactNode } from 'react';
import { store, useStore } from '../store/AppStore';
import WooriLogo from './WooriLogo';
import { saveOnboardingCompleted, storedDailyWordGoal, saveDailyWordGoal } from '../domain/settings';
import { GUIDE_CHARACTER } from '../domain/guide-character';
import { t } from '../domain/i18n';

const STEPS = ['intro', 'daily', 'play', 'world', 'themes', 'goal'] as const;

function CharacterStory({ children }: { children: ReactNode }) {
  return (
    <div className="onboarding-step">
      <div className="onboard-character">
        <span className="onboard-avatar">
          <WooriLogo size={48} />
        </span>
        <span className="onboard-character-name">{GUIDE_CHARACTER.name}</span>
      </div>
      <div className="onboard-speech">{children}</div>
    </div>
  );
}

function StoryParagraph({ leadKey, bodyKey, hookKey }: { leadKey: string; bodyKey: string; hookKey?: string }) {
  return (
    <>
      <p className="onboard-speech-lead">{t(leadKey)}</p>
      <p className="onboard-speech-body">{t(bodyKey)}</p>
      {hookKey ? <p className="onboard-story-accent">{t(hookKey)}</p> : null}
    </>
  );
}

export default function OnboardingFlow() {
  useStore();
  const open = store.getIsOnboardingOpen();
  const [stepIdx, setStepIdx] = useState(0);
  const [goal, setGoal] = useState(storedDailyWordGoal());

  useEffect(() => {
    if (open) setStepIdx(0);
  }, [open]);

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

  return (
    <div className="overlay onboarding-overlay">
      <div className="onboarding-sheet">
        <div className="onboarding-progress">
          {STEPS.map((_, i) => (
            <span key={i} className={`onboarding-dot ${i <= stepIdx ? 'active' : ''}`} />
          ))}
        </div>

        {step === 'intro' && (
          <CharacterStory>
            <p className="onboard-speech-lead">{t('onboard.story.intro.lead')}</p>
            <div className="onboard-name-etymology">
              <p className="onboard-name-etymology-title">{t('onboard.story.intro.nameTitle')}</p>
              <p className="onboard-name-etymology-body">{t('onboard.story.intro.nameBody')}</p>
            </div>
            <p className="onboard-speech-body">{t('onboard.story.intro.body')}</p>
            <p className="onboard-story-accent">{t('onboard.story.intro.hook')}</p>
          </CharacterStory>
        )}

        {step === 'daily' && (
          <CharacterStory>
            <StoryParagraph
              leadKey="onboard.story.daily.lead"
              bodyKey="onboard.story.daily.body"
              hookKey="onboard.story.daily.hook"
            />
            <div className="onboard-ratings">
              {(['again', 'hard', 'good', 'easy'] as const).map((r) => (
                <span key={r} className="badge">
                  {t('onboard.rating.' + r)}
                </span>
              ))}
            </div>
          </CharacterStory>
        )}

        {step === 'play' && (
          <CharacterStory>
            <StoryParagraph
              leadKey="onboard.story.play.lead"
              bodyKey="onboard.story.play.body"
              hookKey="onboard.story.play.hook"
            />
          </CharacterStory>
        )}

        {step === 'world' && (
          <CharacterStory>
            <p className="onboard-speech-lead">{t('onboard.story.world.lead')}</p>
            <p className="onboard-speech-body">{t('onboard.story.world.body')}</p>
            <div className="onboard-name-etymology">
              <p className="onboard-name-etymology-title">{t('onboard.story.world.dictTitle')}</p>
              <p className="onboard-name-etymology-body">{t('onboard.story.world.dictBody')}</p>
              <p className="onboard-name-etymology-body onboard-name-etymology-body--last">
                {t('onboard.story.world.dictSoon')}
              </p>
            </div>
            <p className="onboard-story-accent">{t('onboard.story.world.hook')}</p>
          </CharacterStory>
        )}

        {step === 'themes' && (
          <CharacterStory>
            <p className="onboard-speech-lead">{t('onboard.story.themes.lead')}</p>
            <div className="onboard-name-etymology">
              <p className="onboard-name-etymology-title">{t('onboard.story.world.themesTitle')}</p>
              <p className="onboard-name-etymology-body">{t('onboard.story.world.themesBody')}</p>
              <p className="onboard-name-etymology-body onboard-name-etymology-body--last">
                {t('onboard.story.world.themesTail')}
              </p>
            </div>
          </CharacterStory>
        )}

        {step === 'goal' && (
          <CharacterStory>
            <StoryParagraph leadKey="onboard.story.goal.lead" bodyKey="onboard.story.goal.body" />
            <input
              className="form-input onboard-goal-input"
              type="number"
              min={1}
              value={goal}
              onChange={(e) => setGoal(Math.max(1, Number(e.target.value) || 1))}
            />
          </CharacterStory>
        )}

        <div className="onboarding-footer">
          <button type="button" className="text-btn" onClick={skip}>
            {t('onboard.skip')}
          </button>
          <button type="button" className="primary-btn" onClick={next}>
            {stepIdx >= STEPS.length - 1 ? t('onboard.start') : t('common.next')}
          </button>
        </div>
      </div>
    </div>
  );
}
