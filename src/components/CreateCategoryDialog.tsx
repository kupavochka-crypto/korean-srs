import { useState } from 'react';
import { store, useStore } from '../store/AppStore';

const EMOJI_OPTIONS = ['📌', '🍱', '✈️', '💼', '📚', '💬', '😊', '🌿', '🎯', '🎁', '🏠', '⭐'];
const COLOR_OPTIONS = [
  '#E53935',
  '#FB8C00',
  '#00897B',
  '#1E88E5',
  '#8E24AA',
  '#43A047',
  '#F06292',
  '#558B2F',
  '#5E35B1',
  '#00ACC1',
];

export default function CreateCategoryDialog() {
  useStore();
  const [name, setName] = useState('');
  const [emoji, setEmoji] = useState('📌');
  const [color, setColor] = useState('#E53935');
  const [error, setError] = useState('');

  function handleSave() {
    if (!name.trim()) {
      setError('Введите название категории.');
      return;
    }
    store.createCategory(name, emoji, color);
  }

  return (
    <div className="overlay" onClick={() => store.closeCreateCategory()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">Новая категория</h3>
          <button className="sheet-close" onClick={() => store.closeCreateCategory()}>
            ✕
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Название</label>
          <input
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Хобби"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Эмодзи</label>
          <div className="flow-layout">
            {EMOJI_OPTIONS.map((e) => (
              <button
                key={e}
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
          <label className="form-label">Цвет</label>
          <div className="flow-layout">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c}
                className={`select-chip ${color === c ? 'active' : ''}`}
                onClick={() => setColor(c)}
                style={{ width: 34, height: 34, padding: 0, background: c }}
                aria-label={c}
              />
            ))}
          </div>
        </div>

        {error && <div className="scan-error">{error}</div>}

        <button className="save-btn" onClick={handleSave}>
          Создать
        </button>
      </div>
    </div>
  );
}