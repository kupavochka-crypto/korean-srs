import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Resvg } from '@resvg/resvg-js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, '../public/icons');

function renderSvg(svgPath, width, outPath) {
  const svg = fs.readFileSync(svgPath, 'utf8');
  const resvg = new Resvg(svg, {
    fitTo: { mode: 'width', value: width },
  });
  const png = resvg.render().asPng();
  fs.writeFileSync(outPath, png);
  console.log(`wrote ${path.basename(outPath)} (${width}px)`);
}

const jobs = [
  { svg: 'woori-mark.svg', width: 512, out: 'icon-512.png' },
  { svg: 'woori-mark.svg', width: 192, out: 'icon-192.png' },
  { svg: 'woori-mark-maskable.svg', width: 512, out: 'icon-maskable-512.png' },
  { svg: 'woori-mark-maskable.svg', width: 180, out: 'apple-touch-icon.png' },
];

for (const job of jobs) {
  renderSvg(path.join(OUT, job.svg), job.width, path.join(OUT, job.out));
}
