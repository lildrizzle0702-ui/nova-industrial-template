import { Link } from 'react-router-dom';
import { capabilities } from '../config/certifications';
import { factoryMediaStrip } from '../config/about';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon } from '../components/ui/SectionHead';
import { usePageMeta } from '../lib/seo';
import { useLocale, pick } from '../lib/i18n';

export default function CapabilitiesPage() {
  const { t, locale } = useLocale();
  const process = [
    { step: '01', title: t('capabilities.oem.step1.title'), body: t('capabilities.oem.step1.body') },
    { step: '02', title: t('capabilities.oem.step2.title'), body: t('capabilities.oem.step2.body') },
    { step: '03', title: t('capabilities.oem.step3.title'), body: t('capabilities.oem.step3.body') },
    { step: '04', title: t('capabilities.oem.step4.title'), body: t('capabilities.oem.step4.body') },
    { step: '05', title: t('capabilities.oem.step5.title'), body: t('capabilities.oem.step5.body') },
    { step: '06', title: t('capabilities.oem.step6.title'), body: t('capabilities.oem.step6.body') },
  ];
  usePageMeta({
    title: 'Capabilities',
    description:
      'NOVA INDUSTRIAL capabilities: precision molding and assembly, OEM private label, ODM development, IEC-aligned QC testing, packaging engineering and export logistics to 40+ markets.',
    path: '/capabilities',
  });

  return (
    <div className="capabilities-page">
      <div className="page-hero">
        <div className="container page-hero__head">
          <p className="eyebrow">{t('capabilities.label')}</p>
          <h1 className="h1">{t('capabilities.title')}</h1>
          <p className="lead">
            {t('capabilities.desc')}
          </p>
        </div>
      </div>

      <div className="container section">
        <div className="capability-detail-list">
          {capabilities.map((cap) => (
            <section key={cap.id} id={cap.id} className="capability-detail" aria-labelledby={`cap-${cap.id}`}>
              <div className="capability-detail__head">
                <span className="capability-detail__index mono">{cap.index}</span>
                <h2 className="h2" id={`cap-${cap.id}`}>
                  {pick(cap.title, locale)}
                </h2>
              </div>
              <div className="capability-detail__body">
                <p className="lead">{pick(cap.description, locale)}</p>
                <ul className="check-list">
                  {cap.points.map((point) => (
                    <li key={pick(point, locale)}>{pick(point, locale)}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>

      <div className="section section--tight">
        <div className="container">
          <div className="media-strip">
            {factoryMediaStrip.map((m) => (
              <div key={m.subject} className="media-strip__item">
                <EditorialMedia subject={m.subject} title={pick(m.caption, locale)} caption={pick(m.caption, locale)} aspectRatio="4 / 3" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="section section--ink" id="oem">
        <div className="container">
          <div className="factory">
            <div className="factory__copy">
              <p className="eyebrow eyebrow--ink">
                <span className="mono">07</span> {t('capabilities.oem.label')}
              </p>
              <h2 className="h2">{t('capabilities.oem.title')}</h2>
              <p className="factory__desc">
                {t('capabilities.oem.desc')}
              </p>
            </div>
            <div className="factory__visual" aria-hidden="true">
              <EditorialMedia subject="engineering" title="" />
            </div>
          </div>
          <ol className="process-list">
            {process.map((p) => (
              <li key={p.step} className="process-list__item">
                <span className="process-list__step mono">{p.step}</span>
                <div>
                  <h3 className="h4">{p.title}</h3>
                  <p className="body-sm">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="section">
        <div className="container cta-band cta-band--flat">
          <div>
            <p className="eyebrow">{t('capabilities.cta.label')}</p>
            <h2 className="h2">{t('capabilities.cta.title')}</h2>
            <p className="cta-band__desc">
              {t('capabilities.cta.desc')}
            </p>
          </div>
          <div className="cta-band__actions">
            <Link to="/request-quote" className="btn btn--accent btn--lg">
              {t('capabilities.cta.discuss')}
              <ArrowIcon />
            </Link>
            <Link to="/quality" className="btn btn--outline btn--lg">
              {t('capabilities.cta.quality')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
