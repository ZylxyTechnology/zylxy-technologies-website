export const packagesData = {
  starter: {
    slug: "starter",
    badge: "CRM Foundation",
    title: "Starter Package",
    tagline:
      "Build a strong HubSpot foundation with an organized CRM, clean data, and basic automation.",
    bestFor:
      "Small businesses and nonprofits that need a structured CRM and basic automation.",
    isPopular: false,
    overview:
      "Best for organizations getting started with HubSpot or looking to improve their current setup.",
    imagePath: "/assets/Starter-Package.jpg",
    deliverables: [
      "HubSpot account review and recommendations",
      "CRM setup and configuration",
      "Contact and company management",
      "Property organization and lifecycle stages",
      "Data cleanup and duplicate management",
      "Up to 2 forms",
      "1 workflow automation",
      "1 dashboard or report",
    ],
  },
  growth: {
    slug: "growth",
    badge: "Operational Scaling",
    title: "Growth Package",
    tagline:
      "Expand your HubSpot capabilities with advanced automation, lead management, and custom reporting metrics.",
    bestFor:
      "Organizations looking to scale marketing, automated pipelines, or sales team tracking layouts.",
    isPopular: true,
    overview:
      "Best for organizations looking to improve marketing, sales, and operational efficiency.",
    imagePath: "/assets/Growth-Package.jpg",
    deliverables: [
      "Includes everything in the Starter Package",
      "Marketing Hub or Sales Hub optimization",
      "Forms and landing pages deployment",
      "Contact segmentation and smart lists",
      "Email marketing engine setup",
      "Lead nurturing workflows",
      "Pipeline setup and customization",
      "Deal and task automation rules",
      "Multiple workflows and automations",
      "Marketing and sales dashboards",
      "Team training session",
    ],
  },
  custom: {
    slug: "custom",
    badge: "Enterprise Architecture",
    title: "Custom Package",
    tagline:
      "Design a fully customized HubSpot solution tailored uniquely to your complex operational process models.",
    bestFor:
      "Organizations needing advanced custom objects setup, multi-system migrations, or long-term alignment consulting.",
    isPopular: false,
    overview:
      "Best for organizations with unique processes, advanced automation needs, or ongoing HubSpot support.",
    imagePath: "/assets/Custom-Package.jpg",
    deliverables: [
      "Includes everything in the Growth Package",
      "Custom objects and associations architecture",
      "Custom properties and record management systems",
      "Survey, application, and event management systems",
      "Cohort, academy, alumni, or membership tracking",
      "Advanced workflows and custom code automation",
      "Custom reporting and executive dashboards",
      "Complex data imports and historical migrations",
      "Ongoing consulting and architectural support",
      "Strategic process optimization",
    ],
  },
  flexible: {
    slug: "flexible",
    badge: "Tailored Delivery",
    title: "Flexible Options",
    tagline:
      "All packages can be structured and delivered in the unique format that works best for your team.",
    bestFor:
      "Organizations needing targeted health checks, fixed milestone projects, or monthly fractional technical resources.",
    isPopular: false,
    overview:
      "Best for teams seeking targeted diagnostic health audits, project milestones, or fractional retainer support.",
    imagePath: "/assets/Flexible-Engagement-Options.jpg",
    isFlexibleEngagement: true,
    subModels: [
      {
        name: "HubSpot Health Check",
        details:
          "A comprehensive one-time platform audit built to identify architecture issues along with prescriptive remediation steps.",
      },
      {
        name: "Project-Based Implementation",
        details:
          "A structured, fixed-scope technical engagement designed to deploy or optimize a single, standalone HubSpot channel.",
      },
      {
        name: "Ongoing HubSpot Support",
        details:
          "Dedicated, fractional monthly optimization consulting for scaling teams requiring a reliable, proactive technical administrator.",
      },
    ],
  },
};
