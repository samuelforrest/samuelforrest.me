import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/navbar";
import TimedBanner from "@/components/Banner";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Samuel Forrest",
    template: "Samuel Forrest",
  },
  description:
    "Samuel Forrest is a 17-year-old aspiring Software Engineer studying Computer Science, Physics & Mathematics A-Levels in London. Private tutor, web developer, and entrepreneur building Tradelingo and Sitro.",
  authors: [{ name: "Samuel Forrest", url: "https://www.samuelforrest.me" }],
  creator: "Samuel Forrest",
  publisher: "Samuel Forrest",
  keywords: [
    "Samuel Forrest",
    "samuelforrest.me",
    "Software Engineer",
    "Computer Science Student",
    "A-Level Student London",
    "Web Developer",
    "Private Tutor",
    "Entrepreneur",
    "Tradelingo",
    "Portfolio",
    "Software Development",
    "Programming",
    "Mathematics",
    "Physics",
    "Degree Apprenticeships",
    "St Georges College Weybridge",
    "Work Experience",
    "British Airways",
    "Amazon",
    "Virgin Atlantic",
  ],
  metadataBase: new URL("https://www.samuelforrest.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    title: "Samuel Forrest | Software Engineer & A-Level Student",
    description:
      "Samuel Forrest is a 17-year-old aspiring Software Engineer studying Computer Science, Physics & Mathematics A-Levels in London. Private tutor, web developer, and entrepreneur.",
    url: "https://www.samuelforrest.me",
    siteName: "Samuel Forrest Portfolio",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Samuel Forrest - Software Engineer & A-Level Student",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Samuel Forrest | Software Engineer & A-Level Student",
    description:
      "Samuel Forrest is a 17-year-old aspiring Software Engineer studying Computer Science, Physics & Mathematics A-Levels in London.",
    images: ["/opengraph-image.png"],
    creator: "@samueljforrest",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Portfolio",
  classification: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="light dark" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Samuel Forrest",
              url: "https://www.samuelforrest.me",
              image:
                "https://www.samuelforrest.me/samuel-forrest-october-2025.webp",
              jobTitle: "Software Engineer & A-Level Student",
              description:
                "17-year-old aspiring Software Engineer studying Computer Science, Physics & Mathematics A-Levels in London",
              alumniOf: "St George's College, Weybridge",
              knowsAbout: [
                "Software Engineering",
                "Web Development",
                "Computer Science",
                "Mathematics",
                "Physics",
                "Private Tutoring",
              ],
              sameAs: [
                "https://linkedin.com/in/samueljforrest",
                "https://github.com/samuelforrest",
              ],
              address: {
                "@type": "Place",
                addressLocality: "London",
                addressCountry: "UK",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TBLC7B9NCC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TBLC7B9NCC');
          `}
        </Script>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <TooltipProvider delayDuration={0}>
            {children}
            <Navbar />
            <TimedBanner />
          </TooltipProvider>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
