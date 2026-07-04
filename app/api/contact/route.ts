import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const scriptUrl = process.env.APPS_SCRIPT_URL;
    
    if (!scriptUrl) {
      console.error("❌ Environment Variable APPS_SCRIPT_URL is missing!");
      return NextResponse.json(
        { error: "Server configuration missing API URL" },
        { status: 500 }
      );
    }

    // Forward the payload directly to Google Apps Script
    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("❌ Google Apps Script returned an error:", errorText);
      throw new Error("Google Script submission failed");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("❌ API Route Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error processing request" },
      { status: 500 }
    );
  }
}