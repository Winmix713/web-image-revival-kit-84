
import React from "react";
import { Copy, Share } from "lucide-react";

interface MagicHeaderProps {
  toggleSidebar: () => void;
}

const MagicHeader = ({ toggleSidebar }: MagicHeaderProps) => {
  return (
    <header className="h-8 bg-background/80 backdrop-blur-sm border-b border-white/10 flex items-center justify-between px-2">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-white/10 text-sidebar-foreground"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <span className="text-xs font-medium text-sidebar-foreground">Magic Interface</span>
      </div>
      
      <div className="flex items-center">
        <button className="p-1 rounded hover:bg-white/10 text-sidebar-foreground">
          <span className="text-xs">Filter View</span>
        </button>
      </div>
    </header>
  );
};

export default MagicHeader;
