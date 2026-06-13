import { google } from "googleapis";
import { NextResponse } from "next/server";

const getSheetsClient = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: process.env.TALENT_BOT_EMAIL,
      private_key: process.env.TALENT_PRIVATE_KEY?.replace(/"/g, "")?.replace(
        /\\n/g,
        "\n",
      ),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  return google.sheets({ version: "v4", auth });
};

export async function GET() {
  try {
    const sheets = await getSheetsClient();
    const spreadsheetId = process.env.CORPORATE_SPREADSHEET_ID;

    // Log the ID being used to your terminal console for verification
    console.log("GET Request - Using Spreadsheet ID:", spreadsheetId);

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "A2:N",
    });

    const rows = response.data.values || [];
    const jobs = rows.map((row, index) => ({
      id: `job-${index + 1}`,
      companyName: row[1] || "",
      contactPerson: row[2] || "",
      email: row[3] || "",
      phone: row[4] || "",
      title: row[5] || "",
      location: row[6] || "",
      experience: row[7] || "",
      salaryRange: row[8] || "",
      openings: row[9] || "",
      timeline: row[10] || "",
      skills: row[11] || "",
      description: row[12] || "",
      screeningQuestions: row[13] || "",
    }));
    return NextResponse.json({ success: true, data: jobs }, { status: 200 });
  } catch (error) {
    console.error("GET API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function POST(request) {
  try {
    const sheets = await getSheetsClient();
    const payload = await request.json();
    const { formType, ...formData } = payload;
    let spreadsheetId =
      formType === "corporate"
        ? process.env.CORPORATE_SPREADSHEET_ID
        : process.env.STUDENT_SPREADSHEET_ID;

    // Log the ID being used to your terminal console for verification
    console.log(
      "POST Request - FormType:",
      formType,
      "Attempting ID:",
      spreadsheetId,
    );

    if (!spreadsheetId) {
      throw new Error("Spreadsheet ID is undefined. Check .env.local");
    }

    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    let values = [];
    if (formType === "corporate") {
      values = [
        [
          timestamp,
          formData.companyName,
          formData.contactPerson,
          formData.email,
          formData.phone,
          formData.jobTitle,
          formData.location,
          formData.experience,
          formData.salaryRange,
          formData.openings,
          formData.timeline,
          formData.skills,
          formData.description,
          formData.screeningQuestions,
          formData.additionalNotes || "",
        ],
      ];
    } else if (formType === "student") {
      values = [
        [
          timestamp,
          formData.fullName,
          formData.email,
          formData.phone,
          formData.currentLocation,
          formData.experience,
          formData.skills,
          formData.linkedin || "",
          formData.portfolio || "",
          formData.resume,
          formData.offerLetter || "",
          formData.screeningAnswers,
          formData.message || "",
        ],
      ];
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "A:A",
      valueInputOption: "USER_ENTERED",
      requestBody: { values },
    });

    return NextResponse.json(
      { success: true, message: "Success" },
      { status: 200 },
    );
  } catch (error) {
    console.error("POST API Error:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
