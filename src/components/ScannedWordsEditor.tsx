import CategoryMultiPicker from './CategoryMultiPicker';
import { t } from '../domain/i18n';
import type { ImportedWordDraft } from '../types';

type Props = {
  drafts: ImportedWordDraft[];
  selected: boolean[];
  readyCount: number;
  onToggle: (index: number) => void;
  onUpdateField: (index: number, field: 'korean' | 'translation', value: string) => void;
  onUpdateCategoryIds: (index: number, categoryIds: string[]) => void;
  onSave: () => void;
  saveLabel: string;
  knownInDictionaryCount?: number;
  renderLeading?: (index: number) => React.ReactNode;
  readOnly?: (index: number) => boolean;
  rowMeta?: (index: number) => React.ReactNode;
};

export default function ScannedWordsEditor({
  drafts,
  selected,
  readyCount,
  onToggle,
  onUpdateField,
  onUpdateCategoryIds,
  onSave,
  saveLabel,
  knownInDictionaryCount,
  renderLeading,
  readOnly,
  rowMeta,
}: Props) {
  return (
    <>
      <p className="section-title mt12">
        {t('import.recognizedTitle', {
          count: readyCount,
          known:
            knownInDictionaryCount != null && knownInDictionaryCount > 0
              ? t('import.recognizedKnown', { count: knownInDictionaryCount })
              : '',
        })}
      </p>
      <div className="mb12">
        {drafts.map((d, i) => {
          const locked = readOnly?.(i) ?? false;
          return (
            <div key={i} className="scanned-word-row" style={{ flexWrap: 'wrap' }}>
              {renderLeading ? (
                renderLeading(i)
              ) : (
                <button
                  type="button"
                  className={`scan-check ${selected[i] ? 'active' : ''}`}
                  onClick={() => onToggle(i)}
                  style={
                    selected[i]
                      ? { background: 'var(--red)', color: '#fff', border: 'none' }
                      : {}
                  }
                >
                  {selected[i] ? '✓' : '○'}
                </button>
              )}
              <input
                className="form-input"
                value={d.korean}
                onChange={(e) => onUpdateField(i, 'korean', e.target.value)}
                placeholder="корейское"
                readOnly={locked}
                style={{ width: 96, flex: 'none', fontWeight: 700, fontSize: 16 }}
              />
              <input
                className="form-input"
                value={d.translation}
                onChange={(e) => onUpdateField(i, 'translation', e.target.value)}
                placeholder="перевод"
                readOnly={locked}
              />
              {!locked && (
                <CategoryMultiPicker
                  compact
                  categoryIds={d.categoryIds ?? []}
                  onChange={(categoryIds) => onUpdateCategoryIds(i, categoryIds)}
                />
              )}
              {rowMeta?.(i)}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        className="save-btn"
        onClick={onSave}
        disabled={readyCount === 0}
        style={readyCount === 0 ? { opacity: 0.5 } : {}}
      >
        {saveLabel}
      </button>
    </>
  );
}
