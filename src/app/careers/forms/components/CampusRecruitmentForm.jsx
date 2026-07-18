// Src/app/carrier/component/campusrecruitmentform.jsx
"use client";

import { submitCampusRecruitment } from "@/actions/recruitment-services/campusRecruitmentAction";
import { useRef, useState } from "react";
import {
  categoryOptions,
  experienceOptions,
} from "../data/campus-recruitment-data";
import { formStyles } from "../styles/recruitment-services/campus-recruitment-style";

export default function CampusRecruitmentForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [fileName, setFileName] = useState("");
  const formRef = useRef(null);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    const formData = new FormData(e.target);

    formData.set(
      "agree_communications",
      formData.get("agree_communications") ? "true" : "false"
    );
    formData.set(
      "authorize_storage",
      formData.get("authorize_storage") ? "true" : "false"
    );

    try {
      const response = await submitCampusRecruitment(formData);

      if (response.success) {
        setIsSuccess(true);
        formRef.current?.reset();
        setFileName("");
      } else {
        setErrorMessage(
          response.error || "Something went wrong. Please try again.",
        );
      }
    } catch (error) {
      setErrorMessage("Network error occurred. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className={formStyles.successBox}>
        <div className={formStyles.glowEffect} />
        <h2 className={formStyles.successTitle}>
          Thank You for Registering with Zylxy Technologies!
        </h2>
        <p className={formStyles.successDesc}>
          We've Successfully Received Your Profile.
          <br />
          <br />
          Our Talent Acquisition team will review your profile and contact you
          if it matches any current or upcoming job opportunities.
        </p>
      </div>
    );
  }

  return (
    <div className={formStyles.container}>
      <div className={formStyles.glowEffect} />
      <h2 className={formStyles.header}>
        Start Your Career Journey with Zylxy Technologies
      </h2>
      <p className={formStyles.subHeader}>
        Whether you're a fresher, an experienced professional, or looking for
        your next career opportunity, we're here to help you connect with
        leading employers across India.
      </p>

      {errorMessage && (
        <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-inter">
          {errorMessage}
        </div>
      )}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="relative z-10 text-left"
      >
        <h3 className={formStyles.sectionTitle}>Personal Information</h3>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              First Name<span className={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="firstname"
              required
              className={formStyles.input}
            />
          </div>
          <div>
            <label className={formStyles.label}>
              Last Name<span className={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="lastname"
              required
              className={formStyles.input}
            />
          </div>
        </div>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              Email Address<span className={formStyles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className={formStyles.input}
            />
          </div>
          <div>
            <label className={formStyles.label}>
              Phone Number<span className={formStyles.required}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className={formStyles.input}
            />
          </div>
        </div>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              Current City<span className={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="city"
              required
              className={formStyles.input}
            />
          </div>
          <div>
            <label className={formStyles.label}>
              Current State/Region<span className={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="state"
              required
              className={formStyles.input}
            />
          </div>
        </div>

        <div className={formStyles.fullRow}>
          <label className={formStyles.label}>
            Current Country<span className={formStyles.required}>*</span>
          </label>
          <input
            type="text"
            name="country"
            required
            className={formStyles.input}
          />
        </div>

        <h3 className={formStyles.sectionTitle}>Career Information</h3>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              Current Company (If Applicable)
            </label>
            <input type="text" name="company" className={formStyles.input} />
          </div>
          <div>
            <label className={formStyles.label}>Current Designation/Role</label>
            <input type="text" name="jobtitle" className={formStyles.input} />
          </div>
        </div>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              Preferred Job Role<span className={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="preferred_job_role"
              required
              className={formStyles.input}
            />
          </div>
          <div>
            <label className={formStyles.label}>
              Preferred Work Location
              <span className={formStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="preferred_work_location"
              required
              className={formStyles.input}
            />
          </div>
        </div>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              Total Work Experience
              <span className={formStyles.required}>*</span>
            </label>
            <select
              name="total_work_experience"
              required
              className={formStyles.select}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#050E21] text-white">
                Select Experience
              </option>
              {experienceOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-[#050E21] text-white hover:bg-[#60A5FA]"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={formStyles.label}>
              Professional Category
              <span className={formStyles.required}>*</span>
            </label>
            <select
              name="professional_category"
              required
              className={formStyles.select}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#050E21] text-white">
                Select Category
              </option>
              {categoryOptions.map((opt) => (
                <option
                  key={opt.value}
                  value={opt.value}
                  className="bg-[#050E21] text-white hover:bg-[#60A5FA]"
                >
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={formStyles.fullRow}>
          <label className={formStyles.label}>
            Enter Your Skills, Tools & Technologies
            <span className={formStyles.required}>*</span>
          </label>
          <textarea
            name="skills_tools_technologies"
            required
            className={formStyles.textarea}
          ></textarea>
        </div>

        <div className={formStyles.gridRow}>
          <div>
            <label className={formStyles.label}>
              LinkedIn Profile URL<span className={formStyles.required}>*</span>
            </label>
            <input
              type="url"
              name="linkedin_profile_url"
              required
              className={formStyles.input}
            />
          </div>
          <div>
            <label className={formStyles.label}>
              Upload Your Resume<span className={formStyles.required}>*</span>
            </label>
            <div className={formStyles.fileUploadWrapper}>
              <input
                type="file"
                name="resume"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className={formStyles.fileInput}
              />
              <div className={formStyles.fileText}>
                {fileName ? (
                  <span className={formStyles.fileHighlight}>{fileName}</span>
                ) : (
                  <span>
                    <span className={formStyles.fileHighlight}>
                      Choose File
                    </span>{" "}
                    or drag & drop
                  </span>
                )}
                <br />
                PDF, DOC, DOCX
              </div>
            </div>
          </div>
        </div>

        <div className={formStyles.fullRow}>
          <label className={formStyles.label}>
            GitHub / Portfolio / Online Profile URL
          </label>
          <input
            type="url"
            name="github_portfolio_url"
            className={formStyles.input}
          />
        </div>

        <div className={formStyles.fullRow}>
          <label className={formStyles.label}>
            Tell Us About Your Projects or Work Experience
          </label>
          <textarea
            name="projects_work_experience"
            className={formStyles.textarea}
          ></textarea>
        </div>

        <h3 className={formStyles.sectionTitle}>Candidate Consent</h3>

        <div className={formStyles.checkboxGroup}>
          <input
            type="checkbox"
            id="agree_communications"
            name="agree_communications"
            required
            className={formStyles.checkbox}
          />
          <label
            htmlFor="agree_communications"
            className={formStyles.checkboxLabel}
          >
            I agree to receive career opportunities and recruitment-related
            communications from Zylxy Technologies.
            <span className={formStyles.required}>*</span>
          </label>
        </div>

        <div className={formStyles.checkboxGroup}>
          <input
            type="checkbox"
            id="authorize_storage"
            name="authorize_storage"
            required
            className={formStyles.checkbox}
          />
          <label
            htmlFor="authorize_storage"
            className={formStyles.checkboxLabel}
          >
            I authorize Zylxy Technologies to store and process my personal
            information for recruitment purposes and to share my profile with
            prospective employers only for suitable job opportunities.
            <span className={formStyles.required}>*</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`${formStyles.submitBtn} ${isSubmitting ? formStyles.submitBtnDisabled : ""}`}
        >
          {isSubmitting ? "Processing Request..." : "Send My Request"}
        </button>
      </form>
    </div>
  );
}
