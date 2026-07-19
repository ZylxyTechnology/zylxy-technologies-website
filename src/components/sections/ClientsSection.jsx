"use client";

import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { clientsDataConfig, trustedBrands } from "@/data/home/trustedBrands";
import { clientsStyles } from "@/styles/sections/clients";

export default function ClientsSection() {
  const scrollItems = [
    ...trustedBrands,
    ...trustedBrands,
    ...trustedBrands,
  ];

  return (
    <Section className={clientsStyles.section}>
      <MotionReveal direction="up">
        <Container className={clientsStyles.container}>
          <div className={clientsStyles.pillWrapper}>
            <div className={clientsStyles.pillLine} />
            <span className={clientsStyles.pill}>{clientsDataConfig.pillText}</span>
          </div>
        </Container>

        <div className={`${clientsStyles.marqueeWrapper} group/marquee`}>
          <div className={clientsStyles.marqueeTrack}>
            {scrollItems.map((brand, idx) => (
              <div key={`${brand.id}-${idx}`} className={clientsStyles.itemWrapper}>
                <span className={clientsStyles.clientText}>{brand.name}</span>
                <div className={clientsStyles.separatorDot} />
              </div>
            ))}
          </div>
          <div className={clientsStyles.marqueeTrack} aria-hidden="true">
            {scrollItems.map((brand, idx) => (
              <div key={`dup-${brand.id}-${idx}`} className={clientsStyles.itemWrapper}>
                <span className={clientsStyles.clientText}>{brand.name}</span>
                <div className={clientsStyles.separatorDot} />
              </div>
            ))}
          </div>
        </div>
      </MotionReveal>
    </Section>
  );
}
