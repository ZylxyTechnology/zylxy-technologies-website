"use client";

import { featuredProjectsStyles as s } from "@/app/hubspot/styles/featuredProjects";
import {
  CheckSquare,
  ClipboardList,
  Database,
  LineChart,
  Zap,
} from "lucide-react";

export default function HubSpotFeaturedProjects() {
  const projects = [
    {
      icon: <Zap className="w-4 h-4" />,
      title: "Academy Enrollment Automation",
      desc: "Automated application and enrollment processes using HubSpot workflows and custom objects.",
      tags: ["Operations Hub", "Workflows", "Custom Objects"],
    },
    {
      icon: <CheckSquare className="w-4 h-4" />,
      title: "Survey Management System",
      desc: "Built survey submission, follow-up, and reporting processes to improve data collection and visibility.",
      tags: ["Data Operations", "Automation", "Feedback Loops"],
    },
    {
      icon: <ClipboardList className="w-4 h-4" />,
      title: "Event Registration & Tracking",
      desc: "Created automated registration and attendance workflows that reduced manual effort and improved reporting.",
      tags: ["Marketing Automation", "Events Channel", "CRM Optimization"],
    },
    {
      icon: <LineChart className="w-4 h-4" />,
      title: "Executive Reporting Dashboards",
      desc: "Developed dashboards that provide leadership teams with real-time program and operational metrics.",
      tags: ["Analytics", "Custom Dashboards", "Reporting Hub"],
    },
    {
      icon: <Database className="w-4 h-4" />,
      title: "CRM Data Cleanup & Tuning",
      desc: "Improved data quality through duplicate management, property organization, and process optimization.",
      tags: ["CRM Architecture", "Data Hygiene", "Record Deduplication"],
    },
  ];

  return (
    <section id="projects" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>PROVEN DEPLOYMENTS</span>
          <h2 className={s.heading}>Featured Operational Projects</h2>
          <p className={s.subtext}>
            Real-world technical solutions engineered to eliminate manual
            friction and maximize database efficiency for scale-ready
            organizations.
          </p>
        </div>

        <div className={s.grid}>
          {projects.map((project, idx) => (
            <div key={idx} className={s.card}>
              <div className={s.cardContent}>
                <div className={s.iconWrapper}>{project.icon}</div>
                <h3 className={s.cardTitle}>{project.title}</h3>
                <p className={s.cardDesc}>{project.desc}</p>
              </div>

              <div className="w-full">
                <div className={s.tagRow}>
                  {project.tags.map((tag, tIdx) => (
                    <span key={tIdx} className={s.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={s.baselineFlourish} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
