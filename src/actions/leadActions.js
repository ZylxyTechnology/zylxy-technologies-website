"use server";

export async function submitLeadAction(prevState, formData) {
  const payload = {
    name: formData.get("name")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    dialCode: formData.get("dialCode")?.toString().trim() || "",
    service: formData.get("service")?.toString() || "",
    message: formData.get("message")?.toString().trim() || "",
    orgName: formData.get("orgName")?.toString().trim() || "",
    orgType: formData.get("orgType")?.toString() || "",
    subLevel: formData.get("subLevel")?.toString() || "",
    challengesToSolve: (
      formData.get("challengesToSolve")?.toString() || ""
    ).replace(/; /g, ";"),
    consentCommunications: formData.get("consentCommunications") === "true",
    consentProcessing: formData.get("consentProcessing") === "true",
    honeyTrap: formData.get("honeyTrap")?.toString() || "",
    isHubSpotFormContext: formData.get("isHubSpotFormContext") === "true",
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
        "Please enter a valid full name configuration (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email) {
      errors.email =
        "A valid email address is required to ensure secure communication routing.";
    } else if (!emailRegex.test(payload.email)) {
      errors.email = "Please provide a correctly formatted email address.";
    }

    if (!payload.phone) {
      errors.phone =
        "An operational phone number is required to finalize your verification routing.";
    }

    if (!payload.service) {
      errors.service =
        "Please select an operational service track parameter from the dropdown selection.";
    }

    if (
      (payload.isHubSpotFormContext || payload.service === "HubSpot CRM") &&
      !payload.orgName
    ) {
      errors.orgName =
        "Organization name identification is required for setting up HubSpot diagnostics.";
    }

    if (!payload.consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent to store and process personal data.";
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors, payload };
    }

    const portalId = process.env.HUBSPOT_PORTAL_ID || "246492214";
    const formId = payload.isHubSpotFormContext
      ? process.env.HUBSPOT_HUBSPOT_FORM_ID ||
        "65d2e621-d4ff-4616-8f31-2c22a59547e5"
      : process.env.HUBSPOT_GENERAL_FORM_ID ||
        "22c7712e-9c35-4c26-9881-4abf481fa67c";

    const fullPhoneNumber = `${payload.dialCode} ${payload.phone}`;

    const serviceTranslationMap = {
      "HubSpot CRM": "HubSpot",
      "Software Solutions": "Software Solution",
      "Digital Marketing": "Digital Marketing",
      "App Development": "App Development",
      "Web Development": "Web Development",
      "IT Consulting": "IT Consulting",
      "UI/UX & Branding": "UI/UX & Branding",
      "Training & Courses": "Training & Courses",
      Animations: "Animations",
      "Not sure yet": "Not sure yet",
    };
    const mappedHubSpotService =
      serviceTranslationMap[payload.service] || payload.service;

    const fields = [
      { name: "firstname", value: payload.name }, // FIX: The entire name string is now mapped exactly as typed
      { name: "email", value: payload.email },
      { name: "phone", value: fullPhoneNumber },
      { name: "0-2/service", value: mappedHubSpotService },
      { name: "message", value: payload.message },
    ];

    if (payload.isHubSpotFormContext || payload.service === "HubSpot CRM") {
      fields.push(
        { name: "0-2/name", value: payload.orgName },
        { name: "company", value: payload.orgName },
        { name: "0-2/industry_type", value: payload.orgType },
        { name: "0-2/hubspot_subscription_level", value: payload.subLevel },
        {
          name: "0-2/what_hubspot_challenges_are_you_trying_to_solve",
          value: payload.challengesToSolve,
        },
      );
    }

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri: "https://zylxytech.com",
        pageName: payload.isHubSpotFormContext
          ? "HubSpot Consulting Intake Portal"
          : "Zylxy General Lead Intake",
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
      const errorText = await response.text();
      let parsedErrorMessage = "HubSpot API submission failure.";
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.errors && errorData.errors.length > 0) {
          parsedErrorMessage = errorData.errors
            .map((err) => err.message)
            .join(" | ");
        } else {
          parsedErrorMessage = errorData.message || parsedErrorMessage;
        }
      } catch (e) {
        parsedErrorMessage = errorText || parsedErrorMessage;
      }
      return {
        success: false,
        errors: { global: parsedErrorMessage },
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
      errors: {
        global: "An operational delivery error occurred. Please try again.",
      },
      payload,
    };
  }
}
