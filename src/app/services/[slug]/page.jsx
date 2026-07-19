"use client";

import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionItem } from "@/components/motion/MotionItem";
import { MotionGrid } from "@/components/motion/MotionGrid";
import { servicesData } from "@/data/services/servicesData";
import { servicesDetailsStyles as s } from "@/styles/services/servicesDetails";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { use } from "react";

export default function ServiceDetailPage({ params }) {
  const resolvedParams = use(params);
  const slug = resolvedParams.slug;

  const service = servicesData.services.find(
    (s) => (s.id || s.title.toLowerCase().replace(/[^a-z0-9]+/g, "-")) === slug,
  );

  if (!service) {
    notFound();
  }

  const handleConsultationScroll = () => {
    const leadContainer =
      document.querySelector("form") ||
      document.getElementById("WebLeadGen") ||
      document.getElementById("MobileLeadGen");
    if (leadContainer) {
      leadContainer.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className={s.pageWrapper}>
      <div className={s.bgGrid} />
      <div className={s.radialGlow} />

      <MotionContainer className={s.container}>
        <MotionItem direction="up" className={s.topHeader}>
          <div className={s.titleContainer}>
            <div className={s.pillWrapper}>
              <div className={s.pillBar} />
              <span className={s.pillText}>Service Architecture Profile</span>
            </div>
            <h1 className={s.mainTitle}>{service.title}</h1>
          </div>
          <Link href="/#services-section" className={s.backLink}>
            <span className={s.backArrow}>←</span> Back to System Hub
          </Link>
        </MotionItem>

        <div className={s.shellCard}>
          <MotionGrid className={s.mainGrid}>
            <MotionItem direction="left" className={s.mediaColumn}>
              <img
                src={service.image || service.fallbackImage}
                  alt={service.title}
                  className={s.mediaImage}
                />
                <div className={s.mediaOverlay} />
                <div className={s.metaBadgeContainerMobile}>
                  <div className={s.metaBadge}>
                    <span className={s.metaBadgeDot} />
                    Operational Core Ecosystem
                  </div>
                </div>
              </MotionItem>

              <MotionItem direction="up" className={s.contentColumn}>
                <div>
                  <div className={s.metaBadgeContainerWeb}>
                    <span className={s.metaBadgeDot} />
                    Operational Core Ecosystem
                  </div>

                  <div className={s.tagsContainer}>
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={s.tagItem}
                        style={{
                          color: service.accent || "#FF7A59",
                          backgroundColor:
                            service.accentBg || "rgba(250, 122, 89, 0.05)",
                          borderColor: `${service.accent || "#FF7A59"}22`,
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className={s.descriptionText}>
                    {service.detailDesc || service.desc}
                  </p>

                  <div className={s.sectionBlock}>
                    <div className={s.blockHeader}>
                      <div className={s.blockDot} />
                      <h3 className={s.blockTitle}>
                        Core Architecture Inclusions
                      </h3>
                    </div>
                    <div className={s.featuresGrid}>
                      {service.features?.map((feature) => (
                        <div key={feature} className={s.featureCard}>
                          <CheckCircle2 className={s.featureIcon} />
                          <span className={s.featureText}>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className={s.processSection}>
                    <div className={s.blockHeader}>
                      <div className={s.blockDot} />
                      <h3 className={s.blockTitle}>
                        Deployment Delivery Process
                      </h3>
                    </div>
                    <div className={s.processStack}>
                      {service.process?.map((step, idx) => (
                        <div key={step} className={s.processItem}>
                          <div
                            className={s.processBadge}
                            style={{
                              color: service.accent || "#FF7A59",
                              backgroundColor:
                                service.accentBg || "rgba(250, 122, 89, 0.05)",
                              borderColor: `${service.accent || "#FF7A59"}33`,
                            }}
                          >
                            {idx + 1}
                          </div>
                          <div className={s.processText}>{step}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className={s.ctaBlock}>
                  <div className={s.ctaGlow} />
                  <div className={s.ctaTextGroup}>
                    <div className={s.ctaLabel}>
                      <Sparkles className={s.ctaSparkle} />
                      Accelerate Operations
                    </div>
                    <h4 className={s.ctaHeading}>
                      Ready to map out your infrastructure?
                    </h4>
                  </div>
                  <button
                    onClick={handleConsultationScroll}
                    className={s.ctaButton}
                  >
                    Book a Free Consultation
                    <ArrowRight className={s.ctaBlockIcon} />
                  </button>
                </div>
              </MotionItem>
            </MotionGrid>

            {service.projects && service.projects.length > 0 && (
              <MotionItem direction="up" className={s.showcaseWrapper}>
                <PortfolioShowcase projects={service.projects} />
              </MotionItem>
            )}
          </div>
        </MotionContainer>
      </div>
  );
}
