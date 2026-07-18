import SmoothScroll from "@/app/careers/components/recruitment-services/smoothScroll";
import { Lock } from "lucide-react";
import { notFound } from "next/navigation";
import Benefits from "../../components/recruitment-services/Benefits";
import CTA from "../../components/recruitment-services/CTA";
import Features from "../../components/recruitment-services/Features";
import Hero from "../../components/recruitment-services/Hero";
import Process from "../../components/recruitment-services/Process";
import { campusRecruitmentData } from "../../data/recruitment-services/campus-recruitment-data";
import { talentAcquisitionData } from "../../data/recruitment-services/talent-acquisition-data";
import CampusRecruitmentForm from "../../forms/components/CampusRecruitmentForm";
import TalentAcquisitionForm from "../../forms/components/TalentAcquisitionForm";

export async function generateStaticParams() {
  return [{ slug: "campus-recruitment" }, { slug: "talent-acquisition" }];
}

export default async function RecruitmentServicePage({ params }) {
  const resolvedParams = await params;
  const { slug } = resolvedParams;

  let data = null;

  if (slug === "campus-recruitment") {
    data = campusRecruitmentData;
  } else if (slug === "talent-acquisition") {
    data = talentAcquisitionData;
  } else {
    notFound();
  }

  return (
    <SmoothScroll>
      <main className="w-full min-h-screen bg-[#050E21] overflow-hidden relative pb-12 selection:bg-[#2563EB]/30 selection:text-white antialiased">
        <Hero data={data.hero} stats={data.statistics} />
        <Features data={data.features} />
        <Process data={data.process} />
        <Benefits data={data.benefits} />

        <div
          id="recruitment-form-anchor"
          className="max-w-4xl mx-auto px-6 sm:px-8 mt-12 mb-12 scroll-mt-32"
        >
          {slug === "campus-recruitment" ? (
            <CampusRecruitmentForm />
          ) : slug === "talent-acquisition" ? (
            <TalentAcquisitionForm />
          ) : (
            <div className="w-full bg-[#0D1B3E]/40 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 sm:p-20 text-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-size-[250%_250%] animate-shimmer pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl bg-[#050E21] border border-white/[0.1] flex items-center justify-center mx-auto mb-8 shadow-inner relative z-10">
                <Lock className="w-7 h-7 text-[#60A5FA]" />
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded border border-[#2563EB]/30 bg-[#2563EB]/10 text-[10px] font-bold font-inter text-[#60A5FA] tracking-widest uppercase mb-6 relative z-10">
                {data.placeholder.badge}
              </div>

              <h3 className="font-syne font-extrabold text-2xl sm:text-4xl text-white tracking-tight mb-4 relative z-10">
                {data.placeholder.title}
                <span className="block text-xl text-slate-400 mt-2">
                  {data.placeholder.subtitle}
                </span>
              </h3>

              <p className="text-sm sm:text-base text-slate-500 font-inter leading-relaxed max-w-lg mx-auto relative z-10">
                {data.placeholder.description}
              </p>
            </div>
          )}
        </div>

        <CTA data={data.cta} />
      </main>
    </SmoothScroll>
  );
}
