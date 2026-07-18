import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const portalId = "246492214";
    const formGuid = "40ed5d43-4844-4435-a3e8-71633ab5e59d";

    const fieldMapping = {
      preferred_job_role: "hs_role",
      professional_category: "hs_chat_assistant_summary", // HubSpot label: "Professional Category"
      skills_tools_technologies: "hs_sub_role", // HubSpot label: "Enter Your Skills, Tools & Technologies"
      linkedin_profile_url: "hs_linkedin_url",
      total_work_experience: "hs_seniority",
      preferred_work_location: "industry",
      resume_url: "salutation", // Matches the internal name from the user's HubSpot settings
    };

    const fields = Object.entries(body)
      .filter(([name]) => !["agree_communications", "authorize_storage"].includes(name))
      .map(([name, value]) => ({
        name: fieldMapping[name] || name,
        value: value ? value.toString() : "",
      }));

    const pageUri = "zylxytech.com/careers/recruitment-services/campus-recruitment";
    
    // Extract IP address to satisfy HubSpot's analytics requirements
    const ipAddress = request.headers.get("x-forwarded-for") || 
                      request.headers.get("x-real-ip") || 
                      request.ip || 
                      "127.0.0.1";

    // Strictly structured Legal Consent Options for GDPR
    const hasConsentToProcess = body.authorize_storage === "true";
    const hasConsentToCommunicate = body.agree_communications === "true";

    const legalConsentOptions = {
      consent: {
        consentToProcess: hasConsentToProcess,
        text: "I authorize Zylxy Technologies to store and process my personal information for recruitment purposes.",
      }
    };

    if (hasConsentToCommunicate) {
      legalConsentOptions.consent.communications = [
        {
          value: true,
          subscriptionTypeId: 9999999, // Fallback ID if actual is unknown; required by schema if communications array is provided. Note: If HubSpot strictly validates this ID, user must provide the exact subscription type ID.
          text: "I agree to receive career opportunities and recruitment-related communications."
        }
      ];
    }

    const hubspotPayload = {
      fields: fields,
      context: {
        pageUri: pageUri,
        pageName: "Campus Recruitment",
        ipAddress: ipAddress,
      },
      legalConsentOptions: legalConsentOptions,
    };

    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const hsResponse = await fetch(hubspotEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hubspotPayload),
    });

    if (!hsResponse.ok) {
      const hsError = await hsResponse.text();
      console.error("HubSpot Error:", hsResponse.status, hsError);
      return NextResponse.json(
        { error: "HubSpot API Error", detail: hsError },
        { status: hsResponse.status },
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Campus Recruitment Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
