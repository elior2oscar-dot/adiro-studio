import { site } from "@/lib/site";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="final-cta" aria-labelledby="final-title">
      <Reveal className="container final-inner">
        <p className="eyebrow light">הצעד הבא</p>
        <h2 className="display final-title" id="final-title">
          מוכנים לאתר שגורם להזמין?
        </h2>
        <p className="final-copy">
          כתבו לנו בוואטסאפ. נבין מה העסק צריך, נגיד לכם בדיוק מה אפשר
          לבנות — ונתקדם בתהליך קצר, ברור ומדויק.
        </p>
        <a
          className="button button-primary"
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          מתחילים בוואטסאפ עכשיו
          <span className="button-icon" aria-hidden="true">
            ←
          </span>
        </a>
      </Reveal>
    </section>
  );
}
