import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import { t } from '../domain/i18n';
import { tabSubtitle, tL } from '../domain/learning-ui';
import WIcon from '../ui/WIcon';
import type { DailyActivity } from '../types';
import { artistsOfActiveTheme } from '../domain/sources';
import { currentLevelIndex } from '../domain/gamification';
import {
  EMPTY_WORD_BUCKET_COUNTS,
  type DayActivityIntensity,
  type WordBucketCounts,
} from '../db/repository';
import MasteredProgressArc from '../components/MasteredProgressArc';
import VocabStateDonut from '../components/VocabStateDonut';
import ActivityHeatmap from '../components/ActivityHeatmap';
import CategoryBarChart from '../components/CategoryBarChart';
import ProverbVictoryPhoto from '../components/ProverbVictoryPhoto';

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
          const planH = Math.round((dailyGoal / maxVal) * 100);
          const reviewsH = Math.round((d.reviews / maxVal) * 100);
          const newH = Math.round((d.newWords / maxVal) * 100);
          const tip = t('progress.chart.dayBreakdown', {
            reviews: d.reviews,
            newWords: d.newWords,
          });
          return (
            <div key={d.dateString} className="plan-fact-col">
              <div className="plan-fact-bar-wrap">
                <div className="plan-bar" style={{ height: `${planH}%` }} title={t('progress.plan')} />
                <div className="fact-bar-stack" title={tip}>
                  {d.reviews > 0 && (
                    <div className="fact-bar fact-bar--reviews" style={{ height: `${reviewsH}%` }} />
                  )}
                  {d.newWords > 0 && (
                    <div className="fact-bar fact-bar--new" style={{ height: `${newH}%` }} />
                  )}
                  {total === 0 && <div className="fact-bar fact-bar--empty" />}
                </div>
              </div>
              <span className="plan-fact-label">{d.dateString.slice(5)}</span>
            </div>
          );
        })}
      </div>
      <div className="plan-fact-legend">
        <span><span className="legend-plan" /> {t('progress.plan')}</span>
        <span><span className="legend-fact-reviews" /> {t('progress.chart.legendReviews')}</span>
        <span><span className="legend-fact-new" /> {t('progress.chart.legendNew')}</span>
        {avgPerDay < dailyGoal && (
          <span className="muted">{t('progress.forecast', { count: Math.round(forecastEnd) })}</span>
        )}
      </div>
    </div>
  );
}

const BOARD_ICONS: Record<string, string> = {
  words: 'journal-text',
  mastered: 'check-circle',
  due: 'clock',
  streak: 'fire',
  xp: 'lightning-charge',
  today: 'calendar-check',
};

export default function ProgressScreen() {
  useStore();
  const [streak, setStreak] = useState(0);
  const [todayReviews, setTodayReviews] = useState(0);
  const [activity, setActivity] = useState<DailyActivity[]>([]);
  const [weeklyGrowth, setWeeklyGrowth] = useState(0);
  const [buckets, setBuckets] = useState<WordBucketCounts>(EMPTY_WORD_BUCKET_COUNTS);
  const [intensity, setIntensity] = useState<DayActivityIntensity[]>([]);

  const dailyGoal = store.getDailyWordGoal();
  const xp = store.getXp();
  const artists = artistsOfActiveTheme();
  const levelIdx = currentLevelIndex(xp, artists);
  const snapshot = store.getSnapshot();

  useEffect(() => {
    let alive = true;
    store.streakCount().then((v) => alive && setStreak(v));
    store.todayReviewsCount().then((v) => alive && setTodayReviews(v));
    store.dailyActivity(14).then((v) => alive && setActivity(v));
    store.weeklyGrowth().then((v) => alive && setWeeklyGrowth(v));
    store.wordBucketCounts().then((v) => alive && setBuckets(v));
    store.activityIntensity(14).then((v) => alive && setIntensity(v));
    return () => {
      alive = false;
    };
  }, [snapshot]);

  const total = store.totalWordsCount();
  const mastered = store.masteredWordsCount();
  const due = store.dueWords().length;
  const words = store.getWords();
  const categories = store.getCategories();

  const topCategories = useMemo(() => {
    return categories
      .map((c) => ({
        category: c,
        count: words.filter((w) => w.categoryIds?.includes(c.id)).length,
      }))
      .filter((x) => x.count > 0)
      .sort((a, b) => b.count - a.count)
      .slice(0, 5);
  }, [categories, words]);

  const masteredByCat = store.masteredByCategory();
  const lang = store.getLearningLanguage();

  const boards: { id: keyof typeof BOARD_ICONS; num: number; label: string; sub?: string }[] = [
    {
      id: 'words',
      num: total,
      label: t('home.stats.words'),
      sub: t('progress.weeklyGrowth', { pct: weeklyGrowth }),
    },
    { id: 'mastered', num: mastered, label: t('progress.mastered') },
    { id: 'due', num: due, label: t('progress.dueToday') },
    {
      id: 'streak',
      num: streak,
      label: t('progress.streakDays'),
      sub: t('progress.streakHint'),
    },
    {
      id: 'xp',
      num: xp,
      label: 'HP',
      sub: t('progress.xpRank', { level: levelIdx + 1 }),
    },
    {
      id: 'today',
      num: todayReviews,
      label: t('progress.today'),
      sub: t('progress.goal', { count: dailyGoal }),
    },
  ];

  return (
    <div className="progress-dashboard">
      <ScreenHeader title={t('tab.progress')} subtitle={tabSubtitle('progress', lang)} />

      <div className="proverb-card">
        <ProverbVictoryPhoto />
        <div className="proverb-card-text">
          <p className="proverb-kor">{tL('progress.proverb', lang)}</p>
          <p className="proverb-rus">{t('progress.proverb')}</p>
        </div>
      </div>

      <ProgressGroup title={t('progress.chart.heroTitle')}>
        <MasteredProgressArc mastered={mastered} total={total} />
      </ProgressGroup>

      <ProgressGroup title={t('progress.chart.vocabTitle')}>
        <VocabStateDonut counts={buckets} />
        <p className="progress-chart-hint muted">{t('progress.chart.vocabHint')}</p>
      </ProgressGroup>

      <ProgressGroup title={t('progress.chart.activityTitle')}>
        <ActivityHeatmap days={intensity} streak={streak} />
      </ProgressGroup>

      <ProgressGroup title={t('progress.boards')}>
        <div className="leaderboard-grid leaderboard-grid--dashboard">
          {boards.map(({ id, num, label, sub }) => (
            <div key={id} className="leaderboard-card card-flat">
              <WIcon name={BOARD_ICONS[id]} size={16} className="leaderboard-icon" />
              <span className="leaderboard-num">{num}</span>
              <span className="leaderboard-label">{label}</span>
              {sub && <span className="leaderboard-sub">{sub}</span>}
            </div>
          ))}
        </div>
      </ProgressGroup>

      <ProgressGroup title={t('progress.planFact')}>
        <PlanFactChart activity={activity} dailyGoal={dailyGoal} />
      </ProgressGroup>

      {topCategories.length > 0 && (
        <ProgressGroup title={t('progress.topCategories')}>
          <CategoryBarChart items={topCategories} />
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
