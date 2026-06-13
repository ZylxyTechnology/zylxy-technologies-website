export const exploreOpportunitiesData = {
  hero: {
    badge: "Join Our Technical Network",
    heading: {
      textBefore: "Build your engineering career at ",
      gradientText: "Digital Scale",
      textAfter: ".",
    },
    descriptionPrimary:
      "Explore high-impact technical, product, and operational opportunities. We connect talented builders with challenging mandates across cutting-edge technology stacks.",
    descriptionSecondary:
      "Delivering engineering velocity and production-grade software solutions since 2019.",
    ctaText: "View Open Roles ↓",
  },
  intro: {
    heading: "The Engineering Culture",
    description:
      "We bypass administrative friction to emphasize pristine code execution, architecture ownership, and rapid iteration. Here, your work explicitly defines scale vectors.",
  },
  benefits: {
    title: "Perks & Alignment",
    heading: "Designed for High Performers",
    list: [
      {
        icon: "💻",
        title: "Modern Tech Ecosystems",
        desc: "Work with highly optimized setups using Next.js, TypeScript, advanced cloud infrastructure, and intelligent tools.",
      },
      {
        icon: "🌍",
        title: "Remote-First Flexibility",
        desc: "Asynchronous workflow alignment allowing you to execute tasks where you are most productive.",
      },
      {
        icon: "📈",
        title: "Accelerated Growth Paths",
        desc: "Meritocracy-driven calibration cycles that match compensation scaling directly with your architecture output.",
      },
    ],
  },
  formConfig: {
    id: "candidate-application-form",
    heading: "Apply for this Position",
    subheading:
      "Complete your application layout profile below. Ensure mandatory screening answers match the posted requirements.",
    fields: {
      fullName: { label: "Full Name *", placeholder: "Your full name" },
      email: { label: "Email Address *", placeholder: "you@example.com" },
      phone: { label: "Phone Number *", placeholder: "+1 or +91 phone number" },
      currentLocation: {
        label: "Current Location *",
        placeholder: "City, Country",
      },
      experience: {
        label: "Total Experience (Years) *",
        placeholder: "e.g., 4",
      },
      skills: {
        label: "Core Tech Stack / Skills *",
        placeholder: "e.g., React, Node.js, Go, Docker",
      },
      linkedin: {
        label: "LinkedIn Profile URL",
        placeholder: "https://linkedin.com/in/username",
      },
      portfolio: {
        label: "Portfolio / GitHub URL",
        placeholder: "https://github.com/username",
      },
      resume: {
        label: "Resume File URL *",
        placeholder: "Provide link to hosted PDF (Google Drive/Dropbox)",
      },
      offerLetter: {
        label: "Current Counter Offer Letter URL (Optional)",
        placeholder: "Provide link to hosted verification document",
      },
      screeningAnswers: {
        label: "Job-Specific Screening Answers *",
        placeholder: "Answer specified mandatory question matrices...",
      },
      message: {
        label: "Additional Message / Context",
        placeholder:
          "Tell us about your technical achievements or constraints...",
      },
    },
    validationRules: {
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      minPhoneDigits: 10,
    },
    messages: {
      success:
        "Your candidate profile application was recorded cleanly inside our pipeline.",
      error:
        "Transmission fault detected. Verify input boundaries and try again.",
    },
  },
  cta: {
    heading: "Don't see a role matching your stack alignment?",
    subheading:
      "Submit a general background application anyway. Our technical sourcing engine runs continuous passive calibrations against incoming partner mandates.",
    buttonText: "Join Our Talent Pool",
  },
};
