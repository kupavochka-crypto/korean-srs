import { useId } from 'react';

/** Calligraphic hangul 우 — same mark as PWA icon */
export default function WooriLogo({ size = 40 }: { size?: number }) {
  const gradId = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 512 512" aria-hidden="true">
      <defs>
        <linearGradient id={gradId} x1="64" y1="48" x2="448" y2="464" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F87171" stopOpacity={0.45} />
          <stop offset="8%" stopColor="#DC2626" />
          <stop offset="100%" stopColor="#991B1B" />
        </linearGradient>
      </defs>
      <rect width="512" height="512" rx="112" fill={`url(#${gradId})`} />
      <g fill="#FFFFFF">
        <path d="M 118 214 C 168 192 228 188 286 194 C 334 199 372 208 398 218 C 408 222 412 228 406 236 C 396 246 352 238 286 232 C 214 226 156 234 124 242 C 112 245 106 238 110 228 C 112 222 114 218 118 214 Z" />
        <path d="M 268 220 C 282 220 292 232 290 248 C 284 310 276 362 258 402 C 246 428 218 442 188 428 C 168 418 162 398 176 388 C 194 376 214 384 226 360 C 244 322 252 272 256 236 C 258 226 262 220 268 220 Z" />
        <path d="M 188 404 C 176 412 168 424 174 436 C 182 452 206 458 232 448 C 252 440 268 422 278 398 C 282 388 276 382 268 386 C 248 396 224 412 204 420 C 198 422 192 414 188 404 Z" />
        <path
          d="M 392 212 C 404 208 414 214 416 226 C 418 242 404 252 382 248 C 362 244 348 230 352 218 C 354 210 362 206 370 208 C 378 210 386 212 392 212 Z"
          opacity={0.85}
        />
      </g>
    </svg>
  );
}
