"use client";

import FormResolver from "@/components/forms/FormResolver";
import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionItem } from "@/components/motion/MotionItem";
import { leadFormData as d } from "@/data/forms/ZylxyLeadGenForm";
import { LEAD_GEN_DROPDOWN_OPTIONS } from "@/data/services/serviceRegistry";
import { leadFormStyles as s } from "@/styles/forms/ZylxyLeadGenForm";
import { Mail, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function ZylxyLeadGenForm() {
  const [selectedService, setSelectedService] = useState("");

  const resolvedKey = selectedService 
    ? (LEAD_GEN_DROPDOWN_OPTIONS.find((o) => o.label === selectedService)?.key || selectedService)
    : "zylxy-lead-gen";

  return (
    <Section id="LeadGen" className={s.section}>
      <div className={s.backgroundEffects} />
      <div className={s.radialGlow} />

      <Container className={s.wrapper}>
        <MotionContainer>
          <MotionItem direction="up" className={s.headerContainer}>
            <div className={s.pillLine}>
              <div className={s.pillLineBar} />
              <span className={s.pillText}>{d.header.pillText}</span>
              <div className={s.pillLineBar} />
            </div>
            <h2 className={s.mainHeading}>{d.header.mainHeading}</h2>
            <span className={s.subHeading}>{d.header.subHeading}</span>
          </MotionItem>

          <MotionItem direction="up" className={s.formCard}>
            <div className={s.formAccentBar} />

            {/* Service Dropdown Container */}
            <div className={s.grid} style={{ marginBottom: "1.5rem" }}>
              <div className={s.inputGroup} style={{ gridColumn: "1 / -1" }}>
                <label htmlFor="serviceSelector" className={s.label}>
                  Service Needed *
                </label>
                <div className={s.selectWrapper}>
                  <select
                    name="serviceSelector"
                    id="serviceSelector"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={s.select}
                    style={{
                      color: selectedService ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    <option value="">General Inquiry...</option>
                    {LEAD_GEN_DROPDOWN_OPTIONS.map((opt) => (
                      <option
                        key={opt.key}
                        value={opt.label}
                        className="bg-[#1B1F3A] text-white"
                      >
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Dynamic Form Host */}
            <FormResolver serviceKey={resolvedKey} isEmbedded={true} />
            
          </MotionItem>

          <MotionItem direction="up" className={s.contactRow}>
            {d.contacts.map((contact) => (
              <Link
                key={contact.label}
                href={contact.url}
                target="_blank"
                rel="noreferrer"
                className={s.contactCard}
              >
                <div className={s.contactIconWrapper}>
                  {renderIcon(contact.type)}
                </div>
                <div className={s.contactLabel}>{contact.label}</div>
                <div className={s.contactValue}>{contact.value}</div>
              </Link>
            ))}
          </MotionItem>
        </MotionContainer>
      </Container>
    </Section>
  );
}
