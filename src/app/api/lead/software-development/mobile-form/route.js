import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      countryCode,
      message,
      orgName,
      orgType,
      selectedApps,
      consentCommunications,
      consentProcessing,
      honeyTrap,
    } = body;

    if (honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const errors = {};
    if (!name || name.trim().length < 2) {
      errors.name = "Invalid name configuration parameters.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email = "Invalid communication email configuration.";
    }

    if (!phone || phone.replace(/\D/g, "").length < 6) {
      errors.phone = "Invalid operational telephone verification sequence.";
    }

    if (!selectedApps || selectedApps.length === 0) {
      errors.selectedApps =
        "Select at least one development variant parameter.";
    }

    if (!consentProcessing) {
      errors.consentProcessing =
        "Consent processing mandate verification missing.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const portalId = "246492214";
    const formId = "860a5b9b-c9f7-4737-ac08-bb68ad3d21d0";

    const fields = [
      { name: "full_name", value: name },
      { name: "firstname", value: name },
      { name: "email", value: email },
      { name: "phone", value: phone },
      { name: "0-2/service", value: selectedApps.join(";") },
      { name: "0-2/name", value: orgName || "" },
      { name: "company", value: orgName || "" },
      { name: "0-2/industry_type", value: orgType || "" },
      { name: "message", value: message || "" },
    ];

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri:
          "https://zylxytech.com/services/mobile-application-development",
        pageName: "Mobile Application Development Intake Portal",
      },
      legalConsentOptions: {
        consent: {
          consentToProcess: consentProcessing,
          text: "I agree to allow Zylxy Technologies to store and process my personal data.",
        },
      },
    };

    const response = await fetch(
      `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(hubspotPayload),
      },
    );

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          errors: { global: "HubSub submissions engine tracking failure." },
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        errors: { global: "Internal communication layout boundary exception." },
      },
      { status: 500 },
    );
  }
}
