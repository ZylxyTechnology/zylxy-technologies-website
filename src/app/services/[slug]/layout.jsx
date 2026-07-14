import LeadForm from "@/components/forms/ZylxyLeadGenForm";
import CaseStudiesSection from "@/components/sections/CaseStudies";
import FaqSection from "@/components/sections/FAQ";
import { FormProvider } from "@/context/FormContext";
import { formRegistry } from "@/data/forms/formRegistry";

export default async function ServiceLayout({ children, params }) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug;

  const ContextualForm = formRegistry[slug] || LeadForm;

  return (
    <FormProvider>
      {children}
      <CaseStudiesSection />
      <FaqSection />
      <ContextualForm />
    </FormProvider>
  );
}
