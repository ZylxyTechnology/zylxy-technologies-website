"use client";

import { keyFeaturesStyles as s } from "@/app/hubspot/styles/keyFeatures";
import {
  BarChart3,
  Boxes,
  ClipboardList,
  Cpu,
  Shuffle,
  Sparkles,
} from "lucide-react";

export default function KeyFeatures() {
  const capabilities = [
    {
      icon: <Boxes className="w-5 h-5 stroke-[2]" />,
      title: "Custom Object Architecture",
      description:
        "Design advanced, non-standard HubSpot data structures and associations to model complex entities like cohorts, academies, alumni tracks, or memberships.",
    },
    {
      icon: <Cpu className="w-5 h-5 stroke-[2]" />,
      title: "Lifecycle & Enrollment Automation",
      description:
        "Eliminate manual overhead by engineering frictionless end-to-end multi-stage application tracking, program registration, and automated student/client onboarding.",
    },
    {
      icon: <Sparkles className="w-5 h-5 stroke-[2]" />,
      title: "Data Cleanup & Standardization",
      description:
        "Remediate messy databases through structured duplicate management, property reorganization, and validation rules to ensure accurate reporting analytics.",
    },
    {
      icon: <ClipboardList className="w-5 h-5 stroke-[2]" />,
      title: "Custom Survey & Event Systems",
      description:
        "Build integrated operational loops for feedback collection, event registrations, and historical attendance tracking synced directly into core contact timelines.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 stroke-[2]" />,
      title: "Executive Reporting Dashboards",
      description:
        "Consolidate complex organizational metrics into clean, high-visibility operational dashboards that provide leadership with reliable real-time tracking.",
    },
    {
      icon: <Shuffle className="w-5 h-5 stroke-[2]" />,
      title: "Process-Focused Migrations",
      description:
        "Execute smooth external data transformations and historical record imports, mapping properties completely tailored to how your teams actively operate.",
    },
  ];

  return (
    <section id="features" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>PLATFORM SOLUTIONS</span>
          <h2 className={s.heading}>Core Capabilities</h2>
          <p className={s.subtext}>
            Tailored technical deployments built to transition disorganized
            portals into scalable operational engines.
          </p>
        </div>

        <div className={s.grid}>
          {capabilities.map((item, index) => (
            <div key={index} className={s.card}>
              <div className={s.cardContent}>
                <div className={s.iconWrapper}>{item.icon}</div>
                <h3 className={s.cardTitle}>{item.title}</h3>
                <p className={s.cardDesc}>{item.description}</p>
              </div>
              <div className={s.baselineFlourish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
