import { useEffect, useRef, useState, type ReactNode } from 'react';
import { store, useStore } from '../store/AppStore';
import { clearApiKey, saveApiKey, storedApiKey, storedApiKeyRemember } from '../domain/gemini-ocr';
import {
  storedRewardThreshold,
  saveRewardThreshold,
  DEFAULT_REWARD_THRESHOLD,
  storedGeminiProxy,
  saveGeminiProxy,
  storedThemeId,
  storedMymemoryEmail,
  saveMymemoryEmail,
  type ColorTheme,
} from '../domain/settings';
import type { LearningLanguage } from '../types';
import { THEMES, getTheme, resolveGreeting } from '../domain/themes';
import PortraitImage from '../components/PortraitImage';
import { VOICE_CHARACTERS } from '../domain/voice-chars';
import ScreenHeader from '../components/ScreenHeader';
import { t } from '../domain/i18n';
import { greetingNative, tabSubtitle, tL, voiceNative } from '../domain/learning-ui';
import WIcon from '../ui/WIcon';
import { backupErrorMessage, parseBackupFile, type BackupSummary } from '../domain/backup';

type SettingsView = 'main' | 'learning' | 'theme' | 'general' | 'account' | 'pro' | 'help';

function SettingsGroup({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="settings-group">
      {title ? <h2 className="settings-group-title">{title}</h2> : null}
      <div className="card settings-group-card">{children}</div>
    </section>
  );
}

function SettingsLinkRow({
  label,
  value,
  onClick,
}: {
  label: string;
  value?: string;
  onClick: () => void;
}) {
  return (
    <button type="button" className="settings-link-row" onClick={onClick}>
      <span className="settings-link-label">{label}</span>
      {value ? <span className="settings-link-value">{value}</span> : null}
      <WIcon name="chevron-right" className="settings-link-chevron" size={14} />
    </button>
  );
}

function SettingsSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="settings-section">
      <h2 className="section-title">{title}</h2>
      {children}
    </section>
  );
}

function SettingsRow({
  label,
  children,
  inline,
}: {
  label?: string;
  children: ReactNode;
  inline?: boolean;
}) {
  return (
    <div className={`settings-row${inline ? ' settings-row--inline' : ''}`}>
      {label ? <span className="settings-row-label">{label}</span> : null}
      {children}
    </div>
  );
}

function SettingsDetail({
  title,
  onBack,
  children,
}: {
  title: string;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <>
      <button type="button" className="settings-back" onClick={onBack}>
        <WIcon name="chevron-left" size={18} />
        {t('settings.back')}
      </button>
      <h1 className="settings-subtitle">{title}</h1>
      {children}
    </>
  );
}

