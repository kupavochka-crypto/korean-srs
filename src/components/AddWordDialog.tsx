import { useState, useEffect, useMemo } from 'react';
import { store, useStore } from '../store/AppStore';
import { toRomaja } from '../domain/romaja';
import { lookupNotebookWord } from '../domain/seed-data';
import { activeThemeSources, formatSource } from '../domain/sources';
import { colorFromHex } from '../theme/colors';
import { suggestCategories } from '../domain/suggest-category';
import { storedRecentCategoryIds } from '../domain/settings';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import type { Difficulty } from '../types';

const DIFFICULTIES: Difficulty[] = ['Начальный', 'Средний', 'Продвинутый'];

export default function AddWordDialog() {
  useStore();
  const editing = store.getEditingWord();
  const categories = store.getCategories();
  const sources = activeThemeSources(store.getSources());

  const learningLanguage = store.getLearningLanguage();
  const [korean, setKorean] = useState(store.getPrefilledKorean());
  const [hanja, setHanja] = useState('');
  const [hanzi, setHanzi] = useState('');
  const [pinyin, setPinyin] = useState('');
  const [tones, setTones] = useState('');
  const [romaja, setRomaja] = useState('');
  const [translation, setTranslation] = useState(store.getPrefilledTranslation());
  const [exampleSentence, setExampleSentence] = useState('');
  const [exampleTranslation, setExampleTranslation] = useState('');
  const [categoryId, setCategoryId] = useState<string | null>(store.getPrefilledCategoryId());
  const [sourceId, setSourceId] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<Difficulty>('Начальный');
  const [error, setError] = useState('');

  const suggestions = useMemo(
    () =>
      suggestCategories(
        { korean: learningLanguage === 'zh' ? hanzi || korean : korean, translation },
        {
          words: store.getWords(),
          categories,
          recentCategoryIds: storedRecentCategoryIds(),
          contextCategoryId: store.getSelectedCategoryId(),
        }
      ),
    [korean, hanzi, translation, categories, learningLanguage, store.getSnapshot()]
  );

  useEffect(() => {
    const w = store.getEditingWord();
    if (w) {
      setKorean(w.korean);
      setHanja(w.hanja ?? '');
      setHanzi(w.language === 'zh' ? w.korean : '');
      setPinyin(w.pinyin ?? '');
      setTones(w.tones ?? '');
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
    const lemma = learningLanguage === 'zh' ? (hanzi || korean) : korean;
    if (!lemma.trim()) {
      setError(learningLanguage === 'zh' ? t('add.errHanzi') : t('add.errKorean'));
      return;
    }
    if (!translation.trim()) {
      setError(t('add.errTranslation'));
      return;
    }
    store.saveWord({
      korean: learningLanguage === 'zh' ? (hanzi || korean) : korean,
      hanja,
      pinyin,
      tones,
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
          <label className="form-label">
            {learningLanguage === 'zh' ? t('add.hanzi') : t('add.korean')}
          </label>
          <input
            className="form-input"
            value={learningLanguage === 'zh' ? hanzi || korean : korean}
            onChange={(e) => {
              if (learningLanguage === 'zh') setHanzi(e.target.value);
              else handleKoreanChange(e.target.value);
            }}
            placeholder={learningLanguage === 'zh' ? '你好' : '커피'}
          />
        </div>

        {learningLanguage === 'zh' && (
          <>
            <div className="form-group">
              <label className="form-label">{t('add.pinyin')}</label>
              <input
                className="form-input"
                value={pinyin}
                onChange={(e) => setPinyin(e.target.value)}
                placeholder="nǐ hǎo"
              />
            </div>
            <div className="form-group">
              <label className="form-label">{t('add.tones')}</label>
              <input
                className="form-input"
                value={tones}
                onChange={(e) => setTones(e.target.value)}
                placeholder="3 3"
              />
            </div>
          </>
        )}

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
          {suggestions.length > 0 && (
            <div className="suggest-row mb8">
              <span className="field-hint">{t('add.suggested')}</span>
              {suggestions.map((s) => (
                <button
                  key={s.name + (s.categoryId ?? 'new')}
                  className="select-chip"
                  onClick={async () => {
                    if (s.reason === 'create') {
                      await store.createCategory(s.name, s.emoji ?? '🎵', '#E53935');
                      const cat = store.getCategories().find((c) => c.name === s.name);
                      if (cat) setCategoryId(cat.id);
                    } else if (s.categoryId) {
                      setCategoryId(s.categoryId);
                    }
                  }}
                >
                  {s.reason === 'create' ? t('add.createCat', { name: s.name }) : `${s.emoji ?? ''} ${s.name}`}
                </button>
              ))}
            </div>
          )}
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