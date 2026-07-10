import LeadForm from "@/components/forms/LeadForm";
import ClientsSection from "@/components/sections/ClientsSection";
import FaqSection from "@/components/sections/FAQ";
import Hero from "@/components/sections/Hero";
import LeadershipSection from "@/components/sections/LeadershipSection";
import TestimonialsSection from "@/components/sections/Testimonials";
import ServicesPage from "./services/page";

export default function Home() {
  return (
    <main>
      <Hero />
      <ClientsSection />
      <ServicesPage />
      <LeadershipSection />
      <TestimonialsSection />
      <FaqSection />
      <LeadForm />
    </main>
  );
}
