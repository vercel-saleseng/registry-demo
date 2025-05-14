import type React from "react";
import { Toaster } from "sonner";

import { SidebarProvider } from "@/components/ui/sidebar";

import "@/app/globals.css";

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
