import { BallotUnit } from "../../components/BallotUnit";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function SlugBallotPage({ params }: PageProps) {
  const { slug } = await params;
  return <BallotUnit slug={slug} />;
}



