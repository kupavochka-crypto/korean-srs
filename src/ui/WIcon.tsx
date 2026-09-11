import type { CSSProperties } from 'react';
import SlIcon from '@shoelace-style/shoelace/dist/react/icon/index.js';

export default function WIcon({
  name,
  label,
  className,
  size,
  style,
}: {
  name: string;
  label?: string;
  className?: string;
  size?: number;
  style?: CSSProperties;
}) {
  return (
    <SlIcon name={name} label={label} className={className} style={{ fontSize: size, ...style }} />
  );
}