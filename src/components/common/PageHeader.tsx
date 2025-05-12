
import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface PageHeaderProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  animationDelay?: number;
  actions?: React.ReactNode;
  variant?: "default" | "gradient" | "neon";
}

export const PageHeader = ({
  title,
  description,
  icon: Icon,
  className,
  animationDelay = 0,
  actions,
  variant = "default",
}: PageHeaderProps) => {
  const style = animationDelay ? { animationDelay: `${animationDelay}ms` } : undefined;

  return (
    <motion.div 
      className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-4 relative", 
        className
      )}
      style={style}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: animationDelay / 1000 }}
    >
      <div className="flex items-center gap-4 flex-1">
        {Icon && (
          <motion.div 
            className={cn(
              "p-3 rounded-lg shadow-md border",
              variant === "default" && "bg-[#3a36e0]/20 text-[#9b87f5] shadow-[#3a36e0]/10 border-[#9b87f5]/20 pulse-glow",
              variant === "gradient" && "bg-gradient-to-br from-[#3a36e0]/30 to-[#9b87f5]/20 text-white shadow-[#3a36e0]/10 border-[#9b87f5]/20",
              variant === "neon" && "bg-[#00F5FF]/10 text-[#00F5FF] shadow-[#00F5FF]/10 border-[#00F5FF]/30 neon-border"
            )}
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Icon className="h-6 w-6" />
          </motion.div>
        )}
        <div>
          <motion.h1 
            className={cn(
              "text-2xl font-bold",
              variant === "default" && "gradient-text",
              variant === "gradient" && "enhanced-gradient-text",
              variant === "neon" && "neon-gradient-text"
            )}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: (animationDelay + 100) / 1000 }}
          >
            {title}
          </motion.h1>
          
          {description && (
            <motion.p 
              className="text-muted-foreground text-sm mt-1"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: (animationDelay + 200) / 1000 }}
            >
              {description}
            </motion.p>
          )}
        </div>
      </div>
      
      {actions && (
        <motion.div 
          className="flex items-center gap-3 mt-4 sm:mt-0"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: (animationDelay + 300) / 1000 }}
        >
          {actions}
        </motion.div>
      )}
      
      {/* Subtle decorative elements */}
      {variant === "neon" && (
        <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#00F5FF]/50 to-transparent" />
      )}
      
      {variant === "gradient" && (
        <div className="absolute -bottom-3 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#9b87f5]/50 to-transparent" />
      )}
    </motion.div>
  );
};

export default PageHeader;
