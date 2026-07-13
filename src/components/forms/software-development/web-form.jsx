"use client";

import { webFormData as d } from "@/data/forms/software-development/web-form";
import { webFormStyles as s } from "@/styles/forms/software-development/web-form";
import {
  Building2,
  CalendarCheck,
  ChevronDown,
  Mail,
  MessageSquare,
  Search,
  Send,
  ShieldAlert,
  User,
} from "lucide-react";
import Script from "next/script";
import { useEffect, useMemo, useRef, useState } from "react";
import countryList from "react-select-country-list";

export default function WebApplicationForm() {
  const dropdownRef = useRef(null);
  const recaptchaRef = useRef(null);
  const recaptchaWidgetId = useRef(null);
  const formRef = useRef(null);
  const stateRef = useRef({});
  const countryOptions = useMemo(() => countryList().getData(), []);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    orgName: "",
    orgType: d.organizationTypes[0],
    message: "",
  });

  const [selectedCountry, setSelectedCountry] = useState({
    value: "IN",
    label: "India",
  });
  const [showCountries, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [activeTargets, setActiveTargets] = useState([]);
  const [consentComm, setConsentComm] = useState(false);
  const [consentProc, setConsentProc] = useState(false);

  const [errors, setErrors] = useState({});
  const [isPending, setIsPending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [recaptchaReady, setRecaptchaReady] = useState(false);

  useEffect(() => {
    stateRef.current = {
      formData,
      selectedCountry,
      activeTargets,
      consentComm,
      consentProc,
    };
  });

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

  const performSubmit = async (token) => {
    const current = stateRef.current;
    const payload = {
      ...current.formData,
      dialCode: current.selectedCountry.value,
      selectedApps: current.activeTargets,
      consentCommunications: current.consentComm,
      consentProcessing: current.consentProc,
      honeyTrap: formRef.current?.honeyTrap?.value || "",
      captchaToken: token,
    };

    try {
      const response = await fetch("/api/lead/software-development/web-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        setErrors(result.errors || { global: "Data sync loop breakdown." });
      } else {
        setIsSuccess(true);
      }
    } catch (err) {
      setErrors({ global: "Network connection handshake reset." });
    } finally {
      setIsPending(false);
      if (window.grecaptcha && recaptchaWidgetId.current !== null) {
        window.grecaptcha.reset(recaptchaWidgetId.current);
      }
      setRecaptchaToken("");
    }
  };

  useEffect(() => {
    if (!recaptchaReady || !recaptchaRef.current) return;
    if (recaptchaWidgetId.current !== null) return;
    if (!window.grecaptcha || !window.grecaptcha.ready) return;

    window.grecaptcha.ready(() => {
      if (recaptchaWidgetId.current !== null || !recaptchaRef.current) return;
      recaptchaWidgetId.current = window.grecaptcha.render(
        recaptchaRef.current,
        {
          sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
          size: "invisible",
          badge: "bottomright",
          theme: "dark",
          callback: (token) => {
            setRecaptchaToken(token);
            performSubmit(token);
          },
          "expired-callback": () => setRecaptchaToken(""),
        },
      );
    });
  }, [recaptchaReady]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleTargetToggle = (target) => {
    setActiveTargets((prev) =>
      prev.includes(target)
        ? prev.filter((item) => item !== target)
        : [...prev, target],
    );
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (recaptchaWidgetId.current === null || !window.grecaptcha) return;
    setIsPending(true);
    setErrors({});
    window.grecaptcha.execute(recaptchaWidgetId.current);
  };

  const filteredCountries = countryOptions.filter(
    (c) =>
      c.label.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.value.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  return (
    <section id="WebLeadGen" className={s.section}>
      <Script
        src="https://www.google.com/recaptcha/api.js"
        strategy="afterInteractive"
        onLoad={() => setRecaptchaReady(true)}
      />
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
                <label className={errors.firstName ? s.labelError : s.label}>
                  First Name *
                </label>
                <div className={s.inputWrapper}>
                  <User
                    className={`${s.inputIcon} ${errors.firstName ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="firstName"
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
                <label className={errors.lastName ? s.labelError : s.label}>
                  Last Name *
                </label>
                <div className={s.inputWrapper}>
                  <User
                    className={`${s.inputIcon} ${errors.lastName ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="lastName"
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
                <label className={errors.email ? s.labelError : s.label}>
                  Email Address *
                </label>
                <div className={s.inputWrapper}>
                  <Mail
                    className={`${s.inputIcon} ${errors.email ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="email"
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
                <label className={errors.phone ? s.labelError : s.label}>
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
                              No allocations
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                  <input
                    type="tel"
                    name="phone"
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
                <label className={errors.orgName ? s.labelError : s.label}>
                  Organization Name *
                </label>
                <div className={s.inputWrapper}>
                  <Building2
                    className={`${s.inputIcon} ${errors.orgName ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="orgName"
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
                <label className={errors.orgType ? s.labelError : s.label}>
                  Organization Type *
                </label>
                <div className={s.selectWrapper}>
                  <select
                    name="orgType"
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
                  {d.webTargets.map((target) => {
                    const isChecked = activeTargets.includes(target);
                    return (
                      <div
                        key={target}
                        className={`${s.challengeRow} ${isChecked ? s.challengeRowActive : ""}`}
                        onClick={() => handleTargetToggle(target)}
                      >
                        <input
                          type="checkbox"
                          name="selectedApps"
                          value={target}
                          checked={isChecked}
                          readOnly
                          className={s.challengeCheckbox}
                        />
                        <span
                          className={`${s.challengeLabel} ${isChecked ? s.challengeLabelActive : ""}`}
                        >
                          {target}
                        </span>
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
                <label className={s.label}>Tell us about your project</label>
                <div className={s.inputWrapper}>
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A3B1CC] pointer-events-none" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your architecture requirements, goals, timeline parameters, and project scopes..."
                    className={s.textarea}
                    style={{ paddingLeft: "44px" }}
                  />
                </div>
              </div>
            </div>

            <div className={s.complianceBlock}>
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
                  I agree to receive alternate operational updates from Zylxy
                  Technologies.
                </span>
              </div>
              {errors.consentCommunications && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {errors.consentCommunications}
                </div>
              )}

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
                  I agree to allow Zylxy Technologies to process captured
                  contact field parameters. *
                </span>
              </div>
              {errors.consentProcessing && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {errors.consentProcessing}
                </div>
              )}

              <div className={s.recaptchaWrapper}>
                <div ref={recaptchaRef} />
              </div>
              {errors.captcha && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {errors.captcha}
                </div>
              )}
            </div>

            <div className={s.footerRow}>
              <p className={s.privacyFooter}>
                Data ingestion pipeline follows strict privacy protocols.
              </p>
              <div className={s.submitBtnWrapper}>
                <button
                  type="submit"
                  disabled={isPending}
                  className={s.submitBtn}
                >
                  {isPending ? "Syncing Grid..." : "Transmit Request"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

            {errors.global && (
              <div className={s.errorText}>
                <ShieldAlert className="w-4 h-4 shrink-0" />
                {errors.global}
              </div>
            )}
          </form>
        ) : (
          <div className={s.successCard}>
            <div className={s.formAccentBar} />
            <div className={s.successIconBox}>
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className={s.successTitle}>Inquiry System Synchronized</h3>
            <p className={s.successText}>
              Thank you, {formData.firstName.toUpperCase()}. Our software
              engineering cluster has indexed your web development context and
              will initiate communication channels at {formData.email} within 24
              hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
