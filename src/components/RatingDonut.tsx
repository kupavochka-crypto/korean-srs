import { SRS_RATINGS } from '../domain/srs-engine';
import { t } from '../domain/i18n';
import type { CategoryRatingCounts } from '../db/repository';
import { categoryRatingTotal } from './CategoryRatingBreakdown';

const RATING_COLORS: Record<number, string> = {
  1: 'var(--red)',
  2: 'var(--warning)',
  3: 'var(--success)',
  4: 'var(--blue)',
};

const RATING_COUNT_KEYS: Record<number, keyof CategoryRatingCounts> = {
  1: 'again',
  2: 'hard',
  3: 'good',
  4: 'easy',
};

const RATING_I18N: Record<number, string> = {
  1: 'onboard.rating.again',
  2: 'onboard.rating.hard',
  3: 'onboard.rating.good',
  4: 'onboard.rating.easy',
};

function describeArc(
  cx: number,
  cy: number,
  r: number,
  startAngle: number,
  endAngle: number
): string {
  const start = polar(cx, cy, r, endAngle);
  const end = polar(cx, cy, r, startAngle);
  const large = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${start.x} ${start.y} A ${r} ${r} 0 ${large} 0 ${end.x} ${end.y}`;
}

function polar(cx: number, cy: number, r: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: cx + r * Math.cos(rad), y: cy + r * Math.sin(rad) };
}

interface Props {
  counts: CategoryRatingCounts;
  size?: number;
}

export default function RatingDonut({ counts, size = 100 }: Props) {
  const total = categoryRatingTotal(counts);
  const stroke = size * 0.18;
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;

  if (total === 0) {
    return (
      <div className="rating-donut rating-donut--empty">
        <p className="muted">{t('home.stats.ratingsEmpty')}</p>
      </div>
    );
  }

  let angle = 0;
  const slices = SRS_RATINGS.map((rating) => {
    const key = RATING_COUNT_KEYS[rating.value];
    const value = counts[key];
    const sweep = (value / total) * 360;
    const start = angle;
    angle += sweep;
    return {
      value: rating.value,
      count: value,
      color: RATING_COLORS[rating.value],
      labelKey: RATING_I18N[rating.value],
      start,
      end: angle,
    };
  }).filter((s) => s.count > 0);

  const ariaParts = SRS_RATINGS.map((r) => {
    const key = RATING_COUNT_KEYS[r.value];
    return `${t(RATING_I18N[r.value])}: ${counts[key]}`;
  }).join(', ');

  return (
    <div className="rating-donut">
      <svg
        width={size}
        height={size}
        className="vocab-donut-chart"
        role="img"
        aria-label={ariaParts}
      >
        {slices.length === 1 ? (
          <circle
            cx={cx}
            cy={cy}
            r={radius}
            fill="none"
            stroke={slices[0].color}
            strokeWidth={stroke}
          />
        ) : (
          slices.map((s) => (
            <path
              key={s.value}
              d={describeArc(cx, cy, radius, s.start, s.end)}
              fill="none"
              stroke={s.color}
              strokeWidth={stroke}
            />
          ))
        )}
        <text x={cx} y={cy + 4} className="vocab-donut-center" textAnchor="middle" fontSize={size * 0.22}>
          {total}
        </text>
      </svg>
      <ul className="vocab-donut-legend rating-donut-legend">
        {SRS_RATINGS.map((rating) => {
          const key = RATING_COUNT_KEYS[rating.value];
          return (
            <li key={rating.value} className="vocab-donut-legend-row">
              <span className="vocab-donut-dot" style={{ background: RATING_COLORS[rating.value] }} />
              <span className="vocab-donut-label">{t(RATING_I18N[rating.value])}</span>
              <span className="vocab-donut-value">{counts[key]}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
