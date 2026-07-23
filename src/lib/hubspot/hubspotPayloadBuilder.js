/**
 * Centralized Enterprise HubSpot Payload Builder
 * Normalizes inputs, serializes arrays, strips empty optional fields,
 * maps presentation labels to internal CRM values, and constructs standardized API payloads.
 */

import { HUBSPOT_FORMS_REGISTRY, getHubspotFormConfig } from "@/data/forms/hubspotFormsRegistry";
import { getServiceConfig } from "@/data/services/serviceRegistry";

export function buildHubspotPayload({
  serviceKey,
  rawPayload = {},
  requestContext = {},
}) {
  const formConfig = getHubspotFormConfig(serviceKey);
  const serviceConfig = getServiceConfig(serviceKey);

  // Determine canonical HubSpot CRM service value
  const resolvedHubspotValue =
    formConfig?.hubspotInternalValue ||
    serviceConfig?.leadGenerationLabel ||
    rawPayload.service ||
    "General Lead";

  // Phone normalization
  const cleanPhone = (rawPayload.phone || "").replace(/\D/g, "");
  const dialCode = rawPayload.dialCode || "+91";
  const prefix =
    dialCode && !dialCode.startsWith("+") && dialCode !== "IN"
      ? `+${dialCode}`
      : dialCode === "IN"
        ? "+91"
        : dialCode;
  const fullPhoneNumber = cleanPhone
    ? prefix
      ? `${prefix} ${cleanPhone}`
      : cleanPhone
    : "";

  // Full name calculation
  const firstName = (rawPayload.firstName || rawPayload.name || "").trim();
  const lastName = (rawPayload.lastName || "").trim();
  const fullName = rawPayload.name
    ? rawPayload.name.trim()
    : `${firstName} ${lastName}`.trim();

  // Multi-select serialization
  const isTrainingService =
    serviceKey === "training-placement" || serviceKey === "corporate-training";

  const rawMessage = (rawPayload.message || "").trim();
  const combinedMessage =
    isTrainingService && selectedApps
      ? `Requested Services: ${selectedApps}${rawMessage ? `\n\nProject Scope: ${rawMessage}` : ""}`
      : rawMessage;

  // Construct fields array with service-specific allowlist
  const rawFields = [
    { name: "full_name", value: fullName },
    { name: "firstname", value: firstName || fullName },
    { name: "lastname", value: lastName },
    { name: "email", value: (rawPayload.email || "").trim() },
    { name: "phone", value: fullPhoneNumber },
    { name: "0-2/service", value: resolvedHubspotValue },
    { name: "service", value: resolvedHubspotValue },
    { name: "company", value: (rawPayload.orgName || "").trim() },
    { name: "0-2/name", value: (rawPayload.orgName || "").trim() },
    { name: "0-2/industry_type", value: (rawPayload.orgType || "").trim() },
    { name: "message", value: combinedMessage },
    ...(!isTrainingService
      ? [
          { name: "software_development", value: selectedApps },
          { name: "hs_chat_assistant_source", value: selectedApps },
        ]
      : []),
  ];

  // Filter out empty values (unless required)
  const fields = rawFields.filter((f) => f.value !== "");

  // Build context payload
  const context = {
    pageUri: requestContext.pageUri || formConfig.pageUri,
    pageName: requestContext.pageName || formConfig.pageName,
    ...(requestContext.ipAddress ? { ipAddress: requestContext.ipAddress } : {}),
    ...(requestContext.hutk ? { hutk: requestContext.hutk } : {}),
  };

  const payload = {
    submittedAt: Date.now(),
    fields,
    context,
    legalConsentOptions: {
      consent: {
        consentToProcess: Boolean(rawPayload.consentProcessing),
        text: "I agree to allow Zylxy Technologies to store and process my personal data.",
      },
    },
  };

  return {
    formConfig,
    serviceConfig,
    payload,
    correlationId: `hs_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`,
  };
}
