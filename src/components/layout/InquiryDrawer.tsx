import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { inquiryRows, useInquiry } from '../../lib/inquiry';
import { useLocale } from '../../lib/i18n';
import { useDisplay } from '../../lib/display';
import { categoryOf } from '../../lib/products';
import { ProductMedia } from '../ui/Media';

export function InquiryDrawer() {
  const inquiry = useInquiry();
  const { t } = useLocale();
  const { productName, categoryShort } = useDisplay();
  const rows = inquiryRows(inquiry.lines);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!inquiry.isDrawerOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') inquiry.closeDrawer();
    };
    window.addEventListener('keydown', onKey);
    panelRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [inquiry.isDrawerOpen, inquiry]);

  return (
    <div className={`drawer ${inquiry.isDrawerOpen ? 'is-open' : ''}`} aria-hidden={!inquiry.isDrawerOpen}>
      <button
        type="button"
        className="drawer__scrim"
        aria-label={`${t('common.close')} ${t('drawer.title')}`}
        tabIndex={-1}
        onClick={inquiry.closeDrawer}
      />
      <div className="drawer__panel" role="dialog" aria-modal="true" aria-label={t('drawer.title')} ref={panelRef} tabIndex={-1}>
        <div className="drawer__head">
          <h2 className="h4">{t('drawer.title')}</h2>
          <button type="button" className="drawer__close" onClick={inquiry.closeDrawer} aria-label={t('common.close')}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 2l12 12M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {rows.length === 0 ? (
          <div className="drawer__empty">
            <p className="body-sm">
              {t('drawer.empty')}
            </p>
            <Link to="/products" className="btn btn--primary" onClick={inquiry.closeDrawer}>
              {t('drawer.browse')}
            </Link>
          </div>
        ) : (
          <>
            <ul className="drawer__list">
              {rows.map(({ product }) => (
                <li key={product.id} className="drawer__item">
                  <Link to={`/products/${product.slug}`} className="drawer__thumb" onClick={inquiry.closeDrawer} tabIndex={-1} aria-hidden="true">
                    <ProductMedia
                      slug={product.slug}
                      spec={product.visual}
                      images={product.images}
                      title={productName(product)}
                      alt={productName(product)}
                    />
                  </Link>
                  <div className="drawer__info">
                    <p className="drawer__name">{productName(product)}</p>
                    <p className="drawer__sku mono">{product.sku} · {categoryShort(categoryOf(product))}</p>
                  </div>
                  <button
                    type="button"
                    className="drawer__remove"
                    onClick={() => inquiry.remove(product.id)}
                    aria-label={`${t('common.removeFromInquiry')}: ${productName(product)}`}
                  >
                    {t('pdp.inquiryRemove')}
                  </button>
                </li>
              ))}
            </ul>
            <div className="drawer__foot">
              <p className="caption">
                {rows.length} {t('common.productsCount')} · {t('drawer.quantitiesNote')}
              </p>
              <Link to="/request-quote" className="btn btn--accent btn--block" onClick={inquiry.closeDrawer}>
                {t('common.requestQuote')}
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
