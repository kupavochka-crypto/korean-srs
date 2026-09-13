import { t } from '../domain/i18n';
import type { ModeDayCounts } from '../db/repository';
import ActivityRings from './ActivityRings';

interface Props {
  dueCount: number;
  dailyGoal: number;
  today: ModeDayCounts;
  yesterday: ModeDayCounts;
}

function miniGoal(dailyGoal: number): number {
  return Math.max(5, Math.round(dailyGoal / 2));
}

function ringSize(): number {
  if (typeof window !== 'undefined' && window.innerWidth <= 390) return 120;
  return 132;
}

export default function HomeActivityStats({ dueCount, dailyGoal, today, yesterday }: Props) {
  const quizGoal = miniGoal(dailyGoal);
  const listenGoal = quizGoal;

  const reviewTotal = today.srs + dueCount;
  const reviewProgress = reviewTotal > 0 ? Math.min(1, today.srs / reviewTotal) : 1;
  const quizProgress = Math.min(1, today.quiz / quizGoal);
  const listenProgress = Math.min(1, today.listen / listenGoal);

  const totalToday = today.srs + today.quiz + today.listen;
  const totalYesterday = yesterday.srs + yesterday.quiz + yesterday.listen;
  const delta = totalToday - totalYesterday;

  let motivation = t('home.stats.motivationEqual');
  if (totalToday > totalYesterday) {
    motivation = t('home.stats.motivationBetter');
  } else if (totalToday < totalYesterday) {
    motivation = t('home.stats.motivationCatchUp', { n: totalYesterday });
  }

  const size = ringSize();

  return (
    <div className="activity-stats-card card">
      <ActivityRings
        size={size}
        rings={[
          { progress: reviewProgress, color: 'var(--red)', trackColor: 'var(--red-soft)' },
          { progress: quizProgress, color: 'var(--accent)', trackColor: 'var(--accent-soft, var(--track))' },
          { progress: listenProgress, color: 'var(--charcoal)', trackColor: 'var(--charcoal-soft)' },
        ]}
        center={
          <div className="activity-center-stack">
            <span className="activity-center-value">{dueCount}</span>
            <span className="activity-center-label">{t('home.stats.toReviewShort')}</span>
          </div>
        }
      />
      <div className="activity-legend">
        <p className="activity-competition-summary">
          {t('home.stats.todayTotal', { count: totalToday, delta: delta >= 0 ? `+${delta}` : String(delta) })}
        </p>
        <p className="activity-competition-motivation">{motivation}</p>
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--red" />
          <span className="activity-legend-text">
            {t('home.stats.modeCards')} · {today.srs}
            <span className="activity-legend-sub">
              {Math.round(reviewProgress * 100)}% {t('home.stats.reviewedToday')}
            </span>
          </span>
        </div>
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--accent" />
          <span className="activity-legend-text">
            {t('home.stats.modeQuiz')} · {today.quiz}
            <span className="activity-legend-sub">
              {Math.round(quizProgress * 100)}% · {t('home.stats.miniGoal', { count: quizGoal })}
            </span>
          </span>
        </div>
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--charcoal" />
          <span className="activity-legend-text">
            {t('home.stats.modeListen')} · {today.listen}
            <span className="activity-legend-sub">
              {Math.round(listenProgress * 100)}% · {t('home.stats.miniGoal', { count: listenGoal })}
            </span>
          </span>
        </div>
        <p className="activity-competition-breakdown">
          {t('home.stats.modeBreakdown', {
            cards: today.srs,
            quiz: today.quiz,
            listen: today.listen,
          })}
        </p>
      </div>
    </div>
  );
}
