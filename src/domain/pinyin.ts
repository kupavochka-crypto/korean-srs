import { pinyin } from 'pinyin-pro';

export function hanziToReading(hanzi: string): { pinyin: string; tones: string } {
  const trimmed = hanzi.trim();
  if (!trimmed) return { pinyin: '', tones: '' };
  return {
    pinyin: pinyin(trimmed, { toneType: 'symbol', type: 'array' }).join(' '),
    tones: pinyin(trimmed, { toneType: 'num' }),
  };
}
