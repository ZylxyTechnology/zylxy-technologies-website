export async function uploadFileToHubspot(file) {
  if (!file || !file.name || file.size === 0) return null;

  const accessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!accessToken) {
    console.warn("HUBSPOT_ACCESS_TOKEN is missing. Skipping file upload.");
    return null;
  }

  const formData = new FormData();
  formData.append("file", file);
  
  const options = JSON.stringify({
    access: "PUBLIC_INDEXABLE",
    overwrite: false,
    duplicateValidationStrategy: "NONE",
    duplicateValidationScope: "ENTIRE_PORTAL"
  });
  
  formData.append("options", options);
  formData.append("folderPath", "Resumes");

  try {
    const response = await fetch("https://api.hubapi.com/filemanager/api/v3/files/upload", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("HubSpot File Upload Error:", response.status, errorText);
      return null;
    }

    const data = await response.json();
    
    if (data && data.objects && data.objects.length > 0) {
      return data.objects[0].url;
    }

    return null;
  } catch (error) {
    console.error("Failed to upload file to HubSpot:", error);
    return null;
  }
}
