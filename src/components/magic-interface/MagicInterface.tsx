
import React, { useState } from "react";
import MagicHeader from "@/components/magic-interface/MagicHeader";
import MagicSidebar from "@/components/magic-interface/MagicSidebar";
import MagicContent from "@/components/magic-interface/MagicContent";
import MagicDock from "@/components/magic-interface/MagicDock";

const MagicInterface = () => {
  const [activeIcon, setActiveIcon] = useState("magic");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle sidebar for mobile
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      {/* Wrapper to control overall size */}
      <div className="w-full md:w-[90%] lg:w-[80%] xl:w-[70%] h-[80vh] relative bg-black/30 rounded-xl overflow-hidden backdrop-blur-md border border-white/10">
        <MagicHeader toggleSidebar={toggleSidebar} />

        {/* Main Layout */}
        <div className="flex h-[calc(80vh-32px)]">
          <MagicSidebar isOpen={isSidebarOpen} />
          <MagicContent />
        </div>

        <MagicDock activeIcon={activeIcon} setActiveIcon={setActiveIcon} />
      </div>
    </div>
  );
};

export default MagicInterface;
