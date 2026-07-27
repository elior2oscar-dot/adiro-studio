"use client";

import { useState } from "react";
import { faqs, site } from "@/lib/site";
import { GlassCard } from "./GlassCard";
import { Reveal } from "./Reveal";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container">
        <Reveal>
          <p className="eyebrow">שאלות נפוצות</p>
          <h2 className="display section-title" id="faq-title">
            שאלות לפני
            <br />
            <span className="gradient-text">שמתחילים.</span>
          </h2>
          <p className="section-lead">
            תשובות קצרות על מחיר, זמנים ותהליך.
          </p>
        </Reveal>

        <div className="faq-list">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question}>
                <GlassCard className={`faq-item${isOpen ? " is-open" : ""}`}>
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                  >
                    <span>{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">
                      {isOpen ? "–" : "+"}
                    </span>
                  </button>
                  <div
                    className="faq-panel"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="faq-panel-inner">
                      <p className="faq-answer">{item.answer}</p>
                    </div>
                  </div>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="faq-cta">
          <p>עדיין יש שאלה? דברו איתנו ישירות.</p>
          <a
            className="button button-primary"
            href={site.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            שליחה ב־WhatsApp
            <span className="button-icon" aria-hidden="true">
              ←
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
