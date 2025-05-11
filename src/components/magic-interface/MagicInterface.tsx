
import React, { useState } from "react";
import MagicHeader from "@/components/magic-interface/MagicHeader";
import MagicSidebar from "@/components/magic-interface/MagicSidebar";
import MagicContent from "@/components/magic-interface/MagicContent";
import MagicDock from "@/components/magic-interface/MagicDock";
import { cn } from "@/lib/utils";

interface MagicInterfaceProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

const MagicInterface = ({ className, title, subtitle }: MagicInterfaceProps) => {
  const [activeIcon, setActiveIcon] = useState("magic");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar for mobile
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className={cn("min-h-screen bg-background flex items-center justify-center", className)}>
      {/* Wrapper to control overall size */}
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] h-[80vh] relative bg-black/30 rounded-xl overflow-hidden backdrop-blur-md border border-white/10">
        <MagicHeader toggleSidebar={toggleSidebar} title={title} />

        {/* Main Layout */}
        <div className="flex h-[calc(80vh-32px)]">
          <MagicSidebar isOpen={isSidebarOpen} />
          <MagicContent title={title} subtitle={subtitle} />
        </div>

        <MagicDock activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      </div>
    </div>
  );
};

export default MagicInterface;
