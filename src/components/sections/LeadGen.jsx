"use client";

import { leadGenData } from "@/data/leadGenData";
import { leadGenStyles } from "@/styles/sections/leadGen";
import { useState } from "react";

export default function LeadGenSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fieldErrors, setFieldErrors] = useState({});

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    if (fieldErrors[k]) {
      setFieldErrors((prev) => ({ ...prev, [k]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();

    const errors = {};
    const sanitizedName = form.name.trim().toUpperCase();
    const sanitizedEmail = form.email.trim();
    const sanitizedPhone = form.phone.trim();

    if (!sanitizedName) {
      errors.name = "Full name is required.";
    } else if (sanitizedName.length < 2) {
      errors.name = "Please enter a valid name layout.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!sanitizedEmail) {
      errors.email = "Email address is required.";
    } else if (!emailRegex.test(sanitizedEmail)) {
      errors.email = "Please enter a valid email address.";
    }

    const digitsOnly = sanitizedPhone.replace(/\D/g, "");
    if (!sanitizedPhone) {
      errors.phone = "Phone number is required.";
    } else if (digitsOnly.length < 10) {
      errors.phone = "Phone number must be at least 10 digits.";
    }

    if (!form.service) {
      errors.service = "Please select a service option.";
    }

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setLoading(true);
    setFieldErrors({});

    const processedData = {
      ...form,
      name: sanitizedName,
      email: sanitizedEmail,
      phone: sanitizedPhone,
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

      setSubmittedName(sanitizedName);
      setSubmittedEmail(sanitizedEmail);
      setSent(true);
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setFieldErrors({ global: "An error occurred. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const cleanPillText = leadGenData.header.pillText.replace(/^[-\s]+/, "");

  return (
    <section id="leadgen-section" className={leadGenStyles.section}>
      <div className={leadGenStyles.backgroundEffects} />
      <div className={leadGenStyles.wrapper}>
        <div className={leadGenStyles.headerContainer}>
          <div className={leadGenStyles.pillLine}>
            <div className={leadGenStyles.pillLineBar} />
            <span className={leadGenStyles.pillText}>{cleanPillText}</span>
          </div>
          <h2 className={leadGenStyles.mainHeading}>
            {leadGenData.header.mainHeading}
          </h2>
          <p className={leadGenStyles.subHeading}>
            {leadGenData.header.subHeading}
          </p>
        </div>

        {!sent ? (
          <div className={leadGenStyles.formCard}>
            <div className={leadGenStyles.grid}>
              <div>
                <label
                  className={
                    fieldErrors.name
                      ? leadGenStyles.labelError
                      : focused === "name"
                        ? leadGenStyles.labelFocused
                        : leadGenStyles.label
                  }
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => set("name", e.target.value)}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                  placeholder="Your full name"
                  className={`${leadGenStyles.input} ${
                    fieldErrors.name ? leadGenStyles.inputError : ""
                  }`}
                />
                {fieldErrors.name && (
                  <div className={leadGenStyles.errorText}>
                    <span className="inline-block text-sm">⚠️</span>
                    {fieldErrors.name}
                  </div>
                )}
              </div>

              <div>
                <label
                  className={
                    fieldErrors.email
                      ? leadGenStyles.labelError
                      : focused === "email"
                        ? leadGenStyles.labelFocused
                        : leadGenStyles.label
                  }
                >
                  Email Address *
                </label>
                <input
                  type="text"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                  placeholder="you@company.com"
                  className={`${leadGenStyles.input} ${
                    fieldErrors.email ? leadGenStyles.inputError : ""
                  }`}
                />
                {fieldErrors.email && (
                  <div className={leadGenStyles.errorText}>
                    <span className="inline-block text-sm">⚠️</span>
                    {fieldErrors.email}
                  </div>
                )}
              </div>

              <div>
                <label
                  className={
                    fieldErrors.phone
                      ? leadGenStyles.labelError
                      : focused === "phone"
                        ? leadGenStyles.labelFocused
                        : leadGenStyles.label
                  }
                >
                  Phone Number *
                </label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                  placeholder="+91 _____ _____"
                  className={`${leadGenStyles.input} ${
                    fieldErrors.phone ? leadGenStyles.inputError : ""
                  }`}
                />
                {fieldErrors.phone && (
                  <div className={leadGenStyles.errorText}>
                    <span className="inline-block text-sm">⚠️</span>
                    {fieldErrors.phone}
                  </div>
                )}
              </div>

              <div>
                <label
                  className={
                    fieldErrors.service
                      ? leadGenStyles.labelError
                      : focused === "service"
                        ? leadGenStyles.labelFocused
                        : leadGenStyles.label
                  }
                >
                  Service Needed *
                </label>
                <select
                  value={form.service}
                  onChange={(e) => set("service", e.target.value)}
                  onFocus={() => setFocused("service")}
                  onBlur={() => setFocused(null)}
                  className={`${leadGenStyles.select} ${
                    fieldErrors.service ? leadGenStyles.inputError : ""
                  }`}
                  style={{
                    color: form.service ? "#FFFFFF" : "rgba(255,255,255,0.4)",
                    backgroundImage:
                      'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%228%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20d%3D%22M1%201l5%205%205-5%22%20stroke%3D%22rgba(255,255,255,0.4)%22%20stroke-width%3D%221.5%22%20fill%3D%22none%22%20stroke-linecap%3D%22round%22%2F%3E%3C%2Fsvg%3E")',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 14px center",
                  }}
                >
                  <option value="" className="bg-[#050E21] text-white">
                    Select a service...
                  </option>
                  {leadGenData.services.map((o) => (
                    <option
                      key={o}
                      value={o}
                      className="bg-[#050E21] text-white"
                    >
                      {o}
                    </option>
                  ))}
                </select>
                {fieldErrors.service && (
                  <div className={leadGenStyles.errorText}>
                    <span className="inline-block text-sm">⚠️</span>
                    {fieldErrors.service}
                  </div>
                )}
              </div>
            </div>

            <div className={leadGenStyles.fullWidthField}>
              <label
                className={
                  focused === "message"
                    ? leadGenStyles.labelFocused
                    : leadGenStyles.label
                }
              >
                Tell us about your project
              </label>
              <textarea
                value={form.message}
                onChange={(e) => set("message", e.target.value)}
                onFocus={() => setFocused("message")}
                onBlur={() => setFocused(null)}
                placeholder="Describe your project, goals, or questions..."
                className={leadGenStyles.textarea}
              />
            </div>

            <div className={leadGenStyles.footerRow}>
              <div className={leadGenStyles.checkmarksRow}>
                {leadGenData.features.map((feature) => (
                  <div key={feature} className={leadGenStyles.checkItem}>
                    <span className={leadGenStyles.checkIcon}>✓</span>
                    <span className={leadGenStyles.checkText}>{feature}</span>
                  </div>
                ))}
              </div>
              <button
                type="button"
                onClick={handleSubmit}
                disabled={loading}
                className={leadGenStyles.submitBtn}
                style={{
                  opacity: loading ? 0.6 : 1,
                  cursor: loading ? "not-allowed" : "pointer",
                }}
              >
                {loading ? "Sending..." : "Send My Request →"}
              </button>
            </div>
            {fieldErrors.global && (
              <div
                style={{
                  color: "#ff6b6b",
                  marginTop: "12px",
                  fontSize: "14px",
                  fontFamily: "var(--font-inter)",
                }}
              >
                {fieldErrors.global}
              </div>
            )}
          </div>
        ) : (
          <div className={leadGenStyles.successCard}>
            <div className={leadGenStyles.successIcon}>✉️</div>
            <h3 className={leadGenStyles.successTitle}>
              We've received your request.
            </h3>
            <p className={leadGenStyles.successText}>
              Thank you, {submittedName}. Our team will reach out to{" "}
              {submittedEmail} within 24 hours.
            </p>
          </div>
        )}

        <div className={leadGenStyles.contactRow}>
          {leadGenData.contacts.map((contact) => (
            <div key={contact.label} className={leadGenStyles.contactItem}>
              <span className={leadGenStyles.contactIcon}>{contact.icon}</span>
              <div>
                <div className={leadGenStyles.contactLabel}>
                  {contact.label}
                </div>
                <div className={leadGenStyles.contactValue}>
                  {contact.value}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
