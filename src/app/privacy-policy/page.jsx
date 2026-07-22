export const metadata = {
  title: "Privacy Policy | Zylxy Technologies",
  description: "Zylxy Technologies Privacy Policy and Data Protection Standards.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white font-inter">
      <h1 className="text-3xl sm:text-4xl font-bold font-lexend mb-6 text-white">
        Privacy Policy
      </h1>
      <p className="text-[#A3B1CC] mb-6 leading-relaxed">
        At Zylxy Technologies, we take your privacy and data security with utmost seriousness. This Privacy Policy outlines how we collect, process, and protect your personal information in accordance with enterprise security benchmarks and privacy regulations.
      </p>
      <div className="space-y-6 text-[#A3B1CC]">
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">1. Data Collection</h2>
          <p>We collect personal information such as full name, email address, phone number, and organization details strictly when you interact with our intake portals or submit consultation requests.</p>
        </section>
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">2. Use of Information</h2>
          <p>Your information is used solely to respond to your technical project inquiries, schedule consultancy calls, and manage service delivery. We do not sell or monetize personal data.</p>
        </section>
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">3. Security Safeguards</h2>
          <p>All data ingestion pipelines enforce SSL/TLS encryption and conform to strict enterprise data storage protocols.</p>
        </section>
      </div>
    </main>
  );
}
