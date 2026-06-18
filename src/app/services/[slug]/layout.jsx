import CaseStudiesSection from "@/components/sections/CaseStudies";
import FaqSection from "@/components/sections/FAQ";
import UnifiedFormSection from "@/components/sections/UnifiedFormSection";

export default function ServiceLayout({ children }) {
  return (
    <>
      {children}
      <CaseStudiesSection />
      <FaqSection />
      <UnifiedFormSection />
    </>
  );
}
