import { useState } from 'react';
import { store, useStore } from '../store/AppStore';
import WordCard from '../components/WordCard';
import TagInput from '../components/TagInput';
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

  return (
    <div>
      <div className="search-row">
        <input
          className="search-input"
          placeholder={t('dict.search')}
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
          <span style={{ fontSize: 24 }}><WIcon name="inbox" size={24} style={{ color: 'var(--text-tertiary)' }} /></span>
          <span>
            {search || selectedCategoryId ? t('dict.emptyFound') : t('dict.emptyEmpty')}
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

      <button className="fab" onClick={() => store.openAddWord()} aria-label={t('dict.addWordAria')}>
        +
      </button>

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
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '8px 0 16px' }}>
              {t('dict.tagsHint')}
            </p>
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