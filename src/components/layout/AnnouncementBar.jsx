import { ANNOUNCEMENT_DATA } from "@/data/layout/navigationData";
import { announcementStyles } from "@/styles/layout/navbar.dark";
import { Mail, MessageCircle, Phone } from "lucide-react";

export default function AnnouncementBar() {
  const renderSocialIcon = (type) => {
    const iconClass =
      "w-4 h-4 transition-all duration-300 group-hover:scale-110 group-hover:text-[#60A5FA]";

    switch (type) {
      case "whatsapp":
        return <MessageCircle className={iconClass} />;
      case "phone":
        return <Phone className={iconClass} />;
      case "email":
        return <Mail className={iconClass} />;
      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        );
      case "facebook":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case "behance":
        return (
          <svg viewBox="0 0 24 24" fill="currentColor" className={iconClass}>
            <path d="M22 7h-7v2h7V7zm1 5.5c0-2.5-2-4.5-4.5-4.5H15v6h3.5c2.5 0 4.5-2 4.5-4.5S21 10.5 18.5 10.5H15v3zM3 7v10h5.5c2.5 0 4.5-2 4.5-4.5s-2-4.5-4.5-4.5H3zm3 2h2.5c1.4 0 2.5 1.1 2.5 2.5s-1.1 2.5-2.5 2.5H6V9z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className={announcementStyles.barWrapper}>
      <div className={announcementStyles.locationGroup}>
        <div className={announcementStyles.statusDot} />
        <span className={announcementStyles.locationText}>
          {ANNOUNCEMENT_DATA.location}
        </span>
      </div>

      <div className="flex items-center gap-6">
        {ANNOUNCEMENT_DATA.contacts.map((contact, idx) => (
          <a
            key={idx}
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
            title={`${contact.label}: ${contact.value}`}
            className={`${announcementStyles.contactLink} group flex items-center justify-center p-1.5 text-white/60 hover:text-white transition-all duration-300`}
            aria-label={contact.label}
          >
            {renderSocialIcon(contact.type)}
          </a>
        ))}
      </div>
    </div>
  );
}
