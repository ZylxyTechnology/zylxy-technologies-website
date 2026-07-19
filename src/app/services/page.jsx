"use client";

import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { servicesData } from "@/data/services/servicesData";
import { useState } from "react";
import { ServicesFilter } from "@/components/services/ServicesFilter";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { MotionReveal } from "@/components/motion/MotionReveal";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const { header, categories, services } = servicesData;

  const getCategoryCount = (categoryId) => {
    if (categoryId === "All") return services.length;
    return services.filter((service) => service.category === categoryId).length;
  };

  return (
    <>
      <Section className="min-h-screen bg-background">
        <Container>
          <div className="flex flex-col items-start justify-start mb-16 gap-8 w-full">
            <MotionReveal direction="up" className="w-full max-w-3xl text-left">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-0.5 bg-primary rounded-sm" />
                <span className="text-xs font-bold font-inter text-primary tracking-widest uppercase">
                  {header.pillText}
                </span>
              </div>

              <h1 className="font-syne font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground tracking-tight leading-[1.1] mb-6">
                {activeTab === "All"
                  ? header.mainHeading
                  : categories.find((c) => c.id === activeTab)?.label}
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground font-inter leading-relaxed max-w-2xl">
                {header.subHeading}
              </p>
            </MotionReveal>

            <div className="w-full border-b border-white/5 pb-8">
              <ServicesFilter 
                categories={categories}
                activeTab={activeTab}
                onTabChange={setActiveTab}
                getCategoryCount={getCategoryCount}
              />
            </div>
          </div>

          <div className="w-full mb-24">
            <ServicesGrid 
              activeTab={activeTab}
              categories={categories}
              services={services}
            />
          </div>

          <MotionReveal direction="up" className="w-full max-w-4xl mx-auto text-center py-24 border-t border-white/10 mt-12">
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-foreground mb-6">
              Ready to transform your enterprise?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Partner with Zylxy Technologies to build, scale, and optimize your digital products and internal operations.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold tracking-widest uppercase text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)]"
            >
              Book a Free Consultation
            </a>
          </MotionReveal>

        </Container>
      </Section>
    </>
  );
}
