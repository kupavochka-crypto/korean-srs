import { colors } from '../theme/colors';

export default function ThreeCirclesLogo({ size = 40 }: { size?: number }) {
  const cx = size / 2;
  const cy = size / 2;
  const r = size * 0.32;
  const offsets = [-Math.sin(0) * r, -Math.sin(120 * (Math.PI / 180)) * r, -Math.sin(240 * (Math.PI / 180)) * r];
  const yOffsets = [Math.cos(0) * r * 0.6, Math.cos(120 * (Math.PI / 180)) * r * 0.6, Math.cos(240 * (Math.PI / 180)) * r * 0.6];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
      {[colors.charcoal, colors.accentPink, colors.red].map((color, i) => (
        <circle
          key={i}
          cx={cx + offsets[i] * 0.5}
          cy={cy + yOffsets[i]}
          r={r * 0.55}
          fill={color}
          opacity={0.92}
        />
      ))}
      <circle cx={cx} cy={cy} r={size * 0.09} fill="#ffffff" />
    </svg>
  );
}