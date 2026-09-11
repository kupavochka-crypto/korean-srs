import { useState, useEffect } from 'react';
import { store, useStore } from '../store/AppStore';
import { toRomaja } from '../domain/romaja';
import { lookupNotebookWord } from '../domain/seed-data';
import { colorFromHex } from '../theme/colors';
import type { Difficulty } from '../types';

const DIFFICULTIES: Difficulty[] = ['Начальный', 'Средний', 'Продвинутый'];

export default function AddWordDialog() {
  useStore();
  const editing = store.getEditingWord();
  const categories = store.getCategories();

  const [korean, setKorean] = useState(store.getPrefilledKorean());
  const [hanja, setHanja] = useState('');
  const [romaja, setRomaja] = useState('');
  const [translation, setTranslation] = useState('');
  const [exampleSentence, setExampleSentence] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [categoryId, setCategoryId] = useState<string | null>(store.getPrefilledCategoryId());
  const [difficulty, setDifficulty] = useState<Difficulty>('Начальный');
  const [error, setError] = useState('');

  useEffect(() => {
    const w = store.getEditingWord();
    if (w) {
      setKorean(w.korean);
      setHanja(w.hanja ?? '');
      setRomaja(w.romaja);
      setTranslation(w.translation);
      setExampleSentence(w.exampleSentence ?? '');
      setExampleTranslation(w.exampleTranslation ?? '');
      setCategoryId(w.categoryId);
      setDifficulty(w.difficulty);
    }
  }, []);

  function handleKoreanChange(value: string) {
    setKorean(value);
    const notebook = lookupNotebookWord(value);
    if (notebook && !translation) {
      setTranslation(notebook.translation);
    }
    if (!romaja) {
      setRomaja(toRomaja(value));
    }
  }

  function handleSave() {
    if (!korean.trim()) {
      setError('Укажите корейское слово.');
      return;
    }
    if (!translation.trim()) {
      setError('Укажите перевод.');
      return;
    }
    store.saveWord({
      korean,
      hanja,
      romaja,
      translation,
      exampleSentence,
      exampleTranslation,
      categoryId,
      difficulty,
    });
  }

  return (
    <div className="overlay" onClick={() => store.closeAddWord()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{editing ? 'Изменить слово' : 'Добавить слово'}</h3>
          <button className="sheet-close" onClick={() => store.closeAddWord()}>
            ✕
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">Корейское слово *</label>
          <input
            className="form-input"
            value={korean}
            onChange={(e) => handleKoreanChange(e.target.value)}
            placeholder="커피"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Перевод *</label>
          <input
            className="form-input"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="кофе"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Ромадзия (автозаполнение)</label>
          <input
            className="form-input"
            value={romaja}
            onChange={(e) => setRomaja(e.target.value)}
            placeholder="keopi"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Ханча (необязательно)</label>
          <input
            className="form-input"
            value={hanja}
            onChange={(e) => setHanja(e.target.value)}
            placeholder="咖啡"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Пример предложения</label>
          <input
            className="form-input"
            value={exampleSentence}
            onChange={(e) => setExampleSentence(e.target.value)}
            placeholder="저는 커피를 마셔요"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Перевод примера</label>
          <input
            className="form-input"
            value={exampleTranslation}
            onChange={(e) => setExampleTranslation(e.target.value)}
            placeholder="Я пью кофе"
          />
        </div>

        <div className="form-group">
          <label className="form-label">Категория</label>
          <div className="flow-layout">
            {categories.map((c) => (
              <button
                key={c.id}
                className={`select-chip ${categoryId === c.id ? 'active' : ''}`}
                onClick={() => setCategoryId(categoryId === c.id ? null : c.id)}
              >
                <span style={{ color: colorFromHex(c.colorHex) }}>{c.emoji}</span> {c.name}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">Уровень</label>
          <div className="flow-layout">
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                className={`select-chip ${difficulty === d ? 'active' : ''}`}
                onClick={() => setDifficulty(d)}
              >
                {d}
              </button>
            ))}
          </div>
        </div>

        {error && <div className="scan-error">{error}</div>}

        <button className="save-btn" onClick={handleSave}>
          {editing ? 'Сохранить' : 'Добавить'}
        </button>
      </div>
    </div>
  );
}