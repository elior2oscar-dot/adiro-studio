import { site } from "@/lib/site";
import { HeroVisual } from "./HeroVisual";
import { TiltCard } from "./TiltCard";

export function Hero() {
  return (
    <header className="hero" id="top">
      <div className="hero-ambient" aria-hidden="true">
        <div className="hero-ambient-grid" />
        <div className="hero-ambient-orb hero-ambient-orb-a" />
        <div className="hero-ambient-orb hero-ambient-orb-b" />
        <div className="hero-ambient-ring" />
        <div className="hero-ambient-beam" />
      </div>

      <div className="container hero-inner">
        <div className="hero-copy-block reveal">
          <div className="hero-label">
            <span className="hero-label-dot" aria-hidden="true" />
            עיצוב · פיתוח · המרה
          </div>
          <h1 className="display hero-title">
            בוחרים בסטנדרט, מקבלים תוצאה שמוכרת.
          </h1>
          <p className="hero-copy">
            {site.brand} בונה אתרים מדויקים לעסקים — נראים יקרים, עובדים מהר,
            ומביאים פניות.
          </p>
          <div className="hero-actions">
            <a
              className="button button-primary"
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              דברו איתנו ב־WhatsApp
              <span className="button-icon" aria-hidden="true">
                ←
              </span>
            </a>
            <a className="button button-ghost" href="#works">
              לצפות בפרויקטים
            </a>
          </div>
          <div className="hero-meta" aria-label="יתרונות מרכזיים">
            <div className="hero-meta-item">
              <strong>עיצוב מדויק</strong>
              <span>ברמת סטודיו מקצועי</span>
            </div>
            <div className="hero-meta-item">
              <strong>ביצועים גבוהים</strong>
              <span>מהיר בכל מכשיר</span>
            </div>
            <div className="hero-meta-item">
              <strong>מיקוד בפניות</strong>
              <span>מסלול ברור ל־WhatsApp</span>
            </div>
          </div>
        </div>

        <div className="hero-visual-wrap reveal">
          <TiltCard className="hero-tilt" intensity={20}>
            <HeroVisual />
          </TiltCard>
        </div>
      </div>
    </header>
  );
}
