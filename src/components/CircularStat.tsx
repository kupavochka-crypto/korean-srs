interface Props {
  value: string;
  label: string;
  koreanLabel: string;
  size?: number;
  color: string;
  background?: string;
  className?: string;
}

export default function CircularStat({
  value,
  label,
  koreanLabel,
  size = 100,
  color,
  background = '#ffffff',
  className = '',
}: Props) {
  const stroke = size * 0.08;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className={`circular-stat ${className}`.trim()}>
      <svg width={size} height={size} style={{ ['--circ' as string]: circumference }}>
        <circle
          className="circular-track"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill={background}
          strokeWidth={stroke}
        />
        <circle
          className="circular-ring"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth={stroke}
          strokeDasharray={`${circumference * 0.75} ${circumference}`}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        <text
          x={size / 2}
          y={size / 2}
          className="circular-value"
          fontSize={size * 0.26}
        >
          {value}
        </text>
      </svg>
      <span className="circular-label">
        {label} · {koreanLabel}
      </span>
    </div>
  );
}