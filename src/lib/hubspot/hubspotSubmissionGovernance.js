import { validateServiceFormContract, validatePayloadContract } from "./hubspotContractValidator";
import { HubSpotSyncError } from "./hubspotErrors";

/**
 * Enterprise Submission Governance Pipeline
 * 
 * This module enforces strict architectural safeguards over HubSpot synchronization:
 * 1. Form Contract Validation (Ensures GUID and Portal are registered)
 * 2. Payload Validation (Ensures structural integrity)
 * 3. Submission Execution (Handles the actual API transmission)
 * 4. Runtime Rejection Trace (Standardized error capturing)
 */
export async function executeGovernedHubSpotSync({ serviceKey, hubspotPayload, formConfig, correlationId }) {
  const startTime = Date.now();
  const cId = correlationId || crypto.randomUUID();
  
  console.log(`[Submission Pipeline] START | ID: ${cId} | Service: ${serviceKey}`);

  try {
    // 1. Contract Validation
    validateServiceFormContract(serviceKey);

    // 2. Payload Validation
    validatePayloadContract(serviceKey, hubspotPayload);

    console.log(`[Submission Pipeline] TRANSMITTING | ID: ${cId} | Portal: ${formConfig.portalId} | Form: ${formConfig.formId}`);

    // 3. HubSpot API Transmission
    const response = await fetch(
      `https://api-na2.hsforms.com/submissions/v3/integration/submit/${formConfig.portalId}/${formConfig.formId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(hubspotPayload),
      }
    );

    const duration = Date.now() - startTime;

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`[Submission Pipeline] REJECTED | ID: ${cId} | Status: ${response.status} | Body: ${errorText}`);
      throw new HubSpotSyncError(
        `HubSpot API rejected the submission. HTTP ${response.status}`,
        "transmission",
        { status: response.status, response: errorText, correlationId: cId }
      );
    }

    const result = await response.json();
    console.log(`[Submission Pipeline] SUCCESS | ID: ${cId} | Duration: ${duration}ms`);
    
    return {
      success: true,
      correlationId: cId,
      result,
    };

  } catch (error) {
    const duration = Date.now() - startTime;
    console.error(`[Submission Pipeline] ERROR | ID: ${cId} | Stage: ${error.stage || 'unknown'} | Duration: ${duration}ms | Message: ${error.message}`);
    
    return {
      success: false,
      correlationId: cId,
      error: error.message + (error.details?.response ? ` Details: ${error.details.response}` : ""),
      stage: error.stage || "unknown",
      details: error.details || {},
    };
  }
}
