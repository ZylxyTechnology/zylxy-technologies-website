"use client";

import { packagesData } from "@/app/hubspot/data/packageData";
import { packagesOverviewStyles as s } from "@/app/hubspot/styles/packagesOverview";
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
    starter: <Layers className="w-5 h-5 text-[#FF7A59]" />,
    growth: <TrendingUp className="w-5 h-5 text-[#FF7A59]" />,
    custom: <ShieldCheck className="w-5 h-5 text-[#FF7A59]" />,
    flexible: <Sliders className="w-5 h-5 text-[#FF7A59]" />,
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
            your staff workflow[cite: 21].
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full items-stretch">
          {Object.values(packagesData).map((pkg) => (
            <div
              key={pkg.slug}
              className={`${s.card} ${pkg.isPopular ? s.cardActive : ""} flex flex-col justify-between`}
            >
              {pkg.isPopular && (
                <div className={s.popularBadge}>Most Popular</div>
              )}

              <div className="w-full">
                <div className={s.cardHeader}>
                  <div className="w-10 h-10 rounded-lg bg-[#FFF0EB] border border-[#FEDDCC] flex items-center justify-center">
                    {packageIcons[pkg.slug]}
                  </div>
                  <div className="space-y-1">
                    <span className={s.packageBadge}>{pkg.badge}</span>
                    <h3 className="font-lexend font-bold text-xl text-[#1B1F3A]">
                      {pkg.title}
                    </h3>
                  </div>
                </div>

                <p className="font-inter text-xs text-[#677489] leading-relaxed font-medium min-h-[60px]">
                  {pkg.tagline}
                </p>
                <div className={s.divider} />

                <div className={s.metaRow}>
                  <span className={s.metaLabel}>Ideal For</span>
                  <p className="font-inter text-xs text-[#2F3E4E] font-medium leading-relaxed">
                    {pkg.bestFor}
                  </p>
                </div>
              </div>

              <Link
                href={`/hubspot/packages/${pkg.slug}`}
                className={`${s.actionBtn} ${pkg.isPopular ? s.actionBtnActive : s.actionBtnNormal} no-underline mt-4`}
              >
                Explore Scope
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
