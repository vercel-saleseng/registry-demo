import { Geist, Geist_Mono } from "next/font/google";
import React, { type ReactNode } from "react";
import { Toaster } from "sonner";

import { SidebarProvider } from "@/components/ui/sidebar";
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
        <SidebarProvider>
          {children}
          <Toaster />
        </SidebarProvider>
      </body>
    </html>
  );
}
