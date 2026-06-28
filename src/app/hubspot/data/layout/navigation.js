import {
  Award,
  Briefcase,
  CheckSquare,
  ClipboardList,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Layers,
  LineChart,
  Rocket,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";

export const navigationMenuLinks = {
  mainNav: [
    { name: "Home", href: "/hubspot" },
    { name: "About", href: "/hubspot#why-me" },
  ],
  dropdowns: [
    {
      id: "services",
      label: "Services",
      desc: "Explore structured configuration and consulting packages designed to transform your operations.",
      items: [
        {
          title: "Starter Package",
          desc: "Build a strong foundation with an organized CRM, clean data, and basic automation.",
          icon: Layers,
          href: "/hubspot/packages/starter",
        },
        {
          title: "Growth Package",
          desc: "Expand capabilities with advanced automation, lead nurturing workflows, and pipeline customization.",
          icon: TrendingUp,
          href: "/hubspot/packages/growth",
        },
        {
          title: "Custom Package",
          desc: "Design advanced solutions with custom objects, custom properties, and strategic process optimization.",
          icon: ShieldCheck,
          href: "/hubspot/packages/custom",
        },
        {
          title: "Flexible Engagement Options",
          desc: "Delivered via a one-time Health Check audit, a fixed-scope Project-Based Implementation, or monthly Ongoing HubSpot Support to best fit your organization.",
          icon: HelpCircle,
          href: "/hubspot/packages/flexible",
        },
      ],
    },
    {
      id: "industries",
      label: "Industries",
      desc: "Tailored operational models deployed frameworks specific to your primary impact dynamic.",
      items: [
        {
          title: "Nonprofits",
          desc: "Built to streamline donor workflows, grant pipelines, and impact transparency metrics.",
          icon: Heart,
          href: "/hubspot#projects",
        },
        {
          title: "Small Businesses",
          desc: "Strategic setups to automate high-touch manual admin tasks and scale daily lead routing.",
          icon: Briefcase,
          href: "/hubspot#projects",
        },
        {
          title: "Workforce Development",
          desc: "Engineered tracking architectures for application queues, job placements, and metrics.",
          icon: Users,
          href: "/hubspot#projects",
        },
        {
          title: "Educational Organizations",
          desc: "Custom structures for system registration, scheduling automation, and cohort mapping.",
          icon: GraduationCap,
          href: "/hubspot#projects",
        },
        {
          title: "Accelerators & Incubators",
          desc: "Unified relational tracking across program applications, venture rounds, and founders.",
          icon: Rocket,
          href: "/hubspot#projects",
        },
        {
          title: "Community Organizations",
          desc: "Centralized communication engines built to optimize localized outreach systems.",
          icon: Globe,
          href: "/hubspot#projects",
        },
        {
          title: "Membership-Based",
          desc: "Automated renewals, tiered benefits access management, and contact subscription states.",
          icon: UserCheck,
          href: "/hubspot#projects",
        },
        {
          title: "Professional Service Firms",
          desc: "Refined consultation pipelines, clear deal stages, and smart billing account integrations.",
          icon: Award,
          href: "/hubspot#projects",
        },
      ],
    },
    {
      id: "projects",
      label: "Projects",
      desc: "Deep dive into actual deployments engineered across automation channels and complex records.",
      items: [
        {
          title: "Academy Enrollment",
          desc: "Streamlined application and enrollment systems using workflows and custom objects.",
          icon: Zap,
          href: "/hubspot#academy-enrollment",
        },
        {
          title: "Survey Management",
          desc: "Built survey submission, automated follow-ups, and custom visibility reporting.",
          icon: CheckSquare,
          href: "/hubspot#survey-management",
        },
        {
          title: "Event Registration",
          desc: "Created automated registration and attendance workflows to reduce manual tracking.",
          icon: ClipboardList,
          href: "/hubspot#event-registration",
        },
        {
          title: "Reporting Dashboards",
          desc: "Real-time operational metric setups designed specifically for leadership teams.",
          icon: LineChart,
          href: "/hubspot#reporting-dashboards",
        },
      ],
    },
  ],
};
