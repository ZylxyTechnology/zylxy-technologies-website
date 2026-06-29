"use client";

import { footerData } from "@/app/hubspot/data/layout/footer";
import { footerStyles as s } from "@/app/hubspot/styles/layout/footer";
import Image from "next/image";
import Link from "next/link";

export default function HubSpotFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftCol}>
          <Link href="/" className={s.logoLink}>
            <div className={s.logoIconWrapper}>
              <Image
                src="/logos/ZylxyLogo.png"
                alt="Zylxy Technologies Corporate Logo"
                width={24}
                height={24}
                className="object-contain select-none shrink-0"
              />
            </div>
            <div className={s.textWrapper}>
              <span className={s.brandTitle}>HubSpot CRM</span>
              <span className={s.brandSubtitle}>CONSULTANT SPECIALIST</span>
            </div>
          </Link>
          <p className={s.tagline}>{footerData.brand.tagline}</p>
        </div>

        <div className={s.centerCol}>
          <h4 className={s.linksTitle}>Quick Links</h4>
          <div className={s.linksList}>
            {footerData.quickLinks.map((link, idx) => (
              <Link key={idx} href={link.href} className={s.linkItem}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className={s.rightCol}>
          <h4 className={s.ctaTitle}>{footerData.cta.title}</h4>
          <Link
            href="/hubspot#consultation"
            className={`${s.ctaButton} no-underline`}
          >
            {footerData.cta.buttonText}
          </Link>
        </div>
      </div>

      <div className={s.bottomBar}>
        <div className={s.bottomContainer}>
          <span className={s.copyText}>
            © 2026 Zylxy Technologies. All rights reserved.
          </span>
          <div className={s.legalLinks}>
            {footerData.legal.map((link, idx) => (
              <Link key={idx} href={link.href} className={s.legalItem}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
