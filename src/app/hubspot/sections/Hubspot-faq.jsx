"use client";

import { faqStyles as s } from "@/app/hubspot/styles/faq";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      question: "What is HubSpot used for?",
      answer:
        "HubSpot is a comprehensive platform offering tools for CRM, marketing automation, sales pipeline tracking, customer support ticketing, content management, and custom operations reporting from one centralized system.",
    },
    {
      question: "Is HubSpot free to use?",
      answer:
        "Yes, HubSpot offers a robust free tier tier that includes core features like contact management, basic forms, email marketing templates, and live chat integration. Paid upgrades expand automation scale and customized pipelines.",
    },
    {
      question: "Do I need technical skills to use HubSpot?",
      answer:
        "Basic use is intuitive, but building specialized custom object structures, complex multi-stage workflow scripts, custom integration connections, and clean cross-hub reporting suites runs smoother with technical deployment architecture.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "All configuration environments are designed to adapt dynamically. Deployed property maps, structural pipelines, and list segments grow seamlessly along with your operational tiers.",
    },
  ];

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
          {faqItems.map((item, idx) => {
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
                    {item.question}
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
                    {item.answer}
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
