import { useState } from 'react';
import { store } from '../store/AppStore';
import { t } from '../domain/i18n';
import type { ModeDayCounts } from '../db/repository';
import type { LearningLanguage } from '../types';
import ActivityRings, { type ActivityRingDef } from './ActivityRings';
import MiniActivityHeatmap from './MiniActivityHeatmap';
import ModeStatChips, { type ModeStatChipDef } from './ModeStatChips';
import HomeStatsTabCta from './HomeStatsTabCta';

interface Props {
  dueCount: number;
  dailyGoal: number;
  today: ModeDayCounts;
  yesterday: ModeDayCounts;
  learningLang: LearningLanguage;
}

type RingMode = 'cards' | 'quiz' | 'listen';

function miniGoal(dailyGoal: number): number {
  return Math.max(5, Math.round(dailyGoal / 2));
}

function ringSize(): number {
  if (typeof window !== 'undefined' && window.innerWidth <= 390) return 112;
  return 128;
}

export default function HomeStatsOverviewPanel({
  dueCount,
  dailyGoal,
  today,
  yesterday,
  learningLang,
}: Props) {
  const [visibleRings, setVisibleRings] = useState<Record<RingMode, boolean>>({
    cards: true,
    quiz: true,
    listen: true,
  });

  const quizGoal = miniGoal(dailyGoal);
  const listenGoal = quizGoal;

  const reviewTotal = today.srs + dueCount;
  const reviewProgress = reviewTotal > 0 ? Math.min(1, today.srs / reviewTotal) : 1;
  const quizProgress = Math.min(1, today.quiz / quizGoal);
  const listenProgress = Math.min(1, today.listen / listenGoal);

  const totalToday = today.srs + today.quiz + today.listen;
  const totalYesterday = yesterday.srs + yesterday.quiz + yesterday.listen;

  const cardsDoneToday = dueCount === 0 && today.srs > 0;

  let motivation = t('home.stats.motivationEqual');
  if (totalToday > totalYesterday) {
    motivation = t('home.stats.motivationBetter');
  } else if (totalToday < totalYesterday) {
    motivation = t('home.stats.motivationCatchUp', { n: totalYesterday });
  }

  const size = ringSize();

  const ringDefs: { id: RingMode; ring: ActivityRingDef; labelKey: string }[] = [
    {
      id: 'cards',
      ring: { progress: reviewProgress, color: 'var(--red)', trackColor: 'var(--red-soft)' },
      labelKey: 'home.stats.modeCards',
    },
    {
      id: 'quiz',
      ring: {
        progress: quizProgress,
        color: 'var(--accent)',
        trackColor: 'var(--accent-soft, var(--track))',
      },
      labelKey: 'home.stats.modeQuiz',
    },
    {
      id: 'listen',
      ring: {
        progress: listenProgress,
        color: 'var(--charcoal)',
        trackColor: 'var(--charcoal-soft)',
      },
      labelKey: 'home.stats.modeListen',
    },
  ];

  const activeRings = ringDefs.filter((def) => visibleRings[def.id]).map((def) => def.ring);

  function toggleRing(mode: RingMode) {
    setVisibleRings((prev) => {
      const activeCount = Object.values(prev).filter(Boolean).length;
      if (prev[mode] && activeCount <= 1) return prev;
      return { ...prev, [mode]: !prev[mode] };
    });
  }

  const chipIcons: Record<RingMode, string> = {
    cards: 'book',
    quiz: 'pencil',
    listen: 'headphones',
  };

  const chipColors: Record<RingMode, string> = {
    cards: 'var(--red)',
    quiz: 'var(--accent, var(--blue))',
    listen: 'var(--charcoal)',
  };

  const chips: ModeStatChipDef[] = ringDefs.map((def) => ({
    id: def.id,
    labelKey: def.labelKey,
    count: def.id === 'cards' ? today.srs : def.id === 'quiz' ? today.quiz : today.listen,
    progress:
      def.id === 'cards' ? reviewProgress : def.id === 'quiz' ? quizProgress : listenProgress,
    color: chipColors[def.id],
    icon: chipIcons[def.id],
    active: visibleRings[def.id],
    onToggle: () => toggleRing(def.id),
  }));

  return (
    <div className="activity-stats-body activity-stats-body--overview home-stats-overview">
      <div className="home-stats-rings-row">
        <ActivityRings size={size} rings={activeRings} />
        <ModeStatChips chips={chips} />
      </div>

      <p className="activity-competition-motivation home-stats-motivation">
        {cardsDoneToday ? t('home.stats.cardsDoneToday') : motivation}
      </p>

      <MiniActivityHeatmap />

      <HomeStatsTabCta
        label={
          dueCount > 0 ? `${t('home.startReview')} (${dueCount})` : t('home.startCards')
        }
        learningLang={learningLang}
        onClick={() => void store.startDueReview()}
      />
    </div>
  );
}
