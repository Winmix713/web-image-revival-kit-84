
import React from "react";
import { ChevronLeft, Copy, Share } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagicHeaderProps {
  toggleSidebar: () => void;
  title?: string;
}

const MagicHeader = ({ toggleSidebar, title = "Magic Interface" }: MagicHeaderProps) => {
  return (
    <header className="h-8 bg-gradient-to-r from-background/90 to-background/60 backdrop-blur-xl border-b border-white/10 flex items-center justify-between px-2">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-white/10 text-sidebar-foreground transition-colors"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">{title}</span>
      </div>
      
      <div className="flex items-center">
        <button className="p-1 rounded hover:bg-white/10 text-sidebar-foreground transition-colors">
          <span className="text-xs">Filter View</span>
        </button>
      </div>
    </header>
  );
};

export default MagicHeader;
