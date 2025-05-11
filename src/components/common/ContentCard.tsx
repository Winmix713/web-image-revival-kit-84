
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "glass" | "outline" | "gradient";
  animationDelay?: number;
}

export const ContentCard = ({
  className,
  children,
  variant = "default",
  animationDelay = 0,
}: ContentCardProps) => {
  const getCardClass = () => {
    switch (variant) {
      case "glass":
        return "bg-background/30 backdrop-blur-md border border-white/10";
      case "outline":
        return "bg-background/10 backdrop-blur-sm border border-white/20";
      case "gradient":
        return "bg-gradient-to-br from-[#3a36e0]/20 to-[#9b87f5]/10 backdrop-blur-sm border border-white/10";
      default:
        return "bg-card";
    }
  };

  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;

  return (
    <Card 
      className={cn(
        getCardClass(),
        "slide-up shadow-lg shadow-black/5 hover:shadow-xl transition-all duration-300",
        className
      )}
      style={style}
    >
      <CardContent className="p-6">
        {children}
      </CardContent>
    </Card>
  );
};

export default ContentCard;
