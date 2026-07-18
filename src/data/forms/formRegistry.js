import dynamic from "next/dynamic";
const TrainingPlacementForm = dynamic(
  () => import("@/components/forms/training-placement/TrainingPlacement.jsx"),
);

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
  "ui-ux-design": dynamic(
    () => import("@/components/forms/software-development/ui-ux-design.jsx"),
  ),
  "brand-creative-design": dynamic(
    () => import("@/components/forms/software-development/brand-design.jsx"),
  ),
  "application-support": dynamic(
    () => import("@/components/forms/software-development/app-maintenance.jsx"),
  ),

  "ai-engineering-automation": dynamic(
    () => import("@/components/forms/ai-crm-solutions/ai-automation.jsx"),
  ),
  "hubspot-crm-implementation": dynamic(
    () => import("@/app/hubspot/components/forms/consultationForm.jsx"),
  ),
  "corporate-training": TrainingPlacementForm,
  "academic-partnerships": TrainingPlacementForm,
  "internship-programs": TrainingPlacementForm,
  "placement-assistance": TrainingPlacementForm,
};
