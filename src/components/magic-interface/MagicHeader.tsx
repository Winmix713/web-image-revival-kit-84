
import React from "react";
import { ChevronLeft, Copy, Share } from "lucide-react";
import { cn } from "@/lib/utils";

interface MagicHeaderProps {
  toggleSidebar: () => void;
  title?: string;
}

const MagicHeader = ({ toggleSidebar, title = "Magic Interface" }: MagicHeaderProps) => {
  return (
    <header className="h-8 bg-gradient-to-r from-[#0F1122]/90 to-[#0F1122]/60 backdrop-blur-xl border-b border-[#00F5FF]/20 flex items-center justify-between px-2">
      <div className="flex items-center gap-2">
        <button 
          onClick={toggleSidebar}
          className="p-1 rounded hover:bg-[#00F5FF]/10 text-[#00F5FF] transition-colors hover:shadow-glow-blue-sm"
        >
          <ChevronLeft size={16} />
        </button>
        <span className="text-xs font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#00F5FF] to-[#00F5FF]/80">{title}</span>
      </div>
      
      <div className="flex items-center">
        <button className="p-1 rounded hover:bg-[#B026FF]/10 text-[#B026FF] transition-colors">
          <span className="text-xs">Filter View</span>
        </button>
      </div>
    </header>
  );
};

export default MagicHeader;
