import { useState } from 'react';
import { store, useStore } from '../store/AppStore';
import WordCard from '../components/WordCard';
import CategoryCheckboxDropdown from '../components/CategoryCheckboxDropdown';
import ScreenHeader from '../components/ScreenHeader';
import { t } from '../domain/i18n';
import { tabSubtitle } from '../domain/learning-ui';
import WIcon from '../ui/WIcon';

export default function DictionaryScreen() {
  useStore();
  const words = store.filteredWords();
  const categories = store.getCategories();
  const selectedCategoryId = store.getSelectedCategoryId();
  const search = store.getSearchQuery();
  const selectionActive = store.isSelectionActive();
  const selectedIds = store.getSelectedIds();
  const [categoryMenuOpen, setCategoryMenuOpen] = useState(false);
  const [pendingCategoryIds, setPendingCategoryIds] = useState<string[]>([]);
  const lang = store.getLearningLanguage();
  const manageMode = store.isCategoryManageMode();

  function closeCategoryMenu() {
    setCategoryMenuOpen(false);
    setPendingCategoryIds([]);
  }

  function applyCategories() {
    void store.assignCategoriesToSelected(pendingCategoryIds);
    closeCategoryMenu();
  }

  return (
    <div>
      <ScreenHeader title={t('tab.dictionary')} subtitle={tabSubtitle('dictionary', lang)} />
      <div className="search-row">
        <input
          className="search-input"
          placeholder={lang === 'zh' ? t('dict.searchZh') : t('dict.search')}
          value={search}
          onChange={(e) => store.setSearchQuery(e.target.value)}
        />
        <button
          className="icon-btn"
          onClick={() => store.openFileImport()}
          aria-label={t('dict.importFileAria')}
        >
          <WIcon name="file-text" />
        </button>
        <button
          className="icon-btn"
          onClick={() => store.toggleSelectionMode()}
          aria-label={selectionActive ? t('dict.selectOnAria') : t('dict.selectOffAria')}
          style={selectionActive ? { background: 'var(--red)', color: '#fff', border: 'none' } : {}}
        >
          {selectionActive ? <WIcon name="x-lg" /> : <WIcon name="check-square" />}
        </button>
      </div>

      {selectionActive && selectedIds.size === 0 && (
        <p className="selection-hint">{t('dict.selectionEmpty')}</p>
      )}

      {selectionActive && selectedIds.size > 0 && (
        <div className="dict-bulk-bar" role="toolbar" aria-label={t('dict.bulkActions')}>
          <p className="dict-bulk-summary">{t('dict.selectionHint', { count: selectedIds.size })}</p>
          <div className="dict-bulk-actions">
            <button
              type="button"
              className={`dict-bulk-btn${categoryMenuOpen ? ' dict-bulk-btn--active' : ''}`}
              aria-expanded={categoryMenuOpen}
              onClick={() => {
                if (categoryMenuOpen) {
                  closeCategoryMenu();
                } else {
                  setPendingCategoryIds([]);
                  setCategoryMenuOpen(true);
                }
              }}
            >
              <WIcon name="collection" size={16} />
              {t('dict.assignCategory')}
            </button>
            <button
              type="button"
              className="dict-bulk-btn dict-bulk-btn--danger"
              onClick={() => {
                if (confirm(t('dict.deleteConfirm', { count: selectedIds.size }))) {
                  void store.deleteSelection();
                }
              }}
            >
              <WIcon name="trash" size={16} />
              {t('dict.deleteSelected')}
            </button>
          </div>
          <CategoryCheckboxDropdown
            open={categoryMenuOpen}
            categoryIds={pendingCategoryIds}
            onChange={setPendingCategoryIds}
            onApply={applyCategories}
            onClose={closeCategoryMenu}
          />
        </div>
      )}

      {words.length > 0 && !selectionActive && (
        <div className="dict-review-row">
          <button
            className="secondary-btn"
            onClick={() =>
              selectedCategoryId
                ? store.startCategoryReview(selectedCategoryId, 'all', { fromDictionary: true })
                : store.startFilteredReview(words.map((w) => w.id), 'all', { fromDictionary: true })
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
        {!manageMode && (
          <button
            className={`chip ${selectedCategoryId === null ? 'active' : ''}`}
            onClick={() => store.setSelectedCategory(null)}
          >
            {t('dict.all')}
          </button>
        )}
        {categories.map((c) =>
          manageMode ? (
            <div key={c.id} className="chip-manage">
              <span className="chip chip-manage-label">
                {c.emoji} {c.name}
              </span>
              <span className="chip-manage-actions">
                <button
                  type="button"
                  className="chip-manage-btn"
                  aria-label={t('category.editAria')}
                  onClick={() => store.openEditCategory(c)}
                >
                  <WIcon name="pencil" size={14} />
                </button>
                <button
                  type="button"
                  className="chip-manage-btn chip-manage-btn--danger"
                  aria-label={t('category.deleteAria')}
                  onClick={() => void store.deleteCategory(c.id)}
                >
                  <WIcon name="trash" size={14} />
                </button>
              </span>
            </div>
          ) : (
            <button
              key={c.id}
              className={`chip ${selectedCategoryId === c.id ? 'active' : ''}`}
              onClick={() =>
                store.setSelectedCategory(selectedCategoryId === c.id ? null : c.id)
              }
            >
              {c.emoji} {c.name}
            </button>
          )
        )}
        <button className="chip" onClick={() => store.openCreateCategory()}>
          {t('dict.addCategory')}
        </button>
        <button
          type="button"
          className={`chip chip-gear ${manageMode ? 'active' : ''}`}
          aria-label={manageMode ? t('category.manageDone') : t('category.manage')}
          title={manageMode ? t('category.manageDone') : t('category.manage')}
          onClick={() => store.toggleCategoryManageMode()}
        >
          <WIcon name="gear" size={16} />
          {manageMode ? t('category.manageDone') : null}
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
    </div>
  );
}
