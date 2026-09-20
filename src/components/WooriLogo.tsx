const ICON_SRC = `${import.meta.env.BASE_URL}icons/icon-192.png`;

/** Calligraphic hangul mark — same PNG as PWA icon */
export default function WooriLogo({ size = 40 }: { size?: number }) {
  return (
    <img
      className="woori-logo"
      src={ICON_SRC}
      width={size}
      height={size}
      alt=""
      aria-hidden="true"
      draggable={false}
    />
  );
}
