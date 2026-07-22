"use server";

import { buildHubspotPayload } from "@/lib/hubspot/hubspotPayloadBuilder";
import { getServiceConfig } from "@/data/services/serviceRegistry";

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
        "Please enter a valid full name configuration (minimum 2 characters).";
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
        "An operational phone number is required to finalize your verification routing.";
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      errors.phone = "Please enter a valid phone number configuration.";
    }

    if (!payload.service) {
      errors.service =
        "Please select an operational service track parameter from the dropdown selection.";
    }

    if (!payload.consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent to store and process personal data.";
    }

    if (Object.keys(errors).length > 0) {
      return { success: false, errors, payload };
    }

    const serviceConfig = getServiceConfig(payload.service);
    const serviceKey = serviceConfig?.serviceKey || "general-lead";

    const { formConfig, payload: hubspotPayload, correlationId } = buildHubspotPayload({
      serviceKey,
      rawPayload: payload,
      requestContext: {
        pageUri: "https://zylxytech.com/contact",
        pageName: "Zylxy General Lead Intake Canvas",
      },
    });

    const portalId = formConfig.portalId;
    const formId = formConfig.formId;

    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotPayload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[HubSpot API Rejection Trace]", {
        status: response.status,
        body: errorText,
        portalId,
        formId,
        timestamp: new Date().toISOString(),
      });
      return {
        success: false,
        errors: {
          global:
            process.env.NODE_ENV === "development"
              ? `HubSpot server rejection (${response.status}): ${errorText}`
              : "HubSpot interface synchronization rejection.",
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
    return {
      success: false,
      errors: { global: "Internal data channel pipeline execution failure." },
      payload,
    };
  }
}
