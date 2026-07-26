import { Reveal } from "./Reveal";

export function About() {
  return (
    <section className="section about" id="about" aria-labelledby="about-title">
      <div className="container about-grid">
        <Reveal className="about-mark">
          <div className="about-mark-inner">
            <svg
              className="about-mark-symbol"
              viewBox="0 0 40 40"
              width="72"
              height="72"
              aria-hidden="true"
            >
              <path
                d="M20 4 L34 34 H27.4 L24.1 26.2 H15.9 L12.6 34 H6 Z M17.7 21.8 H22.3 L20 16.2 Z"
                fill="#c9a45c"
              />
            </svg>
            <p className="about-mark-name">ADIRO</p>
            <p className="about-mark-studio">STUDIO</p>
            <span className="about-mark-line" aria-hidden="true" />
            <p className="about-mark-role">אתרים שגורמים להזמין</p>
          </div>
        </Reveal>

        <Reveal className="about-copy">
          <p className="eyebrow">Adir · Adiro Studio</p>
          <h2 className="display section-title" id="about-title">
            מהיר. מדויק.
            <br />
            ברמה אחרת.
          </h2>
          <p className="about-body">
            אני לא סטודיו שגורר פרויקטים. אני בונה אתרים ברמה גבוהה —
            עם חשיבה עסקית, עיצוב מדויק וכלים מתקדמים שמאפשרים
            להביא תוצאה פרימיום בתהליך קצר ומדויק. אתם מקבלים יחס אישי,
            החלטות ברורות, ואתר שאנשים באמת רוצים להזמין ממנו.
          </p>
          <div className="about-values" aria-label="הערכים שלנו">
            <span>תהליך קצר</span>
            <span>יחס אישי</span>
            <span>רמה גבוהה</span>
            <span>תוצאה ברורה</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
