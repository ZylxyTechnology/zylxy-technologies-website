"use client";

import { hubspotData } from "@/app/hubspot/data/Hubspot-Data";
import { resultsStyles as s } from "@/app/hubspot/styles/results";

export default function Results() {
  const { results } = hubspotData;

  return (
    <section className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>PROVEN ROI</span>
          <h2 className={s.heading}>HubSpot customer results after 1 year</h2>
          <p className={s.subtext}>
            HubSpot customers see improvement across their entire customer
            journey.
          </p>
        </div>

        <div className={s.grid}>
          {results.map((r, i) => (
            <div key={i} className={s.card}>
              <span className={s.value}>{r.value}</span>
              <span className={s.label}>{r.label}</span>
            </div>
          ))}
        </div>

        <button className={s.button}>
          What could your ROI be? Let's find out →
        </button>
      </div>
    </section>
  );
}
