export interface ActivityRingDef {
  progress: number;
  color: string;
  trackColor?: string;
}

interface Props {
  rings: ActivityRingDef[];
  size?: number;
  className?: string;
}

function ringLayout(size: number, count: number): { stroke: number; gap: number; padding: number } {
  if (count <= 0) return { stroke: 0, gap: 0, padding: size * 0.06 };
  const padding = size * 0.06;
  const gap = Math.max(2, size * 0.02);
  const innerHoleRadius =
    count === 1 ? size * 0.28 : count === 2 ? size * 0.18 : size * 0.12;
  const maxStroke = count === 1 ? size * 0.1 : size * 0.105;
  const minStroke = size * 0.085;
  const available = size / 2 - padding - innerHoleRadius;
  const computed = (available - (count - 1) * gap) / count;
  const stroke = Math.min(maxStroke, Math.max(minStroke, computed));
  return { stroke, gap, padding };
}

export default function ActivityRings({ rings, size = 120, className = '' }: Props) {
  const count = rings.length;
  const { stroke, gap, padding } = ringLayout(size, count);
  const cx = size / 2;
  const cy = size / 2;

  if (count === 0) {
    return (
      <div
        className={`activity-rings activity-rings--empty ${className}`.trim()}
        style={{ width: size, height: size }}
        aria-hidden="true"
      />
    );
  }

  return (
    <div className={`activity-rings ${className}`.trim()} style={{ width: size, height: size }}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} aria-hidden="true">
        {rings.map((ring, i) => {
          const radius = size / 2 - padding - stroke / 2 - i * (stroke + gap);
          const circumference = 2 * Math.PI * radius;
          const clamped = Math.max(0, Math.min(1, ring.progress));
          const dash = circumference * clamped;
          const showProgress = clamped > 0;
          return (
            <g key={i}>
              <circle
                cx={cx}
                cy={cy}
                r={radius}
                fill="none"
                stroke={ring.trackColor ?? 'var(--track)'}
                strokeWidth={stroke}
                opacity={0.45}
              />
              {showProgress ? (
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
              ) : null}
            </g>
          );
        })}
      </svg>
    </div>
  );
}
