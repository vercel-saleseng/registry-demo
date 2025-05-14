import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { ComponentCard } from "@/components/component-card";
import { Button } from "@/components/ui/button";

const starters = [
  {
    title: "Dashboard",
    name: "dashboard",
    url: "/starters/dashboard",
  },
  {
    title: "Terminal",
    name: "terminal",
    url: "/starters/terminal",
  },
  {
    title: "Couch Surfer",
    name: "couch-surfer",
    url: "/starters/couch-surfer",
  },
  {
    title: "Blank",
    name: "blank",
    url: "/starters/blank",
  },
];

export default function StartPage() {
  return (
    <div className="container p-5 md:p-10">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <Button variant="ghost" size="sm" asChild className="mb-4">
            <Link href="/">
              <ArrowLeft className="mr-2 size-4" />
              Back to Home
            </Link>
          </Button>
          <h1 className="font-bold text-3xl tracking-tight">Starters</h1>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {starters.map((starter) => (
          <ComponentCard
            key={starter.name}
            name={starter.name}
            baseUrl={process.env.VERCEL_PROJECT_PRODUCTION_URL ?? ""}
            title={starter.title}
            promptTitle={`${starter.title} Starter Kit`}
            previewUrl={starter.url}
          />
        ))}
      </div>
    </div>
  );
}
