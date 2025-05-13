
import React from "react";
import { Link } from "react-router-dom";
import { 
  BarChart2, 
  Clock, 
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
import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarItem from "./sidebar/SidebarItem";
import SidebarSearch from "./sidebar/SidebarSearch";
import SidebarPromo from "./sidebar/SidebarPromo";

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
  const sidebarItems = [
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
      <SidebarHeader />
      <SidebarSearch />
      
      <nav className="flex-grow px-3 py-4 space-y-1.5">
        {sidebarItems.map((item, index) => (
          <SidebarItem key={index} {...item} animationDelay={index * 50} />
        ))}
      </nav>
      
      <SidebarPromo />
    </aside>
  );
};

export default AppSidebar;
