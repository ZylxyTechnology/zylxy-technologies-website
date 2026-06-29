import ConsultationForm from "@/app/hubspot/components/forms/consultationForm";
import HubSpotNavbar from "@/app/hubspot/components/layout/HubSpot-Navbar";
import HubSpotFooter from "@/app/hubspot/components/layout/Hubspot-Footer";
import WhyMe from "@/app/hubspot/components/sections/HubSpot-WhyMe";
import FAQ from "@/app/hubspot/components/sections/Hubspot-faq";

export default function PackagesLayout({ children }) {
  return (
    <div className="w-full bg-[#FFF8F5] min-h-screen font-sans antialiased flex flex-col">
      <HubSpotNavbar />
      <div className="flex-grow">{children}</div>
      <WhyMe />
      <FAQ />
      <ConsultationForm />
      <HubSpotFooter />
    </div>
  );
}
