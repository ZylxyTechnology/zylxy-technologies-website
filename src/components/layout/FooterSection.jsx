"use client";

import { footerData } from "@/data/layout/footerData";
import { footerStyles } from "@/styles/layout/footer";
import Link from "next/link";

export default function FooterSection() {
  return (
    <footer id="footer-section" className={footerStyles.footer}>
      <div className={footerStyles.wrapper}>
        {/* Top Section: Logo & Description */}
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

        {/* Middle Section: Links & Contact Grid */}
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

          {/* Social Column */}
          {footerData.social && (
            <div className={footerStyles.colContainer}>
              <div className={footerStyles.colTitle}>
                {footerData.social.title}
              </div>
              {footerData.social.items.map((item) => (
                <a 
                  key={item.label} 
                  href={item.href} 
                  className={footerStyles.linkItem}
                  target={item.type === "external" ? "_blank" : undefined}
                  rel={item.type === "external" ? "noopener noreferrer" : undefined}
                >
                  {item.label}
                </a>
              ))}
            </div>
          )}

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

        {/* Bottom Section: Copyright & Legal Links */}
        <div className={footerStyles.bottomSection}>
          <div className={footerStyles.copyright}>
            {footerData.bottom.copyright}
          </div>
          <div className={footerStyles.bottomLinks}>
            {footerData.bottom.links?.map((link) => (
              <Link key={link.label} href={link.href} className={footerStyles.bottomLinkItem}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
