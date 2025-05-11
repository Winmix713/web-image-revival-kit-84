
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
      isActive: true
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
        "h-full bg-sidebar/90 backdrop-blur-sm border-r border-white/10 overflow-y-auto transition-all duration-300 flex flex-col",
        variant === "default" ? "w-72" : "w-[204px]",
        isOpen ? "translate-x-0" : "-translate-x-full", 
        "md:translate-x-0"
      )}
    >
      <div className="py-6 px-6 flex flex-col">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded bg-[#3a36e0] flex items-center justify-center mr-2">
            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-7 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </div>
          <h1 className="font-bold text-xl text-white">V-SPORTS</h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1">League Management</p>
      </div>
      
      <div className="mx-3 px-3 py-2 border-b border-border">
        <div className="relative">
          <input 
            type="text" 
            className="w-full h-9 bg-background rounded-lg px-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" 
            placeholder="Search..."
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        </div>
      </div>
      
      <nav className="flex-grow px-3 py-4 space-y-1">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} />
        ))}
      </nav>
      
      <div className="m-3 p-4 bg-gradient-to-r from-[#3a36e0]/30 to-[#9b87f5]/20 backdrop-blur-sm rounded-lg border border-[#9b87f5]/20">
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

const SidebarItem = ({ 
  icon, 
  title, 
  description, 
  href, 
  isActive = false,
  isNew = false 
}: SidebarItemProps) => {
  return (
    <Link
      to={href}
      className={cn(
        "group mb-1 relative rounded-lg transition-all duration-200 overflow-hidden flex items-center",
        isActive 
          ? "sidebar-item sidebar-item-active bg-[#3a36e0] text-white hover:bg-[#3a36e0]/90" 
          : "sidebar-item hover:bg-sidebar-accent"
      )}
    >
      <span className={cn(
        "absolute left-0 top-0 bottom-0 w-0.5 bg-white transition-opacity", 
        isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
      )}></span>
      
      <div className="flex items-center py-3 px-4 text-sm w-full">
        <div className={cn(
          isActive ? "text-white" : "text-[#9b87f5]",
          "group-hover:text-white transition-colors"
        )}>
          {icon}
        </div>
        
        <div className="ml-3 flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="truncate">{title}</span>
            {isNew && (
              <Badge className="bg-[#ff4a4a] text-xs px-1.5 py-0 uppercase font-medium">
                NEW
              </Badge>
            )}
          </div>
          {description && (
            <span className="text-xs text-muted-foreground truncate block">{description}</span>
          )}
        </div>
        
        <ChevronRight className="h-4 w-4 text-gray-500" />
      </div>
    </Link>
  );
};

export default AppSidebar;
