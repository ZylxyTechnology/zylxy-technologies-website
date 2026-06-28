import {
  CheckSquare,
  ClipboardList,
  Database,
  LineChart,
  Zap,
} from "lucide-react";

export const featuredProjectsData = {
  header: {
    eyebrow: "PROVEN DEPLOYMENTS",
    heading: "Featured Operational Projects",
    subtext:
      "Real-world technical solutions engineered to eliminate manual friction and maximize database efficiency for scale-ready organizations.",
  },
  projects: [
    {
      icon: Zap,
      title: "Academy Enrollment Automation",
      desc: "Automated application and enrollment processes using HubSpot workflows and custom objects.",
      tags: ["Operations Hub", "Workflows", "Custom Objects"],
    },
    {
      icon: CheckSquare,
      title: "Survey Management System",
      desc: "Built survey submission, follow-up, and reporting processes to improve data collection and visibility.",
      tags: ["Data Operations", "Automation", "Feedback Loops"],
    },
    {
      icon: ClipboardList,
      title: "Event Registration & Tracking",
      desc: "Created automated registration and attendance workflows that reduced manual effort and improved reporting.",
      tags: ["Marketing Automation", "Events Channel", "CRM Optimization"],
    },
    {
      icon: LineChart,
      title: "Executive Reporting Dashboards",
      desc: "Developed dashboards that provide leadership teams with real-time program and operational metrics.",
      tags: ["Analytics", "Custom Dashboards", "Reporting Hub"],
    },
    {
      icon: Database,
      title: "CRM Data Cleanup & Tuning",
      desc: "Improved data quality through duplicate management, property organization, and process optimization.",
      tags: ["CRM Architecture", "Data Hygiene", "Record Deduplication"],
    },
  ],
};
