import type { ImportedWordDraft, LearningLanguage } from '../types';
import { dedupeDrafts } from './import-classify';

export const MAX_IMPORT_FILE_BYTES = 512 * 1024;
export const MAX_IMPORT_ROWS = 2000;

export type ImportFileFormat = 'tsv' | 'csv' | 'json' | 'unknown';

export interface FileImportResult {
  drafts: ImportedWordDraft[];
  format: ImportFileFormat;
  skippedLines: number;
}

export class FileImportError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'FileImportError';
  }
}

const HEADER_LABELS = new Set([
  'front',
  'back',
  'word',
  'translation',
  'term',
  'definition',
  'question',
  'answer',
  'korean',
  'russian',
  'english',
  'hanzi',
  'pinyin',
]);

function stripBom(text: string): string {
  return text.charCodeAt(0) === 0xfeff ? text.slice(1) : text;
}

function ankiSeparatorValue(raw: string): string | null {
  const value = raw.trim().toLowerCase();
  if (value === 'tab' || value === '\t') return '\t';
  if (value === 'comma' || value === ',') return ',';
  if (value === 'semicolon' || value === ';') return ';';
  if (value === 'pipe' || value === '|') return '|';
  if (value.length === 1) return value;
  return null;
}

function parseAnkiHeaders(lines: string[]): { separator: string; dataStart: number } {
  let separator = '\t';
  let dataStart = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]!.trim();
    if (!line.startsWith('#')) break;

    const body = line.slice(1).trim();
    const colon = body.indexOf(':');
    if (colon < 0) continue;

    const key = body.slice(0, colon).trim().toLowerCase();
    const val = body.slice(colon + 1).trim();

    if (key === 'separator') {
      const sep = ankiSeparatorValue(val);
      if (sep) separator = sep;
    } else if (key === 'columns') {
      dataStart = i + 1;
    }
  }

  while (dataStart < lines.length && lines[dataStart]!.trim().startsWith('#')) {
    dataStart += 1;
  }

  return { separator, dataStart };
}

function parseCsvRow(line: string): string[] {
  const fields: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const ch = line[i]!;
    if (inQuotes) {
      if (ch === '"') {
        if (line[i + 1] === '"') {
          current += '"';
          i += 1;
        } else {
          inQuotes = false;
        }
      } else {
        current += ch;
      }
    } else if (ch === '"') {
      inQuotes = true;
    } else if (ch === ',') {
      fields.push(current.trim());
      current = '';
    } else {
      current += ch;
    }
  }
  fields.push(current.trim());
  return fields;
}

function splitRow(line: string, separator: string): string[] {
  if (separator === ',') return parseCsvRow(line);
  if (separator === '\t') return line.split('\t').map((c) => c.trim());
  return line.split(separator).map((c) => c.trim());
}

function isHeaderRow(cols: string[]): boolean {
  if (cols.length < 2) return false;
  const a = cols[0]!.toLowerCase().replace(/[^a-z]/g, '');
  const b = cols[1]!.toLowerCase().replace(/[^a-z]/g, '');
  return HEADER_LABELS.has(a) || HEADER_LABELS.has(b);
}

function parseJsonDrafts(text: string): ImportedWordDraft[] | null {
  const trimmed = text.trim();
  if (!trimmed.startsWith('[') && !trimmed.includes('[')) return null;

  const start = trimmed.indexOf('[');
  const end = trimmed.lastIndexOf(']');
  if (start < 0 || end < start) return null;

  let array: unknown;
  try {
    array = JSON.parse(trimmed.slice(start, end + 1));
  } catch {
    return null;
  }
  if (!Array.isArray(array)) return null;

  const drafts: ImportedWordDraft[] = [];
  for (const item of array) {
    if (!item || typeof item !== 'object') continue;
    const obj = item as Record<string, unknown>;
    const term =
      (typeof obj.korean === 'string'
        ? obj.korean
        : typeof obj.word === 'string'
          ? obj.word
          : typeof obj.term === 'string'
            ? obj.term
            : typeof obj.front === 'string'
              ? obj.front
              : ''
      ).trim();
    const translation =
      (typeof obj.translation === 'string'
        ? obj.translation
        : typeof obj.russian === 'string'
          ? obj.russian
          : typeof obj.back === 'string'
            ? obj.back
            : typeof obj.definition === 'string'
              ? obj.definition
              : ''
      ).trim();
    if (!term) continue;
    drafts.push({ korean: term, translation, categoryIds: [] });
  }
  return drafts.length > 0 ? drafts : null;
}

function detectSeparator(lines: string[], dataStart: number): string {
  const sample = lines.slice(dataStart, dataStart + 5).filter((l) => l.trim());
  if (sample.length === 0) return '\t';

  let tab = 0;
  let comma = 0;
  let semi = 0;
  for (const line of sample) {
    if (line.includes('\t')) tab += 1;
    if (line.includes(',')) comma += 1;
    if (line.includes(';')) semi += 1;
  }
  if (tab >= comma && tab >= semi) return '\t';
  if (semi > comma) return ';';
  return ',';
}

function inferFormat(separator: string, ext?: string): ImportFileFormat {
  if (ext === 'json') return 'json';
  if (separator === ',') return 'csv';
  if (separator === '\t') return 'tsv';
  return 'unknown';
}

export function parseImportFile(
  text: string,
  _opts?: { learningLanguage?: LearningLanguage; filename?: string }
): FileImportResult {
  const normalized = stripBom(text).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const ext = _opts?.filename?.split('.').pop()?.toLowerCase();

  const jsonDrafts = parseJsonDrafts(normalized);
  if (jsonDrafts) {
    return {
      drafts: dedupeDrafts(jsonDrafts).slice(0, MAX_IMPORT_ROWS),
      format: 'json',
      skippedLines: 0,
    };
  }

  const lines = normalized.split('\n');
  const { separator: headerSep, dataStart } = parseAnkiHeaders(lines);
  const separator = headerSep !== '\t' ? headerSep : detectSeparator(lines, dataStart);

  const drafts: ImportedWordDraft[] = [];
  let skippedLines = dataStart;
  let headerSkipped = false;

  for (let i = dataStart; i < lines.length; i++) {
    const line = lines[i]!.trim();
    if (!line || line.startsWith('#')) {
      skippedLines += 1;
      continue;
    }

    const cols = splitRow(line, separator);
    if (cols.length < 1 || !cols[0]!.trim()) {
      skippedLines += 1;
      continue;
    }

    if (!headerSkipped && isHeaderRow(cols)) {
      headerSkipped = true;
      skippedLines += 1;
      continue;
    }

    const term = cols[0]!.trim();
    const translation = (cols[1] ?? '').trim();
    if (!term) {
      skippedLines += 1;
      continue;
    }

    drafts.push({ korean: term, translation, categoryIds: [] });
    if (drafts.length >= MAX_IMPORT_ROWS) break;
  }

  return {
    drafts: dedupeDrafts(drafts),
    format: inferFormat(separator, ext),
    skippedLines,
  };
}

export async function readImportFile(file: File): Promise<FileImportResult> {
  if (file.size > MAX_IMPORT_FILE_BYTES) {
    throw new FileImportError('tooLarge');
  }
  const text = await file.text();
  return parseImportFile(text, { filename: file.name });
}
