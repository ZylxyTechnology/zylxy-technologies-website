"use server";

import { HUBSPOT_FORMS_REGISTRY, HUBSPOT_COMMON_CONFIG } from "@/data/forms/hubspotFormsRegistry";

// Maps user-facing dropdown label to the HubSpot form registry key
const SERVICE_LABEL_TO_REGISTRY_KEY = {
  "Web Development": "web-development",
  "Mobile App Development": "mobile-app",
  "Custom Software Development": "custom-software",
  "UI/UX Designing & Prototyping": "ui-ux-design",
  "Creative Design Services": "brand-design",
  "Application Support & Maintenance": "app-maintenance",
  "AI Solutions": "ai-automation",
  "HubSpot CRM Implementation": "hubspot-crm",
  "Talent Acquisition": "talent-acquisition",
  "Campus Recruitment": "campus-recruitment",
  "Training & Placement": "training-placement",
};

export async function submitLeadAction(prevState, formData) {
  const payload = {
    firstName: formData.get("firstName")?.toString().trim() || "",
    lastName: formData.get("lastName")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    dialCode: formData.get("dialCode")?.toString().trim() || "IN",
    service: formData.get("service")?.toString() || "",
    message: formData.get("message")?.toString().trim() || "",
    orgName: formData.get("orgName")?.toString().trim() || "",
    orgType: formData.get("orgType")?.toString() || "",
    consentCommunications:
      formData.get("consentCommunications") === "on" ||
      formData.get("consentCommunications") === "true",
    consentProcessing:
      formData.get("consentProcessing") === "on" ||
      formData.get("consentProcessing") === "true",
    honeyTrap: formData.get("honeyTrap")?.toString() || "",
  };

  // Honeypot check — silently succeed if spam bot triggered it
  if (payload.honeyTrap !== "") {
    return {
      success: true,
      submittedName: payload.firstName.toUpperCase(),
      submittedEmail: payload.email,
      errors: {},
    };
  }

  try {
    const errors = {};

    if (!payload.firstName || payload.firstName.length < 2) {
      errors.firstName = "Please enter your first name (minimum 2 characters).";
    }
    if (!payload.lastName || payload.lastName.length < 1) {
      errors.lastName = "Please enter your last name.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email) {
      errors.email = "A valid email address is required.";
    } else if (!emailRegex.test(payload.email)) {
      errors.email = "Please provide a correctly formatted email address.";
    }

    const cleanPhone = payload.phone.replace(/\D/g, "");
    if (!payload.phone) {
      errors.phone = "A phone number is required.";
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      errors.phone = "Please enter a valid phone number.";
    }

    if (!payload.service) {
      errors.service = "Please select a service from the dropdown.";
    }

    if (!payload.consentProcessing) {
      errors.consentProcessing = "Please check the box to confirm your consent to process personal data.";
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors, payload };
    }

    // Format phone with dial prefix
    const dialCode = payload.dialCode;
    const prefix =
      dialCode && !dialCode.startsWith("+") && dialCode !== "IN"
        ? `+${dialCode}`
        : dialCode === "IN"
          ? "+91"
          : dialCode;
    const fullPhoneNumber = `${prefix} ${cleanPhone}`.trim();

    // Resolve the correct HubSpot form for this service
    const registryKey = SERVICE_LABEL_TO_REGISTRY_KEY[payload.service] || "general-lead";
    const formConfig =
      HUBSPOT_FORMS_REGISTRY[registryKey] || HUBSPOT_FORMS_REGISTRY["general-lead"];
    const portalId = formConfig.portalId || HUBSPOT_COMMON_CONFIG.portalId;
    const formId = formConfig.formId;

    // Only send standard HubSpot contact properties — no custom fields that don't exist
    const rawFields = [
      { name: "firstname", value: payload.firstName },
      { name: "lastname", value: payload.lastName },
      { name: "email", value: payload.email },
      { name: "phone", value: fullPhoneNumber },
      { name: "company", value: payload.orgName },
      { name: "message", value: payload.message },
    ];

    const fields = rawFields.filter((f) => f.value !== "");

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri: "https://zylxytech.com/contact",
        pageName: "Zylxy Lead Generation Form",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: payload.consentProcessing,
          text: "I agree to allow Zylxy Technologies to store and process my personal data.",
        },
      },
    };

    console.log("[HubSpot Submit]", {
      registryKey,
      portalId,
      formId,
      fields: fields.map((f) => f.name),
    });

    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotPayload),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[HubSpot Sync Error]", response.status, errorText);
      return {
        success: false,
        errors: {
          global: `Submission failed (${response.status}). Please try again or contact us directly.`,
        },
        payload,
      };
    }

    return {
      success: true,
      submittedName: `${payload.firstName} ${payload.lastName}`.toUpperCase(),
      submittedEmail: payload.email,
      errors: {},
    };
  } catch (error) {
    console.error("[Submission Error]", error);
    return {
      success: false,
      errors: { global: "An unexpected error occurred. Please try again." },
      payload,
    };
  }
}
