"use client";

import { useTalentEcosystem } from "@/app/context/TalentEcosystemContext";
import { talentAcquisitionData } from "@/data/services/recruitment-services/talent-acquisition/talent-acquisitionData";
import { talentAcquisitionStyles } from "@/styles/services/recruitment-services/talent-acquisition/talent-acquisition";
import { useState } from "react";

export default function TalentAcquisitionPage() {
  const { hero, services, benefits, process, formConfig, cta } =
    talentAcquisitionData;
  const s = talentAcquisitionStyles;

  const { status, setStatus, isSubmitting, dispatchFormSubmission } =
    useTalentEcosystem();

  const [formData, setFormData] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    jobTitle: "",
    location: "",
    experience: "",
    salaryRange: "",
    openings: "",
    timeline: "",
    skills: "",
    description: "",
    screeningQuestions: "",
    additionalNotes: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.companyName ||
      !formData.contactPerson ||
      !formData.email ||
      !formData.phone ||
      !formData.jobTitle ||
      !formData.location ||
      !formData.experience ||
      !formData.timeline ||
      !formData.skills ||
      !formData.description
    ) {
      setStatus({
        type: "error",
        message: "Please fill out all required fields.",
      });
      return;
    }

    if (!formConfig.validationRules.emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please provide a valid business email address.",
      });
      return;
    }

    const success = await dispatchFormSubmission("corporate", formData);
    if (success) {
      setFormData({
        companyName: "",
        contactPerson: "",
        email: "",
        phone: "",
        jobTitle: "",
        location: "",
        experience: "",
        salaryRange: "",
        openings: "",
        timeline: "",
        skills: "",
        description: "",
        screeningQuestions: "",
        additionalNotes: "",
      });
    }
  };

  return (
    <main className="bg-[#050E21] min-h-screen text-white selection:bg-[#2563EB]/30">
      <section className={s.heroContainer}>
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <span className={s.heroBadge}>{hero.badge}</span>
          <h1 className={s.heroHeading}>
            {hero.heading.textBefore}
            <span className={s.heroGradient}>Explore opportunities</span>
            {hero.heading.textAfter}
          </h1>
          <p className={s.heroTarget || s.heroDesc}>
            Deploy your active mandates directly into our assessment tracker
            ecosystem.
          </p>
          <p className={s.heroSubDesc}>{hero.descriptionSecondary}</p>
          <a href={`#${formConfig.id}`} className={s.heroBtn}>
            Launch Job Mandate
          </a>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.headerRow}>
            <div className={s.titleArea}>
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>{services.title}</span>
              </div>
              <h2 className={s.mainHeading}>{services.heading}</h2>
            </div>
          </div>
          <div className={s.servicesGrid}>
            {services.items.map((item, index) => (
              <div key={index} className={s.serviceCard}>
                <span className={s.serviceIcon}>{item.icon}</span>
                <h3 className={s.serviceTitle}>{item.title}</h3>
                <p className={s.serviceDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.headerRow}>
            <div className={s.titleArea}>
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>{benefits.title}</span>
              </div>
              <h2 className={s.mainHeading}>{benefits.heading}</h2>
            </div>
          </div>
          <div className={s.servicesGrid}>
            {benefits.list.map((item, index) => (
              <div key={index} className={s.serviceCard}>
                <h3 className={s.serviceTitle}>{item.title}</h3>
                <p className={s.serviceDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.headerRow}>
            <div className={s.titleArea}>
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>{process.title}</span>
              </div>
              <h2 className={s.mainHeading}>{process.heading}</h2>
            </div>
          </div>
          <div className={s.processGrid}>
            {process.steps.map((item, index) => (
              <div key={index} className={s.processCard}>
                <span className={s.processStepNumber}>{item.step}</span>
                <h3 className={s.processTitle}>{item.title}</h3>
                <p className={s.processDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id={formConfig.id} className={s.section}>
        <div className={s.wrapper}>
          <div className={s.formContainer}>
            <h2 className={s.formHeading}>Submit a Job Mandate</h2>
            <p className={s.formSubheading}>
              Complete the form below to register your hiring requirements
              within our automated partner sheet.
            </p>

            <form onSubmit={handleFormSubmit} className={s.formGrid}>
              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.companyName.label}
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.companyName.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.contactPerson.label}
                </label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.contactPerson.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.email.label}
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.email.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.phone.label}
                </label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.phone.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.jobTitle.label}
                </label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.jobTitle.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.location.label}
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.location.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.experience.label}
                </label>
                <input
                  type="text"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.experience.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.salaryRange.label}
                </label>
                <input
                  type="text"
                  name="salaryRange"
                  value={formData.salaryRange}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.salaryRange.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.openings.label}
                </label>
                <input
                  type="text"
                  name="openings"
                  value={formData.openings}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.openings.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.timeline.label}
                </label>
                <input
                  type="text"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.timeline.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.skills.label}
                </label>
                <input
                  type="text"
                  name="skills"
                  value={formData.skills}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.skills.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.description.label}
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.description.placeholder}
                  className={s.textarea}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.screeningQuestions.label}
                </label>
                <textarea
                  name="screeningQuestions"
                  value={formData.screeningQuestions}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.screeningQuestions.placeholder}
                  className={s.textarea}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.additionalNotes.label}
                </label>
                <textarea
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.additionalNotes.placeholder}
                  className={s.textarea}
                />
              </div>

              {status.type === "success" && (
                <div className={s.messageSuccess}>{status.message}</div>
              )}

              {status.type === "error" && (
                <div className={s.messageError}>{status.message}</div>
              )}

              <div className="sm:col-span-2 flex justify-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={s.submitBtn}
                >
                  {isSubmitting
                    ? "Transmitting to Pipeline..."
                    : "Submit Mandate"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#050E21]">
        <div className={s.wrapper}>
          <div className={s.ctaBox}>
            <h2 className={s.ctaHeading}>{cta.heading}</h2>
            <p className={s.ctaSubheading}>{cta.subheading}</p>
            <a href="mailto:zylxytechnologies@gmail.com" className={s.ctaBtn}>
              {cta.buttonText}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
