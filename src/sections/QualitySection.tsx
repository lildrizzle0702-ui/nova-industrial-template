import { Link } from 'react-router-dom';
import { certifications } from '../config/certifications';
import { homeSections } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { EditorialMedia } from '../components/ui/Media';
import { ArrowIcon, SectionHead } from '../components/ui/SectionHead';

export function QualitySection() {
  const s = homeSections.quality;
  const { t, locale } = useLocale();
  return (
    <section className="section" aria-labelledby="quality-title">
      <div className="container">
        <div className="quality">
          <div className="quality__visual" aria-hidden="true">
            <EditorialMedia subject="quality" title="" />
          </div>
          <div className="quality__copy">
            <SectionHead
              index={s.index}
              label={pick(s.label, locale)}
              title={pick(s.title, locale)}
              description={pick(s.description, locale)}
            />
            <ul className="cert-strip" aria-label="Certifications">
              {certifications.map((cert) => (
                <li key={cert.id} className="cert-chip cert-chip--lg mono" title={pick(cert.name, locale)}>
                  {cert.code}
                </li>
              ))}
            </ul>
            <Link to="/quality" className="arrow-link">
              {t('home.quality.link')}
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
