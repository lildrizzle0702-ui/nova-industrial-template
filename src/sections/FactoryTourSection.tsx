import { homeSections } from '../config/hero';
import { useLocale, pick } from '../lib/i18n';
import { resolveFactoryTourMedia } from '../config/media';
import { Media } from '../components/ui/Media';
import { EditorialVisual, type EditorialSubject } from '../components/visuals/EditorialVisual';
import { SectionHead } from '../components/ui/SectionHead';

export function FactoryTourSection() {
  const s = homeSections.tour;
  const { locale } = useLocale();
  const tourImages = resolveFactoryTourMedia();

  return (
    <section className="section section--muted" aria-labelledby="tour-title">
      <div className="container">
        <SectionHead
          index={s.index}
          label={pick(s.label, locale)}
          title={pick(s.title, locale)}
          description={pick(s.description, locale)}
          align="between"
        />
        <div className="tour-grid">
          {s.slots.map((slot, i) => {
            const asset = tourImages[i];
            const caption = pick(slot.caption, locale);
            const subject = slot.subject as EditorialSubject;
            return (
              <figure key={i} className="tour-card" data-reveal>
                <div className="tour-card__media">
                  {asset ? (
                    <Media
                      src={asset.src}
                      alt={caption}
                      aspectRatio="4 / 3"
                      fallback={<EditorialVisual subject={subject} title={caption} />}
                    />
                  ) : (
                    <EditorialVisual subject={subject} title={caption} />
                  )}
                </div>
                <figcaption className="tour-card__caption mono">{caption}</figcaption>
              </figure>
            );
          })}
        </div>
      </div>
    </section>
  );
}
