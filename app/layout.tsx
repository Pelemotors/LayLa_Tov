import type { Metadata } from "next";
import { Rubik, Heebo } from "next/font/google";
import "./globals.css";
import { Layout } from "@/components/layout/Layout";

const rubik = Rubik({
  subsets: ["latin", "hebrew"],
  variable: "--font-body",
  display: "swap",
});

const heebo = Heebo({
  subsets: ["latin", "hebrew"],
  variable: "--font-heading",
  weight: ["400", "500", "700"],
  display: "swap",
});

const baseUrl =
  process.env.NEXT_PUBLIC_BASE_URL || "https://example.com";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "ליאור - יועצת שינה והדרכת הורים בשיטת 'לילה טוב'",
    template: "%s | ליאור יועצת שינה",
  },
  description:
    "ייעוץ שינה מקצועי לתינוקות ופעוטות בשיטת 'לילה טוב' – ליווי אישי ומותאם להורים, לילות רגועים ושקט בבית.",
  openGraph: {
    type: "website",
    locale: "he_IL",
    url: baseUrl,
    title: "ליאור - יועצת שינה והדרכת הורים בשיטת 'לילה טוב'",
    description:
      "ייעוץ שינה מקצועי לתינוקות ופעוטות בשיטת 'לילה טוב'. ליווי אישי, אמפתי ומותאם למשפחה שלך.",
    siteName: "ליאור יועצת שינה",
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="he" dir="rtl">
      <body className={`${rubik.variable} ${heebo.variable} font-body`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}

