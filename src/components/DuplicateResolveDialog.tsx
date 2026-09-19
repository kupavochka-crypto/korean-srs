import { store, useStore } from '../store/AppStore';
import { t } from '../domain/i18n';
import WIcon from '../ui/WIcon';
import type { DuplicateAction } from '../types';
import { wordCategoryIds } from '../domain/categories';

export default function DuplicateResolveDialog() {
  useStore();
  const pending = store.getDuplicatePending();
  if (!pending) return null;

  const { existing, incoming } = pending;

  function act(action: DuplicateAction) {
    store.resolveDuplicate(action);
  }

  return (
    <div className="overlay" onClick={() => act('abort')}>
      <div className="sheet" onClick={(e) => e.stopPropagation()}>
        <div className="sheet-header">
          <h3 className="sheet-title">{t('dup.title')}</h3>
          <button className="sheet-close" onClick={() => act('abort')}>
            <WIcon name="x-lg" />
          </button>
        </div>
        <p className="muted">{t('dup.desc')}</p>

        <div className="dup-compare">
          <div className="dup-col card-flat">
            <p className="dup-label">{t('dup.new')}</p>
            <p className="dup-korean">{incoming.korean}</p>
            <p className="dup-translation">{incoming.translation}</p>
          </div>
          <div className="dup-col card-flat">
            <p className="dup-label">{t('dup.existing')}</p>
            <p className="dup-korean">{existing.korean}</p>
            <p className="dup-translation">{existing.translation}</p>
            {wordCategoryIds(existing).length > 0 && (
              <p className="field-hint">
                {wordCategoryIds(existing)
                  .map((id) => store.categoryName(id))
                  .filter(Boolean)
                  .join(', ')}
              </p>
            )}
          </div>
        </div>

        <div className="dup-actions">
          <button className="secondary-btn" onClick={() => act('skip')}>
            {t('dup.skip')}
          </button>
          <button className="secondary-btn" onClick={() => act('abort')}>
            {t('dup.cancel')}
          </button>
          <button className="secondary-btn" onClick={() => act('update')}>
            {t('dup.update')}
          </button>
          <button className="primary-btn" onClick={() => act('keep_both')}>
            {t('dup.keepBoth')}
          </button>
        </div>
      </div>
    </div>
  );
}
