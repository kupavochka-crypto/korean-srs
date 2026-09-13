import { store, useStore } from '../store/AppStore';
import ScreenHeader from '../components/ScreenHeader';
import { speak } from '../domain/tts';
import { voiceCharacter } from '../domain/voice-chars';
import { ttsLang } from '../domain/language';
import { activeTheme } from '../domain/themes';
import { phraseSourcePack, phrasesForProfile } from '../domain/phrases';
import { t } from '../domain/i18n';
import { tabSubtitle } from '../domain/learning-ui';
import WIcon from '../ui/WIcon';

export default function PhrasesScreen() {
  useStore();
  const theme = activeTheme();
  const lang = store.getLearningLanguage();
  const phrases = phrasesForProfile(store.getPhrases(), lang, theme.id);
  const packs = store.getPacks();
  const voiceLang = ttsLang(lang);

  function speakPhrase(text: string) {
    speak(text, voiceCharacter(store.getCardVoice().id), voiceLang);
  }

  return (
    <div>
      <ScreenHeader title={t('phrases.title')} subtitle={tabSubtitle('phrases', lang)} />
      <p className="muted mb16">
        {lang === 'zh' ? t('phrases.descZh') : t('phrases.desc', { group: theme.name })}
      </p>

      {phrases.length === 0 ? (
        <div className="empty-hint">
          {lang === 'zh' ? t('phrases.emptyZh') : t('phrases.empty')}
        </div>
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
                {p.pinyin ? <p className="phrase-pinyin">{p.pinyin}</p> : null}
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
