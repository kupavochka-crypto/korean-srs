import { useMemo, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { formatSource } from '../domain/sources';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function PacksDialog() {
  useStore();
  const packs = store.getPacks();
  const words = store.getWords();
  const [query, setQuery] = useState('');

  const koreanSet = useMemo(() => new Set(words.map((w) => w.korean)), [words]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return packs;
    return packs.filter((p) => {
      const haystack = [
        p.title,
        p.subtitle,
        ...p.wordDefs.map((d) => d.korean),
        ...p.wordDefs.map((d) => d.translation),
      ]
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    });
  }, [packs, query]);

  return (
    <div className="overlay" onClick={() => store.closePacks()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('packs.title')}</h3>
          <button className="sheet-close" onClick={() => store.closePacks()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <input
          className="form-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={t('packs.search')}
          style={{ marginBottom: 12 }}
        />

        <div className="packs-list">
          {filtered.map((pack) => {
            const missing = pack.wordDefs.filter((d) => !koreanSet.has(d.korean)).length;
            const source = store.sourceFor(pack.sourceId);
            return (
              <div key={pack.id} className="pack-card">
                <div className="pack-card-head">
                  <span
                    className="pack-emoji"
                    style={{ background: `${colorFromHex(pack.colorHex)}1f`, color: colorFromHex(pack.colorHex) }}
                  >
                    {pack.emoji}
                  </span>
                  <div className="pack-body">
                    <p className="pack-title">{pack.title}</p>
                    <p className="pack-subtitle">{pack.subtitle}</p>
                    <p className="pack-meta">
                      {t('packs.words', { count: pack.wordDefs.length })} · {pack.difficulty}
                      {source ? ` · ${formatSource(source)}` : ''}
                    </p>
                  </div>
                  {missing === 0 ? (
                    <span className="pack-added">{t('packs.added')}</span>
                  ) : (
                    <button className="pack-add" onClick={() => store.addPack(pack.id)}>
                      +{missing}
                    </button>
                  )}
                </div>
              </div>
            );
          })}

          {filtered.length === 0 && (
            <div className="empty-hint">
              <span style={{ fontSize: 24 }}><WIcon name="box-seam" size={24} style={{ color: 'var(--text-tertiary)' }} /></span>
              <span>{t('packs.empty')}</span>
            </div>
          )}
        </div>

        <p style={{ fontSize: 11, color: 'var(--text-secondary)', marginTop: 12 }}>
          {t('packs.footer')}
        </p>
      </div>
    </div>
  );
}