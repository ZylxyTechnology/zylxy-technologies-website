import HubSpotFeaturedProjects from "@/app/hubspot/components/features/HubSpot-FeaturedProjects";
import HubSpotIntroFeature from "@/app/hubspot/components/features/HubSpot-IntroFeature";
import ConsultationForm from "@/app/hubspot/components/forms/consultationForm";
import HubSpotNavbar from "@/app/hubspot/components/layout/HubSpot-Navbar";
import HubspotFooter from "@/app/hubspot/components/layout/Hubspot-Footer";
import HubSpotStatsBar from "@/app/hubspot/components/sections/HubSpot-StatsBar";
import WhyMe from "@/app/hubspot/components/sections/HubSpot-WhyMe";
import Hero from "@/app/hubspot/components/sections/Hubspot-Hero";
import Testimonials from "@/app/hubspot/components/sections/Hubspot-Testimonials";
import FAQ from "@/app/hubspot/components/sections/Hubspot-faq";
import HubSpotPackagesOverview from "@/app/hubspot/packages/HubSpot-PackagesOverview";
import NoiseReveal from "@/components/ui/NoiseReveal";

export default function HubSpotConsultantPage() {
  return (
    <NoiseReveal>
      <main className="w-full bg-white overflow-x-clip min-h-screen selection:bg-[#FF7A59]/20">
        <HubSpotNavbar />
        <Hero />
        <HubSpotStatsBar />
        <HubSpotIntroFeature />
        <HubSpotFeaturedProjects />
        <HubSpotPackagesOverview />
        <WhyMe />
        <Testimonials />
        <FAQ />
        <ConsultationForm />
        <HubspotFooter />
      </main>
    </NoiseReveal>
  );
}
