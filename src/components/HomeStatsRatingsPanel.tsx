import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import type { CategoryRatingCounts } from '../db/repository';
import { EMPTY_CATEGORY_RATING_COUNTS } from '../db/repository';
import CategoryRatingBreakdown, { categoryRatingTotal } from './CategoryRatingBreakdown';

export default function HomeStatsRatingsPanel() {
  useStore();
  const [counts, setCounts] = useState<CategoryRatingCounts>(EMPTY_CATEGORY_RATING_COUNTS);
  const snapshot = store.getSnapshot();

  useEffect(() => {
    let alive = true;
    void store.todayRatingCounts().then((v) => {
      if (alive) setCounts(v);
    });
    return () => {
      alive = false;
    };
  }, [snapshot]);

  const total = categoryRatingTotal(counts);
  const hardCount = counts.again + counts.hard;

  return (
    <div className="activity-stats-body activity-stats-body--stacked">
      <div className="activity-stats-panel">
        <h3 className="activity-stats-panel-title">{t('home.stats.ratingsTitle')}</h3>
        <p className="activity-stats-panel-sub">
          {total > 0
            ? t('home.stats.ratingsTotal', { count: total })
            : t('home.stats.ratingsEmpty')}
        </p>
        {total > 0 ? (
          <>
            <CategoryRatingBreakdown counts={counts} variant="bars" />
            {hardCount > 0 && (
              <p className="activity-stats-insight">
                {t('home.stats.ratingsInsight', { hard: hardCount, total })}
              </p>
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
