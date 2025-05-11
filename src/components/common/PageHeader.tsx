
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  animationDelay?: number;
  actions?: React.ReactNode;
}

export const PageHeader = ({
  title,
  description,
  icon: Icon,
  className,
  animationDelay = 0,
  actions,
}: PageHeaderProps) => {
  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;

  return (
    <div 
      className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-4 mb-8 slide-up", 
        className
      )}
      style={style}
    >
      <div className="flex items-center gap-4 flex-1">
        {Icon && (
          <div className="p-3 rounded-lg bg-[#3a36e0]/20 text-[#9b87f5] pulse-glow shadow-md shadow-[#3a36e0]/10 border border-[#9b87f5]/20">
            <Icon className="h-6 w-6" />
          </div>
        )}
        <div>
          <h1 className="text-2xl font-bold gradient-text">{title}</h1>
          {description && (
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
          )}
        </div>
      </div>
      
      {actions && (
        <div className="flex items-center gap-3 mt-4 sm:mt-0">
          {actions}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
