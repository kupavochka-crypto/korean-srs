import type { Artist, Source, SourceType } from '../types';
import { activeTheme, getTheme, THEMES } from './themes';

interface SourceTypeInfo {
  type: SourceType;
  emoji: string;
  label: string;
  koreanLabel: string;
}

export const SOURCE_TYPES: SourceTypeInfo[] = [
  { type: 'song', emoji: '🎵', label: 'Песня', koreanLabel: '노래' },
  { type: 'post', emoji: '📱', label: 'Пост', koreanLabel: '게시글' },
  { type: 'variety', emoji: '🎬', label: 'Шоу', koreanLabel: '예능' },
  { type: 'fanchant', emoji: '📣', label: 'Фанчант', koreanLabel: '떼창' },
  { type: 'textbook', emoji: '📚', label: 'Учебник', koreanLabel: '교재' },
  { type: 'user', emoji: '✍️', label: 'Своё', koreanLabel: '직접' },
];

export function sourceTypeInfo(type: SourceType): SourceTypeInfo {
  return SOURCE_TYPES.find((t) => t.type === type) ?? SOURCE_TYPES[SOURCE_TYPES.length - 1];
}

export function sourceTypeLabel(type: SourceType): string {
  return sourceTypeInfo(type).label;
}

export function sourceEmoji(type: SourceType): string {
  return sourceTypeInfo(type).emoji;
}

export function formatSource(source: Source | null | undefined): string {
  if (!source) return '';
  const t = sourceTypeInfo(source.type);
  const from = source.artistId?.trim() ? ` · ${source.artistId}` : '';
  return `${t.emoji} ${source.title}${from}`;
}

const ARTIST_ROLES: Record<string, string> = {
  rm: 'Лидер',
  jin: 'Вокал',
  suga: 'Рэп',
  jhope: 'Танцы',
  jimin: 'Вокал',
  v: 'Вокал',
  jungkook: 'Вокал',
  bangchan: 'Лидер',
  leeknow: 'Танцы',
  changbin: 'Рэп',
  hyunjin: 'Танцы',
  han: 'Рэп',
  felix: 'Рэп',
  seungmin: 'Вокал',
  in: 'Вокал',
};

export function artistsForTheme(themeId: string): Artist[] {
  const theme = getTheme(themeId);
  return theme.greetings.map((g, i) => ({
    id: g.id,
    stageName: g.artistName,
    koreanName: '',
    imageName: g.imageName,
    colorHex: '',
    role: ARTIST_ROLES[g.id] ?? '',
    tierThreshold: (i + 1) * 200,
  }));
}

export function artistsOfActiveTheme(): Artist[] {
  return artistsForTheme(activeTheme().id);
}

export function artistByGreetingId(greetingId: string | null): Artist | null {
  if (!greetingId) return null;
  const artists = artistsOfActiveTheme();
  return artists.find((a) => a.id === greetingId) ?? null;
}

interface SeedSourceDef {
  themeId: string;
  type: SourceType;
  title: string;
  koreanTitle: string;
  album: string | null;
}

const SEED_SOURCE_DEFS: SeedSourceDef[] = [
  { themeId: 'bts', type: 'song', title: 'Spring Day', koreanTitle: '봄날', album: 'You Never Walk Alone' },
  { themeId: 'bts', type: 'song', title: 'Butter', koreanTitle: 'Butter', album: 'Butter' },
  { themeId: 'bts', type: 'song', title: 'Dynamite', koreanTitle: 'Dynamite', album: 'Dynamite' },
  { themeId: 'bts', type: 'variety', title: 'Run BTS!', koreanTitle: '달려라 방탄', album: null },
  { themeId: 'bts', type: 'fanchant', title: 'Фанчант "I Purple You"', koreanTitle: '보라해', album: null },
  { themeId: 'stray-kids', type: 'song', title: 'MANIAC', koreanTitle: 'MANIAC', album: 'ODDINARY' },
  { themeId: 'stray-kids', type: 'song', title: 'S-Class', koreanTitle: '특', album: '5-STAR' },
  { themeId: 'stray-kids', type: 'variety', title: 'SKZ-CODE', koreanTitle: 'SKZ CODE', album: null },
];

export function allSeedSources(): Source[] {
  const now = Date.now();
  return SEED_SOURCE_DEFS.map((def, i) => ({
    id: `src_${def.themeId}_${i}`,
    type: def.type,
    artistId: null,
    title: def.title,
    koreanTitle: def.koreanTitle,
    album: def.album,
    snippet: null,
    createdAt: now + i,
  }));
}

export function activeThemeSources(sources: Source[]): Source[] {
  const themeId = activeTheme().id;
  return sources
    .filter((s) => s.id.startsWith(`src_${themeId}_`))
    .sort((a, b) => a.createdAt - b.createdAt);
}

export function sourcesForTheme(sources: Source[], themeId: string): Source[] {
  return sources
    .filter((s) => s.id.startsWith(`src_${themeId}_`))
    .sort((a, b) => a.createdAt - b.createdAt);
}

export function knownThemeIds(): string[] {
  return THEMES.map((t) => t.id);
}