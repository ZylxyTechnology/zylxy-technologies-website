import { submitLeadAction } from "./src/actions/leadActions.js";

async function testSubmit() {
  const formData = new FormData();
  formData.append("firstName", "Karanam");
  formData.append("lastName", "Rajesh");
  formData.append("email", "karanamrajesh269@gmail.com");
  formData.append("phone", "955386216");
  formData.append("dialCode", "IN");
  formData.append("service", "HubSpot CRM Implementation");
  formData.append("message", "after deployment..!!");
  formData.append("orgName", "");
  formData.append("orgType", "Workforce Development Organization");
  formData.append("consentCommunications", "on");
  formData.append("consentProcessing", "on");

  // Mock Next.js headers since submitLeadAction might use them
  const state = { success: false, errors: {}, payload: {} };
  
  try {
    const result = await submitLeadAction(state, formData);
    console.log("Result:", JSON.stringify(result, null, 2));
  } catch (error) {
    console.error("Caught Error:", error);
  }
}

testSubmit();
