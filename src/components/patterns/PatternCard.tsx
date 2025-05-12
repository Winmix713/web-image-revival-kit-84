
import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PatternCardProps {
  title: string;
  description: string;
  color: string;
  index: number;
  icon?: React.ReactNode;
  component?: React.ReactNode;
  onClick?: () => void;
}

const PatternCard = ({ title, description, color, index, icon, component, onClick }: PatternCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className={cn(
        "relative h-[280px] w-full overflow-hidden rounded-lg",
        "enhanced-glass transition-all duration-500 cursor-pointer"
      )}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      style={{
        background: `linear-gradient(135deg, ${color}33 0%, ${color}11 100%)`,
        boxShadow: isHovered ? `0 15px 30px -8px ${color}66, 0 0 15px ${color}33` : 'none',
        transform: isHovered ? 'translateY(-8px)' : 'none',
        border: `1px solid ${isHovered ? color + '50' : 'rgba(255,255,255,0.1)'}`
      }}
    >
      {/* Glowing background effect */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500"
        style={{ 
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(circle at center, ${color} 0%, transparent 70%)`,
          filter: 'blur(25px)',
          zIndex: -1
        }}
      />
      
      {/* Animated gradient border on hover */}
      <div 
        className="absolute inset-0 opacity-0 transition-opacity duration-500 overflow-hidden"
        style={{ 
          opacity: isHovered ? 1 : 0,
        }}
      >
        <div 
          className="absolute -inset-[2px] rounded-lg z-0"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            backgroundSize: '200% 100%',
            animation: isHovered ? 'shine 2s infinite' : 'none'
          }}
        />
      </div>
      
      {/* Card content */}
      <div className="p-6 h-full flex flex-col relative z-10">
        <div 
          className={cn(
            "flex items-center justify-center w-16 h-16 mb-4 rounded-md",
            "transition-all duration-500"
          )}
          style={{ 
            background: isHovered ? color : `${color}22`,
            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0) scale(1)',
            boxShadow: isHovered ? `0 0 20px ${color}66` : 'none'
          }}
        >
          {icon}
        </div>
        
        <h3 
          className={cn(
            "text-xl font-bold mb-2 transition-all duration-300"
          )}
          style={{ 
            color: isHovered ? color : 'white',
            textShadow: isHovered ? `0 0 10px ${color}99` : 'none'
          }}
        >
          {title}
        </h3>
        
        <p className="text-sm text-white/70 mb-5 transition-all duration-300"
           style={{
             color: isHovered ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.7)'
           }}
        >
          {description}
        </p>
        
        {/* Component preview (limited size) */}
        {component && (
          <div className="mt-auto overflow-hidden h-16 opacity-80 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <div className="transform scale-75 origin-center">
              {component}
            </div>
          </div>
        )}
        
        {/* Digital circuit lines */}
        <div className="absolute bottom-0 right-0 w-3/4 h-1/2 opacity-10 pointer-events-none transition-opacity duration-300"
             style={{ opacity: isHovered ? 0.2 : 0.1 }}>
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
        
        {/* Animated circuit dots */}
        {isHovered && (
          <>
            <motion.div 
              className="absolute h-2 w-2 rounded-full z-0"
              style={{ background: color, boxShadow: `0 0 10px ${color}` }}
              animate={{
                x: [0, 50, 100, 150, 200, 220, 220],
                y: [20, 20, 20, 20, 60, 100, 140],
                opacity: [0, 1, 1, 1, 1, 1, 0]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute h-2 w-2 rounded-full z-0"
              style={{ background: color, boxShadow: `0 0 10px ${color}` }}
              animate={{
                x: [220, 220, 150, 100, 70, 40, 0],
                y: [140, 100, 100, 100, 60, 60, 60],
                opacity: [0, 1, 1, 1, 1, 1, 0]
              }}
              transition={{ 
                duration: 3.5, 
                repeat: Infinity,
                ease: "linear",
                delay: 0.5
              }}
            />
          </>
        )}
        
        {/* Digital scan effect */}
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
        
        {/* View button that appears on hover */}
        <div 
          className="absolute bottom-5 right-5 transition-all duration-300"
          style={{ 
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <motion.button
            className="px-4 py-1.5 rounded-md text-sm font-medium"
            style={{ 
              background: color,
              color: '#0F1122',
              boxShadow: `0 0 15px ${color}66`
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default PatternCard;
