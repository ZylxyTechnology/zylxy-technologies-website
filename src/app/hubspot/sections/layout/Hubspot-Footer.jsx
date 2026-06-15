"use client";

import { footerStyles as s } from "@/app/hubspot/styles/footer";
import Link from "next/link";

export default function HubSpotFooter() {
  return (
    <footer className={s.footer}>
      <div className={s.container}>
        <div className={s.leftCol}>
          <Link href="/hubspot" className={s.logoWrapper}>
            <div className={s.logoIcon}>
              <div className={s.logoCore} />
              <div className={s.logoNodeTop} />
              <div className={s.logoNodeBottom} />
              <div className={s.logoNodeRight} />
            </div>
            <div className={s.logoText}>
              <span className={s.brandTitle}>HubSpot</span>
              <span className={s.brandSubtitle}>Consultant</span>
            </div>
          </Link>
          <p className={s.tagline}>
            CRM & Automation Specialist. Optimizing data pipelines and scaling
            system processes.
          </p>
        </div>

        <div className={s.centerCol}>
          <h4 className={s.linksTitle}>Quick Links</h4>
          <div className={s.linksList}>
            <button className={s.linkItem}>Support Hubs</button>
            <button className={s.linkItem}>Case Studies</button>
            <button className={s.linkItem}>Credentials</button>
            <button className={s.linkItem}>Reviews</button>
          </div>
        </div>

        <div className={s.rightCol}>
          <h4 className={s.ctaTitle}>
            Ready to grow your organizational impact?
          </h4>
          <button className={s.ctaButton}>Book Free Consultation</button>
        </div>
      </div>

      <div className={s.bottomBar}>
        <div className={s.bottomContainer}>
          <span className={s.copyText}>
            © 2026 HubSpot Consultant. All rights reserved.
          </span>
          <span className={s.trademarkText}>
            HubSpot is a trademark of HubSpot, Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}
