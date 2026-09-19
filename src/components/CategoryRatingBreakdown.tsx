import { SRS_RATINGS } from '../domain/srs-engine';
import { t } from '../domain/i18n';
import type { CategoryRatingCounts } from '../db/repository';

const RATING_COLORS: Record<number, string> = {
  1: 'var(--red)',
  2: 'var(--warning)',
  3: 'var(--success)',
  4: 'var(--blue)',
};

const RATING_I18N: Record<number, string> = {
  1: 'onboard.rating.again',
  2: 'onboard.rating.hard',
  3: 'onboard.rating.good',
  4: 'onboard.rating.easy',
};

const RATING_COUNT_KEYS: Record<number, keyof CategoryRatingCounts> = {
  1: 'again',
  2: 'hard',
  3: 'good',
  4: 'easy',
};

interface Props {
  counts: CategoryRatingCounts;
  variant?: 'compact' | 'bars';
}

export function categoryRatingTotal(counts: CategoryRatingCounts): number {
  return counts.again + counts.hard + counts.good + counts.easy;
}

export default function CategoryRatingBreakdown({ counts, variant = 'compact' }: Props) {
  const total = categoryRatingTotal(counts);

  if (variant === 'bars') {
    return (
      <div className="category-rating-breakdown category-rating-breakdown--bars">
        {SRS_RATINGS.map((rating) => {
          const count = counts[RATING_COUNT_KEYS[rating.value]];
          const pct = total > 0 ? Math.round((count / total) * 100) : 0;
          return (
            <div key={rating.value} className="category-rating-bar-row">
              <div className="category-rating-bar-head">
                <span className="category-rating-bar-label">
                  <span
                    className="category-rating-dot"
                    style={{ background: RATING_COLORS[rating.value] }}
                  />
                  {t(RATING_I18N[rating.value])}
                </span>
                <span className="category-rating-bar-meta">
                  {count} · {pct}%
                </span>
              </div>
              <div className="category-rating-bar">
                <div
                  className="category-rating-bar-fill"
                  style={{
                    width: `${pct}%`,
                    background: RATING_COLORS[rating.value],
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div className="category-rating-breakdown">
      {SRS_RATINGS.map((rating) => (
        <div key={rating.value} className="category-rating-row">
          <span
            className="category-rating-dot"
            style={{ background: RATING_COLORS[rating.value] }}
          />
          <span className="category-rating-label">{t(RATING_I18N[rating.value])}</span>
          <span className="category-rating-count">{counts[RATING_COUNT_KEYS[rating.value]]}</span>
        </div>
      ))}
    </div>
  );
}
