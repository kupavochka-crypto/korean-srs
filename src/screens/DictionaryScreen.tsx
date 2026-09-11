import { useState } from 'react';
import { store, useStore } from '../store/AppStore';
import WordCard from '../components/WordCard';
import TagInput from '../components/TagInput';

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
          placeholder="Поиск: корейский, перевод, ромадзия…"
          value={search}
          onChange={(e) => store.setSearchQuery(e.target.value)}
        />
        <button
          className="icon-btn"
          onClick={() => store.toggleSelectionMode()}
          aria-label={selectionActive ? 'Выйти из выбора' : 'Выбрать слова'}
          style={selectionActive ? { background: 'var(--red)', color: '#fff', border: 'none' } : {}}
        >
          {selectionActive ? '✕' : '☑️'}
        </button>
      </div>

      {selectionActive && (
        <p className="selection-hint">
          Выбрано: {selectedIds.size}. Нажмите на слово, чтобы выбрать или убрать.
        </p>
      )}

      <div className="chips-row">
        <button
          className={`chip ${selectedCategoryId === null ? 'active' : ''}`}
          onClick={() => store.setSelectedCategory(null)}
        >
          Все
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
          + Категория
        </button>
      </div>

      {words.length === 0 ? (
        <div className="empty-hint">
          <span style={{ fontSize: 24 }}>📭</span>
          <span>
            {search || selectedCategoryId
              ? 'Ничего не найдено по вашему запросу.'
              : 'Словарь пуст. Добавьте слова!'}
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

      <button className="fab" onClick={() => store.openAddWord()} aria-label="Добавить слово">
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
            ✏️ Теги
          </button>
          <button className="danger-btn" onClick={() => store.deleteSelection()}>
            🗑 Удалить
          </button>
          <button className="secondary-btn" onClick={() => store.clearSelection()}>
            Отмена
          </button>
        </div>
      )}

      {tagDialog && (
        <div className="overlay" onClick={() => setTagDialog(false)}>
          <div className="sheet" onClick={(e) => e.stopPropagation()}>
            <div className="sheet-header">
              <h3 className="sheet-title">Назначить теги ({selectedIds.size} слов)</h3>
              <button className="sheet-close" onClick={() => setTagDialog(false)}>
                ✕
              </button>
            </div>
            <TagInput tags={pendingTags} onChange={setPendingTags} />
            <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '8px 0 16px' }}>
              Теги будут добавлены ко всем выбранным словам (существующие сохранятся).
            </p>
            <button
              className="primary-btn"
              onClick={() => {
                store.assignTagsToSelected(pendingTags);
                setTagDialog(false);
              }}
            >
              Назначить
            </button>
          </div>
        </div>
      )}
    </div>
  );
}