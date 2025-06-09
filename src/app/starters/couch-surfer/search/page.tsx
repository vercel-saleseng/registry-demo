import { Suspense } from "react";
import { SearchResults } from "@/components/couch-surfer/search-results";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { SearchBar } from "@/components/couch-surfer/search-bar";

type SearchPageProps = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = (params.q as string) || "";

  return (
    <>
      <header className="border-b border-border py-4">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
          <a href="/couch-surfer" className="text-xl font-bold text-primary">
            Couch Surfer
          </a>
          <Suspense>
            <SearchBar />
          </Suspense>
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
          <h1 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">
            Search Results {query ? `for "${query}"` : ""}
          </h1>
          <SearchResults query={query} />
        </div>
      </div>
    </>
  );
}
