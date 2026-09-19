import { useState } from 'react';
import { t } from '../domain/i18n';
import type { ModeDayCounts } from '../db/repository';
import ActivityRings, { type ActivityRingDef } from './ActivityRings';

interface Props {
  dueCount: number;
  dailyGoal: number;
  today: ModeDayCounts;
  yesterday: ModeDayCounts;
}

type RingMode = 'cards' | 'quiz' | 'listen';

function miniGoal(dailyGoal: number): number {
  return Math.max(5, Math.round(dailyGoal / 2));
}

function ringSize(): number {
  if (typeof window !== 'undefined' && window.innerWidth <= 390) return 128;
  return 144;
}

export default function HomeStatsOverviewPanel({ dueCount, dailyGoal, today, yesterday }: Props) {
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
  const delta = totalToday - totalYesterday;

  let motivation = t('home.stats.motivationEqual');
  if (totalToday > totalYesterday) {
    motivation = t('home.stats.motivationBetter');
  } else if (totalToday < totalYesterday) {
    motivation = t('home.stats.motivationCatchUp', { n: totalYesterday });
  }

  const size = ringSize();
  const cardsDoneToday = dueCount === 0 && today.srs > 0;

  const ringDefs: { id: RingMode; ring: ActivityRingDef; labelKey: string; dotClass: string }[] = [
    {
      id: 'cards',
      ring: { progress: reviewProgress, color: 'var(--red)', trackColor: 'var(--red-soft)' },
      labelKey: 'home.stats.modeCards',
      dotClass: 'activity-legend-dot--red',
    },
    {
      id: 'quiz',
      ring: {
        progress: quizProgress,
        color: 'var(--accent)',
        trackColor: 'var(--accent-soft, var(--track))',
      },
      labelKey: 'home.stats.modeQuiz',
      dotClass: 'activity-legend-dot--accent',
    },
    {
      id: 'listen',
      ring: {
        progress: listenProgress,
        color: 'var(--charcoal)',
        trackColor: 'var(--charcoal-soft)',
      },
      labelKey: 'home.stats.modeListen',
      dotClass: 'activity-legend-dot--charcoal',
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

  const legendMeta: Record<RingMode, { count: number; sub: string }> = {
    cards: {
      count: today.srs,
      sub: `${Math.round(reviewProgress * 100)}% ${t('home.stats.reviewedToday')}`,
    },
    quiz: {
      count: today.quiz,
      sub: `${Math.round(quizProgress * 100)}% · ${t('home.stats.miniGoal', { count: quizGoal })}`,
    },
    listen: {
      count: today.listen,
      sub: `${Math.round(listenProgress * 100)}% · ${t('home.stats.miniGoal', { count: listenGoal })}`,
    },
  };

  return (
    <div className="activity-stats-body activity-stats-body--overview">
      <ActivityRings size={size} rings={activeRings} />
      <div className="activity-legend">
        <p className="activity-competition-summary">
          {t('home.stats.todayTotal', { count: totalToday, delta: delta >= 0 ? `+${delta}` : String(delta) })}
        </p>
        <p className="activity-competition-motivation">
          {cardsDoneToday ? t('home.stats.cardsDoneToday') : motivation}
        </p>
        {ringDefs.map((def) => {
          const active = visibleRings[def.id];
          const meta = legendMeta[def.id];
          return (
            <div key={def.id} className="activity-legend-row">
              <span
                className={`activity-legend-dot ${def.dotClass} ${active ? '' : 'activity-legend-dot--off'}`}
              />
              <span className="activity-legend-text">
                <span className="activity-legend-main">
                  <button
                    type="button"
                    className={`activity-legend-mode ${active ? 'active' : ''}`}
                    aria-pressed={active}
                    onClick={() => toggleRing(def.id)}
                  >
                    {t(def.labelKey)}
                  </button>
                  {' · '}
                  {meta.count}
                </span>
                <span className="activity-legend-sub">{meta.sub}</span>
              </span>
            </div>
          );
        })}
        <p className="activity-competition-breakdown">
          {t('home.stats.modeBreakdown', {
            cards: today.srs,
            quiz: today.quiz,
            listen: today.listen,
          })}
        </p>
      </div>
    </div>
  );
}
