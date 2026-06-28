"use client";

import { submitLeadAction } from "@/actions/leadActions";
import { consultationFormData as d } from "@/app/hubspot/data/forms/consultationFormData";
import { consultationFormStyles as s } from "@/app/hubspot/styles/forms/consultationFormStyles";
import {
  Building2,
  CalendarCheck,
  CheckCircle2,
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
        {pending ? "Sending..." : "Book Consultation"}
        <Send className="w-4 h-4 animate-pulse" />
      </button>
    </div>
  );
}

export default function ConsultationForm() {
  const dropdownRef = useRef(null);

  const [state, formAction] = useActionState(submitLeadAction, {
    success: false,
    errors: {},
    payload: {},
  });

  const [selectedService, setSelectedService] = useState("HubSpot CRM");
  const [orgType, setOrgType] = useState(d.organizationTypes[0]);
  const [subLevel, setSubLevel] = useState(d.subscriptionLevels[0]);
  const [challenges, setChallenges] = useState([]);
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

  const handleChallengeToggle = (label) => {
    setChallenges((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label],
    );
  };

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
    return null;
  };

  const filteredCountries = d.countryCodes.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.dial.includes(countrySearch),
  );

  return (
    <section id="consultation" className={s.section}>
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

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-6 flex-wrap w-full max-w-[720px]">
            {d.header.bullets.map((bullet, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs font-bold text-[#A3B1CC] tracking-wide bg-white/5 border border-white/5 px-4 py-2 rounded-full shadow-md"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A59]" />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>

        {!state?.success ? (
          <form action={formAction} className={s.formCard}>
            <div className={s.formAccentBar} />

            <input type="hidden" name="dialCode" value={activeCountry.dial} />
            <input
              type="hidden"
              name="challengesToSolve"
              value={challenges.join("; ")}
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
            <input type="hidden" name="isHubSpotFormContext" value="true" />

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
                                <span className="truncate max-w-[140px]">
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
                <label
                  className={state?.errors?.orgName ? s.labelError : s.label}
                >
                  Organization Name *
                </label>
                <div className={s.inputWrapper}>
                  <Building2
                    className={`${s.inputIcon} ${
                      state?.errors?.orgName ? s.inputIconError : ""
                    }`}
                  />
                  <input
                    type="text"
                    name="orgName"
                    defaultValue={state?.payload?.orgName || ""}
                    placeholder="MORTAR Initiatives"
                    className={`${s.input} ${
                      state?.errors?.orgName ? s.inputErrorClass : ""
                    }`}
                  />
                </div>
                {state?.errors?.orgName && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {state.errors.orgName}
                  </div>
                )}
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

            <div className={s.disclosureContainer}>
              <div className={s.inputGroup}>
                <label className={s.label}>HubSpot Subscription Level *</label>
                <div className={s.selectWrapper}>
                  <select
                    name="subLevel"
                    value={subLevel}
                    onChange={(e) => setSubLevel(e.target.value)}
                    className={s.select}
                    style={{ paddingLeft: "16px" }}
                  >
                    {d.subscriptionLevels.map((level) => (
                      <option
                        key={level}
                        value={level}
                        className="bg-[#1B1F3A] text-white"
                      >
                        {level}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={s.inputGroup}>
                <label className={s.label}>
                  What HubSpot challenges are you trying to solve? *
                </label>
                <div className={s.challengesContainer}>
                  {d.hubspotChallenges.map((challenge) => {
                    const isChecked = challenges.includes(challenge.label);
                    return (
                      <div
                        key={challenge.id}
                        className={`${s.challengeRow} ${
                          isChecked ? s.challengeRowActive : ""
                        }`}
                        onClick={() => handleChallengeToggle(challenge.label)}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          readOnly
                          className={s.challengeCheckbox}
                        />
                        <span
                          className={`${s.challengeLabel} ${
                            isChecked ? s.challengeLabelActive : ""
                          }`}
                        >
                          {challenge.label}
                        </span>
                      </div>
                    );
                  })}
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
                    placeholder="Describe your project, goals, specific system architecture targets..."
                    className={s.textarea}
                    style={{ paddingLeft: "44px" }}
                  />
                </div>
              </div>
            </div>

            <div className={s.complianceBlock}>
              <p className="text-[13px] font-inter text-[#677489] mb-1.5 leading-relaxed">
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

              <p className="text-[13px] font-inter text-[#677489] mt-4 mb-1.5 leading-relaxed">
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
              Thank you, {state.submittedName}. Our operational diagnostic team
              has safely indexed your project scope parameters and will reach
              out to {state.submittedEmail} within 24 hours.
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
