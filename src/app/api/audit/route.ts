import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, listingUrl, email, portfolioSize, currentPms } = body;

    // Basic validation
    if (!email || !listingUrl) {
      return NextResponse.json(
        { error: "Listing URL and email are required" },
        { status: 400 }
      );
    }

    // Determine estimated savings based on portfolio size
    let baselineADR = 650;
    let units = 1;

    if (portfolioSize?.includes("3-5")) {
      units = 4;
    } else if (portfolioSize?.includes("6-15")) {
      units = 10;
    } else if (portfolioSize?.includes("15+")) {
      units = 20;
    }

    const estimatedAnnualGMV = baselineADR * 175 * units;
    const estimatedOtaFeeSaved = Math.round(estimatedAnnualGMV * 0.15);

    // In production, send webhook to Slack, CRM (Hubspot/ActiveCampaign), or email (Resend)
    // console.log("New Alignhomes Audit Request:", { name, email, listingUrl, portfolioSize, currentPms });

    return NextResponse.json({
      success: true,
      message: "Listing audit queued successfully",
      auditSummary: {
        hostName: name || "Host",
        listingUrl,
        email,
        estimatedAnnualSavings: `$${estimatedOtaFeeSaved.toLocaleString()}`,
        recommendedPmsSync: currentPms || "Hostaway / Guesty",
        deliveryWindow: "Within 24 business hours",
      },
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to process audit request" },
      { status: 500 }
    );
  }
}
