
import React from "react";
import { cn } from "@/lib/utils";
import SidebarHeader from "./sidebar/SidebarHeader";
import SidebarSearch from "./sidebar/SidebarSearch";
import SidebarPromo from "./sidebar/SidebarPromo";
import SidebarNav from "../navigation/SidebarNav";

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
      
      <nav className="flex-grow px-3 py-2">
        <SidebarNav />
      </nav>
      
      <SidebarPromo />
    </aside>
  );
};

export default AppSidebar;
