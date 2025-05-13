
import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ReactNode;
  title: string;
  description?: string;
  href: string;
  isActive?: boolean;
  isNew?: boolean;
  animationDelay?: number;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  title, 
  description, 
  href, 
  isActive = false,
  isNew = false,
  animationDelay = 0
}) => {
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

export default SidebarItem;
