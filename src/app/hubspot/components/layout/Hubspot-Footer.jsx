"use client";

import { footerData } from "@/app/hubspot/data/layout/footer";
import { footerStyles } from "@/styles/layout/footer";
import Link from "next/link";

export default function HubSpotFooter() {
  return (
    <footer id="hubspot-footer" className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        
        {/* Top Section */}
        <div className={footerStyles.topSection}>
          <div className={footerStyles.logoContainer}>
            <div className={footerStyles.logoText}>
              {footerData.company.name}
            </div>
            <div className={footerStyles.legalText}>
              {footerData.company.legal}
            </div>
          </div>
          <p className={footerStyles.descText}>{footerData.company.desc}</p>
        </div>

        {/* Middle Grid */}
        <div className={footerStyles.grid}>
          {footerData.columns.map((col) => (
            <div key={col.title} className={footerStyles.colContainer}>
              <div className={footerStyles.colTitle}>{col.title}</div>
              {col.items.map((item) => (
                <Link key={item.label} href={item.href} className={footerStyles.linkItem}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}

          {/* Contact Column */}
          <div className={footerStyles.colContainer}>
            <div className={footerStyles.colTitle}>
              {footerData.contact.title}
            </div>
            {footerData.contact.items.map((item) => (
              <a 
                key={item.label} 
                href={item.href} 
                className={footerStyles.contactItem}
                target={item.type === "external" ? "_blank" : undefined}
                rel={item.type === "external" ? "noopener noreferrer" : undefined}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={footerStyles.bottomSection}>
          <div className={footerStyles.copyright}>
            {footerData.bottom.copyright}
          </div>
          <div className={footerStyles.bottomLinks}>
             {/* If we had bottom links, they'd go here. Currently none in data, but kept structural placeholder */}
          </div>
        </div>
      </div>
    </footer>
  );
}
