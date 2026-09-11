import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import CircularStat from '../components/CircularStat';
import { colors, colorFromHex } from '../theme/colors';

export default function ProgressScreen() {
  useStore();
  const [streak, setStreak] = useState(0);
  const [todayReviews, setTodayReviews] = useState(0);

  useEffect(() => {
    let alive = true;
    store.streakCount().then((v) => alive && setStreak(v));
    store.todayReviewsCount().then((v) => alive && setTodayReviews(v));
    return () => {
      alive = false;
    };
  }, [store.getSnapshot()]);

  const total = store.totalWordsCount();
  const mastered = store.masteredWordsCount();
  const avgDays = store.avgDaysToMaster();
  const due = store.dueWords().length;
  const byMonth = store.masteredByMonth();
  const masteredByCat = store.masteredByCategory();
  const words = store.getWords();
  const categories = store.getCategories();

  const byCategory = categories.map((c) => ({
    category: c,
    count: words.filter((w) => w.categoryId === c.id).length,
  }));
  const uncategorized = words.filter((w) => w.categoryId === null).length;

  return (
    <div>
      <div className="proverb-card">
        <p className="proverb-kor">티끌 모아 태산</p>
        <p className="proverb-rus">Многие капли образуют гору</p>
      </div>

      <h2 className="section-title">Статистика</h2>
      <div className="progress-grid">
        <CircularStat value={`${total}`} label="Всего слов" koreanLabel="총 단어" color={colors.charcoal} />
        <CircularStat value={`${mastered}`} label="Выучено" koreanLabel="완료" color={colors.success} />
        <CircularStat value={`${avgDays ?? '—'}`} label="Дней до выуч." koreanLabel="완료까지" color={colors.accentPink} />
        <CircularStat value={`${due}`} label="К сегодня" koreanLabel="오늘" color={colors.red} />
        <CircularStat value={`${todayReviews}`} label="Сегодня" koreanLabel="복습" color={colors.blue} />
        <CircularStat value={`${streak}`} label="Серия дней" koreanLabel="연속" color={colors.warning} />
      </div>

      <h2 className="section-title">Запомнено по месяцам</h2>
      <div className="month-bars">
        {byMonth.map((m) => {
          const max = Math.max(1, ...byMonth.map((x) => x.count));
          return (
            <div key={m.month} className="month-bar-col">
              <span className="month-bar-num">{m.count > 0 ? m.count : ''}</span>
              <div
                className="month-bar"
                style={{ height: `${Math.round((m.count / max) * 100)}%` }}
              />
              <span className="month-bar-label">{m.month}</span>
            </div>
          );
        })}
      </div>
      {masteredByCat.length > 0 && (
        <>
          <h2 className="section-title">Выучено по категориям</h2>
          <div className="cat-breakdown">
            {masteredByCat.map(({ categoryName, count }) => (
              <div key={categoryName} className="cat-row card-flat">
                <span className="cat-emoji" style={{ backgroundColor: '#DCEDFE' }}>
                  ✅
                </span>
                <span>{categoryName}</span>
                <span className="cat-count">{count}</span>
              </div>
            ))}
          </div>
        </>
      )}

      <h2 className="section-title">Слова по категориям</h2>
      <div className="cat-breakdown">
        {byCategory.map(({ category, count }) => (
          <div key={category.id} className="cat-row card-flat">
            <span className="cat-emoji" style={{ backgroundColor: `${colorFromHex(category.colorHex)}20` }}>
              {category.emoji}
            </span>
            <span>{category.name}</span>
            <span className="cat-count">{count}</span>
          </div>
        ))}
        {uncategorized > 0 && (
          <div className="cat-row card-flat">
            <span className="cat-emoji">📄</span>
            <span>Без категории</span>
            <span className="cat-count">{uncategorized}</span>
          </div>
        )}
      </div>
    </div>
  );
}