import { SERVICE_REGISTRY } from "@/data/services/serviceRegistry";
import { formRegistry } from "@/data/forms/formRegistry";
import { hubspotFormsRegistry } from "@/data/forms/hubspotFormsRegistry";
import { RegistryIntegrityError } from "@/lib/hubspot/hubspotErrors";

/**
 * Enterprise Registry Integrity Validator
 * Enforces the Single Source of Truth architecture.
 * Ensures that every service registered in the SERVICE_REGISTRY has a valid
 * component mapped in formRegistry and a HubSpot configuration mapped in hubspotFormsRegistry.
 */
export function validateEnterpriseRegistries() {
  const errors = [];

  Object.values(SERVICE_REGISTRY).forEach((service) => {
    const key = service.serviceKey;

    if (!key) {
      errors.push(`Service '${service.leadGenerationLabel}' is missing a serviceKey.`);
      return;
    }

    if (!formRegistry[key]) {
      errors.push(`Registry Violation: Missing component mapping for '${key}' in formRegistry.`);
    }

    if (!hubspotFormsRegistry[key]) {
      errors.push(`Registry Violation: Missing HubSpot config mapping for '${key}' in hubspotFormsRegistry.`);
    }
  });

  if (errors.length > 0) {
    if (process.env.NODE_ENV === "development") {
      console.warn("[Registry Validator] Found Enterprise SSOT Violations:", errors);
    }
    throw new RegistryIntegrityError(
      "Enterprise Service Registry integrity check failed. SSOT mappings are missing.",
      "RegistrySystem",
      { violations: errors }
    );
  }

  return true;
}
