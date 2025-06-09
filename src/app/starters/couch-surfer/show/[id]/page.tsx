import { Suspense } from "react";
import { ShowDetails } from "@/components/couch-surfer/show-details";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PopularShows } from "@/components/couch-surfer/popular-shows";

type ShowPageProps = {
  params: Promise<{ id: string }>;
}

export default async function ShowPage({ params }: ShowPageProps) {
  const { id } = await params;

  return (
    <>
      <header className="border-b border-border py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/couch-surfer" className="text-xl font-bold text-primary">
            Couch Surfer
          </a>
        </div>
      </header>

      <div className="min-h-screen py-8">
        <header className="mb-8 max-w-6xl mx-auto px-4">
          <Link
            href="/couch-surfer"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </header>

        <div className="max-w-6xl mx-auto px-4">
          <ShowDetails showId={id} />
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
              Popular Shows
            </h2>
            <Suspense>
              <PopularShows />
            </Suspense>
          </div>
        </div>
      </div>
    </>
  );
}
