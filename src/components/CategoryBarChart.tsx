import { colorFromHex } from '../theme/colors';
import type { Category } from '../types';

export interface CategoryBarItem {
  category: Category;
  count: number;
}

interface Props {
  items: CategoryBarItem[];
}

export default function CategoryBarChart({ items }: Props) {
  if (items.length === 0) return null;
  const max = Math.max(...items.map((i) => i.count), 1);

  return (
    <div className="category-bar-chart">
      {items.map(({ category, count }) => {
        const pct = Math.round((count / max) * 100);
        return (
          <div key={category.id} className="category-bar-row">
            <span
              className="category-bar-emoji"
              style={{ backgroundColor: `${colorFromHex(category.colorHex)}20` }}
            >
              {category.emoji}
            </span>
            <div className="category-bar-body">
              <div className="category-bar-head">
                <span className="category-bar-name">{category.name}</span>
                <span className="category-bar-count">{count}</span>
              </div>
              <div className="category-bar-track">
                <div
                  className="category-bar-fill"
                  style={{
                    width: `${pct}%`,
                    backgroundColor: colorFromHex(category.colorHex),
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
