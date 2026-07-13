import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
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
      captchaToken,
    } = body;

    if (honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const errors = {};
    if (!firstName || firstName.trim().length < 2) {
      errors.firstName = "Please provide your first name.";
    }

    if (!lastName || lastName.trim().length < 2) {
      errors.lastName = "Please provide your last name.";
    }

    if (!orgName || orgName.trim().length < 2) {
      errors.orgName = "Please provide your organization name.";
    }

    if (!orgType) {
      errors.orgType = "Please select an organization type.";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.email =
        "A valid email address is required to ensure secure communication routing.";
    }

    const cleanPhone = (phone || "").replace(/\D/g, "");
    if (!phone) {
      errors.phone =
        "An operational phone number is required to finalize verification routing.";
    } else if (dialCode === "IN" || dialCode === "+91") {
      if (cleanPhone.length !== 10) {
        errors.phone = "Indian phone numbers must be exactly 10 digits long.";
      } else if (!/^[6789]/.test(cleanPhone)) {
        errors.phone =
          "Valid Indian mobile numbers must start with 6, 7, 8, or 9.";
      }
    } else if (cleanPhone.length < 6 || cleanPhone.length > 15) {
      errors.phone = "Please enter a valid phone number configuration.";
    }

    if (!selectedApps || selectedApps.length === 0) {
      errors.selectedApps =
        "Please select at least one required service target.";
    }

    if (!consentCommunications) {
      errors.consentCommunications =
        "Please confirm your communication preferences by checking the box.";
    }

    if (!consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent to store and process data.";
    }

    if (!captchaToken) {
      errors.captcha = "Please complete the reCAPTCHA verification.";
    } else {
      const captchaVerify = await fetch(
        "https://www.google.com/recaptcha/api/siteverify",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({
            secret: process.env.RECAPTCHA_SECRET_KEY,
            response: captchaToken,
          }),
        },
      );
      const captchaResult = await captchaVerify.json();
      if (!captchaResult.success) {
        errors.captcha = "reCAPTCHA verification failed. Please try again.";
      }
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const portalId = "246492214";
    const formId = "fa676301-adb5-42b5-b947-1a50fe3b2eb6";
    const prefix =
      dialCode && !dialCode.startsWith("+") && dialCode !== "IN"
        ? `+${dialCode}`
        : dialCode === "IN"
          ? "+91"
          : dialCode;
    const fullPhoneNumber = prefix ? `${prefix} ${cleanPhone}` : cleanPhone;

    const fields = [
      { name: "full_name", value: `${firstName} ${lastName}`.trim() },
      { name: "firstname", value: firstName },
      { name: "lastname", value: lastName },
      { name: "email", value: email },
      { name: "phone", value: fullPhoneNumber },
      { name: "software_development", value: selectedApps.join(";") },
      { name: "0-2/name", value: orgName || "" },
      { name: "company", value: orgName || "" },
      { name: "0-2/industry_type", value: orgType || "" },
      { name: "message", value: message || "" },
    ];

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri: "https://zylxytech.com/services/web-application-development",
        pageName: "Web Application Development Intake Portal",
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
      const errorText = await response.text();
      return NextResponse.json(
        {
          success: false,
          errors: {
            global: "HubSpot interface synchronization failure: " + errorText,
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
        errors: {
          global:
            "Server network interface connection reset tracking sequence.",
        },
      },
      { status: 500 },
    );
  }
}
