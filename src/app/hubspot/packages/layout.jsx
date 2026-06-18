import WhyMe from "@/app/hubspot/sections/HubSpot-WhyMe";
import FAQ from "@/app/hubspot/sections/Hubspot-faq";
import HubSpotNavbar from "@/app/hubspot/sections/layout/HubSpot-Navbar";
import HubSpotFooter from "@/app/hubspot/sections/layout/Hubspot-Footer";
import UnifiedFormSection from "@/components/sections/UnifiedFormSection";

export default function PackagesLayout({ children }) {
  return (
    <div className="w-full bg-[#FFF8F5] min-h-screen font-sans antialiased flex flex-col">
      <HubSpotNavbar />
      <div className="flex-grow">{children}</div>
      <WhyMe />
      <FAQ />
      <UnifiedFormSection />
      <HubSpotFooter />
    </div>
  );
}
