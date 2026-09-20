import { tL } from '../domain/learning-ui';
import type { LearningLanguage } from '../types';

interface Props {
  label: string;
  learningLang: LearningLanguage;
  onClick: () => void;
}

export default function HomeStatsTabCta({ label, learningLang, onClick }: Props) {
  return (
    <button type="button" className="primary-btn home-stats-tab-cta" onClick={onClick}>
      <span>
        <span>{label}</span>
        <span className="btn-kor">{tL('btn.go', learningLang)}</span>
      </span>
    </button>
  );
}
