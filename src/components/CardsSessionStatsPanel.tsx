import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import type { CategoryRatingCounts, ModeDayCounts } from '../db/repository';
import { EMPTY_CATEGORY_RATING_COUNTS } from '../db/repository';
import CategoryRatingBreakdown, { categoryRatingTotal } from './CategoryRatingBreakdown';

function emptyCounts(): ModeDayCounts {
  return { srs: 0, quiz: 0, listen: 0 };
}

function StatsSection({ title, counts }: { title: string; counts: ModeDayCounts }) {
  const total = counts.srs + counts.quiz + counts.listen;

  return (
    <div className="cards-session-stats-section card">
      <h3 className="cards-session-stats-title">{title}</h3>
      <p className="cards-session-stats-total">
        {t('cards.session.todayTotal', { count: total })}
      </p>
      <div className="cards-session-stats-rows">
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--red" />
          <span className="activity-legend-text">
            {t('home.stats.modeCards')} · {counts.srs}
          </span>
        </div>
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--accent" />
          <span className="activity-legend-text">
            {t('home.stats.modeQuiz')} · {counts.quiz}
          </span>
        </div>
        <div className="activity-legend-row">
          <span className="activity-legend-dot activity-legend-dot--charcoal" />
          <span className="activity-legend-text">
            {t('home.stats.modeListen')} · {counts.listen}
          </span>
        </div>
      </div>
    </div>
  );
}

interface Props {
  categoryId: string | null;
}

export default function CardsSessionStatsPanel({ categoryId }: Props) {
  useStore();
  const [total, setTotal] = useState(emptyCounts());
  const [category, setCategory] = useState(emptyCounts());
  const [categoryRatings, setCategoryRatings] = useState<CategoryRatingCounts>(
    EMPTY_CATEGORY_RATING_COUNTS
  );
  const viewMode = store.getCardsViewMode();
  const snapshot = store.getSnapshot();

  useEffect(() => {
    if (viewMode !== 'stats') return;
    let alive = true;
    void store.todayModeCounts().then((v) => {
      if (alive) setTotal(v);
    });
    if (categoryId) {
      void store.categoryModeCountsToday(categoryId).then((v) => {
        if (alive) setCategory(v);
      });
      void store.categoryRatingCountsToday(categoryId).then((v) => {
        if (alive) setCategoryRatings(v);
      });
    } else {
      setCategory(emptyCounts());
      setCategoryRatings(EMPTY_CATEGORY_RATING_COUNTS);
    }
    return () => {
      alive = false;
    };
  }, [categoryId, viewMode, snapshot]);

  const categoryName = categoryId ? store.categoryName(categoryId) : '';
  const difficultCount = categoryId ? store.difficultWordsInCategory(categoryId).length : 0;
  const categoryRatingSum = categoryRatingTotal(categoryRatings);

  return (
    <div className="cards-session-stats">
      <StatsSection title={t('cards.session.statsTotal')} counts={total} />
      {categoryId && (
        <>
          <StatsSection
            title={t('cards.session.statsCategory', { name: categoryName })}
            counts={category}
          />
          <div className="cards-session-stats-section card">
            <h3 className="cards-session-stats-title">{t('cards.session.categoryRatings')}</h3>
            {categoryRatingSum > 0 ? (
              <CategoryRatingBreakdown counts={categoryRatings} />
            ) : (
              <p className="muted cards-session-stats-empty">{t('home.stats.lastCategoryEmpty')}</p>
            )}
          </div>
          {difficultCount > 0 ? (
            <div className="btn-row btn-row--auto">
              <button
                type="button"
                className="primary-btn"
                onClick={() => void store.startCategoryDifficultReview(categoryId)}
              >
                {t('cards.session.difficultInCategory', { count: difficultCount })}
              </button>
            </div>
          ) : (
            <p className="muted cards-session-stats-empty">{t('cards.session.noDifficultInCategory')}</p>
          )}
        </>
      )}
    </div>
  );
}
