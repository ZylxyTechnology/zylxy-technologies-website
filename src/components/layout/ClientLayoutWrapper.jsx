"use client";

import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FooterSection from "@/components/layout/FooterSection";
import Navbar from "@/components/layout/Navbar";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ReactLenis } from "lenis/react";
import { usePathname } from "next/navigation";

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const prefersReducedMotion = useReducedMotion();
  const isHubSpotRoute = pathname?.startsWith("/hubspot");

  return (
    // 'root' prop tells Lenis to take over the native window scroll
    <ReactLenis
      root
      options={{
        lerp: prefersReducedMotion ? 1 : 0.08,
        duration: prefersReducedMotion ? 0 : 1.5,
        smoothWheel: !prefersReducedMotion,
      }}
    >
      {!isHubSpotRoute && <AnnouncementBar />}
      {!isHubSpotRoute && <Navbar />}

      {/* AnimatePresence allows components to animate out before unmounting */}
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname} // Changing the key triggers the exit/initial animations
          initial={
            prefersReducedMotion
              ? false
              : { opacity: 0, y: 15, filter: "blur(4px)" }
          }
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={
            prefersReducedMotion
              ? { opacity: 1, y: 0, filter: "blur(0px)" }
              : { opacity: 0, y: -15, filter: "blur(4px)" }
          }
          transition={{
            duration: prefersReducedMotion ? 0 : 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex-grow flex flex-col w-full"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      {!isHubSpotRoute && <FooterSection />}
    </ReactLenis>
  );
}
