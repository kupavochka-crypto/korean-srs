import { t } from '../domain/i18n';
import type { DayActivityIntensity } from '../db/repository';
import WIcon from '../ui/WIcon';

interface Props {
  days: DayActivityIntensity[];
  streak: number;
}

const LEVEL_CLASS: Record<number, string> = {
  0: 'activity-heatmap-cell--0',
  1: 'activity-heatmap-cell--1',
  2: 'activity-heatmap-cell--2',
  3: 'activity-heatmap-cell--3',
};

export default function ActivityHeatmap({ days, streak }: Props) {
  const activeDays = days.filter((d) => d.level > 0).length;
  const streakDays = days.slice(-7);

  return (
    <div className="activity-heatmap-block">
      <div className="activity-heatmap-head">
        <span className="activity-heatmap-title">{t('progress.chart.heatmapTitle')}</span>
        <span className="activity-heatmap-sub muted">
          {t('progress.chart.heatmapActive', { active: activeDays, total: days.length })}
        </span>
      </div>
      <div className="activity-heatmap-grid" role="img" aria-label={t('progress.chart.heatmapTitle')}>
        {days.map((d) => (
          <span
            key={d.dateString}
            className={`activity-heatmap-cell ${LEVEL_CLASS[d.level]}`}
            title={t('progress.chart.heatmapDay', { date: d.dateString.slice(5), count: d.total })}
          />
        ))}
      </div>
      <div className="streak-strip">
        <span className="streak-strip-label">
          {streak > 0 && <WIcon name="fire" size={14} className="streak-strip-icon" />}
          {t('progress.chart.streakStrip', { count: streak })}
        </span>
        <div className="streak-strip-dots">
          {streakDays.map((d) => (
            <span
              key={d.dateString}
              className={`streak-strip-dot ${d.level > 0 ? 'streak-strip-dot--active' : ''}`}
              title={d.dateString.slice(5)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
