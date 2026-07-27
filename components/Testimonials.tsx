import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section className="testimonials section" aria-label="מה אומרים לקוחות">
      <div className="container testimonials-head">
        <p className="eyebrow">המלצות</p>
        <h2 className="display section-title testimonials-title">
          לקוחות שכבר
          <br />
          <span className="gradient-text">עובדים איתנו.</span>
        </h2>
      </div>

      <div className="testimonials-marquee" dir="ltr">
        <div className="testimonials-track">
          <div className="testimonials-group">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={`a-${item.name}`}>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="testimonials-group" aria-hidden="true">
            {testimonials.map((item) => (
              <figure className="testimonial-card" key={`b-${item.name}`}>
                <blockquote>“{item.quote}”</blockquote>
                <figcaption>
                  <strong>{item.name}</strong>
                  <span>{item.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
