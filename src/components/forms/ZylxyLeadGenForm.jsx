"use client";

import { submitLeadAction } from "@/actions/leadActions";
import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionItem } from "@/components/motion/MotionItem";
import { leadFormData as d } from "@/data/forms/ZylxyLeadGenForm";
import { leadFormStyles as s } from "@/styles/forms/ZylxyLeadGenForm";
import {
  Building2,
  CalendarCheck,
  ChevronDown,
  Mail,
  MessageCircle,
  MessageSquare,
  Search,
  Send,
  ShieldAlert,
  User,
} from "lucide-react";
import Link from "next/link";
import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import countryList from "react-select-country-list";

const LEAD_GEN_DROPDOWN_OPTIONS = [
  "Web Development",
  "Mobile App Development",
  "Custom Software Development",
  "UI/UX Designing & Prototyping",
  "Creative Design Services",
  "Application Support & Maintenance",
  "AI Solutions",
  "HubSpot CRM Implementation",
  "Talent Acquisition",
  "Campus Recruitment",
  "Training & Placement",
];

export default function ZylxyLeadGenForm() {
  const dropdownRef = useRef(null);
  const countryOptions = useMemo(() => countryList().getData(), []);

  const [state, formAction, isPending] = useActionState(submitLeadAction, {
    success: false,
    errors: {},
    payload: {},
  });

  const [selectedService, setSelectedService] = useState("");
  const [selectedCountry, setSelectedCountry] = useState({
    value: "IN",
    label: "India",
  });
  const [showCountries, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [consentComm, setConsentComm] = useState(false);
  const [consentProc, setConsentProc] = useState(false);

  useEffect(() => {
    function handleOutsideClick(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowCountryDropdown(false);
        setCountrySearch("");
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const filteredCountries = countryOptions.filter(
    (c) =>
      c.label.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.value.toLowerCase().includes(countrySearch.toLowerCase()),
  );

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

            {!state?.success ? (
              <form action={formAction}>
                {/* Hidden fields */}
                <input type="hidden" name="dialCode" value={selectedCountry.value} />
                <input type="hidden" name="consentCommunications" value={consentComm ? "true" : "false"} />
                <input type="hidden" name="consentProcessing" value={consentProc ? "true" : "false"} />

                {/* Honeypot anti-spam */}
                <div style={{ display: "none" }} aria-hidden="true">
                  <input type="text" name="honeyTrap" tabIndex="-1" autoComplete="off" />
                </div>

                {/* SERVICE — full width */}
                <div className={s.grid} style={{ marginBottom: "1.5rem" }}>
                  <div className={s.inputGroup} style={{ gridColumn: "1 / -1" }}>
                    <label
                      htmlFor="serviceSelector"
                      className={state?.errors?.service ? s.labelError : s.label}
                    >
                      Service Needed *
                    </label>
                    <div className={s.selectWrapper}>
                      <select
                        name="service"
                        id="serviceSelector"
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className={`${s.select} ${state?.errors?.service ? s.inputErrorClass : ""}`}
                        style={{
                          color: selectedService ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                        }}
                      >
                        <option value="">Select a service...</option>
                        {LEAD_GEN_DROPDOWN_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} className="bg-[#1B1F3A] text-white">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    {state?.errors?.service && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.service}
                      </div>
                    )}
                  </div>
                </div>

                {/* FIRST NAME + LAST NAME */}
                <div className={s.grid} style={{ marginBottom: "1.25rem" }}>
                  <div className={s.inputGroup}>
                    <label
                      htmlFor="firstName"
                      className={state?.errors?.firstName ? s.labelError : s.label}
                    >
                      First Name *
                    </label>
                    <div className={s.inputWrapper}>
                      <User
                        className={`${s.inputIcon} ${state?.errors?.firstName ? s.inputIconError : ""}`}
                      />
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        defaultValue={state?.payload?.firstName || ""}
                        placeholder="First name"
                        className={`${s.input} ${state?.errors?.firstName ? s.inputErrorClass : ""}`}
                        autoComplete="given-name"
                      />
                    </div>
                    {state?.errors?.firstName && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.firstName}
                      </div>
                    )}
                  </div>

                  <div className={s.inputGroup}>
                    <label
                      htmlFor="lastName"
                      className={state?.errors?.lastName ? s.labelError : s.label}
                    >
                      Last Name *
                    </label>
                    <div className={s.inputWrapper}>
                      <User
                        className={`${s.inputIcon} ${state?.errors?.lastName ? s.inputIconError : ""}`}
                      />
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        defaultValue={state?.payload?.lastName || ""}
                        placeholder="Last name"
                        className={`${s.input} ${state?.errors?.lastName ? s.inputErrorClass : ""}`}
                        autoComplete="family-name"
                      />
                    </div>
                    {state?.errors?.lastName && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.lastName}
                      </div>
                    )}
                  </div>
                </div>

                {/* EMAIL + PHONE */}
                <div className={s.grid} style={{ marginBottom: "1.25rem" }}>
                  <div className={s.inputGroup}>
                    <label
                      htmlFor="email"
                      className={state?.errors?.email ? s.labelError : s.label}
                    >
                      Email Address *
                    </label>
                    <div className={s.inputWrapper}>
                      <Mail
                        className={`${s.inputIcon} ${state?.errors?.email ? s.inputIconError : ""}`}
                      />
                      <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={state?.payload?.email || ""}
                        placeholder="you@company.com"
                        className={`${s.input} ${state?.errors?.email ? s.inputErrorClass : ""}`}
                        autoComplete="email"
                      />
                    </div>
                    {state?.errors?.email && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.email}
                      </div>
                    )}
                  </div>

                  <div className={s.inputGroup}>
                    <label
                      htmlFor="phone"
                      className={state?.errors?.phone ? s.labelError : s.label}
                    >
                      Phone Number *
                    </label>
                    <div
                      className={`${s.phoneContainer} ${state?.errors?.phone ? s.phoneContainerError : ""}`}
                    >
                      <div className="relative h-full" ref={dropdownRef}>
                        <div
                          className={s.countrySelectorBtn}
                          onClick={() => setShowCountryDropdown(!showCountries)}
                        >
                          <span>{selectedCountry.value}</span>
                          <ChevronDown className="w-3 h-3 text-white/40 ml-1" />
                        </div>
                        {showCountries && (
                          <div className={s.countryDropdown}>
                            <div className="flex items-center gap-2 px-2 pb-2 mb-1 border-b border-white/5 sticky top-0 bg-[#1B1F3A]">
                              <Search className="w-3.5 h-3.5 text-white/30 shrink-0" />
                              <input
                                type="text"
                                value={countrySearch}
                                onChange={(e) => setCountrySearch(e.target.value)}
                                placeholder="Search country..."
                                className="w-full bg-transparent border-none outline-none text-xs font-inter text-white p-1"
                                onClick={(e) => e.stopPropagation()}
                              />
                            </div>
                            <div className="max-h-48 overflow-y-auto">
                              {filteredCountries.length > 0 ? (
                                filteredCountries.map((country) => (
                                  <div
                                    key={country.value}
                                    className={`${s.countryOption} ${selectedCountry.value === country.value ? s.countryOptionActive : ""}`}
                                    onClick={() => {
                                      setSelectedCountry(country);
                                      setShowCountryDropdown(false);
                                      setCountrySearch("");
                                    }}
                                  >
                                    <span className="truncate max-w-[120px]">{country.label}</span>
                                    <span className="shrink-0 opacity-80">{country.value}</span>
                                  </div>
                                ))
                              ) : (
                                <div className="text-[11px] text-white/30 text-center py-4">
                                  No results
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        defaultValue={state?.payload?.phone || ""}
                        placeholder="Your phone number"
                        className={s.phoneInput}
                        autoComplete="tel"
                      />
                    </div>
                    {state?.errors?.phone && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.phone}
                      </div>
                    )}
                  </div>
                </div>

                {/* ORG NAME + ORG TYPE */}
                <div className={s.grid} style={{ marginBottom: "1.25rem" }}>
                  <div className={s.inputGroup}>
                    <label htmlFor="orgName" className={s.label}>
                      Organization Name
                    </label>
                    <div className={s.inputWrapper}>
                      <Building2 className={s.inputIcon} />
                      <input
                        type="text"
                        name="orgName"
                        id="orgName"
                        defaultValue={state?.payload?.orgName || ""}
                        placeholder="Your company (optional)"
                        className={s.input}
                        autoComplete="organization"
                      />
                    </div>
                  </div>

                  <div className={s.inputGroup}>
                    <label htmlFor="orgType" className={s.label}>
                      Organization Type
                    </label>
                    <div className={s.selectWrapper}>
                      <select
                        name="orgType"
                        id="orgType"
                        defaultValue={state?.payload?.orgType || d.organizationTypes[0]}
                        className={s.select}
                      >
                        {d.organizationTypes.map((type) => (
                          <option key={type} value={type} className="bg-[#1B1F3A] text-white">
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* MESSAGE — full width */}
                <div className={s.fullWidthField}>
                  <div className={s.inputGroup}>
                    <label htmlFor="message" className={s.label}>
                      Tell us about your project
                    </label>
                    <div className={s.inputWrapper}>
                      <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A3B1CC] pointer-events-none" />
                      <textarea
                        name="message"
                        id="message"
                        defaultValue={state?.payload?.message || ""}
                        placeholder="Describe your project, goals, and requirements..."
                        className={s.textarea}
                        style={{ paddingLeft: "44px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* CONSENT */}
                <div className={s.complianceBlock}>
                  <div className={s.complianceRow}>
                    <input
                      type="checkbox"
                      id="consentComm"
                      checked={consentComm}
                      onChange={() => setConsentComm(!consentComm)}
                      className={s.complianceInput}
                    />
                    <label htmlFor="consentComm" className={s.complianceLabel}>
                      I agree to receive communications from Zylxy Technologies.
                    </label>
                  </div>

                  <div className={s.complianceRow}>
                    <input
                      type="checkbox"
                      id="consentProc"
                      checked={consentProc}
                      onChange={() => setConsentProc(!consentProc)}
                      className={s.complianceInput}
                    />
                    <label htmlFor="consentProc" className={s.complianceLabel}>
                      I agree to allow Zylxy Technologies to store and process my personal data. *
                    </label>
                  </div>
                  {state?.errors?.consentProcessing && (
                    <div className={s.errorText}>
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      {state.errors.consentProcessing}
                    </div>
                  )}
                </div>

                {/* SUBMIT */}
                <div className={s.footerRow}>
                  <p className={s.privacyFooter}>
                    Your data is secure and handled in accordance with our privacy policy.
                  </p>
                  <div className={s.submitBtnWrapper}>
                    <div className={s.submitGlow} />
                    <button type="submit" disabled={isPending} className={s.submitBtn}>
                      {isPending ? "Sending..." : "Send Request"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {state?.errors?.global && (
                  <div className={`${s.errorText} mt-4`}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {state.errors.global}
                  </div>
                )}
              </form>
            ) : (
              <div className={s.successCard}>
                <div className={s.formAccentBar} />
                <div className={s.successIconBox}>
                  <CalendarCheck className="w-7 h-7" />
                </div>
                <h3 className={s.successTitle}>Request Received!</h3>
                <p className={s.successText}>
                  Thank you, {state.submittedName}. We have received your inquiry and will
                  reach out to {state.submittedEmail} within 24 hours.
                </p>
              </div>
            )}
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

const renderIcon = (type) => {
  switch (type) {
    case "email":
      return <Mail className="w-5 h-5" />;
    case "whatsapp":
      return <MessageCircle className="w-5 h-5" />;
    default:
      return null;
  }
};
