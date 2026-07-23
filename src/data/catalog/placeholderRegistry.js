/**
 * Enterprise Placeholder Image Registry
 * Centralizes all fallback and placeholder imagery for services and training programs
 * to prevent duplication and drift.
 */

export const PLACEHOLDER_REGISTRY = {
  // --- SOFTWARE DEVELOPMENT ---
  "web-application-development": "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800",
  "mobile-application-development": "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800",
  "custom-software-development": "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=800",
  "ui-ux-design": "https://images.unsplash.com/photo-1561070791-26c113006238?q=80&w=800",
  "brand-creative-design": "https://images.unsplash.com/photo-1587440871875-191322ee64b0?q=80&w=800",
  "application-support": "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800",

  // --- AI & CRM ---
  "ai-engineering-automation": "https://images.unsplash.com/photo-1677442136019-21780efad99a?q=80&w=800",
  "hubspot-crm-implementation": "https://images.unsplash.com/photo-1552581234-2612b75d8953?q=80&w=800",

  // --- RECRUITMENT ---
  "talent-acquisition": "https://images.unsplash.com/photo-1521791136368-1a46827d0505?q=80&w=800",
  "campus-recruitment": "https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800",

  // --- TRAINING CATEGORIES ---
  "corporate-training": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800", // Professional enterprise workshop
  "academic-partnerships": "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=800", // University collaboration
  "internship-programs": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", // Students working together
  "placement-assistance": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800", // Interview preparation

  // --- SPECIFIC TRAINING PROGRAMS ---
  "full-stack-development": "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800", // Developer workstation
  "react-development": "https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800", // Frontend coding
  "nodejs-development": "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800", // Backend engineering
  "python-ai": "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=800", // Machine learning
  "cloud-devops": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800", // Cloud infrastructure
  "ui-ux": "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800", // Design workspace
  "data-analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800", // Business dashboards
  "digital-marketing": "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=800",
  "software-testing-qa": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800",

  "general-lead": "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800", // Default fallback
};

/**
 * Retrieves the placeholder image for a given service or program key.
 * @param {string} key - The service/program identifier
 * @returns {string} The URL of the placeholder image
 */
export function getPlaceholderImage(key) {
  return PLACEHOLDER_REGISTRY[key] || PLACEHOLDER_REGISTRY["general-lead"];
}
