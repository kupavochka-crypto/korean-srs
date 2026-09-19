import type { LearningLanguage, Pack, PackPhraseDef } from '../types';
import { allSeedPacks } from './packs';
import { ALL_PHRASE_DEFS } from './phrases';

/** Bump when bundled missions/phrases change — remote catalog uses the same number. */
export const CONTENT_CATALOG_VERSION = 4;

export interface ContentCatalog {
  version: number;
  updatedAt: string;
  packs: ContentCatalogPack[];
  phrases: PackPhraseDef[];
}

export type ContentCatalogPack = Omit<Pack, 'createdAt'> & { createdAt?: number; staged?: boolean };

export function buildContentCatalog(): ContentCatalog {
  return {
    version: CONTENT_CATALOG_VERSION,
    updatedAt: new Date().toISOString().slice(0, 10),
    packs: allSeedPacks().map(packToCatalog),
    phrases: ALL_PHRASE_DEFS.map((def) => ({ ...def })),
  };
}

function packToCatalog(pack: Pack): ContentCatalogPack {
  const { createdAt: _c, ...rest } = pack;
  return { ...rest, staged: pack.staged ?? false };
}

export function catalogPackToSeed(pack: ContentCatalogPack, createdAt: number): Pack {
  return {
    ...pack,
    sourceId: pack.sourceId ?? null,
    createdAt,
    language: pack.language ?? 'ko',
    releaseDate: pack.releaseDate ?? null,
  };
}

export function phraseLanguageFromDef(def: PackPhraseDef): LearningLanguage {
  return def.sourcePackId?.startsWith('seed-zh-') ? 'zh' : 'ko';
}
