import dynamic from "next/dynamic";

const CustomSoftwareForm = dynamic(
  () => import("@/components/forms/software-development/custom-software.jsx"),
);
const UiUxDesignForm = dynamic(
  () => import("@/components/forms/software-development/ui-ux-design.jsx"),
);
const AppMaintenanceForm = dynamic(
  () => import("@/components/forms/software-development/app-maintenance.jsx"),
);
const WebForm = dynamic(
  () => import("@/components/forms/software-development/web-form"),
);
const MobileForm = dynamic(
  () => import("@/components/forms/software-development/mobile-form"),
);
const BrandDesignForm = dynamic(
  () => import("@/components/forms/software-development/brand-design.jsx"),
);
const AiAutomationForm = dynamic(
  () => import("@/components/forms/ai-crm-solutions/ai-automation.jsx"),
);
const HubSpotCrmForm = dynamic(
  () => import("@/app/hubspot/components/forms/consultationForm.jsx"),
);
const TrainingPlacementForm = dynamic(
  () => import("@/components/forms/training-placement/TrainingPlacement.jsx"),
);
const GeneralLeadForm = dynamic(
  () => import("@/components/forms/general-lead/GeneralLeadForm.jsx"),
);

export const formRegistry = {
  "web-application-development": WebForm,
  "web-development": WebForm,

  "mobile-app-development": MobileForm,
  "mobile-application-development": MobileForm,

  "custom-software-development": CustomSoftwareForm,

  "ui-ux-design": UiUxDesignForm,
  "ui-ux-design-prototyping": UiUxDesignForm,

  "brand-identity-design": BrandDesignForm,
  "brand-creative-design": BrandDesignForm,

  "application-support": AppMaintenanceForm,
  "application-support-maintenance": AppMaintenanceForm,

  "ai-engineering-automation": AiAutomationForm,
  "ai-solutions": AiAutomationForm,

  "hubspot-crm-implementation": HubSpotCrmForm,
  "hubspot-crm": HubSpotCrmForm,

  "corporate-training": TrainingPlacementForm,
  "academic-partnerships": TrainingPlacementForm,
  "internship-programs": TrainingPlacementForm,
  "placement-assistance": TrainingPlacementForm,

  "zylxy-lead-gen": GeneralLeadForm,
  "general-lead": GeneralLeadForm,
};
