import { NextResponse } from "next/server";
import { executeGovernedHubSpotSync } from "@/lib/hubspot/hubspotSubmissionGovernance";
import { buildHubspotPayload } from "@/lib/hubspot/hubspotPayloadBuilder";

export async function POST(request) {
  try {
    const body = await request.json();
    
    if (body.honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const serviceKey = "training-placement";

    const forwardedFor = request.headers.get("x-forwarded-for");
    const ipAddress =
      (forwardedFor ? forwardedFor.split(",")[0].trim() : null) ||
      request.headers.get("x-real-ip") ||
      request.headers.get("cf-connecting-ip") ||
      "127.0.0.1";

    const { formConfig, payload: hubspotPayload, correlationId } = buildHubspotPayload({
      serviceKey,
      rawPayload: body,
      requestContext: {
        pageUri: request.url,
        pageName: "Zylxy Training & Placement Intake",
        ipAddress: ipAddress
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
