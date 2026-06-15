"use client";

import { navbarStyles as s } from "@/app/hubspot/styles/navbar";
import {
  Award,
  Briefcase,
  CheckSquare,
  ChevronDown,
  ClipboardList,
  Globe,
  GraduationCap,
  Heart,
  HelpCircle,
  Layers,
  LineChart,
  Network,
  Rocket,
  ShieldCheck,
  TrendingUp,
  UserCheck,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";

export default function HubSpotNavbar() {
  return (
    <nav className={s.nav}>
      <div className={s.container}>
        <Link href="/hubspot" className={s.logoLink}>
          <div className={s.logoIconWrapper}>
            <Network className="w-5 h-5 stroke-[2.5]" />
            <div className={s.logoNodePill} />
          </div>
          <div className={s.textWrapper}>
            <span className={s.brandTitle}>HubSpot CRM</span>
            <span className={s.brandSubtitle}>Consultant Specialist</span>
          </div>
        </Link>

        <div className={s.menuList}>
          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>About</button>
          </div>

          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>
              Services <ChevronDown className={s.chevron} />
            </button>
            <div className={s.megaMenu}>
              <div className={s.megaLeftCol}>
                <h4 className={s.megaLeftTitle}>HubSpot Services</h4>
                <p className={s.megaLeftDesc}>
                  Explore structured configuration and consulting packages
                  designed to transform your operations.
                </p>
              </div>
              <div className={s.megaGrid}>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Layers className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Starter Package</h5>
                    <p className={s.megaCardDesc}>
                      Build a strong foundation with an organized CRM, clean
                      data, and basic automation.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Growth Package</h5>
                    <p className={s.megaCardDesc}>
                      Expand capabilities with advanced automation, lead
                      nurturing workflows, and pipeline customization.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Custom Package</h5>
                    <p className={s.megaCardDesc}>
                      Design advanced solutions with custom objects, custom
                      properties, and strategic process optimization.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Flexible Engagement Options
                    </h5>
                    <p className={s.megaCardDesc}>
                      Delivered via a one-time Health Check audit, a fixed-scope
                      Project-Based Implementation, or monthly Ongoing HubSpot
                      Support to best fit your organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>
              Industries <ChevronDown className={s.chevron} />
            </button>
            <div className={s.megaMenu}>
              <div className={s.megaLeftCol}>
                <h4 className={s.megaLeftTitle}>Industry Solutions</h4>
                <p className={s.megaLeftDesc}>
                  Tailored operational models deployed frameworks specific to
                  your primary impact dynamic.
                </p>
              </div>
              <div className={s.megaGrid}>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Heart className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Nonprofits</h5>
                    <p className={s.megaCardDesc}>
                      Built to streamline donor workflows, grant pipelines, and
                      impact transparency metrics.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Small Businesses</h5>
                    <p className={s.megaCardDesc}>
                      Strategic setups to automate high-touch manual admin tasks
                      and scale daily lead routing.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Users className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Workforce Development Programs
                    </h5>
                    <p className={s.megaCardDesc}>
                      Engineered tracking architectures for application queues,
                      job placements, and metrics.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Educational Organizations
                    </h5>
                    <p className={s.megaCardDesc}>
                      Custom structures for system registration, scheduling
                      automation, and cohort mapping.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Rocket className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Accelerators & Incubators
                    </h5>
                    <p className={s.megaCardDesc}>
                      Unified relational tracking across program applications,
                      venture rounds, and founders.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Globe className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Community Organizations</h5>
                    <p className={s.megaCardDesc}>
                      Centralized communication engines built to optimize
                      localized outreach systems.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Membership-Based Organizations
                    </h5>
                    <p className={s.megaCardDesc}>
                      Automated renewals, tiered benefits access management, and
                      contact subscription states.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Award className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>
                      Professional Service Firms
                    </h5>
                    <p className={s.megaCardDesc}>
                      Refined consultation pipelines, clear deal stages, and
                      smart billing account integrations.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={s.menuItemWrapper}>
            <button className={s.menuButton}>
              Projects <ChevronDown className={s.chevron} />
            </button>
            <div className={s.megaMenu}>
              <div className={s.megaLeftCol}>
                <h4 className={s.megaLeftTitle}>Featured Solutions</h4>
                <p className={s.megaLeftDesc}>
                  Deep dive into actual deployments engineered across automation
                  channels and complex records.
                </p>
              </div>
              <div className={s.megaGrid}>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <Zap className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Academy Enrollment</h5>
                    <p className={s.megaCardDesc}>
                      Streamlined application and enrollment systems using
                      workflows and custom objects.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Survey Management</h5>
                    <p className={s.megaCardDesc}>
                      Built survey submission, automated follow-ups, and custom
                      visibility reporting.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <ClipboardList className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Event Registration</h5>
                    <p className={s.megaCardDesc}>
                      Created automated registration and attendance workflows to
                      reduce manual tracking.
                    </p>
                  </div>
                </div>
                <div className={s.megaCard}>
                  <div className={s.megaCardIcon}>
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div className={s.megaCardContent}>
                    <h5 className={s.megaCardTitle}>Reporting Dashboards</h5>
                    <p className={s.megaCardDesc}>
                      Real-time operational metric setups designed specifically
                      for leadership teams.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.actionWrapper}>
          <button className={s.primaryBtn}>Book a Free Consultation</button>
        </div>
      </div>
    </nav>
  );
}
