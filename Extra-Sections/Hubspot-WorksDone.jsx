"use client";

import { hubspotData } from "@/app/hubspot/data/Hubspot-Data";
import { worksDoneStyles as s } from "@/app/hubspot/styles/worksDone";

export default function HowItWorks() {
  const { howItWorks } = hubspotData;

  return (
    <section id="how-it-works" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>THE PROCESS</span>
          <h2 className={s.heading}>How HubSpot Works</h2>
          <p className={s.subtext}>
            A simplified journey to turn leads into loyal customers.
          </p>
        </div>

        <div className={s.grid}>
          <div className={s.connectorLine} />

          {howItWorks.map((step, i) => (
            <div key={i} className={s.stepWrapper}>
              <div className={s.circle}>
                <span className={s.stepLabel}>Step</span>
                <span className={s.stepNumber}>{step.step}</span>
              </div>

              <h3 className={s.stepTitle}>{step.title}</h3>
              <p className={s.stepDesc}>{step.desc}</p>

              {i < howItWorks.length - 1 && <div className={s.mobileArrow} />}
            </div>
          ))}
        </div>

        <div className={s.ctaWrapper}>
          <button className={s.ctaButton}>Start Your HubSpot Journey →</button>
        </div>
      </div>
    </section>
  );
}
