import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import HomeActivityStats from '../components/HomeActivityStats';
import type { ModeDayCounts } from '../db/repository';
import { greetingById, randomGreeting, randomPortraitVariant } from '../domain/themes';
import PortraitImage from '../components/PortraitImage';
import { artistsOfActiveTheme } from '../domain/sources';
import {
  currentLevelIndex,
  nextArtist,
  levelProgress,
  todayMission,
  missionProgressRatio,
} from '../domain/gamification';
import { t } from '../domain/i18n';
import { greetingNative, tL } from '../domain/learning-ui';
import WIcon from '../ui/WIcon';
import { packSessionStats } from '../domain/mission-word-count';

export default function HomeScreen() {
  useStore();
  const wordsCount = store.totalWordsCount();
  const due = store.dueWords();
  const greeting = greetingById(store.getGreetingId());
  const xp = store.getXp();
  const artists = artistsOfActiveTheme();
  const levelIdx = currentLevelIndex(xp, artists);
  const mentor = levelIdx >= 0 ? artists[levelIdx] : null;
  const next = nextArtist(xp, artists);
  const displayArtist = mentor ?? next;
  const level = levelIdx + 1;
  const progress = Math.round(levelProgress(xp, artists) * 100);
  const mission = todayMission(new Date());
  const challengePack = store.getActiveMissionPack();
  const koreanSet = new Set(store.getWords().map((w) => w.korean));
  const challengeStats = challengePack
    ? packSessionStats(challengePack, koreanSet, store.getMissionWordCount())
    : { imported: 0, total: 0 };
  const challengeProgress = challengeStats.total > 0 ? challengeStats.imported / challengeStats.total : 0;
  const learningLang = store.getLearningLanguage();

  const emptyModeCounts = (): ModeDayCounts => ({ srs: 0, quiz: 0, listen: 0 });
  const [modeToday, setModeToday] = useState<ModeDayCounts>(emptyModeCounts);
  const [modeYesterday, setModeYesterday] = useState<ModeDayCounts>(emptyModeCounts);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    let alive = true;
    store.streakCount().then((v) => alive && setStreak(v));
    store.todayModeCounts().then((v) => alive && setModeToday(v));
    store.yesterdayModeCounts().then((v) => alive && setModeYesterday(v));
    return () => {
      alive = false;
    };
  }, [store.getSnapshot()]);

  return (
    <div>
      <ScreenHeader
        title={tL('app.brand', learningLang)}
        subtitle={learningLang === 'zh' ? t('app.subtitle.zh') : t('app.subtitle')}
      />

      {store.getZhProfileHint() && (
        <div className="profile-hint card-flat mb16">
          <p>{t('home.zhProfileHint')}</p>
          <div className="btn-row btn-row--auto">
            <button type="button" className="secondary-btn" onClick={() => store.dismissZhProfileHint()}>
              {t('common.close')}
            </button>
          </div>
        </div>
      )}

      <div
        className="greeting-card card"
        onClick={() => {
          const next = randomGreeting(greeting);
          let variant = randomPortraitVariant();
          if (next.id === greeting.id) {
            variant = (store.getGreetingPortraitVariant() % 7) + 1;
          }
          store.setGreeting(next.id, variant);
        }}
      >
        <PortraitImage
          className="greeting-image"
          imageName={greeting.imageName}
          variant={store.getGreetingPortraitVariant()}
          alt={greeting.artistName}
        />
        <div>
          <p className="greeting-text-rus">{greeting.russian}</p>
          <div className="greeting-kor-row">
            <p className="greeting-text-kor">{greetingNative(greeting, learningLang)}</p>
            <button
              type="button"
              className="icon-btn greeting-speak-btn"
              aria-label={t('cards.speakAria')}
              onClick={(e) => {
                e.stopPropagation();
                store.speakText(greetingNative(greeting, learningLang), learningLang);
              }}
            >
              <WIcon name="volume-up" size={11} />
            </button>
          </div>
          <p className="greeting-artist">{greeting.artistName}</p>
        </div>
      </div>

      {displayArtist && (
        <div className="card mentor-card" onClick={() => store.selectTab('gallery')}>
          <PortraitImage
            className={`mentor-avatar${mentor ? '' : ' mentor-avatar--locked'}`}
            imageName={displayArtist.imageName}
            alt={displayArtist.stageName}
          />
          <div className="mentor-body">
            <p className="mentor-title">
              {mentor ? (
                <>
                  {t('home.mentor.level', { n: level })} · {mentor.stageName}{' '}
                  <span className="mentor-role">{mentor.role}</span>
                </>
              ) : (
                <>
                  {t('home.mentor.level', { n: 0 })} ·{' '}
                  {t('home.mentor.next', { name: displayArtist.stageName })}
                </>
              )}
            </p>
            <div className="progress-track">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
            <p className="mentor-hint">
              {next
                ? `${xp} HP · ${t('home.mentor.toNext', { name: next.stageName, count: Math.max(0, next.tierThreshold - xp) })}`
                : `${xp} HP · ${t('home.mentor.allOpen')}`}
            </p>
          </div>
        </div>
      )}

      <h2 className="section-title">{t('home.sectionStats')}</h2>
      <HomeActivityStats
        dueCount={due.length}
        dailyGoal={store.getDailyWordGoal()}
        today={modeToday}
        yesterday={modeYesterday}
        streak={streak}
        learningLang={learningLang}
      />

      {challengePack && (
        <div className="card challenge-card mb24">
          <div className="challenge-head">
            <span className="challenge-emoji">{challengePack.emoji}</span>
            <div>
              <p className="challenge-title">{t('home.challenge')}</p>
              <p className="challenge-sub">{challengePack.title}</p>
            </div>
            <span className="challenge-pct">{Math.round(challengeProgress * 100)}%</span>
          </div>
          <div className="progress-track">
            <div className="progress-fill" style={{ width: `${Math.round(challengeProgress * 100)}%` }} />
          </div>
          <div className="btn-row challenge-actions">
            <button className="secondary-btn" onClick={() => store.openMissionPick()}>
              {t('home.challengePick')}
            </button>
            {challengeProgress >= 1 ? (
              <button
                className="primary-btn"
                onClick={() => void store.beginMissionTraining(challengePack.id)}
              >
                {t('missionStart.start')}
              </button>
            ) : (
              <button className="secondary-btn" onClick={() => store.openMissionStart(challengePack.id)}>
                {t('home.challengeStart')}
              </button>
            )}
          </div>
        </div>
      )}

      <div className="card daily-goal-card">
        <div className="mission-head">
          <span className="mission-icon"><WIcon name="bullseye" /></span>
          <div className="mission-body">
            <p className="mission-title">
              {t('home.mission')}: {t('mission.' + mission.kind + '.title')}
            </p>
            <p className="mission-desc">{t('mission.' + mission.kind + '.desc')}</p>
          </div>
          <span className="mission-reward">
            <WIcon name="heart-fill" size={13} style={{ color: 'var(--accent-pink)' }} />
            {t('home.mission.reward', { count: mission.rewardXp })}
          </span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${Math.round(missionProgressRatio(mission, {
              totalWords: wordsCount,
              totalReviews: 0,
              correctReviews: 0,
              masteredWords: 0,
              todayReviews: modeToday.srs,
              streak,
            }) * 100)}%` }}
          />
        </div>
      </div>

      <h2 className="section-title">{t('home.sectionQuick')}</h2>
      <div className="quick-actions">
        <button className="quick-action card-flat" onClick={() => store.openAddWord()}>
          <span className="quick-icon" style={{ background: 'var(--red-soft)', color: 'var(--red)' }}>
            <WIcon name="plus" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.add')}</span>
          <span className="quick-subtitle">{tL('home.quick.add', learningLang)}</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openScanOcr()}>
          <span
            className="quick-icon"
            style={{ background: 'var(--charcoal-soft)', color: 'var(--charcoal)' }}
          >
            <WIcon name="camera" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.scan')}</span>
          <span className="quick-subtitle">{tL('home.quick.scan', learningLang)}</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openSongImport()}>
          <span className="quick-icon" style={{ background: 'var(--pink-soft)', color: 'var(--accent-pink)' }}>
            <WIcon name="headphones" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.song')}</span>
          <span className="quick-subtitle">{tL('home.quick.song', learningLang)}</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.startDifficultReview()}>
          <span className="quick-icon" style={{ background: 'var(--warning-soft)', color: 'var(--warning)' }}>
            <WIcon name="exclamation-triangle" size={20} />
          </span>
          <span className="quick-title">
            {t('home.quick.difficult', { count: store.difficultWords().length })}
          </span>
          <span className="quick-subtitle">{tL('home.quick.difficult', learningLang)}</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.selectTab('phrases')}>
          <span className="quick-icon" style={{ background: 'var(--pink-soft)', color: 'var(--accent-pink)' }}>
            <WIcon name="chat-quote" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.phrases')}</span>
          <span className="quick-subtitle">{tL('home.quick.phrases', learningLang)}</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openTranslate()}>
          <span className="quick-icon" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
            <WIcon name="globe2" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.translate')}</span>
          <span className="quick-subtitle">{tL('home.quick.translate', learningLang)}</span>
        </button>
      </div>

      {wordsCount === 0 && (
        <div className="empty-hint">
          <span style={{ fontSize: 24 }}><WIcon name="lightbulb" size={24} /></span>
          <span>
            {t('home.emptyTitle')} {t('home.emptyText')}
          </span>
        </div>
      )}
    </div>
  );
}