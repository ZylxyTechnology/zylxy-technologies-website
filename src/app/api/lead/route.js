import { NextResponse } from "next/server";
import { getHubspotContext } from "@/utils/hubspotContext";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      countryCode,
      service,
      message,
      orgName,
      orgType,
      consentCommunications,
      consentProcessing,
      honeyTrap,
      clientIp,
    } = body;

    if (honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const errors = {};
    if (!name || name.trim().length < 2) {
      errors.name = "Full name configuration is required.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "A valid corporate communication email is required.";
    }

    if (!phone || phone.replace(/\D/g, "").length < 6) {
      errors.phone = "Invalid operational phone number format.";
    }

    if (!service) {
      errors.service =
        "Please choose a valid technical service track parameter.";
    }

    if (!consentProcessing) {
      errors.consentProcessing =
        "Consent processing mandate verification missing.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const portalId = "246492214";
    const formId = "22c7712e-9c35-4c26-9881-4abf481fa67c";

    const fields = [
      { name: "full_name", value: name },
      { name: "firstname", value: name },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "0-2/service", value: service },
      { name: "0-2/name", value: orgName || "" },
      { name: "company", value: orgName || "" },
      { name: "0-2/industry_type", value: orgType || "" },
      { name: "message", value: message || "" },
    ];

    const context = getHubspotContext(
      request,
      "https://zylxytech.com",
      "Zylxy General Lead Intake Canvas",
      clientIp,
    );

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context,
      legalConsentOptions: {
        consent: {
          consentToProcess: consentProcessing,
          text: "I agree to allow Zylxy Technologies to store and process my personal data.",
        },
      },
    };

    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotPayload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error("[HubSpot API Rejection Trace]", {
        status: response.status,
        body: errorText,
        portalId,
        formId,
        timestamp: new Date().toISOString(),
      });
      return NextResponse.json(
        {
          success: false,
          errors: {
            global:
              process.env.NODE_ENV === "development"
                ? `HubSpot server rejection (${response.status}): ${errorText}`
                : "HubSpot data synchronization failure. Please try again later.",
          },
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        errors: { global: "Internal transaction channel tracking error." },
      },
      { status: 500 },
    );
  }
}
