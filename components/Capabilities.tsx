import { capabilities } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

function CapabilityMock({ id }: { id: string }) {
  return (
    <div className={`cap-mock cap-mock-${id}`} aria-hidden="true">
      <div className="cap-mock-scan" />
      {id === "01" ? (
        <div className="cap-mock-code">
          <span>const site = create()</span>
          <span className="glow">await build.deploy()</span>
          <span>metrics.ready = true</span>
        </div>
      ) : null}
      {id === "02" ? (
        <div className="cap-mock-ui">
          <div className="cap-mock-frame">
            <b />
            <em />
            <em className="short" />
            <i />
          </div>
          <div className="cap-mock-stack">
            <span />
            <span />
            <span />
          </div>
        </div>
      ) : null}
      {id === "03" ? (
        <div className="cap-mock-cloud">
          <div className="cap-mock-node" />
          <div className="cap-mock-node mid" />
          <div className="cap-mock-node" />
          <div className="cap-mock-pulse" />
        </div>
      ) : null}
      {id === "04" ? (
        <div className="cap-mock-speed">
          <div className="cap-mock-ring" />
          <strong>98</strong>
          <em>perf</em>
        </div>
      ) : null}
      {id === "05" ? (
        <div className="cap-mock-speed">
          <div className="cap-mock-ring" />
          <strong>0.4</strong>
          <em>sec</em>
        </div>
      ) : null}
      {id === "06" ? (
        <div className="cap-mock-code">
          <span>system.online</span>
          <span className="glow">signal.stable</span>
          <span>uptime: 99.9%</span>
        </div>
      ) : null}
    </div>
  );
}

export function Capabilities() {
  return (
    <section
      className="section"
      id="capabilities"
      aria-labelledby="capabilities-title"
    >
      <div className="container">
        <Reveal className="works-head">
          <div>
            <p className="eyebrow">יכולות</p>
            <h2 className="display section-title" id="capabilities-title">
              מומחיות בטכנולוגיות
              <br />
              <span className="gradient-text">מתקדמות.</span>
            </h2>
          </div>
          <p className="section-lead">
            פיתוח דיגיטלי מתקדם בהתאמה אישית — מעיצוב ועד ביצועים.
          </p>
        </Reveal>

        <div className="bento">
          {capabilities.map((item) => (
            <Reveal key={item.id} className="bento-cell">
              <GlassCard className="work-card">
                <div className="work-preview" aria-hidden="true">
                  <div className="work-preview-grid" />
                  <CapabilityMock id={item.id} />
                </div>
                <div className="work-body">
                  <p className="work-category">{item.category}</p>
                  <h3 className="work-title">{item.title}</h3>
                  <p className="work-desc">{item.description}</p>
                </div>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
