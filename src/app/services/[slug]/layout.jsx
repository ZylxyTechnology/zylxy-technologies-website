import LeadForm from "@/components/forms/LeadForm";
import CaseStudiesSection from "@/components/sections/CaseStudies";
import FaqSection from "@/components/sections/FAQ";

export default function ServiceLayout({ children }) {
  return (
    <>
      {children}
      <CaseStudiesSection />
      <FaqSection />
      <LeadForm />
    </>
  );
}
