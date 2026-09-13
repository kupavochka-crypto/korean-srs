import { useCallback, useEffect, useRef, useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { translateText, TranslateError } from '../domain/translate';
import { translateLangKey, translatePair } from '../domain/language';
import { storedMymemoryEmail, saveMymemoryEmail } from '../domain/settings';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

const DEBOUNCE_MS = 450;

export default function TranslateSheet() {
  useStore();
  const open = store.getIsTranslateOpen();
  const initialText = store.getTranslateInitialText();
  const learningLanguage = store.getLearningLanguage();

  const [text, setText] = useState(initialText);
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [quota, setQuota] = useState(false);
  const [inlineEmail, setInlineEmail] = useState(storedMymemoryEmail());
  const [reverse, setReverse] = useState(false);
  const [copied, setCopied] = useState(false);

  const requestIdRef = useRef(0);

  const pair = translatePair(learningLanguage);
  const from = reverse ? pair.to : pair.from;
  const to = reverse ? pair.from : pair.to;

  const runTranslate = useCallback(
    async (source: string) => {
      const trimmed = source.trim();
      if (!trimmed) {
        setResult('');
        setError('');
        setQuota(false);
        setLoading(false);
        return;
      }

      const requestId = ++requestIdRef.current;
      setLoading(true);
      setError('');
      setQuota(false);

      try {
        const translated = await translateText(trimmed, from, to, inlineEmail || storedMymemoryEmail());
        if (requestId !== requestIdRef.current) return;
        setResult(translated.text);
      } catch (e) {
        if (requestId !== requestIdRef.current) return;
        setResult('');
        if (e instanceof TranslateError && e.code === 'quota') {
          setQuota(true);
          setError(t('translate.quota'));
        } else {
          setError(e instanceof Error ? e.message : t('translate.error'));
        }
      } finally {
        if (requestId === requestIdRef.current) setLoading(false);
      }
    },
    [from, to, inlineEmail]
  );

  useEffect(() => {
    if (!open) return;
    setText(initialText);
    setResult('');
    setError('');
    setQuota(false);
    setReverse(false);
    setCopied(false);
  }, [open, initialText]);

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => runTranslate(text), DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [open, text, runTranslate]);

  if (!open) return null;

  function handleSwap() {
    setReverse((prev) => !prev);
    setText(result);
    setResult(text);
    setError('');
    setQuota(false);
    setCopied(false);
  }

  function handleClear() {
    setText('');
    setResult('');
    setError('');
    setQuota(false);
    setCopied(false);
  }

  function handleAddWord() {
    const koreanText = reverse ? result : text;
    const translationText = reverse ? text : result;
    if (!koreanText.trim() || !translationText.trim()) return;
    store.openAddWordFromTranslate(koreanText.trim(), translationText.trim());
    store.closeTranslate();
  }

  function saveEmailAndRetry() {
    saveMymemoryEmail(inlineEmail);
    runTranslate(text);
  }

  async function handleCopy() {
    if (!result.trim()) return;
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // clipboard unavailable
    }
  }

  const canAddWord = Boolean(result.trim() && text.trim() && !loading && !error);

  return (
    <div className="overlay translate-overlay" onClick={() => store.closeTranslate()}>
      <div className="sheet translate-sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header translate-sheet-header">
          <h3 className="sheet-title">{t('translate.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeTranslate()} aria-label={t('common.close')}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <div className="translate-lang-bar">
          <span className="translate-lang-label">{t(translateLangKey(from))}</span>
          <button
            type="button"
            className="translate-swap-btn"
            onClick={handleSwap}
            aria-label={t('translate.swap')}
            title={t('translate.swap')}
          >
            <svg
              className="translate-swap-icon"
              viewBox="0 0 16 16"
              width="18"
              height="18"
              aria-hidden="true"
              focusable="false"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5m14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5"
              />
            </svg>
          </button>
          <span className="translate-lang-label">{t(translateLangKey(to))}</span>
        </div>

        <div className="translate-panel translate-panel--source">
          <textarea
            className="translate-panel-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder={t('translate.placeholder')}
            rows={5}
            autoFocus
          />
          <div className="translate-panel-toolbar">
            <span className="translate-char-count">{text.length}</span>
            {text.trim() ? (
              <button type="button" className="translate-icon-btn" onClick={handleClear} aria-label={t('translate.clear')}>
                <WIcon name="x-lg" size={16} />
              </button>
            ) : null}
          </div>
        </div>

        <div className="translate-divider" aria-hidden="true" />

        <div className="translate-panel translate-panel--target">
          {loading ? (
            <p className="translate-panel-placeholder">{t('translate.loading')}</p>
          ) : result ? (
            <p className="translate-panel-output">{result}</p>
          ) : error ? (
            <p className="translate-panel-error">{error}</p>
          ) : (
            <p className="translate-panel-placeholder">{t('translate.resultPlaceholder')}</p>
          )}
          <div className="translate-panel-toolbar">
            {result ? (
              <button type="button" className="translate-icon-btn" onClick={handleCopy} aria-label={t('translate.copy')}>
                <WIcon name={copied ? 'check' : 'file-text'} size={16} />
              </button>
            ) : null}
          </div>
        </div>

        {quota && (
          <div className="translate-quota card-flat">
            <p className="field-hint">{t('translate.quotaHint')}</p>
            <input
              className="form-input"
              type="email"
              value={inlineEmail}
              onChange={(e) => setInlineEmail(e.target.value)}
              placeholder="email@example.com"
            />
            <button type="button" className="secondary-btn mt12" onClick={saveEmailAndRetry}>
              {t('translate.saveEmail')}
            </button>
          </div>
        )}

        {canAddWord && (
          <button type="button" className="primary-btn translate-add-btn" onClick={handleAddWord}>
            {t('translate.addWord')}
          </button>
        )}
      </div>
    </div>
  );
}
