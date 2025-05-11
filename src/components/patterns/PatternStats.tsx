
import React from "react";
import { motion } from "framer-motion";

const PatternStats = () => {
  return (
    <motion.div
      className="mt-12"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.5 }}
    >
      <div className="bg-[#0F1122]/60 backdrop-blur-lg border border-[#B026FF]/20 rounded-lg p-6 shadow-glow-purple-sm">
        <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B026FF] to-[#00F5FF] mb-4">
          Advanced Pattern Analysis
        </h2>
        <p className="text-white/70 mb-6">
          Our AI-powered pattern recognition helps you identify tactical trends across multiple matches.
          Discover recurring patterns that lead to scoring opportunities or defensive vulnerabilities.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-[#0F1122]/80 border border-white/5 rounded p-4 hover:border-[#00F5FF]/30 hover:shadow-glow-blue-sm transition-all">
            <div className="text-4xl font-bold text-[#00F5FF] mb-2">87%</div>
            <div className="text-sm text-white/50">Success rate on offensive patterns</div>
          </div>
          
          <div className="bg-[#0F1122]/80 border border-white/5 rounded p-4 hover:border-[#B026FF]/30 hover:shadow-glow-purple-sm transition-all">
            <div className="text-4xl font-bold text-[#B026FF] mb-2">24</div>
            <div className="text-sm text-white/50">Unique patterns identified</div>
          </div>
          
          <div className="bg-[#0F1122]/80 border border-white/5 rounded p-4 hover:border-[#FAFF00]/30 transition-all">
            <div className="text-4xl font-bold text-[#FAFF00] mb-2">12.4s</div>
            <div className="text-sm text-white/50">Average pattern duration</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PatternStats;
