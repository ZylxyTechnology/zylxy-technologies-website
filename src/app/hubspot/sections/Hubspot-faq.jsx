"use client";

import { hubspotData } from "@/app/hubspot/data/Hubspot-Data";
import { faqStyles as s } from "@/app/hubspot/styles/faq";
import { useState } from "react";

export default function FAQ() {
  const { faqs } = hubspotData;
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>COMMON QUESTIONS</span>
          <h2 className={s.heading}>Frequently Asked Questions</h2>
        </div>

        <div className={s.listWrapper}>
          {faqs.map((faq, i) => (
            <div key={i} className={s.itemRow}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className={s.button}
              >
                <span
                  className={`${s.questionBase} ${
                    open === i ? s.questionOpen : s.questionClosed
                  }`}
                >
                  {faq.q}
                </span>

                <span
                  className={`${s.toggleIconBase} ${
                    open === i ? s.toggleIconOpen : ""
                  }`}
                >
                  +
                </span>
              </button>

              {open === i && (
                <div className={s.answerWrapper}>
                  <p className={s.answerText}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
