import { useEffect, useState, type ReactNode } from 'react';
import { store, useStore } from '../store/AppStore';
import CircularStat from '../components/CircularStat';
import ScreenHeader from '../components/ScreenHeader';
import { colors, colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

function ProgressGroup({
  title,
  children,
  list = false,
}: {
  title: string;
  children: ReactNode;
  list?: boolean;
}) {
  return (
    <section className="settings-group">
      <h2 className="settings-group-title">{title}</h2>
      <div
        className={`card settings-group-card ${list ? 'settings-group-card--list' : 'settings-group-card--padded'}`}
      >
        {children}
      </div>
    </section>
  );
}

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
      <ScreenHeader title={t('tab.progress')} subtitle="진행" />

      <div className="proverb-card">
        <p className="proverb-kor">티끌 모아 태산</p>
        <p className="proverb-rus">{t('progress.proverb')}</p>
      </div>

      <ProgressGroup title={t('progress.stat')}>
        <div className="progress-grid">
          <CircularStat
            value={`${total}`}
            label={t('home.stats.words')}
            koreanLabel="총 단어"
            color={colors.charcoal}
            className="circular-stat-charcoal"
          />
          <CircularStat
            value={`${mastered}`}
            label={t('progress.mastered')}
            koreanLabel="완료"
            color={colors.success}
          />
          <CircularStat
            value={`${avgDays ?? '—'}`}
            label={t('progress.daysToMaster')}
            koreanLabel="완료까지"
            color={colors.accentPink}
          />
          <CircularStat
            value={`${due}`}
            label={t('progress.dueToday')}
            koreanLabel="오늘"
            color={colors.red}
          />
          <CircularStat
            value={`${todayReviews}`}
            label={t('progress.today')}
            koreanLabel="복습"
            color={colors.blue}
          />
          <CircularStat
            value={`${streak}`}
            label={t('progress.streakDays')}
            koreanLabel="연속"
            color={colors.warning}
          />
        </div>
      </ProgressGroup>

      <ProgressGroup title={t('progress.byMonth')}>
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
      </ProgressGroup>

      {masteredByCat.length > 0 && (
        <ProgressGroup title={t('progress.byCat')} list>
          <div className="cat-breakdown">
            {masteredByCat.map(({ categoryName, count }) => (
              <div key={categoryName} className="cat-row card-flat">
                <span className="cat-emoji cat-emoji-success">
                  <WIcon name="check-lg" size={16} style={{ color: 'var(--success-strong)' }} />
                </span>
                <span>{categoryName}</span>
                <span className="cat-count">{count}</span>
              </div>
            ))}
          </div>
        </ProgressGroup>
      )}

      <ProgressGroup title={t('progress.byCatDict')} list>
        <div className="cat-breakdown">
          {byCategory.map(({ category, count }) => (
            <div key={category.id} className="cat-row card-flat">
              <span
                className="cat-emoji"
                style={{ backgroundColor: `${colorFromHex(category.colorHex)}20` }}
              >
                {category.emoji}
              </span>
              <span>{category.name}</span>
              <span className="cat-count">{count}</span>
            </div>
          ))}
          {uncategorized > 0 && (
            <div className="cat-row card-flat">
              <span className="cat-emoji">
                <WIcon name="file-text" size={16} style={{ color: 'var(--text-secondary)' }} />
              </span>
              <span>{t('progress.noCategory')}</span>
              <span className="cat-count">{uncategorized}</span>
            </div>
          )}
        </div>
      </ProgressGroup>
    </div>
  );
}
