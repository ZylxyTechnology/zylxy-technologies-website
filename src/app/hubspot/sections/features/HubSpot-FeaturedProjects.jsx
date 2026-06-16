"use client";

import { featuredProjectsStyles as s } from "@/app/hubspot/styles/featuredProjects";
import {
  CalendarDays,
  ClipboardCheck,
  DatabaseZap,
  PieChart,
  Workflow,
} from "lucide-react";

export default function HubSpotFeaturedProjects() {
  const projects = [
    {
      title: "Academy Enrollment Automation",
      desc: "Automated application and enrollment processes using HubSpot workflows and custom objects.",
      icon: <Workflow className="w-5 h-5 stroke-[2]" />,
      tag: "Operations Hub",
    },
    {
      title: "Survey Management System",
      desc: "Built survey submission, follow-up, and reporting processes to improve data collection and visibility.",
      icon: <ClipboardCheck className="w-5 h-5 stroke-[2]" />,
      tag: "Data Operations",
    },
    {
      title: "Event Registration Tracking",
      desc: "Created automated registration and attendance workflows that reduced manual effort and improved reporting.",
      icon: <CalendarDays className="w-5 h-5 stroke-[2]" />,
      tag: "Marketing Automation",
    },
    {
      title: "Executive Reporting Dashboards",
      desc: "Developed dashboards that provide leadership teams with real-time program and operational metrics.",
      icon: <PieChart className="w-5 h-5 stroke-[2]" />,
      tag: "Analytics",
    },
    {
      title: "CRM Data Cleanup & Tuning",
      desc: "Improved data quality through duplicate management, property organization, and process optimization.",
      icon: <DatabaseZap className="w-5 h-5 stroke-[2]" />,
      tag: "CRM Architecture",
    },
  ];

  return (
    <section id="projects" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>PROVEN DEPLOYMENTS</span>
          <h2 className={s.heading}>Featured Projects</h2>
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
                <div className={s.tagRow}>
                  <span className={s.tag}>{project.tag}</span>
                </div>
              </div>
              <div className={s.baselineFlourish} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
