import { VercelToolbar } from "@vercel/toolbar/next";
import { Geist, Geist_Mono } from "next/font/google";
import React, { type ReactNode } from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

import "@/app/globals.css";
import { DashboardHeader } from "@/components/dashboard/header";
import { AppSidebar } from "@/components/dashboard/app-sidebar";

const geist = Geist({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={cn(geist.className, "bg-background")}>
      <body>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <DashboardHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>

        {process.env.NODE_ENV === "development" && <VercelToolbar />}
      </body>
    </html>
  );
}
