"use client";

import { featuredProjectsData as data } from "@/app/hubspot/data/features/FeaturedProjects";
import { featuredProjectsStyles as s } from "@/app/hubspot/styles/features/featuredProjects";

export default function HubSpotFeaturedProjects() {
  return (
    <section id="projects" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>{data.header.eyebrow}</span>
          <h2 className={s.heading}>{data.header.heading}</h2>
          <p className={s.subtext}>{data.header.subtext}</p>
        </div>

        <div className={s.grid}>
          {data.projects.map((project, idx) => {
            const Icon = project.icon;

            return (
              <div key={idx} id={project.id} className={s.card}>
                <div className={s.cardContent}>
                  <div className={s.iconWrapper}>
                    <Icon className="w-4 h-4" />
                  </div>
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
