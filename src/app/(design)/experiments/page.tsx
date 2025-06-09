import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import type React from "react";

import { ComponentCard } from "@/components/design/component-card";
import { Button } from "@/components/ui/button";

// name of
const experiments = [
  {
    title: "IBM Carbon Design System",
    name: "carbon",
    url: "https://registry-experimental.vercel.app/carbon",
  },
  {
    title: "CMS Design System",
    name: "cms",
    url: "https://registry-experimental.vercel.app/cms",
  },
];

export default function ExperimentsPage() {
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
          <h1 className="font-bold text-3xl tracking-tight">Experiments</h1>
          <p className="text-muted-foreground text-sm">
            Registry entries are not limited to just shadcn/ui! You can also use
            third party design systems register them. Note that although you can
            register third-party design systems, it does not mean that they are
            fully supported by the Open in v0 button.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-8">
        {experiments.map((experiment) => (
          <ComponentCard
            key={experiment.name}
            name={experiment.name}
            baseUrl={"registry-experimental.vercel.app"}
            title={experiment.title}
            promptTitle={`${experiment.title}`}
            previewUrl={experiment.url}
          />
        ))}
      </div>
    </div>
  );
}
