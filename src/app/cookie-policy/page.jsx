export const metadata = {
  title: "Cookie Policy | Zylxy Technologies",
  description: "Zylxy Technologies Cookie and Analytics Policy.",
};

export default function CookiePolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-24 text-white font-inter">
      <h1 className="text-3xl sm:text-4xl font-bold font-lexend mb-6 text-white">
        Cookie Policy
      </h1>
      <p className="text-[#A3B1CC] mb-6 leading-relaxed">
        Zylxy Technologies uses essential cookies and session tracking tokens (such as `hubspotutk`) strictly for analytics performance and security tracking.
      </p>
      <div className="space-y-6 text-[#A3B1CC]">
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">1. Essential Cookies</h2>
          <p>Essential tokens maintain form submission context and prevent cross-site request forgery.</p>
        </section>
        <section className="bg-white/5 border border-white/10 p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-white mb-2">2. Analytics Cookies</h2>
          <p>Analytical tokens help us evaluate service page performance and visitor navigation flows.</p>
        </section>
      </div>
    </main>
  );
}
