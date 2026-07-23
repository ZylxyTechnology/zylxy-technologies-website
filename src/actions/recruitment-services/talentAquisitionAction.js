"use server";

import { uploadFileToHubspot } from "@/lib/hubspot";

export async function submitTalentAcquisition(formData) {
  try {
    const jobDescriptionFile = formData.get("job_description");
    let jobDescriptionUrl = null;

    if (jobDescriptionFile && jobDescriptionFile.size > 0) {
      console.log(`[ACTION] Uploading Job Description File: ${jobDescriptionFile.name} (${jobDescriptionFile.size} bytes)`);
      jobDescriptionUrl = await uploadFileToHubspot(jobDescriptionFile);
      console.log(`[ACTION] File Upload Result URL: ${jobDescriptionUrl}`);
    }

    const dataObj = Object.fromEntries(formData.entries());
    
    delete dataObj.job_description;
    if (jobDescriptionUrl) {
      dataObj.job_description_url = jobDescriptionUrl;
    }

    const apiUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/talent/recruitment-services/talent-acquisition`
      : "http://127.0.0.1:3000/api/talent/recruitment-services/talent-acquisition";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });

    if (!response.ok) {
      throw new Error("Failed to submit form");
    }

    return { success: true };
  } catch (error) {
    console.error("[ACTION ERROR] Submission failed:", error);
    return { success: false, error: "Submission failed" };
  }
}
