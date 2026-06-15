export const metadata = {
  title: "HubSpot Consultant | CRM & Automation Specialist",
  description:
    "Premium enterprise CRM optimization and automated workflow management.",
};

export default function HubSpotLayout({ children }) {
  return (
    <div className="min-h-screen bg-navy text-white antialiased selection:bg-hs-orange/30">
      {/* EARLY STAGE PLACEHOLDER WRAPPER:
         Future layout hooks, page tab panels, or localized route states embed securely here later.
      */}
      <div className="relative flex flex-col w-full min-h-screen">
        {children}
      </div>
    </div>
  );
}
