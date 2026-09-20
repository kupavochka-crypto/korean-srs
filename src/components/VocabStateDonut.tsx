import { t } from '../domain/i18n';
import type { WordBucketCounts } from '../db/repository';

interface Segment {
  key: keyof WordBucketCounts;
  color: string;
  labelKey: string;
}

const SEGMENTS: Segment[] = [
  { key: 'new', color: 'var(--text-tertiary)', labelKey: 'progress.chart.vocabNew' },
  { key: 'learning', color: 'var(--warning)', labelKey: 'progress.chart.vocabLearning' },
  { key: 'matureNow', color: 'var(--blue)', labelKey: 'progress.chart.vocabMature' },
  { key: 'masteredEver', color: 'var(--success-strong)', labelKey: 'progress.chart.vocabMastered' },
];

interface Props {
  counts: WordBucketCounts;
  size?: number;
}

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

export default function VocabStateDonut({ counts, size = 120 }: Props) {
  const total = SEGMENTS.reduce((sum, s) => sum + counts[s.key], 0);
  const stroke = size * 0.18;
  const radius = (size - stroke) / 2;
  const cx = size / 2;
  const cy = size / 2;

  if (total === 0) {
    return (
      <div className="vocab-donut vocab-donut--empty">
        <p className="muted">{t('progress.chart.vocabEmpty')}</p>
      </div>
    );
  }

  let angle = 0;
  const slices = SEGMENTS.filter((s) => counts[s.key] > 0).map((s) => {
    const sweep = (counts[s.key] / total) * 360;
    const start = angle;
    angle += sweep;
    return { ...s, value: counts[s.key], start, end: angle };
  });

  const ariaParts = SEGMENTS.map((s) => `${t(s.labelKey)}: ${counts[s.key]}`).join(', ');

  return (
    <div className="vocab-donut">
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
              key={s.key}
              d={describeArc(cx, cy, radius, s.start, s.end)}
              fill="none"
              stroke={s.color}
              strokeWidth={stroke}
              strokeLinecap="butt"
            />
          ))
        )}
        <text x={cx} y={cy + 4} className="vocab-donut-center" textAnchor="middle" fontSize={size * 0.2}>
          {total}
        </text>
      </svg>
      <ul className="vocab-donut-legend">
        {SEGMENTS.map((s) => (
          <li key={s.key} className="vocab-donut-legend-row">
            <span className="vocab-donut-dot" style={{ background: s.color }} />
            <span className="vocab-donut-label">{t(s.labelKey)}</span>
            <span className="vocab-donut-value">{counts[s.key]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
