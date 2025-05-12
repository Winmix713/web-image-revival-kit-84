
import React from "react";
import { Link } from "react-router-dom";
import { 
  BarChart2, 
  Clock, 
  Grid, 
  Home,
  LineChart, 
  Medal, 
  Settings, 
  Table2, 
  Trophy,
  ChevronRight,
  Search
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href: string;
  isActive?: boolean;
  isNew?: boolean;
}

export interface AppSidebarProps {
  isOpen: boolean;
  toggleSidebar?: () => void;
  variant?: "default" | "compact";
}

export const AppSidebar = ({ 
  isOpen, 
  toggleSidebar,
  variant = "default" 
}: AppSidebarProps) => {
  const sidebarItems: SidebarItemProps[] = [
    {
      icon: <Home className="h-5 w-5 icon-box" />,
      title: "Dashboard",
      description: "Overview",
      href: "/",
    },
    {
      icon: <Trophy className="h-5 w-5 icon-box" />,
      title: "Leagues",
      description: "Manage leagues",
      href: "/leagues",
    },
    {
      icon: <Table2 className="h-5 w-5 icon-box" />,
      title: "Matches",
      description: "Match schedules",
      href: "/matches",
      isActive: true
    },
    {
      icon: <LineChart className="h-5 w-5 icon-box" />,
      title: "Analysis",
      description: "Data analytics",
      href: "/analysis",
      isNew: true
    },
    {
      icon: <Grid className="h-5 w-5 icon-box" />,
      title: "Patterns",
      description: "Play patterns",
      href: "/patterns",
    },
    {
      icon: <Medal className="h-5 w-5 icon-box" />,
      title: "League Analytics",
      description: "Advanced stats",
      href: "/league-analytics",
    },
    {
      icon: <BarChart2 className="h-5 w-5 icon-box" />,
      title: "League Management",
      description: "Manage leagues",
      href: "/league-management",
    },
    {
      icon: <Settings className="h-5 w-5 icon-box" />,
      title: "Settings",
      description: "App settings",
      href: "/settings",
    },
  ];

  return (
    <aside 
      className={cn(
        "h-full bg-sidebar/80 backdrop-blur-xl border-r border-white/10 overflow-y-auto transition-all duration-300 flex flex-col",
        variant === "default" ? "w-72" : "w-[204px]",
        isOpen ? "translate-x-0" : "-translate-x-full", 
        "md:translate-x-0"
      )}
    >
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
      
      <nav className="flex-grow px-3 py-4 space-y-1.5">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} animationDelay={index * 50} />
        ))}
      </nav>
      
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
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href: string;
  isActive?: boolean;
  isNew?: boolean;
  animationDelay?: number;
}

const SidebarItem = ({ 
  icon, 
  title, 
  description, 
  href, 
  isActive = false,
  isNew = false,
  animationDelay = 0
}: SidebarItemProps) => {
  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;
  
  return (
    <Link
      to={href}
      className={cn(
        "group relative rounded-lg transition-all duration-300 overflow-hidden flex items-center slide-right",
        isActive 
          ? "sidebar-item sidebar-item-active text-white" 
          : "sidebar-item hover:bg-sidebar-accent"
      )}
      style={style}
    >
      <span className={cn(
        "absolute left-0 top-0 bottom-0 w-1 bg-white/80 transition-opacity", 
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-70"
      )}></span>
      
      <div className="flex items-center py-3 px-4 text-sm w-full">
        <div className={cn(
          "h-9 w-9 rounded-md flex items-center justify-center transition-all duration-300",
          isActive 
            ? "bg-white/20 text-white shadow-[0_0_10px_rgba(155,135,245,0.5)]" 
            : "bg-background/30 text-[#9b87f5] group-hover:bg-white/10 group-hover:text-white group-hover:shadow-[0_0_10px_rgba(155,135,245,0.3)]"
        )}>
          {icon}
        </div>
        
        <div className="ml-3 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate font-medium">{title}</span>
            {isNew && (
              <Badge className="bg-[#ff4a4a] text-xs px-1.5 py-0 uppercase font-medium">
                NEW
              </Badge>
            )}
          </div>
          {description && (
            <span className="text-xs text-muted-foreground truncate block mt-0.5">{description}</span>
          )}
        </div>
        
        <ChevronRight className={cn(
          "h-4 w-4 text-white/50 transition-transform duration-300",
          isActive ? "rotate-90" : "group-hover:translate-x-1"
        )} />
      </div>
    </Link>
  );
};

export default AppSidebar;
