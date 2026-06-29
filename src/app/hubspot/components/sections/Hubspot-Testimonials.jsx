"use client";

import { testimonialsData } from "@/app/hubspot/data/sections/testimonials";
import { testimonialsStyles as s } from "@/app/hubspot/styles/sections/testimonials";

export default function Testimonials() {
  return (
    <section id="testimonials" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>INTERNAL STAKEHOLDER IMPACT</span>
          <h2 className={s.heading}>MORTAR Success Spotlight</h2>
        </div>

        <div className={s.grid}>
          {testimonialsData.map((t, i) => (
            <div key={i} className={s.card}>
              <div className={s.starsRow}>
                {[...Array(5)].map((_, sIdx) => (
                  <span key={sIdx} className={s.star}>
                    ★
                  </span>
                ))}
              </div>

              <p className={s.quote}>"{t.quote}"</p>

              <div className={s.authorRow}>
                <div className={s.avatar}>{t.initials}</div>
                <div className={s.meta}>
                  <div className={s.authorName}>{t.name}</div>
                  <div className={s.authorRole}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
