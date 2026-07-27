import { capabilities } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

function CapabilityMock({ id }: { id: string }) {
  return (
    <div className={`cap-mock cap-mock-${id}`} aria-hidden="true">
      {id === "01" || id === "06" ? (
        <div className="cap-mock-lines">
          <span />
          <span className="accent" />
          <span />
        </div>
      ) : null}
      {id === "02" ? (
        <div className="cap-mock-ui">
          <div className="cap-mock-frame">
            <b />
            <em />
            <i />
          </div>
        </div>
      ) : null}
      {id === "03" ? (
        <div className="cap-mock-cloud">
          <div className="cap-mock-node" />
          <div className="cap-mock-node mid" />
          <div className="cap-mock-node" />
        </div>
      ) : null}
      {id === "04" || id === "05" ? (
        <div className="cap-mock-orb-only">
          <span />
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
              <GlassCard className="work-card work-card-calm">
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
