import { useEffect, useState, type ReactElement } from 'react';
import { store, useStore, TAB_DEFS, type Tab } from './store/AppStore';
import HomeScreen from './screens/HomeScreen';
import CardsScreen from './screens/CardsScreen';
import ListeningScreen from './screens/ListeningScreen';
import DictionaryScreen from './screens/DictionaryScreen';
import ProgressScreen from './screens/ProgressScreen';
import SettingsScreen from './screens/SettingsScreen';
import AddWordDialog from './components/AddWordDialog';
import WordDetailDialog from './components/WordDetailDialog';
import CreateCategoryDialog from './components/CreateCategoryDialog';
import ScanOcrDialog from './components/ScanOcrDialog';
import { loadVoices } from './domain/tts';

const SCREENS: Record<Tab, () => ReactElement> = {
  home: () => <HomeScreen />,
  cards: () => <CardsScreen />,
  listening: () => <ListeningScreen />,
  dictionary: () => <DictionaryScreen />,
  progress: () => <ProgressScreen />,
  settings: () => <SettingsScreen />,
};

export default function App() {
  const [ready, setReady] = useState(false);
  useStore();

  useEffect(() => {
    loadVoices();
    store.init().then(() => setReady(true));
    return () => {
      store.closeScanOcr();
      store.closeAddWord();
      store.closeCreateCategory();
      store.closeWordDetail();
    };
  }, []);

  if (!ready) {
    return (
      <div className="app">
        <div className="screen center muted">Загрузка…</div>
      </div>
    );
  }

  const tab = store.getTab();
  const dueCount = store.dueWords().length;

  return (
    <div className="app">
      <div className="screen">{SCREENS[tab]()}</div>

      {store.getIsAddWordOpen() && <AddWordDialog />}
      {store.getIsScanOcrOpen() && <ScanOcrDialog />}
      {store.getIsCreateCategoryOpen() && <CreateCategoryDialog />}
      {store.getSelectedWordForDetail() && <WordDetailDialog />}

      <nav className="tab-bar">
        {TAB_DEFS.map((def) => (
          <button
            key={def.id}
            className={`tab-item ${tab === def.id ? 'active' : ''}`}
            onClick={() => store.selectTab(def.id)}
          >
            <span className="tab-icon">{def.icon}</span>
            <span>{def.title}</span>
            <span style={{ fontSize: 9, opacity: 0.7 }}>{def.korean}</span>
            {def.id === 'cards' && dueCount > 0 && (
              <span className="tab-badge">{dueCount}</span>
            )}
          </button>
        ))}
      </nav>
    </div>
  );
}