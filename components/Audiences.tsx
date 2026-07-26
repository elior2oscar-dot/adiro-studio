import { audiences } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Audiences() {
  return (
    <section className="section audiences" aria-labelledby="audiences-title">
      <div className="container audiences-inner">
        <Reveal className="audiences-head">
          <div>
            <p className="eyebrow light">למי זה מתאים</p>
            <h2 className="display section-title" id="audiences-title">
              לכל עסק שרוצה להיראות שווה את ההשקעה.
            </h2>
          </div>
          <p>
            לא משנה באיזה תחום אתם — אם האתר צריך לבנות אמון
            ולהביא פניות, זה בדיוק המקום.
          </p>
        </Reveal>

        <div className="audience-list">
          {audiences.map((audience) => (
            <Reveal className="audience-item" key={audience.title}>
              <h3 className="audience-title">{audience.title}</h3>
              <p className="audience-text">{audience.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
