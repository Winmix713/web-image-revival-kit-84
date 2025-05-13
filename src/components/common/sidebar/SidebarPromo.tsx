
import React from "react";
import { Clock } from "lucide-react";

const SidebarPromo: React.FC = () => {
  return (
    <div className="m-3 p-4 bg-gradient-to-br from-[#3a36e0]/30 to-[#9b87f5]/20 backdrop-blur-sm rounded-lg border border-[#9b87f5]/20 shadow-lg hover:shadow-[0_0_15px_rgba(58,54,224,0.2)] transition-all duration-300 cursor-pointer">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
          <Clock className="h-5 w-5 text-[#9b87f5]" />
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Next analysis update</div>
          <div className="font-medium text-white">Today, 18:00</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarPromo;
