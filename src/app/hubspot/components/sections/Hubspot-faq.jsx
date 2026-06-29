"use client";

import { faqData } from "@/app/hubspot/data/sections/faq";
import { faqStyles as s } from "@/app/hubspot/styles/sections/faq";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleItem = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={s.section}>
      <div className={s.wrapper}>
        <div className={s.headerContainer}>
          <div className={s.pillWrapper}>
            <div className={s.pillLineBar} />
            <span className={s.pillText}>Common Questions</span>
          </div>
          <h2 className={s.mainHeading}>Frequently Asked Questions</h2>
          <p className={s.subHeading}>
            Clear answers to common questions about platform setup, scalability,
            and optimization support packages.
          </p>
        </div>

        <div className={s.listContainer}>
          {faqData.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`${s.itemContainer} ${isOpen ? s.itemContainerOpen : s.itemContainerClosed}`}
              >
                <button
                  className={s.questionBtn}
                  onClick={() => toggleItem(idx)}
                >
                  <span
                    className={`${s.questionText} ${isOpen ? s.questionTextOpen : s.questionTextClosed}`}
                  >
                    {item.q}
                  </span>
                  <div
                    className={`${s.iconBox} ${isOpen ? s.iconBoxOpen : s.iconBoxClosed}`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <div
                  className={s.answerContainer}
                  style={{
                    maxHeight: isOpen ? "240px" : "0px",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p
                    className={`${s.answerText} ${isOpen ? s.answerTextOpen : s.answerTextClosed}`}
                  >
                    {item.a}
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
