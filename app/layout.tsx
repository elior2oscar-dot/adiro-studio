import type { Metadata, Viewport } from "next";
import { site } from "@/lib/site";
import "./globals.css";

const siteUrl = "https://elior2oscar-dot.github.io/adiro-studio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.title,
    template: `%s | ${site.brand}`,
  },
  description: site.description,
  keywords: [
    "בניית אתרים",
    "שדרוג אתרים",
    "עיצוב אתרים לעסקים",
    "אתר לעסק",
    "שיפור המרות",
  ],
  authors: [{ name: site.founders }],
  creator: site.brand,
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: siteUrl,
    title: site.title,
    description: site.description,
    siteName: site.brand,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 675,
        alt: "Adiro Studio",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d1b2a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
