
import React from "react";
import { Search } from "lucide-react";

const SidebarSearch: React.FC = () => {
  return (
    <div className="mx-3 px-3 py-2 border-b border-white/10">
      <div className="relative">
        <input 
          type="text" 
          className="w-full h-9 bg-background/50 rounded-lg px-9 text-sm border border-white/10 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-[#9b87f5] transition-all"
          placeholder="Search..."
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      </div>
    </div>
  );
};

export default SidebarSearch;
