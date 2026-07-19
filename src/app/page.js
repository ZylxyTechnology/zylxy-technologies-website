import LeadForm from "@/components/forms/ZylxyLeadGenForm.jsx";
import ClientsSection from "@/components/sections/ClientsSection";
import FaqSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LeadershipSection from "@/components/sections/LeadershipSection";
import TestimonialsSection from "@/components/sections/Testimonials";
import { FormProvider } from "@/context/FormContext";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <ClientsSection />
      <FormProvider>
        <ServicesPage />
      </FormProvider>
      <LeadershipSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadForm />
    </div>
  );
}
