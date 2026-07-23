const payload = {
  submittedAt: Date.now(),
  fields: [
    { name: 'full_name', value: 'Karanam Rajesh' },
    { name: 'firstname', value: 'Karanam' },
    { name: 'lastname', value: 'Rajesh' },
    { name: 'email', value: 'test@example.com' },
    { name: 'phone', value: '+91955386216' },
    { name: 'service_interest', value: 'Training & Placement' },
    { name: 'company', value: 'linkedIN' },
    { name: '0-2/name', value: 'linkedIN' },
    { name: '0-2/industry_type', value: 'Educational Institution' },
    { name: 'message', value: 'test message' }
  ],
  context: { pageUri: 'http://localhost:3000', pageName: 'Test' },
  legalConsentOptions: { consent: { consentToProcess: true, text: 'I agree' } }
};
fetch('https://api-na2.hsforms.com/submissions/v3/integration/submit/246492214/80d4d7f8-6c0d-4db3-900f-3fd54b672174', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(payload)
}).then(res => res.json()).then(data => console.log(JSON.stringify(data, null, 2))).catch(err => console.error(err));
