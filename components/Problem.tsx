import { Reveal } from "./Reveal";

export function Problem() {
  return (
    <section className="section problem" aria-labelledby="problem-title">
      <div className="container problem-grid">
        <Reveal>
          <p className="eyebrow">למה זה חשוב</p>
          <p className="problem-note">
            האתר הוא לא כרטיס ביקור. הוא הכלי שמוכר בשבילכם
            גם כשאתם לא בשיחה.
          </p>
        </Reveal>
        <Reveal>
          <h2 className="problem-copy" id="problem-title">
            אתר יפה בלי מסר חד ובלי קריאה לפעולה —{" "}
            <strong>מבזבז כסף על תנועה שלא הופכת ללקוחות.</strong>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}
