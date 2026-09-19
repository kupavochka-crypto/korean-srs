import type { Pack } from '../types';
import {
  buildContentCatalog,
  catalogPackToSeed,
  type ContentCatalog,
  type ContentCatalogPack,
  CONTENT_CATALOG_VERSION,
} from './content-catalog';
import type { PackPhraseDef } from '../types';
import {
  storedContentCatalogVersion,
  saveContentCatalogVersion,
  storedContentCatalogSyncedAt,
  saveContentCatalogSyncedAt,
  CONTENT_SYNC_INTERVAL_MS,
} from './settings';
import * as repo from '../db/repository';

const CATALOG_PATH = `${import.meta.env.BASE_URL}content/catalog.json`;

export function catalogUrl(): string {
  return CATALOG_PATH;
}

export async function fetchRemoteCatalog(options?: { bustCache?: boolean }): Promise<ContentCatalog | null> {
  try {
    const url = options?.bustCache ? `${CATALOG_PATH}?t=${Date.now()}` : CATALOG_PATH;
    const res = await fetch(url, { cache: 'no-store' });
    if (!res.ok) return null;
    const data = (await res.json()) as ContentCatalog;
    if (!data || typeof data.version !== 'number' || !Array.isArray(data.packs)) return null;
    return data;
  } catch {
    return null;
  }
}

function packContentChanged(existing: Pack, incoming: ContentCatalogPack): boolean {
  return (
    existing.title !== incoming.title ||
    existing.subtitle !== incoming.subtitle ||
    existing.emoji !== incoming.emoji ||
    existing.colorHex !== incoming.colorHex ||
    existing.difficulty !== incoming.difficulty ||
    (existing.language ?? 'ko') !== (incoming.language ?? 'ko') ||
    (existing.releaseDate ?? null) !== (incoming.releaseDate ?? null) ||
    JSON.stringify(existing.wordDefs) !== JSON.stringify(incoming.wordDefs)
  );
}

function catalogPacksForSync(
  packs: ContentCatalogPack[],
  includeStaged: boolean
): ContentCatalogPack[] {
  return includeStaged ? packs : packs.filter((pack) => !pack.staged);
}

export async function mergeCatalogPacks(packs: ContentCatalogPack[]): Promise<number> {
  let changed = 0;
  const now = Date.now();
  for (const incoming of packs) {
    const existing = await repo.getPackById(incoming.id);
    if (!existing) {
      await repo.insertPack(catalogPackToSeed(incoming, incoming.createdAt ?? now + changed));
      changed += 1;
      continue;
    }
    if (!packContentChanged(existing, incoming)) continue;
    await repo.updatePack({
      ...existing,
      title: incoming.title,
      subtitle: incoming.subtitle,
      emoji: incoming.emoji,
      colorHex: incoming.colorHex,
      difficulty: incoming.difficulty,
      sourceId: incoming.sourceId ?? null,
      wordDefs: incoming.wordDefs,
      language: incoming.language ?? 'ko',
      releaseDate: incoming.releaseDate ?? null,
      kind: incoming.kind,
    });
    changed += 1;
  }
  return changed;
}

export async function mergeCatalogPhrases(defs: PackPhraseDef[]): Promise<number> {
  return repo.mergePhraseDefs(defs);
}

export async function applyContentCatalog(catalog: ContentCatalog): Promise<boolean> {
  const packChanges = await mergeCatalogPacks(catalog.packs);
  const phraseChanges = await mergeCatalogPhrases(catalog.phrases);
  saveContentCatalogVersion(catalog.version);
  saveContentCatalogSyncedAt(Date.now());
  return packChanges + phraseChanges > 0;
}

export function shouldSyncRemoteCatalog(now = Date.now()): boolean {
  const storedVersion = storedContentCatalogVersion();
  if (storedVersion < CONTENT_CATALOG_VERSION) return true;
  const last = storedContentCatalogSyncedAt();
  if (last === null) return true;
  return now - last >= CONTENT_SYNC_INTERVAL_MS;
}

/** Bundled baseline + optional remote overlay (GitHub Pages JSON). */
export async function syncContentCatalog(options?: {
  force?: boolean;
  discoverStaged?: boolean;
}): Promise<boolean> {
  let changed = false;
  const includeStaged = options?.discoverStaged ?? false;

  const bundled = buildContentCatalog();
  changed =
    (await mergeCatalogPacks(catalogPacksForSync(bundled.packs, includeStaged))) +
      (await mergeCatalogPhrases(bundled.phrases)) >
      0 || changed;

  const storedVersion = storedContentCatalogVersion();
  if (storedVersion < CONTENT_CATALOG_VERSION) {
    saveContentCatalogVersion(CONTENT_CATALOG_VERSION);
  }

  if (!options?.force && !shouldSyncRemoteCatalog()) {
    return changed;
  }

  const remote = await fetchRemoteCatalog({ bustCache: options?.force });
  if (!remote) {
    saveContentCatalogSyncedAt(Date.now());
    return changed;
  }

  if (remote.version <= storedContentCatalogVersion() && !options?.force) {
    saveContentCatalogSyncedAt(Date.now());
    return changed;
  }

  const remoteChanged =
    (await mergeCatalogPacks(catalogPacksForSync(remote.packs, includeStaged))) +
      (await mergeCatalogPhrases(remote.phrases)) >
      0;
  if (remoteChanged || options?.force) {
    saveContentCatalogVersion(Math.max(remote.version, storedVersion, CONTENT_CATALOG_VERSION));
    saveContentCatalogSyncedAt(Date.now());
  }
  return changed || remoteChanged;
}
