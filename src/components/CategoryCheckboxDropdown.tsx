import { useEffect, useRef } from 'react';
import { store, useStore } from '../store/AppStore';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
interface Props {
  open: boolean;
  categoryIds: string[];
  onChange: (categoryIds: string[]) => void;
  onApply: () => void;
  onClose: () => void;
}

export default function CategoryCheckboxDropdown({
  open,
  categoryIds,
  onChange,
  onApply,
  onClose,
}: Props) {
  useStore();
  const panelRef = useRef<HTMLDivElement>(null);
  const categories = store.getCategories();
  const selected = new Set(categoryIds);

  useEffect(() => {
    if (!open) return;
    function handlePointer(e: MouseEvent | TouchEvent) {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        onClose();
      }
    }
    document.addEventListener('mousedown', handlePointer);
    document.addEventListener('touchstart', handlePointer);
    return () => {
      document.removeEventListener('mousedown', handlePointer);
      document.removeEventListener('touchstart', handlePointer);
    };
  }, [open, onClose]);

  if (!open) return null;

  function toggle(id: string) {
    if (selected.has(id)) {
      onChange(categoryIds.filter((cid) => cid !== id));
    } else {
      onChange([...categoryIds, id]);
    }
  }

  return (
    <div ref={panelRef} className="dict-category-dropdown">
      <p className="dict-category-dropdown-title">{t('dict.pickCategories')}</p>
      <div className="dict-category-dropdown-list">
        {categories.length === 0 ? (
          <p className="field-hint">{t('dict.noCategoriesYet')}</p>
        ) : (
          categories.map((c) => (
            <label key={c.id} className="dict-category-option">
              <input
                type="checkbox"
                checked={selected.has(c.id)}
                onChange={() => toggle(c.id)}
              />
              <span
                className="dict-category-option-dot"
                style={{ background: colorFromHex(c.colorHex) }}
              >
                {c.emoji}
              </span>
              <span className="dict-category-option-name">{c.name}</span>
            </label>
          ))
        )}
      </div>
      <p className="field-hint dict-category-dropdown-hint">{t('dict.categoriesHint')}</p>
      <div className="dict-category-dropdown-footer">
        <button
          type="button"
          className="text-btn"
          onClick={() => {
            onClose();
            store.openCreateCategory();
          }}
        >
          {t('dict.addCategory')}
        </button>
        <button
          type="button"
          className="primary-btn dict-category-apply-btn"
          disabled={categoryIds.length === 0}
          onClick={onApply}
        >
          {t('dict.assign')}
        </button>
      </div>
    </div>
  );
}
