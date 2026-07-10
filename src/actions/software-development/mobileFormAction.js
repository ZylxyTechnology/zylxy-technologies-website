"use server";

export async function submitMobileLeadAction(prevState, formData) {
  const selectedAppsArray = formData.getAll("selectedApps");

  const payload = {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    countryCode: formData.get("countryCode")?.toString().trim() || "",
    message: formData.get("message")?.toString().trim() || "",
    orgName: formData.get("orgName")?.toString().trim() || "",
    orgType: formData.get("orgType")?.toString() || "",
    selectedApps: selectedAppsArray.map((item) => item.toString()),
    consentCommunications: formData.get("consentCommunications") === "true",
    consentProcessing: formData.get("consentProcessing") === "true",
    honeyTrap: formData.get("honeyTrap")?.toString() || "",
  };

  try {
    if (payload.honeyTrap !== "") {
      return {
        success: true,
        submittedName: payload.name.toUpperCase(),
        submittedEmail: payload.email,
        errors: {},
      };
    }

    const errors = {};
    if (!payload.name) {
      errors.name =
        "Please provide your full name to initialize the inquiry profile.";
    } else if (payload.name.length < 2) {
      errors.name =
        "Please enter a valid name configuration (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email) {
      errors.email =
        "A valid email address is required to ensure secure communication routing.";
    } else if (!emailRegex.test(payload.email)) {
      errors.email = "Please provide a correctly formatted email address.";
    }

    const cleanPhone = payload.phone.replace(/\D/g, "");
    if (!payload.phone) {
      errors.phone =
        "An operational phone number is required to finalize verification routing.";
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      errors.phone = "Please enter a valid phone number configuration.";
    }

    if (payload.selectedApps.length === 0) {
      errors.selectedApps =
        "Please select at least one required application development service target.";
    }

    if (!payload.consentCommunications) {
      errors.consentCommunications =
        "Please confirm your communication preferences by checking the box.";
    }

    if (!payload.consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent to store and process data.";
    }

    if (Object.keys(errors).length > 0) {
      return {
        success: false,
        errors,
        payload,
      };
    }

    const portalId = "246492214";
    const formId = "860a5b9b-c9f7-4737-ac08-bb68ad3d21d0";

    const fields = [
      { name: "full_name", value: payload.name },
      { name: "firstname", value: payload.name },
      { name: "email", value: payload.email },
      { name: "phone", value: payload.phone },
      { name: "0-2/service", value: payload.selectedApps.join(";") },
      { name: "0-2/name", value: payload.orgName || "" },
      { name: "company", value: payload.orgName || "" },
      { name: "0-2/industry_type", value: payload.orgType || "" },
      { name: "message", value: payload.message || "" },
    ];

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri:
          "https://zylxytech.com/services/mobile-application-development",
        pageName: "Mobile Application Development Intake Portal",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: payload.consentProcessing,
          text: "I agree to allow Zylxy Technologies to store and process my personal data.",
        },
      },
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotPayload),
      },
    );

    if (!response.ok) {
      return {
        success: false,
        errors: { global: "HubSpot dataset operational sync error." },
        payload,
      };
    }

    return {
      success: true,
      submittedName: payload.name.toUpperCase(),
      submittedEmail: payload.email,
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      errors: { global: "Server architecture submission pipeline failure." },
      payload,
    };
  }
}
