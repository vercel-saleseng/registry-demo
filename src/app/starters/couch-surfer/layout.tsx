import type React from "react";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import "@/app/globals.css";
import { DashboardHeader } from "@/components/dashboard/header";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider>
      <main className="flex flex-col items-center w-full">
        {children}
      </main>
      <Toaster />
    </SidebarProvider>
  );
}
