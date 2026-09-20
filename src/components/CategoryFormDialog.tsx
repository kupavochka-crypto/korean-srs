import { useEffect, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { CATEGORY_COLOR_OPTIONS, CATEGORY_EMOJI_OPTIONS } from '../domain/categories';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function CategoryFormDialog() {
  useStore();
  const editing = store.getEditingCategory();
  const isEdit = editing != null;

  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('📌');
  const [color, setColor] = useState('#E53935');
  const [error, setError] = useState('');

  useEffect(() => {
    if (editing) {
      setName(editing.name);
      setEmoji(editing.emoji);
      setColor(editing.colorHex);
    } else {
      setName('');
      setEmoji('📌');
      setColor('#E53935');
    }
    setError('');
  }, [editing]);

  function handleSave() {
    if (!name.trim()) {
      setError(t('category.errNameRequired'));
      return;
    }
    if (isEdit && editing) {
      void store.updateCategory(editing.id, name, emoji, color);
    } else {
      void store.createCategory(name, emoji, color);
    }
  }

  function handleClose() {
    store.closeCategoryForm();
  }

  return (
    <div className="overlay" onClick={handleClose}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">
            {isEdit ? t('category.editTitle') : t('category.createTitle')}
          </h3>
          <button className="sheet-close" onClick={handleClose}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">{t('category.nameLabel')}</label>
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t('category.namePlaceholder')}
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('category.emojiLabel')}</label>
          <div className="flow-layout">
            {CATEGORY_EMOJI_OPTIONS.map((e) => (
              <button
                key={e}
                type="button"
                className={`select-chip ${emoji === e ? 'active' : ''}`}
                onClick={() => setEmoji(e)}
                style={{ fontSize: 18 }}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">{t('category.colorLabel')}</label>
          <div className="flow-layout">
            {CATEGORY_COLOR_OPTIONS.map((c) => (
              <button
                key={c}
                type="button"
                className={`select-chip ${color === c ? 'active' : ''}`}
                onClick={() => setColor(c)}
                style={{ width: 34, height: 34, padding: 0, background: c }}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        {error && <div className="scan-error">{error}</div>}

        <button type="button" className="save-btn" onClick={handleSave}>
          {isEdit ? t('category.saveEdit') : t('category.saveCreate')}
        </button>
      </div>
    </div>
  );
}
