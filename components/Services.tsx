import { services } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

const mockVariants = ["build", "upgrade", "convert"] as const;

function ServiceMock({ variant }: { variant: (typeof mockVariants)[number] }) {
  return (
    <div className={`service-mock service-mock-${variant}`} aria-hidden="true">
      <div className="service-mock-chrome">
        <span />
        <span />
        <span />
        <i />
      </div>

      {variant === "build" ? (
        <div className="service-mock-body">
          <div className="service-mock-sidebar">
            <b />
            <b />
            <b className="active" />
            <b />
          </div>
          <div className="service-mock-main">
            <div className="service-mock-lines">
              <em />
              <em className="mid" />
              <em className="short" />
            </div>
            <div className="service-mock-code">
              <span>&lt;Hero /&gt;</span>
              <span>layout.grid()</span>
              <span className="glow">deploy.live()</span>
            </div>
            <div className="service-mock-bars">
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      ) : null}

      {variant === "upgrade" ? (
        <div className="service-mock-body service-mock-body-upgrade">
          <div className="service-mock-chart">
            <span style={{ height: "38%" }} />
            <span style={{ height: "58%" }} />
            <span style={{ height: "46%" }} />
            <span style={{ height: "78%" }} />
            <span style={{ height: "92%" }} />
          </div>
          <div className="service-mock-panel">
            <div className="service-mock-kpi">
              <em />
              <b />
            </div>
            <div className="service-mock-kpi">
              <em />
              <b className="accent" />
            </div>
            <div className="service-mock-wave" />
          </div>
        </div>
      ) : null}

      {variant === "convert" ? (
        <div className="service-mock-body service-mock-body-convert">
          <div className="service-mock-funnel">
            <i />
            <i />
            <i />
          </div>
          <div className="service-mock-cta-row">
            <span />
            <strong>WhatsApp</strong>
          </div>
          <div className="service-mock-dots">
            <b />
            <b />
            <b />
            <b />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export function Services() {
  return (
    <section className="section" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">שירותים</p>
          <h2 className="display section-title" id="services-title">
            שלושה מסלולים.
            <br />
            <span className="gradient-text">סטנדרט אחד.</span>
          </h2>
          <p className="section-lead">
            בחרו איך מתחילים — אתר חדש, שדרוג או שיפור המרות.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((service, index) => (
            <Reveal key={service.number}>
              <GlassCard className="service-card">
                <ServiceMock variant={mockVariants[index] ?? "build"} />
                <p className="service-number">{service.number}</p>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-text">{service.text}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
