"use client";

import { consultationFormData as d } from "@/app/hubspot/data/forms/consultationFormData";
import { consultationFormStyles as s } from "@/app/hubspot/styles/forms/consultationFormStyles";
import { useFormContext } from "@/context/FormContext";
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
import { useEffect, useState } from "react";

export default function HubSpotConsultationForm() {
  const {
    formData,
    selectedCountry,
    setSelectedCountry,
    showCountries,
    setShowCountryDropdown,
    countrySearch,
    setCountrySearch,
    activeTargets,
    consentComm,
    setConsentComm,
    consentProc,
    setConsentProc,
    errors,
    setErrors,
    isPending,
    setIsPending,
    isSuccess,
    setIsSuccess,
    countryOptions,
    dropdownRef,
    formRef,
    stateRef,
    handleInputChange,
    handleTargetToggle,
  } = useFormContext();

  const [ipAddress, setClientIp] = useState("127.0.0.1");

  useEffect(() => {
    async function resolveIp() {
      try {
        const response = await fetch("https://api.ipify.org?format=json");
        const data = await response.json();
        if (data?.ip) setClientIp(data.ip);
      } catch (e) {
        setClientIp("127.0.0.1");
      }
    }
    resolveIp();
  }, []);

  const performSubmit = async () => {
    const current = stateRef.current;
    const payload = {
      ...current.formData,
      dialCode: current.selectedCountry.value,
      selectedApps: current.activeTargets,
      consentCommunications: current.consentComm,
      consentProcessing: current.consentProc,
      honeyTrap: formRef.current?.honeyTrap?.value || "",
      clientIp: ipAddress,
    };

    try {
      const response = await fetch("/api/lead/ai-crm-solutions/hubspot-crm", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrors(
          result.errors || { global: "Data sync grid pipeline error loop." },
        );
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setErrors({ global: "Data containment interface connection timeout." });
    } finally {
      setIsPending(false);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsPending(true);
    setErrors({});
    performSubmit();
  };

  const filteredCountries = countryOptions.filter(
    (c) =>
      c.label.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.value.toLowerCase().includes(countrySearch.toLowerCase()),
  );

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
        </div>

        {!isSuccess ? (
          <form
            ref={formRef}
            onSubmit={handleFormSubmit}
            className={s.formCard}
          >
            <div className={s.formAccentBar} />

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
                <label htmlFor="firstName" className={errors.firstName ? s.labelError : s.label}>
                  First Name *
                </label>
                <div className={s.inputWrapper}>
                  <User
                    className={`${s.inputIcon} ${errors.firstName ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Your first name"
                    className={`${s.input} ${errors.firstName ? s.inputErrorClass : ""}`}
                  />
                </div>
                {errors.firstName && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.firstName}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label htmlFor="lastName" className={errors.lastName ? s.labelError : s.label}>
                  Last Name *
                </label>
                <div className={s.inputWrapper}>
                  <User
                    className={`${s.inputIcon} ${errors.lastName ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Your last name"
                    className={`${s.input} ${errors.lastName ? s.inputErrorClass : ""}`}
                  />
                </div>
                {errors.lastName && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.lastName}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label htmlFor="email" className={errors.email ? s.labelError : s.label}>
                  Email Address *
                </label>
                <div className={s.inputWrapper}>
                  <Mail
                    className={`${s.inputIcon} ${errors.email ? s.inputIconError : ""}`}
                  />
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="you@company.com"
                    className={`${s.input} ${errors.email ? s.inputErrorClass : ""}`}
                  />
                </div>
                {errors.email && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.email}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label htmlFor="phone" className={errors.phone ? s.labelError : s.label}>
                  Phone Number *
                </label>
                <div
                  className={`${s.phoneContainer} ${errors.phone ? s.phoneContainerError : ""}`}
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
                            placeholder="Search location..."
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
                              No locations aligned
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
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Verification contact sequence"
                    className={s.phoneInput}
                  />
                </div>
                {errors.phone && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.phone}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label htmlFor="orgName" className={errors.orgName ? s.labelError : s.label}>
                  Organization Name *
                </label>
                <div className={s.inputWrapper}>
                  <Building2
                    className={`${s.inputIcon} ${errors.orgName ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="orgName"
                    id="orgName"
                    value={formData.orgName}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className={`${s.input} ${errors.orgName ? s.inputErrorClass : ""}`}
                  />
                </div>
                {errors.orgName && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.orgName}
                  </div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label htmlFor="orgType" className={errors.orgType ? s.labelError : s.label}>
                  Organization Type *
                </label>
                <div className={s.selectWrapper}>
                  <select
                    name="orgType"
                    id="orgType"
                    value={formData.orgType}
                    onChange={handleInputChange}
                    className={`${s.select} ${errors.orgType ? s.inputErrorClass : ""}`}
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
                {errors.orgType && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.orgType}
                  </div>
                )}
              </div>
            </div>

            <div className={s.disclosureContainer}>
              <div className={s.inputGroup}>
                <label className={errors.selectedApps ? s.labelError : s.label}>
                  Select the Services You Need *
                </label>
                <div className={s.challengesContainer}>
                  {d.crmTargets.map((target) => {
                    const isChecked = activeTargets.includes(target);
                    return (
                      <div
                        key={target}
                        className={`${s.challengeRow} ${isChecked ? s.challengeRowActive : ""}`}
                      >
                        <input
                          type="checkbox"
                          name="selectedApps"
                          id={`target-${target}`}
                          value={target}
                          checked={isChecked}
                          onChange={() => handleTargetToggle(target)}
                          className={s.challengeCheckbox}
                        />
                        <label
                          htmlFor={`target-${target}`}
                          className={`${s.challengeLabel} ${isChecked ? s.challengeLabelActive : ""}`}
                        >
                          {target}
                        </label>
                      </div>
                    );
                  })}
                </div>
                {errors.selectedApps && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {errors.selectedApps}
                  </div>
                )}
              </div>
            </div>

            <div className={s.fullWidthField}>
              <div className={s.inputGroup}>
                <label htmlFor="message" className={s.label}>Tell us about your project</label>
                <div className={s.inputWrapper}>
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A3B1CC] pointer-events-none" />
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your data lifecycle operations, pipeline goals, reporting criteria, or support scopes..."
                    className={s.textarea}
                    style={{ paddingLeft: "44px" }}
                  />
                </div>
              </div>
            </div>

            <div className={s.complianceBlock}>
              <div className={s.complianceRow}>
                <input
                  type="checkbox"
                  id="consentCommHub"
                  checked={consentComm}
                  onChange={() => setConsentComm(!consentComm)}
                  className={s.complianceInput}
                />
                <label htmlFor="consentCommHub" className={s.complianceLabel}>
                  I agree to receive alternate operational updates from Zylxy
                  Technologies.
                </label>
              </div>
              {errors.consentCommunications && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {errors.consentCommunications}
                </div>
              )}

              <div className={s.complianceRow}>
                <input
                  type="checkbox"
                  id="consentProcHub"
                  checked={consentProc}
                  onChange={() => setConsentProc(!consentProc)}
                  className={s.complianceInput}
                />
                <label htmlFor="consentProcHub" className={s.complianceLabel}>
                  I agree to allow Zylxy Technologies to store and process my
                  personal data. *
                </label>
              </div>
              {errors.consentProcessing && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {errors.consentProcessing}
                </div>
              )}
            </div>

            {errors.global && (
              <div className={s.errorText}>
                <ShieldAlert className="w-4 h-4 shrink-0" />
                {errors.global}
              </div>
            )}

            <div className={s.footerRow}>
              <p className={s.privacyFooter}>
                We care about your privacy. Learn how we handle your data in our
                Privacy Policy.
              </p>
              <div className={s.submitBtnWrapper}>
                <button
                  type="submit"
                  disabled={isPending}
                  className={s.submitBtn}
                >
                  {isPending
                    ? "Connecting Ecosystem Core..."
                    : "Request a CRM Optimization Review"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>
          </form>
        ) : (
          <div className={s.successCard}>
            <div className={s.formAccentBar} />
            <div className={s.successIconBox}>
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className={s.successTitle}>Inquiry System Synchronized</h3>
            <p className={s.successText}>
              Thanks, {formData.firstName} {formData.lastName} — we've got your
              request. Our HubSpot solutions pool is analyzing your setup data
              parameters now and will connect to {formData.email} within 24
              hours.
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
