import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      service,
      message,
      orgName,
      orgType,
      subLevel,
      challengesToSolve,
      consentCommunications,
      consentProcessing,
      recaptchaToken,
      isHubSpotFormContext,
    } = body;

    // 1. Core Field Validation Guard
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required fields." },
        { status: 400 },
      );
    }

    // 2. Security Validation Token Guard (Bypassed locally for development demo)
    const isLocalDev =
      process.env.NODE_ENV === "development" ||
      request.headers.get("host").includes("localhost");

    if (!recaptchaToken && !isLocalDev) {
      return NextResponse.json(
        { success: false, error: "Security validation token is missing." },
        { status: 400 },
      );
    }

    if (!isLocalDev) {
      const secretKey =
        process.env.RECAPTCHA_SECRET_KEY ||
        "6LdJOyYtAAAAADqePI9n4nEbrp0rnn6aDHFSAiPr";
      const verifyResponse = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${recaptchaToken}`,
        { method: "POST" },
      );

      const verificationResult = await verifyResponse.json();
      if (!verificationResult.success) {
        return NextResponse.json(
          {
            success: false,
            error: "Cryptographic security verification failed.",
          },
          { status: 401 },
        );
      }
    }

    // 3. Setup HubSpot Targeting Context Configurations
    const portalId = "246492214";
    const formId = isHubSpotFormContext
      ? "65d2e621-d4ff-4616-8f31-2c22a59547e5"
      : "22c7712e-9c35-4c26-9881-4abf481fa67c";

    const formattedChallenges =
      challengesToSolve && challengesToSolve.length > 0
        ? challengesToSolve.join("; ")
        : "";

    // 4. Construct Structured Form API Schema Payload
    const hubspotPayload = {
      submittedAt: Date.now(),
      fields: [
        { name: "firstname", value: name },
        { name: "email", value: email },
        { name: "phone", value: phone || "" },
        { name: "service_needed", value: service || "" },
        { name: "message", value: message || "" },
        { name: "company", value: orgName || "" },
        { name: "organization_type", value: orgType || "" },
        { name: "hubspot_subscription_level", value: subLevel || "" },
        {
          name: "what_hubspot_challenges_are_you_trying_to_solve_",
          value: formattedChallenges,
        },
        {
          name: "consent_receive_communications",
          value: consentCommunications ? "true" : "false",
        },
        {
          name: "consent_store_process_data",
          value: consentProcessing ? "true" : "false",
        },
      ],
      context: {
        pageUri: request.headers.get("referer") || "https://zylxytech.com",
        pageName: isHubSpotFormContext
          ? "HubSpot Consulting Intake Portal"
          : "Zylxy General Lead Intake",
      },
    };

    // 5. Secure Outbound API Transmission
    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      let parsedErrorMessage = "HubSpot API submission failure.";
      try {
        const errorData = JSON.parse(errorText);
        parsedErrorMessage = errorData.message || parsedErrorMessage;
      } catch (e) {
        parsedErrorMessage = errorText || parsedErrorMessage;
      }
      throw new Error(parsedErrorMessage);
    }

    return NextResponse.json({
      success: true,
      message: "Lead safely synchronized to HubSpot data center",
    });
  } catch (error) {
    console.error("HubSpot Centralized Logging Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit lead to data center." },
      { status: 500 },
    );
  }
}
