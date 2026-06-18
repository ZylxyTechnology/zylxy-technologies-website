"use client";

import { whyMeData } from "@/app/hubspot/data/why-me";
import { whyMeStyles as s } from "@/app/hubspot/styles/whyMe";
import { Users } from "lucide-react";

export default function WhyMe() {
  const leader = whyMeData.directors[0];

  return (
    <section id="why-me" className={s.section}>
      <div className={s.container}>
        <div className={s.header}>
          <span className={s.eyebrow}>{whyMeData.header.eyebrow}</span>
          <h2 className={s.heading}>{whyMeData.header.heading}</h2>
        </div>

        <div className="w-full flex flex-col gap-6">
          <div className={s.frameworkHeader}>
            <h3 className={s.frameworkTitle}>Leadership Framework</h3>
          </div>

          <div className={s.teamGrid}>
            <div className={s.directorCard}>
              <div className={s.profileHeader}>
                <div className={s.profileInfo}>
                  <div className={s.photoFrame}>
                    <img
                      src={leader.photo}
                      alt={leader.name}
                      className={s.directorPhoto}
                    />
                  </div>
                  <div className={s.metaBlock}>
                    <h4 className={s.directorName}>{leader.name}</h4>
                    <span className={s.directorRole}>{leader.role}</span>
                  </div>
                </div>
                <img
                  src={leader.companyLogo}
                  alt="Company Logo"
                  className={s.logoFrame}
                />
              </div>

              <p className={s.bioText}>{leader.bio}</p>

              <div className="space-y-3 w-full">
                <div className="flex items-center gap-2">
                  <span className={s.certSectionTitle}>
                    Verified Credentials
                  </span>
                </div>

                <div className={s.certGrid}>
                  {leader.certifications.map((cert, cIdx) => (
                    <div key={cIdx} className={s.certCard}>
                      <div className={s.certImageWrapper}>
                        <img
                          src={cert.image}
                          alt={cert.title}
                          className={s.certImage}
                        />
                      </div>
                      <div className={s.certMeta}>
                        <h5 className={s.certTitle}>{cert.title}</h5>
                        <span className={s.certCode}>ID: {cert.code}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className={s.placeholderCard}>
              <div className={s.placeholderIconBox}>
                <Users className="w-6 h-6 stroke-[1.5]" />
              </div>
              <div className="space-y-1">
                <h4 className={s.placeholderTitle}>Co-Founder Integration</h4>
                <p className={s.placeholderDesc}>
                  Professional profile history, tactical operations focus, and
                  validated industry certifications will populate this matrix
                  during the next milestone deployment phase.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className={s.valueGrid}>
          {whyMeData.valueCards.map((card, idx) => (
            <div key={idx} className={s.valueCard}>
              <div className={s.badgeWrapper}>
                <span>0{idx + 1}</span>
              </div>
              <h3 className={s.cardTitle}>{card.title}</h3>
              <p className={s.cardDesc}>{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
