const payload = {
  "submittedAt": Date.now(),
  "fields": [
    { "name": "full_name", "value": "Karanam Rajesh" },
    { "name": "firstname", "value": "Karanam" },
    { "name": "lastname", "value": "Rajesh" },
    { "name": "email", "value": "karanamrajesh269@gmail.com" },
    { "name": "phone", "value": "+91 955386216" },
    { "name": "0-2/service", "value": "HubSpot CRM" },
    { "name": "service", "value": "HubSpot CRM" },
    { "name": "0-2/industry_type", "value": "Workforce Development Organization" },
    { "name": "message", "value": "after deployment..!!" },
    { "name": "software_development", "value": "Not specified" },
    { "name": "hs_chat_assistant_source", "value": "Not specified" }
  ],
  "context": {
    "pageUri": "https://zylxytech.com/hubspot",
    "pageName": "HubSpot CRM Intake Portal"
  },
  "legalConsentOptions": {
    "consent": {
      "consentToProcess": true,
      "text": "I agree to allow Zylxy Technologies to store and process my personal data."
    }
  }
};

fetch("https://api-na2.hsforms.com/submissions/v3/integration/submit/246492214/2d3b6caf-38d4-41a2-885d-e89e31b85041", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(payload)
})
.then(res => res.text().then(text => ({ status: res.status, text })))
.then(res => console.log(JSON.stringify(res, null, 2)))
.catch(err => console.error(err));
