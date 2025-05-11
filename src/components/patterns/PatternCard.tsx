
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PatternCardProps {
  title: string;
  description: string;
  color: string;
  index: number;
  icon?: React.ReactNode;
}

const PatternCard = ({ title, description, color, index, icon }: PatternCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={cn(
        "relative h-[280px] w-full overflow-hidden rounded-lg border border-white/5",
        "hover:shadow-2xl transition-all duration-300 cursor-pointer",
        "neobrutalism"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      style={{
        background: `linear-gradient(135deg, ${color}22 0%, ${color}00 100%)`,
        boxShadow: isHovered ? `0 10px 30px -5px ${color}66, 0 0 15px ${color}33` : 'none',
        transform: isHovered ? 'translateY(-8px)' : 'none'
      }}
    >
      {/* Glowing border effect */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-300"
        style={{ 
          opacity: isHovered ? 0.8 : 0,
          background: `linear-gradient(135deg, ${color}55 0%, transparent 100%)`,
          filter: 'blur(20px)',
          zIndex: -1
        }}
      />
      
      {/* Card content */}
      <div className="p-6 h-full flex flex-col">
        <div 
          className={cn(
            "flex items-center justify-center w-16 h-16 mb-4 rounded",
            "transition-all duration-300"
          )}
          style={{ 
            background: isHovered ? color : `${color}22`,
            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0) scale(1)'
          }}
        >
          {icon}
        </div>
        
        <h3 
          className={cn(
            "text-xl font-bold mb-2 transition-all duration-300"
          )}
          style={{ 
            color: isHovered ? color : 'white'
          }}
        >
          {title}
        </h3>
        
        <p className="text-sm text-white/60 mb-5">{description}</p>
        
        {/* Digital circuit lines */}
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 opacity-10 pointer-events-none">
          <svg 
            width="100%" 
            height="100%" 
            viewBox="0 0 100 100" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            style={{ stroke: color }}
          >
            <path d="M10,50 L30,50 L30,20 L60,20 L60,40 L90,40" strokeWidth="1" />
            <path d="M20,90 L20,70 L40,70 L40,50 L70,50 L70,80 L90,80" strokeWidth="1" />
            <circle cx="30" cy="50" r="2" fill={color} />
            <circle cx="60" cy="20" r="2" fill={color} />
            <circle cx="40" cy="70" r="2" fill={color} />
            <circle cx="70" cy="50" r="2" fill={color} />
          </svg>
        </div>
        
        {/* Digital noise pattern */}
        <motion.div 
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${color}, transparent)`,
            opacity: isHovered ? 0.8 : 0
          }}
          animate={{ 
            scaleX: isHovered ? [0, 1, 0] : 0,
            x: isHovered ? ["-100%", "100%"] : "-100%"
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

export default PatternCard;
