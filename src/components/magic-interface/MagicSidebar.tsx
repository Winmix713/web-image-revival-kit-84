
import React from "react";

interface MagicSidebarProps {
  isOpen: boolean;
}

const MagicSidebar = ({ isOpen }: MagicSidebarProps) => {
  return (
    <aside 
      className={`w-[204px] bg-sidebar/90 backdrop-blur-sm border-r border-white/10 overflow-y-auto transition-all duration-300 flex flex-col
                ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                md:translate-x-0`}
    >
      <div className="p-3">
        <h3 className="text-xs uppercase font-semibold text-sidebar-foreground/70 mb-3">Recent Files</h3>
        
        <div className="space-y-2">
          <div className="bg-sidebar-accent/30 p-4 rounded-md cursor-pointer">
            <div className="h-14 w-full flex items-center justify-center text-white font-medium">
              Magic Preview
            </div>
          </div>
          
          <div className="p-2 hover:bg-white/5 rounded-md cursor-pointer flex items-center gap-2 text-sidebar-foreground">
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
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="3" y1="9" x2="21" y2="9"></line>
              <line x1="9" y1="21" x2="9" y2="9"></line>
            </svg>
            <span className="text-xs">Project Preview</span>
          </div>
        </div>
      </div>
      
      <div className="mt-auto border-t border-white/5 p-2">
        <div className="flex items-center gap-2 text-sidebar-foreground/70 p-1">
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
            <polyline points="23 4 23 10 17 10"></polyline>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
          </svg>
          <span className="text-xs">Recent Actions</span>
        </div>
      </div>
    </aside>
  );
};

export default MagicSidebar;
