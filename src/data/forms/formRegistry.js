import dynamic from "next/dynamic";

export const formRegistry = {
  "web-application-development": dynamic(
    () => import("@/components/forms/software-development/web-form"),
  ),
  "mobile-application-development": dynamic(
    () => import("@/components/forms/software-development/mobile-form"),
  ),
  "custom-software-development": dynamic(
    () => import("@/components/forms/software-development/custom-software.jsx"),
  ),
  //   "ui-ux-design-prototyping": dynamic(
  //     () => import("@/components/forms/software-development/ui-ux-form"),
  //   ),
  //   "brand-creative-design": dynamic(
  //     () => import("@/components/forms/software-development/brand-creative-form"),
  //   ),
  //   "application-support-maintenance": dynamic(
  //     () =>
  //       import("@/components/forms/software-development/application-support-form"),
  //   ),

  //   "ai-engineering-automation": dynamic(
  //     () => import("@/components/forms/ai-crm-solutions/ai-engineering-form"),
  //   ),
  //   "hubspot-crm-implementation": dynamic(
  //     () => import("@/components/forms/ai-crm-solutions/hubspot-crm-form"),
  //   ),

  //   "talent-acquisition": dynamic(
  //     () =>
  //       import("@/components/forms/recruitment-services/talent-acquisition-form"),
  //   ),
  //   "campus-recruitment": dynamic(
  //     () => import("@/components/forms/recruitment-services/campus-recruitment"),
  //   ),

  //   "corporate-training": dynamic(
  //     () =>
  //       import("@/components/forms/training-placement/corporate-training-form"),
  //   ),
  //   "academic-training-partnerships": dynamic(
  //     () =>
  //       import("@/components/forms/training-placement/academic-partnerships-form"),
  //   ),
  //   "internship-programs": dynamic(
  //     () =>
  //       import("@/components/forms/training-placement/internship-programs-form"),
  //   ),
  //   "placement-assistance": dynamic(
  //     () =>
  //       import("@/components/forms/training-placement/placement-assistance-form"),
  //   ),
};
