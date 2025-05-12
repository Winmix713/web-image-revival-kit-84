
import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ContentCardProps {
  className?: string;
  children: React.ReactNode;
  variant?: "default" | "glass" | "outline" | "gradient" | "accent" | "neon" | "cyber";
  animationDelay?: number;
  title?: string;
  description?: string;
  footer?: React.ReactNode;
  noPadding?: boolean;
  hoverable?: boolean;
  highlight?: boolean;
  highlightColor?: string;
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
  highlight = false,
  highlightColor = "#00F5FF",
}: ContentCardProps) => {
  const getCardClass = () => {
    switch (variant) {
      case "glass":
        return "bg-background/30 backdrop-blur-xl border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300";
      case "outline":
        return "bg-background/10 backdrop-blur-sm border border-white/20 shadow-md hover:shadow-lg transition-all duration-300";
      case "gradient":
        return "bg-gradient-to-br from-[#3a36e0]/20 to-[#9b87f5]/10 backdrop-blur-sm border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300";
      case "accent":
        return "bg-gradient-to-br from-[#3a36e0]/25 to-[#9b87f5]/15 backdrop-blur-md border border-[#9b87f5]/20 shadow-lg shadow-[#3a36e0]/5 hover:shadow-xl hover:shadow-[#3a36e0]/10 transition-all duration-300";
      case "neon":
        return "bg-[#0F1122]/70 backdrop-blur-xl border border-[#00F5FF]/30 shadow-lg shadow-[#00F5FF]/5 hover:shadow-xl hover:shadow-[#00F5FF]/10 transition-all duration-300";
      case "cyber":
        return "cyber-card bg-[#0F1122]/70 backdrop-blur-xl border-l-2 border-t-2 border-[#00F5FF]/50 shadow-lg hover:shadow-xl transition-all duration-300";
      default:
        return "bg-card shadow-md hover:shadow-lg transition-all duration-300";
    }
  };

  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;
  
  // Handle highlight glow effect
  const highlightStyle = highlight ? {
    boxShadow: `0 0 20px ${highlightColor}40`,
    borderColor: `${highlightColor}50`
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: animationDelay / 1000, duration: 0.5 }}
      whileHover={hoverable ? { y: -5, transition: { duration: 0.3 } } : {}}
    >
      <Card 
        className={cn(
          getCardClass(),
          hoverable && "transition-all duration-300",
          highlight && "border-2",
          className
        )}
        style={{ ...style, ...highlightStyle }}
      >
        {(title || description) && (
          <CardHeader className={noPadding ? "p-0" : ""}>
            {title && (
              <CardTitle className={cn(
                "text-xl font-bold",
                variant === "neon" ? "text-[#00F5FF]" : "gradient-text"
              )}>
                {title}
              </CardTitle>
            )}
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
        
        {/* Add subtle scanning effect for neon and cyber variants */}
        {(variant === "neon" || variant === "cyber") && (
          <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-lg">
            <motion.div 
              className="absolute top-0 left-0 w-full h-[2px]"
              style={{ 
                background: `linear-gradient(90deg, transparent, ${
                  variant === "neon" ? "#00F5FF" : "#00F5FF"
                }, transparent)` 
              }}
              animate={{ 
                x: ["-100%", "100%"],
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 2,
                ease: "linear",
                repeatDelay: 1
              }}
            />
          </div>
        )}
      </Card>
    </motion.div>
  );
};

export default ContentCard;
