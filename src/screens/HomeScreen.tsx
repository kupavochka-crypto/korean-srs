import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import CircularStat from '../components/CircularStat';
import { greetingById, portraitUrl, randomGreeting } from '../domain/themes';
import { artistsOfActiveTheme } from '../domain/sources';
import {
  currentArtist,
  nextArtist,
  levelProgress,
  todayMission,
  missionProgressRatio,
} from '../domain/gamification';
import { colors } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function HomeScreen() {
  useStore();
  const wordsCount = store.totalWordsCount();
  const due = store.dueWords();
  const greeting = greetingById(store.getGreetingId());
  const xp = store.getXp();
  const artists = artistsOfActiveTheme();
  const mentor = currentArtist(xp, artists);
  const next = nextArtist(xp, artists);
  const progress = Math.round(levelProgress(xp, artists) * 100);
  const mission = todayMission(new Date());

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

      <div className="greeting-card card" onClick={() => store.setGreeting(randomGreeting(greeting).id)}>
        <img className="greeting-image" src={portraitUrl(greeting.imageName)} alt={greeting.artistName} />
        <div>
          <p className="greeting-text-rus">{greeting.russian}</p>
          <p className="greeting-text-kor">{greeting.korean}</p>
          <p className="greeting-artist">{greeting.artistName}</p>
        </div>
      </div>

      {mentor ? (
        <div className="card mentor-card" onClick={() => store.selectTab('gallery')}>
          <img className="mentor-avatar" src={portraitUrl(mentor.imageName)} alt={mentor.stageName} />
          <div className="mentor-body">
            <p className="mentor-title">
              {t('home.mentor')} — {mentor.stageName}{' '}
              <span className="mentor-role">{mentor.role}</span>
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
      ) : (
        <div className="card mentor-card" onClick={() => store.selectTab('gallery')}>
          <img className="mentor-avatar" src={portraitUrl(greeting.imageName)} alt={greeting.artistName} />
          <div className="mentor-body">
            <p className="mentor-title">{t('home.mentor.none')}</p>
            <p className="mentor-hint">
              {xp} XP
            </p>
          </div>
        </div>
      )}

      <h2 className="section-title">{t('home.sectionStats')}</h2>
      <div className="stats-row">
        <CircularStat
          value={`${wordsCount}`}
          label={t('home.stats.words')}
          koreanLabel="총 단어"
          color={colors.charcoal}
          className="circular-stat-charcoal"
        />
        <CircularStat
          value={`${due.length}`}
          label={t('home.stats.toReview')}
          koreanLabel="오늘 복습"
          color={colors.red}
          background={due.length > 0 ? 'var(--red-soft)' : 'var(--surface)'}
        />
      </div>

      <button className="primary-btn mb24" onClick={() => store.startDueReview()}>
        <span>
          <span>
            {due.length > 0
              ? `${t('home.startReview')} (${due.length})`
              : t('home.startCards')}
          </span>
          <span className="btn-kor">시작하기</span>
        </span>
      </button>

      <div className="card mission-card">
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
          <span className="quick-icon" style={{ background: `${colors.red}1a`, color: colors.red }}>
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
          <span className="quick-icon" style={{ background: `${colors.accentPink}1a`, color: colors.accentPink }}>
            <WIcon name="headphones" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.song')}</span>
          <span className="quick-subtitle">노래로 배우기</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.startDifficultReview()}>
          <span className="quick-icon" style={{ background: `${colors.warning}1a`, color: colors.warning }}>
            <WIcon name="exclamation-triangle" size={20} />
          </span>
          <span className="quick-title">
            {t('home.quick.difficult', { count: store.difficultWords().length })}
          </span>
          <span className="quick-subtitle">어려운 단어 복습</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openGuide()}>
          <span className="quick-icon" style={{ background: `${colors.blue}1a`, color: colors.blue }}>
            <WIcon name="question-circle" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.help')}</span>
          <span className="quick-subtitle">사용 방법</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openPacks()}>
          <span className="quick-icon" style={{ background: `${colors.success}1a`, color: colors.success }}>
            <WIcon name="box-seam" size={20} />
          </span>
          <span className="quick-title">{t('home.quick.packs')}</span>
          <span className="quick-subtitle">단어 팩</span>
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