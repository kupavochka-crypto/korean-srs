import { useRef, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { FileImportError, readImportFile } from '../domain/file-import';
import { t } from '../domain/i18n';
import ScannedWordsEditor from './ScannedWordsEditor';
import WIcon from '../ui/WIcon';
import type { ImportedWordDraft } from '../types';

export default function FileImportDialog() {
  useStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploadFileName, setUploadFileName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [drafts, setDrafts] = useState<ImportedWordDraft[]>([]);
  const [selected, setSelected] = useState<boolean[]>([]);

  const selectedCategoryId = store.getSelectedCategoryId();
  const defaultCategoryIds = selectedCategoryId ? [selectedCategoryId] : [];

  async function processFile(file: File) {
    setProcessing(true);
    setError('');
    setDrafts([]);
    setSelected([]);
    setUploadFileName(file.name);

    try {
      const result = await readImportFile(file);
      if (result.drafts.length === 0) {
        setError(t('fileImport.empty'));
        return;
      }
      const withCategories = result.drafts.map((d) => ({
        ...d,
        categoryIds: d.categoryIds.length > 0 ? d.categoryIds : [...defaultCategoryIds],
      }));
      setDrafts(withCategories);
      setSelected(withCategories.map(() => true));
    } catch (err) {
      if (err instanceof FileImportError && err.message === 'tooLarge') {
        setError(t('fileImport.tooLarge'));
      } else {
        setError(t('fileImport.error'));
      }
    } finally {
      setProcessing(false);
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    void processFile(file);
    e.target.value = '';
  }

  function updateField(index: number, field: 'korean' | 'translation', value: string) {
    setDrafts((prev) => prev.map((d, i) => (i === index ? { ...d, [field]: value } : d)));
  }

  function updateCategoryIds(index: number, categoryIds: string[]) {
    setDrafts((prev) => prev.map((d, i) => (i === index ? { ...d, categoryIds } : d)));
  }

  function toggleIndex(index: number) {
    setSelected((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  function handleSave() {
    const toImport = drafts.filter((_, i) => selected[i]);
    if (toImport.length === 0) return;
    void store.importWords(toImport);
  }

  const readyCount = drafts.filter(
    (d, i) => selected[i] && d.korean.trim() && d.translation.trim()
  ).length;

  return (
    <div className="overlay" onClick={() => store.closeFileImport()}>
      <div className="sheet sheet-scroll" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('fileImport.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeFileImport()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <p className="field-hint mb12">{t('fileImport.intro')}</p>

        <h4 className="form-label">{t('fileImport.formatsTitle')}</h4>
        <ul className="file-import-formats field-hint mb12">
          <li>{t('fileImport.formatTsv')}</li>
          <li>{t('fileImport.formatCsv')}</li>
          <li>{t('fileImport.formatJson')}</li>
          <li>{t('fileImport.formatAnki')}</li>
        </ul>
        <p className="field-hint mb8">{t('fileImport.exampleTsv')}</p>
        <p className="field-hint mb12">{t('fileImport.exampleCsv')}</p>

        <div className="scan-tools">
          <button
            className="scan-tool"
            onClick={() => fileInputRef.current?.click()}
            disabled={processing}
          >
            <span className="scan-tool-icon">
              <WIcon name="file-text" size={22} />
            </span>
            <span>
              {t('fileImport.pickFile')}{' '}
              <span className="song-mode-badge song-mode-badge--free">{t('fileImport.badgeFree')}</span>
            </span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept=".csv,.tsv,.txt,.json,text/csv,text/tab-separated-values,text/plain,application/json"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        {uploadFileName && (
          <p style={{ fontSize: 12, color: 'var(--text-primary)', margin: '8px 0 0' }}>
            {uploadFileName}
          </p>
        )}

        {processing && <div className="scan-status">{t('fileImport.parsing')}</div>}

        {error && <div className="scan-error">{error}</div>}

        {drafts.length > 0 && (
          <ScannedWordsEditor
            drafts={drafts}
            selected={selected}
            readyCount={readyCount}
            onToggle={toggleIndex}
            onUpdateField={updateField}
            onUpdateCategoryIds={updateCategoryIds}
            onSave={handleSave}
            saveLabel={t('fileImport.save', { count: readyCount })}
          />
        )}
      </div>
    </div>
  );
}
