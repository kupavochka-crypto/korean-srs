import { store, useStore } from '../store/AppStore';
import WordCard from '../components/WordCard';

export default function DictionaryScreen() {
  useStore();
  const words = store.filteredWords();
  const categories = store.getCategories();
  const selectedCategoryId = store.getSelectedCategoryId();
  const search = store.getSearchQuery();

  return (
    <div>
      <input
        className="search-input"
        placeholder="Поиск: корейский, перевод, ромадзия…"
        value={search}
        onChange={(e) => store.setSearchQuery(e.target.value)}
      />

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
            <WordCard key={w.id} word={w} />
          ))}
        </div>
      )}

      <button className="fab" onClick={() => store.openAddWord()} aria-label="Добавить слово">
        +
      </button>
    </div>
  );
}