import { store } from '../store/AppStore';
import {
  isWordCountOptionAvailable,
  maxPackWordCount,
  MISSION_WORD_COUNT_OPTIONS,
  type MissionWordCount,
} from '../domain/mission-word-count';
import { t } from '../domain/i18n';

function countLabel(count: MissionWordCount): string {
  return count === 'all' ? t('missionStart.wordCountAll') : String(count);
}

export default function MissionWordCountPicker({
  maxWords,
  className,
}: {
  maxWords?: number;
  className?: string;
}) {
  const wordCount = store.getMissionWordCount();
  const limit = maxWords ?? maxPackWordCount(store.getPacks());
  const capped =
    wordCount !== 'all' && typeof wordCount === 'number' && wordCount > limit;

  return (
    <div className={className ?? 'mission-word-count'}>
      <p className="field-label">{t('missionStart.wordCountLabel')}</p>
      <div className="flow-layout">
        {MISSION_WORD_COUNT_OPTIONS.map((option) => {
          const available = isWordCountOptionAvailable(option, limit);
          return (
            <button
              key={String(option)}
              type="button"
              className={`select-chip ${wordCount === option ? 'active' : ''} ${!available ? 'disabled' : ''}`}
              disabled={!available}
              title={
                available
                  ? undefined
                  : t('missionStart.wordCountUnavailable', { max: limit })
              }
              onClick={() => store.setMissionWordCount(option)}
            >
              {countLabel(option)}
            </button>
          );
        })}
      </div>
      <p className="field-hint mission-word-count-hint">
        {t('missionStart.wordCountMaxHint', { max: limit })}
      </p>
      {capped && (
        <p className="field-hint mission-word-count-hint">
          {t('missionStart.wordCountCapped', { total: limit })}
        </p>
      )}
    </div>
  );
}
