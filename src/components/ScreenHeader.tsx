import { store } from '../store/AppStore';
import { appVersionLabel } from '../app-version';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import WooriLogo from './WooriLogo';

export default function ScreenHeader({
  title,
  subtitle,
  showLogo = true,
  showBack,
  showVersion = false,
}: {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
  showBack?: boolean;
  showVersion?: boolean;
}) {
  const back = showBack ?? store.canGoBack();

  return (
    <header className="header-row">
      <div className="header-leading">
        {back ? (
          <button
            type="button"
            className="header-back"
            onClick={() => store.goBack()}
            aria-label={t('common.back')}
          >
            <WIcon name="chevron-left" size={22} />
          </button>
        ) : null}
        <div className="header-brand">
          {showLogo ? <WooriLogo size={40} /> : null}
          <div>
            <p className="header-title">{title}</p>
            {subtitle ? <p className="header-subtitle">{subtitle}</p> : null}
          </div>
        </div>
      </div>
      {showVersion ? <span className="header-version">{appVersionLabel()}</span> : null}
    </header>
  );
}
