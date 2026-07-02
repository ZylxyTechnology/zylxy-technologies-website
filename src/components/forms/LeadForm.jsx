"use client";

import { submitLeadAction } from "@/actions/leadActions";
import { leadFormData as d } from "@/data/forms/LeadFormData";
import { leadFormStyles as s } from "@/styles/forms/leadFormStyles";
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
import { useActionState, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className={s.submitBtnWrapper}>
      <button type="submit" disabled={pending} className={s.submitBtn}>
        {pending ? "Sending..." : "Send My Request"}
        <Send className="w-4 h-4 animate-pulse" />
      </button>
    </div>
  );
}

export default function LeadForm() {
  const dropdownRef = useRef(null);

  const [state, formAction] = useActionState(submitLeadAction, {
    success: false,
    errors: {},
    payload: {},
  });

  const [selectedService, setSelectedService] = useState("");
  const [orgType, setOrgType] = useState(d.organizationTypes[0]);
  const [consentComm, setConsentComm] = useState(false);
  const [consentProc, setConsentProc] = useState(false);

  const defaultCountry =
    d.countryCodes.find((c) => c.code === "IN") || d.countryCodes[0];
  const [activeCountry, setActiveCountry] = useState(defaultCountry);
  const [showCountries, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");

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

  const renderIcon = (type) => {
    const cls = "w-4 h-4";
    if (type === "whatsapp") return <MessageCircle className={cls} />;
    if (type === "email") return <Mail className={cls} />;
    if (type === "linkedin")
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    if (type === "facebook")
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    if (type === "behance")
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cls}
        >
          <path d="M9 12h2a2.5 2.5 0 0 0 0-5H9v5z" />
          <path d="M9 17h2.5a2.5 2.5 0 0 0 0-5H9v5z" />
          <path d="M6 7v10h5.5a4.5 4.5 0 0 0 0-9H6z" />
          <path d="M16 14h5a3 3 0 0 0-6 0v1a3 3 0 0 0 6 0" />
          <path d="M16 9h4" />
        </svg>
      );
    return null;
  };

  const filteredCountries = d.countryCodes.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch),
  );

  return (
    <section id="LeadGen" className={s.section}>
      <div className={s.backgroundEffects} />
      <div className={s.radialGlow} />

      <div className={s.wrapper}>
        <div className={s.headerContainer}>
          <div className={s.pillLine}>
            <div className={s.pillLineBar} />
            <span className={s.pillText}>{d.header.pillText}</span>
          </div>
          <h2 className={s.mainHeading}>{d.header.mainHeading}</h2>
          <p className={s.subHeading}>{d.header.subHeading}</p>
        </div>

        {!state?.success ? (
          <form action={formAction} className={s.formCard}>
            <div className={s.formAccentBar} />

            <input type="hidden" name="dialCode" value={activeCountry.dial} />
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
              <div className={s.inputGroup}>
                <label className={state?.errors?.name ? s.labelError : s.label}>
                  Full Name *
                </label>
                <div className={s.inputWrapper}>
                  <User
                    className={`${s.inputIcon} ${
                      state?.errors?.name ? s.inputIconError : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="name"
                    defaultValue={state?.payload?.name || ""}
                    placeholder="Your full name"
                    className={`${s.input} ${
                      state?.errors?.name ? s.inputErrorClass : ""
                    }`}
                  />
                </div>
                {state?.errors?.name && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {state.errors.name}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label
                  className={state?.errors?.email ? s.labelError : s.label}
                >
                  Email Address *
                </label>
                <div className={s.inputWrapper}>
                  <Mail
                    className={`${s.inputIcon} ${
                      state?.errors?.email ? s.inputIconError : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="email"
                    defaultValue={state?.payload?.email || ""}
                    placeholder="you@company.com"
                    className={`${s.input} ${
                      state?.errors?.email ? s.inputErrorClass : ""
                    }`}
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
                  className={state?.errors?.phone ? s.labelError : s.label}
                >
                  Phone Number *
                </label>
                <div
                  className={`${s.phoneContainer} ${
                    state?.errors?.phone ? s.phoneContainerError : ""
                  }`}
                >
                  <div className="relative h-full" ref={dropdownRef}>
                    <div
                      className={s.countrySelectorBtn}
                      onClick={() => setShowCountryDropdown(!showCountries)}
                    >
                      <span>{activeCountry.code}</span>
                      <span className="text-white/40 pl-1">
                        {activeCountry.dial}
                      </span>
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
                            placeholder="Search code or country..."
                            className="w-full bg-transparent border-none outline-none text-xs font-inter text-white placeholder:text-white/20 p-1"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                        <div className="max-h-48 overflow-y-auto">
                          {filteredCountries.length > 0 ? (
                            filteredCountries.map((country) => (
                              <div
                                key={country.code}
                                className={`${s.countryOption} ${
                                  activeCountry.code === country.code
                                    ? s.countryOptionActive
                                    : ""
                                }`}
                                onClick={() => {
                                  setActiveCountry(country);
                                  setShowCountryDropdown(false);
                                  setCountrySearch("");
                                }}
                              >
                                <span className="truncate max-w-35">
                                  {country.name}
                                </span>
                                <span className="shrink-0 opacity-80">
                                  {country.dial}
                                </span>
                              </div>
                            ))
                          ) : (
                            <div className="text-[11px] text-white/30 text-center py-4 font-inter">
                              No countries found
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phone"
                    defaultValue={state?.payload?.phone || ""}
                    placeholder="95538 86216"
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

              <div className={s.inputGroup}>
                <label
                  className={state?.errors?.service ? s.labelError : s.label}
                >
                  Service Needed *
                </label>
                <div className={s.selectWrapper}>
                  <select
                    name="service"
                    value={selectedService}
                    onChange={(e) => setSelectedService(e.target.value)}
                    className={`${s.select} ${
                      state?.errors?.service ? s.inputErrorClass : ""
                    }`}
                    style={{
                      color: selectedService
                        ? "#FFFFFF"
                        : "rgba(255,255,255,0.3)",
                      paddingLeft: "16px",
                    }}
                  >
                    <option value="">Select a service...</option>
                    {d.services.map((option) => (
                      <option
                        key={option}
                        value={option}
                        className="bg-[#1B1F3A] text-white"
                      >
                        {option}
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

              <div className={s.inputGroup}>
                <label className={s.label}>Organization Name</label>
                <div className={s.inputWrapper}>
                  <Building2 className={s.inputIcon} />
                  <input
                    type="text"
                    name="orgName"
                    defaultValue={state?.payload?.orgName || ""}
                    placeholder="Your Company"
                    className={s.input}
                  />
                </div>
              </div>

              <div className={s.inputGroup}>
                <label className={s.label}>Organization Type</label>
                <div className={s.selectWrapper}>
                  <select
                    name="orgType"
                    value={orgType}
                    onChange={(e) => setOrgType(e.target.value)}
                    className={s.select}
                    style={{ paddingLeft: "16px" }}
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
            </div>

            <div className={s.fullWidthField}>
              <div className={s.inputGroup}>
                <label className={s.label}>Tell us about your project</label>
                <div className={s.inputWrapper}>
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A3B1CC] pointer-events-none" />
                  <textarea
                    name="message"
                    defaultValue={state?.payload?.message || ""}
                    placeholder="Describe your project, goals, and technical requirements..."
                    className={s.textarea}
                    style={{ paddingLeft: "44px" }}
                  />
                </div>
              </div>
            </div>

            <div className={s.complianceBlock}>
              <p className="text-[13px] font-inter text-[#A3B1CC] mb-1.5 opacity-90 leading-relaxed">
                By checking the boxes below, you agree to receive communications
                from Zylxy Technologies.
              </p>
              <div
                className={s.complianceRow}
                onClick={() => setConsentComm(!consentComm)}
              >
                <input
                  type="checkbox"
                  checked={consentComm}
                  readOnly
                  className={s.complianceInput}
                />
                <span className={s.complianceLabel}>
                  I agree to receive other communications from Zylxy
                  Technologies.
                </span>
              </div>
              {state?.errors?.consentCommunications && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {state.errors.consentCommunications}
                </div>
              )}

              <p className="text-[13px] font-inter text-[#A3B1CC] mt-4 mb-1.5 opacity-90 leading-relaxed">
                Please check the box below to confirm your consent:
              </p>
              <div
                className={s.complianceRow}
                onClick={() => setConsentProc(!consentProc)}
              >
                <input
                  type="checkbox"
                  checked={consentProc}
                  readOnly
                  className={s.complianceInput}
                />
                <span className={s.complianceLabel}>
                  I agree to allow Zylxy Technologies to store and process my
                  personal data. *
                </span>
              </div>
              {state?.errors?.consentProcessing && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {state.errors.consentProcessing}
                </div>
              )}
            </div>

            <div className={s.footerRow}>
              <p className={s.privacyFooter}>
                We care about your privacy. Learn how we handle your data in our
                Privacy Policy.
              </p>
              <SubmitButton />
            </div>

            {state?.errors?.global && (
              <div className={s.errorText}>
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
            <h3 className={s.successTitle}>We've received your request</h3>
            <p className={s.successText}>
              Thank you, {state.submittedName}. Our team has safely indexed your
              project scope and will reach out to {state.submittedEmail} within
              24 hours.
            </p>
          </div>
        )}

        <div className={s.contactRow}>
          {d.contacts.map((contact) => (
            <a
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
