"use client";

import { consultationData as d } from "@/app/hubspot/data/consultation";
import { consultationStyles as s } from "@/app/hubspot/styles/consultation";
import {
  Building2,
  CalendarCheck,
  CheckCircle2,
  Mail,
  Send,
  Target,
  User,
} from "lucide-react";
import { useState } from "react";

export default function HubSpotConsultationForm() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    orgName: "",
    orgType: d.organizationTypes[0],
    challenge: d.primaryChallenges[0],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="consultation" className={s.section}>
      <div className={s.bgBgDecor} />
      <div className={s.radialGlow} />

      <div className={s.container}>
        <div className={s.leftCol}>
          <span className={s.badge}>Intake Portal</span>
          <h2 className={s.heading}>{d.header.title}</h2>
          <p className={s.subtext}>{d.header.tagline}</p>

          <div className={s.bulletList}>
            <div className={s.bulletRow}>
              <CheckCircle2 className={s.bulletIcon} />
              <span>Tailored Technical Process Mapping Outlines</span>
            </div>
            <div className={s.bulletRow}>
              <CheckCircle2 className={s.bulletIcon} />
              <span>Prescriptive Architecture Optimization Roadmap</span>
            </div>
            <div className={s.bulletRow}>
              <CheckCircle2 className={s.bulletIcon} />
              <span>Direct Discovery Review with Core Solutions Team</span>
            </div>
          </div>
        </div>

        <div className={s.rightCol}>
          {formSubmitted ? (
            <div className={s.successCard}>
              <div className={s.successIconBox}>
                <CalendarCheck className="w-7 h-7" />
              </div>
              <h3 className={s.successTitle}>Consultation Initiated</h3>
              <p className={s.successDesc}>
                Thank you, {formData.fullName}. Your portal configuration
                parameters have been logged. We are preparing your diagnostic
                audit timeline strategy and will connect with your team shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={s.formCard}>
              <div className={s.formGrid}>
                <div className={s.inputGroup}>
                  <label className={s.label}>Full Name</label>
                  <div className={s.inputWrapper}>
                    <User className={s.inputIcon} />
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      className={s.input}
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className={s.inputGroup}>
                  <label className={s.label}>Work Email</label>
                  <div className={s.inputWrapper}>
                    <Mail className={s.inputIcon} />
                    <input
                      type="email"
                      required
                      placeholder="alex@organization.org"
                      className={s.input}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                  </div>
                </div>
              </div>

              <div className={s.formGrid}>
                <div className={s.inputGroup}>
                  <label className={s.label}>Organization Name</label>
                  <div className={s.inputWrapper}>
                    <Building2 className={s.inputIcon} />
                    <input
                      type="text"
                      required
                      placeholder="MORTAR Initiatives"
                      className={s.input}
                      value={formData.orgName}
                      onChange={(e) =>
                        setFormData({ ...formData, orgName: e.target.value })
                      }
                    />
                  </div>
                </div>

                <div className={s.inputGroup}>
                  <label className={s.label}>Organization Type</label>
                  <div className={s.selectWrapper}>
                    <Building2 className={s.inputIcon} />
                    <select
                      className={s.select}
                      value={formData.orgType}
                      onChange={(e) =>
                        setFormData({ ...formData, orgType: e.target.value })
                      }
                    >
                      {d.organizationTypes.map((type, idx) => (
                        <option key={idx} value={type}>
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
                    className={s.select}
                    value={formData.challenge}
                    onChange={(e) =>
                      setFormData({ ...formData, challenge: e.target.value })
                    }
                  >
                    {d.primaryChallenges.map((challenge, idx) => (
                      <option key={idx} value={challenge}>
                        {challenge}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <button type="submit" className={s.submitBtn}>
                Schedule Strategic Consultation
                <Send className="w-4 h-4 animate-pulse" />
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
