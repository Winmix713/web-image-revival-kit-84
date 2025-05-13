
import React from "react";

const SidebarHeader: React.FC = () => {
  return (
    <div className="py-6 px-6 flex flex-col">
      <div className="flex items-center">
        <div className="h-9 w-9 rounded bg-gradient-to-br from-[#3a36e0] to-[#6e59A5] flex items-center justify-center mr-3 shadow-md shadow-[#3a36e0]/20 animate-pulse" style={{ animationDuration: '4s' }}>
          <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-7 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
          </svg>
        </div>
        <div>
          <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">V-SPORTS</h1>
          <p className="text-muted-foreground text-xs mt-0.5">League Management</p>
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
