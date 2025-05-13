
import React, { useState, useEffect } from "react";
import AppHeader from "./AppHeader";
import AppSidebar from "./AppSidebar";
import PageBackground from "./PageBackground";

interface AppLayoutProps {
  children: React.ReactNode;
  backgroundVariant?: "default" | "subtle" | "vibrant";
  contentClassName?: string;
  headerTitle?: string;
  withSidebar?: boolean;
}

export const AppLayout = ({ 
  children, 
  backgroundVariant = "default",
  contentClassName,
  headerTitle = "LeagueSync",
  withSidebar = true
}: AppLayoutProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    // Check if we should default to open sidebar on desktop
    const isDesktop = window.innerWidth > 768;
    if (isDesktop) {
      setIsSidebarOpen(true);
    }
  }, []);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`min-h-screen bg-background flex flex-col ${isMounted ? 'animate-fade-in' : 'opacity-0'}`}>
      <AppHeader toggleSidebar={toggleSidebar} title={headerTitle} />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        {withSidebar && (
          <AppSidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        )}
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
