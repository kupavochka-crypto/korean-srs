import type { ReactNode } from 'react';
import { store, useStore } from '../store/AppStore';
import { artistsOfActiveTheme } from '../domain/sources';
import { currentLevelIndex, levelProgress, nextArtist } from '../domain/gamification';
import { portraitUrl } from '../domain/themes';
import ScreenHeader from '../components/ScreenHeader';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

function GalleryGroup({
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

export default function GalleryScreen() {
  useStore();
  const xp = store.getXp();
  const artists = artistsOfActiveTheme();
  const unlockedIdx = currentLevelIndex(xp, artists);
  const achievements = store.getAchievements();
  const earnedCount = achievements.filter((a) => a.earnedAt).length;
  const progress = Math.round(levelProgress(xp, artists) * 100);
  const next = nextArtist(xp, artists);

  return (
    <div>
      <ScreenHeader title={t('tab.gallery')} subtitle="컬렉션" />

      <GalleryGroup title={t('gallery.title')}>
        <div className="xp-row">
          <span className="xp-score">
            <WIcon name="heart" size={14} style={{ color: 'var(--accent-pink)' }} /> {xp}{' '}
            <span className="muted">XP</span>
          </span>
          <span className="xp-label">
            {next
              ? `${t('gallery.toNext', { name: next.stageName, count: Math.max(0, next.tierThreshold - xp) })}`
              : t('gallery.allOpen')}
          </span>
        </div>
        <div className="progress-track gallery-xp-track">
          <div className="progress-fill" style={{ width: `${progress}%`, background: 'var(--red)' }} />
        </div>
      </GalleryGroup>

      <GalleryGroup title={t('gallery.sectionCards')}>
        <div className="gallery-grid">
          {artists.map((artist, i) => {
            const unlocked = i <= unlockedIdx;
            return (
              <div key={artist.id} className={`photo-card ${unlocked ? '' : 'photo-locked'}`}>
                <div className="photo-card-img-wrap">
                  <img
                    className="photo-card-img"
                    src={portraitUrl(artist.imageName)}
                    alt={artist.stageName}
                  />
                  {!unlocked && (
                    <span className="photo-lock">
                      <WIcon name="lock" />
                    </span>
                  )}
                </div>
                <p className="photo-name">{artist.stageName}</p>
                <p className="photo-role">{artist.role || t('gallery.member')}</p>
                <p className="photo-status">
                  {unlocked ? t('gallery.unlocked') : `${artist.tierThreshold} XP`}
                </p>
              </div>
            );
          })}
        </div>
      </GalleryGroup>

      <GalleryGroup title={t('gallery.sectionAchievements')} list>
        <div className="achievement-list">
          {achievements.map((a) => (
            <div
              key={a.id}
              className={`achievement-row card-flat ${a.earnedAt ? '' : 'achievement-locked'}`}
            >
              <span className="achievement-icon">
                {a.earnedAt ? <WIcon name={a.icon} /> : <WIcon name="lock" />}
              </span>
              <div className="achievement-body">
                <p className="achievement-title">{t('achievement.' + a.id + '.title')}</p>
                <p className="achievement-desc">{t('achievement.' + a.id + '.desc')}</p>
              </div>
              {a.earnedAt && (
                <span className="achievement-check">
                  <WIcon name="check-lg" />
                </span>
              )}
            </div>
          ))}
        </div>
      </GalleryGroup>

      {earnedCount === 0 && (
        <div className="empty-hint">
          <span className="empty-state-icon">
            <WIcon name="gift" size={24} />
          </span>
          <span>{t('gallery.empty')}</span>
        </div>
      )}
    </div>
  );
}
