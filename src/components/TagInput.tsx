import { useState, useRef, useEffect } from 'react';
import { store, useStore } from '../store/AppStore';
import WIcon from '../ui/WIcon';

interface Props {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export default function TagInput({ tags, onChange }: Props) {
  useStore();
  const [input, setInput] = useState('');
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  const categoryNames = store.getCategories().map((c) => c.name);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  const tagSet = new Set(tags.map((t) => t.toLowerCase()));

  const filtered = categoryNames.filter(
    (n) => !tagSet.has(n.toLowerCase()) && n.toLowerCase().includes(input.toLowerCase())
  );

  function addTag(name: string) {
    const trimmed = name.trim();
    if (!trimmed || tagSet.has(trimmed.toLowerCase())) return;
    onChange([...tags, trimmed]);
    setInput('');
    setOpen(false);
  }

  function removeTag(name: string) {
    onChange(tags.filter((t) => t !== name));
  }

  return (
    <div ref={wrapRef} style={{ position: 'relative', width: '100%', marginTop: 4 }}>
      {tags.length > 0 && (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginBottom: 4 }}>
          {tags.map((t) => (
            <span
              key={t}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 4,
                background: 'var(--red)',
                color: '#fff',
                borderRadius: 8,
                padding: '2px 8px',
                fontSize: 11,
                fontWeight: 600,
              }}
            >
              {t}
              <button
                onClick={() => removeTag(t)}
                style={{ background: 'none', color: '#fff', fontSize: 13, padding: 0, lineHeight: 1 }}
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
            if (filtered.length > 0) addTag(filtered[0]);
            else if (input.trim()) addTag(input);
          }
        }}
        placeholder={tags.length > 0 ? 'ещё тег...' : 'теги через запятую'}
        style={{ width: '100%', fontSize: 12, color: 'var(--text-secondary)' }}
      />
      {open && input.trim() && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: '#fff',
            border: '1px solid var(--border)',
            borderRadius: 8,
            boxShadow: '0 4px 12px rgba(0,0,0,.1)',
            maxHeight: 120,
            overflowY: 'auto',
            zIndex: 10,
          }}
        >
          {filtered.map((n) => (
            <button
              key={n}
              onClick={() => addTag(n)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                fontSize: 13,
                background: 'none',
                borderBottom: '1px solid var(--border)',
              }}
            >
              {n}
            </button>
          ))}
          {input.trim() && !tagSet.has(input.trim().toLowerCase()) && (
            <button
              onClick={() => addTag(input)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                padding: '8px 12px',
                fontSize: 13,
                fontWeight: 600,
                background: 'none',
              }}
            >
              + «{input.trim()}»
            </button>
          )}
        </div>
      )}
    </div>
  );
}
