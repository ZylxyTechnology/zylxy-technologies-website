import { NextResponse } from "next/server";
import { getHubspotContext } from "@/utils/hubspotContext";

export async function POST(request) {
  try {
    const body = await request.json();
    console.log("========== ENTERPRISE API DEBUGGING: TALENT ACQUISITION ==========");
    console.log("[1] Incoming Frontend Payload:", JSON.stringify(body, null, 2));

    const portalId = "246492214";
    const formGuid = "90c110ec-ac3d-492f-a706-47806dfd25a4";

    const fieldMapping = {
      // ---------------------------------------------------------
      // MAPPING REGISTRY (FROZEN SOURCE OF TRUTH)
      // ---------------------------------------------------------
      company: "company",
      organization_size: "numberofemployees",
      organization_type: "industry",
      number_of_open_positions: "numemployees",
      required_skills: "hs_sub_role", // Same as Campus Recruitment 'skills_tools_technologies'
      project_description: "message", // Text property for project details
      linkedin: "hs_linkedin_url",
      job_description_url: "job_function", // CONFIRMED: File property in HubSpot is 'job_function'
      total_work_experience_required: "hs_seniority", // Same as Campus Recruitment 'total_work_experience'
      services_needed: "hs_role", // Using role for services mapping or raw
      job_location: "city",
      employment_start_date: "start_date"
    };

    console.log("[2] Configured Field Mappings:", JSON.stringify(fieldMapping, null, 2));

    const fields = Object.entries(body)
      .filter(([name]) => !["agree_communications", "authorize_storage", "job_description", "clientIp"].includes(name))
      .map(([name, value]) => {
        const mappedName = fieldMapping[name] || name;
        if (!fieldMapping[name]) {
          console.warn(`[WARNING] No explicit mapping found for field: '${name}'. Sending as '${mappedName}'.`);
        }
        return {
          name: mappedName,
          value: value ? value.toString() : "",
        };
      });

    console.log("[3] Parsed HubSpot Fields Array:", JSON.stringify(fields, null, 2));

    const pageUri = "https://zylxytech.com/careers/recruitment-services/talent-acquisition";

    const context = getHubspotContext(
      request,
      pageUri,
      "Talent Acquisition Intake Portal",
      body.clientIp,
    );

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
          subscriptionTypeId: 9999999,
          text: "I agree to receive other communications from Zylxy Technologies."
        }
      ];
    }

    const hubspotPayload = {
      fields: fields,
      context: context,
      legalConsentOptions: legalConsentOptions,
    };

    console.log("[4] Final HubSpot Payload (JSON):", JSON.stringify(hubspotPayload, null, 2));

    const hubspotEndpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const hsResponse = await fetch(hubspotEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(hubspotPayload),
    });

    console.log(`[5] HubSpot Response Status: ${hsResponse.status} ${hsResponse.statusText}`);

    if (!hsResponse.ok) {
      const hsError = await hsResponse.text();
      console.error("[6] HubSpot Validation Errors / Response Body:", hsError);
      
      try {
        const errorJson = JSON.parse(hsError);
        if (errorJson.errors && errorJson.errors.length > 0) {
           console.error("[7] Parsed HubSpot Errors:");
           errorJson.errors.forEach(err => console.error(" - ", err.message));
        }
      } catch (e) {
        // Not JSON
      }

      return NextResponse.json(
        { error: "HubSpot API Error", detail: hsError },
        { status: hsResponse.status },
      );
    }

    const hsSuccessData = await hsResponse.json();
    console.log("[6] HubSpot Success Response Body:", JSON.stringify(hsSuccessData, null, 2));
    console.log("========== END ENTERPRISE API DEBUGGING ==========");

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Talent Acquisition Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
