import { useMemo, useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { contact } from '../../config/contact';
import { certifications } from '../../config/certifications';
import { useLocale, pick } from '../../lib/i18n';
import { useDisplay } from '../../lib/display';
import { brand } from '../../config/brand';
import { inquiryRows, inquirySummaryText, useInquiry } from '../../lib/inquiry';
import { isEmail, isNonEmpty, type FieldErrors } from '../../lib/validation';
import type { InquiryContactForm, Product } from '../../data/types';
import { FORMSPREE_ENDPOINT } from '../../config/thirdParty';
import { trackQuoteSubmit } from '../../lib/analytics';

const EMPTY_FORM: InquiryContactForm = {
  name: '',
  company: '',
  email: '',
  country: '',
  certification: '',
  packaging: '',
  message: '',
};

const certificationOptions = (t: (k: string) => string, locale: string) => [
  { value: '', label: t('quote.form.certification.none') },
  ...certifications.map((c) => ({
    value: c.code,
    label: `${c.code} - ${pick(c.name, locale)}`,
  })),
  { value: 'Other / advise', label: t('quote.form.certification.other') },
];

const packagingOptions = (t: (k: string) => string) => [
  { value: '', label: t('quote.form.packaging.standard') },
  { value: 'Retail-ready blister', label: t('quote.form.packaging.blister') },
  { value: 'Retail box', label: t('quote.form.packaging.box') },
  { value: 'Constructor pack', label: t('quote.form.packaging.constructor') },
  { value: 'Plain export carton', label: t('quote.form.packaging.plain') },
];

/**
 * Shared quote-request form.
 * Reads the inquiry basket, validates contact fields, and hands off honestly:
 * the site has no mail backend, so submission prepares a complete summary the
 * buyer sends from their own email/WhatsApp client, or copies for CRM entry.
 */
export function QuoteRequestForm({ note }: { note?: string }) {
  const { t, locale } = useLocale();
  const { productName } = useDisplay();
  const inquiry = useInquiry();
  const rows = inquiryRows(inquiry.lines);
  const [form, setForm] = useState<InquiryContactForm>(EMPTY_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState('');

  const footer = useMemo(
    () => t('quote.summary.footer').replace('{brand}', brand.name).replace('{email}', contact.email).replace('{phone}', contact.phone),
    [t],
  );

  const set = (key: keyof InquiryContactForm) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: FieldErrors = {};
    if (!isNonEmpty(form.name)) next.name = t('quote.form.error.name');
    if (!isNonEmpty(form.email)) next.email = t('quote.form.error.email');
    else if (!isEmail(form.email)) next.email = t('quote.form.error.emailInvalid');
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  /* Group numbers follow visual order — the project group only exists with basket items. */
  const groupNo = rows.length > 0
    ? { project: '01', contact: '02', requirements: '03' }
    : { project: '', contact: '01', requirements: '02' };

  const summaryLabels = {
    title: t('quote.summary.title'),
    name: t('quote.form.name'),
    company: t('quote.form.company'),
    email: t('quote.form.email'),
    country: t('quote.form.country'),
    certification: t('quote.form.certification'),
    packaging: t('quote.form.packaging'),
    productsOfInterest: t('quote.summary.productsOfInterest'),
    message: t('quote.summary.message'),
    none: '—',
    productLine: (r: { product: Product; quantity: number }, i: number) =>
      `${i + 1}. ${productName(r.product)} — SKU ${r.product.sku} — ${t('common.qty')} ${r.quantity}`,
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    if (honeypot) return; // honeypot caught a bot
    setSubmitting(true);
    setSubmitError(null);

    const summaryText = inquirySummaryText(form, rows, footer, summaryLabels);

    const formData = new FormData();
    formData.append('name', form.name);
    formData.append('company', form.company);
    formData.append('email', form.email);
    formData.append('country', form.country);
    formData.append('certification', form.certification || '');
    formData.append('packaging', form.packaging || '');
    formData.append('message', form.message);
    formData.append('summary', summaryText);
    formData.append('_subject', t('quote.mailSubject').replace('{company}', form.company || form.name));

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (response.ok) {
        inquiry.submit(form);
        trackQuoteSubmit();
        setSubmitted(true);
        setSubmitting(false);
      } else {
        const data = await response.json().catch(() => ({}));
        setSubmitError(data.error || t('quote.form.error.submit'));
        setSubmitting(false);
      }
    } catch {
      setSubmitError(t('quote.form.error.submit'));
      setSubmitting(false);
    }
  };

  /* ---------- Success state ---------- */
  if (submitted) {
    return (
      <div className="quote-success">
        <div className="banner banner--success" role="status">
          <strong>{t('quote.success.title')}</strong>
          <span>{t('quote.success.sent')}</span>
        </div>
        <div className="btn-row" style={{ marginTop: 'var(--sp-6)' }}>
          <button
            type="button"
            className="btn btn--outline btn--sm"
            onClick={() => {
              setSubmitted(false);
              setForm(EMPTY_FORM);
            }}
          >
            {t('quote.success.edit')}
          </button>
          <Link to="/products" className="btn btn--primary btn--sm" onClick={() => inquiry.clear()}>
            {t('quote.success.finish')}
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- Form state — procurement intake ---------- */
  return (
    <form className="quote-form" onSubmit={onSubmit} noValidate>
      {rows.length > 0 && (
        <section className="quote-group" aria-label="Products in this inquiry">
          <p className="quote-group__label mono">
            <span className="quote-group__index">{groupNo.project}</span>{t('quote.group.project')}
          </p>
          <ul className="quote-basket">
            {rows.map(({ product, quantity }) => (
              <li key={product.id} className="quote-basket__row">
                <div className="quote-basket__info">
                  <p className="quote-basket__name">
                    <Link to={`/products/${product.slug}`}>{productName(product)}</Link>
                  </p>
                  <p className="caption mono">{product.sku} · MOQ {pick(product.moq, locale)}</p>
                </div>
                <div className="field quote-basket__qty">
                  <label htmlFor={`qty-${product.id}`} className="field__label">
                    {t('quote.form.qty')}
                  </label>
                  <input
                    id={`qty-${product.id}`}
                    type="number"
                    min={1}
                    step={1}
                    value={quantity}
                    onChange={(e) => inquiry.setQuantity(product.id, Number(e.target.value))}
                  />
                </div>
                <button
                  type="button"
                  className="text-btn"
                  onClick={() => inquiry.remove(product.id)}
                  aria-label={`${t('quote.form.remove')}: ${productName(product)}`}
                >
                  {t('quote.form.remove')} ✕
                </button>
              </li>
            ))}
          </ul>
          <p className="form-note">
            {t('quote.form.qtyNote')}
          </p>
        </section>
      )}

      {rows.length === 0 && note && <p className="form-note">{note}</p>}

      <section className="quote-group" aria-label="Contact details">
        <p className="quote-group__label mono">
          <span className="quote-group__index">{groupNo.contact}</span>{t('quote.group.contact')}
        </p>
        <div className="form-grid">
          <div className={`field ${errors.name ? 'field--error' : ''}`}>
            <label className="field__label" htmlFor="qf-name">
              {t('quote.form.name')} <span className="field__req" aria-hidden="true">*</span>
            </label>
            <input
              id="qf-name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={(e) => set('name')(e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.name)}
              placeholder={t('contact.form.placeholder.name')}
            />
            {errors.name && <p className="field__error">{errors.name}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="qf-company">
              {t('quote.form.company')}
            </label>
            <input
              id="qf-company"
              name="company"
              autoComplete="organization"
              value={form.company}
              onChange={(e) => set('company')(e.target.value)}
              placeholder={t('quote.form.placeholder.company')}
            />
          </div>

          <div className={`field ${errors.email ? 'field--error' : ''}`}>
            <label className="field__label" htmlFor="qf-email">
              {t('quote.form.email')} <span className="field__req" aria-hidden="true">*</span>
            </label>
            <input
              id="qf-email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => set('email')(e.target.value)}
              aria-required="true"
              aria-invalid={Boolean(errors.email)}
              placeholder="your@company.com"
            />
            {errors.email && <p className="field__error">{errors.email}</p>}
          </div>

          <div className="field">
            <label className="field__label" htmlFor="qf-country">
              {t('quote.form.country')}
            </label>
            <input
              id="qf-country"
              name="country"
              autoComplete="country-name"
              value={form.country}
              onChange={(e) => set('country')(e.target.value)}
              placeholder={t('quote.form.placeholder.country')}
            />
          </div>
        </div>
      </section>

      <section className="quote-group" aria-label="Requirements">
        <p className="quote-group__label mono">
          <span className="quote-group__index">{groupNo.requirements}</span>{t('quote.group.requirements')}
        </p>
        <div className="form-grid">
          <div className="field">
            <label className="field__label" htmlFor="qf-certification">
              {t('quote.form.certification')}
            </label>
            <select
              id="qf-certification"
              name="certification"
              value={form.certification}
              onChange={(e) => set('certification')(e.target.value)}
            >
              {certificationOptions(t, locale).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field">
            <label className="field__label" htmlFor="qf-packaging">
              {t('quote.form.packaging')}
            </label>
            <select
              id="qf-packaging"
              name="packaging"
              value={form.packaging}
              onChange={(e) => set('packaging')(e.target.value)}
            >
              {packagingOptions(t).map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="field form-grid__full">
            <label className="field__label" htmlFor="qf-message">
              {t('quote.form.message')}
            </label>
            <textarea
              id="qf-message"
              name="message"
              rows={5}
              value={form.message}
              onChange={(e) => set('message')(e.target.value)}
              placeholder={t('quote.form.messagePlaceholder')}
            />
          </div>
        </div>
      </section>

      {/* Honeypot — hidden from users, traps bots */}
      <div className="field field--honeypot">
        <label htmlFor="qf-website">Website</label>
        <input
          id="qf-website"
          name="website"
          type="text"
          autoComplete="off"
          tabIndex={-1}
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {submitError && (
        <p className="field__error" role="alert">
          {submitError}
        </p>
      )}

      <div className="quote-form__submit">
        <button type="submit" className="btn btn--accent btn--lg" disabled={submitting}>
          {submitting ? '...' : t('quote.form.submit')}
        </button>
        <p className="form-note">
          {t('quote.form.note')}
        </p>
      </div>
    </form>
  );
}
