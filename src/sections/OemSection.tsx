import { Link } from 'react-router-dom';
import { homeSections } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { ArrowIcon } from '../components/ui/SectionHead';

export function OemSection() {
  const s = homeSections.oem;
  const { t, locale } = useLocale();
  return (
    <section className="section section--muted" id="oem" aria-labelledby="oem-title">
      <div className="container">
        <div className="oem">
          <div className="oem__intro">
            <p className="eyebrow">
              <span className="mono">{s.index}</span>
              {pick(s.label, locale)}
            </p>
            <h2 className="h2" id="oem-title">
              {pick(s.title, locale)}
            </h2>
            <p className="lead">{pick(s.description, locale)}</p>
            <Link to="/request-quote" className="btn btn--primary">
              {t('home.oem.cta')}
              <ArrowIcon />
            </Link>
          </div>
          <div className="oem__grid">
            {s.points.map((point) => (
              <article key={pick(point.title, locale)} className="oem__item">
                <h3 className="h4">{pick(point.title, locale)}</h3>
                <p className="body-sm">{pick(point.body, locale)}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
