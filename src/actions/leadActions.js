"use server";

import { buildHubspotPayload } from "@/lib/hubspot/hubspotPayloadBuilder";
import { getServiceFromCatalog } from "@/data/catalog/serviceCatalog";
import { executeGovernedHubSpotSync } from "@/lib/hubspot/hubspotSubmissionGovernance";

export async function submitLeadAction(prevState, formData) {
  const payload = {
    firstName: formData.get("firstName")?.toString().trim() || "",
    lastName: formData.get("lastName")?.toString().trim() || "",
    email: formData.get("email")?.toString().trim() || "",
    phone: formData.get("phone")?.toString().trim() || "",
    dialCode: formData.get("dialCode")?.toString().trim() || "",
    service: formData.get("service")?.toString() || "",
    message: formData.get("message")?.toString().trim() || "",
    orgName: formData.get("orgName")?.toString().trim() || "",
    orgType: formData.get("orgType")?.toString() || "",
    consentCommunications:
      formData.get("consentCommunications") === "on" ||
      formData.get("consentCommunications") === "true" ||
      Boolean(formData.get("consentCommunications")),
    consentProcessing:
      formData.get("consentProcessing") === "on" ||
      formData.get("consentProcessing") === "true" ||
      Boolean(formData.get("consentProcessing")),
    honeyTrap: formData.get("honeyTrap")?.toString() || "",
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
    if (!payload.firstName) {
      errors.firstName = "Please provide your first name.";
    } else if (payload.firstName.length < 2) {
      errors.firstName = "Please enter a valid first name (minimum 2 characters).";
    }

    if (!payload.lastName) {
      errors.lastName = "Please provide your last name.";
    } else if (payload.lastName.length < 2) {
      errors.lastName = "Please enter a valid last name (minimum 2 characters).";
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

    const serviceConfig = getServiceFromCatalog(payload.service);
    const serviceKey = serviceConfig?.serviceKey || "general-lead";

    const { formConfig, payload: hubspotPayload, correlationId } = buildHubspotPayload({
      serviceKey,
      rawPayload: payload,
      requestContext: {
        pageUri: "https://zylxytech.com/contact",
        pageName: "Zylxy General Lead Intake Canvas",
      },
    });

    const governanceResult = await executeGovernedHubSpotSync({
      serviceKey,
      hubspotPayload,
      formConfig,
      correlationId,
    });

    if (!governanceResult.success) {
      return {
        success: false,
        errors: {
          global:
            process.env.NODE_ENV === "development"
              ? `Pipeline Sync Error (${governanceResult.stage}): ${governanceResult.error}`
              : "HubSpot interface synchronization rejection.",
        },
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
      errors: { global: "Internal data channel pipeline execution failure." },
      payload,
    };
  }
}
