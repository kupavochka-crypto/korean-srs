import TagInput from './TagInput';
import type { ImportedWordDraft } from '../types';

type Props = {
  drafts: ImportedWordDraft[];
  selected: boolean[];
  readyCount: number;
  onToggle: (index: number) => void;
  onUpdateField: (index: number, field: 'korean' | 'translation', value: string) => void;
  onUpdateTags: (index: number, tags: string[]) => void;
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
  onUpdateTags,
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
        Распознанные слова ({readyCount} готовых
        {knownInDictionaryCount != null && knownInDictionaryCount > 0
          ? ` · ${knownInDictionaryCount} уже в словаре`
          : ''}
        )
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
              {!locked && <TagInput tags={d.tags} onChange={(tags) => onUpdateTags(i, tags)} />}
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
