import { services } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Services() {
  return (
    <section className="section services" id="services" aria-labelledby="services-title">
      <div className="container">
        <Reveal className="services-head">
          <div>
            <p className="eyebrow light">מה אנחנו עושים</p>
            <h2 className="display section-title" id="services-title">
              אתר שנראה כמו השקעה —
              <br />
              ומתנהג כמו מכונת פניות.
            </h2>
          </div>
          <p>
            לא תבניות. לא עיצוב גנרי. נוכחות דיגיטלית שמרגישה יוקרתית,
            מדברת ברור, ומזמינה את הלקוח לפעולה.
          </p>
        </Reveal>

        <div className="services-list">
          {services.map((service) => (
            <Reveal className="service-row" key={service.number}>
              <span className="service-number">{service.number}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-text">{service.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
