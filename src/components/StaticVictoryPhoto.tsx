import { useEffect, useMemo, useState } from 'react';
import { t } from '../domain/i18n';
import { activeTheme, proverbBannerMediaCandidates } from '../domain/themes';
import { useStore } from '../store/AppStore';

interface Props {
  className?: string;
}

export default function StaticVictoryPhoto({ className = 'proverb-card-photo' }: Props) {
  useStore();
  const theme = activeTheme();
  const candidates = useMemo(
    () => proverbBannerMediaCandidates(theme),
    [theme.id]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [theme.id, candidates.length]);

  const current = candidates[index];
  if (!current) return null;

  return (
    <img
      className={className}
      src={current.url}
      alt={t('progress.proverbPhotoAlt', { name: current.memberName })}
      onError={() => {
        setIndex((i) => (i + 1 < candidates.length ? i + 1 : candidates.length));
      }}
    />
  );
}
