import { SERVICE_CATALOG } from "../catalog/serviceCatalog";

/**
 * Enterprise HubSpot Forms Registry
 * Now fully derived from the canonical SERVICE_CATALOG.
 */

export const HUBSPOT_COMMON_CONFIG = {
  portalId: "246492214",
  region: "na2",
  baseUrl: "https://api-na2.hsforms.com/submissions/v3/integration/submit",
};

export const HUBSPOT_FORMS_REGISTRY = {};

for (const [key, config] of Object.entries(SERVICE_CATALOG)) {
  HUBSPOT_FORMS_REGISTRY[key] = {
    serviceKey: config.serviceKey,
    hubspotInternalValue: config.hubspotValue,
    formId: config.hubspotFormId,
    portalId: HUBSPOT_COMMON_CONFIG.portalId,
    region: HUBSPOT_COMMON_CONFIG.region,
    submitUrl: `${HUBSPOT_COMMON_CONFIG.baseUrl}/${HUBSPOT_COMMON_CONFIG.portalId}/${config.hubspotFormId}`,
    pageUri: `https://zylxytech.com${config.route}`,
    pageName: `${config.websiteTitle} Intake Portal`,
  };
}

export function getHubspotFormConfig(serviceKey) {
  return (
    HUBSPOT_FORMS_REGISTRY[serviceKey] || HUBSPOT_FORMS_REGISTRY["general-lead"]
  );
}

export const hubspotFormsRegistry = HUBSPOT_FORMS_REGISTRY;
