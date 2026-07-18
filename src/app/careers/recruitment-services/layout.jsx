export const metadata = {
  title: "Recruitment Services | Zylxy Technologies",
  description:
    "Enterprise technical sourcing engines and automated academic deployment matching networks.",
};

export default function RecruitmentLayout({ children }) {
  return (
    <div className="w-full bg-[#050E21] min-h-screen relative selection:bg-[#2563EB]/30 selection:text-white antialiased">
      {children}
    </div>
  );
}
