import { useMemo, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { MISSION_SLOT_COUNT } from '../domain/mission-slots';
import { packSessionStats, type MissionWordCount } from '../domain/mission-word-count';
import MissionWordCountPicker from './MissionWordCountPicker';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import type { Pack } from '../types';

type MissionPickTab = 'available' | 'completed';

function MissionPackRow({
  pack,
  koreanSet,
  wordCount,
  isSelected,
  completed,
  onSelect,
}: {
  pack: Pack;
  koreanSet: Set<string>;
  wordCount: MissionWordCount;
  isSelected: boolean;
  completed?: boolean;
  onSelect: () => void;
}) {
  const { imported, total } = packSessionStats(pack, koreanSet, wordCount);
  const pct = total > 0 ? Math.round((imported / total) * 100) : 0;

  return (
    <button
      className={`mission-pick-row ${isSelected ? 'active' : ''}`}
      onClick={onSelect}
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
          {completed && (
            <span className="mission-pick-badge mission-pick-badge-done">
              {t('missionPick.completedBadge')}
            </span>
          )}
        </p>
        <p className="mission-pick-sub">
          {completed
            ? t('missionPick.completedProgress', { pct, total })
            : t('missionPick.progress', { total, pct, count: total - imported })}
        </p>
      </div>
      {isSelected && <WIcon name="check-lg" size={18} />}
    </button>
  );
}

export default function MissionPickDialog() {
  useStore();
  const [tab, setTab] = useState<MissionPickTab>('available');
  const visiblePacks = store.getVisibleMissionPacks();
  const completedPacks = store.getCompletedMissionPacks();
  const words = store.getWords();
  const selectedId = store.getSelectedMissionPackId();
  const refreshing = store.getMissionPickRefreshing();
  const wordCount = store.getMissionWordCount();
  const koreanSet = useMemo(() => new Set(words.map((w) => w.korean)), [words]);

  const listPacks = tab === 'completed' ? completedPacks : visiblePacks;

  return (
    <div className="overlay" onClick={() => store.closeMissionPick()}>
      <div className="sheet mission-pick-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('missionPick.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeMissionPick()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <div className="mission-pick-tabs">
          <button
            type="button"
            className={`mission-pick-tab ${tab === 'available' ? 'active' : ''}`}
            onClick={() => setTab('available')}
          >
            {t('missionPick.tabAvailable')}
            {tab === 'available' && (
              <span className="mission-pick-tab-count">{MISSION_SLOT_COUNT}</span>
            )}
          </button>
          <button
            type="button"
            className={`mission-pick-tab ${tab === 'completed' ? 'active' : ''}`}
            onClick={() => setTab('completed')}
          >
            {t('missionPick.tabCompleted')}
            {completedPacks.length > 0 && (
              <span className="mission-pick-tab-count">{completedPacks.length}</span>
            )}
          </button>
        </div>

        {tab === 'available' && (
          <>
            <button
              type="button"
              className="secondary-btn mission-pick-refresh"
              disabled={refreshing}
              onClick={() => void store.refreshMissionCollection()}
            >
              <WIcon name={refreshing ? 'arrow-repeat' : 'arrow-clockwise'} size={16} />
              {refreshing ? t('missionPick.refreshing') : t('missionPick.refresh')}
            </button>
            <p className="field-hint mission-pick-refresh-hint">{t('missionPick.refreshHint')}</p>

            <p className="field-hint mb12">{t('missionPick.hint')}</p>

            <MissionWordCountPicker className="mission-word-count mb12" />
          </>
        )}

        <div className="mission-pick-list">
          {listPacks.map((pack) => (
            <MissionPackRow
              key={pack.id}
              pack={pack}
              koreanSet={koreanSet}
              wordCount={wordCount}
              isSelected={selectedId === pack.id}
              completed={tab === 'completed'}
              onSelect={() => store.selectMissionPack(pack.id)}
            />
          ))}

          {listPacks.length === 0 && (
            <div className="empty-hint">
              <span style={{ fontSize: 24 }}>
                <WIcon
                  name={tab === 'completed' ? 'trophy' : 'box-seam'}
                  size={24}
                  style={{ color: 'var(--text-tertiary)' }}
                />
              </span>
              <span>
                {tab === 'completed'
                  ? t('missionPick.completedEmpty')
                  : t('missionPick.availableEmpty')}
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
