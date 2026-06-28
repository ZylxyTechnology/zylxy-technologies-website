"use client";

import { useTalentEcosystem } from "@/app/context/TalentEcosystemContext";
import { exploreOpportunitiesData } from "@/data/sections/explore-opportunities";
import { exploreOpportunitiesStyles } from "@/styles/explore-opportunities";
import { useRef, useState } from "react";

export default function ExploreOpportunitiesPage() {
  const { hero, intro, benefits, formConfig, cta } = exploreOpportunitiesData;
  const s = exploreOpportunitiesStyles;
  const formRef = useRef(null);

  const {
    jobs,
    loadingJobs,
    status,
    setStatus,
    isSubmitting,
    dispatchFormSubmission,
  } = useTalentEcosystem();
  const [selectedJob, setSelectedJob] = useState(null);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    currentLocation: "",
    experience: "",
    skills: "",
    linkedin: "",
    portfolio: "",
    resume: "",
    offerLetter: "",
    screeningAnswers: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const initiateApplication = (job) => {
    setSelectedJob(job);
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.email ||
      !formData.phone ||
      !formData.currentLocation ||
      !formData.experience ||
      !formData.skills ||
      !formData.resume ||
      !formData.screeningAnswers
    ) {
      setStatus({
        type: "error",
        message:
          "Please fill out all required fields, including screening answers and your resume link.",
      });
      return;
    }

    if (!formConfig.validationRules.emailRegex.test(formData.email)) {
      setStatus({
        type: "error",
        message: "Please provide a valid email address.",
      });
      return;
    }

    const success = await dispatchFormSubmission("student", formData);
    if (success) {
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        currentLocation: "",
        experience: "",
        skills: "",
        linkedin: "",
        portfolio: "",
        resume: "",
        offerLetter: "",
        screeningAnswers: "",
        message: "",
      });
      setSelectedJob(null);
    }
  };

  return (
    <main className="bg-[#050E21] min-h-screen text-white selection:bg-[#2563EB]/30">
      <section className={s.heroContainer}>
        <div className="max-w-[1200px] mx-auto px-8 relative z-10">
          <span className={s.heroBadge}>{hero.badge}</span>
          <h1 className={s.heroHeading}>
            {hero.heading.textBefore}
            <span className={s.heroGradient}>{hero.heading.gradientText}</span>
            {hero.heading.textAfter}
          </h1>
          <p className={s.heroDesc}>{hero.descriptionPrimary}</p>
          <p className={s.heroSubDesc}>{hero.descriptionSecondary}</p>
          <a href="#open-positions-board" className={s.heroBtn}>
            {hero.ctaText}
          </a>
        </div>
      </section>

      <section className={s.section}>
        <div className={s.wrapper}>
          <div className={s.headerRow}>
            <div className={s.titleArea}>
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>{intro.heading}</span>
              </div>
              <p className={s.subHeading} style={{ maxWidth: "100%" }}>
                {intro.description}
              </p>
            </div>
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
          <div className={s.benefitsGrid}>
            {benefits.list.map((item, index) => (
              <div key={index} className={s.benefitCard}>
                <span className={s.benefitIcon}>{item.icon}</span>
                <h3 className={s.benefitTitle}>{item.title}</h3>
                <p className={s.benefitDesc}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="open-positions-board" className={s.section}>
        <div className={s.wrapper}>
          <div className={s.headerRow}>
            <div className={s.titleArea}>
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>Opportunities Matrix</span>
              </div>
              <h2 className={s.mainHeading}>Active Engagements</h2>
            </div>
          </div>

          <div className={s.jobBoardWrapper}>
            {loadingJobs ? (
              <div className="text-center py-12 text-slate-500 font-inter text-sm">
                Querying active ledger items...
              </div>
            ) : jobs.length === 0 ? (
              <div className="text-center py-12 text-slate-500 font-inter text-sm">
                No direct mandates published. Submit via passive pool below.
              </div>
            ) : (
              jobs.map((job) => (
                <div key={job.id} className={s.jobCard}>
                  <div className={s.jobMetaMain}>
                    <h3 className={s.jobTitle}>{job.title}</h3>
                    <div className={s.companyRow}>
                      <span>{job.companyName}</span>
                      <span className="text-slate-600">•</span>
                      <span>{job.location}</span>
                    </div>
                    <div className={s.metaBadgeRow}>
                      <span className={s.metaBadge}>Exp: {job.experience}</span>
                      {job.skills &&
                        job.skills.split(",").map((skill, i) => (
                          <span key={i} className={s.skillsBadge}>
                            {skill.trim()}
                          </span>
                        ))}
                    </div>
                    <p className={s.jobDescriptionText}>{job.description}</p>
                    {job.screeningQuestions && (
                      <div className="mt-4 p-3.5 bg-[#050E21] border border-white/[0.04] rounded">
                        <span className="text-[11px] font-bold tracking-wider text-[#60A5FA] uppercase block mb-1">
                          Mandatory Screening Checks:
                        </span>
                        <p className="text-xs text-slate-400 whitespace-pre-line font-inter">
                          {job.screeningQuestions}
                        </p>
                      </div>
                    )}
                  </div>
                  <div className={s.actionArea}>
                    <button
                      onClick={() => initiateApplication(job)}
                      className={s.applyBtn}
                    >
                      Select Position
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section ref={formRef} className={s.section}>
        <div className={s.wrapper}>
          <div className={s.formContainer}>
            <h2 className={s.formHeading}>{formConfig.heading}</h2>
            <p className={s.formSubheading}>
              {selectedJob
                ? `Position Focus: ${selectedJob.title} at ${selectedJob.companyName}`
                : formConfig.subheading}
            </p>

            <form onSubmit={handleFormSubmit} className={s.formGrid}>
              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.fullName.label}
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.fullName.placeholder}
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
                  {formConfig.fields.currentLocation.label}
                </label>
                <input
                  type="text"
                  name="currentLocation"
                  value={formData.currentLocation}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.currentLocation.placeholder}
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

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.linkedin.label}
                </label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.linkedin.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.halfWidthField}>
                <label className={s.label}>
                  {formConfig.fields.portfolio.label}
                </label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.portfolio.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.resume.label}
                </label>
                <input
                  type="url"
                  name="resume"
                  value={formData.resume}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.resume.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.offerLetter.label}
                </label>
                <input
                  type="url"
                  name="offerLetter"
                  value={formData.offerLetter}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.offerLetter.placeholder}
                  className={s.input}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {selectedJob
                    ? "Answers to Mandatory Screening Checks *"
                    : formConfig.fields.screeningAnswers.label}
                </label>
                <textarea
                  name="screeningAnswers"
                  value={formData.screeningAnswers}
                  onChange={handleInputChange}
                  placeholder={
                    selectedJob
                      ? "Provide answers addressing the structural requirements mapped above..."
                      : formConfig.fields.screeningAnswers.placeholder
                  }
                  className={s.textarea}
                />
              </div>

              <div className={s.fullWidthField}>
                <label className={s.label}>
                  {formConfig.fields.message.label}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={formConfig.fields.message.placeholder}
                  className={s.textarea}
                />
              </div>

              {status.type === "success" && (
                <div className={s.messageSuccess}>{status.message}</div>
              )}

              {status.type === "error" && (
                <div className={s.messageError}>{status.message}</div>
              )}

              <div className="sm:col-span-2 flex justify-center items-center gap-4">
                {selectedJob && (
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-6 py-3.5 mt-4 rounded-[4px] border border-white/10 text-white font-bold font-inter text-xs tracking-widest uppercase hover:bg-white/5 transition-all duration-200"
                  >
                    Clear Focus
                  </button>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={s.submitBtn}
                >
                  {isSubmitting
                    ? "Transmitting Profile..."
                    : "Transmit Application"}
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
            <button
              onClick={() => {
                setSelectedJob(null);
                if (formRef.current)
                  formRef.current.scrollIntoView({ behavior: "smooth" });
              }}
              className={s.ctaBtn}
            >
              {cta.buttonText}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
