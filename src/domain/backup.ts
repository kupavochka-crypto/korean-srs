import { exportUserData, importUserData, type UserDataExport } from '../db/repository';

export const BACKUP_FORMAT = 'woori-backup';
export const BACKUP_FORMAT_VERSION = 1;
export const MAX_BACKUP_BYTES = 20 * 1024 * 1024;
export const BACKUP_WARN_BYTES = 5 * 1024 * 1024;

export type BackupSummary = {
  words: number;
  categories: number;
  reviews: number;
  practiceEvents: number;
  exportedAt: number;
  appVersion: string;
  largeFile: boolean;
};

export type BackupValidation =
  | { ok: true; summary: BackupSummary }
  | { ok: false; reason: string };

export class BackupError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'BackupError';
  }
}

export interface WooriBackupFile {
  format: string;
  formatVersion: number;
  appVersion: string;
  exportedAt: number;
  database: UserDataExport;
  settings: Record<string, string>;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isUserDataExport(value: unknown): value is UserDataExport {
  if (!isRecord(value)) return false;
  const tables = [
    'words',
    'categories',
    'reviews',
    'practiceEvents',
    'progression',
    'achievements',
    'sources',
  ] as const;
  return tables.every((key) => Array.isArray(value[key]));
}

export function exportAllSettings(): Record<string, string> {
  const out: Record<string, string> = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key) out[key] = localStorage.getItem(key) ?? '';
    }
  } catch {
    // storage unavailable
  }
  return out;
}

export function importAllSettings(settings: Record<string, string>): void {
  try {
    for (const [key, value] of Object.entries(settings)) {
      if (typeof value === 'string') localStorage.setItem(key, value);
    }
  } catch {
    // storage unavailable
  }
}

export function validateBackup(data: unknown): BackupValidation {
  if (!isRecord(data)) return { ok: false, reason: 'invalid_json' };
  if (data.format !== BACKUP_FORMAT) return { ok: false, reason: 'wrong_format' };
  if (data.formatVersion !== BACKUP_FORMAT_VERSION) return { ok: false, reason: 'unsupported_version' };
  if (!isUserDataExport(data.database)) return { ok: false, reason: 'invalid_database' };
  if (!isRecord(data.settings) || !Object.values(data.settings).every((v) => typeof v === 'string')) {
    return { ok: false, reason: 'invalid_settings' };
  }

  const db = data.database;
  const exportedAt = typeof data.exportedAt === 'number' ? data.exportedAt : 0;
  const appVersion = typeof data.appVersion === 'string' ? data.appVersion : '?';

  return {
    ok: true,
    summary: {
      words: db.words.length,
      categories: db.categories.length,
      reviews: db.reviews.length,
      practiceEvents: db.practiceEvents.length,
      exportedAt,
      appVersion,
      largeFile: false,
    },
  };
}

export async function createBackupBlob(): Promise<{ blob: Blob; summary: BackupSummary }> {
  const database = await exportUserData();
  const payload: WooriBackupFile = {
    format: BACKUP_FORMAT,
    formatVersion: BACKUP_FORMAT_VERSION,
    appVersion: __APP_VERSION__,
    exportedAt: Date.now(),
    database,
    settings: exportAllSettings(),
  };
  const json = JSON.stringify(payload);
  const largeFile = json.length > BACKUP_WARN_BYTES;
  if (json.length > MAX_BACKUP_BYTES) {
    throw new BackupError('too_large');
  }
  return {
    blob: new Blob([json], { type: 'application/json' }),
    summary: {
      words: database.words.length,
      categories: database.categories.length,
      reviews: database.reviews.length,
      practiceEvents: database.practiceEvents.length,
      exportedAt: payload.exportedAt,
      appVersion: payload.appVersion,
      largeFile,
    },
  };
}

export function downloadBackup(blob: Blob): void {
  const date = new Date().toISOString().slice(0, 10);
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = `woori-backup-${date}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export async function parseBackupFile(file: File): Promise<BackupValidation & { file: WooriBackupFile | null }> {
  if (file.size > MAX_BACKUP_BYTES) {
    return { ok: false, reason: 'too_large', file: null };
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(await file.text());
  } catch {
    return { ok: false, reason: 'invalid_json', file: null };
  }
  const validation = validateBackup(parsed);
  if (!validation.ok) return { ...validation, file: null };
  return { ...validation, file: parsed as WooriBackupFile };
}

export async function applyBackup(file: WooriBackupFile): Promise<void> {
  await importUserData(file.database);
  importAllSettings(file.settings);
}

export function backupErrorMessage(reason: string): string {
  switch (reason) {
    case 'too_large':
      return 'backup.errorTooLarge';
    case 'wrong_format':
    case 'unsupported_version':
    case 'invalid_database':
    case 'invalid_settings':
    case 'invalid_json':
      return 'backup.errorInvalid';
    default:
      return 'backup.errorInvalid';
  }
}
