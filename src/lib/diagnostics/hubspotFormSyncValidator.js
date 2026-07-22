/**
 * HubSpot Form Synchronization Validator
 * Simulates a build-time or dev-time validation of local configurations 
 * against the remote HubSpot schema.
 */

import { hubspotFormsRegistry } from "@/data/forms/hubspotFormsRegistry";
import { HubSpotSyncError } from "@/lib/hubspot/hubspotErrors";

export function validateHubspotFormsSync() {
  const warnings = [];

  Object.entries(hubspotFormsRegistry).forEach(([key, config]) => {
    if (!config.formId || !config.portalId || !config.region) {
      warnings.push(`Form mapping '${key}' has incomplete identity attributes (GUID/Portal/Region).`);
    }

    if (!config.hubspotInternalValue) {
      warnings.push(`Form mapping '${key}' lacks a hubspotInternalValue for routing.`);
    }
  });

  if (warnings.length > 0) {
    console.warn("[HubSpot Sync Validator] Contract warnings detected:", warnings);
    // Depending on strictness, we might throw here in CI/CD pipeline
    // throw new HubSpotSyncError("HubSpot sync contract is broken.", "validation", { warnings });
  }

  return { valid: warnings.length === 0, warnings };
}
