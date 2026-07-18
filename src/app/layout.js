import ClientLayoutWrapper from "@/components/layout/ClientLayoutWrapper";
import "@/styles/animations.css";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

// Because this is now a Server Component, you can utilize the Metadata API for SEO
export const metadata = {
  title: "Zylxy Technologies | Engineered for Digital Scale",
  description:
    "Enterprise software, AI solutions, and modern digital platforms.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#050e21]">
        {/* All client logic, animations, and conditional routing is handled securely inside the wrapper */}
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
