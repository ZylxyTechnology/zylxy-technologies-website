import { ANNOUNCEMENT_DATA } from "@/data/navigationData";
import { announcementStyles } from "@/styles/navbar/navbar.dark";
import { Mail, MessageCircle } from "lucide-react";

export default function AnnouncementBar() {
  // Helper function to dynamically map key strings/URLs to distinct vector nodes
  const renderSocialIcon = (platform) => {
    const iconClass =
      "w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110";
    const platformKey = platform.toLowerCase();

    if (platformKey.includes("mail") || platformKey.includes("@")) {
      return <Mail className={iconClass} />;
    }
    if (platformKey.includes("whatsapp") || platformKey.includes("phone")) {
      return <MessageCircle className={iconClass} />;
    }
    if (platformKey.includes("linkedin")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    }
    if (platformKey.includes("facebook")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      );
    }
    if (platformKey.includes("behance")) {
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={iconClass}
        >
          <path d="M9 12h2a2.5 2.5 0 0 0 0-5H9v5z" />
          <path d="M9 17h2.5a2.5 2.5 0 0 0 0-5H9v5z" />
          <path d="M6 7v10h5.5a4.5 4.5 0 0 0 0-9H6z" />
          <path d="M16 14h5a3 3 0 0 0-6 0v1a3 3 0 0 0 6 0" />
          <path d="M16 9h4" />
        </svg>
      );
    }

    // Default fallback value text string if explicit match isn't encountered
    return (
      <span className="text-[11px] font-medium uppercase font-sans tracking-wider">
        {platform}
      </span>
    );
  };

  // Safe wrapper fallback logic to isolate specific redirection targets
  const getHrefTarget = (contact) => {
    const target = contact.toLowerCase();
    if (target.includes("@")) return `mailto:${contact}`;
    if (target.match(/^\+?[0-9\s\-]+$/))
      return `https://wa.me/${contact.replace(/[^0-9]/g, "")}`;
    return contact;
  };

  return (
    <div className={announcementStyles.barWrapper}>
      <div className={announcementStyles.locationGroup}>
        <div className={announcementStyles.statusDot} />
        <span className={announcementStyles.locationText}>
          {ANNOUNCEMENT_DATA.location}
        </span>
      </div>

      <div className="flex items-center gap-5">
        {ANNOUNCEMENT_DATA.contacts.map((contact, idx) => (
          <a
            key={idx}
            href={getHrefTarget(contact)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${announcementStyles.contactLink} group flex items-center justify-center p-1 text-white/75 hover:text-white transition-colors duration-200`}
            aria-label={`Maps to external connection portal route ${idx + 1}`}
          >
            {renderSocialIcon(contact)}
          </a>
        ))}
      </div>
    </div>
  );
}
