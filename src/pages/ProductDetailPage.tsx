import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { categoryOf, certificationsOf, relatedProducts, productBySlug } from '../lib/products';
import { useInquiry } from '../lib/inquiry';
import { usePageMeta, productJsonLd } from '../lib/seo';
import type { ProductView } from '../components/visuals/ProductVisual';
import { Media, ProductMedia } from '../components/ui/Media';
import { resolveProductGallery, type MediaAsset } from '../config/media';
import { ProductCard } from '../components/ui/ProductCard';
import { ArrowIcon } from '../components/ui/SectionHead';
import { pdpConfig } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { useDisplay } from '../lib/display';

interface GallerySlide {
  key: string;
  label: string;
  view?: ProductView;
  asset?: MediaAsset;
}

const BASE_SLIDES: GallerySlide[] = [
  { key: 'hero', label: 'Product view', view: 'hero' },
  { key: 'technical', label: 'Dimensioned drawing', view: 'technical' },
  { key: 'detail', label: 'Material detail', view: 'detail' },
];

export default function ProductDetailPage() {
  const { t, locale } = useLocale();
  const { productName, productShort, categoryName, colorName, specLabel } = useDisplay();
  const { slug = '' } = useParams();
  const product = productBySlug(slug);
  const [active, setActive] = useState(0);
  const inquiry = useInquiry();

  useEffect(() => {
    setActive(0);
  }, [slug]);

  usePageMeta({
    title: product ? productName(product) : 'Product Not Found',
    description: product ? productShort(product) : undefined,
    path: product ? `/products/${product.slug}` : '/products',
    jsonLd: product
      ? productJsonLd({
          name: productName(product),
          sku: product.sku,
          description: productShort(product),
          category: categoryName(categoryOf(product)),
          path: `/products/${product.slug}`,
        })
      : undefined,
  });

  if (!product) {
    return (
      <div className="page-hero">
        <div className="container">
          <p className="eyebrow">{t('common.error')} 404</p>
          <h1 className="h1">{t('pdp.notFound')}</h1>
          <p className="lead">
            {t('pdp.notFoundDesc')}
          </p>
          <div className="btn-row" style={{ marginTop: 'var(--sp-6)' }}>
            <Link to="/products" className="btn btn--primary">
              {t('common.viewProducts')}
            </Link>
            <Link to="/" className="btn btn--outline">
              {t('common.backHome')}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const category = categoryOf(product);
  const certs = certificationsOf(product);
  const related = relatedProducts(product, 4);
  const inBasket = inquiry.contains(product.id);

  /* 15-second credibility line: standard · rating · material · certifications */
  const specBy = (prefix: string) =>
    product.specifications.find((r) => r.label.en.toLowerCase().startsWith(prefix))?.value;
  const keydataParts = [
    specBy('standard'),
    specBy('rated current') &&
      [specBy('rated current'), specBy('rated voltage')].filter(Boolean).join(' '),
    specBy('housing material'),
  ].filter(Boolean) as string[];
  const keydata = [...keydataParts, certs.map((c) => c.code).join(' · ')].filter(Boolean).join('  /  ');

  return (
    <article className="pdp">
      {/* breadcrumb */}
      <nav className="breadcrumb" aria-label="Breadcrumb">
        <div className="container breadcrumb__inner">
          <Link to="/">{t('breadcrumb.home')}</Link>
          <span aria-hidden="true">/</span>
          <Link to="/products">{t('breadcrumb.products')}</Link>
          <span aria-hidden="true">/</span>
          <Link to={`/products?category=${category.slug}`}>{categoryName(category)}</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{productName(product)}</span>
        </div>
      </nav>

      <div className="container pdp__layout">
        {/* gallery — hero / technical / detail + optional client photos */}
        <div className="pdp__gallery">
          {(() => {
            const slides: GallerySlide[] = [
              ...BASE_SLIDES,
              ...resolveProductGallery(product.slug, product.images?.gallery).map((asset, i) => ({
                key: `photo-${i}`,
                label: t('common.photo').replace('{n}', String(i + 1)),
                asset,
              })),
            ];
            const slide = slides[Math.min(active, slides.length - 1)];
            const slideLabels: Record<string, string> = {
              hero: t('pdp.viewProduct'),
              technical: t('pdp.viewTechnical'),
              detail: t('pdp.viewDetail'),
            };
            const localizedSlides = slides.map((sl) => ({
              ...sl,
              label: slideLabels[sl.key] ?? sl.label,
            }));
            void slide;
            const stageTitle = `${productName(product)} — ${slideLabels[slides[Math.min(active, slides.length - 1)].key] ?? slides[Math.min(active, slides.length - 1)].label}`;

            return (
              <>
                <div className="pdp__stage">
                  {slide.view ? (
                    <ProductMedia
                      slug={product.slug}
                      spec={product.visual}
                      images={product.images}
                      view={slide.view}
                      title={stageTitle}
                      alt={productName(product)}
                    />
                  ) : (
                    <Media
                      src={slide.asset!.src}
                      alt={slide.asset!.alt ?? productName(product)}
                      objectPosition={slide.asset!.position}
                      fallback={
                        <ProductMedia
                          slug={product.slug}
                          spec={product.visual}
                          images={product.images}
                          view="hero"
                          title={productName(product)}
                          alt={productName(product)}
                        />
                      }
                    />
                  )}
                </div>
                <div className="pdp__thumbs" role="tablist" aria-label="Product views">
                  {localizedSlides.map((s, i) => (
                    <button
                      key={s.key}
                      type="button"
                      role="tab"
                      aria-selected={i === active}
                      className={`pdp__thumb ${i === active ? 'is-active' : ''}`}
                      onClick={() => setActive(i)}
                    >
                      {s.view ? (
                        <ProductMedia
                          slug={product.slug}
                          spec={product.visual}
                          images={product.images}
                          view={s.view}
                          title={productName(product)}
                          alt={productName(product)}
                        />
                      ) : (
                        <Media
                          src={s.asset!.src}
                          alt={s.asset!.alt ?? productName(product)}
                          objectPosition={s.asset!.position}
                          fallback={
                            <ProductMedia
                              slug={product.slug}
                              spec={product.visual}
                              images={product.images}
                              view="hero"
                              title={productName(product)}
                              alt={productName(product)}
                            />
                          }
                        />
                      )}
                      <span className="visually-hidden">{s.label}</span>
                    </button>
                  ))}
                </div>
                <p className="caption pdp__view-label mono" aria-live="polite">
                  {slide.label}
                </p>
              </>
            );
          })()}
        </div>

        {/* summary — sales-engineering hierarchy:
            identity → promise → conversion → commercial data → features */}
        <div className="pdp__summary">
          <p className="pdp__meta mono">
            <span>{product.sku}</span>
            <span>{categoryName(category)}</span>
          </p>
          <h1 className="h1 pdp__title">{productName(product)}</h1>
          <p className="lead">{productShort(product)}</p>

          <div className="pdp__actions">
            <Link to={`/request-quote?product=${product.slug}`} className="btn btn--accent btn--lg">
              {t('pdp.requestQuote')}
            </Link>
            <button
              type="button"
              className={`btn btn--lg ${inBasket ? 'btn--primary' : 'btn--outline'}`}
              onClick={() => (inBasket ? inquiry.openDrawer() : inquiry.add(product.id))}
            >
              {inBasket ? t('pdp.inBasket') + ' ✓' : t('pdp.addInquiry')}
            </button>
          </div>

          <dl className="pdp__commercial">
            <div>
              <dt className="mono">{t('pdp.moq')}</dt>
              <dd>{pick(product.moq, locale)}</dd>
            </div>
            <div>
              <dt className="mono">{t('pdp.leadTime')}</dt>
              <dd>{pick(product.leadTime, locale)}</dd>
            </div>
            <div>
              <dt className="mono">{t('pdp.finishes')}</dt>
              <dd>{product.colors.map(colorName).join(' · ')}</dd>
            </div>
            <div>
              <dt className="mono">{t('pdp.warranty')}</dt>
              <dd>{pick(product.warranty, locale)}</dd>
            </div>
            <div className="pdp__commercial--wide">
              <dt className="mono">{t('pdp.oem')}</dt>
              <dd>
                {pick(pdpConfig.oemNote, locale)} —{' '}
                <Link to={pdpConfig.oemHref} className="text-link">
                  {t('pdp.oemHow')}
                </Link>
              </dd>
            </div>
          </dl>

          {keydata && (
            <p className="pdp__keydata mono" aria-label="Key standards and ratings">
              {keydata}
            </p>
          )}

          <ul className="pdp__features">
            {product.features.map((feature) => (
              <li key={feature.en}>{pick(feature, locale)}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* specifications + applications */}
      <div className="section--tight rule-top">
        <div className="container pdp__detail-grid">
          <section aria-labelledby="specs-title" className="pdp__specs">
            <p className="eyebrow">
              <span className="mono">01</span>{t('pdp.technicalData')}
            </p>
            <h2 className="h3 visually-hidden" id="specs-title">
              Specifications
            </h2>
            <table className="spec-table">
              <caption className="visually-hidden">
                Technical specifications for {productName(product)} ({product.sku})
              </caption>
              <tbody>
                {product.specifications.map((row) => (
                  <tr key={row.label.en}>
                    <th scope="row">{specLabel(row.label)}</th>
                    <td className="mono">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>

          <div className="pdp__side">
            <section aria-labelledby="apps-title" className="pdp__apps">
              <p className="eyebrow">
                <span className="mono">02</span>{t('pdp.applications')}
              </p>
              <ul className="apps-list">
                {product.applications.map((app) => (
                  <li key={app.en}>{pick(app, locale)}</li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="certs-title" className="pdp__certs">
              <p className="eyebrow">
                <span className="mono">03</span>{t('pdp.certifications')}
              </p>
              <ul className="cert-strip">
                {certs.map((cert) => (
                  <li key={cert.id} className="cert-chip cert-chip--lg mono" title={pick(cert.description, locale)}>
                    {cert.code}
                  </li>
                ))}
              </ul>
              <p className="caption">
                {t('pdp.certsNote')}{' '}
                <Link to="/quality" className="text-link">
                  {t('quality.label')}
                </Link>
                。
              </p>
            </section>

            <section aria-labelledby="pack-title" className="pdp__packing">
              <p className="eyebrow">
                <span className="mono">04</span>{t('pdp.packaging')}
              </p>
              <p className="body-sm mono pdp__packing-line">{pick(product.packaging, locale)}</p>
            </section>
          </div>
        </div>
      </div>

      {/* overview */}
      <div className="section rule-top">
        <div className="container">
          <div className="pdp__overview">
            <p className="eyebrow">
              <span className="mono">05</span>{t('pdp.overview')}
            </p>
            <p>{pick(product.description, locale)}</p>
          </div>
        </div>
      </div>

      {/* related — compact, continue browsing */}
      <div className="section section--muted">
        <div className="container">
          <div className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">{t('pdp.related')}</p>
              <h2 className="h2">{t('pdp.relatedTitle')}</h2>
            </div>
          </div>
          <div className="product-grid product-grid--4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} variant="compact" />
            ))}
          </div>
          <div className="pdp__foot-cta">
            <Link to="/products" className="arrow-link">
              {t('pdp.backToCatalogue')}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
