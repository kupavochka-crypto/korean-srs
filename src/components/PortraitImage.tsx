import { useEffect, useMemo, useState } from 'react';
import { portraitCandidateUrls } from '../domain/themes';

interface Props {
  imageName: string;
  alt: string;
  className?: string;
  themeId?: string;
  /** 1-based slot: `{name}.png`, `{name}_02.png`, … */
  variant?: number;
}

export default function PortraitImage({
  imageName,
  alt,
  className,
  themeId,
  variant,
}: Props) {
  const candidates = useMemo(
    () => portraitCandidateUrls(imageName, { themeId, preferredVariant: variant }),
    [imageName, themeId, variant]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [imageName, variant, candidates.length]);

  const src = candidates[index];
  if (!src) return null;

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      onError={() => {
        setIndex((i) => (i + 1 < candidates.length ? i + 1 : i));
      }}
    />
  );
}
