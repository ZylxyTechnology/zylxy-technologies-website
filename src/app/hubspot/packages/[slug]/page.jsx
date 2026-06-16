import { packagesData } from "@/app/hubspot/packages/data/packageData";
import HubSpotFooter from "@/app/hubspot/sections/layout/Hubspot-Footer";
import HubSpotNavbar from "@/app/hubspot/sections/layout/HubSpot-Navbar";
import { packageDetailStyles as s } from "@/app/hubspot/styles/packageDetail";
import {
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function PackagePage({ params }) {
  // Gracefully resolve the params object promise for modern Next environments
  const { slug } = await params;
  const packageDetail = packagesData[slug.toLowerCase()];

  // Throw 404 block state routing if segment string parameters fail match checks
  if (!packageDetail) {
    notFound();
  }

  return (
    <main className={s.main}>
      <HubSpotNavbar />

      {/* Navigation Return Hook */}
      <div className={s.backLinkWrapper}>
        <Link href="/hubspot" className={s.backLink}>
          <ChevronLeft className={s.backArrow} />
          Back to Hub Overview
        </Link>
      </div>

      {/* Structural Data Layout Column Wrapper */}
      <div className={s.contentGrid}>
        {/* Deliverables Scope Execution Frame */}
        <div className={s.leftColumn}>
          <div className={s.headerBlock}>
            <span className={s.packageBadge}>{packageDetail.badge}</span>
            <h1 className={s.mainTitle}>{packageDetail.title}</h1>
            <p className={s.overviewText}>{packageDetail.tagline}</p>
          </div>

          <div className={s.deliverablesCard}>
            <h3 className={s.cardHeading}>Included Deliverables & Scope</h3>
            <div className={s.deliverablesList}>
              {packageDetail.deliverables.map((item, index) => (
                <div key={index} className={s.deliverableRow}>
                  <CheckCircle2 className={s.checkIcon} />
                  <span className={s.deliverableText}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dynamic Context Meta Sidebar Target Block */}
        <div className={s.rightColumn}>
          <div className={s.stickyCard}>
            <div className={s.metaGroup}>
              <span className={s.metaLabel}>Ideal For</span>
              <p className={s.metaValue}>{packageDetail.idealFor}</p>
            </div>

            <div className={s.divider} />

            <div className={s.specGrid}>
              <div className={s.specBox}>
                <span className={s.specHeader}>
                  <Clock className={s.specIcon} />
                  Timeline
                </span>
                <span className={s.specText}>
                  {slug.toLowerCase() === "starter"
                    ? "1-2 Weeks"
                    : slug.toLowerCase() === "growth"
                      ? "3-4 Weeks"
                      : "Custom Scope"}
                </span>
              </div>

              <div className={s.specBox}>
                <span className={s.specHeader}>
                  <Shield className={s.specIcon} />
                  Engagement
                </span>
                <span className={s.specText}>
                  {slug.toLowerCase() === "custom"
                    ? "Support Retainer"
                    : "Fixed-Scope"}
                </span>
              </div>
            </div>

            <div className={s.divider} />

            <button className={s.ctaButton}>
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className={s.infoNotice}>
            <p className={s.infoNoticeText}>
              Need to modify or customize these specific operational outputs? We
              chart data architecture structures unique to your core operational
              targets during your discovery assessment lifecycle call.
            </p>
          </div>
        </div>
      </div>

      <HubSpotFooter />
    </main>
  );
}
