import { useState } from 'react';
import { t } from '../domain/i18n';
import type { ModeDayCounts } from '../db/repository';
import HomeStatsHeader from './HomeStatsHeader';
import HomeStatsOverviewPanel from './HomeStatsOverviewPanel';
import HomeStatsRatingsPanel from './HomeStatsRatingsPanel';
import HomeStatsCategoryPanel from './HomeStatsCategoryPanel';
import type { LearningLanguage } from '../types';

type HomeStatsTab = 'overview' | 'ratings' | 'category';

interface Props {
  dueCount: number;
  dailyGoal: number;
  today: ModeDayCounts;
  yesterday: ModeDayCounts;
  streak: number;
  learningLang: LearningLanguage;
}

export default function HomeActivityStats({
  dueCount,
  dailyGoal,
  today,
  yesterday,
  streak,
  learningLang,
}: Props) {
  const [tab, setTab] = useState<HomeStatsTab>('overview');

  return (
    <div className="activity-stats-card card home-stats-dashboard">
      <HomeStatsHeader streak={streak} today={today} yesterday={yesterday} />

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
          learningLang={learningLang}
        />
      )}
      {tab === 'ratings' && (
        <HomeStatsRatingsPanel dueCount={dueCount} learningLang={learningLang} />
      )}
      {tab === 'category' && <HomeStatsCategoryPanel learningLang={learningLang} />}
    </div>
  );
}
