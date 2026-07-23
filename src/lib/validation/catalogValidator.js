import { SERVICE_CATALOG } from "../../data/catalog/serviceCatalog.js";
import { formRegistry } from "../../data/forms/formRegistry.js";

/**
 * Enterprise Service Catalog Validator
 * Prevents architectural drift by failing fast if the service contract is violated.
 */
export function validateServiceCatalog() {
  const errors = [];
  const warnings = [];

  const serviceKeys = new Set();
  const websiteTitles = new Set();
  const leadGenLabels = new Set();

  for (const [key, config] of Object.entries(SERVICE_CATALOG)) {
    // 1. Basic structural validation
    if (!config.serviceKey) errors.push(`[${key}] Missing serviceKey`);
    if (!config.websiteTitle) errors.push(`[${key}] Missing websiteTitle`);
    if (!config.leadGenLabel) errors.push(`[${key}] Missing leadGenLabel`);
    if (!config.hubspotValue) errors.push(`[${key}] Missing hubspotValue`);
    if (!config.hubspotFormId) errors.push(`[${key}] Missing hubspotFormId`);
    if (!config.route) errors.push(`[${key}] Missing route`);
    if (!config.placeholderImage) errors.push(`[${key}] Missing placeholderImage`);

    // 2. Duplication Checks
    if (serviceKeys.has(config.serviceKey)) {
      errors.push(`Duplicate serviceKey detected: ${config.serviceKey}`);
    } else {
      serviceKeys.add(config.serviceKey);
    }

    if (websiteTitles.has(config.websiteTitle)) {
      errors.push(`Duplicate websiteTitle detected: ${config.websiteTitle}`);
    } else {
      websiteTitles.add(config.websiteTitle);
    }

    if (leadGenLabels.has(config.leadGenLabel)) {
      // NOTE: leadGenLabel 'Find Jobs' is duplicated across multiple training types, which is acceptable
      if (config.leadGenLabel !== "Find Jobs" && config.leadGenLabel !== "Corporate Training" && config.leadGenLabel !== "Academic Partnerships" && config.leadGenLabel !== "Internship Programs" && config.leadGenLabel !== "Placement Assistance") {
        errors.push(`Duplicate leadGenLabel detected: ${config.leadGenLabel}`);
      }
    } else {
      leadGenLabels.add(config.leadGenLabel);
    }

    // 3. Form Component Mapping Check
    // Exclude general lead from strictly requiring a form in the registry mapped by its key if it uses the default
    if (key !== "general-lead" && key !== "find-jobs") {
        if (!formRegistry[config.serviceKey]) {
            warnings.push(`[${key}] No form component mapped in formRegistry for serviceKey '${config.serviceKey}'`);
        }
    }
  }

  if (errors.length > 0) {
    console.error("❌ Service Catalog Validation Failed!");
    errors.forEach((err) => console.error(`  - ${err}`));
    throw new Error("Enterprise Service Contract Violation: Fix the errors above.");
  } else {
    console.log("✅ Service Catalog Validation Passed!");
    if (warnings.length > 0) {
      console.warn("⚠️ Warnings:");
      warnings.forEach((warn) => console.warn(`  - ${warn}`));
    }
  }
}

// Execute if run directly via Node
if (typeof process !== "undefined" && process.argv[1] && process.argv[1].includes("catalogValidator.js")) {
    try {
        validateServiceCatalog();
    } catch (e) {
        process.exit(1);
    }
}
