import { useState } from 'react';
import { t } from '../domain/i18n';
import type { ModeDayCounts } from '../db/repository';
import HomeStatsOverviewPanel from './HomeStatsOverviewPanel';
import HomeStatsRatingsPanel from './HomeStatsRatingsPanel';
import HomeStatsCategoryPanel from './HomeStatsCategoryPanel';

type HomeStatsTab = 'overview' | 'ratings' | 'category';

interface Props {
  dueCount: number;
  dailyGoal: number;
  today: ModeDayCounts;
  yesterday: ModeDayCounts;
}

export default function HomeActivityStats({ dueCount, dailyGoal, today, yesterday }: Props) {
  const [tab, setTab] = useState<HomeStatsTab>('overview');

  return (
    <div className="activity-stats-card card">
      <div className="activity-stats-tabs">
        <button
          type="button"
          className={`activity-stats-tab ${tab === 'overview' ? 'active' : ''}`}
          onClick={() => setTab('overview')}
        >
          {t('home.stats.tabOverview')}
        </button>
        <button
          type="button"
          className={`activity-stats-tab ${tab === 'ratings' ? 'active' : ''}`}
          onClick={() => setTab('ratings')}
        >
          {t('home.stats.tabRatings')}
        </button>
        <button
          type="button"
          className={`activity-stats-tab ${tab === 'category' ? 'active' : ''}`}
          onClick={() => setTab('category')}
        >
          {t('home.stats.tabCategory')}
        </button>
      </div>

      {tab === 'overview' && (
        <HomeStatsOverviewPanel
          dueCount={dueCount}
          dailyGoal={dailyGoal}
          today={today}
          yesterday={yesterday}
        />
      )}
      {tab === 'ratings' && <HomeStatsRatingsPanel />}
      {tab === 'category' && <HomeStatsCategoryPanel />}
    </div>
  );
}
