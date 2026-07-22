/**
 * Enterprise Service Registry
 * Single Source of Truth for Service Metadata, Presentation Labels, Navigation Titles, and Scroll Anchors.
 */

import { HUBSPOT_FORMS_REGISTRY } from "../forms/hubspotFormsRegistry";

export const SERVICE_REGISTRY = {
  "web-development": {
    serviceKey: "web-development",
    serviceSlug: "web-application-development",
    websiteTitle: "Web Application Development",
    leadGenerationLabel: "Web Development",
    navigationTitle: "Web Development",
    scrollAnchor: "WebLeadGen",
    hubspotConfigKey: "web-development",
  },
  "mobile-app": {
    serviceKey: "mobile-app",
    serviceSlug: "mobile-app-development",
    websiteTitle: "Mobile App Development",
    leadGenerationLabel: "Mobile App Development",
    navigationTitle: "Mobile App Development",
    scrollAnchor: "MobileLeadGen",
    hubspotConfigKey: "mobile-app",
  },
  "custom-software": {
    serviceKey: "custom-software",
    serviceSlug: "custom-software-development",
    websiteTitle: "Custom Software Development",
    leadGenerationLabel: "Custom Software Development",
    navigationTitle: "Custom Software",
    scrollAnchor: "CustomSoftwareLeadGen",
    hubspotConfigKey: "custom-software",
  },
  "ui-ux-design": {
    serviceKey: "ui-ux-design",
    serviceSlug: "ui-ux-design-prototyping",
    websiteTitle: "UI/UX Designing & Prototyping",
    leadGenerationLabel: "UI/UX Designing & Prototyping",
    navigationTitle: "UI/UX Design",
    scrollAnchor: "UiUxLeadGen",
    hubspotConfigKey: "ui-ux-design",
  },
  "brand-design": {
    serviceKey: "brand-design",
    serviceSlug: "brand-identity-design",
    websiteTitle: "Brand & Creative Design",
    leadGenerationLabel: "Creative Design Services",
    navigationTitle: "Brand Design",
    scrollAnchor: "BrandDesignLeadGen",
    hubspotConfigKey: "brand-design",
  },
  "app-maintenance": {
    serviceKey: "app-maintenance",
    serviceSlug: "application-support-maintenance",
    websiteTitle: "Application Support & Maintenance",
    leadGenerationLabel: "Application Support & Maintenance",
    navigationTitle: "App Support & Maintenance",
    scrollAnchor: "AppMaintenanceLeadGen",
    hubspotConfigKey: "app-maintenance",
  },
  "ai-automation": {
    serviceKey: "ai-automation",
    serviceSlug: "ai-engineering-automation",
    websiteTitle: "AI Engineering & Automation",
    leadGenerationLabel: "AI Solutions",
    navigationTitle: "AI Automation",
    scrollAnchor: "AiAutomationLeadGen",
    hubspotConfigKey: "ai-automation",
  },
  "hubspot-crm": {
    serviceKey: "hubspot-crm",
    serviceSlug: "hubspot-crm-implementation",
    websiteTitle: "HubSpot CRM Implementation",
    leadGenerationLabel: "HubSpot CRM Implementation",
    navigationTitle: "HubSpot CRM",
    scrollAnchor: "HubspotLeadGen",
    hubspotConfigKey: "hubspot-crm",
  },
  "talent-acquisition": {
    serviceKey: "talent-acquisition",
    serviceSlug: "talent-acquisition",
    websiteTitle: "Talent Acquisition Services",
    leadGenerationLabel: "Talent Acquisition",
    navigationTitle: "Talent Acquisition",
    scrollAnchor: "TalentAcquisitionLeadGen",
    hubspotConfigKey: "talent-acquisition",
  },
  "campus-recruitment": {
    serviceKey: "campus-recruitment",
    serviceSlug: "campus-recruitment",
    websiteTitle: "Campus Recruitment Drive",
    leadGenerationLabel: "Campus Recruitment",
    navigationTitle: "Campus Recruitment",
    scrollAnchor: "CampusRecruitmentLeadGen",
    hubspotConfigKey: "campus-recruitment",
  },
  "training-placement": {
    serviceKey: "training-placement",
    serviceSlug: "training-placement",
    websiteTitle: "Corporate Training & Placement",
    leadGenerationLabel: "Training & Placement",
    navigationTitle: "Training & Placement",
    scrollAnchor: "TrainingPlacementLeadGen",
    hubspotConfigKey: "training-placement",
  },
};

/**
 * Get service configuration by canonical key, slug, or label
 */
export function getServiceConfig(identifier) {
  if (!identifier) return null;
  const keyMatch = SERVICE_REGISTRY[identifier];
  if (keyMatch) return keyMatch;

  const entries = Object.values(SERVICE_REGISTRY);
  return (
    entries.find(
      (e) =>
        e.serviceSlug === identifier ||
        e.leadGenerationLabel === identifier ||
        e.websiteTitle === identifier,
    ) || null
  );
}

/**
 * Array of lead generation dropdown options for dynamic UI rendering
 */
export const LEAD_GEN_DROPDOWN_OPTIONS = Object.values(SERVICE_REGISTRY).map(
  (service) => ({
    key: service.serviceKey,
    label: service.leadGenerationLabel,
    hubspotValue: HUBSPOT_FORMS_REGISTRY[service.hubspotConfigKey]?.hubspotInternalValue || service.leadGenerationLabel,
  }),
);
