import HubSpotIntroFeature from "@/app/hubspot/sections/features/HubSpot-IntroFeature";
import KeyFeatures from "@/app/hubspot/sections/features/Hubspot-keyFeatures";
import FAQ from "@/app/hubspot/sections/Hubspot-faq";
import Hero from "@/app/hubspot/sections/Hubspot-Hero";
import Results from "@/app/hubspot/sections/Hubspot-Results";
import HubSpotStatsBar from "@/app/hubspot/sections/HubSpot-StatsBar";
import Testimonials from "@/app/hubspot/sections/Hubspot-Testimonials";
import WhyMe from "@/app/hubspot/sections/HubSpot-WhyMe";
import HowItWorks from "@/app/hubspot/sections/Hubspot-WorksDone";
import HubSpotFooter from "@/app/hubspot/sections/layout/Hubspot-Footer";
import HubSpotNavbar from "@/app/hubspot/sections/layout/HubSpot-Navbar";

export default function HubSpotConsultantPage() {
  return (
    <main className="w-full bg-white overflow-x-clip min-h-screen selection:bg-hs-orange/20">
      <HubSpotNavbar />
      <Hero />
      <HubSpotStatsBar />
      <HubSpotIntroFeature />
      <KeyFeatures />
      <WhyMe />
      <HowItWorks />
      <Results />
      <Testimonials />
      <FAQ />
      <HubSpotFooter />
    </main>
  );
}
