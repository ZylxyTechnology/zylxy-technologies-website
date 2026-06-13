import CaseStudiesSection from "@/components/sections/CaseStudies";
import FaqSection from "@/components/sections/FAQ";
import LeadGenSection from "@/components/sections/LeadGen";

export default function ServiceLayout({ children }) {
  return (
    <>
      {children}
      <CaseStudiesSection />
      <FaqSection />
      <LeadGenSection />
    </>
  );
}
