import { Reveal } from "./Reveal";
import { GlassCard } from "./GlassCard";

export function Problem() {
  return (
    <section className="problem section-tight" aria-label="הבעיה">
      <div className="container">
        <Reveal>
          <GlassCard className="problem-panel">
            <p className="problem-text">
              אתר ממוצע נעלם.{" "}
              <strong>אתר מדויק עוצר, בונה אמון ומביא פנייה.</strong>
            </p>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}
