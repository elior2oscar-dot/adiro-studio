import { works } from "@/lib/site";
import { Reveal } from "./Reveal";
import { TiltCard } from "./TiltCard";

function ProjectMock({ theme }: { theme: string }) {
  return (
    <div className={`project-mock project-mock-${theme}`} aria-hidden="true">
      <div className="project-mock-chrome">
        <span />
        <span />
        <span />
        <i />
      </div>
      <div className="project-mock-body">
        <div className="project-mock-nav">
          <b />
          <div>
            <i />
            <i />
            <i />
          </div>
        </div>

        {theme === "estate" ? (
          <div className="project-mock-hero">
            <div className="project-mock-text">
              <em />
              <strong />
              <strong className="short" />
              <s />
            </div>
            <div className="project-mock-visual project-mock-visual-filled">
              <div className="pm-estate-sky" />
              <div className="pm-estate-building" />
              <div className="pm-estate-glow" />
            </div>
          </div>
        ) : null}

        {theme === "clinic" ? (
          <div className="project-mock-hero">
            <div className="project-mock-text">
              <em />
              <strong />
              <strong className="short" />
              <s className="pm-wa-pill">WhatsApp</s>
            </div>
            <div className="project-mock-visual project-mock-visual-filled">
              <div className="pm-clinic-orb" />
              <div className="pm-clinic-card">
                <b />
                <em />
                <i />
              </div>
            </div>
          </div>
        ) : null}

        {theme === "studio" ? (
          <div className="project-mock-hero">
            <div className="project-mock-text">
              <em />
              <strong />
              <strong className="short" />
              <div className="pm-code-lines">
                <span>tokens.define()</span>
                <span className="glow">components.sync()</span>
              </div>
            </div>
            <div className="project-mock-visual project-mock-visual-filled">
              <div className="pm-studio-grid">
                <i />
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
        ) : null}

        {theme === "funnel" ? (
          <div className="project-mock-hero">
            <div className="project-mock-text">
              <em />
              <strong />
              <strong className="short" />
              <s />
            </div>
            <div className="project-mock-visual project-mock-visual-filled">
              <div className="pm-funnel">
                <i />
                <i />
                <i />
              </div>
              <div className="pm-funnel-cta">WhatsApp</div>
            </div>
          </div>
        ) : null}

        {!["estate", "clinic", "studio", "funnel"].includes(theme) ? (
          <div className="project-mock-hero">
            <div className="project-mock-text">
              <em />
              <strong />
              <strong className="short" />
              <s />
            </div>
            <div className="project-mock-visual project-mock-visual-filled" />
          </div>
        ) : null}

        <div className="project-mock-cards">
          <div className="pm-mini-card">
            <b />
            <em />
          </div>
          <div className="pm-mini-card">
            <b />
            <em />
          </div>
          <div className="pm-mini-card">
            <b />
            <em />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Works() {
  return (
    <section className="section" id="works" aria-labelledby="works-title">
      <div className="container">
        <Reveal className="works-head">
          <div>
            <p className="eyebrow">פרויקטים נבחרים</p>
            <h2 className="display section-title" id="works-title">
              פרויקטים שפועלים
              <br />
              <span className="gradient-text">ברמה אחרת.</span>
            </h2>
          </div>
          <p className="section-lead">
            כיווני עיצוב ופיתוח לעסקים שרוצים להיראות מקצועיים — ולקבל יותר
            פניות.
          </p>
        </Reveal>

        <div className="works-grid">
          {works.map((work) => (
            <Reveal key={work.id} className="works-cell">
              <TiltCard className="project-card" intensity={10}>
                <ProjectMock theme={work.theme} />
                <div className="project-copy">
                  <p className="work-category">{work.category}</p>
                  <h3 className="work-title">{work.title}</h3>
                  <p className="work-desc">{work.description}</p>
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
