"use client";

import { faqData } from "@/app/hubspot/data/faq";
import { faqStyles as s } from "@/app/hubspot/styles/faq";
import { useState } from "react";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" className={s.section}>
      <div className={s.wrapper}>
        <div className={s.headerContainer}>
          <div className={s.pillWrapper}>
            <div className={s.pillLineBar} />
            <span className={s.pillText}>COMMON QUESTIONS</span>
          </div>
          <h2 className={s.mainHeading}>Frequently Asked Questions</h2>
          <p className={s.subHeading}>
            Clear answers to common questions about platform setup, scalability,
            and optimization support packages.
          </p>
        </div>

        <div className={s.listContainer}>
          {faqData.map((faq, idx) => {
            const isOpen = openIdx === idx;

            return (
              <div
                key={idx}
                className={`${s.itemContainer} ${isOpen ? s.itemContainerOpen : s.itemContainerClosed}`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className={s.questionBtn}
                >
                  <span
                    className={`${s.questionText} ${isOpen ? s.questionTextOpen : s.questionTextClosed}`}
                  >
                    {faq.q}
                  </span>
                  <span
                    className={`${s.iconBox} ${isOpen ? s.iconBoxOpen : s.iconBoxClosed}`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={s.answerContainer}
                  style={{
                    maxHeight: isOpen ? "200px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className={`${s.answerText} ${isOpen ? s.answerTextOpen : s.answerTextClosed}`}
                  >
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
