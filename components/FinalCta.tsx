import { site } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";

export function FinalCta() {
  return (
    <section className="section final-cta" aria-labelledby="cta-title">
      <div className="container">
        <Reveal>
          <GlassCard className="final-cta-panel">
            <p className="eyebrow">התחלת פרויקט</p>
            <h2 className="display section-title" id="cta-title">
              מוכנים להתחיל
              <br />
              <span className="gradient-text">פרויקט חדש?</span>
            </h2>
            <p className="section-lead">
              שיחה קצרה, הצעה ברורה, ותהליך מדויק עד להשקה.
            </p>

            <div className="final-cta-row">
              <div className="final-cta-brand" aria-hidden="true">
                <Logo showStudio bold idSuffix="cta-l" />
              </div>

              <div className="final-cta-actions">
                <a
                  className="button button-primary"
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                  <span className="button-icon" aria-hidden="true">
                    ←
                  </span>
                </a>
                <a
                  className="button button-ghost"
                  href={`tel:${site.phoneTel}`}
                  aria-label={`חיוג אל ${site.phoneDisplay}`}
                >
                  {site.phoneDisplay}
                </a>
              </div>

              <div className="final-cta-brand final-cta-brand-end" aria-hidden="true">
                <Logo showStudio bold idSuffix="cta-r" />
              </div>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
