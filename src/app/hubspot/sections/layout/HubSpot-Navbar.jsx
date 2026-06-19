"use client";

import { navigationMenuLinks as nav } from "@/app/hubspot/data/navigation";
import { navbarStyles as s } from "@/app/hubspot/styles/navbar";
import {
  Award,
  Briefcase,
  CheckSquare,
  ChevronDown,
  ClipboardList,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Layers,
  LineChart,
  Menu,
  Rocket,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function HubSpotNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setActiveSubmenu(null);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const toggleSubmenu = (menuName) => {
    setActiveSubmenu(activeSubmenu === menuName ? null : menuName);
  };

  return (
    <nav className={s.nav}>
      <div className={s.container} ref={dropdownRef}>
        <Link href="/hubspot" className={s.logoLink}>
          <div className={s.logoIconWrapper}>
            <Image
              src="/logos/ZylxyLogo.png"
              alt="Zylxy Technologies Corporate Logo"
              width={22}
              height={24}
              className="object-contain select-none shrink-0 filter brightness-0 invert"
              priority
            />
            <div className={s.logoNodePill} />
          </div>
          <div className={s.textWrapper}>
            <span className={s.brandTitle}>HubSpot CRM</span>
            <span className={s.brandSubtitle}>CONSULTANT SPECIALIST</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className={s.menuList}>
          <div className={s.menuItemWrapper}>
            <Link
              href="/hubspot#why-me"
              className={`${s.menuButton} no-underline`}
            >
              About
            </Link>
          </div>

          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>
              Services <ChevronDown className={s.chevron} />
            </button>
            <div className={s.megaMenu}>
              <div className={s.megaLeftCol}>
                <h4 className={s.megaLeftTitle}>HubSpot Services</h4>
                <p className={s.megaLeftDesc}>
                  Explore structured configuration and consulting packages
                  designed to transform your operations.
                </p>
              </div>
              <div className={s.megaGrid}>
                <Link
                  href={nav.services[0].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.services[0].name}</h5>
                    <p className={s.megaCardDesc}>
                      Build a strong foundation with an organized CRM, clean
                      data, and basic automation.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.services[1].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.services[1].name}</h5>
                    <p className={s.megaCardDesc}>
                      Expand capabilities with advanced automation, lead
                      nurturing workflows, and pipeline customization.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.services[2].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.services[2].name}</h5>
                    <p className={s.megaCardDesc}>
                      Design advanced solutions with custom objects, custom
                      properties, and strategic process optimization.
                    </p>
                  </div>
                </Link>
                <Link
                  href="/hubspot/packages/flexible"
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Flexible Engagement Options
                    </h5>
                    <p className={s.megaCardDesc}>
                      Delivered via a one-time Health Check audit, a fixed-scope
                      Project-Based Implementation, or monthly Ongoing HubSpot
                      Support to best fit your organization.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>
              Industries <ChevronDown className={s.chevron} />
            </button>
            <div className={s.megaMenu}>
              <div className={s.megaLeftCol}>
                <h4 className={s.megaLeftTitle}>Industry Solutions</h4>
                <p className={s.megaLeftDesc}>
                  Tailored operational models deployed frameworks specific to
                  your primary impact dynamic.
                </p>
              </div>
              <div className={s.megaGrid}>
                <Link
                  href={nav.industries[0].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Heart className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      {nav.industries[0].name}
                    </h5>
                    <p className={s.megaCardDesc}>
                      Built to streamline donor workflows, grant pipelines, and
                      impact transparency metrics.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[1].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      {nav.industries[1].name}
                    </h5>
                    <p className={s.megaCardDesc}>
                      Strategic setups to automate high-touch manual admin tasks
                      and scale daily lead routing.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[2].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Users className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Workforce Development</h5>
                    <p className={s.megaCardDesc}>
                      Engineered tracking architectures for application queues,
                      job placements, and metrics.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[3].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Educational Organizations
                    </h5>
                    <p className={s.megaCardDesc}>
                      Custom structures for system registration, scheduling
                      automation, and cohort mapping.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[4].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Accelerators & Incubators
                    </h5>
                    <p className={s.megaCardDesc}>
                      Unified relational tracking across program applications,
                      venture rounds, and founders.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[5].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Community Organizations</h5>
                    <p className={s.megaCardDesc}>
                      Centralized communication engines built to optimize
                      localized outreach systems.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[6].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Membership-Based</h5>
                    <p className={s.megaCardDesc}>
                      Automated renewals, tiered benefits access management, and
                      contact subscription states.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.industries[7].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Professional Service Firms
                    </h5>
                    <p className={s.megaCardDesc}>
                      Refined consultation pipelines, clear deal stages, and
                      smart billing account integrations.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>
              Projects <ChevronDown className={s.chevron} />
            </button>
            <div className={s.megaMenu}>
              <div className={s.megaLeftCol}>
                <h4 className={s.megaLeftTitle}>Featured Solutions</h4>
                <p className={s.megaLeftDesc}>
                  Deep dive into actual deployments engineered across automation
                  channels and complex records.
                </p>
              </div>
              <div className={s.megaGrid}>
                <Link
                  href={nav.projects[0].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.projects[0].name}</h5>
                    <p className={s.megaCardDesc}>
                      Streamlined application and enrollment systems using
                      workflows and custom objects.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.projects[1].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.projects[1].name}</h5>
                    <p className={s.megaCardDesc}>
                      Built survey submission, automated follow-ups, and custom
                      visibility reporting.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.projects[2].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <ClipboardList className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.projects[2].name}</h5>
                    <p className={s.megaCardDesc}>
                      Created automated registration and attendance workflows to
                      reduce manual tracking.
                    </p>
                  </div>
                </Link>
                <Link
                  href={nav.projects[3].href}
                  className={`${s.megaCard} no-underline`}
                >
                  <div className={s.megaCardIcon}>
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>{nav.projects[3].name}</h5>
                    <p className={s.megaCardDesc}>
                      Real-time operational metric setups designed specifically
                      for leadership teams.
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Call to Action & Mobile Controls Group */}
        <div className="flex items-center gap-4 z-20">
          <div className="hidden md:flex">
            <Link
              href="/hubspot#consultation"
              className={`${s.primaryBtn} no-underline text-center`}
            >
              Book a Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex md:hidden flex-col justify-center items-center gap-1 w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none"
            aria-label="Toggle Mobile Navigation Controls Menu"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-[#1B1F3A]" />
            ) : (
              <Menu className="w-6 h-6 text-[#1B1F3A]" />
            )}
          </button>
        </div>

        {/* Clickable Responsive Mobile Dropdown Drawer Container */}
        {isOpen && (
          <div className="absolute top-20 left-0 right-0 bg-white border-b border-[#F0E8E3] shadow-xl p-6 z-50 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto md:hidden animate-[fadeIn_0.15s_ease-out]">
            <Link
              href="/hubspot#why-me"
              onClick={() => setIsOpen(false)}
              className="text-sm font-bold text-[#1B1F3A] hover:text-[#FF7A59] py-2.5 border-b border-[#F0E8E3] no-underline font-inter tracking-wide block"
            >
              About
            </Link>

            <div className="flex flex-col border-b border-[#F0E8E3]">
              <button
                onClick={() => toggleSubmenu("services")}
                className="w-full flex items-center justify-between text-sm font-bold text-[#1B1F3A] hover:text-[#FF7A59] py-2.5 bg-transparent border-none text-left font-inter tracking-wide"
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform duration-200 ${activeSubmenu === "services" ? "rotate-180" : ""}`}
                />
              </button>
              {activeSubmenu === "services" && (
                <div className="flex flex-col gap-3.5 pl-4 pt-2 pb-4 bg-[#FFF8F5]/60 rounded-lg mt-1 mb-2 animate-[fadeIn_0.2s_ease-out]">
                  {nav.services.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-semibold text-[#677489] hover:text-[#FF7A59] no-underline font-inter"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Link
                    href="/hubspot/packages/flexible"
                    onClick={() => setIsOpen(false)}
                    className="text-xs font-semibold text-[#677489] hover:text-[#FF7A59] no-underline font-inter"
                  >
                    Flexible Engagement Options
                  </Link>
                </div>
              )}
            </div>

            <div className="flex flex-col border-b border-[#F0E8E3]">
              <button
                onClick={() => toggleSubmenu("industries")}
                className="w-full flex items-center justify-between text-sm font-bold text-[#1B1F3A] hover:text-[#FF7A59] py-2.5 bg-transparent border-none text-left font-inter tracking-wide"
              >
                <span>Industries</span>
                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform duration-200 ${activeSubmenu === "industries" ? "rotate-180" : ""}`}
                />
              </button>
              {activeSubmenu === "industries" && (
                <div className="flex flex-col gap-3.5 pl-4 pt-2 pb-4 bg-[#FFF8F5]/60 rounded-lg mt-1 mb-2 animate-[fadeIn_0.2s_ease-out]">
                  {nav.industries.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-semibold text-[#677489] hover:text-[#FF7A59] no-underline font-inter"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div className="flex flex-col border-b border-[#F0E8E3]">
              <button
                onClick={() => toggleSubmenu("projects")}
                className="w-full flex items-center justify-between text-sm font-bold text-[#1B1F3A] hover:text-[#FF7A59] py-2.5 bg-transparent border-none text-left font-inter tracking-wide"
              >
                <span>Projects</span>
                <ChevronDown
                  className={`w-4 h-4 opacity-70 transition-transform duration-200 ${activeSubmenu === "projects" ? "rotate-180" : ""}`}
                />
              </button>
              {activeSubmenu === "projects" && (
                <div className="flex flex-col gap-3.5 pl-4 pt-2 pb-4 bg-[#FFF8F5]/60 rounded-lg mt-1 mb-2 animate-[fadeIn_0.2s_ease-out]">
                  {nav.projects.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs font-semibold text-[#677489] hover:text-[#FF7A59] no-underline font-inter"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/hubspot#consultation"
              onClick={() => setIsOpen(false)}
              className="w-full bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-sm py-3.5 rounded-[6px] text-center mt-2 no-underline shadow-xs"
            >
              Book a Free Consultation
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
