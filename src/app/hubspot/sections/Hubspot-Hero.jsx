"use client";

import { hubspotData } from "@/app/hubspot/data/Hubspot-Data";
import { heroStyles as s } from "@/app/hubspot/styles/hero";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero() {
  const { hero } = hubspotData;
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const loadedClass = loaded ? "loaded" : "";

  return (
    <section
      id="hero"
      className={`${s.section} ${loaded ? "opacity-100" : "opacity-0"} transition-opacity duration-500 ease-out`}
    >
      <div className={s.container}>
        <div
          className={`${s.leftCol} ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} transition-all duration-500 ease-out`}
        >
          <span className={s.badge}>
            <span className={s.badgeDot} />
            HubSpot Consultant | CRM & Automation Specialist
          </span>

          <h1 className={s.h1}>HubSpot Consultant</h1>
          <h2 className={s.h2Sub}>
            Make HubSpot Work Smarter for Your Organization
          </h2>

          <p className={s.description}>
            Helping nonprofits, small businesses, workforce development
            programs, and growing organizations get more value from HubSpot
            through CRM optimization, automation, reporting, and process
            improvement.
          </p>

          <div className={s.btnRow}>
            <Link
              href="/hubspot#consultation"
              className={`${s.primaryBtn} no-underline inline-block text-center`}
            >
              Get a free consultation
            </Link>
            {/* UPDATED ANCHOR LINK ROUTING TO TARGET THE WHY ME SECTION */}
            <Link
              href="/hubspot#why-me"
              className={`${s.secondaryBtn} no-underline inline-block text-center`}
            >
              See my work
            </Link>
          </div>

          <div className={s.trustRow}>
            {hero.trustMicroSignals.map((signal, i) => (
              <span key={i} className={s.trustItem}>
                {i > 0 && <span className={s.trustDot} />}
                {i === 0 && <span className={s.trustCheck}>✓</span>}
                {signal}
              </span>
            ))}
          </div>
        </div>

        {/* Right graphic presentation column */}
        <div
          className={`${s.rightCol} ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"} transition-all duration-500 ease-out`}
        >
          <div className={`${s.mockupWrapper} ${loadedClass}`}>
            <div className={s.circleBg} />

            <div className={s.floatingBadges}>
              <span className={s.badge1}>Lifecycle Stage: Application</span>
              <span className={s.badge2}>Custom Object: Cohort 2026</span>
              <span className={s.badge3}>Data Status: Clean & Verified</span>
            </div>

            <div className={s.cardGrid}>
              <div className={s.contactCard}>
                <div className={s.cardHeader}>
                  <span className={s.backLink}>‹ Contacts</span>
                  <span className={s.actions}>Actions •</span>
                </div>
                <div className={s.contactRow}>
                  <div className={s.contactAvatar}>
                    <img
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=120&h=120&q=80"
                      alt="Marcus Vance"
                      className={s.avatarImage}
                    />
                  </div>
                  <div className={s.contactInfo}>
                    <div className={s.contactName}>Marcus Vance</div>
                    <div className={s.contactOrg}>MORTAR</div>
                    <div className={s.contactRole}>Academy Applicant</div>
                  </div>
                </div>

                <div className={s.contactDivider} />
                <span className={s.subListTitle}>Queue Pool Pipeline</span>
                <div className={s.subList}>
                  <div className={s.subContactRow}>
                    <div className={s.subContactAvatar}>ER</div>
                    <span className={s.subContactName}>Elena Rostova</span>
                    <span className={s.subContactMeta}>Cohort 2026</span>
                  </div>
                  <div className={s.subContactRow}>
                    <div className={s.subContactAvatar}>DL</div>
                    <span className={s.subContactName}>Devon Lane</span>
                    <span className={s.subContactMeta}>Verified</span>
                  </div>
                </div>
              </div>

              <div className={s.automationCard}>
                <div className={s.automationHeader}>
                  <span className={s.automationIcon}>●</span>
                  <div className={s.automationTitle}>
                    HubSpot Operations Hub: Active Workflow
                  </div>
                </div>
                <div className={s.automationBody}>
                  <div className={s.userMsg}>
                    How do I submit our team's program survey results?
                  </div>
                  <div className={s.triggerLabel}>
                    Triggered: Survey Management System
                  </div>
                  <div className={s.systemMsg}>
                    Submission processed! Data synced to your Executive
                    Dashboard.
                  </div>
                </div>
              </div>
            </div>

            <div className={s.metricsRow}>
              <div className={s.metricBox}>
                <span className={s.metricLabel}>ENROLLMENT PIPELINE</span>
                <div className={s.metricViz}>
                  <div className={s.funnelChart}>
                    <div className={s.funnelBar1} />
                    <div className={s.funnelBar2} />
                    <div className={s.funnelBar3} />
                  </div>
                </div>
              </div>

              <div className={s.metricBox}>
                <span className={s.metricLabel}>ORGANIZATIONS BY INDUSTRY</span>
                <div className={s.metricViz}>
                  <svg
                    className="w-11 h-11 transform -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#F4F6F8"
                      strokeWidth="4"
                    />
                    <circle
                      cx="18"
                      cy="18"
                      r="16"
                      fill="none"
                      stroke="#FF7A59"
                      strokeWidth="4"
                      strokeDasharray="100"
                      strokeDashoffset={loaded ? "35" : "100"}
                      className="transition-all duration-1000 ease-out delay-150"
                    />
                  </svg>
                </div>
              </div>

              <div className={s.metricBox}>
                <span className={s.metricLabel}>SURVEYS COMPLETED</span>
                <div className={s.metricViz}>
                  <div className={s.chartBars}>
                    <div className={s.chartBar1} />
                    <div className={s.chartBar2} />
                    <div className={s.chartBar3} />
                  </div>
                </div>
              </div>
            </div>

            <div className={s.starsWrapper}>
              <div className={s.starBig}>✦</div>
              <div className={s.starSmall}>✦</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
