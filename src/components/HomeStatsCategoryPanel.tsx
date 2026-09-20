import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import { colorFromHex } from '../theme/colors';
import type { CategoryRatingCounts } from '../db/repository';
import { EMPTY_CATEGORY_RATING_COUNTS } from '../db/repository';
import CategoryRatingBreakdown, { categoryRatingTotal } from './CategoryRatingBreakdown';
import HomeStatsTabCta from './HomeStatsTabCta';
import type { LearningLanguage } from '../types';

interface Props {
  learningLang: LearningLanguage;
}

export default function HomeStatsCategoryPanel({ learningLang }: Props) {
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
          <HomeStatsTabCta
            label={t('home.stats.categoryOpenDictionary')}
            learningLang={learningLang}
            onClick={() => store.selectTab('dictionary')}
          />
        </div>
      </div>
    );
  }

  const category = store.getCategories().find((c) => c.id === categoryId);
  const categoryName = store.categoryName(categoryId);
  const reviewedToday = categoryRatingTotal(counts);
  const dueCount = store.dueWordsInCategory(categoryId).length;
  const difficultCount = store.difficultWordsInCategory(categoryId).length;
  const dictionaryWordCount = store.categoryWordIds(categoryId).size;
  const sessionWordCount = store.getLastReviewCategoryWordCount();
  const wordCount = Math.max(dictionaryWordCount, sessionWordCount, reviewedToday);
  const reviewTotal = reviewedToday + dueCount;
  const reviewProgress = reviewTotal > 0 ? Math.min(1, reviewedToday / reviewTotal) : 0;
  const hardCount = counts.again + counts.hard;
  const barPct = Math.round(reviewProgress * 100);
  const barColor = category ? colorFromHex(category.colorHex) : 'var(--red)';

  return (
    <div className="activity-stats-body activity-stats-body--stacked">
      <div className="activity-stats-panel">
        <div className="home-stats-category-head">
          {category && (
            <span
              className="category-bar-emoji"
              style={{ backgroundColor: `${barColor}20` }}
            >
              {category.emoji}
            </span>
          )}
          <h3 className="activity-stats-panel-title">{categoryName}</h3>
        </div>

        <div className="home-stats-category-bar-block">
          <div className="category-bar-head">
            <span className="category-bar-name">
              {reviewedToday > 0
                ? t('home.stats.categoryTodayCards', { count: reviewedToday })
                : t('home.stats.lastCategoryEmpty')}
            </span>
            <span className="category-bar-count">{barPct}%</span>
          </div>
          <div className="category-bar-track">
            <div
              className="category-bar-fill"
              style={{ width: `${barPct}%`, backgroundColor: barColor }}
            />
          </div>
        </div>

        <div className="home-stats-category-chips">
          <span className="home-stats-category-chip">
            {t('home.stats.categoryInDeck', { count: wordCount })}
          </span>
          {dueCount > 0 && (
            <span className="home-stats-category-chip">
              {t('home.stats.categoryDue', { count: dueCount })}
            </span>
          )}
          {difficultCount > 0 && (
            <span className="home-stats-category-chip">
              {t('home.stats.categoryDifficult', { count: difficultCount })}
            </span>
          )}
        </div>

        {reviewedToday > 0 && (
          <>
            <CategoryRatingBreakdown counts={counts} variant="compact" />
            {hardCount > 0 && (
              <p className="activity-stats-insight">
                {t('home.stats.ratingsInsight', { hard: hardCount, total: reviewedToday })}
              </p>
            )}
          </>
        )}

        <div className="home-stats-tab-actions">
          <HomeStatsTabCta
            label={
              dueCount > 0
                ? t('home.stats.categoryContinue')
                : t('home.stats.categoryReviewAll')
            }
            learningLang={learningLang}
            onClick={() =>
              void store.startCategoryReview(
                categoryId,
                dueCount > 0 ? 'due' : 'all',
                { fromDictionary: true }
              )
            }
          />
          {difficultCount > 0 && (
            <button
              type="button"
              className="secondary-btn"
              onClick={() => void store.startCategoryDifficultReview(categoryId)}
            >
              {t('cards.session.difficultInCategory', { count: difficultCount })}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
