
import React from "react";
import { Copy, Share } from "lucide-react";

const MagicContent = () => {
  return (
    <div className="flex-1 relative overflow-hidden">
      {/* Watermark background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
        <h1 className="text-[15vw] font-bold text-white">Magic Background</h1>
      </div>
      
      {/* Main content */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center p-6">
          <h2 className="text-2xl font-bold text-white mb-2">Streamline Your Workflow</h2>
          <p className="text-muted-foreground">Powerful tools, seamless experience</p>
        </div>
        
        {/* Action buttons */}
        <div className="absolute top-4 right-4 bg-black/30 rounded-lg backdrop-blur-md border border-white/10 overflow-hidden">
          <div className="flex flex-col divide-y divide-white/10">
            <button className="flex items-center gap-2 p-3 hover:bg-white/5 text-white/90 transition-colors">
              <Copy size={16} />
              <span className="text-xs">Copy</span>
              <span className="ml-auto text-xs text-white/50">⌘C</span>
            </button>
            <button className="flex items-center gap-2 p-3 hover:bg-white/5 text-white/90 transition-colors">
              <Share size={16} />
              <span className="text-xs">Share</span>
              <span className="ml-auto text-xs text-white/50">⌘S</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MagicContent;
