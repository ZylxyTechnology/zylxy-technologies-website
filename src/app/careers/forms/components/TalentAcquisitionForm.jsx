"use client";

import { talentFormStyles } from "@/app/careers/forms/styles/recruitment-services/talent-acquisition-style";
import { useState } from "react";
import { submitTalentAcquisition } from "../../../../actions/recruitment-services/talentAquisitionAction";
import {
  experienceRequiredOptions,
  organizationTypeOptions,
  servicesNeededOptions,
} from "../data/talent-acquisition-data";

export default function TalentAcquisitionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedServices, setSelectedServices] = useState([]);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setFileName(e.target.files[0].name);
    }
  };

  const handleServiceChange = (service) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service],
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);

    // Append custom fields
    formData.set("services_needed", selectedServices.join(";"));
    
    // Convert checkboxes to boolean strings for the FormData
    formData.set("agree_communications", formData.get("agree_communications") ? "true" : "false");
    formData.set("authorize_storage", formData.get("authorize_storage") ? "true" : "false");

    try {
      const response = await submitTalentAcquisition(formData);
      if (response.success) {
        setSuccessData({
          firstName: formData.get("firstname"),
          email: formData.get("email"),
        });
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (successData) {
    return (
      <div className={talentFormStyles.successBox}>
        <div className={talentFormStyles.glowEffect} />
        <h2 className={talentFormStyles.successTitle}>
          We've received your request
        </h2>
        <p className={talentFormStyles.successDesc}>
          Thank you, {successData.firstName.toUpperCase()}. Our operational
          diagnostic team has safely indexed your project scope parameters and
          will reach out to {successData.email} within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className={talentFormStyles.container}>
      <div className={talentFormStyles.glowEffect} />
      <h2 className={talentFormStyles.header}>
        Ready to Build a High-Performing Team?
      </h2>
      <p className={talentFormStyles.subHeader}>
        Whether you're hiring a single specialist, building an entire project
        team, or scaling your workforce, we help you identify, evaluate, and
        recruit skilled professionals who align with your business goals.
      </p>

      <form onSubmit={handleSubmit} className="relative z-10 text-left">
        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>
              First Name<span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="firstname"
              required
              className={talentFormStyles.input}
            />
          </div>
          <div>
            <label className={talentFormStyles.label}>
              Last Name<span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="lastname"
              required
              className={talentFormStyles.input}
            />
          </div>
        </div>

        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>
              Email<span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              required
              className={talentFormStyles.input}
            />
          </div>
          <div>
            <label className={talentFormStyles.label}>
              Phone Number<span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="tel"
              name="phone"
              required
              className={talentFormStyles.input}
            />
          </div>
        </div>

        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>
              Organization Name
              <span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="company"
              required
              className={talentFormStyles.input}
            />
          </div>
          <div>
            <label className={talentFormStyles.label}>
              Organization Type
              <span className={talentFormStyles.required}>*</span>
            </label>
            <select
              name="organization_type"
              required
              className={talentFormStyles.select}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#050E21] text-white">
                Select Type
              </option>
              {organizationTypeOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#050E21] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>
              Job Title<span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="jobtitle"
              required
              className={talentFormStyles.input}
            />
          </div>
          <div>
            <label className={talentFormStyles.label}>
              Organization Size
              <span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="organization_size"
              required
              className={talentFormStyles.input}
            />
          </div>
        </div>

        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>Website URL</label>
            <input
              type="url"
              name="website"
              className={talentFormStyles.input}
            />
          </div>
          <div>
            <label className={talentFormStyles.label}>LinkedIn URL</label>
            <input
              type="url"
              name="linkedin"
              className={talentFormStyles.input}
            />
          </div>
        </div>

        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>
              Number of Open Positions
              <span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="number"
              name="number_of_open_positions"
              required
              className={talentFormStyles.input}
              min="1"
            />
          </div>
          <div>
            <label className={talentFormStyles.label}>
              Job Location<span className={talentFormStyles.required}>*</span>
            </label>
            <input
              type="text"
              name="job_location"
              required
              className={talentFormStyles.input}
            />
          </div>
        </div>

        <div className={talentFormStyles.fullRow}>
          <label className={talentFormStyles.label}>
            List the Required Skills, Tools & Technologies
            <span className={talentFormStyles.required}>*</span>
          </label>
          <textarea
            name="required_skills"
            required
            className={talentFormStyles.textarea}
          ></textarea>
        </div>

        <div className={talentFormStyles.gridRow}>
          <div>
            <label className={talentFormStyles.label}>
              Total Work Experience Required
            </label>
            <select
              name="total_work_experience_required"
              className={talentFormStyles.select}
              defaultValue=""
            >
              <option value="" disabled className="bg-[#050E21] text-white">
                Select Experience
              </option>
              {experienceRequiredOptions.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-[#050E21] text-white">
                  {opt.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className={talentFormStyles.label}>
              Employment Start date
            </label>
            <input
              type="date"
              name="employment_start_date"
              className={talentFormStyles.input}
            />
          </div>
        </div>

        <div className={talentFormStyles.fullRow}>
          <label className={talentFormStyles.label}>
            Upload Job Description
            <span className={talentFormStyles.required}>*</span>
          </label>
          <div className={talentFormStyles.fileUploadWrapper}>
            <input
              type="file"
              name="job_description"
              required
              onChange={handleFileChange}
              className={talentFormStyles.fileInput}
            />
            <div className={talentFormStyles.fileText}>
              {fileName ? (
                <span className={talentFormStyles.fileHighlight}>
                  {fileName}
                </span>
              ) : (
                <span>
                  <span className={talentFormStyles.fileHighlight}>
                    Choose File
                  </span>{" "}
                  or drag & drop
                </span>
              )}
            </div>
          </div>
        </div>

        <div className={talentFormStyles.fullRow}>
          <label className={talentFormStyles.label}>
            Select the Services You Need
            <span className={talentFormStyles.required}>*</span>
          </label>
          <div className={talentFormStyles.serviceGrid}>
            {servicesNeededOptions.map((service) => (
              <label key={service} className={talentFormStyles.checkboxGroup}>
                <input
                  type="checkbox"
                  value={service}
                  onChange={() => handleServiceChange(service)}
                  className={talentFormStyles.checkbox}
                />
                <span className={talentFormStyles.checkboxLabel}>
                  {service}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className={talentFormStyles.fullRow}>
          <label className={talentFormStyles.label}>
            Tell Us About Your Project
          </label>
          <textarea
            name="project_description"
            className={talentFormStyles.textarea}
          ></textarea>
        </div>

        <div className={talentFormStyles.checkboxGroup}>
          <input
            type="checkbox"
            id="agree_communications"
            name="agree_communications"
            className={talentFormStyles.checkbox}
          />
          <label htmlFor="agree_communications" className={talentFormStyles.checkboxLabel}>
            I agree to receive other communications from Zylxy Technologies.
          </label>
        </div>

        <div className={talentFormStyles.checkboxGroup}>
          <input
            type="checkbox"
            id="authorize_storage"
            name="authorize_storage"
            required
            className={talentFormStyles.checkbox}
          />
          <label htmlFor="authorize_storage" className={talentFormStyles.checkboxLabel}>
            I agree to allow Zylxy Technologies to store and process my personal
            data.<span className={talentFormStyles.required}>*</span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting || selectedServices.length === 0}
          className={`${talentFormStyles.submitBtn} ${isSubmitting || selectedServices.length === 0 ? talentFormStyles.submitBtnDisabled : ""}`}
        >
          {isSubmitting ? "Processing Request..." : "Send My Request"}
        </button>
      </form>
    </div>
  );
}
