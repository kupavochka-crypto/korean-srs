import { SRS_RATINGS, type SrsRatingValue } from '../domain/srs-engine';
const RATING_COLORS: Record<number, string> = {
  1: 'var(--red)',
  2: 'var(--warning)',
  3: 'var(--success)',
  4: 'var(--blue)',
};

const RATING_BACKGROUNDS: Record<number, string> = {
  1: 'var(--red-soft)',
  2: 'var(--warning-soft)',
  3: 'var(--success-soft)',
  4: 'var(--blue-soft)',
};

interface Props {
  onRate: (rating: SrsRatingValue) => void;
}

export default function SrsRatingBar({ onRate }: Props) {
  return (
    <div className="rating-row">
      {SRS_RATINGS.map((r) => (
        <button
          key={r.value}
          className="rating-btn"
          style={{ background: RATING_BACKGROUNDS[r.value], color: RATING_COLORS[r.value] }}
          onClick={() => onRate(r.value)}
        >
          <span>{r.label}</span>
          <span className="rating-kor">{r.koreanLabel}</span>
        </button>
      ))}
    </div>
  );
}