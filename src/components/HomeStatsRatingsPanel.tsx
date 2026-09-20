import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import type { CategoryRatingCounts } from '../db/repository';
import { EMPTY_CATEGORY_RATING_COUNTS } from '../db/repository';
import CategoryRatingBreakdown, { categoryRatingTotal } from './CategoryRatingBreakdown';
import { saveTrueRetentionMode, storedTrueRetentionMode } from '../domain/settings';

type RatingsMode = 'all' | 'retention';

export default function HomeStatsRatingsPanel() {
  useStore();
  const [counts, setCounts] = useState<CategoryRatingCounts>(EMPTY_CATEGORY_RATING_COUNTS);
  const [mode, setMode] = useState<RatingsMode>(() =>
    storedTrueRetentionMode() ? 'retention' : 'all'
  );
  const snapshot = store.getSnapshot();

  useEffect(() => {
    let alive = true;
    const load =
      mode === 'retention'
        ? store.todayTrueRetentionRatingCounts()
        : store.todayRatingCounts();
    void load.then((v) => {
      if (alive) setCounts(v);
    });
    return () => {
      alive = false;
    };
  }, [snapshot, mode]);

  function selectMode(next: RatingsMode) {
    setMode(next);
    saveTrueRetentionMode(next === 'retention');
  }

  const total = categoryRatingTotal(counts);
  const hardCount = counts.again + counts.hard;

  return (
    <div className="activity-stats-body activity-stats-body--stacked">
      <div className="activity-stats-panel">
        <h3 className="activity-stats-panel-title">{t('home.stats.ratingsTitle')}</h3>
        <div className="activity-stats-ratings-mode">
          <button
            type="button"
            className={`activity-stats-tab ${mode === 'all' ? 'active' : ''}`}
            onClick={() => selectMode('all')}
          >
            {t('home.stats.ratingsModeAll')}
          </button>
          <button
            type="button"
            className={`activity-stats-tab ${mode === 'retention' ? 'active' : ''}`}
            onClick={() => selectMode('retention')}
          >
            {t('home.stats.ratingsModeRetention')}
          </button>
        </div>
        {mode === 'retention' && (
          <p className="activity-stats-insight">{t('home.stats.ratingsRetentionHint')}</p>
        )}
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
