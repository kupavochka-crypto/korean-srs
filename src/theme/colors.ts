export const colors = {
  red: '#DC2626',
  redLight: '#FEE2E2',
  redDark: '#991B1B',
  charcoal: '#18181B',
  charcoalLight: '#27272A',
  slate: '#475569',
  lightBg: '#F8F9FA',
  surface: '#FFFFFF',
  border: '#E2E8F0',
  textPrimary: '#0F172A',
  textSecondary: '#64748B',
  success: '#16A34A',
  warning: '#EA580C',
  blue: '#2563EB',
  accentPink: '#F43F5E',
} as const;

export function colorFromHex(hex: string): string {
  const cleaned = hex.trim().replace(/^#/, '');
  return `#${cleaned}`;
}