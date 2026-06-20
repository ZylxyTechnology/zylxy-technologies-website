"use client";

import { unifiedLeadGenData as d } from "@/data/unifiedLeadGenData";
import { unifiedFormStyles as s } from "@/styles/sections/unifiedForm";
import { countries } from "countries-list";
import {
  Briefcase,
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
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const globalCountryList = Object.entries(countries)
  .map(([code, countryData]) => ({
    code: code.toUpperCase(),
    dial: `+${Array.isArray(countryData.phone) ? countryData.phone[0] : countryData.phone}`,
    name: countryData.name,
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export default function UnifiedFormSection() {
  const pathname = usePathname();
  const isHubSpotRoute = pathname?.startsWith("/hubspot");
  const formRef = useRef(null);
  const dropdownRef = useRef(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    orgName: "",
    orgType: d.organizationTypes[0],
    subLevel: d.subscriptionLevels[0],
    challengesToSolve: [],
    consentCommunications: false,
    consentProcessing: false,
    honeyTrap: "",
  });

  const defaultCountry =
    globalCountryList.find((c) => c.code === "IN") || globalCountryList[0];
  const [activeCountry, setActiveCountry] = useState(defaultCountry);
  const [showCountries, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [sent, setSent] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  useEffect(() => {
    const defaultIndia = globalCountryList.find((c) => c.code === "IN");
    if (defaultIndia) setActiveCountry(defaultIndia);
  }, []);

  useEffect(() => {
    if (isHubSpotRoute) {
      setForm((prev) => ({ ...prev, service: "HubSpot CRM" }));
    }
  }, [isHubSpotRoute]);

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

  const activeHeader = isHubSpotRoute ? d.hubspotHeader : d.header;
  const isHubSpotSelected = form.service === "HubSpot CRM";

  const handleChange = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (fieldErrors[key]) {
      setFieldErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleChallengeToggle = (label) => {
    setForm((prev) => {
      const current = prev.challengesToSolve;
      const updated = current.includes(label)
        ? current.filter((item) => item !== label)
        : [...current, label];
      return { ...prev, challengesToSolve: updated };
    });
  };

  const handleValidation = () => {
    const errors = {};
    const cleanName = form.name.trim();
    const cleanEmail = form.email.trim();
    const cleanPhone = form.phone.trim();

    if (!cleanName) {
      errors.name =
        "Please provide your full name to initialize the inquiry profile.";
    } else if (cleanName.length < 2) {
      errors.name =
        "Please enter a valid full name configuration (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      errors.email =
        "A valid email address is required to ensure secure communication routing.";
    } else if (!emailRegex.test(cleanEmail)) {
      errors.email =
        "Please provide a correctly formatted corporate or personal email address.";
    }

    const digits = cleanPhone.replace(/\D/g, "");
    if (!cleanPhone) {
      errors.phone =
        "An operational phone number is required to finalize your verification routing.";
    } else if (digits.length < 6) {
      errors.phone =
        "The provided phone parameter sequence is incomplete. Please check and try again.";
    }

    if (!form.service) {
      errors.service =
        "Please select an operational service track parameter from the dropdown selection.";
    }

    if (isHubSpotSelected) {
      if (!form.orgName.trim()) {
        errors.orgName =
          "Organization name identification is required for setting up HubSpot diagnostics.";
      }
    }

    if (!form.consentCommunications) {
      errors.consentCommunications =
        "Please confirm your communication preferences by checking the box.";
    }

    if (!form.consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent to store and process personal data.";
    }

    return errors;
  };

  const handleSubmitAttempt = (e) => {
    e.preventDefault();

    if (form.honeyTrap !== "") {
      setSubmittedName(form.name.trim().toUpperCase());
      setSubmittedEmail(form.email.trim());
      setSent(true);
      return;
    }

    const validationErrors = handleValidation();
    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setLoading(true);
    setFieldErrors({});
    executeFormSubmission();
  };

  const executeFormSubmission = async () => {
    const processedData = {
      ...form,
      name: form.name.trim().toUpperCase(),
      email: form.email.trim(),
      phone: `${activeCountry.dial} ${form.phone.trim()}`,
      isHubSpotFormContext: isHubSpotRoute,
    };

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(processedData),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Submission failure.");
      }

      setSubmittedName(processedData.name);
      setSubmittedEmail(processedData.email);
      setSent(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        service: isHubSpotRoute ? "HubSpot CRM" : "",
        message: "",
        orgName: "",
        orgType: d.organizationTypes[0],
        subLevel: d.subscriptionLevels[0],
        challengesToSolve: [],
        consentCommunications: false,
        consentProcessing: false,
        honeyTrap: "",
      });
    } catch (err) {
      setFieldErrors({
        global:
          err.message ||
          "An operational delivery error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const renderIcon = (type) => {
    const cls = "w-4 h-4";
    switch (type) {
      case "whatsapp":
        return <MessageCircle className={cls} />;
      case "email":
        return <Mail className={cls} />;
      case "linkedin":
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
      case "facebook":
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
      case "behance":
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
      default:
        return null;
    }
  };

  const filteredCountries = globalCountryList.filter(
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
            <span className={s.pillText}>{activeHeader.pillText}</span>
          </div>
          <h2 className={s.mainHeading}>{activeHeader.mainHeading}</h2>
          <p className={s.subHeading}>{activeHeader.subHeading}</p>

          {isHubSpotRoute && activeHeader.bullets && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mt-4 flex-wrap w-full max-w-[720px]">
              {activeHeader.bullets.map((bullet, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 text-xs font-semibold text-[#A3B1CC] tracking-wide bg-white/5 border border-white/5 px-3 py-1.5 rounded-full shadow-2xs"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7A59]" />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {!sent ? (
          <form
            ref={formRef}
            onSubmit={handleSubmitAttempt}
            className={s.formCard}
          >
            <div className={s.formAccentBar} />

            <div style={{ display: "none" }} aria-hidden="true">
              <input
                type="text"
                name="validation_trap_honey"
                value={form.honeyTrap}
                onChange={(e) => handleChange("honeyTrap", e.target.value)}
                tabIndex="-1"
                autoComplete="off"
              />
            </div>

            <div className={s.grid}>
              <div className={s.inputGroup}>
                <label className={fieldErrors.name ? s.labelError : s.label}>
                  Full Name *
                </label>
                <div className={s.inputWrapper}>
                  <User
                    className={`${s.inputIcon} ${fieldErrors.name ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="Your full name"
                    className={`${s.input} ${fieldErrors.name ? s.inputErrorClass : ""}`}
                  />
                </div>
                {fieldErrors.name && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {fieldErrors.name}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label className={fieldErrors.email ? s.labelError : s.label}>
                  Email Address *
                </label>
                <div className={s.inputWrapper}>
                  <Mail
                    className={`${s.inputIcon} ${fieldErrors.email ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="you@company.com"
                    className={`${s.input} ${fieldErrors.email ? s.inputErrorClass : ""}`}
                  />
                </div>
                {fieldErrors.email && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {fieldErrors.email}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label className={fieldErrors.phone ? s.labelError : s.label}>
                  Phone Number *
                </label>
                <div
                  className={`${s.phoneContainer} ${fieldErrors.phone ? s.phoneContainerError : ""}`}
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
                                className={`${s.countryOption} ${activeCountry.code === country.code ? s.countryOptionActive : ""}`}
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
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="95538 86216"
                    className={s.phoneInput}
                  />
                </div>
                {fieldErrors.phone && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {fieldErrors.phone}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label className={fieldErrors.service ? s.labelError : s.label}>
                  Service Needed *
                </label>
                <div className={s.selectWrapper}>
                  <Briefcase
                    className={`${s.inputIcon} ${fieldErrors.service ? s.inputIconError : ""}`}
                  />
                  <select
                    value={form.service}
                    onChange={(e) => handleChange("service", e.target.value)}
                    className={`${s.select} ${fieldErrors.service ? s.inputErrorClass : ""}`}
                    style={{
                      color: form.service ? "#FFFFFF" : "rgba(255,255,255,0.3)",
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
                {fieldErrors.service && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {fieldErrors.service}
                  </div>
                )}
              </div>
            </div>

            {isHubSpotSelected && (
              <div className={s.disclosureContainer}>
                <div className={s.grid}>
                  <div className={s.inputGroup}>
                    <label
                      className={fieldErrors.orgName ? s.labelError : s.label}
                    >
                      Organization Name *
                    </label>
                    <div className={s.inputWrapper}>
                      <Building2
                        className={`${s.inputIcon} ${fieldErrors.orgName ? s.inputIconError : ""}`}
                      />
                      <input
                        type="text"
                        value={form.orgName}
                        onChange={(e) =>
                          handleChange("orgName", e.target.value)
                        }
                        placeholder="MORTAR Initiatives"
                        className={`${s.input} ${fieldErrors.orgName ? s.inputErrorClass : ""}`}
                      />
                    </div>
                    {fieldErrors.orgName && (
                      <div className={s.errorText}>
                        <ShieldAlert className="w-4 h-4 shrink-0" />
                        {fieldErrors.orgName}
                      </div>
                    )}
                  </div>

                  <div className={s.inputGroup}>
                    <label className={s.label}>Organization Type</label>
                    <div className={s.selectWrapper}>
                      <Building2 className={s.inputIcon} />
                      <select
                        value={form.orgType}
                        onChange={(e) =>
                          handleChange("orgType", e.target.value)
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
                </div>

                <div className={s.inputGroup}>
                  <label className={s.label}>
                    HubSpot Subscription Level *
                  </label>
                  <div className={s.selectWrapper}>
                    <Briefcase className={s.inputIcon} />
                    <select
                      value={form.subLevel}
                      onChange={(e) => handleChange("subLevel", e.target.value)}
                      className={s.select}
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
                      const isChecked = form.challengesToSolve.includes(
                        challenge.label,
                      );
                      return (
                        <div
                          key={challenge.id}
                          className={`${s.challengeRow} ${isChecked ? s.challengeRowActive : ""}`}
                          onClick={() => handleChallengeToggle(challenge.label)}
                        >
                          <input
                            type="checkbox"
                            checked={isChecked}
                            readOnly
                            className={s.challengeCheckbox}
                          />
                          <span
                            className={`${s.challengeLabel} ${isChecked ? s.challengeLabelActive : ""}`}
                          >
                            {challenge.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            <div className={s.fullWidthField}>
              <div className={s.inputGroup}>
                <label className={s.label}>Tell us about your project</label>
                <div className={s.inputWrapper}>
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A3B1CC] pointer-events-none" />
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Describe your project, goals, specific system architecture targets or parameters..."
                    className={s.textarea}
                    style={{ paddingLeft: "44px" }}
                  />
                </div>
              </div>
            </div>

            <div className={s.complianceBlock}>
              <p className="text-[13px] font-inter text-[#A3B1CC] mb-1.5 opacity-90 leading-relaxed">
                By checking the boxes below, you agree to receive communications
                from Zylxy Technologies. You can unsubscribe anytime.
              </p>
              <div
                className={s.complianceRow}
                onClick={() =>
                  handleChange(
                    "consentCommunications",
                    !form.consentCommunications,
                  )
                }
              >
                <input
                  type="checkbox"
                  checked={form.consentCommunications}
                  readOnly
                  className={s.complianceInput}
                />
                <span className={s.complianceLabel}>
                  I agree to receive other communications from Zylxy
                  Technologies.
                </span>
              </div>
              {fieldErrors.consentCommunications && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {fieldErrors.consentCommunications}
                </div>
              )}

              <p className="text-[13px] font-inter text-[#A3B1CC] mt-4 mb-1.5 opacity-90 leading-relaxed">
                To process your request, we need your permission to store and
                process your personal data. Please check the box below to
                confirm your consent:
              </p>
              <div
                className={s.complianceRow}
                onClick={() =>
                  handleChange("consentProcessing", !form.consentProcessing)
                }
              >
                <input
                  type="checkbox"
                  checked={form.consentProcessing}
                  readOnly
                  className={s.complianceInput}
                />
                <span className={s.complianceLabel}>
                  I agree to allow Zylxy Technologies to store and process my
                  personal data. *
                </span>
              </div>
              {fieldErrors.consentProcessing && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {fieldErrors.consentProcessing}
                </div>
              )}
            </div>

            <div className={s.footerRow}>
              <p className={s.privacyFooter}>
                We care about your privacy. Learn how we handle your data in our
                Privacy Policy.
              </p>
              <div className={s.submitBtnWrapper}>
                <button
                  type="submit"
                  disabled={loading}
                  className={s.submitBtn}
                >
                  {loading ? "Sending..." : "Send My Request"}
                  <Send className="w-4 h-4 animate-pulse" />
                </button>
              </div>
            </div>

            {fieldErrors.global && (
              <div className={s.errorText}>
                <ShieldAlert className="w-4 h-4 shrink-0" />
                {fieldErrors.global}
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
              Thank you, {submittedName}. Our operational diagnostic team has
              safely indexed your project scope parameters and will reach out to{" "}
              {submittedEmail} within 24 hours.
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
