"use server";

export async function submitLeadAction(prevState, formData) {
  const payload = {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    dialCode: formData.get("dialCode")?.toString().trim() || "+91",
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
      errors.name = "Please provide your full name to initialize the inquiry profile.";
    } else if (payload.name.length < 2) {
      errors.name = "Please enter a valid full name configuration (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email) {
      errors.email = "A valid email address is required to ensure secure communication routing.";
    } else if (!emailRegex.test(payload.email)) {
      errors.email = "Please provide a correctly formatted email address.";
    }

    const cleanPhone = payload.phone.replace(/\D/g, "");
    if (!payload.phone) {
      errors.phone = "An operational phone number is required to finalize your verification routing.";
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      errors.phone = "Please enter a valid phone number configuration.";
    }

    if (!payload.service) {
      errors.service = "Please select an operational service track parameter from the dropdown selection.";
    }

    if (!payload.consentProcessing) {
      errors.consentProcessing = "Please check the box to confirm your consent to store and process personal data.";
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors, payload };
    }

    const prefix = payload.dialCode && !payload.dialCode.startsWith("+") && payload.dialCode !== "IN" 
      ? `+${payload.dialCode}` 
      : payload.dialCode === "IN" ? "+91" : payload.dialCode;
    const fullPhoneNumber = `${prefix} ${cleanPhone}`.trim();

    const rawFields = [
      { name: "firstname", value: payload.name },
      { name: "email", value: payload.email },
      { name: "phone", value: fullPhoneNumber },
      { name: "service", value: payload.service },
      { name: "0-2/service", value: payload.service },
      { name: "company", value: payload.orgName },
      { name: "0-2/name", value: payload.orgName },
      { name: "0-2/industry_type", value: payload.orgType },
      { name: "message", value: payload.message },
    ];

    const fields = rawFields.filter((f) => f.value !== "");

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri: "https://zylxytech.com/contact",
        pageName: "Zylxy General Lead Intake Canvas",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: payload.consentProcessing,
          text: "I agree to allow Zylxy Technologies to store and process my personal data.",
        },
      },
    };

    const portalId = "246492214";
    const formId = "22c7712e-9c35-4c26-9881-4abf481fa67c";
    
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
          global: "HubSpot interface synchronization rejection. Please try again.",
        },
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
    console.error("[Submission Error]", error);
    return {
      success: false,
      errors: { global: "Internal data channel pipeline execution failure." },
      payload,
    };
  }
}
