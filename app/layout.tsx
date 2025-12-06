import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
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

// export const metadata: Metadata = {
//   title: {
//     default: "Vote for Me",
//     template: "%s | Vote for Me",
//   },
//   description: "Interactive Electronic Voting Machine Ballot Unit - Create and share your own digital ballot",
//   metadataBase: new URL(baseUrl),
//   openGraph: {
//     title: "Vote for Me",
//     description: "Interactive Electronic Voting Machine Ballot Unit - Create and share your own digital ballot",
//     url: baseUrl,
//     siteName: "Vote for Me",
//     images: [
//       {
//         url: "/og-image.png",
//         width: 1200,
//         height: 630,
//         alt: "Vote for Me",
//       },
//     ],
//     locale: "en_US",
//     type: "website",
//   },
//   twitter: {
//     card: "summary_large_image",
//     title: "Vote for Me",
//     description: "Interactive Electronic Voting Machine Ballot Unit",
//     images: ["/og-image.png"],
//   },
// };

export const metadata: Metadata = {
  title: 'EVM Demo Online - വാർഡ്ഡിലെ EVM ഡെമോ ഓൺലൈനായക്കിയാലോ',
  description: 'നിങ്ങളുടെ സ്ഥാനാർത്ഥികളുടെ പേര്, ഫോട്ടോ, ചിഹ്നം EVM ൽ കാണിച്ചു വോട്ട് കുറുമ്പയിൽ നടത്താം. 100% കംപ്ലൈമെന്റ് ചെയ്യാവുന്ന EVM Simulation',
  keywords: 'EVM Demo, Electronic Voting Machine, Malayalam, Kerala Elections, Online Voting Practice, വോട്ടിംഗ്, ഇവിഎം',
  openGraph: {
    title: 'EVM Demo Online - വാർഡ്ഡിലെ EVM ഡെമോ',
    description: 'എല്ലാ തലത്തിലുമുള്ള തിരഞ്ഞെടുപ്പുകൾക്കായി ഓൺലൈൻ EVM സിമുലേഷൻ',
    type: 'website',
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
        className={`${inter.variable} ${poppins.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
