"use client";

import { packagesOverviewStyles as s } from "@/app/hubspot/styles/packagesOverview";
import { ArrowRight, Layers, ShieldCheck, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function HubSpotPackagesOverview() {
  const packages = [
    {
      slug: "starter",
      badge: "CRM Foundation",
      title: "Starter Package",
      tagline:
        "Build a strong HubSpot foundation with an organized CRM, clean data, and basic automation[cite: 30].",
      bestFor:
        "Small businesses and nonprofits that need a structured CRM and basic automation[cite: 30].",
      icon: <Layers className="w-5 h-5 text-[#FF7A59]" />,
      isPopular: false,
    },
    {
      slug: "growth",
      badge: "Operational Scaling",
      title: "Growth Package",
      tagline:
        "Expand your HubSpot capabilities with advanced automation, lead management, and custom reporting metrics[cite: 30].",
      bestFor:
        "Organizations looking to scale marketing, automated pipelines, or sales team reporting tracking layouts[cite: 30].",
      icon: <TrendingUp className="w-5 h-5 text-[#FF7A59]" />,
      isPopular: true,
    },
    {
      slug: "custom",
      badge: "Enterprise Architecture",
      title: "Custom Package",
      tagline:
        "Design a fully customized HubSpot solution tailored uniquely to your complex operational process models[cite: 30].",
      bestFor:
        "Organizations needing advanced custom objects setup, multi-system migrations, or long-term alignment consulting[cite: 30].",
      icon: <ShieldCheck className="w-5 h-5 text-[#FF7A59]" />,
      isPopular: false,
    },
  ];

  return (
    <section id="packages" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>SERVICE SOLUTIONS</span>
          <h2 className={s.heading}>Flexible Engagement Packages</h2>
          <p className={s.subtext}>
            Explore transparent configuration structures built to transform
            disorganized databases into automated engines tailored exactly to
            your staff workflow[cite: 30].
          </p>
        </div>

        <div className={s.grid}>
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className={`${s.card} ${pkg.isPopular ? s.cardActive : ""}`}
            >
              {pkg.isPopular && (
                <div className={s.popularBadge}>Most Popular</div>
              )}

              <div className="w-full">
                <div className={s.cardHeader}>
                  <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] border border-[#FEDDCC] flex items-center justify-center">
                    {pkg.icon}
                  </div>
                  <div className="space-y-1">
                    <span className={s.packageBadge}>{pkg.badge}</span>
                    <h3 className={s.packageTitle}>{pkg.title}</h3>
                  </div>
                </div>

                <p className={s.packageTagline}>{pkg.tagline}</p>
                <div className={s.divider} />

                <div className={s.metaRow}>
                  <span className={s.metaLabel}>Ideal For</span>
                  <p className={s.metaValue}>{pkg.bestFor}</p>
                </div>
              </div>

              <Link
                href={`/hubspot/packages/${pkg.slug}`}
                className={`${s.actionBtn} ${pkg.isPopular ? s.actionBtnActive : s.actionBtnNormal} no-underline`}
              >
                Explore Scope & Deliverables
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
