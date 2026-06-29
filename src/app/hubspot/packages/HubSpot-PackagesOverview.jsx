"use client";

import { packagesData } from "@/app/hubspot/data/packages/packageData";
import { packagesOverviewStyles as s } from "@/app/hubspot/styles/packages/packagesOverview";
import {
  ArrowRight,
  Layers,
  ShieldCheck,
  Sliders,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";

export default function HubSpotPackagesOverview() {
  const packageIcons = {
    starter: <Layers className="w-4 h-4" />,
    growth: <TrendingUp className="w-4 h-4" />,
    custom: <ShieldCheck className="w-4 h-4" />,
    flexible: <Sliders className="w-4 h-4" />,
  };

  return (
    <section id="packages" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>SERVICE SOLUTIONS</span>
          <h2 className={s.heading}>Flexible Engagement Packages</h2>
          <p className={s.subtext}>
            Explore transparent configuration structures built to transform
            disorganized databases into automated engines tailored exactly to
            your staff workflow.
          </p>
        </div>

        <div className={s.grid}>
          {Object.values(packagesData).map((pkg) => {
            const isPopular = pkg.isPopular;
            return (
              <div
                key={pkg.slug}
                className={`${s.card} ${isPopular ? s.cardActive : ""}`}
              >
                {isPopular && (
                  <div className={s.popularBadge}>Most Popular</div>
                )}

                <div className="w-full flex flex-col">
                  <div className={s.cardHeader}>
                    <div
                      className={`${s.iconBox} ${isPopular ? s.iconBoxActive : ""}`}
                    >
                      {packageIcons[pkg.slug]}
                    </div>
                    <div className={s.badgeWrapper}>
                      <span className={s.packageBadge}>{pkg.badge}</span>
                      <h3 className={s.cardTitle}>{pkg.title}</h3>
                    </div>
                  </div>

                  <p className={s.tagline}>{pkg.tagline}</p>

                  <div className={s.divider} />

                  <div className={s.metaRow}>
                    <span className={s.metaLabel}>Ideal For</span>
                    <p className={s.bestFor}>{pkg.bestFor}</p>
                  </div>
                </div>

                <Link
                  href={`/hubspot/packages/${pkg.slug}`}
                  className={`${s.actionBtn} ${isPopular ? s.actionBtnActive : s.actionBtnNormal}`}
                >
                  Explore Scope
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
