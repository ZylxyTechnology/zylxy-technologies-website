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

/**
 * Enterprise Service Catalog
 * The absolute canonical source of truth for all service definitions, naming, and HubSpot mappings.
 */
export const SERVICE_CATALOG = {
  // --- SOFTWARE DEVELOPMENT ---
  "web-development": {
    serviceKey: "web-development",
    websiteTitle: "Web Development",
    leadGenLabel: "Web Development",
    navigationLabel: "Web Development",
    hubspotValue: "Web Development",
    hubspotFormId: "fa676301-adb5-42b5-b947-1a50fe3b2eb6",
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
    leadGenLabel: "Mobile App Development",
    navigationLabel: "Mobile App",
    hubspotValue: "Mobile App Development",
    hubspotFormId: "860a5b9b-c9f7-4737-ac08-bb68ad3d21d0",
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
    hubspotFormId: "3ed33d5e-007c-411d-a3ac-980af9dfd858",
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
    leadGenLabel: "UI/UX Design",
    navigationLabel: "UI/UX Design",
    hubspotValue: "UI/UX Design",
    hubspotFormId: "136f1611-21aa-4c4d-a9aa-d71ba33afa5c",
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
    leadGenLabel: "Creative Design Services",
    navigationLabel: "Creative Design",
    hubspotValue: "Creative Design Services",
    hubspotFormId: "efb4de68-d30e-4819-bb2b-87b9a95b8b3b",
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
    hubspotFormId: "632f884f-52d3-494f-8b2d-b95b7d9a1596",
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
    leadGenLabel: "AI Solutions",
    navigationLabel: "AI Solutions",
    hubspotValue: "AI Solutions",
    hubspotFormId: "516fe27b-2d6a-43ba-8ddf-657ac796ecb9",
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
    leadGenLabel: "HubSpot CRM",
    navigationLabel: "HubSpot CRM",
    hubspotValue: "HubSpot CRM",
    hubspotFormId: "2d3b6caf-38d4-41a2-885d-e89e31b85041",
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
    leadGenLabel: "Hire Talent",
    navigationLabel: "Talent Acquisition",
    hubspotValue: "Hire Talent",
    hubspotFormId: "90c110ec-ac3d-492f-a706-47806dfd25a4",
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
    hubspotValue: "Campus Recruitment",
    hubspotFormId: "40ed5d43-4844-4435-a3e8-71633ab5e59d",
    route: "/careers/recruitment-services/campus-recruitment",
    category: "Recruitment",
    icon: TrendingUp,
    placeholderImage: getPlaceholderImage("campus-recruitment"),
    status: "active",
    visibleInLeadGen: false, // Usually separate forms for campus
  },

  // --- TRAINING CATEGORIES ---
  // Note: These map to 'Find Jobs' in HubSpot to group training and placement
  "corporate-training": {
    serviceKey: "corporate-training",
    websiteTitle: "Corporate Training",
    leadGenLabel: "Corporate Training",
    navigationLabel: "Corporate Training",
    hubspotValue: "Find Jobs",
    hubspotFormId: "80d4d7f8-6c0d-4db3-900f-3fd54b672174",
    route: "/services/corporate-training",
    category: "Training",
    icon: Building2,
    placeholderImage: getPlaceholderImage("corporate-training"),
    status: "active",
    visibleInLeadGen: false,
  },
  "academic-partnerships": {
    serviceKey: "academic-partnerships",
    websiteTitle: "Academic Partnerships",
    leadGenLabel: "Academic Partnerships",
    navigationLabel: "Academic Partnerships",
    hubspotValue: "Find Jobs",
    hubspotFormId: "80d4d7f8-6c0d-4db3-900f-3fd54b672174",
    route: "/services/academic-partnerships",
    category: "Training",
    icon: GraduationCap,
    placeholderImage: getPlaceholderImage("academic-partnerships"),
    status: "active",
    visibleInLeadGen: false,
  },
  "internship-programs": {
    serviceKey: "internship-programs",
    websiteTitle: "Internship Programs",
    leadGenLabel: "Internship Programs",
    navigationLabel: "Internships",
    hubspotValue: "Find Jobs",
    hubspotFormId: "80d4d7f8-6c0d-4db3-900f-3fd54b672174",
    route: "/services/internship-programs",
    category: "Training",
    icon: Laptop,
    placeholderImage: getPlaceholderImage("internship-programs"),
    status: "active",
    visibleInLeadGen: false,
  },
  "placement-assistance": {
    serviceKey: "placement-assistance",
    websiteTitle: "Placement Assistance",
    leadGenLabel: "Placement Assistance",
    navigationLabel: "Placement",
    hubspotValue: "Find Jobs",
    hubspotFormId: "80d4d7f8-6c0d-4db3-900f-3fd54b672174",
    route: "/services/placement-assistance",
    category: "Training",
    icon: Briefcase,
    placeholderImage: getPlaceholderImage("placement-assistance"),
    status: "active",
    visibleInLeadGen: false,
  },
  
  // --- LEAD GEN UMBRELLA ---
  "find-jobs": {
    serviceKey: "find-jobs",
    websiteTitle: "Training & Placement",
    leadGenLabel: "Find Jobs",
    navigationLabel: "Find Jobs",
    hubspotValue: "Find Jobs",
    hubspotFormId: "80d4d7f8-6c0d-4db3-900f-3fd54b672174",
    route: "/training-placement",
    category: "Training",
    icon: Code,
    placeholderImage: getPlaceholderImage("placement-assistance"),
    status: "active",
    visibleInLeadGen: true, // Represents all training/placement in the main Lead Gen
  },
  "general-lead": {
    serviceKey: "general-lead",
    websiteTitle: "General Consultation",
    leadGenLabel: "General Consultation",
    navigationLabel: "Contact Us",
    hubspotValue: "General Lead",
    hubspotFormId: "22c7712e-9c35-4c26-9881-4abf481fa67c",
    route: "/contact",
    category: "All",
    icon: Target,
    placeholderImage: getPlaceholderImage("general-lead"),
    status: "active",
    visibleInLeadGen: false,
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
