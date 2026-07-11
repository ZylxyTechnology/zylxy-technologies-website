"use client";

import { submitMobileLeadAction } from "@/actions/software-development/mobileFormAction";
import { mobileFormData as d } from "@/data/forms/software-development/mobile-form";
import { mobileFormStyles as s } from "@/styles/forms/software-development/mobile-form";
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
import { useActionState, useEffect, useMemo, useRef, useState } from "react";
import countryList from "react-select-country-list";

export default function MobileApplicationForm() {
  const dropdownRef = useRef(null);
  const countryOptions = useMemo(() => countryList().getData(), []);

  const [state, formAction, isPending] = useActionState(
    submitMobileLeadAction,
    {
      success: false,
      errors: {},
      payload: {},
    },
  );

  const [selectedCountry, setSelectedCountry] = useState({
    value: "IN",
    label: "India",
  });
  const [showCountries, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [activeApps, setActiveApps] = useState([]);
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

  const handleAppToggle = (app) => {
    setActiveApps((prev) =>
      prev.includes(app) ? prev.filter((item) => item !== app) : [...prev, app],
    );
  };

  const filteredCountries = countryOptions.filter(
    (c) =>
      c.label.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.value.toLowerCase().includes(countrySearch.toLowerCase()),
  );

  return (
    <section id="MobileLeadGen" className={s.section}>
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

            <input
              type="hidden"
              name="countryCode"
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
                    className={`${s.inputIcon} ${state?.errors?.name ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="name"
                    defaultValue={state?.payload?.name || ""}
                    placeholder="Your full name"
                    className={`${s.input} ${state?.errors?.name ? s.inputErrorClass : ""}`}
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
                    className={`${s.inputIcon} ${state?.errors?.email ? s.inputIconError : ""}`}
                  />
                  <input
                    type="text"
                    name="email"
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

              <div className={s.inputGroup}>
                <label
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

              <div
                className={s.inputGroup}
                style={{ gridColumn: "span 2 / span 2" }}
              >
                <label className={s.label}>Organization Type</label>
                <div className={s.selectWrapper}>
                  <select
                    name="orgType"
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
            </div>

            <div className={s.disclosureContainer}>
              <div className={s.inputGroup}>
                <label
                  className={
                    state?.errors?.selectedApps ? s.labelError : s.label
                  }
                >
                  Select the Services You Need *
                </label>
                <div className={s.challengesContainer}>
                  {d.appTargets.map((app) => {
                    const isChecked = activeApps.includes(app);
                    return (
                      <div
                        key={app}
                        className={`${s.challengeRow} ${isChecked ? s.challengeRowActive : ""}`}
                        onClick={() => handleAppToggle(app)}
                      >
                        <input
                          type="checkbox"
                          name="selectedApps"
                          value={app}
                          checked={isChecked}
                          readOnly
                          className={s.challengeCheckbox}
                        />
                        <span
                          className={`${s.challengeLabel} ${isChecked ? s.challengeLabelActive : ""}`}
                        >
                          {app}
                        </span>
                      </div>
                    );
                  })}
                </div>
                {state?.errors?.selectedApps && (
                  <div className={s.errorText}>
                    <ShieldAlert className="w-4 h-4 shrink-0" />
                    {state.errors.selectedApps}
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
                    defaultValue={state?.payload?.message || ""}
                    placeholder="Describe your project, use cases, target store platforms, and expected ecosystem integration boundaries..."
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
              {state?.errors?.consentCommunications && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {state.errors.consentCommunications}
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
              {state?.errors?.consentProcessing && (
                <div className={s.errorText}>
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  {state.errors.consentProcessing}
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
                  {isPending ? "Syncing Grid..." : "Send Request"}
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
          <div className={s.successCard}>
            <div className={s.formAccentBar} />
            <div className={s.successIconBox}>
              <CalendarCheck className="w-7 h-7" />
            </div>
            <h3 className={s.successTitle}>Inquiry System Synchronized</h3>
            <p className={s.successText}>
              Thank you, {state.submittedName}. Our mobile engineering layer has
              safely indexed your application parameters and will open
              communication tracks at {state.submittedEmail} within 24 hours.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
