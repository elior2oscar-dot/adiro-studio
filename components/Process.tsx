import { process } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

export function Process() {
  return (
    <section className="section" id="process" aria-labelledby="process-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">תהליך</p>
          <h2 className="display section-title" id="process-title">
            תהליך קצר.
            <br />
            <span className="gradient-text">תוצאה ברורה.</span>
          </h2>
          <p className="section-lead">
            שלושה שלבים מסודרים — מההבנה ועד ההשקה.
          </p>
        </Reveal>

        <div className="process-grid">
          {process.map((step) => (
            <Reveal key={step.number}>
              <GlassCard className="process-card">
                <p className="process-number">{step.number}</p>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-text">{step.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
