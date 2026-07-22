import { NextResponse } from "next/server";
import { executeGovernedHubSpotSync } from "@/lib/hubspot/hubspotSubmissionGovernance";
import { buildHubspotPayload } from "@/lib/hubspot/hubspotPayloadBuilder";

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (body.honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const serviceKey = "mobile-app-development";

    const { formConfig, payload: hubspotPayload, correlationId } = buildHubspotPayload({
      serviceKey,
      rawPayload: body,
      requestContext: {
        pageUri: request.url,
        pageName: "Zylxy Mobile App Dev Intake"
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
