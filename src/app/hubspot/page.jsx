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
import { MotionReveal } from "@/components/motion/MotionReveal";
import NoiseReveal from "@/components/ui/NoiseReveal";

export default function HubSpotConsultantPage() {
  return (
    <NoiseReveal>
      <div className="relative w-full min-h-screen bg-white">
        <HubSpotNavbar />
        <main className="w-full overflow-x-clip selection:bg-[#FF7A59]/20">
          <Hero />

          <MotionReveal direction="up" delay={0.1}>
            <HubSpotStatsBar />
          </MotionReveal>

          <MotionReveal direction="fade" delay={0.1}>
            <HubSpotIntroFeature />
          </MotionReveal>

          <MotionReveal direction="up">
            <HubSpotFeaturedProjects />
          </MotionReveal>

          <MotionReveal direction="fade">
            <HubSpotPackagesOverview />
          </MotionReveal>

          <MotionReveal direction="fade">
            <WhyMe />
          </MotionReveal>

          <MotionReveal direction="fade">
            <Testimonials />
          </MotionReveal>

          <MotionReveal direction="fade">
            <FAQ />
          </MotionReveal>

          <MotionReveal direction="up" delay={0.2}>
            <ConsultationForm />
          </MotionReveal>

          <HubspotFooter />
        </main>
      </div>
    </NoiseReveal>
  );
}