export default function SettingsScreen() {
  useStore();
  const [view, setView] = useState<SettingsView>('main');
  const [apiKey, setApiKey] = useState(storedApiKey());
  const [rememberApiKey, setRememberApiKey] = useState(storedApiKeyRemember());
  const [threshold, setThreshold] = useState(storedRewardThreshold());
  const [proxyUrl, setProxyUrl] = useState(storedGeminiProxy());
  const [themeId, setThemeId] = useState(storedThemeId());
  const [mymemoryEmail, setMymemoryEmail] = useState(storedMymemoryEmail());
  const [dailyGoal, setDailyGoal] = useState(store.getDailyWordGoal());
  const importInputRef = useRef<HTMLInputElement>(null);
  const [backupBusy, setBackupBusy] = useState<'export' | 'import' | null>(null);
  const [backupError, setBackupError] = useState('');
  const [importConfirm, setImportConfirm] = useState<{ file: File; summary: BackupSummary } | null>(
    null
  );

  const activeTheme = getTheme(themeId);
  const learningLanguage = store.getLearningLanguage();

  useEffect(() => {
    setDailyGoal(store.getDailyWordGoal());
  }, [store.getSnapshot()]);
  const locale = store.getLocale();
  const colorTheme = store.getColorTheme();

  function saveThreshold() {
    const n = Math.max(1, Math.floor(Number(threshold) || DEFAULT_REWARD_THRESHOLD));
    saveRewardThreshold(n);
    setThreshold(n);
  }

  function saveKey() {
    saveApiKey(apiKey, rememberApiKey);
  }

  function handleRememberApiKey(checked: boolean) {
    setRememberApiKey(checked);
    saveApiKey(apiKey, checked);
  }

  function handleClearApiKey() {
    clearApiKey();
    setApiKey('');
    setRememberApiKey(false);
  }

  function colorThemeLabel(): string {
    if (colorTheme === 'light') return t('settings.colorThemeLight');
    if (colorTheme === 'dark') return t('settings.colorThemeDark');
    return t('settings.colorThemeSystem');
  }

  function learningLanguageLabel(): string {
    return learningLanguage === 'zh' ? t('settings.langZh') : t('settings.langKo');
  }

  if (view === 'learning') {
    return (
      <div className="settings-page">
        <SettingsDetail title={t('settings.group.learning')} onBack={() => setView('main')}>
          <SettingsSection title={t('settings.learningLanguage')}>
            <div className="card">
              <div className="flow-layout">
                {(
                  [
                    ['ko', '🇰🇷', t('settings.langKo')],
                    ['zh', '🇨🇳', t('settings.langZh')],
                  ] as const
                ).map(([id, flag, label]) => (
                  <button
                    key={id}
                    className={`select-chip ${learningLanguage === id ? 'active' : ''}`}
                    onClick={() => void store.setLearningLanguage(id as LearningLanguage)}
                  >
                    {flag} {label}
                  </button>
                ))}
              </div>
              <p className="field-hint">{t('settings.learningLanguageHint')}</p>
            </div>
          </SettingsSection>

          <SettingsSection title={t('settings.dailyGoal')}>
            <div className="card">
              <label className="form-label">{t('settings.dailyGoalLabel')}</label>
              <input
                className="form-input"
                type="number"
                min={1}
                value={dailyGoal}
                onChange={(e) => setDailyGoal(Math.max(1, Number(e.target.value) || 1))}
                onBlur={() => store.setDailyWordGoal(dailyGoal)}
              />
              <p className="field-hint">{t('settings.dailyGoalHint')}</p>
            </div>
          </SettingsSection>

          <SettingsSection title={t('settings.listenSection')}>
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
              <p className="field-hint">
                {t('settings.listenThresholdHint', {
                  first: threshold,
                  second: threshold * 2,
                  third: threshold * 3,
                })}
              </p>
            </div>
          </SettingsSection>

          <SettingsSection title={t('settings.voices')}>
            <div className="card">
              <label className="form-label">{t('settings.voicesCards')}</label>
              <select
                className="form-input"
                value={store.getCardVoice().id}
                onChange={(e) => store.setCardVoice(e.target.value)}
              >
                {VOICE_CHARACTERS.map((v) => (
                  <option key={v.id} value={v.id}>
                    {v.name} · {voiceNative(v.id, learningLanguage)}
                  </option>
                ))}
              </select>
              <p className="field-hint">{t('settings.voicesCardsHint')}</p>

              <div className="settings-divider" />

              <label className="form-label">{t('settings.voicesListen')}</label>
              <select
                className="form-input"
                value={store.getListenVoice().id}
                onChange={(e) => store.setListenVoice(e.target.value)}
              >
                {VOICE_CHARACTERS.map((v) => {
                  return (
                    <option key={v.id} value={v.id}>
                      {v.name} · {voiceNative(v.id, learningLanguage)}
                    </option>
                  );
                })}
              </select>
              <p className="field-hint">{t('settings.voicesListenHint')}</p>
            </div>
          </SettingsSection>

          <SettingsSection title={t('settings.display')}>
            <div className="card">
              <SettingsRow inline>
                <span className="settings-row-label">
                  <strong>{t('settings.showRomaja')}</strong>
                  <span className="setting-toggle-subtitle">{t('settings.showRomajaHint')}</span>
                </span>
                <input
                  className="setting-toggle"
                  type="checkbox"
                  checked={store.getShowRomaja()}
                  onChange={(e) => store.setShowRomaja(e.target.checked)}
                />
              </SettingsRow>
            </div>
          </SettingsSection>
        </SettingsDetail>
      </div>
    );
  }

  if (view === 'general') {
    return (
      <div className="settings-page">
        <SettingsDetail title={t('settings.group.general')} onBack={() => setView('main')}>
          <SettingsSection title={t('settings.lang')}>
            <div className="card">
              <div className="flow-layout">
                <button
                  className={`select-chip ${locale === 'ru' ? 'active' : ''}`}
                  onClick={() => store.setLocale('ru')}
                >
                  Русский
                </button>
                <button
                  className={`select-chip ${locale === 'en' ? 'active' : ''}`}
                  onClick={() => store.setLocale('en')}
                >
                  English
                </button>
              </div>
              <p className="field-hint">{t('settings.langHint')}</p>
            </div>
          </SettingsSection>

          <SettingsSection title={t('settings.colorTheme')}>
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
                    className={`select-chip ${colorTheme === id ? 'active' : ''}`}
                    onClick={() => store.setColorTheme(id as ColorTheme)}
                  >
                    <WIcon name={icon} size={14} /> {label}
                  </button>
                ))}
              </div>
              <p className="field-hint">{t('settings.colorThemeHint')}</p>
            </div>
          </SettingsSection>
        </SettingsDetail>
      </div>
    );
  }

  if (view === 'account') {
    async function handleExportBackup() {
      setBackupError('');
      setBackupBusy('export');
      try {
        await store.exportBackup();
      } catch {
        setBackupError(t('backup.errorGeneric'));
      } finally {
        setBackupBusy(null);
      }
    }

    async function handleImportPick(file: File | undefined) {
      if (!file) return;
      setBackupError('');
      const parsed = await parseBackupFile(file);
      if (!parsed.ok) {
        setBackupError(t(backupErrorMessage(parsed.reason)));
        return;
      }
      setImportConfirm({ file, summary: parsed.summary });
    }

    async function handleImportConfirm() {
      if (!importConfirm) return;
      setBackupBusy('import');
      setBackupError('');
      try {
        await store.importBackup(importConfirm.file);
      } catch {
        setBackupError(t('backup.errorGeneric'));
        setBackupBusy(null);
      }
    }

    return (
      <div className="settings-page">
        <SettingsDetail title={t('settings.group.account')} onBack={() => setView('main')}>
          <SettingsSection title={t('settings.mymemoryEmail')}>
            <div className="card">
              <input
                className="form-input"
                type="email"
                value={mymemoryEmail}
                onChange={(e) => setMymemoryEmail(e.target.value)}
                onBlur={() => saveMymemoryEmail(mymemoryEmail)}
                placeholder="email@example.com"
              />
              <p className="field-hint">{t('settings.mymemoryEmailHint')}</p>
            </div>
          </SettingsSection>

          <SettingsSection title={t('backup.sectionTitle')}>
            <div className="card">
              <p className="field-hint">{t('backup.sectionHint')}</p>
              <div className="backup-actions">
                <button
                  type="button"
                  className="secondary-btn"
                  disabled={backupBusy !== null}
                  onClick={() => void handleExportBackup()}
                >
                  <WIcon name="download" size={16} />
                  {backupBusy === 'export' ? t('backup.exporting') : t('backup.export')}
                </button>
                <button
                  type="button"
                  className="secondary-btn"
                  disabled={backupBusy !== null}
                  onClick={() => importInputRef.current?.click()}
                >
                  <WIcon name="upload" size={16} />
                  {backupBusy === 'import' ? t('backup.importing') : t('backup.import')}
                </button>
                <input
                  ref={importInputRef}
                  type="file"
                  accept=".json,application/json"
                  hidden
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    e.target.value = '';
                    void handleImportPick(file);
                  }}
                />
              </div>
              {backupError ? <p className="scan-error mt12">{backupError}</p> : null}
            </div>
          </SettingsSection>

          {importConfirm ? (
            <div className="overlay" onClick={() => setImportConfirm(null)}>
              <div className="sheet" onClick={(e) => e.stopPropagation()}>
                <h3 className="sheet-title">{t('backup.confirmTitle')}</h3>
                <p className="field-hint">
                  {t('backup.confirmBody', {
                    words: String(importConfirm.summary.words),
                    categories: String(importConfirm.summary.categories),
                    reviews: String(importConfirm.summary.reviews),
                  })}
                </p>
                <div className="backup-actions mt12">
                  <button
                    type="button"
                    className="secondary-btn"
                    disabled={backupBusy === 'import'}
                    onClick={() => setImportConfirm(null)}
                  >
                    {t('backup.cancel')}
                  </button>
                  <button
                    type="button"
                    className="save-btn"
                    disabled={backupBusy === 'import'}
                    onClick={() => void handleImportConfirm()}
                  >
                    {backupBusy === 'import' ? t('backup.importing') : t('backup.confirmAction')}
                  </button>
                </div>
              </div>
            </div>
          ) : null}
        </SettingsDetail>
      </div>
    );
  }

  if (view === 'theme') {
    return (
      <div className="settings-page">
        <SettingsDetail title={t('settings.theme')} onBack={() => setView('main')}>
          <SettingsSection title={t('settings.theme')}>
            <div className="theme-row">
              {THEMES.map((theme) => {
                const selected = theme.id === themeId;
                return (
                  <button
                    key={theme.id}
                    type="button"
                    className={`theme-card ${selected ? 'active' : ''}`}
                    onClick={() => {
                      store.selectTheme(theme.id);
                      setThemeId(theme.id);
                    }}
                  >
                    <span className="theme-emoji">{theme.emoji}</span>
                    <span className="theme-name">{theme.name}</span>
                    {selected ? (
                      <span className="theme-check">
                        <WIcon name="check-lg" />
                      </span>
                    ) : null}
                  </button>
                );
              })}
            </div>
            <p className="field-hint">{t('settings.themeHint')}</p>
          </SettingsSection>

          <SettingsSection title={t('settings.themePreview')}>
            <div className="card">
              <div className="theme-preview">
                <PortraitImage
                  className="greeting-image"
                  imageName={activeTheme.greetings[0].imageName}
                  variant={1}
                  alt={activeTheme.greetings[0].artistName}
                />
                <div>
                  {(() => {
                    const preview = resolveGreeting(activeTheme.greetings[0].id, 1, activeTheme.id);
                    return (
                      <>
                        <p className="greeting-text-rus">{preview.russian}</p>
                        <p className="greeting-text-kor">
                          {greetingNative(preview, learningLanguage)}
                        </p>
                        <p className="greeting-artist">{preview.artistName}</p>
                      </>
                    );
                  })()}
                </div>
              </div>
            </div>
          </SettingsSection>
        </SettingsDetail>
      </div>
    );
  }

  if (view === 'pro') {
    return (
      <div className="settings-page">
        <SettingsDetail title={t('settings.group.pro')} onBack={() => setView('main')}>
          <SettingsSection title={t('settings.ocr')}>
            <div className="card">
              <p className="field-hint mb12">{t('settings.proOcrNote')}</p>
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
              <p className="field-hint">
                {t('settings.apiKeyHint')} Получите в{' '}
                <a href="https://aistudio.google.com/apikey" target="_blank" rel="noreferrer">
                  AI Studio
                </a>
              </p>
              <SettingsRow inline>
                <span className="settings-row-label">
                  <strong>{t('settings.apiKeyRemember')}</strong>
                  <span className="setting-toggle-subtitle">{t('settings.apiKeyRememberHint')}</span>
                </span>
                <input
                  className="setting-toggle"
                  type="checkbox"
                  checked={rememberApiKey}
                  onChange={(e) => handleRememberApiKey(e.target.checked)}
                />
              </SettingsRow>
              <p className="field-hint">
                {t('settings.apiKeySecurityHint')}{' '}
                <a
                  href="https://console.cloud.google.com/apis/credentials"
                  target="_blank"
                  rel="noreferrer"
                >
                  Google Cloud Console
                </a>
              </p>
              {apiKey ? (
                <button type="button" className="secondary-btn mt12" onClick={handleClearApiKey}>
                  {t('settings.apiKeyClear')}
                </button>
              ) : null}
            </div>
          </SettingsSection>

          <SettingsSection title={t('settings.proxy')}>
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
              <p className="field-hint">{t('settings.proxyHint')}</p>
            </div>
          </SettingsSection>
        </SettingsDetail>
      </div>
    );
  }

  if (view === 'help') {
    return (
      <div className="settings-page">
        <SettingsDetail title={t('settings.guide')} onBack={() => setView('main')}>
          <div className="card">
            <button className="secondary-btn" onClick={() => store.openOnboarding(false)}>
              <span>
                {t('settings.guideModes')}
                <span className="btn-kor">{tL('btn.guideModes', learningLanguage)}</span>
              </span>
            </button>
            <p className="field-hint">{t('settings.guideModesHint')}</p>
            <div className="settings-divider" />
            <button className="secondary-btn" onClick={() => store.openGuide()}>
              <span>
                {t('settings.guideHow')}
                <span className="btn-kor">{tL('btn.guideHow', learningLanguage)}</span>
              </span>
            </button>
            <p className="field-hint">{t('settings.guideHint')}</p>
          </div>
        </SettingsDetail>
      </div>
    );
  }

  return (
    <div className="settings-page">
      <ScreenHeader
        title={t('settings.title')}
        subtitle={tabSubtitle('settings', learningLanguage)}
        showVersion
      />

      <SettingsGroup>
        <SettingsLinkRow
          label={t('settings.group.learning')}
          value={`${learningLanguageLabel()} · ${dailyGoal} ${t('settings.wordsPerDay')}`}
          onClick={() => setView('learning')}
        />
        <SettingsLinkRow
          label={t('settings.theme')}
          value={activeTheme.name}
          onClick={() => setView('theme')}
        />
        <SettingsLinkRow
          label={t('settings.group.general')}
          value={`${locale === 'ru' ? 'RU' : 'EN'} · ${colorThemeLabel()}`}
          onClick={() => setView('general')}
        />
        <SettingsLinkRow
          label={t('settings.group.account')}
          value={mymemoryEmail ? '✓' : '—'}
          onClick={() => setView('account')}
        />
        <SettingsLinkRow
          label={t('settings.group.pro')}
          value={storedApiKey() ? '••••' : '—'}
          onClick={() => setView('pro')}
        />
        <SettingsLinkRow label={t('settings.guideHow')} onClick={() => setView('help')} />
      </SettingsGroup>
    </div>
  );
}
