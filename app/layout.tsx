import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://elevationxuk.com"),
  title: {
    default: "ElevationX UK | Web Design & Lead Generation for Local Businesses",
    template: "%s | ElevationX UK",
  },
  description:
    "Web design and lead generation built for ambitious local businesses across the UK. More enquiries, less hassle.",
  keywords: [
    "local business web design",
    "lead generation UK",
    "website for local businesses",
    "small business marketing",
    "UK digital marketing agency",
  ],
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://elevationxuk.com",
    siteName: "ElevationX UK",
    title: "ElevationX UK | Web Design & Lead Generation for Local Businesses",
    description:
      "Web design and lead generation built for ambitious local businesses across the UK.",
    images: [
      {
        url: "/og-image.jpg", // PLACEHOLDER: add real OG image
        width: 1200,
        height: 630,
        alt: "ElevationX UK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ElevationX UK | Web Design & Lead Generation for Local Businesses",
    description:
      "Web design and lead generation built for ambitious local businesses across the UK.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

// Local Business schema markup
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "ElevationX UK",
  description:
    "Web design and lead generation for local businesses across the UK.",
  url: "https://elevationxuk.com",
  // PLACEHOLDER: replace with real phone number
  telephone: "+44-XXXX-XXXXXX",
  email: "jack@elevationxuk.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Cardiff",
    addressRegion: "Wales",
    addressCountry: "GB",
  },
  areaServed: {
    "@type": "Country",
    name: "United Kingdom",
  },
  serviceType: ["Web Design", "Lead Generation", "Digital Marketing"],
  priceRange: "££",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <head>
        {/* PLACEHOLDER: replace GA_MEASUREMENT_ID with your real tracking ID */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'GA_MEASUREMENT_ID');
        `}} /> */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased min-h-screen flex flex-col" style={{ backgroundColor: "var(--ink-950)" }}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
