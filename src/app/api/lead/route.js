import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      dialCode,
      service,
      message,
      orgName,
      orgType,
      subLevel,
      challengesToSolve,
      consentCommunications,
      consentProcessing,
      honeyTrap,
      isHubSpotFormContext,
    } = body;

    if (honeyTrap !== "") {
      return NextResponse.json({ success: true });
    }

    const errors = {};
    if (!name) {
      errors.name =
        "Please provide your full name to initialize the inquiry profile.";
    } else if (name.length < 2) {
      errors.name =
        "Please enter a valid full name configuration (minimum 2 characters).";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errors.email =
        "A valid email address is required to ensure secure communication routing.";
    } else if (!emailRegex.test(email)) {
      errors.email =
        "Please provide a correctly formatted corporate or personal email address.";
    }

    if (!phone) {
      errors.phone =
        "An operational phone number is required to finalize your verification routing.";
    } else if (phone.replace(/\D/g, "").length < 6) {
      errors.phone =
        "The provided phone parameter sequence is incomplete. Please check and try again.";
    }

    if (!service) {
      errors.service =
        "Please select an operational service track parameter from the dropdown selection.";
    }

    if (service === "HubSpot CRM" && !orgName) {
      errors.orgName =
        "Organization name identification is required for setting up HubSpot diagnostics.";
    }

    if (!consentCommunications) {
      errors.consentCommunications =
        "Please confirm your communication preferences by checking the box.";
    }

    if (!consentProcessing) {
      errors.consentProcessing =
        "Please check the box to confirm your consent to store and process personal data.";
    }

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    const portalId = "246492214";
    const formId = isHubSpotFormContext
      ? "65d2e621-d4ff-4616-8f31-2c22a59547e5"
      : "22c7712e-9c35-4c26-9881-4abf481fa67c";

    const fullPhoneNumber = dialCode ? `${dialCode} ${phone}` : phone;

    const serviceTranslationMap = {
      "HubSpot CRM": "HubSpot",
      "Software Solutions": "Software Solution",
      "Digital Marketing": "Digital Marketing",
      "App Development": "App Development",
      "Web Development": "Web Development",
      "IT Consulting": "IT Consulting",
      "UI/UX & Branding": "UI/UX & Branding",
      "Training & Courses": "Training & Courses",
      Animations: "Animations",
      "Not sure yet": "Not sure yet",
    };
    const mappedHubSpotService = serviceTranslationMap[service] || service;

    const fields = [
      { name: "firstname", value: name }, // FIX: Name splitting logic completely removed
      { name: "email", value: email },
      { name: "phone", value: fullPhoneNumber },
      { name: "0-2/service", value: mappedHubSpotService },
      { name: "message", value: message },
    ];

    if (isHubSpotFormContext || service === "HubSpot CRM") {
      const formattedChallenges = Array.isArray(challengesToSolve)
        ? challengesToSolve.join(";")
        : (challengesToSolve || "").replace(/; /g, ";");

      fields.push(
        { name: "0-2/name", value: orgName || "" },
        { name: "company", value: orgName || "" },
        { name: "organization_type", value: orgType || "" },
        { name: "hubspot_subscription_level", value: subLevel || "" },
        {
          name: "what_hubspot_challenges_are_you_trying_to_solve_",
          value: formattedChallenges,
        },
      );
    }

    const hubspotPayload = {
      submittedAt: Date.now(),
      fields,
      context: {
        pageUri: "https://zylxytech.com",
        pageName: isHubSpotFormContext
          ? "HubSpot Consulting Intake Portal"
          : "Zylxy General Lead Intake",
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
      let parsedErrorMessage = "HubSpot API submission failure.";
      try {
        const errorData = JSON.parse(errorText);
        if (errorData.errors && errorData.errors.length > 0) {
          parsedErrorMessage = errorData.errors
            .map((err) => err.message)
            .join(" | ");
        } else {
          parsedErrorMessage = errorData.message || parsedErrorMessage;
        }
      } catch (e) {
        parsedErrorMessage = errorText || parsedErrorMessage;
      }
      return NextResponse.json(
        { success: false, errors: { global: parsedErrorMessage } },
        { status: 400 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        errors: {
          global: "An operational delivery error occurred. Please try again.",
        },
      },
      { status: 500 },
    );
  }
}
