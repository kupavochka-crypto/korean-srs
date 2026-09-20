import { useEffect, useState } from 'react';
import { t } from '../domain/i18n';
import type { DayActivityIntensity } from '../db/repository';
import { store, useStore } from '../store/AppStore';

const LEVEL_CLASS: Record<number, string> = {
  0: 'activity-heatmap-cell--0',
  1: 'activity-heatmap-cell--1',
  2: 'activity-heatmap-cell--2',
  3: 'activity-heatmap-cell--3',
};

export default function MiniActivityHeatmap() {
  useStore();
  const [days, setDays] = useState<DayActivityIntensity[]>([]);
  const snapshot = store.getSnapshot();

  useEffect(() => {
    let alive = true;
    void store.activityIntensity(7).then((v) => {
      if (alive) setDays(v);
    });
    return () => {
      alive = false;
    };
  }, [snapshot]);

  const activeDays = days.filter((d) => d.level > 0).length;

  return (
    <div className="mini-heatmap">
      <div className="activity-heatmap-head">
        <span className="activity-heatmap-title">{t('home.stats.miniHeatmapTitle')}</span>
        <span className="activity-heatmap-sub muted">
          {t('progress.chart.heatmapActive', { active: activeDays, total: days.length })}
        </span>
      </div>
      <div className="activity-heatmap-grid mini-heatmap-grid" role="img" aria-label={t('home.stats.miniHeatmapTitle')}>
        {days.map((d) => (
          <span
            key={d.dateString}
            className={`activity-heatmap-cell ${LEVEL_CLASS[d.level]}`}
            title={t('progress.chart.heatmapDay', { date: d.dateString.slice(5), count: d.total })}
          />
        ))}
      </div>
    </div>
  );
}
