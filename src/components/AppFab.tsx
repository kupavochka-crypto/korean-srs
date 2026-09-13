import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';

/** Viewport-fixed FAB — rendered at app root, not inside scroll containers */
export default function AppFab() {
  useStore();
  const tab = store.getTab();
  if (tab !== 'dictionary') return null;

  return (
    <button
      className="fab fab-root"
      onClick={() => store.openAddWord()}
      aria-label={t('dict.addWordAria')}
    >
      <WIcon name="plus" size={24} />
    </button>
  );
}
