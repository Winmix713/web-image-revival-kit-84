
import React from "react";
import { motion } from "framer-motion";

interface PageBackgroundProps {
  variant?: "default" | "subtle" | "vibrant";
  animated?: boolean;
}

const PageBackground: React.FC<PageBackgroundProps> = ({ 
  variant = "default",
  animated = true 
}) => {
  const getBackgroundClasses = () => {
    switch (variant) {
      case "vibrant":
        return "bg-[radial-gradient(ellipse_at_top,rgba(59,54,224,0.15),transparent_50%)] bg-[radial-gradient(ellipse_at_bottom_right,rgba(155,135,245,0.15),transparent_50%)]";
      case "subtle":
        return "bg-[radial-gradient(ellipse_at_top,rgba(59,54,224,0.08),transparent_50%)] bg-[radial-gradient(ellipse_at_bottom_right,rgba(155,135,245,0.08),transparent_50%)]";
      default:
        return "bg-[radial-gradient(ellipse_at_top,rgba(59,54,224,0.12),transparent_60%)] bg-[radial-gradient(ellipse_at_bottom_right,rgba(155,135,245,0.12),transparent_60%)]";
    }
  };

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className={`absolute inset-0 ${getBackgroundClasses()}`}></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
      
      {/* Animated elements - only render if animated prop is true */}
      {animated && (
        <>
          <motion.div 
            className="absolute -top-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, 40, 0],
              y: [0, 30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-purple-500/5 rounded-full blur-3xl"
            animate={{
              x: [0, -30, 0],
              y: [0, -40, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          <motion.div 
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/[0.03] to-purple-500/[0.03] rounded-full blur-3xl opacity-60"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </>
      )}
    </div>
  );
};

export default PageBackground;
