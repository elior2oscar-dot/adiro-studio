import { process } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal className="process-top">
          <p className="eyebrow">תהליך קצר. תוצאה גבוהה.</p>
          <h2 className="display section-title" id="process-title">
            מקצוענים לא גוררים תהליכים.
          </h2>
        </Reveal>

        <div className="process-grid">
          {process.map((step) => (
            <Reveal className="process-item" key={step.number}>
              <span className="process-number">{step.number} / 04</span>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-text">{step.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
