import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import type { DailyActivity } from '../types';
import { artistsOfActiveTheme } from '../domain/sources';
import { currentLevelIndex } from '../domain/gamification';

function ProgressGroup({
  title,
  children,
  list = false,
}: {
  title: string;
  children: ReactNode;
  list?: boolean;
}) {
  return (
    <section className="settings-group">
      <h2 className="settings-group-title">{title}</h2>
      <div
        className={`card settings-group-card ${list ? 'settings-group-card--list' : 'settings-group-card--padded'}`}
      >
        {children}
      </div>
    </section>
  );
}

function PlanFactChart({ activity, dailyGoal }: { activity: DailyActivity[]; dailyGoal: number }) {
  const maxVal = Math.max(
    dailyGoal,
    ...activity.map((d) => d.newWords + d.reviews),
    1
  );
  let planCumulative = 0;
  let factCumulative = 0;
  const points = activity.map((d, i) => {
    planCumulative += dailyGoal;
    factCumulative += d.newWords + d.reviews;
    return { ...d, plan: planCumulative, fact: factCumulative, day: i };
  });
  const lastFact = points[points.length - 1]?.fact ?? 0;
  const avgPerDay = activity.length > 0 ? lastFact / activity.length : 0;
  const forecastEnd = avgPerDay * activity.length;

  return (
    <div className="plan-fact-chart">
      <div className="plan-fact-bars">
        {activity.map((d) => {
          const total = d.newWords + d.reviews;
          const h = Math.round((total / maxVal) * 100);
          const planH = Math.round((dailyGoal / maxVal) * 100);
          return (
            <div key={d.dateString} className="plan-fact-col">
              <div className="plan-fact-bar-wrap">
                <div className="plan-bar" style={{ height: `${planH}%` }} title={t('progress.plan')} />
                <div className="fact-bar" style={{ height: `${h}%` }} title={`${total}`} />
              </div>
              <span className="plan-fact-label">{d.dateString.slice(5)}</span>
            </div>
          );
        })}
      </div>
      <div className="plan-fact-legend">
        <span><span className="legend-plan" /> {t('progress.plan')}</span>
        <span><span className="legend-fact" /> {t('progress.fact')}</span>
        {avgPerDay < dailyGoal && (
          <span className="muted">{t('progress.forecast', { count: Math.round(forecastEnd) })}</span>
        )}
      </div>
    </div>
  );
}

export default function ProgressScreen() {
  useStore();
  const [streak, setStreak] = useState(0);
  const [todayReviews, setTodayReviews] = useState(0);
  const [activity, setActivity] = useState<DailyActivity[]>([]);
  const [weeklyGrowth, setWeeklyGrowth] = useState(0);

  const dailyGoal = store.getDailyWordGoal();
  const xp = store.getXp();
  const artists = artistsOfActiveTheme();
  const levelIdx = currentLevelIndex(xp, artists);

  useEffect(() => {
    let alive = true;
    store.streakCount().then((v) => alive && setStreak(v));
    store.todayReviewsCount().then((v) => alive && setTodayReviews(v));
    store.dailyActivity(14).then((v) => alive && setActivity(v));
    store.weeklyGrowth().then((v) => alive && setWeeklyGrowth(v));
    return () => {
      alive = false;
    };
  }, [store.getSnapshot()]);

  const total = store.totalWordsCount();
  const mastered = store.masteredWordsCount();
  const due = store.dueWords().length;
  const words = store.getWords();
  const categories = store.getCategories();

  const topCategories = useMemo(() => {
    return categories
      .map((c) => ({ category: c, count: words.filter((w) => w.categoryId === c.id).length }))
      .filter((x) => x.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [categories, words]);

  const masteredByCat = store.masteredByCategory();

  return (
    <div>
      <ScreenHeader title={t('tab.progress')} subtitle="진행" />

      <div className="proverb-card">
        <p className="proverb-kor">티끌 모아 태산</p>
        <p className="proverb-rus">{t('progress.proverb')}</p>
      </div>

      <ProgressGroup title={t('progress.boards')}>
        <div className="leaderboard-grid">
          <div className="leaderboard-card card-flat">
            <span className="leaderboard-num">{total}</span>
            <span className="leaderboard-label">{t('home.stats.words')}</span>
            <span className="leaderboard-sub">{t('progress.weeklyGrowth', { pct: weeklyGrowth })}</span>
          </div>
          <div className="leaderboard-card card-flat">
            <span className="leaderboard-num">{mastered}</span>
            <span className="leaderboard-label">{t('progress.mastered')}</span>
          </div>
          <div className="leaderboard-card card-flat">
            <span className="leaderboard-num">{due}</span>
            <span className="leaderboard-label">{t('progress.dueToday')}</span>
          </div>
          <div className="leaderboard-card card-flat">
            <span className="leaderboard-num">{streak}</span>
            <span className="leaderboard-label">{t('progress.streakDays')}</span>
          </div>
          <div className="leaderboard-card card-flat">
            <span className="leaderboard-num">{xp}</span>
            <span className="leaderboard-label">XP</span>
            <span className="leaderboard-sub">{t('progress.xpRank', { level: levelIdx + 1 })}</span>
          </div>
          <div className="leaderboard-card card-flat">
            <span className="leaderboard-num">{todayReviews}</span>
            <span className="leaderboard-label">{t('progress.today')}</span>
            <span className="leaderboard-sub">{t('progress.goal', { count: dailyGoal })}</span>
          </div>
        </div>
      </ProgressGroup>

      <ProgressGroup title={t('progress.planFact')}>
        <PlanFactChart activity={activity} dailyGoal={dailyGoal} />
      </ProgressGroup>

      {topCategories.length > 0 && (
        <ProgressGroup title={t('progress.topCategories')} list>
          <div className="cat-breakdown">
            {topCategories.map(({ category, count }) => (
              <div key={category.id} className="cat-row card-flat">
                <span
                  className="cat-emoji"
                  style={{ backgroundColor: `${colorFromHex(category.colorHex)}20` }}
                >
                  {category.emoji}
                </span>
                <span>{category.name}</span>
                <span className="cat-count">{count}</span>
              </div>
            ))}
          </div>
        </ProgressGroup>
      )}

      {masteredByCat.length > 0 && (
        <ProgressGroup title={t('progress.byCat')} list>
          <div className="cat-breakdown">
            {masteredByCat.map(({ categoryName, count }) => (
              <div key={categoryName} className="cat-row card-flat">
                <span className="cat-emoji cat-emoji-success">
                  <WIcon name="check-lg" size={16} style={{ color: 'var(--success-strong)' }} />
                </span>
                <span>{categoryName}</span>
                <span className="cat-count">{count}</span>
              </div>
            ))}
          </div>
        </ProgressGroup>
      )}
    </div>
  );
}
