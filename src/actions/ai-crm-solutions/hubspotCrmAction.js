"use server";

export async function submitHubspotCrmAction(prevState, formData) {
  const selectedAppsArray = formData.getAll("selectedApps");
  const payload = {
    firstName: formData.get("firstName")?.toString().trim() || "",
    lastName: formData.get("lastName")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    dialCode: formData.get("dialCode")?.toString().trim() || "",
    message: formData.get("message")?.toString().trim() || "",
    orgName: formData.get("orgName")?.toString().trim() || "",
    orgType: formData.get("orgType")?.toString() || "",
    selectedApps: selectedAppsArray.map((item) => item.toString()),
    consentCommunications: formData.get("consentCommunications") === "true",
    consentProcessing: formData.get("consentProcessing") === "true",
    honeyTrap: formData.get("honeyTrap")?.toString() || "",
    clientIp: formData.get("clientIp")?.toString() || "",
  };

  try {
    if (payload.honeyTrap !== "") {
      return {
        success: true,
        submittedName: payload.firstName.toUpperCase(),
        submittedEmail: payload.email,
        errors: {},
      };
    }

    const errors = {};
    if (!payload.firstName)
      errors.firstName = "Please provide your first name.";
    if (!payload.lastName) errors.lastName = "Please provide your last name.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!payload.email || !emailRegex.test(payload.email)) {
      errors.email = "Please provide a correctly formatted email address.";
    }

    const cleanPhone = payload.phone.replace(/\D/g, "");
    if (!payload.phone) {
      errors.phone = "An operational phone number is required.";
    } else if (payload.dialCode === "+91") {
      if (cleanPhone.length !== 10) {
        errors.phone = "Indian phone numbers must be exactly 10 digits long.";
      }
    }

    if (!payload.orgName)
      errors.orgName = "Please provide your organization name.";
    if (!payload.orgType)
      errors.orgType = "Please select your organization type.";

    if (payload.selectedApps.length === 0) {
      errors.selectedApps = "Please select at least one optimization option.";
    }

    if (!payload.consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent.";
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors, payload };
    }

    const portalId = "246492214";
    const formId = "2d3b6caf-38d4-41a2-885d-e89e31b85041";
    const fullPhoneNumber = `${payload.dialCode} ${payload.phone}`;

    const fields = [
      { objectTypeId: "0-1", name: "firstname", value: payload.firstName },
      { objectTypeId: "0-1", name: "lastname", value: payload.lastName },
      {
        objectTypeId: "0-1",
        name: "full_name",
        value: `${payload.firstName} ${payload.lastName}`.trim(),
      },
      { objectTypeId: "0-1", name: "email", value: payload.email },
      { objectTypeId: "0-1", name: "phone", value: fullPhoneNumber },
      {
        objectTypeId: "0-1",
        name: "hubspot_crm_services",
        value: payload.selectedApps.join(";"),
      },
      { objectTypeId: "0-1", name: "message", value: payload.message || "" },
      { objectTypeId: "0-2", name: "name", value: payload.orgName },
      { objectTypeId: "0-2", name: "industry_type", value: payload.orgType },
    ];

    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: Date.now(),
          fields,
          context: {
            ipAddress: payload.clientIp || "127.0.0.1",
            pageUri:
              "https://zylxytech.com/services/hubspot-crm-implementation",
            pageName: "HubSpot CRM Implementation Intake Portal",
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: payload.consentProcessing,
              text: "I agree to allow Zylxy Technologies to store and process my personal data.",
            },
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      return {
        success: false,
        errors: { global: "HubSpot platform integration fault: " + errorText },
        payload,
      };
    }

    return {
      success: true,
      submittedName: payload.firstName.toUpperCase(),
      submittedEmail: payload.email,
      errors: {},
    };
  } catch (error) {
    return {
      success: false,
      errors: {
        global: "Server architecture system connectivity failure loop.",
      },
      payload,
    };
  }
}
