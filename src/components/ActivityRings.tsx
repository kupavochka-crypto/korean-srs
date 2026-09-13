import type { ReactNode } from 'react';

export interface ActivityRingDef {
  progress: number;
  color: string;
  trackColor?: string;
}

interface Props {
  rings: ActivityRingDef[];
  size?: number;
  center?: ReactNode;
  className?: string;
}

export default function ActivityRings({ rings, size = 120, center, className = '' }: Props) {
  const stroke = size * 0.072;
  const gap = stroke * 0.55;
  const cx = size / 2;
  const cy = size / 2;
  const innerIdx = Math.max(0, rings.length - 1);
  const innerRingR = size / 2 - stroke / 2 - innerIdx * (stroke + gap);
  const centerHole = Math.max(0, (innerRingR - stroke / 2 - 4) * 2);

  return (
    <div className={`activity-rings ${className}`.trim()} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        {rings.map((ring, i) => {
          const radius = size / 2 - stroke / 2 - i * (stroke + gap);
          const circumference = 2 * Math.PI * radius;
          const clamped = Math.max(0, Math.min(1, ring.progress));
          const dash = circumference * clamped;
          return (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={ring.trackColor ?? 'var(--track)'}
                strokeWidth={stroke}
                opacity={0.55}
              />
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={ring.color}
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={`${dash} ${circumference - dash}`}
                transform={`rotate(-90 ${cx} ${cy})`}
                className="activity-ring-progress"
              />
            </g>
          );
        })}
      </svg>
      {center ? (
        <div
          className="activity-rings-center"
          style={{ width: centerHole, height: centerHole }}
        >
          {center}
        </div>
      ) : null}
    </div>
  );
}
