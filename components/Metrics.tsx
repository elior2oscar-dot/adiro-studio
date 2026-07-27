import { metrics } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

export function Metrics() {
  return (
    <section className="metrics" aria-label="מדדי ביצוע">
      <div className="container">
        <Reveal>
          <div className="metrics-grid">
            {metrics.map((metric) => (
              <GlassCard key={metric.label} className="metric-card">
                <p className="metric-value gradient-text">
                  {metric.value}
                  {metric.suffix}
                </p>
                <p className="metric-label">{metric.label}</p>
              </GlassCard>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
