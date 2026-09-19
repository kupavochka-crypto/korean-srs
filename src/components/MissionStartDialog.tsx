import { useMemo } from 'react';
import { store, useStore } from '../store/AppStore';
import { packSessionStats } from '../domain/mission-word-count';
import MissionWordCountPicker from './MissionWordCountPicker';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function MissionStartDialog() {
  useStore();
  const packId = store.getPendingMissionStartPackId();
  const pack = packId ? store.getPacks().find((p) => p.id === packId) : null;
  const words = store.getWords();
  const wordCount = store.getMissionWordCount();
  const koreanSet = useMemo(() => new Set(words.map((w) => w.korean)), [words]);

  if (!pack) return null;

  const { imported, total, packTotal, chosen } = packSessionStats(pack, koreanSet, wordCount);
  const missing = total - imported;

  return (
    <div className="overlay" onClick={() => store.dismissMissionStart()}>
      <div className="sheet mission-start-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('missionStart.title')}</h3>
          <button className="sheet-close" onClick={() => store.dismissMissionStart()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <div className="mission-start-hero card-flat">
          <span
            className="mission-start-emoji"
            style={{
              background: `${colorFromHex(pack.colorHex)}1f`,
              color: colorFromHex(pack.colorHex),
            }}
          >
            {pack.emoji}
          </span>
          <div>
            <p className="mission-start-name">{pack.title}</p>
            <p className="mission-start-sub">{pack.subtitle}</p>
          </div>
        </div>

        <p className="mission-start-desc">{t('missionStart.desc')}</p>

        <MissionWordCountPicker maxWords={packTotal} />

        <ul className="mission-start-stats">
          <li>{t('missionStart.wordsChosen', { count: chosen })}</li>
          <li>{t('missionStart.wordsSession', { count: total })}</li>
          <li>{t('missionStart.wordsInCollection', { count: packTotal })}</li>
          <li>{t('missionStart.wordsReady', { count: imported })}</li>
          {missing > 0 && <li>{t('missionStart.wordsNew', { count: missing })}</li>}
        </ul>

        <div className="mission-start-actions">
          <button className="secondary-btn" onClick={() => store.dismissMissionStart()}>
            {t('missionStart.later')}
          </button>
          <button className="primary-btn" onClick={() => store.beginMissionTraining(pack.id)}>
            {missing > 0 ? t('missionStart.addAndStart') : t('missionStart.start')}
          </button>
        </div>
      </div>
    </div>
  );
}
