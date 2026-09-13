import { useMemo } from 'react';
import { store, useStore } from '../store/AppStore';
import { dailyChallengePack, packImportedCount } from '../domain/daily-challenge';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function MissionPickDialog() {
  useStore();
  const packs = store.getSuggestedMissionPacks();
  const words = store.getWords();
  const selectedId = store.getSelectedMissionPackId();
  const daily = dailyChallengePack(store.getPacks());
  const koreanSet = useMemo(() => new Set(words.map((w) => w.korean)), [words]);

  return (
    <div className="overlay" onClick={() => store.closeMissionPick()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('missionPick.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeMissionPick()}>
            <WIcon name="x-lg" />
          </button>
        </div>
        <p className="field-hint mb12">{t('missionPick.hint')}</p>

        <button
          className={`mission-pick-row ${!selectedId ? 'active' : ''}`}
          onClick={() => store.selectMissionPack(null)}
        >
          <span className="mission-pick-emoji">✨</span>
          <div className="mission-pick-body">
            <p className="mission-pick-title">{t('home.challengeToday')}</p>
            <p className="mission-pick-sub">
              {daily ? daily.title : t('missionPick.noDaily')}
            </p>
          </div>
          {!selectedId && <WIcon name="check-lg" size={18} />}
        </button>

        <div className="mission-pick-list">
          {packs.map((pack) => {
            const { imported, total } = packImportedCount(pack, koreanSet);
            const pct = total > 0 ? Math.round((imported / total) * 100) : 0;
            const isDaily = daily?.id === pack.id;
            const isSelected = selectedId === pack.id;
            return (
              <button
                key={pack.id}
                className={`mission-pick-row ${isSelected ? 'active' : ''}`}
                onClick={() => store.selectMissionPack(pack.id)}
              >
                <span
                  className="mission-pick-emoji"
                  style={{
                    background: `${colorFromHex(pack.colorHex)}1f`,
                    color: colorFromHex(pack.colorHex),
                  }}
                >
                  {pack.emoji}
                </span>
                <div className="mission-pick-body">
                  <p className="mission-pick-title">
                    {pack.title}
                    {isDaily && (
                      <span className="mission-pick-badge">{t('home.challengeSuggested')}</span>
                    )}
                  </p>
                  <p className="mission-pick-sub">
                    {t('missionPick.progress', { pct, count: total - imported })}
                  </p>
                </div>
                {isSelected && <WIcon name="check-lg" size={18} />}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
