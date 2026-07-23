/**
 * Enterprise Service Registry Data & Configuration Engine
 * Central lookup map mapping service keys, presentation labels, and slugs to service metadata.
 */

export const SERVICE_REGISTRY = {
  "web-development": {
    serviceKey: "web-development",
    serviceSlug: "web-application-development",
    leadGenerationLabel: "Web Development",
  },
  "mobile-app": {
    serviceKey: "mobile-app",
    serviceSlug: "mobile-app-development",
    leadGenerationLabel: "Mobile App Development",
  },
  "custom-software": {
    serviceKey: "custom-software",
    serviceSlug: "custom-software-development",
    leadGenerationLabel: "Custom Software Development",
  },
  "ui-ux-design": {
    serviceKey: "ui-ux-design",
    serviceSlug: "ui-ux-design-prototyping",
    leadGenerationLabel: "UI/UX Design",
  },
  "brand-design": {
    serviceKey: "brand-design",
    serviceSlug: "brand-identity-design",
    leadGenerationLabel: "Creative Design Services",
  },
  "app-maintenance": {
    serviceKey: "app-maintenance",
    serviceSlug: "application-support-maintenance",
    leadGenerationLabel: "Application Support & Maintenance",
  },
  "ai-automation": {
    serviceKey: "ai-automation",
    serviceSlug: "ai-engineering-automation",
    leadGenerationLabel: "AI Solutions",
  },
  "hubspot-crm": {
    serviceKey: "hubspot-crm",
    serviceSlug: "hubspot-crm-implementation",
    leadGenerationLabel: "HubSpot CRM",
  },
  "corporate-training": {
    serviceKey: "corporate-training",
    serviceSlug: "corporate-training",
    leadGenerationLabel: "Corporate Training",
  },
  "academic-partnerships": {
    serviceKey: "academic-partnerships",
    serviceSlug: "academic-partnerships",
    leadGenerationLabel: "Academic Partnerships",
  },
  "placement-assistance": {
    serviceKey: "placement-assistance",
    serviceSlug: "placement-assistance",
    leadGenerationLabel: "Placement Assistance",
  },
  "general-lead": {
    serviceKey: "general-lead",
    serviceSlug: "general-lead",
    leadGenerationLabel: "General Lead",
  },
};

/**
 * Resolves a service configuration by serviceKey, serviceSlug, or leadGenerationLabel.
 * @param {string} query - The lookup key, slug, or label.
 * @returns {object|null} The matched service config or null.
 */
export function getServiceConfig(query) {
  if (!query || typeof query !== "string") return null;

  const normalized = query.trim().toLowerCase();

  // Direct match by key
  if (SERVICE_REGISTRY[normalized]) {
    return SERVICE_REGISTRY[normalized];
  }

  // Lookup by slug or label
  const found = Object.values(SERVICE_REGISTRY).find(
    (item) =>
      item.serviceKey.toLowerCase() === normalized ||
      item.serviceSlug.toLowerCase() === normalized ||
      item.leadGenerationLabel.toLowerCase() === normalized
  );

  return found || null;
}

export const LEAD_GEN_DROPDOWN_OPTIONS = Object.values(SERVICE_REGISTRY).map(
  (item) => ({
    key: item.serviceKey,
    label: item.leadGenerationLabel,
    slug: item.serviceSlug,
  })
);
