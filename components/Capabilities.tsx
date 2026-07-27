import { capabilities } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

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
              <GlassCard className="work-card work-card-calm work-card-text">
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
