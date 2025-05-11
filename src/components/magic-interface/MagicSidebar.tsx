
import React from "react";
import { cn } from "@/lib/utils";
import { LayoutGrid, RefreshCcw } from "lucide-react";

interface MagicSidebarProps {
  isOpen: boolean;
}

const MagicSidebar = ({ isOpen }: MagicSidebarProps) => {
  return (
    <aside 
      className={cn(
        "w-[204px] bg-sidebar/90 backdrop-blur-lg border-r border-white/10 overflow-y-auto transition-all duration-300 flex flex-col",
        isOpen ? 'translate-x-0' : '-translate-x-full', 
        "md:translate-x-0"
      )}
    >
      <div className="p-3">
        <h3 className="text-xs uppercase font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#9b87f5] to-[#6e59A5] mb-3">Recent Files</h3>
        
        <div className="space-y-2">
          <div className="bg-gradient-to-br from-sidebar-accent/30 to-sidebar-accent/10 p-4 rounded-md cursor-pointer border border-white/5 hover:border-white/10 transition-all shadow-md hover:shadow-lg">
            <div className="h-14 w-full flex items-center justify-center text-white font-medium">
              Magic Preview
            </div>
          </div>
          
          <div className="p-2 hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-2 text-sidebar-foreground">
            <LayoutGrid size={16} />
            <span className="text-xs">Project Preview</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto border-t border-white/5 p-2">
        <div className="flex items-center gap-2 text-sidebar-foreground/70 p-1">
          <RefreshCcw size={16} />
          <span className="text-xs">Recent Actions</span>
        </div>
      </div>
    </aside>
  );
};

export default MagicSidebar;
