import { useState } from 'react';
import { store, useStore } from '../store/AppStore';
import { storedApiKey, saveApiKey } from '../domain/gemini-ocr';
import {
  storedRewardThreshold,
  saveRewardThreshold,
  DEFAULT_REWARD_THRESHOLD,
  storedGeminiProxy,
  saveGeminiProxy,
  storedThemeId,
  type ColorTheme,
} from '../domain/settings';
import { THEMES, getTheme, portraitUrl } from '../domain/themes';
import { VOICE_CHARACTERS } from '../domain/voice-chars';
import ThreeCirclesLogo from '../components/ThreeCirclesLogo';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function SettingsScreen() {
  useStore();
  const [apiKey, setApiKey] = useState(storedApiKey());
  const [threshold, setThreshold] = useState(storedRewardThreshold());
  const [proxyUrl, setProxyUrl] = useState(storedGeminiProxy());
  const [themeId, setThemeId] = useState(storedThemeId());

  const activeTheme = getTheme(themeId);

  function saveThreshold() {
    const n = Math.max(1, Math.floor(Number(threshold) || DEFAULT_REWARD_THRESHOLD));
    saveRewardThreshold(n);
    setThreshold(n);
  }

  function saveKey() {
    saveApiKey(apiKey);
  }

  return (
    <div>
      <header className="header-row">
        <div className="header-brand">
          <ThreeCirclesLogo size={40} />
          <div>
            <p className="header-title">{t('settings.title')}</p>
            <p className="header-subtitle">설정</p>
          </div>
        </div>
      </header>

      <h2 className="section-title">{t('settings.lang')}</h2>
      <div className="card">
        <div className="flow-layout">
          <button
            className={`select-chip ${store.getLocale() === 'ru' ? 'active' : ''}`}
            onClick={() => store.setLocale('ru')}
          >
            Русский
          </button>
          <button
            className={`select-chip ${store.getLocale() === 'en' ? 'active' : ''}`}
            onClick={() => store.setLocale('en')}
          >
            English
          </button>
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '8px 0 0' }}>
          {t('settings.langHint')}
        </p>
      </div>

      <h2 className="section-title">{t('settings.colorTheme')}</h2>
      <div className="card">
        <div className="flow-layout">
          {(
            [
              ['system', 'gear', t('settings.colorThemeSystem')],
              ['light', 'sun', t('settings.colorThemeLight')],
              ['dark', 'moon-stars', t('settings.colorThemeDark')],
            ] as const
          ).map(([id, icon, label]) => (
            <button
              key={id}
              className={`select-chip ${store.getColorTheme() === id ? 'active' : ''}`}
              onClick={() => store.setColorTheme(id as ColorTheme)}
            >
              <WIcon name={icon} size={14} /> {label}
            </button>
          ))}
        </div>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '8px 0 0' }}>
          {t('settings.colorThemeHint')}
        </p>
      </div>

      <h2 className="section-title">{t('settings.ocr')}</h2>
      <div className="card">
        <label className="form-label">{t('settings.apiKey')}</label>
        <input
          className="form-input"
          value={apiKey}
          onChange={(e) => setApiKey(e.target.value)}
          onBlur={saveKey}
          placeholder="AIza..."
          type="password"
          autoComplete="off"
        />
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
          {t('settings.apiKeyHint')} Получите в{' '}
          <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">
            AI Studio
          </a>
        </p>
      </div>

      <h2 className="section-title">{t('settings.proxy')}</h2>
      <div className="card">
        <label className="form-label">{t('settings.proxyLabel')}</label>
        <input
          className="form-input"
          value={proxyUrl}
          onChange={(e) => setProxyUrl(e.target.value)}
          onBlur={() => saveGeminiProxy(proxyUrl)}
          placeholder="https://korean-srs-gemini-proxy.ваш-субдомен.workers.dev"
          autoCapitalize="off"
          autoCorrect="off"
        />
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
          {t('settings.proxyHint')}
        </p>
      </div>

      <h2 className="section-title">{t('settings.listenSection')}</h2>
      <div className="card">
        <label className="form-label">{t('settings.listenThreshold')}</label>
        <input
          className="form-input"
          value={threshold}
          onChange={(e) => setThreshold(Number(e.target.value.replace(/\D/g, '')) || 0)}
          onBlur={saveThreshold}
          type="number"
          min={1}
          inputMode="numeric"
        />
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
          {t('settings.listenThresholdHint', {
            first: threshold,
            second: threshold * 2,
            third: threshold * 3,
          })}
        </p>
      </div>

      <h2 className="section-title">{t('settings.display')}</h2>
      <div className="card">
        <label className="setting-toggle-row">
          <span>
            <strong>{t('settings.showRomaja')}</strong>
            <span className="setting-toggle-subtitle">{t('settings.showRomajaHint')}</span>
          </span>
          <input
            className="setting-toggle"
            type="checkbox"
            checked={store.getShowRomaja()}
            onChange={(e) => store.setShowRomaja(e.target.checked)}
          />
        </label>
      </div>

      <h2 className="section-title">{t('settings.voices')}</h2>
      <div className="card">
        <label className="form-label">{t('settings.voicesCards')}</label>
        <select
          className="form-input"
          value={store.getCardVoice().id}
          onChange={(e) => store.setCardVoice(e.target.value)}
        >
          {VOICE_CHARACTERS.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name} · {v.koreanLabel}
            </option>
          ))}
        </select>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
          {t('settings.voicesCardsHint')}
        </p>

        <label className="form-label mt16">{t('settings.voicesListen')}</label>
        <select
          className="form-input"
          value={store.getListenVoice().id}
          onChange={(e) => store.setListenVoice(e.target.value)}
        >
          {VOICE_CHARACTERS.map((v) => (
            <option key={v.id} value={v.id}>
              {v.name} · {v.koreanLabel}
            </option>
          ))}
        </select>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
          {t('settings.voicesListenHint')}
        </p>
      </div>

      <h2 className="section-title">{t('settings.theme')}</h2>
      <div className="theme-row">
        {THEMES.map((t) => {
          const selected = t.id === themeId;
          return (
            <button
              key={t.id}
              className={`theme-card ${selected ? 'active' : ''}`}
              onClick={() => {
                store.selectTheme(t.id);
                setThemeId(t.id);
              }}
            >
              <span className="theme-emoji">{t.emoji}</span>
              <span className="theme-name">{t.name}</span>
              {selected && <span className="theme-check"><WIcon name="check-lg" /></span>}
            </button>
          );
        })}
      </div>
      <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
        {t('settings.themeHint')}
      </p>

      <h2 className="section-title">{t('settings.themePreview')}</h2>
      <div className="card">
        <div className="theme-preview">
          <img
            className="greeting-image"
            src={portraitUrl(activeTheme.greetings[0].imageName)}
            alt={activeTheme.greetings[0].artistName}
          />
          <div>
            <p className="greeting-text-rus">{activeTheme.greetings[0].russian}</p>
            <p className="greeting-text-kor">{activeTheme.greetings[0].korean}</p>
            <p className="greeting-artist">{activeTheme.greetings[0].artistName}</p>
          </div>
        </div>
      </div>

      <h2 className="section-title">{t('settings.guide')}</h2>
      <div className="card">
        <button className="secondary-btn" onClick={() => store.openGuide()}>
          <span>
            {t('settings.guideHow')}
            <span className="btn-kor">사용 설명</span>
          </span>
        </button>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '8px 0 0' }}>
          {t('settings.guideHint')}
        </p>
      </div>
    </div>
  );
}