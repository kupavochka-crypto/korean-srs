/** Lettermark: W + 우 — same mark as PWA icon */
export default function WooriLogo({ size = 40 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden="true">
      <rect width="100" height="100" rx="22" fill="#DC2626" />
      <text
        x="50"
        y="44"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="Inter, 'Noto Sans KR', sans-serif"
        fontWeight="800"
        fontSize="34"
        dominantBaseline="middle"
      >
        W
      </text>
      <text
        x="50"
        y="74"
        textAnchor="middle"
        fill="#ffffff"
        fontFamily="'Noto Sans KR', Inter, sans-serif"
        fontWeight="700"
        fontSize="22"
        dominantBaseline="middle"
      >
        우
      </text>
    </svg>
  );
}
