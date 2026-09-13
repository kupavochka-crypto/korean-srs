import type { DailyActivity, Word } from '../types';

export function dateStringOf(ms: number): string {
  const d = new Date(ms);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export function addDays(dateStr: string, delta: number): string {
  const [y, m, d] = dateStr.split('-').map(Number);
  const dt = new Date(y, m - 1, d);
  dt.setDate(dt.getDate() + delta);
  return dateStringOf(dt.getTime());
}

export function lastNDays(n: number, now = Date.now()): string[] {
  const today = dateStringOf(now);
  return Array.from({ length: n }, (_, i) => addDays(today, i - (n - 1)));
}

export function newWordsByDay(words: Word[], days: string[]): Map<string, number> {
  const map = new Map(days.map((d) => [d, 0]));
  for (const w of words) {
    const key = dateStringOf(w.createdAt);
    if (map.has(key)) map.set(key, (map.get(key) ?? 0) + 1);
  }
  return map;
}

export function countInRange(words: Word[], from: number, to: number): number {
  return words.filter((w) => w.createdAt >= from && w.createdAt < to).length;
}

export function weekBounds(now = Date.now()): { thisFrom: number; lastFrom: number; lastTo: number } {
  const d = new Date(now);
  d.setHours(0, 0, 0, 0);
  const day = d.getDay();
  const mondayOffset = day === 0 ? 6 : day - 1;
  const thisFrom = d.getTime() - mondayOffset * 24 * 60 * 60 * 1000;
  const lastFrom = thisFrom - 7 * 24 * 60 * 60 * 1000;
  return { thisFrom, lastFrom, lastTo: thisFrom };
}

export function weeklyGrowthPercent(thisWeek: number, lastWeek: number): number | null {
  if (lastWeek === 0) return thisWeek > 0 ? 100 : null;
  return Math.round(((thisWeek - lastWeek) / lastWeek) * 100);
}

export function buildPlanFact(
  days: string[],
  activity: DailyActivity[],
  dailyGoal: number
): {
  date: string;
  fact: number;
  plan: number;
  cumFact: number;
  cumPlan: number;
  forecast: number;
}[] {
  const byDate = new Map(activity.map((a) => [a.dateString, a]));
  let cumFact = 0;
  let paceSum = 0;
  return days.map((date, i) => {
    const a = byDate.get(date);
    const fact = (a?.newWords ?? 0) + (a?.reviews ?? 0);
    cumFact += fact;
    paceSum += fact;
    const avg = paceSum / (i + 1);
    return {
      date,
      fact,
      plan: dailyGoal,
      cumFact,
      cumPlan: dailyGoal * (i + 1),
      forecast: Math.round(avg * days.length),
    };
  });
}
