import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import type { Plugin } from 'vite';

export function contentCatalogPlugin(): Plugin {
  return {
    name: 'content-catalog',
    async buildStart() {
      const { buildContentCatalog } = await import('./src/domain/content-catalog');
      const catalog = buildContentCatalog();
      const dir = resolve('public/content');
      mkdirSync(dir, { recursive: true });
      writeFileSync(resolve(dir, 'catalog.json'), `${JSON.stringify(catalog, null, 2)}\n`);
    },
  };
}
