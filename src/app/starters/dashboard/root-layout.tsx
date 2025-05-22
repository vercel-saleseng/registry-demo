import { Geist, Geist_Mono } from "next/font/google";
import React, { type ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import "@/app/globals.css";
import { DashboardHeader } from "@/components/dashboard/header";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

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
        <main>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <DashboardHeader />
              {children}
            </SidebarInset>
          </SidebarProvider>
        </main>
      </body>
    </html>
  );
}
