export const metadata = {
  title: "Terms of Service | Zylxy Technologies",
  description: "Zylxy Technologies Terms of Service and Operational Guidelines.",
};

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white font-inter">
      <h1 className="text-3xl sm:text-4xl font-bold font-lexend mb-6 text-white">
        Terms of Service
      </h1>
      <p className="text-[#A3B1CC] mb-6 leading-relaxed">
        Welcome to Zylxy Technologies. By accessing or using our websites, client portals, and software development services, you agree to comply with and be bound by the following terms and conditions.
      </p>
      <div className="space-y-6 text-[#A3B1CC]">
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">1. Intellectual Property</h2>
          <p>All custom software engineering deliverables, codebases, and architectural designs provided under client contracts belong to their respective client owners upon complete settlement.</p>
        </section>
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">2. Acceptable Platform Use</h2>
          <p>Users must not submit malicious payloads, automated spam sequences, or interfere with infrastructure API security boundaries.</p>
        </section>
      </div>
    </main>
  );
}
