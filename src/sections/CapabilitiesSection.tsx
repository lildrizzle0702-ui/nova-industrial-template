import { Link } from 'react-router-dom';
import { capabilities } from '../config/certifications';
import { useLocale, pick } from '../lib/i18n';
import { homeSections } from '../config/hero';
import { SectionHead } from '../components/ui/SectionHead';

export function CapabilitiesSection() {
  const s = homeSections.capabilities;
  const { t, locale } = useLocale();
  return (
    <section className="section" aria-labelledby="capabilities-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={pick(s.label, locale)}
          title={pick(s.title, locale)}
          description={pick(s.description, locale)}
          cta={{ label: t('home.cap.viewAll'), href: '/capabilities' }}
          align="between"
        />
        <div className="capability-grid">
          {capabilities.map((cap) => (
            <Link to={`/capabilities#${cap.id}`} key={cap.id} className="capability-row">
              <span className="capability-row__index mono">{cap.index}</span>
              <span className="capability-row__body">
                <span className="capability-row__title h4">{pick(cap.title, locale)}</span>
                <span className="capability-row__desc body-sm">{pick(cap.description, locale)}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
