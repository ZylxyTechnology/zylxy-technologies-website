import { Container } from "@/components/layout/core/Container";
import { Section } from "@/components/layout/core/Section";
import { MotionContainer } from "@/components/motion/MotionContainer";
import { MotionGrid } from "@/components/motion/MotionGrid";
import { MotionItem } from "@/components/motion/MotionItem";
import { MotionReveal } from "@/components/motion/MotionReveal";
import { leadershipData } from "@/data/sections/leadershipData";
import { leadershipStyles as s } from "@/styles/sections/leadership";

export default function LeadershipSection() {
  return (
    <Section id="leadership-section" className={s.section}>
      <Container className={s.wrapper}>
        <MotionReveal direction="up">
          <div className={s.headerRow}>
            <div className={s.titleArea}>
              <div className={s.pillLine}>
                <div className={s.pillLineBar} />
                <span className={s.pillText}>
                  {leadershipData.header.pillText}
                </span>
              </div>
              <h2 className={s.mainHeading}>
                {leadershipData.header.mainHeading}
              </h2>
            </div>
            <p className={s.subHeading}>
              {leadershipData.header.subHeading}
            </p>
          </div>
        </MotionReveal>

        <MotionGrid className={s.grid}>
          <div className={s.gridGlow} />
          {leadershipData.team.map((member, idx) => {
            const isFeatured = idx === 0;
            const isStandard = idx === 1;
            
            let cardClass = s.cardBase + " ";
            if (isFeatured) cardClass += s.cardFeatured;
            else if (isStandard) cardClass += s.cardStandard;
            else cardClass += s.cardWide;

            return (
              <MotionItem direction="up" key={member.name} className={cardClass}>
                <div className={s.cardGlow} />
                <div className={s.profileRow}>
                  <div className={isFeatured ? s.avatarWrapperFeatured : s.avatarWrapperStandard}>
                    <div className={s.avatarRing} />
                    <div
                      className={s.avatarBox}
                      style={{
                        background: `linear-gradient(135deg, ${member.color}ee, ${member.color}88)`,
                        boxShadow: `0 8px 32px ${member.color}40`,
                      }}
                    >
                      <span className={isFeatured ? s.avatarTextFeatured : s.avatarTextStandard}>
                        {member.initials}
                      </span>
                    </div>
                  </div>
                  
                  <div className={s.metaDetails}>
                    <h3 className={s.leaderName}>{member.name}</h3>
                    <p className={s.leaderRole}>{member.role}</p>
                    <p className={s.leaderSince}>
                      {member.since}
                    </p>
                  </div>
                </div>

                <div className={isFeatured ? s.contentColFeatured : s.contentColStandard}>
                  <p className={isFeatured ? s.leaderDescFeatured : s.leaderDescStandard}>{member.desc}</p>
                  <div className={s.tagBox}>
                    {member.tags.map((tag) => (
                      <span key={tag} className={s.tagItem}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MotionItem>
            );
          })}
        </MotionGrid>
      </Container>
    </Section>
  );
}
