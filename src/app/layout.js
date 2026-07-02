"use client";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FooterSection from "@/components/layout/FooterSection";
import Navbar from "@/components/layout/Navbar";
import "@/styles/animations.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { usePathname } from "next/navigation";
import { TalentEcosystemProvider } from "./context/TalentEcosystemContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-syne",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const pathname = usePathname();

  // Checks if the user is currently inside any sub-route of your HubSpot portal space
  const isHubSpotRoute = pathname?.startsWith("/hubspot");

  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#050e21]">
        <TalentEcosystemProvider>
          {/* Conditionally suppress mainland global frames entirely on HubSpot views */}
          {!isHubSpotRoute && <AnnouncementBar />}
          {!isHubSpotRoute && <Navbar />}

          <div className="grow w-full">{children}</div>
          {!isHubSpotRoute && <FooterSection />}
        </TalentEcosystemProvider>
      </body>
    </html>
  );
}
