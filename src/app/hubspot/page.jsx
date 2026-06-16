import HubSpotPackagesOverview from "@/app/hubspot/sections/HubSpot-PackagesOverview";
import HubSpotStatsBar from "@/app/hubspot/sections/HubSpot-StatsBar";
import WhyMe from "@/app/hubspot/sections/HubSpot-WhyMe";
import Hero from "@/app/hubspot/sections/Hubspot-Hero";
import Testimonials from "@/app/hubspot/sections/Hubspot-Testimonials";
import FAQ from "@/app/hubspot/sections/Hubspot-faq";
import HubSpotFeaturedProjects from "@/app/hubspot/sections/features/HubSpot-FeaturedProjects";
import HubSpotIntroFeature from "@/app/hubspot/sections/features/HubSpot-IntroFeature";
import HubSpotNavbar from "@/app/hubspot/sections/layout/HubSpot-Navbar";
import HubspotFooter from "@/app/hubspot/sections/layout/Hubspot-Footer";

export default function HubSpotConsultantPage() {
  return (
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
      <HubspotFooter />
    </main>
  );
}
