import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import { speak } from '../domain/tts';
import { voiceCharacter } from '../domain/voice-chars';
import { storedLearningLanguage } from '../domain/settings';
import { activeTheme } from '../domain/themes';
import { phraseSourcePack, phrasesForTheme } from '../domain/phrases';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

export default function PhrasesScreen() {
  useStore();
  const theme = activeTheme();
  const phrases = phrasesForTheme(store.getPhrases(), theme.id);
  const packs = store.getPacks();
  const lang = storedLearningLanguage();
  const voiceLang = lang === 'zh' ? 'zh-CN' : 'ko-KR';

  function speakPhrase(text: string) {
    speak(text, voiceCharacter(store.getCardVoice().id), voiceLang);
  }

  return (
    <div>
      <ScreenHeader title={t('phrases.title')} subtitle="표현" />
      <p className="muted mb16">{t('phrases.desc', { group: theme.name })}</p>

      {phrases.length === 0 ? (
        <div className="empty-hint">{t('phrases.empty')}</div>
      ) : (
        <div className="phrase-list">
          {phrases.map((p) => {
            const source = phraseSourcePack(p, packs);
            return (
              <div key={p.id} className="phrase-card card-flat">
                <div className="phrase-head">
                  <span className="phrase-korean">{p.korean}</span>
                  <button className="icon-btn" onClick={() => speakPhrase(p.korean)} aria-label={t('cards.speakAria')}>
                    <WIcon name="volume-up" />
                  </button>
                </div>
                <p className="phrase-translation">{p.translation}</p>
                {source ? (
                  <p className="phrase-source">
                    <span className="phrase-source-emoji" aria-hidden="true">
                      {source.emoji}
                    </span>
                    {t('phrases.fromSong', { song: source.title })}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
