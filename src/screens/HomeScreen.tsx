import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import HomeActivityStats from '../components/HomeActivityStats';
import { greetingById, portraitUrl, randomGreeting } from '../domain/themes';
import { artistsOfActiveTheme } from '../domain/sources';
import {
  currentLevelIndex,
  nextArtist,
  levelProgress,
  todayMission,
  missionProgressRatio,
} from '../domain/gamification';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import { packImportedCount } from '../domain/daily-challenge';

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
  const challengeStats = challengePack ? packImportedCount(challengePack, koreanSet) : { imported: 0, total: 0 };
  const challengeProgress = challengeStats.total > 0 ? challengeStats.imported / challengeStats.total : 0;

  const [todayReviews, setTodayReviews] = useState(0);
  const [streak, setStreak] = useState(0);

  useEffect(() => {
    let alive = true;
    store.streakCount().then((v) => alive && setStreak(v));
    store.todayReviewsCount().then((v) => alive && setTodayReviews(v));
    return () => {
      alive = false;
    };
  }, [store.getSnapshot()]);

  return (
    <div>
      <ScreenHeader title="Woori · 우리" subtitle={t('app.subtitle')} />

      {store.getZhProfileHint() && (
        <div className="profile-hint card-flat mb16">
          <p>{t('home.zhProfileHint')}</p>
          <button type="button" className="secondary-btn" onClick={() => store.dismissZhProfileHint()}>
            {t('common.close')}
          </button>
        </div>
      )}

      <div className="greeting-card card" onClick={() => store.setGreeting(randomGreeting(greeting).id)}>
        <img className="greeting-image" src={portraitUrl(greeting.imageName)} alt={greeting.artistName} />
        <div>
          <p className="greeting-text-rus">{greeting.russian}</p>
          <p className="greeting-text-kor">{greeting.korean}</p>
          <p className="greeting-artist">{greeting.artistName}</p>
        </div>
      </div>

      {displayArtist && (
        <div className="card mentor-card" onClick={() => store.selectTab('gallery')}>
          <img
            className={`mentor-avatar${mentor ? '' : ' mentor-avatar--locked'}`}
            src={portraitUrl(displayArtist.imageName)}
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
                ? `${xp} XP · ${t('home.mentor.toNext', { name: next.stageName, count: Math.max(0, next.tierThreshold - xp) })}`
                : `${xp} XP · ${t('home.mentor.allOpen')}`}
            </p>
          </div>
        </div>
      )}

      <h2 className="section-title">{t('home.sectionStats')}</h2>
      <HomeActivityStats
        wordsCount={wordsCount}
        dueCount={due.length}
        dailyGoal={store.getDailyWordGoal()}
        todayReviews={todayReviews}
      />

      <button className="primary-btn home-primary-cta mb24" onClick={() => store.startDueReview()}>
        <span>
          <span>
            {due.length > 0
              ? `${t('home.startReview')} (${due.length})`
              : t('home.startCards')}
          </span>
          <span className="btn-kor">시작하기</span>
        </span>
      </button>

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
          <div className="challenge-actions">
            <button className="secondary-btn" onClick={() => store.openMissionPick()}>
              {t('home.challengePick')}
            </button>
            {challengeProgress >= 1 ? (
              <button className="primary-btn challenge-start-btn" onClick={() => store.openMissionStart(challengePack.id)}>
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
          <span className="mission-reward">{t('home.mission.reward', { count: mission.rewardXp })}</span>
        </div>
        <div className="progress-track">
          <div
            className="progress-fill"
            style={{ width: `${Math.round(missionProgressRatio(mission, {
              totalWords: wordsCount,
              totalReviews: 0,
              correctReviews: 0,
              masteredWords: 0,
              todayReviews,
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
          <span className="quick-subtitle">단어 추가</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openScanOcr()}>
          <span
            className="quick-icon"
            style={{ background: 'var(--charcoal-soft)', color: 'var(--charcoal)' }}
          >
            <WIcon name="camera" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.scan')}</span>
          <span className="quick-subtitle">텍스트 스캔 (OCR)</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openSongImport()}>
          <span className="quick-icon" style={{ background: 'var(--pink-soft)', color: 'var(--accent-pink)' }}>
            <WIcon name="headphones" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.song')}</span>
          <span className="quick-subtitle">노래로 배우기</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.startDifficultReview()}>
          <span className="quick-icon" style={{ background: 'var(--warning-soft)', color: 'var(--warning)' }}>
            <WIcon name="exclamation-triangle" size={20} />
          </span>
          <span className="quick-title">
            {t('home.quick.difficult', { count: store.difficultWords().length })}
          </span>
          <span className="quick-subtitle">어려운 단어 복습</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.selectTab('phrases')}>
          <span className="quick-icon" style={{ background: 'var(--pink-soft)', color: 'var(--accent-pink)' }}>
            <WIcon name="chat-quote" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.phrases')}</span>
          <span className="quick-subtitle">표현</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openTranslate()}>
          <span className="quick-icon" style={{ background: 'var(--blue-soft)', color: 'var(--blue)' }}>
            <WIcon name="globe2" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.translate')}</span>
          <span className="quick-subtitle">번역</span>
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