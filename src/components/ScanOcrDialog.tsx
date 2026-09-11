import { useRef, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { recognizeVocabulary, storedApiKey, parseScannedVocabulary } from '../domain/gemini-ocr';
import { gifUrl, activeTheme } from '../domain/themes';
import ManualKoreanTextBlock from './ManualKoreanTextBlock';
import ScannedWordsEditor from './ScannedWordsEditor';
import WIcon from '../ui/WIcon';
import type { ImportedWordDraft } from '../types';

export default function ScanOcrDialog() {
  useStore();

  const cameraInputRef = useRef<HTMLInputElement>(null);
  const galleryInputRef = useRef<HTMLInputElement>(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [rawText, setRawText] = useState('');
  const [showManualEntry, setShowManualEntry] = useState(false);

  const [drafts, setDrafts] = useState<ImportedWordDraft[]>([]);
  const [selected, setSelected] = useState<boolean[]>([]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    processFile(file);
  }

  async function processFile(file: File) {
    const key = storedApiKey();
    if (!key) {
      setError('Укажите ключ Gemini API в настройках.');
      return;
    }
    setProcessing(true);
    setError('');
    setDrafts([]);
    setSelected([]);

    try {
      const scanned = await recognizeVocabulary(file, key);
      if (scanned.length > 0) {
        setDrafts(
          scanned.map((s) => ({
            korean: s.korean,
            translation: s.translation,
            tags: [],
          }))
        );
        setSelected(scanned.map(() => true));
      } else {
        setError('Не удалось распознать корейский текст на изображении.');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Неизвестная ошибка.');
    } finally {
      setProcessing(false);
    }
  }

  function handleManualParse() {
    const parsed = parseScannedVocabulary(rawText);
    if (parsed.length === 0) return;
    setDrafts(
      parsed.map((s) => ({
        korean: s.korean,
        translation: s.translation,
        tags: [],
      }))
    );
    setSelected(parsed.map(() => true));
    setShowManualEntry(true);
  }

  function updateField(index: number, field: keyof ImportedWordDraft, value: string) {
    setDrafts((prev) =>
      prev.map((d, i) => (i === index ? { ...d, [field]: value } : d))
    );
  }

  function updateTags(index: number, tags: string[]) {
    setDrafts((prev) => prev.map((d, i) => (i === index ? { ...d, tags } : d)));
  }

  function toggleIndex(index: number) {
    setSelected((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  function handleSave() {
    const toImport = drafts.filter((_, i) => selected[i]);
    if (toImport.length === 0) return;
    store.importWords(toImport);
  }

  const readyCount = drafts.filter((d, i) => selected[i] && d.korean.trim() && d.translation.trim()).length;

  return (
    <div className="overlay" onClick={() => store.closeScanOcr()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">Сканирование (OCR)</h3>
          <button className="sheet-close" onClick={() => store.closeScanOcr()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        {!storedApiKey() && (
          <div className="scan-error">
            Ключ Gemini API не настроен.{' '}
            <button
              style={{ textDecoration: 'underline', color: 'inherit', background: 'none' }}
              onClick={() => store.openSettings()}
            >
              Настроить в Настройках
            </button>
          </div>
        )}

        <div className="scan-tools">
          <button
            className="scan-tool"
            onClick={() => cameraInputRef.current?.click()}
            disabled={processing}
          >
            <span className="scan-tool-icon"><WIcon name="camera" size={22} /></span>
            <span>Камера</span>
          </button>
          <button
            className="scan-tool"
            onClick={() => galleryInputRef.current?.click()}
            disabled={processing}
          >
            <span className="scan-tool-icon"><WIcon name="images" size={22} /></span>
            <span>Галерея</span>
          </button>
          <input
            ref={cameraInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <input
            ref={galleryInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
          <button
            className="scan-tool"
            onClick={() => {
              setShowManualEntry(true);
              setDrafts([]);
              setSelected([]);
            }}
          >
            <span className="scan-tool-icon"><WIcon name="pencil-square" size={22} /></span>
            <span>Текст</span>
          </button>
        </div>

        {previewUrl && (
          <img className="scan-preview" src={previewUrl} alt="Preview" />
        )}

        {processing && (
          <div className="scan-status">
            <img
              src={gifUrl(activeTheme().statusGifName)}
              alt="BTS"
              style={{
                width: '100%',
                maxHeight: 320,
                objectFit: 'cover',
                borderRadius: 14,
                marginBottom: 10,
              }}
            />
            Распознавание…
          </div>
        )}

        {error && <div className="scan-error">{error}</div>}

        {showManualEntry && (
          <ManualKoreanTextBlock
            value={rawText}
            onChange={setRawText}
            onParse={handleManualParse}
          />
        )}

        {drafts.length > 0 && (
          <ScannedWordsEditor
            drafts={drafts}
            selected={selected}
            readyCount={readyCount}
            onToggle={toggleIndex}
            onUpdateField={updateField}
            onUpdateTags={updateTags}
            onSave={handleSave}
            saveLabel={`Сохранить (${readyCount})`}
          />
        )}
      </div>
    </div>
  );
}