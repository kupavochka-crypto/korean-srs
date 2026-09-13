import { useCallback, useEffect, useLayoutEffect, useRef, useState, type ReactElement } from 'react';
import { store, useStore, TAB_DEFS, type Tab } from './store/AppStore';
import HomeScreen from './screens/HomeScreen';
import CardsScreen from './screens/CardsScreen';
import ListeningScreen from './screens/ListeningScreen';
import QuizScreen from './screens/QuizScreen';
import DictionaryScreen from './screens/DictionaryScreen';
import ProgressScreen from './screens/ProgressScreen';
import GalleryScreen from './screens/GalleryScreen';
import SettingsScreen from './screens/SettingsScreen';
import PhrasesScreen from './screens/PhrasesScreen';
import AddWordDialog from './components/AddWordDialog';
import AppFab from './components/AppFab';
import DuplicateResolveDialog from './components/DuplicateResolveDialog';
import OnboardingFlow from './components/OnboardingFlow';
import TranslateSheet from './components/TranslateSheet';
import WordDetailDialog from './components/WordDetailDialog';
import CreateCategoryDialog from './components/CreateCategoryDialog';
import ScanOcrDialog from './components/ScanOcrDialog';
import GuideDialog from './components/GuideDialog';
import PacksDialog from './components/PacksDialog';
import MissionPickDialog from './components/MissionPickDialog';
import MissionStartDialog from './components/MissionStartDialog';
import SongImportDialog from './components/SongImportDialog';
import { loadVoices } from './domain/tts';
import { t } from './domain/i18n';
import WIcon from './ui/WIcon';

const SCREENS: Record<Tab, () => ReactElement> = {
  home: () => <HomeScreen />,
  cards: () => <CardsScreen />,
  listening: () => <ListeningScreen />,
  quiz: () => <QuizScreen />,
  dictionary: () => <DictionaryScreen />,
  progress: () => <ProgressScreen />,
  gallery: () => <GalleryScreen />,
  settings: () => <SettingsScreen />,
  phrases: () => <PhrasesScreen />,
};

export default function App() {
  const [ready, setReady] = useState(false);
  const [ind, setInd] = useState({ left: 0, width: 0 });
  const navRef = useRef<HTMLElement | null>(null);
  useStore();

  const updateIndicator = useCallback(() => {
    const nav = navRef.current;
    if (!nav) return;
    const idx = TAB_DEFS.findIndex((d) => d.id === store.getTab());
    const el = nav.querySelectorAll<HTMLElement>('.tab-item')[idx];
    if (!el) return;
    setInd({ left: el.offsetLeft, width: el.offsetWidth });
  }, []);

  useLayoutEffect(() => {
    updateIndicator();
    const nav = navRef.current;
    if (!nav) return;
    const ro = new ResizeObserver(updateIndicator);
    ro.observe(nav);
    window.addEventListener('resize', updateIndicator);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateIndicator);
    };
  }, [updateIndicator, store.getSnapshot()]);

  useEffect(() => {
    loadVoices();
    store.init().then(() => setReady(true));
    return () => {
      store.closeScanOcr();
      store.closeAddWord();
      store.closeCreateCategory();
      store.closeWordDetail();
      store.closeGuide();
      store.closeSongImport();
    };
  }, []);

  if (!ready) {
    return (
      <div className="app">
        <div className="screen center muted">{t('common.loading')}</div>
      </div>
    );
  }

  const tab = store.getTab();
  const dueCount = store.dueWords().length;

  return (
    <div className="app">
      <div key={tab} className="screen screen-enter">
        {SCREENS[tab]()}
      </div>

      {store.getIsAddWordOpen() && <AddWordDialog />}
      {store.getIsScanOcrOpen() && <ScanOcrDialog />}
      {store.getIsCreateCategoryOpen() && <CreateCategoryDialog />}
      {store.getIsGuideOpen() && <GuideDialog />}
      {store.getIsPacksOpen() && <PacksDialog />}
      {store.getIsMissionPickOpen() && <MissionPickDialog />}
      {store.getIsMissionStartOpen() && <MissionStartDialog />}
      {store.getIsSongImportOpen() && <SongImportDialog />}
      {store.getSelectedWordForDetail() && <WordDetailDialog />}
      {store.getDuplicatePending() && <DuplicateResolveDialog />}
      {store.getIsOnboardingOpen() && <OnboardingFlow />}
      {store.getIsTranslateOpen() && <TranslateSheet />}
      <AppFab />

      <nav ref={(el) => { navRef.current = el; }} className="tab-bar">
        <span
          className="tab-ind"
          style={{ transform: `translateX(${ind.left}px)`, width: ind.width }}
        />
        {TAB_DEFS.map((def) => (
          <button
            key={def.id}
            type="button"
            className={`tab-item ${tab === def.id ? 'active' : ''}`}
            aria-label={t('tab.' + def.id)}
            title={t('tab.' + def.id)}
            onClick={() => store.selectTab(def.id, { fromTabBar: true })}
          >
            <span className="tab-icon">
              <WIcon name={def.icon} />
            </span>
            <span className="tab-label">{t('tab.' + def.id)}</span>
            <span className="tab-kor">{def.korean}</span>
            {def.id === 'cards' && dueCount > 0 && (
              <span className="tab-badge">{dueCount}</span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}