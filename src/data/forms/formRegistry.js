import dynamic from "next/dynamic";
import { SERVICE_CATALOG } from "../catalog/serviceCatalog";

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

// Map serviceKeys from Catalog to their respective Form Components
const formComponentMapping = {
  [SERVICE_CATALOG["web-development"].serviceKey]: WebForm,
  [SERVICE_CATALOG["mobile-app"].serviceKey]: MobileForm,
  [SERVICE_CATALOG["custom-software"].serviceKey]: CustomSoftwareForm,
  [SERVICE_CATALOG["ui-ux-design"].serviceKey]: UiUxDesignForm,
  [SERVICE_CATALOG["creative-design"].serviceKey]: BrandDesignForm,
  [SERVICE_CATALOG["app-maintenance"].serviceKey]: AppMaintenanceForm,
  [SERVICE_CATALOG["ai-solutions"].serviceKey]: AiAutomationForm,
  [SERVICE_CATALOG["hubspot-crm"].serviceKey]: HubSpotCrmForm,
  
  // Note: Training / Placement often use the same form component for all variations
  [SERVICE_CATALOG["corporate-training"].serviceKey]: TrainingPlacementForm,
  [SERVICE_CATALOG["academic-partnerships"].serviceKey]: TrainingPlacementForm,
  [SERVICE_CATALOG["internship-programs"].serviceKey]: TrainingPlacementForm,
  [SERVICE_CATALOG["placement-assistance"].serviceKey]: TrainingPlacementForm,
  [SERVICE_CATALOG["find-jobs"].serviceKey]: TrainingPlacementForm,
  [SERVICE_CATALOG["training-placement"].serviceKey]: TrainingPlacementForm,
  
  // Recruitment
  [SERVICE_CATALOG["talent-acquisition"].serviceKey]: GeneralLeadForm,
  [SERVICE_CATALOG["campus-recruitment"].serviceKey]: GeneralLeadForm,

  [SERVICE_CATALOG["general-lead"].serviceKey]: GeneralLeadForm,
  "zylxy-lead-gen": GeneralLeadForm, // Keep legacy fallback just in case for now
};

export const formRegistry = formComponentMapping;

// Strict Drift Prevention Gate
if (process.env.NODE_ENV !== "production") {
  import("../../lib/validation/catalogValidator").then(({ validateServiceCatalog }) => {
    validateServiceCatalog();
  }).catch(console.error);
}
