import { cpSync, existsSync, mkdirSync, readdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const source = join(root, 'node_modules/@shoelace-style/shoelace/dist/assets/icons');
const target = join(root, 'public/shoelace/assets/icons');

const ICONS = [
  'house',
  'headphones',
  'patch-question',
  'book',
  'images',
  'bar-chart',
  'gear',
  'stack',
  'collection',
  'folder',
  'flower1',
  'stars',
  'award',
  'gem',
  'bullseye',
  'camera',
  'exclamation-triangle',
  'box-seam',
  'lightbulb',
  'volume-up',
  'pencil',
  'inbox',
  'check-square',
  'check-lg',
  'check',
  'x-lg',
  'x',
  'lock',
  'gift',
  'heart-fill',
  'file-text',
  'sun',
  'moon-stars',
  'moon',
  'plus',
  'search',
  'trash',
  'play',
  'arrow-clockwise',
  'question-circle',
  'pencil-square',
  'check-circle',
  'check-circle-fill',
  'circle',
  'chevron-right',
  'chevron-down',
  'chevron-up',
  'chevron-left',
];

if (!existsSync(source)) {
  console.warn('[shoelace] icon source not found, skipping sync:', source);
  process.exit(0);
}

mkdirSync(target, { recursive: true });

const available = new Set(readdirSync(source));
const missing = [];
for (const name of ICONS) {
  const file = `${name}.svg`;
  if (available.has(file)) {
    cpSync(join(source, file), join(target, file));
  } else {
    missing.push(name);
  }
}

if (missing.length) {
  console.warn('[shoelace] missing icons:', missing.join(', '));
}
console.log(`[shoelace] synced ${ICONS.length - missing.length} icons to public/shoelace/assets/icons`);
