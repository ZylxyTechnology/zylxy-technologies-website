import { hubspotData } from "@/app/hubspot/data/Hubspot-Data";
import { statsBarStyles as s } from "@/app/hubspot/styles/statsBar";

export default function HubSpotStatsBar() {
  const { stats } = hubspotData;

  return (
    <section className={s.section}>
      <div className={s.container}>
        {stats.map((stat, i) => (
          <div key={i} className={s.statBox}>
            <span className={s.value}>{stat.value}</span>
            <span className={s.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
