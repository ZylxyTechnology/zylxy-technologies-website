"use client";

import { faqStyles as s } from "@/app/hubspot/styles/faq";
import { Plus } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqItems = [
    {
      q: "What is HubSpot used for?",
      a: "HubSpot is a comprehensive platform offering tools for CRM, marketing automation, sales, and customer support. It helps businesses streamline processes, improve customer engagement, and grow revenue from one centralized system.",
    },
    {
      q: "Is HubSpot free to use?",
      a: "Yes, HubSpot offers a free CRM that includes core features like contact management and deal tracking. You can upgrade to paid plans for more advanced features as your business grows.",
    },
    {
      q: "Do I need technical skills to use HubSpot?",
      a: "No technical expertise is required. The platform is designed with user-friendly interfaces and helpful guides so marketers and sales teams without coding experience can easily navigate and benefit from its tools.",
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Absolutely. HubSpot lets you start with free tools and upgrade anytime to access premium features like advanced automation, reporting, and integrations.",
    },
    {
      q: "What integrations does HubSpot support?",
      a: "HubSpot supports hundreds of integrations with popular tools like Gmail, Outlook, Salesforce, Shopify, Zoom, and many more to create seamless workflows.",
    },
    {
      q: "How secure is my data with HubSpot?",
      a: "HubSpot uses industry-standard encryption, secure data centers, and regular audits. They comply with GDPR and CCPA to keep your information safe.",
    },
    {
      q: "Can HubSpot help with customer support?",
      a: "Yes! HubSpot's Service Hub offers ticketing, live chat, knowledge base, and customer feedback surveys to help your team provide timely, personalized support.",
    },
    {
      q: "Is HubSpot suitable for small businesses?",
      a: "HubSpot is perfect for small businesses because it offers free tools and scalable paid plans designed for teams of any size.",
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
