import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { QuoteRequestForm } from '../components/form/QuoteRequestForm';
import { useInquiry } from '../lib/inquiry';
import { productBySlug } from '../lib/products';
import { usePageMeta } from '../lib/seo';
import { contact } from '../config/contact';
import { quotePageMeta } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { useDisplay } from '../lib/display';

export default function RequestQuotePage() {
  const { t, locale } = useLocale();
  const { productName } = useDisplay();
  const [searchParams] = useSearchParams();
  const inquiry = useInquiry();
  const presetSlug = searchParams.get('product');
  const presetProduct = presetSlug ? productBySlug(presetSlug) : undefined;

  /* A product link lands here with the SKU preset — stage it in the basket. */
  useEffect(() => {
    if (presetProduct && !inquiry.contains(presetProduct.id)) {
      inquiry.add(presetProduct.id);
      inquiry.closeDrawer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [presetProduct?.id]);

  usePageMeta({
    title: 'Request a Quote',
    description:
      'Request a quotation from NOVA INDUSTRIAL: quantities, target market and certification requirements answered by our sales engineers within one business day.',
    path: '/request-quote',
  });

  return (
    <div className="quote-page">
      <div className="page-hero">
        <div className="container">
          <div className="page-hero__head">
            <p className="eyebrow">{t('quote.label')}</p>
            <h1 className="h1">{t('quote.title')}</h1>
            <p className="lead">
              {t('quote.desc')}
            </p>
          </div>
          <ul className="catalogue-meta mono" aria-label={t('products.metaAria')}>
            {quotePageMeta.map((m) => (
              <li key={m.label.en}>
                <span className="catalogue-meta__num">{pick(m.label, locale)}</span> {pick(m.value, locale)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container section quote-page__layout">
        <div className="quote-page__form">
          <QuoteRequestForm
            note={
              presetProduct
                ? t('quote.note.preset')
                    .replace('{name}', productName(presetProduct))
                    .replace('{sku}', presetProduct.sku)
                : t('quote.note.empty')
            }
          />
        </div>
        <aside className="quote-page__aside">
          <div className="info-card">
            <h2 className="h4">{t('quote.next.title')}</h2>
            <ol className="steps-list">
              <li>
                <span className="mono">01</span> {t('quote.next.1')}
              </li>
              <li>
                <span className="mono">02</span> {t('quote.next.2')}
              </li>
              <li>
                <span className="mono">03</span> {t('quote.next.3')}
              </li>
              <li>
                <span className="mono">04</span> {t('quote.next.4')}
              </li>
            </ol>
          </div>
          <div className="info-card info-card--ink">
            <h2 className="h4">{t('quote.contacts.title')}</h2>
            <p>
              <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
            </p>
            <p>
              <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
            </p>
            <p>
              <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                WhatsApp: {contact.whatsapp}
              </a>
            </p>
            <p className="caption">{pick(contact.businessHours, locale)}</p>
          </div>
        </aside>
      </div>
    </div>
  );
}
