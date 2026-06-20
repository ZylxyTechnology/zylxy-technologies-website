"use client";

import { navbarStyles } from "@/styles/navbar/navbar.dark";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#050e21] sticky top-0 z-50">
      <div className={navbarStyles.navContainer}>
        <div className={navbarStyles.innerWrapper}>
          <Link href="/" className={navbarStyles.logoSection}>
            <div className={navbarStyles.logoBox}>
              <Image
                src="/logos/ZylxyLogo.png"
                alt="Zylxy Logo"
                width={34}
                height={34}
                className={navbarStyles.logoImage}
                priority
              />
            </div>
            <div className={navbarStyles.textContainer}>
              <span className={navbarStyles.brandTitle}>Zylxy</span>
              <span className={navbarStyles.brandSubtitle}>Technologies</span>
            </div>
          </Link>

          <div className={navbarStyles.menuList}>
            <Link href="/" className={navbarStyles.menuButton}>
              Home
            </Link>

            <Link href="/#services-section" className={navbarStyles.menuButton}>
              Services
            </Link>

            <div className="relative group">
              <button
                className={`${navbarStyles.menuButton} flex items-center gap-1.5`}
              >
                Careers
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-180"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[280px] bg-[#0b1635] rounded-lg shadow-xl opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-300 ease-out border border-white/10 overflow-hidden">
                <div className="py-2">
                  <Link
                    href="/careers/explore-opportunities"
                    className="block px-5 py-3 hover:bg-blue-600/10 transition-colors"
                  >
                    <span className="block text-sm font-bold text-white">
                      Explore Opportunities
                    </span>
                    <span className="block text-xs text-white/50 mt-1">
                      For Students & Candidates
                    </span>
                  </Link>
                  <div className="h-px w-full bg-white/5" />
                  <Link
                    href="/careers/talent-acquisition"
                    className="block px-5 py-3 hover:bg-blue-600/10 transition-colors"
                  >
                    <span className="block text-sm font-bold text-white">
                      Talent Acquisition Solutions
                    </span>
                    <span className="block text-xs text-white/50 mt-1">
                      For Recruiters & Employers
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/#consultation" className={navbarStyles.menuButton}>
              Contact
            </Link>
          </div>
          <div className={navbarStyles.rightActionsGroup}>
            <Link href="/hubspot" className={navbarStyles.hubspotPill}>
              <span className={navbarStyles.hubspotPulseDot} />
              HubSpot CRM
            </Link>
            <Link href="/#consultation" className={navbarStyles.primaryBtn}>
              Free Consultation
            </Link>
          </div>

          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden bg-[#050e21] border-white/5 px-8 flex flex-col overflow-hidden transition-all duration-300 ease-in-out ${isMobileMenuOpen ? "max-h-[500px] py-4 border-t opacity-100" : "max-h-0 py-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-4">
          <Link
            href="/"
            className="text-sm font-medium text-white/80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#services-section"
            className="text-sm font-medium text-white/80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            href="/hubspot"
            className={navbarStyles.hubspotMobilePill}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span>HubSpot CRM & Automation</span>
            <span className="w-2 h-2 rounded-full bg-[#FF7A59] shadow-[0_0_6px_#FF7A59]" />
          </Link>

          <div className="flex flex-col gap-2.5">
            <span className="text-sm font-bold text-white">Careers</span>
            <Link
              href="/careers/explore-opportunities"
              className="text-xs text-white/60 pl-3 border-l border-blue-500 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore Opportunities
            </Link>
            <Link
              href="/careers/talent-acquisition"
              className="text-xs text-white/60 pl-3 border-l border-blue-500 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Talent Acquisition Solutions
            </Link>
          </div>
          <Link
            href="/#consultation"
            className="text-sm font-medium text-white/80"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <Link
            href="/#consultation"
            className={`${navbarStyles.primaryBtn} text-center w-full block mt-2`}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </nav>
  );
}
