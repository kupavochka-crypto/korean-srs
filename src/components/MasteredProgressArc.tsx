import { t } from '../domain/i18n';

interface Props {
  mastered: number;
  total: number;
  size?: number;
}

export default function MasteredProgressArc({ mastered, total, size = 160 }: Props) {
  const stroke = size * 0.07;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = total > 0 ? mastered / total : 0;
  const clamped = Math.max(0, Math.min(1, pct));
  const dash = circumference * clamped;
  const pctLabel = Math.round(clamped * 100);
  const remaining = Math.max(0, total - mastered);

  const ariaLabel = t('progress.chart.masteredAria', {
    pct: pctLabel,
    mastered,
    total,
  });

  return (
    <div className="progress-hero">
      <svg
        width={size}
        height={size}
        className="progress-hero-arc"
        role="img"
        aria-label={ariaLabel}
        style={{ ['--circ' as string]: circumference }}
      >
        <circle
          className="progress-hero-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="var(--surface)"
          strokeWidth={stroke}
        />
        <circle
          className="progress-hero-fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x={size / 2} y={size / 2 - 6} className="progress-hero-pct" fontSize={size * 0.22}>
          {pctLabel}%
        </text>
        <text x={size / 2} y={size / 2 + size * 0.14} className="progress-hero-caption" fontSize={size * 0.09}>
          {t('progress.chart.masteredCaption')}
        </text>
      </svg>
      <div className="progress-hero-meta">
        <span className="progress-hero-count">
          {t('progress.chart.masteredCount', { mastered, total })}
        </span>
        {total > 0 && remaining > 0 && (
          <span className="progress-hero-remaining muted">
            {t('progress.chart.inProgress', { count: remaining })}
          </span>
        )}
      </div>
    </div>
  );
}
