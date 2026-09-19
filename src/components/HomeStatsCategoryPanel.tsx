import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import type { CategoryRatingCounts } from '../db/repository';
import { EMPTY_CATEGORY_RATING_COUNTS } from '../db/repository';
import ActivityRings from './ActivityRings';
import CategoryRatingBreakdown, { categoryRatingTotal } from './CategoryRatingBreakdown';

function ringSize(): number {
  if (typeof window !== 'undefined' && window.innerWidth <= 390) return 112;
  return 120;
}

export default function HomeStatsCategoryPanel() {
  useStore();
  const categoryId = store.getLastReviewCategoryId();
  const [counts, setCounts] = useState<CategoryRatingCounts>(EMPTY_CATEGORY_RATING_COUNTS);
  const snapshot = store.getSnapshot();

  useEffect(() => {
    if (!categoryId) {
      setCounts(EMPTY_CATEGORY_RATING_COUNTS);
      return;
    }
    let alive = true;
    void store.categoryRatingCountsToday(categoryId).then((v) => {
      if (alive) setCounts(v);
    });
    return () => {
      alive = false;
    };
  }, [categoryId, snapshot]);

  if (!categoryId) {
    return (
      <div className="activity-stats-body activity-stats-body--stacked">
        <div className="activity-stats-panel activity-stats-panel--empty">
          <p className="activity-stats-panel-title">{t('home.stats.categoryMissing')}</p>
          <p className="muted activity-stats-panel-sub">{t('home.stats.categoryMissingHint')}</p>
          <button
            type="button"
            className="secondary-btn mt12"
            onClick={() => store.selectTab('dictionary')}
          >
            {t('home.stats.categoryOpenDictionary')}
          </button>
        </div>
      </div>
    );
  }

  const categoryName = store.categoryName(categoryId);
  const reviewedToday = categoryRatingTotal(counts);
  const dueCount = store.dueWordsInCategory(categoryId).length;
  const difficultCount = store.difficultWordsInCategory(categoryId).length;
  const dictionaryWordCount = store.categoryWordIds(categoryId).size;
  const sessionWordCount = store.getLastReviewCategoryWordCount();
  const wordCount = Math.max(dictionaryWordCount, sessionWordCount, reviewedToday);
  const reviewTotal = reviewedToday + dueCount;
  const reviewProgress = reviewTotal > 0 ? Math.min(1, reviewedToday / reviewTotal) : 0;
  const categoryDoneToday = dueCount === 0 && reviewedToday > 0;
  const allClear = dueCount === 0 && difficultCount === 0;
  const hardCount = counts.again + counts.hard;
  const size = ringSize();

  return (
    <div className="activity-stats-body activity-stats-body--stacked">
      <div className="activity-stats-panel">
        <h3 className="activity-stats-panel-title">{categoryName}</h3>

        <div className="activity-stats-category-progress">
          <ActivityRings
            size={size}
            rings={[
              {
                progress: categoryDoneToday ? 1 : reviewProgress,
                color: 'var(--red)',
                trackColor: 'var(--red-soft)',
              },
            ]}
          />

          <div className="activity-stats-category-legend">
            <p className="activity-stats-category-summary">
              {reviewedToday > 0
                ? t('home.stats.categoryTodayCards', { count: reviewedToday })
                : allClear
                  ? t('home.stats.categoryAllClear')
                  : t('home.stats.lastCategoryEmpty')}
            </p>
            <p className="activity-stats-category-detail">
              {t('home.stats.categoryInDeck', { count: wordCount })}
              {dueCount > 0 && (
                <>
                  {' · '}
                  {t('home.stats.categoryDue', { count: dueCount })}
                </>
              )}
              {difficultCount > 0 && (
                <>
                  {' · '}
                  {t('home.stats.categoryDifficult', { count: difficultCount })}
                </>
              )}
            </p>
            {reviewedToday > 0 && (
              <p className="activity-stats-category-progress-label">
                {Math.round(reviewProgress * 100)}% {t('home.stats.reviewedToday')}
              </p>
            )}
          </div>
        </div>

        {reviewedToday > 0 && (
          <>
            <CategoryRatingBreakdown counts={counts} variant="bars" />
            {hardCount > 0 && (
              <p className="activity-stats-insight">
                {t('home.stats.ratingsInsight', { hard: hardCount, total: reviewedToday })}
              </p>
            )}
          </>
        )}

        <button
          type="button"
          className="primary-btn activity-stats-category-cta"
          onClick={() =>
            void store.startCategoryReview(
              categoryId,
              dueCount > 0 ? 'due' : 'all',
              { fromDictionary: true }
            )
          }
        >
          {dueCount > 0
            ? t('home.stats.categoryContinue')
            : t('home.stats.categoryReviewAll')}
        </button>
        {difficultCount > 0 && (
          <button
            type="button"
            className="secondary-btn activity-stats-category-cta"
            onClick={() => void store.startCategoryDifficultReview(categoryId)}
          >
            {t('cards.session.difficultInCategory', { count: difficultCount })}
          </button>
        )}
      </div>
    </div>
  );
}
