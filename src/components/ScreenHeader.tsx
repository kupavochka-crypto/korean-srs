import ThreeCirclesLogo from './ThreeCirclesLogo';

export default function ScreenHeader({
  title,
  subtitle,
  showLogo = true,
}: {
  title: string;
  subtitle?: string;
  showLogo?: boolean;
}) {
  return (
    <header className="header-row">
      <div className="header-brand">
        {showLogo ? <ThreeCirclesLogo size={40} /> : null}
        <div>
          <p className="header-title">{title}</p>
          {subtitle ? <p className="header-subtitle">{subtitle}</p> : null}
        </div>
      </div>
    </header>
  );
}
