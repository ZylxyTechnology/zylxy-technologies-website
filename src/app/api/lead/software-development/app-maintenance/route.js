import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const headers = request.headers;

    const rawIp =
      headers.get("x-forwarded-for") || headers.get("x-real-ip") || "127.0.0.1";
    const clientIp = rawIp.split(",")[0].trim();

    const {
      firstName,
      lastName,
      email,
      phone,
      dialCode,
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
    if (!firstName || firstName.trim().length < 2)
      errors.firstName = "First name is required.";
    if (!lastName || lastName.trim().length < 2)
      errors.lastName = "Last name is required.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      errors.email = "Valid email is required.";
    if (!phone) errors.phone = "Phone number is required.";
    if (!orgName || orgName.trim().length < 1)
      errors.orgName = "Organization name is required.";
    if (!orgType || orgType.trim().length < 1)
      errors.orgType = "Organization type is required.";
    if (!selectedApps || selectedApps.length === 0)
      errors.selectedApps = "Select at least one option.";
    if (!consentProcessing)
      errors.consentProcessing = "Processing consent mandatory.";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const portalId = "246492214";
    const formId = "632f884f-52d3-494f-8b2d-b95b7d9a1596";
    const cleanPhone = phone.replace(/\D/g, "");
    const prefix =
      dialCode && !dialCode.startsWith("+") && dialCode !== "IN"
        ? `+${dialCode}`
        : dialCode === "IN"
          ? "+91"
          : dialCode;
    const fullPhoneNumber = prefix ? `${prefix} ${cleanPhone}` : cleanPhone;

    const fields = [
      { objectTypeId: "0-1", name: "firstname", value: firstName },
      { objectTypeId: "0-1", name: "lastname", value: lastName },
      {
        objectTypeId: "0-1",
        name: "full_name",
        value: `${firstName} ${lastName}`.trim(),
      },
      { objectTypeId: "0-1", name: "email", value: email },
      { objectTypeId: "0-1", name: "phone", value: fullPhoneNumber },
      {
        objectTypeId: "0-1",
        name: "software_development",
        value: selectedApps.join(";"),
      },
      { objectTypeId: "0-1", name: "message", value: message || "" },
      { objectTypeId: "0-2", name: "name", value: orgName },
      { objectTypeId: "0-2", name: "industry_type", value: orgType },
    ];

    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          submittedAt: Date.now(),
          fields,
          context: {
            ipAddress: clientIp,
            pageUri:
              "https://zylxytech.com/services/application-support-maintenance",
            pageName: "Application Support & Maintenance Intake Portal",
          },
          legalConsentOptions: {
            consent: {
              consentToProcess: consentProcessing,
              text: "I agree to allow Zylxy Technologies to store and process my personal data.",
            },
          },
        }),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          errors: { global: "HubSpot interface rejection: " + errorText },
        },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, errors: { global: "Internal pipeline link failure." } },
      { status: 500 },
    );
  }
}
