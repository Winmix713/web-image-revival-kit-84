
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  animationDelay?: number;
}

export const PageHeader = ({
  title,
  description,
  icon: Icon,
  className,
  animationDelay = 0,
}: PageHeaderProps) => {
  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;

  return (
    <div 
      className={cn(
        "flex items-center gap-4 mb-8 slide-up", 
        className
      )}
      style={style}
    >
      {Icon && (
        <div className="p-3 rounded-lg bg-[#3a36e0]/15 text-[#9b87f5] pulse-glow">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <div>
        <h1 className="text-2xl font-bold gradient-text">{title}</h1>
        {description && (
          <p className="text-muted-foreground text-sm">{description}</p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
