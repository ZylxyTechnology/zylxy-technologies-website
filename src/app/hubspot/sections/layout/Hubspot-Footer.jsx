"use client";

import { footerData } from "@/app/hubspot/data/footer";
import { footerStyles as s } from "@/app/hubspot/styles/footer";
import { Network } from "lucide-react";
import Link from "next/link";

export default function HubSpotFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftCol}>
          <Link href="/hubspot" className={s.logoLink}>
            <div className={s.logoIconWrapper}>
              <Network className="w-5 h-5 stroke-[2.5]" />
              <div className={s.logoNodePill} />
            </div>
            <div className={s.textWrapper}>
              <span className={s.brandTitle}>HubSpot CRM</span>
              <span className={s.brandSubtitle}>Consultant Specialist</span>
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
          <span className={s.trademarkText}>{footerData.brand.trademark}</span>
        </div>
      </div>
    </footer>
  );
}
