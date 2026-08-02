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
        {theme === "dashboard" ? (
          <div className="pm-dashboard">
            <aside className="pm-dashboard-side">
              <b />
              <span />
              <span />
              <span />
              <span />
            </aside>
            <div className="pm-dashboard-main">
              <div className="pm-dashboard-top">
                <em />
                <i />
              </div>
              <div className="pm-dashboard-kpis">
                <div>
                  <b />
                  <em />
                </div>
                <div>
                  <b />
                  <em />
                </div>
                <div>
                  <b />
                  <em />
                </div>
              </div>
              <div className="pm-dashboard-chart">
                <i style={{ height: "42%" }} />
                <i style={{ height: "68%" }} />
                <i style={{ height: "55%" }} />
                <i style={{ height: "82%" }} />
                <i style={{ height: "60%" }} />
                <i style={{ height: "74%" }} />
              </div>
            </div>
          </div>
        ) : null}

        {theme === "ecommerce" ? (
          <>
            <div className="project-mock-nav">
              <b />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-mock-hero">
              <div className="project-mock-text">
                <em />
                <strong />
                <strong className="short" />
                <s />
              </div>
              <div className="project-mock-visual project-mock-visual-filled pm-ecommerce-hero">
                <div className="pm-product-stack">
                  <i />
                  <i />
                  <i />
                </div>
              </div>
            </div>
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
          </>
        ) : null}

        {theme === "estate" ? (
          <>
            <div className="project-mock-nav">
              <b />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
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
          </>
        ) : null}

        {theme === "clinic" ? (
          <>
            <div className="project-mock-nav">
              <b />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
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
          </>
        ) : null}

        {theme === "studio" ? (
          <>
            <div className="project-mock-nav">
              <b />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="project-mock-hero">
              <div className="project-mock-text">
                <em />
                <strong />
                <strong className="short" />
                <s />
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
          </>
        ) : null}

        {theme === "funnel" ? (
          <>
            <div className="project-mock-nav">
              <b />
              <div>
                <i />
                <i />
                <i />
              </div>
            </div>
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
          </>
        ) : null}
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
            <p className="eyebrow">עבודות מהסטודיו</p>
            <h2 className="display section-title" id="works-title">
              אתרים שבנינו
              <br />
              <span className="gradient-text">לעסקים אמיתיים.</span>
            </h2>
          </div>
          <p className="section-lead">
            פרויקטים חיים שפותחו כאן — אפשר להיכנס ולראות את התוצאה בפועל.
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
                  <ul className="project-tags">
                    {work.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                  {work.action === "live" && work.href ? (
                    <a
                      className="project-action project-action--live"
                      href={work.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      לצפייה באתר
                      <span aria-hidden="true">↗</span>
                    </a>
                  ) : null}
                </div>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
