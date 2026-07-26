import { site } from "@/lib/site";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="container hero-inner">
        <div className="reveal">
          <div className="hero-label">
            <span className="hero-label-dot" aria-hidden="true" />
            אתר פרימיום · תהליך קצר ומדויק
          </div>
          <h1 className="display hero-title">
            האתר שיגרום
            <br />
            <span className="accent">להזמין מכם.</span>
          </h1>
        </div>

        <div className="hero-side reveal">
          <p className="hero-copy">
            אנחנו בונים ומשדרגים אתרים שנראים יקרים, מרגישים אמינים —
            ומביאים אנשים לדבר איתכם. מדויק, חד, ובלי למשוך את התהליך.
          </p>
          <a
            className="button button-primary"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            רוצה אתר כזה? בואו נדבר
            <span className="button-icon" aria-hidden="true">
              ←
            </span>
          </a>
        </div>
        <span className="hero-signature">DESIGN × SPEED × RESULT</span>
      </div>
    </header>
  );
}
