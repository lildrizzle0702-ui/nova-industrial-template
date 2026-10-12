import { homeSections } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { SectionHead } from '../components/ui/SectionHead';

export function TrustSection() {
  const s = homeSections.trust;
  const { locale } = useLocale();

  return (
    <section className="section section--ink" aria-labelledby="trust-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={pick(s.label, locale)}
          title={pick(s.title, locale)}
          description={pick(s.description, locale)}
          align="between"
          onInk
        />
        <div className="trust-grid">
          {s.points.map((point) => (
            <div key={pick(point.label, locale)} className="trust-card" data-reveal>
              <p className="trust-card__value mono">{point.value}</p>
              <p className="trust-card__label">{pick(point.label, locale)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
