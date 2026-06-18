"use client";

import { unifiedLeadGenData as d } from "@/data/unifiedLeadGenData";
import { unifiedFormStyles as s } from "@/styles/sections/unifiedForm";
import {
  Briefcase,
  Building2,
  CalendarCheck,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Target,
  User,
} from "lucide-react";
import { useState } from "react";

export default function UnifiedFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
    orgName: "",
    orgType: d.organizationTypes[0],
    challenge: d.primaryChallenges[0],
  });

  const [sent, setSent] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const handleChange = (key, val) => {
    setForm((prev) => ({ ...prev, [key]: val }));
    if (fieldErrors[key]) {
      setFieldErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const handleValidation = () => {
    const errors = {};
    const cleanName = form.name.trim();
    const cleanEmail = form.email.trim();
    const cleanPhone = form.phone.trim();

    if (!cleanName) {
      errors.name = "Full name is required.";
    } else if (cleanName.length < 2) {
      errors.name = "Please enter a valid full name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!cleanEmail) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(cleanEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    const digits = cleanPhone.replace(/\D/g, "");
    if (!cleanPhone) {
      errors.phone = "Phone number is required.";
    } else if (digits.length < 10) {
      errors.phone = "Phone number must be at least 10 digits.";
    }

    if (!form.service) {
      errors.service = "Please select an operational service options channel.";
    }

    if (form.service === "HubSpot CRM") {
      if (!form.orgName.trim()) {
        errors.orgName =
          "Organization name is required for HubSpot environments.";
      }
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = handleValidation();

    if (Object.keys(validationErrors).length > 0) {
      setFieldErrors(validationErrors);
      return;
    }

    setLoading(true);
    setFieldErrors({});

    const processedData = {
      ...form,
      name: form.name.trim().toUpperCase(),
      email: form.email.trim(),
      phone: form.phone.trim(),
    };

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbwy19C-MAy03kBPLjg0lhnLJcvQxfypH0c19wrNR1GcaPvWPhme2PyjtuYahZgqu9mflQ/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain",
          },
          body: JSON.stringify(processedData),
        },
      );

      setSubmittedName(processedData.name);
      setSubmittedEmail(processedData.email);
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
        orgName: "",
        orgType: d.organizationTypes[0],
        challenge: d.primaryChallenges[0],
      });
    } catch (err) {
      setFieldErrors({
        global: "An operational delivery error occurred. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const isHubSpotSelected = form.service === "HubSpot CRM";

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

        {!sent ? (
          <form onSubmit={handleSubmit} className={s.formCard}>
            <div className={s.formAccentBar} />

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
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    placeholder="Your full name"
                    className={`${s.input} ${fieldErrors.name ? s.inputErrorClass : ""}`}
                  />
                </div>
                {fieldErrors.name && (
                  <div className={s.errorText}>{fieldErrors.name}</div>
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
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused(null)}
                    placeholder="you@company.com"
                    className={`${s.input} ${fieldErrors.email ? s.inputErrorClass : ""}`}
                  />
                </div>
                {fieldErrors.email && (
                  <div className={s.errorText}>{fieldErrors.email}</div>
                )}
              </div>

              <div className={s.inputGroup}>
                <label className={fieldErrors.phone ? s.labelError : s.label}>
                  Phone Number *
                </label>
                <div className={s.inputWrapper}>
                  <Phone
                    className={`${s.inputIcon} ${fieldErrors.phone ? s.inputIconError : ""}`}
                  />
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    placeholder="+91 _____ _____"
                    className={`${s.input} ${fieldErrors.phone ? s.inputErrorClass : ""}`}
                  />
                </div>
                {fieldErrors.phone && (
                  <div className={s.errorText}>{fieldErrors.phone}</div>
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
                    onFocus={() => setFocused("service")}
                    onBlur={() => setFocused(null)}
                    className={`${s.select} ${fieldErrors.service ? s.inputErrorClass : ""}`}
                    style={{
                      color: form.service ? "#FFFFFF" : "rgba(255,255,255,0.3)",
                    }}
                  >
                    <option value="" className="bg-[#1B1F3A] text-white">
                      Select a service...
                    </option>
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
                  <div className={s.errorText}>{fieldErrors.service}</div>
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
                      <div className={s.errorText}>{fieldErrors.orgName}</div>
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
                  <label className={s.label}>Primary HubSpot Bottleneck</label>
                  <div className={s.selectWrapper}>
                    <Target className={s.inputIcon} />
                    <select
                      value={form.challenge}
                      onChange={(e) =>
                        handleChange("challenge", e.target.value)
                      }
                      className={s.select}
                    >
                      {d.primaryChallenges.map((challenge) => (
                        <option
                          key={challenge}
                          value={challenge}
                          className="bg-[#1B1F3A] text-white"
                        >
                          {challenge}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            )}

            <div className={s.fullWidthField}>
              <div className={s.inputGroup}>
                <label className={s.label}>Tell us about your project</label>
                <div className={s.inputWrapper}>
                  <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-[#A3B1CC] pointer-events-none group-focus-within/field:text-[#FF7A59]" />
                  <textarea
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Describe your project, goals, specific system architecture targets or parameters..."
                    className={s.textarea}
                    style={{ paddingLeft: "44px" }}
                  />
                </div>
              </div>
            </div>

            <div className={s.footerRow}>
              <div className={s.checkmarksRow}>
                {d.features.map((feature) => (
                  <div key={feature} className={s.checkItem}>
                    <span className={s.checkIcon}>✓</span>
                    <span className={s.checkText}>{feature}</span>
                  </div>
                ))}
              </div>
              <button type="submit" disabled={loading} className={s.submitBtn}>
                {loading ? "Sending..." : "Send My Request"}
                <Send className="w-4 h-4 animate-pulse" />
              </button>
            </div>

            {fieldErrors.global && (
              <div className={s.errorText}>{fieldErrors.global}</div>
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
            <div key={contact.label} className={s.contactItem}>
              <span className={s.contactIcon}>{contact.icon}</span>
              <div>
                <div className={s.contactLabel}>{contact.label}</div>
                <div className={s.contactValue}>{contact.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
