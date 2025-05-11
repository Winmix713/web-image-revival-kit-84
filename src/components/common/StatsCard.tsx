
import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import ContentCard from "./ContentCard";

export interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  color?: "blue" | "red" | "purple" | "green";
  trend?: {
    value: number;
    isPositive: boolean;
  };
  delay?: number;
  className?: string;
}

export const StatsCard = ({ 
  title, 
  value, 
  icon: Icon,
  color = "blue",
  trend,
  delay = 0,
  className
}: StatsCardProps) => {
  const colorMap = {
    blue: "bg-[#3a36e0]/20 text-[#9b87f5]",
    red: "bg-[#ff4a4a]/20 text-[#ff4a4a]",
    purple: "bg-[#6e59A5]/20 text-[#9b87f5]",
    green: "bg-[#4ade80]/20 text-[#4ade80]"
  };

  return (
    <ContentCard 
      variant="glass" 
      className={className}
      animationDelay={delay}
    >
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
          <Icon className="h-6 w-6" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold text-white truncate">{value}</h3>
          
          {trend && (
            <div className={cn(
              "text-xs font-medium flex items-center gap-1 mt-1",
              trend.isPositive ? "text-[#4ade80]" : "text-[#ff4a4a]"
            )}>
              {trend.isPositive ? (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 15L12 9L6 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ) : (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              <span>{trend.value}%</span>
              <span className="text-muted-foreground">vs last period</span>
            </div>
          )}
        </div>
      </div>
    </ContentCard>
  );
};

export default StatsCard;
