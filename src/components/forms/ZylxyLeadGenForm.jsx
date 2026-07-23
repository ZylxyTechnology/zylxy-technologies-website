"use client";

import { submitLeadAction } from "@/actions/leadActions";
import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionItem } from "@/components/motion/MotionItem";
import { SERVICE_CATALOG } from "@/data/catalog/serviceCatalog";
import { CONTACTS } from "@/data/constants/contactInfo";
import { leadFormStyles as s } from "@/styles/forms/ZylxyLeadGenForm";

const d = {
  header: {
    pillText: "Free Consultancy",
    mainHeading: "Tell us about your project.",
    subHeading:
      "No commitment. No pressure. Just a straightforward conversation about your operational and digital growth needs.",
  },
  services: Object.values(SERVICE_CATALOG)
    .filter((s) => s.visibleInLeadGen)
    .map((s) => s.leadGenLabel),
  organizationTypes: [
    "Nonprofit Organization",
    "Small Business",
    "Workforce Development Organization",
    "Educational Organization",
    "Accelerator / Incubator",
    "Community Organization",
    "Professional Service Firm",
    "Other",
  ],
  contacts: CONTACTS,
};
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

export default function ZylxyLeadGenForm() {
  const dropdownRef = useRef(null);
  const countryOptions = useMemo(() => countryList().getData(), []);

  const [state, formAction, isPending] = useActionState(submitLeadAction, {
    success: false,
    errors: {},
    payload: {},
  });

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
                <input
                  type="hidden"
                  name="dialCode"
                  value={selectedCountry.value}
                />
                <input
                  type="hidden"
                  name="consentCommunications"
                  value={consentComm ? "true" : "false"}
                />
                <input
                  type="hidden"
                  name="consentProcessing"
                  value={consentProc ? "true" : "false"}
                />
                <input type="hidden" name="isHubSpotFormContext" value="false" />

                <div style={{ display: "none" }} aria-hidden="true">
                  <input
                    type="text"
                    name="honeyTrap"
                    tabIndex="-1"
                    autoComplete="off"
                  />
                </div>

                <div className={s.grid}>
                  {/* First Name & Last Name */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className={s.inputGroup}>
                      <label htmlFor="firstName" className={state?.errors?.firstName ? s.labelError : s.label}>
                        First Name *
                      </label>
                      <div className={s.inputWrapper}>
                        <User className={`${s.inputIcon} ${state?.errors?.firstName ? s.inputIconError : ""}`} />
                        <input
                          type="text"
                          name="firstName"
                          id="firstName"
                          required
                          defaultValue={state?.payload?.firstName || ""}
                          placeholder="First Name"
                          className={`${s.input} ${state?.errors?.firstName ? s.inputErrorClass : ""}`}
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
                      <label htmlFor="lastName" className={state?.errors?.lastName ? s.labelError : s.label}>
                        Last Name *
                      </label>
                      <div className={s.inputWrapper}>
                        <User className={`${s.inputIcon} ${state?.errors?.lastName ? s.inputIconError : ""}`} />
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          required
                          defaultValue={state?.payload?.lastName || ""}
                          placeholder="Last Name"
                          className={`${s.input} ${state?.errors?.lastName ? s.inputErrorClass : ""}`}
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

                  {/* Email Address */}
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
                        required
                        defaultValue={state?.payload?.email || ""}
                        placeholder="you@company.com"
                        className={`${s.input} ${state?.errors?.email ? s.inputErrorClass : ""}`}
                      />
                    </div>
                    {state?.errors?.email && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.email}
                      </div>
                    )}
                  </div>

                  {/* Phone Number */}
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
                                placeholder="Search code..."
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
                                    <span className="truncate max-w-35">
                                      {country.label}
                                    </span>
                                    <span className="shrink-0 opacity-80">
                                      {country.value}
                                    </span>
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
                        required
                        defaultValue={state?.payload?.phone || ""}
                        placeholder="Verification contact sequence"
                        className={s.phoneInput}
                      />
                    </div>
                    {state?.errors?.phone && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {state.errors.phone}
                      </div>
                    )}
                  </div>

                  {/* Organization Name */}
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
                        placeholder="Your Company"
                        className={s.input}
                      />
                    </div>
                  </div>

                  {/* Organization Type */}
                  <div className={s.inputGroup}>
                    <label htmlFor="orgType" className={s.label}>
                      Organization Type
                    </label>
                    <div className={s.selectWrapper}>
                      <select
                        name="orgType"
                        id="orgType"
                        defaultValue={
                          state?.payload?.orgType || d.organizationTypes[0]
                        }
                        className={s.select}
                      >
                        {d.organizationTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-[#1B1F3A] text-white"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Service Needed */}
                  <div className={s.inputGroup}>
                    <label
                      htmlFor="service"
                      className={state?.errors?.service ? s.labelError : s.label}
                    >
                      Service Needed *
                    </label>
                    <div className={s.selectWrapper}>
                      <select
                        name="service"
                        id="service"
                        defaultValue={state?.payload?.service || d.services[0]}
                        className={`${s.select} ${state?.errors?.service ? s.inputErrorClass : ""}`}
                      >
                        {d.services.map((serviceName) => (
                          <option
                            key={serviceName}
                            value={serviceName}
                            className="bg-[#1B1F3A] text-white"
                          >
                            {serviceName}
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

                {/* Project Description */}
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
                        placeholder="Describe your project, goals, and operational requirements..."
                        className={s.textarea}
                        style={{ paddingLeft: "44px" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Consent Checkboxes */}
                <div className={s.complianceBlock}>
                  <div className={s.complianceRow}>
                    <input
                      type="checkbox"
                      id="consentComm"
                      name="consentCommunications"
                      checked={consentComm}
                      onChange={() => setConsentComm(!consentComm)}
                      className={s.complianceInput}
                    />
                    <label htmlFor="consentComm" className={s.complianceLabel}>
                      I agree to receive communications from Zylxy Technologies.
                    </label>
                  </div>
                  {state?.errors?.consentCommunications && (
                    <div className={s.errorText}>
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      {state.errors.consentCommunications}
                    </div>
                  )}

                  <div className={s.complianceRow}>
                    <input
                      type="checkbox"
                      id="consentProc"
                      name="consentProcessing"
                      required
                      checked={consentProc}
                      onChange={() => setConsentProc(!consentProc)}
                      className={s.complianceInput}
                    />
                    <label htmlFor="consentProc" className={s.complianceLabel}>
                      I agree to allow Zylxy Technologies to capture and process
                      personal data fields. *
                    </label>
                  </div>
                  {state?.errors?.consentProcessing && (
                    <div className={s.errorText}>
                      <ShieldAlert className="w-4 h-4 shrink-0" />
                      {state.errors.consentProcessing}
                    </div>
                  )}
                </div>

                {/* Footer / Submit Row */}
                <div className={s.footerRow}>
                  <p className={s.privacyFooter}>
                    Data ingestion pipeline conforms strictly to security safeguards.
                  </p>
                  <div className={s.submitBtnWrapper}>
                    <div className={s.submitGlow} />
                    <button
                      type="submit"
                      disabled={isPending}
                      className={s.submitBtn}
                    >
                      {isPending ? "Transmitting Scope..." : "Transmit Request"}
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {state?.errors?.global && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {state.errors.global}
                  </div>
                )}
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[440px] text-center gap-4">
                <div className={s.successIconBox}>
                  <CalendarCheck className="w-7 h-7" />
                </div>
                <h3 className={s.successTitle}>Inquiry System Synchronized</h3>
                <p className={s.successText}>
                  Thank you, {state.submittedName}. Our engineering core has indexed
                  your project scope parameters cleanly and will launch contact
                  tracking at {state.submittedEmail} within 24 hours.
                </p>
              </div>
            )}
          </MotionItem>

          {/* Contact Row */}
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
