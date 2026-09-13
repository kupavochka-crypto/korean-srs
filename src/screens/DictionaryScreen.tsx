import { useState } from 'react';
import { store, useStore } from '../store/AppStore';
import WordCard from '../components/WordCard';
import TagInput from '../components/TagInput';
import ScreenHeader from '../components/ScreenHeader';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function DictionaryScreen() {
  useStore();
  const words = store.filteredWords();
  const categories = store.getCategories();
  const selectedCategoryId = store.getSelectedCategoryId();
  const search = store.getSearchQuery();
  const selectionActive = store.isSelectionActive();
  const selectedIds = store.getSelectedIds();
  const [tagDialog, setTagDialog] = useState(false);
  const [pendingTags, setPendingTags] = useState<string[]>([]);
  const lang = store.getLearningLanguage();

  return (
    <div>
      <ScreenHeader title={t('tab.dictionary')} subtitle={lang === 'zh' ? '词典' : '단어장'} />
      <div className="search-row">
        <input
          className="search-input"
          placeholder={lang === 'zh' ? t('dict.searchZh') : t('dict.search')}
          value={search}
          onChange={(e) => store.setSearchQuery(e.target.value)}
        />
        <button
          className="icon-btn"
          onClick={() => store.toggleSelectionMode()}
          aria-label={selectionActive ? t('dict.selectOnAria') : t('dict.selectOffAria')}
          style={selectionActive ? { background: 'var(--red)', color: '#fff', border: 'none' } : {}}
        >
          {selectionActive ? <WIcon name="x-lg" /> : <WIcon name="check-square" />}
        </button>
      </div>

      {selectionActive && (
        <p className="selection-hint">{t('dict.selectionHint', { count: selectedIds.size })}</p>
      )}

      {words.length > 0 && !selectionActive && (
        <div className="dict-review-row">
          <button
            className="secondary-btn"
            onClick={() =>
              selectedCategoryId
                ? store.startCategoryReview(selectedCategoryId, 'all')
                : store.startFilteredReview(words.map((w) => w.id), 'all')
            }
          >
            <WIcon name="stack" size={16} /> {t('dict.reviewCards')}
          </button>
          <button
            className="secondary-btn"
            onClick={() =>
              selectedCategoryId
                ? store.startCategoryQuiz(selectedCategoryId, 'reverse')
                : store.startFilteredQuiz(words.map((w) => w.id), 'reverse')
            }
          >
            <WIcon name="patch-question" size={16} /> {t('dict.reviewQuiz')}
          </button>
        </div>
      )}

      <div className="chips-row">
        <button
          className={`chip ${selectedCategoryId === null ? 'active' : ''}`}
          onClick={() => store.setSelectedCategory(null)}
        >
          {t('dict.all')}
        </button>
        {categories.map((c) => (
          <button
            key={c.id}
            className={`chip ${selectedCategoryId === c.id ? 'active' : ''}`}
            onClick={() =>
              store.setSelectedCategory(selectedCategoryId === c.id ? null : c.id)
            }
          >
            {c.emoji} {c.name}
          </button>
        ))}
        <button className="chip" onClick={() => store.openCreateCategory()}>
          {t('dict.addCategory')}
        </button>
      </div>

      {words.length === 0 ? (
        <div className="empty-hint">
          <span className="empty-state-icon"><WIcon name="inbox" size={24} style={{ color: 'var(--text-tertiary)' }} /></span>
          <span>
            {search || selectedCategoryId
              ? t('dict.emptyFound')
              : lang === 'zh'
                ? t('dict.emptyZh')
                : t('dict.emptyEmpty')}
          </span>
        </div>
      ) : (
        <div className="word-list">
          {words.map((w) => (
            <WordCard
              key={w.id}
              word={w}
              selectable={selectionActive}
              selected={selectedIds.has(w.id)}
            />
          ))}
        </div>
      )}

      {selectionActive && (
        <div className="bulk-toolbar">
          <span className="bulk-count">{selectedIds.size}</span>
          <button
            className="secondary-btn"
            onClick={() => {
              setPendingTags([]);
              setTagDialog(true);
            }}
          >
            {t('dict.tags')}
          </button>
          <button className="danger-btn" onClick={() => store.deleteSelection()}>
            {t('dict.delete')}
          </button>
          <button className="secondary-btn" onClick={() => store.clearSelection()}>
            {t('common.cancel')}
          </button>
        </div>
      )}

      {tagDialog && (
        <div className="overlay" onClick={() => setTagDialog(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-header">
              <h3 className="sheet-title">{t('dict.tagsDialog', { count: selectedIds.size })}</h3>
              <button className="sheet-close" onClick={() => setTagDialog(false)}>
                <WIcon name="x-lg" />
              </button>
            </div>
            <TagInput tags={pendingTags} onChange={setPendingTags} />
            <p className="field-hint">{t('dict.tagsHint')}</p>
            <button
              className="primary-btn"
              onClick={() => {
                store.assignTagsToSelected(pendingTags);
                setTagDialog(false);
              }}
            >
              {t('dict.assign')}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}