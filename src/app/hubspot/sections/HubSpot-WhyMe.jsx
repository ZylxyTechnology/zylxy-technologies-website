"use client";

import { whyMeStyles as s } from "@/app/hubspot/styles/whyMe";

export default function WhyMe() {
  const cards = [
    {
      title: "Real-World HubSpot Experience",
      desc: "I work in HubSpot every day and understand the practical challenges organizations face.",
    },
    {
      title: "Data-Driven Approach",
      desc: "Our background in data management and reporting helps ensure your CRM remains accurate, organized, and reliable.",
    },
    {
      title: "Process-Focused Solutions",
      desc: "I build solutions that align with how your team actually works—not just how the software is designed.",
    },
    {
      title: "Nonprofit & Program Management Expertise",
      desc: "I understand the unique operational needs of nonprofits, educational programs, workforce development organizations, and community-based initiatives.",
    },
  ];

  return (
    <section id="why-me" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>WHY WORK WITH ME?</span>
          <h2 className={s.heading}>A Different Kind of HubSpot Consultant</h2>
        </div>

        <div className={s.grid}>
          {cards.map((card, idx) => (
            <div key={idx} className={s.card}>
              <div className={s.badgeWrapper}>
                <span className={s.badgeText}>0{idx + 1}</span>
              </div>
              <h3 className={s.cardTitle}>{card.title}</h3>
              <p className={s.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>

        <div className={s.certPlaceholder}>
          <div className={s.certStatusWrapper}>
            <span className={s.certPing} />
            <span className={s.certEyebrow}>
              Credential Verification — Coming Soon
            </span>
          </div>
          <p className={s.certDesc}>
            Verified HubSpot badges, industry certifications, and accredited
            training indicators will be displayed here in Phase 3 of this build.
          </p>
        </div>
      </div>
    </section>
  );
}
