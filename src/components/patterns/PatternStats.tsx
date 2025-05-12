
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, Target, Clock } from "lucide-react";

const PatternStats = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5 } 
    }
  };
  
  return (
    <motion.div
      className="mt-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="relative enhanced-glass p-6 rounded-lg overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#B026FF]/10 via-[#6e59A5]/5 to-[#00F5FF]/10 pointer-events-none" />
        
        {/* Top edge glow effect */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#B026FF]/50 to-transparent" />
        
        {/* Content */}
        <div className="relative z-10">
          <motion.h2 
            className="text-xl font-bold mb-2 animated-neon-text" 
            variants={itemVariants}
          >
            Advanced Pattern Analysis
          </motion.h2>
          
          <motion.p 
            className="text-white/70 mb-6 max-w-3xl" 
            variants={itemVariants}
          >
            Our AI-powered pattern recognition helps you identify tactical trends across multiple matches.
            Discover recurring patterns that lead to scoring opportunities or defensive vulnerabilities.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-4"
            variants={itemVariants}
          >
            <StatCard 
              value="87%" 
              label="Success rate on offensive patterns" 
              color="#00F5FF"
              icon={<Zap className="h-5 w-5" />}
              delay={0.1}
            />
            
            <StatCard 
              value="24" 
              label="Unique patterns identified" 
              color="#B026FF" 
              icon={<Target className="h-5 w-5" />}
              delay={0.2}
            />
            
            <StatCard 
              value="12.4s" 
              label="Average pattern duration" 
              color="#FAFF00" 
              icon={<Clock className="h-5 w-5" />}
              delay={0.3}
            />
          </motion.div>
        </div>
        
        {/* Decorative circuit lines */}
        <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10,50 L50,50 L50,20 L90,20 L90,70 L130,70 L130,40 L170,40" stroke="#B026FF" strokeWidth="1" />
            <path d="M10,100 L30,100 L30,150 L70,150 L70,120 L110,120 L110,180 L150,180 L150,130 L190,130" stroke="#00F5FF" strokeWidth="1" />
            <circle cx="50" cy="50" r="3" fill="#B026FF" />
            <circle cx="90" cy="20" r="3" fill="#B026FF" />
            <circle cx="130" cy="70" r="3" fill="#B026FF" />
            <circle cx="30" cy="100" r="3" fill="#00F5FF" />
            <circle cx="70" cy="150" r="3" fill="#00F5FF" />
            <circle cx="110" cy="120" r="3" fill="#00F5FF" />
            <circle cx="150" cy="180" r="3" fill="#00F5FF" />
          </svg>
        </div>
        
        {/* Animated signal pulse */}
        <motion.div 
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{ background: "linear-gradient(90deg, transparent, #B026FF, transparent)" }}
          animate={{ 
            x: ["-100%", "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 3,
            ease: "linear"
          }}
        />
      </div>
    </motion.div>
  );
};

interface StatCardProps {
  value: string;
  label: string;
  color: string;
  icon?: React.ReactNode;
  delay?: number;
}

const StatCard = ({ value, label, color, icon, delay = 0 }: StatCardProps) => {
  return (
    <motion.div 
      className="bg-[#0F1122]/60 border border-white/5 rounded-lg p-4 hover:border-opacity-20 transition-all duration-300 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: delay, duration: 0.5 }}
      style={{ borderColor: color + '30' }}
      whileHover={{ 
        borderColor: color,
        boxShadow: `0 0 20px ${color}40`,
        y: -5
      }}
    >
      <div className="flex items-start justify-between">
        <div>
          <div 
            className="text-4xl font-bold mb-1 transition-all duration-300" 
            style={{ 
              color: color,
              textShadow: `0 0 10px ${color}80`
            }}
          >
            {value}
          </div>
          <div className="text-sm text-white/50 group-hover:text-white/80 transition-colors duration-300">
            {label}
          </div>
        </div>
        
        <div 
          className="h-10 w-10 rounded-lg flex items-center justify-center transition-all duration-300 opacity-70 group-hover:opacity-100"
          style={{ 
            background: color + '20',
            border: `1px solid ${color}40`
          }}
        >
          <div className="text-white" style={{ color }}>
            {icon || <ArrowUpRight className="h-5 w-5" />}
          </div>
        </div>
      </div>
      
      {/* Animated bottom bar */}
      <div className="mt-3 h-1 w-full bg-white/5 rounded overflow-hidden">
        <motion.div 
          className="h-full rounded"
          style={{ background: color }}
          initial={{ width: "0%" }}
          animate={{ width: "70%" }}
          transition={{ delay: delay + 0.3, duration: 0.8, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

export default PatternStats;
