"use server";

import { uploadFileToHubspot } from "@/lib/hubspot";

export async function submitCampusRecruitment(formData) {
  try {
    const resumeFile = formData.get("resume");
    let resumeUrl = null;

    if (resumeFile && resumeFile.size > 0) {
      resumeUrl = await uploadFileToHubspot(resumeFile);
    }

    // Convert FormData to standard object for the JSON API route
    const dataObj = Object.fromEntries(formData.entries());
    
    // Remove the binary file from the object, add the URL instead
    delete dataObj.resume;
    if (resumeUrl) {
      dataObj.resume_url = resumeUrl;
    }

    // UPDATED: Pointing to the correct talent-services API route
    const apiUrl = process.env.NEXT_PUBLIC_SITE_URL
      ? `${process.env.NEXT_PUBLIC_SITE_URL}/api/talent/recruitment-services/campus-recruitment`
      : "http://localhost:3000/api/talent/recruitment-services/campus-recruitment";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataObj),
    });

    if (!response.ok) {
      // Extracting the error from your API route if it fails
      const errorData = await response.json().catch(() => null);
      throw new Error(
        errorData?.error || "HubSpot API rejected the submission",
      );
    }

    return { success: true };
  } catch (error) {
    console.error("Server Action Error:", error.message);
    return { success: false, error: error.message };
  }
}
