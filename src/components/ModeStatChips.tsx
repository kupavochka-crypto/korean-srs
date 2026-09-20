import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export interface ModeStatChipDef {
  id: string;
  labelKey: string;
  count: number;
  progress: number;
  color: string;
  icon: string;
  active: boolean;
  onToggle: () => void;
}

interface Props {
  chips: ModeStatChipDef[];
}

export default function ModeStatChips({ chips }: Props) {
  return (
    <div className="mode-stat-chips">
      {chips.map((chip) => {
        const pct = Math.round(chip.progress * 100);
        return (
          <button
            key={chip.id}
            type="button"
            className={`mode-stat-chip ${chip.active ? 'mode-stat-chip--active' : ''}`}
            aria-pressed={chip.active}
            onClick={chip.onToggle}
          >
            <WIcon name={chip.icon} size={14} className="mode-stat-chip-icon" />
            <div className="mode-stat-chip-body">
              <div className="mode-stat-chip-head">
                <span className="mode-stat-chip-label">{t(chip.labelKey)}</span>
                <span className="mode-stat-chip-count">{chip.count}</span>
              </div>
              <div className="mode-stat-chip-track">
                <div
                  className="mode-stat-chip-fill"
                  style={{ width: `${pct}%`, backgroundColor: chip.color }}
                />
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
