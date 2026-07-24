/**
 * Enterprise Placeholder Image Registry
 * Centralizes all fallback and placeholder imagery for services and training programs
 * to prevent duplication and drift.
 */

export const PLACEHOLDER_REGISTRY = {
  // --- SOFTWARE DEVELOPMENT ---
  "web-application-development": "/assets/services/webDevelopment.jpg",
  "mobile-application-development": "/assets/services/appDevelopment.jpg",
  "custom-software-development": "/assets/services/softwareSolutions.jpg",
  "ui-ux-design": "/assets/services/uiUxBranding.jpg",
  "brand-creative-design": "/assets/services/brand-creative-design.jpg",
  "application-support": "/assets/services/itConsulting.jpg",

  // --- AI & CRM ---
  "ai-engineering-automation": "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800",
  "hubspot-crm-implementation": "https://images.unsplash.com/photo-1552581234-2612b75d8953?q=80&w=800",

  // --- RECRUITMENT ---
  "talent-acquisition": "https://images.unsplash.com/photo-1521791136368-1a46827d0505?q=80&w=800",
  "campus-recruitment": "/assets/services/campus-recruitment.jpg",

  // --- TRAINING CATEGORIES ---
  "corporate-training": "/assets/services/trainingCourses.jpg",
  "academic-partnerships": "/assets/services/academic-partnership.jpg",
  "internship-programs": "/assets/services/Internship-Programs.jpg",
  "placement-assistance": "/assets/services/Placement-Assistance.jpg",

  // --- SPECIFIC TRAINING PROGRAMS ---
  "full-stack-development": "/assets/services/webDevelopment.jpg",
  "react-development": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800",
  "nodejs-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800",
  "python-ai": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800",
  "cloud-devops": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800",
  "ui-ux": "/assets/services/uiUxBranding.jpg",
  "data-analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800",
  "digital-marketing": "/assets/services/digitalMarketing.jpg",
  "software-testing-qa": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",

  "general-lead": "/assets/services/animations.jpg", // Default fallback
};

/**
 * Retrieves the placeholder image for a given service or program key.
 * @param {string} key - The service/program identifier
 * @returns {string} The URL of the placeholder image
 */
export function getPlaceholderImage(key) {
  return PLACEHOLDER_REGISTRY[key] || PLACEHOLDER_REGISTRY["general-lead"];
}
