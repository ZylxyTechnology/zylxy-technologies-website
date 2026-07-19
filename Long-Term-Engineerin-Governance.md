# Long-Term Engineering Governance & Developer Documentation

This document serves as the absolute baseline for all future development at Zylxy Technologies. It establishes strict, reusable engineering standards to guarantee maintainability, scalability, and CMS readiness for the next 5+ years.

---

## 1. FILE ORGANIZATION GOVERNANCE
**Standardization:**
*   **Feature Grouping:** Components must be grouped by domain (e.g., `src/components/services/`, `src/components/layout/`).
*   **File Naming:** React components must use `PascalCase.jsx`. Utility functions and data files must use `camelCase.js`.
*   **Barrel Exports:** We explicitly avoid `index.js` barrel files to prevent circular dependencies and tree-shaking issues. Direct imports (`@/components/services/ServiceCard`) are mandatory.

## 2. IMPORT STRUCTURE GOVERNANCE
**Standardization:**
1.  React/Next.js native imports (`"react"`, `"next/link"`).
2.  Absolute imports for internal modules (`@/components/`, `@/data/`, `@/styles/`).
3.  Relative imports are **strictly forbidden** (no `../../components/`) to ensure refactoring safety.
4.  No duplicate imports. 

## 3. PROP API CONSISTENCY
**Standardization:**
*   **Data Injection:** Complex components must accept typed data objects (e.g., `<ServiceCard service={data} />`) rather than exploding props (e.g., `<ServiceCard title="" icon="" />`). This guarantees future CMS integration without breaking the API.
*   **Variants:** Standardized to `<Component variant="[name]" size="[name]" />`.
*   **Events:** Must follow standard React conventions (`onTabChange`, `onClick`).

## 4. DATA MODEL GOVERNANCE
**Standardization:**
*   **Structure:** Arrays must be wrapped in a descriptive parent object (e.g., `export const servicesData = { header: {}, categories: [], services: [] }`).
*   **CMS Readiness:** All data models must include unique `id` fields. Decorative fields (`featured: true`) must be boolean. Hardcoding index-based layout logic is forbidden.

## 5. REUSABILITY AUDIT (Current Primitives)
*   `Container.jsx` & `Section.jsx`: **Globally Reusable** (Layout Primitives).
*   `ServiceCard.jsx`: **Globally Reusable** (Can be adapted via variant for Blog/Careers).
*   `ServicesGrid.jsx`: **Feature Specific** (Specific to the Services domain logic).

## 6. CSS GOVERNANCE
**Standardization:**
*   Do not repeat long tailwind strings (e.g., `bg-white/5 backdrop-blur-md border border-white/10`). These must be promoted to `@apply glass-panel` in `globals.css` or exported as constant strings in `src/styles/`.

## 7. ANIMATION GOVERNANCE
**Standardization:**
*   **Motion Standard:** `transition-all duration-300 ease-out`.
*   **Hover Standard:** `-translate-y-1`.
*   **Fade-in Stagger:** Uses `animate-fade-in-up` with incremental `animation-delay`.
*   No margins/padding should be animated to prevent Layout Shifts (CLS).

## 8. FUTURE EXTENSIBILITY REVIEW
*   **CMS:** The data architecture perfectly mirrors headless CMS structures (Contentful/Sanity).
*   **Dark/Light Theme:** The use of semantic variables (`text-foreground`, `bg-background`) guarantees theming readiness.
*   **Localization:** Centralizing text in `*Data.js` files allows for easy extraction to `i18n` dictionaries.

## 9. IMPLEMENTATION READINESS CONFIRMATION
*   [x] Architecture is stable.
*   [x] Design system is stable.
*   [x] Component APIs are stable.
*   [x] Data models are stable.
*   [x] Folder structure is stable.
*   [x] Responsive strategy is stable.
*   [x] Motion system is stable.

> [!IMPORTANT]
> **Implementation Approval**
> With this final Engineering Governance Review documented and the standards locked in, no further architectural changes will occur during execution. 
> 
> Do you approve this documentation? Upon your approval, I will immediately begin executing the Priority Matrix (P0 to P3) established in the previous step, starting with the layout overflow fixes and Hero composition upgrade.