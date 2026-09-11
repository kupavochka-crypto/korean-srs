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
  saveThemeId,
} from '../domain/settings';
import { THEMES, getTheme, portraitUrl } from '../domain/themes';
import ThreeCirclesLogo from '../components/ThreeCirclesLogo';

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
            <p className="header-title">Настройки</p>
            <p className="header-subtitle">설정</p>
          </div>
        </div>
      </header>

      <h2 className="section-title">Распознавание текста</h2>
      <div className="card">
        <label className="form-label">Gemini API ключ</label>
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
          Нужен для сканирования текста с фото. Ключ сохраняется в браузере. Получите в{' '}
          <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">
            AI Studio
          </a>
        </p>
      </div>

      <h2 className="section-title">Обход ограничений региона</h2>
      <div className="card">
        <label className="form-label">Адрес прокси (Cloudflare Worker)</label>
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
          По умолчанию уже стоит общий адрес — сканирование работает сразу. Очистите поле для
          прямого подключения или вставьте свой адрес.
        </p>
      </div>

      <h2 className="section-title">Аудирование</h2>
      <div className="card">
        <label className="form-label">Правильных ответов подряд для GIF-награды</label>
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
          Награда показывается при каждой кратности: {threshold}, {threshold * 2}, {threshold * 3}...
        </p>
      </div>

      <h2 className="section-title">Тема</h2>
      <div className="theme-row">
        {THEMES.map((t) => {
          const selected = t.id === themeId;
          return (
            <button
              key={t.id}
              className={`theme-card ${selected ? 'active' : ''}`}
              onClick={() => {
                saveThemeId(t.id);
                setThemeId(t.id);
              }}
            >
              <span className="theme-emoji">{t.emoji}</span>
              <span className="theme-name">{t.name}</span>
              {selected && <span className="theme-check">✓</span>}
            </button>
          );
        })}
      </div>
      <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '6px 0 0' }}>
        Тема меняет приветствия, GIF-награды и картинки в приложении.
      </p>

      <h2 className="section-title">Тема: предпросмотр</h2>
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

      <h2 className="section-title">Инструкция</h2>
      <div className="card">
        <button className="secondary-btn" onClick={() => store.openGuide()}>
          <span>
            Как установить и настроить
            <span className="btn-kor">사용 설명</span>
          </span>
        </button>
        <p style={{ fontSize: 11, color: 'var(--text-secondary)', margin: '8px 0 0' }}>
          Пошаговая инструкция для новичков: установка на телефон, подключение распознавания и
          часто задаваемые вопросы.
        </p>
      </div>
    </div>
  );
}