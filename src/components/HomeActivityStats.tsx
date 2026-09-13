import { t } from '../domain/i18n';
import ActivityRings from './ActivityRings';

interface Props {
  wordsCount: number;
  dueCount: number;
  dailyGoal: number;
  todayReviews: number;
}

/** Apple Watch–style rings: outer = review progress today, inner = vocabulary growth */
export default function HomeActivityStats({ wordsCount, dueCount, dailyGoal, todayReviews }: Props) {
  const vocabTarget = Math.max(dailyGoal * 10, 50);
  const vocabProgress = Math.min(1, wordsCount / vocabTarget);

  const reviewTotal = todayReviews + dueCount;
  const reviewProgress = reviewTotal > 0 ? Math.min(1, todayReviews / reviewTotal) : 1;

  return (
    <div className="activity-stats-card card">
      <ActivityRings
        size={132}
        rings={[
          { progress: reviewProgress, color: 'var(--red)', trackColor: 'var(--red-soft)' },
          { progress: vocabProgress, color: 'var(--charcoal)', trackColor: 'var(--charcoal-soft)' },
        ]}
        center={
          <div className="activity-center-stack">
            <span className="activity-center-value">{dueCount}</span>
            <span className="activity-center-label">{t('home.stats.toReviewShort')}</span>
          </div>
        }
      />
      <div className="activity-legend">
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--red" />
          <span className="activity-legend-text">
            {t('home.stats.toReview')} · {dueCount}
            <span className="activity-legend-sub">
              {Math.round(reviewProgress * 100)}% {t('home.stats.reviewedToday')}
            </span>
          </span>
        </div>
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--charcoal" />
          <span className="activity-legend-text">
            {t('home.stats.words')} · {wordsCount}
            <span className="activity-legend-sub">
              {t('home.stats.vocabGoal', { count: vocabTarget })}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
