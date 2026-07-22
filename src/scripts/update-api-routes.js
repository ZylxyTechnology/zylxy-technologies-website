const fs = require('fs');
const path = require('path');

const API_ROUTES = [
  'src/app/api/lead/software-development/app-maintenance/route.js',
  'src/app/api/lead/software-development/brand-design/route.js',
  'src/app/api/lead/software-development/custom-software/route.js',
  'src/app/api/lead/software-development/mobile-form/route.js',
  'src/app/api/lead/software-development/ui-ux-design/route.js',
  'src/app/api/lead/software-development/web-form/route.js',
  'src/app/api/lead/ai-crm-solutions/ai-automation/route.js',
  'src/app/api/talent/training-placement/TrainingPlacement/route.js'
];

const TEMPLATE = `import { NextResponse } from "next/server";
import { executeGovernedHubSpotSync } from "@/lib/hubspot/hubspotSubmissionGovernance";
import { buildHubspotPayload } from "@/lib/hubspot/hubspotPayloadBuilder";

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (body.honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    // Determine serviceKey from the request URL
    const urlParts = request.url.split('/');
    let serviceKey = urlParts[urlParts.length - 1] === "route.js" ? urlParts[urlParts.length - 2] : urlParts[urlParts.length - 1];
    
    if (serviceKey === "TrainingPlacement") serviceKey = "training-placement";
    if (serviceKey === "mobile-form") serviceKey = "mobile-app-development";
    if (serviceKey === "web-form") serviceKey = "web-development";

    const { formConfig, payload: hubspotPayload, correlationId } = buildHubspotPayload({
      serviceKey,
      rawPayload: body,
      requestContext: {
        pageUri: request.url,
        pageName: "Zylxy Service Intake Portal"
      }
    });

    const result = await executeGovernedHubSpotSync({
      serviceKey,
      hubspotPayload,
      formConfig,
      correlationId
    });

    if (!result.success) {
      return NextResponse.json(
        { success: false, errors: { global: result.error } },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, errors: { global: "Internal pipeline link failure." } },
      { status: 500 }
    );
  }
}
`;

API_ROUTES.forEach(routePath => {
  const fullPath = path.resolve(__dirname, '..', '..', routePath);
  if (fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, TEMPLATE, 'utf8');
    console.log("Updated: " + fullPath);
  } else {
    console.log("Not found: " + fullPath);
  }
});
