import { useState } from 'react';
import { useStore } from '../store/AppStore';
import { storedApiKey, saveApiKey } from '../domain/gemini-ocr';
import {
  storedRewardThreshold,
  saveRewardThreshold,
  DEFAULT_REWARD_THRESHOLD,
  storedGeminiProxy,
  saveGeminiProxy,
} from '../domain/settings';
import ThreeCirclesLogo from '../components/ThreeCirclesLogo';

export default function SettingsScreen() {
  useStore();
  const [apiKey, setApiKey] = useState(storedApiKey());
  const [threshold, setThreshold] = useState(storedRewardThreshold());
  const [proxyUrl, setProxyUrl] = useState(storedGeminiProxy());

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
          Оставьте пустым для прямого подключения. Заполняется адресом воркера, чтобы сканирование
          работало в вашем регионе.
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
    </div>
  );
}