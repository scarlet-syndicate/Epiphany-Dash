
import React from "react";
import { AcademicSidebar } from "./AcademicSidebar";
import { cn } from "@/lib/utils";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="min-h-screen bg-academia-offwhite">
      <AcademicSidebar />
      <main className="pl-20 lg:pl-64 min-h-screen py-6 px-4 md:px-8 transition-all duration-300">
        <div className={cn(
          "max-w-7xl mx-auto",
          "animate-fade-in"
        )}>
          {children}
        </div>
      </main>
    </div>
  );
}
