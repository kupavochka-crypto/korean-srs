import { t } from '../domain/i18n';
import type { ModeDayCounts } from '../db/repository';
import WIcon from '../ui/WIcon';

interface Props {
  streak: number;
  today: ModeDayCounts;
  yesterday: ModeDayCounts;
}

export default function HomeStatsHeader({ streak, today, yesterday }: Props) {
  const totalToday = today.srs + today.quiz + today.listen;
  const totalYesterday = yesterday.srs + yesterday.quiz + yesterday.listen;
  const delta = totalToday - totalYesterday;
  const deltaLabel = delta >= 0 ? `+${delta}` : String(delta);

  return (
    <div className="home-stats-header">
      <div className="home-stats-header-text">
        <h3 className="home-stats-header-title">{t('home.stats.headerTitle')}</h3>
        <p className="home-stats-header-summary">
          {t('home.stats.todayTotal', { count: totalToday, delta: deltaLabel })}
        </p>
        {streak > 0 && (
          <p className="home-stats-header-streak">
            <WIcon name="fire" size={14} className="streak-strip-icon" />
            {t('progress.chart.streakStrip', { count: streak })}
          </p>
        )}
      </div>
    </div>
  );
}
