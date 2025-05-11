
import React, { useState } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import PageBackground from "./PageBackground";

interface AppLayoutProps {
  children: React.ReactNode;
  backgroundVariant?: "default" | "subtle" | "vibrant";
  contentClassName?: string;
  headerTitle?: string;
}

export const AppLayout = ({ 
  children, 
  backgroundVariant = "default",
  contentClassName,
  headerTitle
}: AppLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppHeader toggleSidebar={toggleSidebar} title={headerTitle} />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        <AppSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <main className={`flex-1 overflow-auto p-6 relative ${contentClassName || ""}`}>
          <PageBackground variant={backgroundVariant} animated={true} />
          <div className="relative z-10 mx-auto max-w-6xl animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
