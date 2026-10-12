import { Link } from 'react-router-dom';
import { ctaBand } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { statsBand } from '../config/company';

/** Full-width ink band with four company figures. */
export function StatsBand() {
  const { locale } = useLocale();
  return (
    <section className="stats-ink" aria-label="Company figures">
      <div className="container stats-ink__grid">
        {statsBand.map((stat) => (
          <div key={pick(stat.label, locale)} className="stats-ink__item">
            <p className="stats-ink__value mono">{stat.value}</p>
            <p className="stats-ink__label">{pick(stat.label, locale)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/** Closing conversion block — always leads to Request a Quote. */
export function CtaBand() {
  const { t } = useLocale();
  return (
    <section className="cta-band" aria-labelledby="cta-title">
      <div className="container cta-band__inner">
        <div>
          <p className="eyebrow">{t('cta.label')}</p>
          <h2 className="h2" id="cta-title">
            {t('cta.title')}
          </h2>
          <p className="cta-band__desc">{t('cta.desc')}</p>
        </div>
        <div className="cta-band__actions">
          <Link to={ctaBand.primaryCta.href} className="btn btn--accent btn--lg">
            {t('cta.primary')}
          </Link>
          <Link to={ctaBand.secondaryCta.href} className="btn btn--on-ink btn--lg">
            {t('cta.secondary')}
          </Link>
        </div>
      </div>
    </section>
  );
}
