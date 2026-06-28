export const talentAcquisitionData = {
  hero: {
    badge: "For Recruiters & Partners",
    heading: {
      textBefore: "Scale your technical engine with ",
      gradientText: "Elite Talent",
      textAfter: ".",
    },
    descriptionPrimary:
      "Streamline your engineering, product, and operational hiring pipeline. Submit your open mandates and let our specialized placement ecosystem source, screen, and deliver vetted technical professionals.",
    descriptionSecondary:
      "In business since 2019 · Sourcing across India and the USA.",
    ctaText: "Post a Job Mandate ↓",
  },
  services: {
    title: "Our Capabilities",
    heading: "Tailored Recruitment Delivery Models",
    items: [
      {
        icon: "⚡",
        title: "Contingent Search",
        desc: "Rapid sourcing for critical engineering roles with dedicated talent matching pipelines.",
      },
      {
        icon: "💎",
        title: "Executive Placement",
        desc: "Sourcing high-caliber leadership including CTOs, VPs of Engineering, and Principal Architects.",
      },
      {
        icon: "🚀",
        title: "Project-Based RPO",
        desc: "End-to-end management of entire talent acquisition cycles for rapid scaling phases.",
      },
    ],
  },
  benefits: {
    title: "Why Partner With Us",
    heading: "Engineered Sourcing for Modern Teams",
    list: [
      {
        title: "Deep Technical Screening",
        desc: "Every candidate undergoes a rigid technical baseline assessment before submission.",
      },
      {
        title: "Cross-Border Capability",
        desc: "Active sourcing networks optimized across major technology hubs in the US and India.",
      },
      {
        title: "Accelerated Delivery Cycles",
        desc: "Initial vetted profiles delivered within 72 business hours from contract mapping.",
      },
    ],
  },
  process: {
    title: "Our Blueprint",
    heading: "The Sourcing Process",
    steps: [
      {
        step: "01",
        title: "Mandate Scoping",
        desc: "Aligning on core architecture requirements, stack variants, and team culture.",
      },
      {
        step: "02",
        title: "Targeted Sourcing",
        desc: "Leveraging our clean network and active databases to identify matches.",
      },
      {
        step: "03",
        title: "Rigid Vetting",
        desc: "Conducting code evaluations, system design rounds, and behavioral filters.",
      },
      {
        step: "04",
        title: "Profile Calibration",
        desc: "Presenting a refined short-list along with technical interview scorecards.",
      },
    ],
  },
  formConfig: {
    id: "recruiter-submission-form",
    heading: "Submit a Job Mandate",
    subheading:
      "Complete the form below to register your hiring requirements within our automated partner sheet.",
    fields: {
      companyName: {
        label: "Company Name *",
        placeholder: "e.g., Zylxy Technologies",
      },
      contactPerson: {
        label: "Contact Person *",
        placeholder: "Your full name",
      },
      email: { label: "Business Email *", placeholder: "name@company.com" },
      phone: { label: "Phone Number *", placeholder: "+1 or +91 phone number" },
      jobTitle: {
        label: "Job Title *",
        placeholder: "e.g., Senior Full-Stack Engineer",
      },
      location: {
        label: "Job Location *",
        placeholder: "e.g., Remote / New York / Bangalore",
      },
      experience: {
        label: "Experience Required *",
        placeholder: "e.g., 5+ Years",
      },
      salaryRange: {
        label: "Salary Range / Budget",
        placeholder: "e.g., $120k - $140k / ₹25L - ₹30L",
      },
      openings: { label: "Number of Openings", placeholder: "e.g., 3" },
      timeline: {
        label: "Hiring Timeline *",
        placeholder: "e.g., Immediate / 30 Days",
      },
      skills: {
        label: "Required Skills *",
        placeholder: "e.g., Next.js, TypeScript, AWS, Python",
      },
      description: {
        label: "Job Description Summary *",
        placeholder: "Paste core responsibilities and expectations...",
      },
      screeningQuestions: {
        label: "Custom Candidate Screening Questions",
        placeholder:
          "Enter questions (one per line) to display on the application portal...",
      },
      additionalNotes: {
        label: "Additional Requirements / Notes",
        placeholder:
          "Any specific background constraints, preferences, or benefits...",
      },
    },
    validationRules: {
      emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      minPhoneDigits: 10,
    },
  },
  cta: {
    heading: "Ready to Supercharge Your Engineering Velocity?",
    subheading:
      "Partner with a dedicated sourcing ecosystem that understands modern technical infrastructure stacks.",
    buttonText: "Schedule Partner Call",
  },
};
