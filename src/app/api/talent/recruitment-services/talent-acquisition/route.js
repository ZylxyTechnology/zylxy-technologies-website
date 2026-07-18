import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const portalId = "246492214";
    const formGuid = "90c110ec-ac3d-492f-a706-47806dfd25a4";

    const fieldMapping = {
      company: "company",
      organization_size: "numberofemployees",
      organization_type: "industry",
      number_of_open_positions: "numemployees",
      required_skills: "hs_sub_role",
      project_description: "job_function",
      linkedin: "hs_linkedin_url",
      job_description_url: "job_description_file", // User MUST create this custom property in HubSpot
    };

    const fields = Object.entries(body)
      .filter(([name]) => !["agree_communications", "authorize_storage"].includes(name))
      .map(([name, value]) => ({
        name: fieldMapping[name] || name,
        value: value ? value.toString() : "",
      }));

    const pageUri = "zylxytech.com/careers/recruitment-services/talent-acquisition";

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
        text: "I agree to allow Zylxy Technologies to store and process my personal data.",
      }
    };

    if (hasConsentToCommunicate) {
      legalConsentOptions.consent.communications = [
        {
          value: true,
          subscriptionTypeId: 9999999, // Fallback ID if actual is unknown; required by schema if communications array is provided.
          text: "I agree to receive other communications from Zylxy Technologies."
        }
      ];
    }

    const hubspotPayload = {
      fields: fields,
      context: {
        pageUri: pageUri,
        pageName: "Talent Acquisition",
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
    console.error("Talent Acquisition Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
