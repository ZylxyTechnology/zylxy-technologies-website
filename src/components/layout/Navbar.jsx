"use client";

import { NAVBAR_DATA } from "@/data/layout/navigationData";
import { navbarStyles as n } from "@/styles/layout/navbar.dark";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileDropdown = (label) => {
    setActiveMobileDropdown(activeMobileDropdown === label ? null : label);
  };

  return (
    <nav 
      className={`w-full sticky top-0 z-50 flex flex-col transition-all duration-300 ease-in-out ${
        scrolled 
          ? "bg-[#050E21]/90 backdrop-blur-md border-b border-white/[0.05] shadow-lg shadow-black/20 py-2" 
          : "bg-[#050E21] py-4"
      }`}
    >
      <div className={n.navContainer}>
        <div className={n.innerWrapper}>
          <Link href="/" className={n.logoSection}>
            <div className={n.logoBox}>
              <Image
                src="/logos/ZylxyLogo.png"
                alt={NAVBAR_DATA.logoAlt}
                width={34}
                height={34}
                className={n.logoImage}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
            <div className={n.textContainer}>
              <span className={n.brandTitle}>{NAVBAR_DATA.brandName}</span>
              <span className={n.brandSubtitle}>
                {NAVBAR_DATA.brandSubtitle}
              </span>
            </div>
          </Link>

          <div className={n.menuList}>
            {NAVBAR_DATA.menuItems.map((item, idx) => {
              if (item.isMegaMenu && item.pillars) {
                return (
                  <div key={idx} className={n.menuItemWrapper}>
                    <div className={n.menuButton}>
                      <Link href={item.href || "#"} className="hover:text-white transition-colors">
                        {item.label}
                      </Link>
                      <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </div>
                    <div className={n.megaMenuWrapper}>
                      <div className={n.megaMenuLayout}>
                        <div className={n.megaMenuLeft}>
                          <div className={n.servicesGrid}>
                            {item.pillars.map((pillar, pIdx) => (
                              <div key={pIdx} className={n.pillarCol}>
                                <h4 className={n.pillarHeading}>{pillar.title}</h4>
                                {pillar.items.map((subItem, sIdx) => {
                                  const SubIcon = subItem.icon;
                                  return (
                                    <Link
                                      key={sIdx}
                                      href={
                                        subItem.customRoute ||
                                        `/services/${subItem.slug}`
                                      }
                                      className={n.subServiceLink}
                                    >
                                      <div className={n.iconWrapper}>
                                        <SubIcon className="w-5 h-5 stroke-[1.5]" />
                                      </div>
                                      <span className="text-[13.5px] font-semibold tracking-tight">
                                        {subItem.name}
                                      </span>
                                    </Link>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                        {item.featured && (
                          <div className={n.megaMenuRight}>
                            <div className={n.featuredGlow} />
                            <span className={n.featuredTag}>
                              {item.featured.tag}
                            </span>
                            <h3 className={n.featuredTitle}>
                              {item.featured.title}
                            </h3>
                            <p className={n.featuredDesc}>
                              {item.featured.desc}
                            </p>
                            <Link href={item.featured.ctaHref} className={n.featuredCta}>
                              <span className={n.featuredCtaText}>{item.featured.ctaLabel}</span>
                              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover/cta:bg-white transition-colors duration-300">
                                <ChevronDown className="w-4 h-4 -rotate-90 text-white group-hover/cta:text-[#2563EB]" />
                              </div>
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }

              if (item.isMegaMenu && item.industries) {
                return (
                  <div key={idx} className={n.menuItemWrapper}>
                    <div className={n.menuButton}>
                      <Link href={item.href || "#"} className="hover:text-white transition-colors">
                        {item.label}
                      </Link>
                      <ChevronDown className="w-3.5 h-3.5 opacity-50" />
                    </div>
                    <div className={n.megaMenuWrapper}>
                      <div className={n.industriesGrid}>
                        {item.industries.map((ind, iIdx) => {
                          const IndIcon = ind.icon;
                          return (
                            <Link
                              key={iIdx}
                              href="/#LeadGen"
                              className={n.industryCard}
                            >
                              <div className={n.industryIcon}>
                                <IndIcon className="w-4.5 h-4.5 stroke-[1.5]" />
                              </div>
                              <div className={n.industryMeta}>
                                <h4 className={n.industryTitle}>{ind.name}</h4>
                                <p className={n.industryDesc}>{ind.desc}</p>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={idx} href={item.href} className={n.menuButton}>
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className={n.rightActionsGroup}>
            {NAVBAR_DATA.buttons.map((btn, idx) => (
              <Link
                key={idx}
                href={btn.href}
                className={
                  btn.variant === "hubspot" ? n.hubspotPill : n.primaryBtn
                }
              >
                {btn.variant === "hubspot" && (
                  <div className={n.hubspotPulseDot} />
                )}
                <span>{btn.label}</span>
              </Link>
            ))}
          </div>

          <button
            className={n.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-white" />
            ) : (
              <Menu className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={n.mobileMenuOverlay}>
          <div className={n.mobileMenuContainer}>
            {NAVBAR_DATA.menuItems.map((item, idx) => {
              if (item.isMegaMenu) {
                const isDropdownOpen = activeMobileDropdown === item.label;
                return (
                  <div key={idx} className={n.mobileDropdownWrapper}>
                    <div className={n.mobileDropdownBtn}>
                      <Link
                        href={item.href || "#"}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="flex-1 text-left"
                      >
                        {item.label}
                      </Link>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          toggleMobileDropdown(item.label);
                        }}
                        className="p-2 -mr-2"
                        aria-label="Toggle Submenu"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
                        />
                      </button>
                    </div>
                    {isDropdownOpen && (
                      <div className={n.mobileSubList}>
                        {item.pillars &&
                          item.pillars
                            .flatMap((p) => p.items)
                            .map((sub, sIdx) => (
                              <Link
                                key={sIdx}
                                href={
                                  sub.customRoute || `/services/${sub.slug}`
                                }
                                className={n.mobileSubLink}
                                onClick={() => setIsMobileMenuOpen(false)}
                              >
                                {sub.name}
                              </Link>
                            ))}
                        {item.industries &&
                          item.industries.map((ind, iIdx) => (
                            <Link
                              key={iIdx}
                              href="/#LeadGen"
                              className={n.mobileSubLink}
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {ind.name}
                            </Link>
                          ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={idx}
                  href={item.href}
                  className={n.mobileLink}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="flex flex-col gap-3 mt-4">
              {NAVBAR_DATA.buttons.map((btn, idx) => (
                <Link
                  key={idx}
                  href={btn.href}
                  className={
                    btn.variant === "hubspot"
                      ? n.hubspotMobilePill
                      : `${n.primaryBtn} text-center py-3 w-full`
                  }
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{btn.label}</span>
                  {btn.variant === "hubspot" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A59] shadow-[0_0_6px_#FF7A59]" />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
