import { faqs } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  return (
    <section className="section faq" aria-labelledby="faq-title">
      <div className="container faq-layout">
        <Reveal className="faq-sticky">
          <p className="eyebrow">שאלות נפוצות</p>
          <h2 className="display section-title" id="faq-title">
            תשובות ישירות.
          </h2>
        </Reveal>

        <Reveal className="faq-list">
          {faqs.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary className="faq-question">
                {faq.question}
                <span className="faq-plus" aria-hidden="true">
                  +
                </span>
              </summary>
              <p className="faq-answer">{faq.answer}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
