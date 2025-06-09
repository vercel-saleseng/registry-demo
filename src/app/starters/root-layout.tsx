import { Geist, Geist_Mono } from "next/font/google";
import React, { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import "@/app/globals.css";

const GeistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const GeistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        GeistSans.variable,
        GeistMono.variable,
        "bg-background text-foreground",
      )}
    >
      <body>
        <main className="flex w-full justify-center">
          <div className="container">{children}</div>
        </main>
      </body>
    </html>
  );
}
