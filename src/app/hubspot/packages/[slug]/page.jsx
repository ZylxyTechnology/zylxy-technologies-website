import Image from "next/image";
import { packagesData } from "@/app/hubspot/data/packages/packageData";
import { packageDetailStyles as s } from "@/app/hubspot/styles/packages/packageDetail";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  ChevronLeft,
  Clock,
  Eye,
  HelpCircle,
  Kanban,
  Shield,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return [
    { slug: "starter" },
    { slug: "growth" },
    { slug: "custom" },
    { slug: "flexible" },
  ];
}

export default async function PackagePage({ params }) {
  const { slug } = await params;
  const packageDetail = packagesData[slug.toLowerCase()];

  if (!packageDetail) {
    notFound();
  }

  return (
    <div className="w-full">
      <div className={s.backLinkWrapper}>
        <Link href="/hubspot" className={s.backLink}>
          <ChevronLeft className={s.backArrow} />
          Back to Hub Overview
        </Link>
      </div>

      <div className={s.contentGrid}>
        <div className={s.leftColumn}>
          <div className={s.headerBlock}>
            <span className={s.packageBadge}>{packageDetail.badge}</span>
            <h1 className={s.mainTitle}>{packageDetail.title}</h1>
            <p className={s.overviewText}>{packageDetail.tagline}</p>
          </div>

          <div className={s.imageCard}>
            <div className={s.imageHeaderRow}>
              <h4 className={s.imageCardTitle}>
                <Eye className="w-4 h-4 text-[#FF7A59]" />
                Architecture Framework Blueprint
              </h4>
              <span className={s.imageCardBadge}>Live Portal Output</span>
            </div>
            <div className={s.imageFrame}>
              <Image
                src={packageDetail.imagePath}
                alt={`${packageDetail.title} Environment Preview`}
                className={s.imageElement}
                width={800}
                height={500}
                priority
              />
            </div>
          </div>

          {packageDetail.isFlexibleEngagement ? (
            <div className="flex flex-col gap-6 w-full">
              {packageDetail.subModels.map((model, index) => (
                <div
                  key={index}
                  className="bg-white border border-[#F0E8E3] rounded-2xl p-6 shadow-xs text-left space-y-2"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#FFF0EB] flex items-center justify-center text-[#FF7A59]">
                      {index === 0 ? (
                        <Activity className="w-4 h-4" />
                      ) : index === 1 ? (
                        <Kanban className="w-4 h-4" />
                      ) : (
                        <HelpCircle className="w-4 h-4" />
                      )}
                    </div>
                    <h3 className="font-lexend font-bold text-lg text-[#1B1F3A]">
                      {model.name}
                    </h3>
                  </div>
                  <p className="font-inter text-sm text-[#677489] leading-relaxed pl-11">
                    {model.details}
                  </p>
                </div>
              ))}
            </div>
          ) : (
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
          )}
        </div>

        <div className={s.rightColumn}>
          <div className={s.stickyCard}>
            <div className={s.metaGroup}>
              <span className={s.metaLabel}>Ideal For</span>
              <p className={s.metaValue}>
                {packageDetail.bestFor || packageDetail.idealFor}
              </p>
            </div>

            <div className={s.divider} />

            <div className={s.specGrid}>
              <div className={s.specBox}>
                <span className={s.specHeader}>
                  <Clock className={s.specIcon} />
                  Timeline
                </span>
                <span className={s.specText}>
                  {slug.toLowerCase() === "flexible"
                    ? "Variable"
                    : "Fixed Scope"}
                </span>
              </div>

              <div className={s.specBox}>
                <span className={s.specHeader}>
                  <Shield className={s.specIcon} />
                  Engagement
                </span>
                <span className={s.specText}>
                  {slug.toLowerCase() === "flexible"
                    ? "Agile Framework"
                    : "Milestone Built"}
                </span>
              </div>
            </div>

            <div className={s.divider} />

            <Link
              href="/hubspot#consultation"
              className={`${s.ctaButton} no-underline`}
            >
              Book Free Consultation
              <ArrowRight className="w-4 h-4" />
            </Link>
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
    </div>
  );
}
