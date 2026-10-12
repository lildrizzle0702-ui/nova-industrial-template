import { factoryStats } from '../config/company';
import { useLocale, pick } from '../lib/i18n';
import { homeSections } from '../config/hero';
import { EditorialMedia } from '../components/ui/Media';
import { SectionHead } from '../components/ui/SectionHead';

export function FactorySection() {
  const s = homeSections.factory;
  const { locale } = useLocale();
  return (
    <section className="section section--ink" aria-labelledby="factory-title">
      <div className="container">
        <div className="factory">
          <div className="factory__copy">
            <SectionHead
              index={s.index}
              label={pick(s.label, locale)}
              title={pick(s.title, locale)}
              description={pick(s.description, locale)}
              onInk
            />
            <ul className="factory__points">
              {s.points.map((point) => (
                <li key={pick(point, locale)}>{pick(point, locale)}</li>
              ))}
            </ul>
          </div>
          <div className="factory__visual" aria-hidden="true">
            <EditorialMedia subject={s.visual} title="" />
          </div>
        </div>
        <dl className="stat-band stat-band--ink">
          {factoryStats.map((stat) => (
            <div key={pick(stat.label, locale)} className="stat-band__item">
              <dt className="stat-band__value mono">{stat.value}</dt>
              <dd className="stat-band__label">{pick(stat.label, locale)}</dd>
              {stat.note && <dd className="stat-band__note">{pick(stat.note, locale)}</dd>}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
