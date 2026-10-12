import { useState } from 'react';
import type { FormEvent } from 'react';
import { contact } from '../config/contact';
import { company } from '../config/company';
import { faqs } from '../config/certifications';
import { isEmail, isNonEmpty, type FieldErrors } from '../lib/validation';
import { usePageMeta } from '../lib/seo';
import { useLocale, pick } from '../lib/i18n';

interface ContactFormState {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const EMPTY: ContactFormState = { name: '', email: '', company: '', subject: '', message: '' };

export default function ContactPage() {
  const { t, locale } = useLocale();
  const addressLines = contact.addressLines.map((line) => pick(line, locale));
  const businessHours = pick(contact.businessHours, locale);
  usePageMeta({
    title: 'Contact',
    description: `Contact NOVA INDUSTRIAL — email ${contact.email}, phone ${contact.phone}, WhatsApp and factory address in Wenzhou, China. Sales replies within one business day.`,
    path: '/contact',
  });

  const [form, setForm] = useState<ContactFormState>(EMPTY);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sent, setSent] = useState(false);
  const [copied, setCopied] = useState(false);

  const set = (key: keyof ContactFormState) => (value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next: FieldErrors = {};
    if (!isNonEmpty(form.name)) next.name = t('contact.form.error.name');
    if (!isNonEmpty(form.email)) next.email = t('contact.form.error.email');
    else if (!isEmail(form.email)) next.email = t('contact.form.error.email');
    if (!isNonEmpty(form.message)) next.message = t('contact.form.error.message');
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setSent(true);
  };

  const summary = [
    t('contact.summary.title'),
    '——————————————————————————',
    `${t('contact.form.name')}: ${form.name}`,
    `${t('contact.form.company')}: ${form.company || '—'}`,
    `${t('contact.form.email')}: ${form.email}`,
    `${t('contact.form.subject')}: ${form.subject || t('contact.form.subject.general')}`,
    '',
    form.message || '—',
    '',
    t('contact.summary.footer').replace('{company}', pick(company.legalName, locale)),
  ].join('\n');

  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(
    form.subject || t('contact.form.placeholder.subject'),
  )}&body=${encodeURIComponent(summary)}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('contact.label')}</p>
          <h1 className="h1">{t('contact.title')}</h1>
          <p className="lead">
            {t('contact.desc')}
          </p>
        </div>
      </div>

      <div className="container section contact-page__layout">
        {/* Contact channels */}
        <aside className="contact-page__channels">
          <div className="info-card">
            <h2 className="h4">{t('contact.direct')}</h2>
            <ul className="contact-list">
              <li>
                <span className="contact-list__label mono">{t('contact.email')}</span>
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <span className="contact-list__label mono">{t('contact.sales')}</span>
                <a href={`mailto:${contact.salesEmail}`}>{contact.salesEmail}</a>
              </li>
              <li>
                <span className="contact-list__label mono">{t('contact.phone')}</span>
                <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a>
              </li>
              <li>
                <span className="contact-list__label mono">{t('contact.whatsapp')}</span>
                <a href={contact.whatsappHref} target="_blank" rel="noreferrer">
                  {contact.whatsapp}
                </a>
              </li>
            </ul>
          </div>
          <div className="info-card">
            <h2 className="h4">{t('contact.address')}</h2>
            <address>
              {addressLines.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </address>
            <p className="caption">{businessHours}</p>
          </div>
        </aside>

        {/* Form */}
        <div className="contact-page__form">
          {sent ? (
            <div className="quote-success">
              <div className="banner banner--success" role="status">
                <strong>{t('contact.success.bannerTitle')}</strong>
                <span>
                  {t('contact.success.bannerBody')}
                </span>
              </div>
              <div className="quote-success__actions">
                <a href={mailto} className="btn btn--accent" target="_blank" rel="noreferrer">
                  {t('contact.success.openEmail')}
                </a>
                <button type="button" className="btn btn--outline" onClick={copy}>
                  {copied ? `${t('contact.success.copied')} ✓` : t('contact.success.copyMessage')}
                </button>
              </div>
              <pre className="quote-success__summary mono">{summary}</pre>
              <div className="quote-success__foot">
                <button
                  type="button"
                  className="btn btn--outline btn--sm"
                  onClick={() => {
                    setSent(false);
                    setCopied(false);
                  }}
                >
                  {t('contact.success.editMessage')}
                </button>
              </div>
            </div>
          ) : (
            <form className="quote-form" onSubmit={onSubmit} noValidate>
              <div className="form-grid">
                <div className={`field ${errors.name ? 'field--error' : ''}`}>
                  <label className="field__label" htmlFor="cf-name">
                    {t('contact.form.name')} <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-name"
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
                  <label className="field__label" htmlFor="cf-company">
                    {t('contact.form.company')}
                  </label>
                  <input
                    id="cf-company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={(e) => set('company')(e.target.value)}
                    placeholder={t('contact.form.placeholder.company')}
                  />
                </div>
                <div className={`field ${errors.email ? 'field--error' : ''}`}>
                  <label className="field__label" htmlFor="cf-email">
                    {t('contact.form.email')} <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <input
                    id="cf-email"
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
                  <label className="field__label" htmlFor="cf-subject">
                    {t('contact.form.subject')}
                  </label>
                  <select id="cf-subject" value={form.subject} onChange={(e) => set('subject')(e.target.value)}>
                    <option value="">{t('contact.form.subject.general')}</option>
                    <option value="Quotation request">{t('contact.form.subject.quote')}</option>
                    <option value="Samples">{t('contact.form.subject.samples')}</option>
                    <option value="OEM / ODM project">{t('contact.form.subject.oem')}</option>
                    <option value="Documentation">{t('contact.form.subject.docs')}</option>
                  </select>
                </div>
                <div className={`field form-grid__full ${errors.message ? 'field--error' : ''}`}>
                  <label className="field__label" htmlFor="cf-message">
                    {t('contact.form.message')} <span className="field__req" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="cf-message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => set('message')(e.target.value)}
                    aria-required="true"
                    aria-invalid={Boolean(errors.message)}
                  />
                  {errors.message && <p className="field__error">{errors.message}</p>}
                </div>
              </div>
              <div className="quote-form__submit">
                <button type="submit" className="btn btn--accent btn--lg">
                  {t('contact.form.send')}
                </button>
                <p className="form-note">
                  {t('contact.form.note')}
                </p>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* FAQ */}
      <div className="section section--muted" id="faq">
        <div className="container">
          <div className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">{t('contact.faq.label')}</p>
              <h2 className="h2">{t('contact.faq.title')}</h2>
            </div>
          </div>
          <div className="faq-list">
            {faqs.map((item) => (
              <details key={item.question.en} className="faq-item">
                <summary className="faq-item__q">{pick(item.question, locale)}</summary>
                <p className="faq-item__a body-sm">{pick(item.answer, locale)}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
