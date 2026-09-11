import { SRS_RATINGS, type SrsRatingValue } from '../domain/srs-engine';
import { colors } from '../theme/colors';

const RATING_COLORS: Record<number, string> = {
  1: colors.red,
  2: colors.warning,
  3: colors.success,
  4: colors.blue,
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
          style={{ background: `${RATING_COLORS[r.value]}18`, color: RATING_COLORS[r.value] }}
          onClick={() => onRate(r.value)}
        >
          <span>{r.label}</span>
          <span className="rating-kor">{r.koreanLabel}</span>
        </button>
      ))}
    </div>
  );
}