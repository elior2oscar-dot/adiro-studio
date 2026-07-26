import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container problem-grid">
        <Reveal>
          <p className="eyebrow">למה אתר רגיל לא מספיק</p>
          <p className="problem-note">
            אנשים לא מחפשים רק אתר יפה. הם מחפשים מישהו שמרגיש מקצועי,
            בטוח ושווה את הכסף — ואז הם נשארים ומזמינים.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="problem-copy" id="problem-title">
            אם מישהו נכנס לאתר שלכם ולא מרגיש מיד שאתם ברמה גבוהה —
            הוא לא יחכה.{" "}
            <strong>
              אנחנו בונים אתרים שגורמים להישאר, לסמוך — ולרצות לעבוד איתכם.
            </strong>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
