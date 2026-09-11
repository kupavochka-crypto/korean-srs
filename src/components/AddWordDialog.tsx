import { useState, useEffect } from 'react';
import { store, useStore } from '../store/AppStore';
import { toRomaja } from '../domain/romaja';
import { lookupNotebookWord } from '../domain/seed-data';
import { activeThemeSources, formatSource } from '../domain/sources';
import { colorFromHex } from '../theme/colors';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import type { Difficulty } from '../types';

const DIFFICULTIES: Difficulty[] = ['Начальный', 'Средний', 'Продвинутый'];

export default function AddWordDialog() {
  useStore();
  const editing = store.getEditingWord();
  const categories = store.getCategories();
  const sources = activeThemeSources(store.getSources());

  const [korean, setKorean] = useState(store.getPrefilledKorean());
  const [hanja, setHanja] = useState('');
  const [romaja, setRomaja] = useState('');
  const [translation, setTranslation] = useState('');
  const [exampleSentence, setExampleSentence] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [categoryId, setCategoryId] = useState<string | null>(store.getPrefilledCategoryId());
  const [sourceId, setSourceId] = useState<string | null>(null);
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
      setSourceId(w.sourceId);
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
      setError(t('add.errKorean'));
      return;
    }
    if (!translation.trim()) {
      setError(t('add.errTranslation'));
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
      sourceId,
      difficulty,
    });
  }

  return (
    <div className="overlay" onClick={() => store.closeAddWord()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{editing ? t('add.titleEdit') : t('add.titleNew')}</h3>
          <button className="sheet-close" onClick={() => store.closeAddWord()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.korean')}</label>
          <input
            className="form-input"
            value={korean}
            onChange={(e) => handleKoreanChange(e.target.value)}
            placeholder="커피"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.translation')}</label>
          <input
            className="form-input"
            value={translation}
            onChange={(e) => setTranslation(e.target.value)}
            placeholder="кофе"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.romaja')}</label>
          <input
            className="form-input"
            value={romaja}
            onChange={(e) => setRomaja(e.target.value)}
            placeholder="keopi"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.hanja')}</label>
          <input
            className="form-input"
            value={hanja}
            onChange={(e) => setHanja(e.target.value)}
            placeholder="咖啡"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.exampleSentence')}</label>
          <input
            className="form-input"
            value={exampleSentence}
            onChange={(e) => setExampleSentence(e.target.value)}
            placeholder="저는 커피를 마셔요"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.exampleTranslation')}</label>
          <input
            className="form-input"
            value={exampleTranslation}
            onChange={(e) => setExampleTranslation(e.target.value)}
            placeholder="Я пью кофе"
          />
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.category')}</label>
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
          <label className="form-label">{t('add.source')}</label>
          <div className="flow-layout">
            <button
              className={`select-chip ${sourceId === null ? 'active' : ''}`}
              onClick={() => setSourceId(null)}
            >
              {t('add.noSource')}
            </button>
            {sources.map((s) => (
              <button
                key={s.id}
                className={`select-chip ${sourceId === s.id ? 'active' : ''}`}
                onClick={() => setSourceId(s.id)}
              >
                {formatSource(s)}
              </button>
            ))}
          </div>
        </div>

        <div className="form-group">
          <label className="form-label">{t('add.level')}</label>
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
          {editing ? t('common.save') : t('common.add')}
        </button>
      </div>
    </div>
  );
}