import { store, useStore } from '../store/AppStore';
import { artistsOfActiveTheme } from '../domain/sources';
import { currentLevelIndex, levelProgress, nextArtist } from '../domain/gamification';
import { portraitUrl } from '../domain/themes';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

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
      <header className="header-row">
        <div className="header-brand">
          <div>
            <p className="header-title">{t('gallery.title')}</p>
            <p className="header-subtitle">컬렉션</p>
          </div>
        </div>
      </header>

      <div className="card" style={{ marginBottom: 16 }}>
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
        <div className="progress-track" style={{ marginTop: 8 }}>
          <div className="progress-fill" style={{ width: `${progress}%`, background: 'var(--red)' }} />
        </div>
      </div>

      <h2 className="section-title">{t('gallery.sectionCards')}</h2>
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
                {!unlocked && <span className="photo-lock"><WIcon name="lock" /></span>}
              </div>
              <p className="photo-name">{artist.stageName}</p>
              <p className="photo-role">{artist.role || 'Участник'}</p>
              <p className="photo-status">{unlocked ? t('gallery.unlocked') : `${artist.tierThreshold} XP`}</p>
            </div>
          );
        })}
      </div>

      <h2 className="section-title">{t('gallery.sectionAchievements')}</h2>
      <div className="achievement-list">
        {achievements.map((a) => (
          <div key={a.id} className={`achievement-row card-flat ${a.earnedAt ? '' : 'achievement-locked'}`}>
            <span className="achievement-icon">
              {a.earnedAt ? <WIcon name={a.icon} /> : <WIcon name="lock" />}
            </span>
            <div className="achievement-body">
              <p className="achievement-title">{t('achievement.' + a.id + '.title')}</p>
              <p className="achievement-desc">{t('achievement.' + a.id + '.desc')}</p>
            </div>
            {a.earnedAt && <span className="achievement-check"><WIcon name="check-lg" /></span>}
          </div>
        ))}
      </div>

      {earnedCount === 0 && (
        <div className="empty-hint">
          <span style={{ fontSize: 24 }}><WIcon name="gift" size={24} /></span>
          <span>{t('gallery.empty')}</span>
        </div>
      )}
    </div>
  );
}