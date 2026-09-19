import { useEffect, useRef, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

interface Props {
  categoryIds: string[];
  onChange: (categoryIds: string[]) => void;
  compact?: boolean;
}

export default function CategoryMultiPicker({ categoryIds, onChange, compact = false }: Props) {
  useStore();
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const categories = store.getCategories();
  const selected = categories.filter((c) => categoryIds.includes(c.id));
  const idSet = new Set(categoryIds);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const filtered = categories.filter(
    (c) =>
      !idSet.has(c.id) &&
      c.name.toLowerCase().includes(input.trim().toLowerCase())
  );

  function addCategory(id: string) {
    if (idSet.has(id)) return;
    onChange([...categoryIds, id]);
    setInput('');
    setOpen(false);
  }

  function removeCategory(id: string) {
    onChange(categoryIds.filter((cid) => cid !== id));
  }

  async function createFromInput(name: string) {
    const trimmed = name.trim();
    if (!trimmed) return;
    const existing = categories.find((c) => c.name.toLowerCase() === trimmed.toLowerCase());
    if (existing) {
      addCategory(existing.id);
      return;
    }
    const cat = await store.ensureCategory(trimmed);
    addCategory(cat.id);
  }

  return (
    <div ref={wrapRef} className="category-multi-picker" style={{ position: 'relative', width: '100%' }}>
      {selected.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: compact ? 0 : 4 }}>
          {selected.map((c) => (
            <span
              key={c.id}
              className="badge badge-cat"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                background: colorFromHex(c.colorHex),
                padding: '2px 8px',
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              {c.emoji} {c.name}
              <button
                type="button"
                onClick={() => removeCategory(c.id)}
                style={{ background: 'none', color: 'inherit', fontSize: 13, padding: 0, lineHeight: 1 }}
                aria-label="×"
              >
                <WIcon name="x" size={12} />
              </button>
            </span>
          ))}
        </div>
      )}
      <input
        className="form-input"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setOpen(true);
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            e.preventDefault();
            if (filtered.length > 0) addCategory(filtered[0].id);
            else if (input.trim()) void createFromInput(input);
          }
        }}
        placeholder={selected.length > 0 ? t('category.addMore') : t('category.pickOrCreate')}
        style={{ width: '100%', fontSize: compact ? 12 : 14, color: 'var(--text-secondary)' }}
      />
      {open && (input.trim() || filtered.length > 0) && (
        <div className="category-picker-dropdown">
          {filtered.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => addCategory(c.id)}
              className="category-picker-option"
            >
              <span style={{ color: colorFromHex(c.colorHex) }}>{c.emoji}</span> {c.name}
            </button>
          ))}
          {input.trim() &&
            !categories.some((c) => c.name.toLowerCase() === input.trim().toLowerCase()) && (
              <button
                type="button"
                onClick={() => void createFromInput(input)}
                className="category-picker-option category-picker-create"
              >
                {t('category.create', { name: input.trim() })}
              </button>
            )}
        </div>
      )}
      {!compact && (
        <button
          type="button"
          className="text-btn mt8"
          onClick={() => store.openCreateCategory()}
        >
          {t('dict.addCategory')}
        </button>
      )}
    </div>
  );
}
