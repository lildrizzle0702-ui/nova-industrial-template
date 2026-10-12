import { Link } from 'react-router-dom';
import type { Product } from '../../data/types';
import { categoryOf, certificationsOf } from '../../lib/products';
import { useInquiry } from '../../lib/inquiry';
import { useLocale } from '../../lib/i18n';
import { useDisplay } from '../../lib/display';
import { ProductMedia } from './Media';
import { ArrowIcon } from './SectionHead';

type CardVariant = 'grid' | 'row' | 'compact';

export function ProductCard({
  product,
  variant = 'grid',
  compare = false,
  onToggleCompare,
  compareSelected = false,
}: {
  product: Product;
  variant?: CardVariant;
  compare?: boolean;
  onToggleCompare?: (id: string) => void;
  compareSelected?: boolean;
}) {
  const inquiry = useInquiry();
  const { t } = useLocale();
  const { productName, productShort, categoryShort } = useDisplay();
  const category = categoryOf(product);
  const inBasket = inquiry.contains(product.id);
  const compact = variant === 'compact';

  const media = (
    <Link
      to={`/products/${product.slug}`}
      className="product-card__media"
      tabIndex={-1}
      aria-hidden="true"
    >
      <ProductMedia
        slug={product.slug}
        spec={product.visual}
        images={product.images}
        title={`${productName(product)} — ${t('common.viewProduct')}`}
        alt={productName(product)}
      />
    </Link>
  );

  const actions = (
    <div className="product-card__actions">
      <Link to={`/products/${product.slug}`} className="arrow-link">
        {t('common.viewProduct')}
        <ArrowIcon />
      </Link>
      {!compact && compare && (
        <button
          type="button"
          className={`btn btn--sm ${compareSelected ? '' : 'btn--outline'}`}
          onClick={() => onToggleCompare?.(product.id)}
          aria-pressed={compareSelected}
          aria-label={`${compareSelected ? t('common.remove') : t('compare.add')} ${productName(product)}`}
        >
          {compareSelected ? '✓ ' + t('compare.selected') : t('compare.add')}
        </button>
      )}
      {!compact && (
        <button
          type="button"
          className={`btn btn--sm ${inBasket ? '' : 'btn--outline'}`}
          onClick={() => (inBasket ? inquiry.openDrawer() : inquiry.add(product.id))}
          aria-label={
            inBasket
              ? `${productName(product)} ${t('pdp.inBasket')}`
              : `${t('pdp.addInquiry')}: ${productName(product)}`
          }
        >
          {inBasket ? t('pdp.inBasket') + ' ✓' : t('pdp.addInquiry')}
        </button>
      )}
    </div>
  );

  /* Row variant — flagship editorial layout: content beside the image. */
  if (variant === 'row') {
    return (
      <article id={`p-${product.sku}`} className="product-card product-card--row">
        {media}
        <div className="product-card__body">
          <p className="product-card__meta mono">
            <span>{product.sku}</span>
            <span>{categoryShort(category)}</span>
          </p>
          <h3 className="product-card__name">
            <Link to={`/products/${product.slug}`}>{productName(product)}</Link>
          </h3>
          <p className="product-card__desc">{productShort(product)}</p>
          <div className="product-card__certs" aria-label="Certifications">
            {certificationsOf(product)
              .slice(0, 3)
              .map((c) => (
                <span key={c.id} className="cert-chip mono">
                  {c.code}
                </span>
              ))}
          </div>
          {actions}
        </div>
      </article>
    );
  }

  return (
    <article
      id={`p-${product.sku}`}
      className={`product-card ${compact ? 'product-card--compact' : ''}`}
    >
      {media}
      <div className="product-card__body">
        <p className="product-card__meta mono">
          <span>{product.sku}</span>
          <span>{categoryShort(category)}</span>
        </p>
        <h3 className="product-card__name">
          <Link to={`/products/${product.slug}`}>{productName(product)}</Link>
        </h3>
        {!compact && <p className="product-card__desc">{productShort(product)}</p>}
        {compact && (
          <p className="product-card__desc product-card__desc--clamp">{productShort(product)}</p>
        )}
        {!compact && (
          <div className="product-card__certs" aria-label="Certifications">
            {certificationsOf(product)
              .slice(0, 3)
              .map((c) => (
                <span key={c.id} className="cert-chip mono">
                  {c.code}
                </span>
              ))}
          </div>
        )}
        {actions}
      </div>
    </article>
  );
}
