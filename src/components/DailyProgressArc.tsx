import { t } from '../domain/i18n';

interface Props {
  value: number;
  max: number;
  size?: number;
}

export default function DailyProgressArc({ value, max, size = 120 }: Props) {
  const stroke = size * 0.07;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const pct = max > 0 ? value / max : 0;
  const clamped = Math.max(0, Math.min(1, pct));
  const dash = circumference * clamped;
  const pctLabel = Math.round(clamped * 100);

  const ariaLabel = t('home.stats.dailyProgressAria', {
    pct: pctLabel,
    value,
    max,
  });

  return (
    <div className="daily-progress-arc">
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
          className="progress-hero-fill daily-progress-arc-fill"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          strokeWidth={stroke}
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text x={size / 2} y={size / 2 - 4} className="progress-hero-pct" fontSize={size * 0.22}>
          {pctLabel}%
        </text>
        <text x={size / 2} y={size / 2 + size * 0.14} className="progress-hero-caption" fontSize={size * 0.09}>
          {t('home.stats.dailyProgressCaption')}
        </text>
      </svg>
    </div>
  );
}
