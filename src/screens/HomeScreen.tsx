import { store, useStore } from '../store/AppStore';
import ThreeCirclesLogo from '../components/ThreeCirclesLogo';
import CircularStat from '../components/CircularStat';
import { greetingById, portraitUrl, randomGreeting } from '../domain/themes';
import { colors } from '../theme/colors';

export default function HomeScreen() {
  useStore();
  const wordsCount = store.totalWordsCount();
  const due = store.dueWords();
  const greeting = greetingById(store.getGreetingId());

  return (
    <div>
      <header className="header-row">
        <div className="header-brand">
          <ThreeCirclesLogo size={40} />
          <div>
            <p className="header-title">Корейский SRS</p>
            <p className="header-subtitle">한국어 단어 학습</p>
          </div>
        </div>
      </header>

      <div className="greeting-card card" onClick={() => store.setGreeting(randomGreeting(greeting).id)}>
        <img className="greeting-image" src={portraitUrl(greeting.imageName)} alt={greeting.artistName} />
        <div>
          <p className="greeting-text-rus">{greeting.russian}</p>
          <p className="greeting-text-kor">{greeting.korean}</p>
          <p className="greeting-artist">{greeting.artistName}</p>
        </div>
      </div>

      <h2 className="section-title">Показатели дня</h2>
      <div className="stats-row">
        <CircularStat
          value={`${wordsCount}`}
          label="Всего слов"
          koreanLabel="총 단어"
          color={colors.charcoal}
        />
        <CircularStat
          value={`${due.length}`}
          label="К повторению"
          koreanLabel="오늘 복습"
          color={colors.red}
          background={due.length > 0 ? '#FEF2F2' : '#ffffff'}
        />
      </div>

      <button className="primary-btn mb24" onClick={() => store.startDueReview()}>
        <span>
          <span>
            {due.length > 0 ? `Начать повторение (${due.length})` : 'Начать карточки'}
          </span>
          <span className="btn-kor">시작하기</span>
        </span>
      </button>

      <h2 className="section-title">Быстрые действия</h2>
      <div className="quick-actions">
        <button className="quick-action card-flat" onClick={() => store.openAddWord()}>
          <span className="quick-icon" style={{ background: `${colors.red}1a`, color: colors.red }}>
            +
          </span>
          <span className="quick-title">Добавить</span>
          <span className="quick-subtitle">단어 추가</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openScanOcr()}>
          <span className="quick-icon" style={{ background: `${colors.charcoal}14`, color: colors.charcoal }}>
            📷
          </span>
          <span className="quick-title">Сканировать</span>
          <span className="quick-subtitle">텍스트 스캔 (OCR)</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.startDifficultReview()}>
          <span className="quick-icon" style={{ background: `${colors.warning}1a`, color: colors.warning }}>
            ⚠️
          </span>
          <span className="quick-title">Трудные ({store.difficultWords().length})</span>
          <span className="quick-subtitle">어려운 단어 복습</span>
        </button>
        <button className="quick-action card-flat" onClick={() => store.openGuide()}>
          <span className="quick-icon" style={{ background: `${colors.blue}1a`, color: colors.blue }}>
            ❓
          </span>
          <span className="quick-title">Помощь</span>
          <span className="quick-subtitle">사용 방법</span>
        </button>
      </div>

      {wordsCount === 0 && (
        <div className="empty-hint">
          <span style={{ fontSize: 24 }}>💡</span>
          <span>
            Ваш словарь пока пуст. Добавьте свои первые слова вручную или отсканируйте текст из
            учебника!
          </span>
        </div>
      )}
    </div>
  );
}