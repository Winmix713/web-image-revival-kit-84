
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ContentCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "glass" | "outline" | "gradient" | "accent";
  animationDelay?: number;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  noPadding?: boolean;
  hoverable?: boolean;
}

export const ContentCard = ({
  className,
  children,
  variant = "default",
  animationDelay = 0,
  title,
  description,
  footer,
  noPadding = false,
  hoverable = false,
}: ContentCardProps) => {
  const getCardClass = () => {
    switch (variant) {
      case "glass":
        return "bg-background/30 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300";
      case "outline":
        return "bg-background/10 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all duration-300";
      case "gradient":
        return "bg-gradient-to-br from-[#3a36e0]/20 to-[#9b87f5]/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300";
      case "accent":
        return "bg-gradient-to-br from-[#3a36e0]/25 to-[#9b87f5]/15 backdrop-blur-md border border-[#9b87f5]/20 shadow-lg shadow-[#3a36e0]/5 hover:shadow-xl hover:shadow-[#3a36e0]/10 transition-all duration-300";
      default:
        return "bg-card shadow-md hover:shadow-lg transition-all duration-300";
    }
  };

  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;

  return (
    <Card 
      className={cn(
        getCardClass(),
        "slide-up",
        hoverable && "hover:translate-y-[-4px]",
        className
      )}
      style={style}
    >
      {(title || description) && (
        <CardHeader className={noPadding ? "p-0" : ""}>
          {title && <CardTitle className="text-xl font-bold gradient-text">{title}</CardTitle>}
          {description && <CardDescription>{description}</CardDescription>}
        </CardHeader>
      )}
      
      <CardContent className={noPadding ? "p-0" : ""}>
        {children}
      </CardContent>
      
      {footer && (
        <CardFooter className={noPadding ? "p-0" : ""}>
          {footer}
        </CardFooter>
      )}
    </Card>
  );
};

export default ContentCard;
