
import React from "react";

interface MagicDockProps {
  activeIcon: string;
  setActiveIcon: (icon: string) => void;
}

const MagicDock = ({ activeIcon, setActiveIcon }: MagicDockProps) => {
  return (
    <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2">
      <div className="bg-black/50 backdrop-blur-xl border border-white/10 rounded-full px-3 py-1 flex items-center gap-1">
        <DockIcon 
          icon="move" 
          isActive={activeIcon === "move"} 
          onClick={() => setActiveIcon("move")} 
        />
        <DockIcon 
          icon="grid" 
          isActive={activeIcon === "grid"} 
          onClick={() => setActiveIcon("grid")} 
        />
        <DockIcon 
          icon="settings" 
          isActive={activeIcon === "settings"} 
          onClick={() => setActiveIcon("settings")} 
        />
      </div>
    </div>
  );
};

interface DockIconProps {
  icon: string;
  isActive: boolean;
  onClick: () => void;
}

const DockIcon = ({ icon, isActive, onClick }: DockIconProps) => {
  let iconElement;
  
  switch(icon) {
    case "move":
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 9l-3 3 3 3"></path>
          <path d="M9 5l3-3 3 3"></path>
          <path d="M15 19l3 3 3-3"></path>
          <path d="M19 9l3 3-3 3"></path>
          <path d="M2 12h20"></path>
          <path d="M12 2v20"></path>
        </svg>
      );
      break;
    case "grid":
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7"></rect>
          <rect x="14" y="3" width="7" height="7"></rect>
          <rect x="14" y="14" width="7" height="7"></rect>
          <rect x="3" y="14" width="7" height="7"></rect>
        </svg>
      );
      break;
    case "settings":
      iconElement = (
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      );
      break;
    default:
      iconElement = null;
  }
  
  return (
    <button 
      onClick={onClick}
      className={`p-2 rounded-full transition-colors ${
        isActive 
          ? 'bg-primary text-white' 
          : 'text-white/60 hover:text-white hover:bg-white/10'
      }`}
    >
      {iconElement}
    </button>
  );
};

export default MagicDock;
