import {
  Bot,
  Briefcase,
  Building2,
  Cpu,
  Globe,
  GraduationCap,
  Laptop,
  Layout,
  Palette,
  Smartphone,
  Target,
  TrendingUp,
  Workflow,
  Wrench,
  Code
} from "lucide-react";
import { getPlaceholderImage } from "./placeholderRegistry";

// The single Master Form ID that catches all leads (Zylxy Services LeadGen Form)
const MASTER_FORM_ID = "22c7712e-9c35-4c26-9881-4abf481fa67c";
// Training & Placement Form ID
const TRAINING_FORM_ID = "80d4d7f8-6c0d-4db3-900f-3fd54b672174";

/**
 * Enterprise Service Catalog
 * The absolute canonical source of truth for all service definitions, naming, and HubSpot mappings.
 */
export const SERVICE_CATALOG = {
  // --- SOFTWARE DEVELOPMENT ---
  "web-development": {
    serviceKey: "web-development",
    websiteTitle: "Web Development",
    leadGenLabel: "Web Application Development",
    navigationLabel: "Web Development",
    hubspotValue: "Web Development",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/web-application-development",
    category: "Software",
    icon: Globe,
    placeholderImage: getPlaceholderImage("web-application-development"),
    status: "active",
    visibleInLeadGen: true,
  },
  "mobile-app": {
    serviceKey: "mobile-app",
    websiteTitle: "Mobile App Development",
    leadGenLabel: "Mobile Application Development",
    navigationLabel: "Mobile App",
    hubspotValue: "Mobile App Development",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/mobile-app-development",
    category: "Software",
    icon: Smartphone,
    placeholderImage: getPlaceholderImage("mobile-application-development"),
    status: "active",
    visibleInLeadGen: true,
  },
  "custom-software": {
    serviceKey: "custom-software",
    websiteTitle: "Custom Software Development",
    leadGenLabel: "Custom Software Development",
    navigationLabel: "Custom Software",
    hubspotValue: "Custom Software Development",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/custom-software-development",
    category: "Software",
    icon: Cpu,
    placeholderImage: getPlaceholderImage("custom-software-development"),
    status: "active",
    visibleInLeadGen: true,
  },
  "ui-ux-design": {
    serviceKey: "ui-ux-design",
    websiteTitle: "UI/UX Design",
    leadGenLabel: "UI/UX Design & Prototyping",
    navigationLabel: "UI/UX Design",
    hubspotValue: "UI/UX Design",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/ui-ux-design-prototyping",
    category: "Software",
    icon: Layout,
    placeholderImage: getPlaceholderImage("ui-ux-design"),
    status: "active",
    visibleInLeadGen: true,
  },
  "creative-design": {
    serviceKey: "creative-design",
    websiteTitle: "Creative Design Services",
    leadGenLabel: "Brand & Creative Design",
    navigationLabel: "Creative Design",
    hubspotValue: "Creative Design Services",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/brand-identity-design",
    category: "Software",
    icon: Palette,
    placeholderImage: getPlaceholderImage("brand-creative-design"),
    status: "active",
    visibleInLeadGen: true,
  },
  "app-maintenance": {
    serviceKey: "app-maintenance",
    websiteTitle: "Application Support & Maintenance",
    leadGenLabel: "Application Support & Maintenance",
    navigationLabel: "App Support",
    hubspotValue: "Application Support & Maintenance",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/application-support-maintenance",
    category: "Software",
    icon: Wrench,
    placeholderImage: getPlaceholderImage("application-support"),
    status: "active",
    visibleInLeadGen: true,
  },

  // --- AI & CRM ---
  "ai-solutions": {
    serviceKey: "ai-solutions",
    websiteTitle: "AI Solutions",
    leadGenLabel: "AI Engineering & Automation",
    navigationLabel: "AI Solutions",
    hubspotValue: "AI Solutions",
    hubspotFormId: MASTER_FORM_ID,
    route: "/services/ai-engineering-automation",
    category: "AI & CRM",
    icon: Bot,
    placeholderImage: getPlaceholderImage("ai-engineering-automation"),
    status: "active",
    visibleInLeadGen: true,
  },
  "hubspot-crm": {
    serviceKey: "hubspot-crm",
    websiteTitle: "HubSpot CRM",
    leadGenLabel: "HubSpot CRM Implementation",
    navigationLabel: "HubSpot CRM",
    hubspotValue: "HubSpot CRM",
    hubspotFormId: MASTER_FORM_ID,
    route: "/hubspot",
    category: "AI & CRM",
    icon: Workflow,
    placeholderImage: getPlaceholderImage("hubspot-crm-implementation"),
    status: "active",
    visibleInLeadGen: true,
  },

  // --- RECRUITMENT ---
  "talent-acquisition": {
    serviceKey: "talent-acquisition",
    websiteTitle: "Talent Acquisition",
    leadGenLabel: "Talent Acquisition",
    navigationLabel: "Talent Acquisition",
    hubspotValue: "Hire Talent",
    hubspotFormId: MASTER_FORM_ID,
    route: "/careers/recruitment-services/talent-acquisition",
    category: "Recruitment",
    icon: Target,
    placeholderImage: getPlaceholderImage("talent-acquisition"),
    status: "active",
    visibleInLeadGen: true,
  },
  "campus-recruitment": {
    serviceKey: "campus-recruitment",
    websiteTitle: "Campus Recruitment",
    leadGenLabel: "Campus Recruitment",
    navigationLabel: "Campus Recruitment",
    hubspotValue: "Find Jobs",
    hubspotFormId: MASTER_FORM_ID,
    route: "/careers/recruitment-services/campus-recruitment",
    category: "Recruitment",
    icon: TrendingUp,
    placeholderImage: getPlaceholderImage("campus-recruitment"),
    status: "active",
    visibleInLeadGen: true,
  },

  // --- TRAINING CATEGORIES ---
  "corporate-training": {
    serviceKey: "corporate-training",
    websiteTitle: "Corporate Training",
    leadGenLabel: "Corporate Training",
    navigationLabel: "Corporate Training",
    hubspotValue: "Corporate Training",
    hubspotFormId: TRAINING_FORM_ID,
    route: "/services/corporate-training",
    category: "Training",
    icon: Building2,
    placeholderImage: getPlaceholderImage("corporate-training"),
    status: "active",
    visibleInLeadGen: true,
  },
  "academic-partnerships": {
    serviceKey: "academic-partnerships",
    websiteTitle: "Academic Partnerships",
    leadGenLabel: "Academic Partnerships",
    navigationLabel: "Academic Partnerships",
    hubspotValue: "College Training",
    hubspotFormId: TRAINING_FORM_ID,
    route: "/services/academic-partnerships",
    category: "Training",
    icon: GraduationCap,
    placeholderImage: getPlaceholderImage("academic-partnerships"),
    status: "active",
    visibleInLeadGen: true,
  },
  "internship-programs": {
    serviceKey: "internship-programs",
    websiteTitle: "Internship Programs",
    leadGenLabel: "Internship Programs",
    navigationLabel: "Internships",
    hubspotValue: "Internship Programs",
    hubspotFormId: TRAINING_FORM_ID,
    route: "/services/internship-programs",
    category: "Training",
    icon: Laptop,
    placeholderImage: getPlaceholderImage("internship-programs"),
    status: "active",
    visibleInLeadGen: true,
  },
  "placement-assistance": {
    serviceKey: "placement-assistance",
    websiteTitle: "Placement Assistance",
    leadGenLabel: "Placement Assistance",
    navigationLabel: "Placement",
    hubspotValue: "Placement Assistance",
    hubspotFormId: TRAINING_FORM_ID,
    route: "/services/placement-assistance",
    category: "Training",
    icon: Briefcase,
    placeholderImage: getPlaceholderImage("placement-assistance"),
    status: "active",
    visibleInLeadGen: true,
  },
  "training-placement": {
    serviceKey: "training-placement",
    websiteTitle: "Training & Placement",
    leadGenLabel: "Training & Placement",
    navigationLabel: "Training & Placement",
    hubspotValue: "Training & Placement",
    hubspotFormId: TRAINING_FORM_ID,
    route: "/training-placement",
    category: "Training",
    icon: GraduationCap,
    placeholderImage: getPlaceholderImage("placement-assistance"),
    status: "active",
    visibleInLeadGen: false,
  },
  
  // --- LEAD GEN UMBRELLA ---
  "find-jobs": {
    serviceKey: "find-jobs",
    websiteTitle: "Find Jobs",
    leadGenLabel: "Find Jobs",
    navigationLabel: "Find Jobs",
    hubspotValue: "Find Jobs",
    hubspotFormId: MASTER_FORM_ID,
    route: "/training-placement",
    category: "Training",
    icon: Code,
    placeholderImage: getPlaceholderImage("placement-assistance"),
    status: "active",
    visibleInLeadGen: false,
  },
  "general-lead": {
    serviceKey: "general-lead",
    websiteTitle: "General Consultation",
    leadGenLabel: "Other / General Inquiry",
    navigationLabel: "Contact Us",
    hubspotValue: "Not sure yet",
    hubspotFormId: MASTER_FORM_ID,
    route: "/contact",
    category: "All",
    icon: Target,
    placeholderImage: getPlaceholderImage("general-lead"),
    status: "active",
    visibleInLeadGen: true,
  },
};

/**
 * Returns a service config by searching its serviceKey, leadGenLabel, or websiteTitle.
 * @param {string} query 
 * @returns {object|null}
 */
export function getServiceFromCatalog(query) {
  if (!query) return null;
  const normalized = query.trim().toLowerCase();
  
  // Direct key lookup
  if (SERVICE_CATALOG[normalized]) {
    return SERVICE_CATALOG[normalized];
  }

  // Value search
  return Object.values(SERVICE_CATALOG).find(s => 
    s.serviceKey.toLowerCase() === normalized ||
    s.leadGenLabel.toLowerCase() === normalized ||
    s.websiteTitle.toLowerCase() === normalized ||
    s.hubspotValue.toLowerCase() === normalized
  ) || null;
}
