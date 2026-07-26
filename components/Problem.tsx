import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container problem-grid">
        <Reveal>
          <p className="eyebrow">למה זה חשוב</p>
          <p className="problem-note">
            אנשים מחליטים מהר. האתר צריך לגרום להם להישאר,
            להבין — ולרצות לדבר איתכם.
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
