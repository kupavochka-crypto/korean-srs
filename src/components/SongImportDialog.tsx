import { useEffect, useMemo, useRef, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { storedApiKey } from '../domain/gemini-ocr';
import { transcribeSongLyrics } from '../domain/gemini-audio';
import {
  extractVocabularyFromLyrics,
  type SongTranslateProvider,
} from '../domain/song-translate';
import { gifUrl, activeTheme } from '../domain/themes';
import { t } from '../domain/i18n';
import ManualKoreanTextBlock from './ManualKoreanTextBlock';
import ScannedWordsEditor from './ScannedWordsEditor';
import WIcon from '../ui/WIcon';
import { classifyDrafts } from '../domain/import-classify';
import type { ImportedWordDraft } from '../types';

export default function SongImportDialog() {
  useStore();

  const fileInputRef = useRef<HTMLInputElement>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordChunksRef = useRef<BlobPart[]>([]);

  const [soundName, setSoundName] = useState('');
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState('');
  const [recordSupported, setRecordSupported] = useState(true);
  const [isRecording, setIsRecording] = useState(false);
  const [recordPreviewUrl, setRecordPreviewUrl] = useState('');
  const [uploadFileName, setUploadFileName] = useState('');
  const [rawText, setRawText] = useState('');
  const [showManualEntry, setShowManualEntry] = useState(false);
  const [translateProvider, setTranslateProvider] = useState<SongTranslateProvider>('auto');

  const [drafts, setDrafts] = useState<ImportedWordDraft[]>([]);
  const [selected, setSelected] = useState<boolean[]>([]);

  const learningLanguage = store.getLearningLanguage();
  const hasApiKey = Boolean(storedApiKey());

  useEffect(() => {
    setRecordSupported(
      typeof navigator !== 'undefined' &&
        !!navigator.mediaDevices?.getUserMedia &&
        typeof MediaRecorder !== 'undefined'
    );
    return () => {
      if (recordPreviewUrl) URL.revokeObjectURL(recordPreviewUrl);
    };
  }, [recordPreviewUrl]);

  function applyScannedWords(scanned: { korean: string; translation: string }[]) {
    setDrafts(
      scanned.map((s) => ({
        korean: s.korean,
        translation: s.translation,
        categoryIds: [],
      }))
    );
    setSelected(scanned.map(() => true));
    setShowManualEntry(false);
  }

  async function parseLyrics(lyrics: string) {
    const key = storedApiKey();
    const scanned = await extractVocabularyFromLyrics(lyrics, translateProvider, {
      apiKey: key,
      learningLanguage,
    });
    if (scanned.length > 0) {
      applyScannedWords(scanned);
    } else {
      setError(t('song.noWords'));
    }
  }

  async function processAudioFile(file: File) {
    const key = storedApiKey();
    if (!key) {
      setError(t('song.noApiKey'));
      return;
    }

    setProcessing(true);
    setError('');
    setDrafts([]);
    setSelected([]);

    try {
      const lyrics = await transcribeSongLyrics(file, key);
      await parseLyrics(lyrics);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('song.errorUnknown'));
    } finally {
      setProcessing(false);
    }
  }

  function blobToRecordingFile(blob: Blob): File {
    const type = blob.type || 'audio/webm';
    const ext = type.includes('mp4') ? 'm4a' : type.includes('webm') ? 'webm' : 'wav';
    return new File([blob], `recording.${ext}`, { type });
  }

  function clearRecordingPreview() {
    if (recordPreviewUrl) URL.revokeObjectURL(recordPreviewUrl);
    setRecordPreviewUrl('');
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    clearRecordingPreview();
    setUploadFileName(file.name);
    void processAudioFile(file);
    e.target.value = '';
  }

  async function startRecording() {
    setError('');
    setDrafts([]);
    setSelected([]);
    setUploadFileName('');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      recordChunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      mediaRecorderRef.current = recorder;

      recorder.ondataavailable = (ev) => {
        if (ev.data.size > 0) recordChunksRef.current.push(ev.data);
      };

      recorder.onstop = () => {
        stream.getTracks().forEach((track) => track.stop());
        const blob = new Blob(recordChunksRef.current, { type: recorder.mimeType || 'audio/webm' });
        if (recordPreviewUrl) URL.revokeObjectURL(recordPreviewUrl);
        setRecordPreviewUrl(URL.createObjectURL(blob));
        void processAudioFile(blobToRecordingFile(blob));
      };

      recorder.start();
      setIsRecording(true);
    } catch {
      setError(t('song.micDenied'));
      setRecordSupported(false);
    }
  }

  function stopRecording() {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
    }
    setIsRecording(false);
  }

  async function handleManualParse() {
    setProcessing(true);
    setError('');
    try {
      await parseLyrics(rawText);
    } catch (err) {
      setError(err instanceof Error ? err.message : t('song.errorUnknown'));
    } finally {
      setProcessing(false);
    }
  }

  function updateField(index: number, field: keyof ImportedWordDraft, value: string) {
    setDrafts((prev) => prev.map((d, i) => (i === index ? { ...d, [field]: value } : d)));
  }

  function updateCategoryIds(index: number, categoryIds: string[]) {
    setDrafts((prev) => prev.map((d, i) => (i === index ? { ...d, categoryIds } : d)));
  }

  function toggleIndex(index: number) {
    setSelected((prev) => prev.map((v, i) => (i === index ? !v : v)));
  }

  async function handleSave() {
    if (!soundName.trim()) {
      setError(t('song.nameRequired'));
      return;
    }
    const toImport = drafts.filter((_, i) => selected[i]);
    if (toImport.length === 0) return;
    await store.importSongWords(toImport, soundName.trim());
  }

  const readyCount = drafts.filter(
    (d, i) => selected[i] && d.korean.trim() && d.translation.trim()
  ).length;

  const categoryForSong = useMemo(() => {
    const name = soundName.trim().toLowerCase();
    if (!name) return null;
    return store.getCategories().find((c) => c.name.toLowerCase() === name)?.id ?? null;
  }, [soundName, store.getSnapshot()]);

  const knownInDictionaryCount = useMemo(() => {
    if (drafts.length === 0) return 0;
    const classified = classifyDrafts(drafts, store.getWords(), categoryForSong);
    return classified.filter((item) => item.status !== 'new').length;
  }, [drafts, categoryForSong, store.getSnapshot()]);

  const providerChips: { id: SongTranslateProvider; label: string }[] = [
    { id: 'auto', label: t('song.providerAuto') },
    { id: 'gemini', label: t('song.providerGemini') },
    { id: 'mymemory', label: t('song.providerMymemory') },
  ];

  return (
    <div className="overlay" onClick={() => store.closeSongImport()}>
      <div className="sheet sheet-scroll" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('song.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeSongImport()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        {!hasApiKey && (
          <div className="scan-error">
            {t('song.noApiKey')}{' '}
            <button
              style={{ textDecoration: 'underline', color: 'inherit', background: 'none' }}
              onClick={() => store.openSettings()}
            >
              {t('song.openSettings')}
            </button>
            <p className="field-hint mt8">{t('song.audioHint')}</p>
          </div>
        )}

        <p className="field-hint mb12">{t('song.intro')}</p>

        <label className="form-label">{t('song.translateProvider')}</label>
        <div className="flow-layout mb12">
          {providerChips.map(({ id, label }) => (
            <button
              key={id}
              type="button"
              className={`select-chip ${translateProvider === id ? 'active' : ''}`}
              onClick={() => setTranslateProvider(id)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="scan-tools">
          <button
            className="scan-tool"
            onClick={() => fileInputRef.current?.click()}
            disabled={processing || isRecording || !hasApiKey}
          >
            <span className="scan-tool-icon">
              <WIcon name="volume-up" size={22} />
            </span>
            <span>
              {t('song.upload')}{' '}
              <span className="song-mode-badge song-mode-badge--pro">{t('song.badgePro')}</span>
            </span>
          </button>
          {recordSupported && (
            <button
              className="scan-tool"
              onClick={() => (isRecording ? stopRecording() : startRecording())}
              disabled={processing || !hasApiKey}
            >
              <span className="scan-tool-icon">
                <WIcon name={isRecording ? 'x-lg' : 'play'} size={22} />
              </span>
              <span>
                {isRecording ? t('song.stopRecord') : t('song.record')}{' '}
                <span className="song-mode-badge song-mode-badge--pro">{t('song.badgePro')}</span>
              </span>
            </button>
          )}
          <button
            className="scan-tool"
            onClick={() => {
              setShowManualEntry(true);
              setDrafts([]);
              setSelected([]);
            }}
            disabled={processing || isRecording}
          >
            <span className="scan-tool-icon">
              <WIcon name="pencil-square" size={22} />
            </span>
            <span>
              {t('song.manualText')}{' '}
              <span className="song-mode-badge song-mode-badge--free">{t('song.badgeFree')}</span>
            </span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="audio/mpeg,audio/mp3,audio/mp4,audio/x-m4a,audio/wav,audio/webm,audio/ogg,.mp3,.m4a,.wav"
            onChange={handleFileChange}
            style={{ display: 'none' }}
          />
        </div>

        {uploadFileName && (
          <p style={{ fontSize: 12, color: 'var(--text-primary)', margin: '8px 0 0' }}>
            {uploadFileName}
          </p>
        )}

        {recordPreviewUrl && (
          <audio controls src={recordPreviewUrl} style={{ width: '100%', marginTop: 8 }} />
        )}

        {processing && (
          <div className="scan-status">
            <img
              src={gifUrl(activeTheme().statusGifName)}
              alt=""
              style={{
                width: '100%',
                maxHeight: 320,
                objectFit: 'cover',
                borderRadius: 14,
                marginBottom: 10,
              }}
            />
            {t('song.parsing')}
          </div>
        )}

        {error && <div className="scan-error">{error}</div>}

        {showManualEntry && (
          <ManualKoreanTextBlock
            value={rawText}
            onChange={setRawText}
            onParse={() => void handleManualParse()}
            parsing={processing}
          />
        )}

        {drafts.length > 0 && (
          <>
            <h4 className="section-title mt16">{t('song.saveSection')}</h4>
            <label className="form-label">{t('song.nameLabel')}</label>
            <input
              className="form-input"
              value={soundName}
              onChange={(e) => setSoundName(e.target.value)}
              placeholder={t('song.namePlaceholder')}
              style={{ marginBottom: 8 }}
            />
            <p className="field-hint mb12">{t('song.nameHint')}</p>
            <ScannedWordsEditor
              drafts={drafts}
              selected={selected}
              readyCount={readyCount}
              onToggle={toggleIndex}
              onUpdateField={updateField}
              onUpdateCategoryIds={updateCategoryIds}
              onSave={() => void handleSave()}
              saveLabel={t('song.save', { count: readyCount })}
              knownInDictionaryCount={knownInDictionaryCount}
            />
          </>
        )}
      </div>
    </div>
  );
}
