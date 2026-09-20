import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../public/icons');
const MASTER = path.join(OUT, 'woori-mark-master.png');

async function loadMaster() {
  if (!fs.existsSync(MASTER)) {
    throw new Error(`Missing master icon: ${MASTER}`);
  }
  return sharp(MASTER).trim({ threshold: 24 }).png();
}

async function writeSized(pipeline, width, outName) {
  const outPath = path.join(OUT, outName);
  await pipeline.clone().resize(width, width, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toFile(outPath);
  console.log(`wrote ${outName} (${width}px)`);
}

async function main() {
  const master = await loadMaster();
  await writeSized(master, 512, 'icon-512.png');
  await writeSized(master, 512, 'icon-maskable-512.png');
  await writeSized(master, 192, 'icon-192.png');
  await writeSized(master, 180, 'apple-touch-icon.png');
  await writeSized(master, 32, 'favicon-32.png');
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
