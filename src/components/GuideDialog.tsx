import { store } from '../store/AppStore';
import { activeTheme } from '../domain/themes';
import { DEFAULT_GEMINI_PROXY_URL } from '../domain/settings';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

interface Step {
  title: string;
  text: string;
}

function Section({
  num,
  title,
  steps,
}: {
  num: string;
  title: string;
  steps: Step[];
}) {
  return (
    <div className="guide-section">
      <h3 className="guide-title">
        {num}. {title}
      </h3>
      <ol className="guide-list">
        {steps.map((s) => (
          <li key={s.title}>
            <strong>{s.title}</strong>
            {s.text && <p>{s.text}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function GuideDialog() {
  const theme = activeTheme();

  return (
    <div className="overlay" onClick={() => store.closeGuide()}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('guide.title')}</h3>
          <button className="sheet-close" onClick={() => store.closeGuide()}>
            <WIcon name="x-lg" />
          </button>
        </div>

        <p className="muted" style={{ fontSize: 13, marginTop: 0 }}>
          {t('guide.intro')}
        </p>

        <Section
          num="1"
          title={t('guide.install.title')}
          steps={[
            { title: t('guide.install.iphone.title'), text: t('guide.install.iphone.text') },
            { title: t('guide.install.android.title'), text: t('guide.install.android.text') },
          ]}
        />

        <Section
          num="2"
          title={t('guide.ocr.title')}
          steps={[
            { title: t('guide.ocr.key.title'), text: t('guide.ocr.key.text') },
            { title: t('guide.ocr.paste.title'), text: t('guide.ocr.paste.text') },
            { title: t('guide.ocr.scan.title'), text: t('guide.ocr.scan.text') },
          ]}
        />

        <Section
          num="3"
          title={t('guide.fail.title')}
          steps={[
            { title: t('guide.fail.key.title'), text: t('guide.fail.key.text') },
            {
              title: t('guide.fail.proxy.title'),
              text: t('guide.fail.proxy.text', { proxy: DEFAULT_GEMINI_PROXY_URL }),
            },
            { title: t('guide.fail.camera.title'), text: t('guide.fail.camera.text') },
          ]}
        />

        <Section
          num="4"
          title={t('guide.practice.title')}
          steps={[
            { title: t('guide.practice.cards.title'), text: t('guide.practice.cards.text') },
            { title: t('guide.practice.listen.title'), text: t('guide.practice.listen.text') },
            { title: t('guide.practice.dict.title'), text: t('guide.practice.dict.text') },
          ]}
        />

        <Section
          num="5"
          title={t('guide.faq.title')}
          steps={[
            { title: t('guide.faq.data.title'), text: t('guide.faq.data.text') },
            { title: t('guide.faq.theme.title'), text: t('guide.faq.theme.text', { theme: theme.name }) },
            { title: t('guide.faq.gif.title'), text: t('guide.faq.gif.text') },
          ]}
        />

        <button className="primary-btn mt20" onClick={() => store.closeGuide()}>
          <span>
            {t('guide.ok')}
            <span className="btn-kor">알겠어요</span>
          </span>
        </button>
      </div>
    </div>
  );
}