import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://alignhomes.com"),
  title: "Alignhomes | Direct-Booking Architecture & Custom PMS Integrations",
  description: "Bespoke direct-booking websites and custom PMS integrations for luxury vacation rentals and boutique hospitality brands. Built like FinTech, designed like a 5-star resort.",
  keywords: [
    "direct booking websites",
    "luxury vacation rental web design",
    "PMS integration",
    "Hostaway custom website",
    "Guesty direct booking",
    "Hospitable Stripe checkout",
    "boutique hotel direct booking",
    "short term rental direct engine"
  ],
  openGraph: {
    title: "Alignhomes — Stop Paying OTAs 15% to Rent Your Own Property",
    description: "We engineer bespoke direct-booking infrastructure completely synced with your iCal, PMS, and Stripe.",
    images: [{ url: "/images/hero_villa.jpg", width: 1200, height: 630 }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${jakarta.variable} scroll-smooth`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "ProfessionalService",
                  "name": "Alignhomes",
                  "image": "https://alignhomes.com/images/hero_villa.jpg",
                  "url": "https://alignhomes.com",
                  "priceRange": "$$$$",
                  "description":
                    "Bespoke direct-booking websites and custom PMS integrations for luxury vacation rentals and boutique hospitality brands.",
                  "areaServed": "Global",
                },
                {
                  "@type": "SoftwareApplication",
                  "name": "Alignhomes Direct Booking Engine",
                  "applicationCategory": "BusinessApplication",
                  "operatingSystem": "Web",
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-alabaster text-[#1E2321] selection:bg-forest selection:text-alabaster antialiased">
        {children}
      </body>
    </html>
  );
}
