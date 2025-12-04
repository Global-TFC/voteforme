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
  // In production, use your actual domain
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL;
  }
  // For Vercel deployments
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  // Fallback for development
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

  // Use the candidate's photo or a default OG image
  const ogImage = firstCandidate?.photoUrl
    ? `${baseUrl}${firstCandidate.photoUrl}`
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

  // Determine the image type for favicon
  const getImageType = (url: string) => {
    if (url.endsWith('.png')) return 'image/png';
    if (url.endsWith('.jpg') || url.endsWith('.jpeg')) return 'image/jpeg';
    if (url.endsWith('.ico')) return 'image/x-icon';
    if (url.endsWith('.svg')) return 'image/svg+xml';
    return 'image/png'; // default
  };

  const faviconUrl = firstCandidate?.photoUrl || '/og-image.png';
  const absoluteFaviconUrl = `${baseUrl}${faviconUrl}`;

  return {
    title,
    description,
    icons: {
      icon: [
        { url: faviconUrl, type: getImageType(faviconUrl) },
      ],
      apple: [
        { url: faviconUrl, type: getImageType(faviconUrl) },
      ],
    },
    openGraph: {
      title,
      description,
      url: `${baseUrl}/${slug}`,
      siteName: "Vote for Me",
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
  };
}

export default async function SlugBallotPage({ params }: PageProps) {
  const { slug } = await params;
  return <BallotUnit slug={slug} />;
}
