import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Get the base URL for meta tags
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

const baseUrl = getBaseUrl();

export const metadata: Metadata = {
  title: {
    default: "Vote for Me",
    template: "%s | Vote for Me",
  },
  description: "Interactive Electronic Voting Machine Ballot Unit - Create and share your own digital ballot",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Vote for Me",
    description: "Interactive Electronic Voting Machine Ballot Unit - Create and share your own digital ballot",
    url: baseUrl,
    siteName: "Vote for Me",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Vote for Me",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vote for Me",
    description: "Interactive Electronic Voting Machine Ballot Unit",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
