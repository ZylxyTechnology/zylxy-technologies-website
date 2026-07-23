import { NextResponse } from "next/server";
import { executeGovernedHubSpotSync } from "@/lib/hubspot/hubspotSubmissionGovernance";
import { buildHubspotPayload } from "@/lib/hubspot/hubspotPayloadBuilder";

export async function POST(request) {
  try {
    const body = await request.json();

    if (body.honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const errors = {};
    if (!body.firstName) errors.firstName = "Please provide your first name.";
    else if (body.firstName.length < 2) errors.firstName = "First name must be at least 2 characters.";

    if (!body.lastName) errors.lastName = "Please provide your last name.";
    else if (body.lastName.length < 2) errors.lastName = "Last name must be at least 2 characters.";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!body.email) errors.email = "An email address is required.";
    else if (!emailRegex.test(body.email)) errors.email = "Please provide a valid email address.";

    const cleanPhone = (body.phone || "").replace(/\D/g, "");
    if (!body.phone) errors.phone = "A phone number is required.";
    else if (cleanPhone.length < 6 || cleanPhone.length > 15) errors.phone = "Please enter a valid phone number.";

    if (!body.orgName) errors.orgName = "Please provide your organization name.";
    if (!body.orgType) errors.orgType = "Please select an organization type.";

    if (!body.selectedApps || body.selectedApps.length === 0) {
      errors.selectedApps = "Please select at least one training or placement service.";
    }

    if (!body.consentProcessing) {
      errors.consentProcessing = "Please check the box to confirm your consent to process data.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
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
