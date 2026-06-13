import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields - Logic preserved from your original
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: "Name and Email are required." },
        { status: 400 },
      );
    }

    // Format the date specifically for IST to keep sheet records clean
    const timestamp = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "medium",
      timeStyle: "short",
    });

    // Initialize Google Auth using your LEAD BOT credentials from .env.local
    const auth = new google.auth.GoogleAuth({
      credentials: {
        // Updated variable name to match your new .env.local structure
        client_email: process.env.LEAD_BOT_EMAIL,
        // Updated variable name and regex preserved
        private_key: process.env.LEAD_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({ auth, version: "v4" });

    // Append the row to your specific Google Sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:F1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            timestamp,
            name,
            email,
            phone || "N/A",
            service || "Not Specified",
            message || "No message provided",
          ],
        ],
      },
    });

    return NextResponse.json({
      success: true,
      message: "Lead successfully recorded",
    });
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to submit lead. Please try again." },
      { status: 500 },
    );
  }
}
