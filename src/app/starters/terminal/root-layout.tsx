import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Geist } from "next/font/google";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geist.className, "bg-background")}>
      <body>
        <main className="flex w-full justify-center">
          <div className="container">{children}</div>
        </main>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
