import { techStack } from "@/lib/site";

export function TechStack() {
  return (
    <section className="tech" aria-label="כלים ויכולות טכניות" dir="ltr">
      <div className="tech-fade tech-fade-start" aria-hidden="true" />
      <div className="tech-fade tech-fade-end" aria-hidden="true" />
      <div className="tech-viewport">
        <div className="tech-track">
          <div className="tech-group">
            {techStack.map((item) => (
              <span className="tech-chip" key={`a-${item}`}>
                {item}
              </span>
            ))}
          </div>
          <div className="tech-group" aria-hidden="true">
            {techStack.map((item) => (
              <span className="tech-chip" key={`b-${item}`}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
