import { Link } from 'react-router-dom';
import { certifications } from '../config/certifications';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon } from '../components/ui/SectionHead';
import { usePageMeta } from '../lib/seo';
import { useLocale, pick } from '../lib/i18n';

export default function QualityPage() {
  const { t, locale } = useLocale();
  const qcProcess = [
    { title: t('quality.qc1.title'), body: t('quality.qc1.body') },
    { title: t('quality.qc2.title'), body: t('quality.qc2.body') },
    { title: t('quality.qc3.title'), body: t('quality.qc3.body') },
    { title: t('quality.qc4.title'), body: t('quality.qc4.body') },
    { title: t('quality.qc5.title'), body: t('quality.qc5.body') },
    { title: t('quality.qc6.title'), body: t('quality.qc6.body') },
  ];
  usePageMeta({
    title: 'Quality & Compliance',
    description:
      'NOVA INDUSTRIAL quality system: ISO 9001:2015 certified production, IEC 60669-1 / IEC 60884-1 type testing, CE, RoHS, UKCA and SASO certifications with per-batch reports.',
    path: '/quality',
  });

  return (
    <div className="quality-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('quality.label')}</p>
          <h1 className="h1">{t('quality.title')}</h1>
          <p className="lead">
            {t('quality.desc')}
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="about-intro">
          <div>
            <h2 className="h2">{t('quality.process.title')}</h2>
            <ol className="qc-list">
              {qcProcess.map((stage, i) => (
                <li key={stage.title} className="qc-list__item">
                  <span className="qc-list__num mono">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="h4">{stage.title}</h3>
                    <p className="body-sm">{stage.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="about-intro__visual" aria-hidden="true">
            <EditorialMedia subject="quality" title="" />
          </div>
        </div>
      </div>

      <div className="section section--muted" id="certifications">
        <div className="container">
          <div className="section-head">
            <div className="section-head__main">
              <p className="eyebrow">{t('quality.cert.label')}</p>
              <h2 className="h2">{t('quality.cert.title')}</h2>
            </div>
          </div>
          <div className="cert-grid">
            {certifications.map((cert) => (
              <article key={cert.id} className="cert-card">
                <p className="cert-card__code mono">{cert.code}</p>
                <h3 className="h4">{pick(cert.name, locale)}</h3>
                <p className="body-sm">{pick(cert.description, locale)}</p>
                <p className="cert-card__scope mono">{pick(cert.scope, locale)}</p>
              </article>
            ))}
          </div>
          <p className="form-note cert-grid__note">
            {t('quality.cert.note')}
          </p>
        </div>
      </div>

      <div className="section">
        <div className="container cta-band cta-band--flat">
          <div>
            <p className="eyebrow">{t('quality.cta.label')}</p>
            <h2 className="h2">{t('quality.cta.title')}</h2>
            <p className="cta-band__desc">
              {t('quality.cta.desc')}
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/request-quote" className="btn btn--accent btn--lg">
              {t('quality.cta.quote')}
              <ArrowIcon />
            </Link>
            <Link to="/products" className="btn btn--outline btn--lg">
              {t('quality.cta.browse')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
