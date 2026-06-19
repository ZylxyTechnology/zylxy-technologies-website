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
      recaptchaToken,
      isHubSpotFormContext,
    } = body;

    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required." },
        { status: 400 },
      );
    }

    if (!recaptchaToken) {
      return NextResponse.json(
        { success: false, error: "Security validation token is missing." },
        { status: 400 },
      );
    }

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

    const portalId = "246492214";
    const formId = isHubSpotFormContext
      ? "65d2e621-d4ff-4616-8f31-2c22a59547e5"
      : "22c7712e-9c35-4c26-9881-4abf481fa67c";

    const formattedChallenges =
      challengesToSolve && challengesToSolve.length > 0
        ? challengesToSolve.join("; ")
        : "";

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
      ],
      context: {
        pageUri: request.headers.get("referer") || "https://zylxytech.com",
        pageName: isHubSpotFormContext
          ? "HubSpot Consulting Intake Portal"
          : "Zylxy General Lead Intake",
      },
    };

    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
      {
        method: "POST",
        headers: {
          "application/json": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      },
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || "HubSpot API submission failure.");
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
