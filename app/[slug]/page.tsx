import { BallotUnit } from "../../components/BallotUnit";
import { Metadata } from "next";
import allConfigs from "../../data/ballot-config.json";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

type Candidate = {
  rowNumber: number;
  name: string;
  photoUrl: string;
  symbolUrl: string;
};

type Config = {
  ward?: Candidate[];
  block?: Candidate[];
  district?: Candidate[];
};

type AllConfigs = Record<string, Config>;

const configs = allConfigs as AllConfigs;

// Get the base URL for OG images
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const config = configs[slug];

  if (!config) {
    return {
      title: "Vote for Me",
      description: "Interactive Electronic Voting Machine Ballot Unit",
    };
  }

  // Get the first candidate from ward (or any segment) for the preview image
  const firstCandidate = config.ward?.[0] || config.block?.[0] || config.district?.[0];
  const baseUrl = getBaseUrl();

  // Use the candidate's photo URL with absolute path
  const ogImageUrl = firstCandidate?.photoUrl
    ? (firstCandidate.photoUrl.startsWith('http')
      ? firstCandidate.photoUrl
      : `${baseUrl}${firstCandidate.photoUrl}`)
    : `${baseUrl}/og-image.png`;

  const candidateNames = [
    ...(config.ward || []).map(c => c.name),
    ...(config.block || []).map(c => c.name),
    ...(config.district || []).map(c => c.name),
  ].join(", ");

  const title = `Vote for ${slug.charAt(0).toUpperCase() + slug.slice(1)}`;
  const description = candidateNames
    ? `Vote for: ${candidateNames}. Interactive Electronic Voting Machine Ballot Unit.`
    : "Interactive Electronic Voting Machine Ballot Unit";

  // Use candidate photo for favicon
  const faviconUrl = firstCandidate?.photoUrl || '/og-image.png';

  return {
    title,
    description,
    icons: {
      icon: faviconUrl,
      apple: faviconUrl,
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${slug}`,
      siteName: "Vote for Me - EVM Demo",
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImageUrl],
    },
    // WhatsApp specific meta tags
    other: {
      'og:image': ogImageUrl,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': title,
    },
  };
}

export default async function SlugBallotPage({ params }: PageProps) {
  const { slug } = await params;
  return <BallotUnit slug={slug} />;
}
