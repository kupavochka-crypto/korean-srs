const INITIALS = [
  'g', 'kk', 'n', 'd', 'tt', 'r', 'm', 'b', 'pp', 's', 'ss', '', 'j', 'jj', 'ch', 'k', 't', 'p', 'h',
];

const MEDIALS = [
  'a', 'ae', 'ya', 'yae', 'eo', 'e', 'yeo', 'ye', 'o', 'wa', 'wae', 'oe', 'yo', 'u', 'wo', 'we', 'wi', 'yu', 'eu', 'ui', 'i',
];

const FINALS = [
  '', 'k', 'k', 'ks', 'n', 'nj', 'nh', 't', 'l', 'lg', 'lm', 'lb', 'ls', 'lt', 'lp', 'lh', 'm', 'p', 'bs', 's', 'ss', 'ng', 'j', 'ch', 'k', 't', 'p', 'h',
];

export function toRomaja(text: string): string {
  let result = '';
  for (const ch of text) {
    const code = ch.codePointAt(0);
    if (code === undefined) continue;
    if (code >= 0xac00 && code <= 0xd7a3) {
      const sIndex = code - 0xac00;
      const lIndex = Math.floor(sIndex / (21 * 28));
      const vIndex = Math.floor((sIndex % (21 * 28)) / 28);
      const tIndex = sIndex % 28;
      result += INITIALS[lIndex] ?? '';
      result += MEDIALS[vIndex] ?? '';
      result += FINALS[tIndex] ?? '';
    } else {
      result += ch;
    }
  }
  return result;
}

export function containsHangul(text: string): boolean {
  return Array.from(text).some((ch) => {
    const code = ch.codePointAt(0) ?? 0;
    return (code >= 0xac00 && code <= 0xd7a3) || (code >= 0x3131 && code <= 0x318e);
  });
}