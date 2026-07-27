import { site } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal>
          <TiltCard className="about-mark" intensity={20}>
            <div className="about-mark-inner">
              <div className="about-mark-glow" aria-hidden="true" />
              <svg
                className="about-mark-symbol"
                viewBox="0 0 40 40"
                width="128"
                height="128"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="aboutAGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="40%" stopColor="#d7e4ff" />
                    <stop offset="100%" stopColor="#6ea8ff" />
                  </linearGradient>
                  <filter id="aboutAGlow" x="-50%" y="-50%" width="200%" height="200%">
                    <feGaussianBlur stdDeviation="1.8" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M20 4 L34 34 H27.4 L24.1 26.2 H15.9 L12.6 34 H6 Z M17.7 21.8 H22.3 L20 16.2 Z"
                  fill="url(#aboutAGrad)"
                  filter="url(#aboutAGlow)"
                />
              </svg>
              <p className="about-mark-name">ADIRO</p>
              <p className="about-mark-studio">STUDIO</p>
              <span className="about-mark-line" aria-hidden="true" />
              <p className="about-mark-role">אתרים שגורמים להזמין</p>
            </div>
          </TiltCard>
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">הסטודיו</p>
          <div className="about-title-frame">
            <span className="about-title-beam" aria-hidden="true" />
            <h2 className="display section-title about-title" id="about-title">
              בוחרים בסטנדרט,
              <br />
              <span className="about-title-accent">מקבלים תוצאה שמוכרת.</span>
            </h2>
          </div>
          <p className="about-body">
            {site.brand} הוא סטודיו בוטיק לבניית אתרים — עם חשיבה עסקית, עיצוב
            מדויק ופיתוח מהיר. בלי גרירת פרויקטים ובלי פשרות על איכות. המטרה
            פשוטה: אתר שמשרה אמון וגורם ללקוחות לפנות.
          </p>
          <p className="about-body about-body-second">
            אתם מקבלים יחס אישי, החלטות ברורות ותהליך קצר שמסתיים בתוצאה שמרגישה
            יקרה — ונראית בהתאם.
          </p>
          <div className="about-values" aria-label="הערכים שלנו">
            <span>תהליך קצר</span>
            <span>יחס אישי</span>
            <span>דיוק גבוה</span>
            <span>תוצאה ברורה</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
