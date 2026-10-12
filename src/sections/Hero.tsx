import { Link } from 'react-router-dom';
import { hero } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { EditorialMedia } from '../components/ui/Media';

export function Hero() {
  const { t, locale } = useLocale();
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <div className="hero__copy">
          <p className="eyebrow">{pick(hero.eyebrow, locale)}</p>
          <h1 className="display" id="hero-title">
            {hero.titleLines.map((line) => (
              <span key={pick(line, locale)} className="hero__title-line">
                {pick(line, locale)}
              </span>
            ))}
          </h1>
          <p className="lead hero__desc">{pick(hero.description, locale)}</p>
          <div className="hero__actions">
            <Link to={hero.primaryCta.href} className="btn btn--accent btn--lg">
              {pick(hero.primaryCta.label, locale)}
            </Link>
            <Link to={hero.secondaryCta.href} className="btn btn--outline">
              {pick(hero.secondaryCta.label, locale)}
            </Link>
          </div>
          <p className="hero__footnote mono">{t('home.hero.footnote')}</p>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <EditorialMedia subject="hero" title="" caption={pick(hero.visualCaption, locale)} />
        </div>
      </div>
    </section>
  );
}
