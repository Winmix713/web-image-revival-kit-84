
import React, { useState } from "react";
import AppLayout from "@/components/common/AppLayout";
import PatternBackground from "@/components/patterns/PatternBackground";
import PatternPageHeader from "@/components/patterns/PatternPageHeader";
import PatternTabs from "@/components/patterns/PatternTabs";
import PatternStats from "@/components/patterns/PatternStats";
import { getPatternCategories } from "@/components/patterns/patternCategories";
import { motion } from "framer-motion";

const PatternsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const patternCategories = getPatternCategories();

  return (
    <AppLayout>
      {/* Enhanced 3D background */}
      <PatternBackground />
      
      {/* Main content with enhanced animations */}
      <motion.div 
        className="relative z-10 mx-auto max-w-7xl px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <PatternPageHeader />
        
        <PatternTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          patternCategories={patternCategories} 
        />
        
        <PatternStats />
        
        {/* Added bottom section with additional call to action */}
        <motion.div 
          className="mt-16 mb-8 py-8 px-6 enhanced-glass rounded-lg border border-[#00F5FF]/20 relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          {/* Background glow elements */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-[#00F5FF]/10 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-[#B026FF]/10 blur-3xl" />
          
          {/* Content */}
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="max-w-2xl">
              <h2 className="text-xl font-bold text-white mb-2">Ready to analyze your team's performance?</h2>
              <p className="text-white/70">
                Upload match footage or connect to your analysis software to start identifying key patterns
                that can give your team a competitive edge.
              </p>
            </div>
            
            <button className="btn-cyan-glow py-2.5 px-6 rounded-lg font-medium">
              Get Started
            </button>
          </div>
          
          {/* Animated scan line */}
          <motion.div 
            className="absolute left-0 right-0 h-px bg-[#00F5FF]/50"
            style={{ top: "50%" }}
            animate={{ 
              scaleX: [0, 1, 0],
              x: ["-100%", "0%", "100%"],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </motion.div>
    </AppLayout>
  );
};

export default PatternsPage;
