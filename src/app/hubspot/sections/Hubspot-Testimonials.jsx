"use client";

import { hubspotData } from "@/app/hubspot/data/Hubspot-Data";
import { testimonialsStyles as s } from "@/app/hubspot/styles/testimonials";

export default function Testimonials() {
  const { testimonials } = hubspotData;

  return (
    <section id="testimonials" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>CLIENT VOICES</span>
          <h2 className={s.heading}>What Our Customers Say</h2>
        </div>

        <div className={s.grid}>
          {testimonials.map((t, i) => (
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
                  <div className={s.authorRole}>
                    {t.role} · {t.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
