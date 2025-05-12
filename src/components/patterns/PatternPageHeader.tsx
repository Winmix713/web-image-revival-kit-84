
import React from "react";
import { Grid, Diamond, Plus, Play, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageHeader from "@/components/common/PageHeader";
import { motion } from "framer-motion";

const PatternPageHeader = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-8"
    >
      <div className="relative">
        {/* Background glow effect */}
        <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-[#00F5FF]/5 via-[#B026FF]/5 to-[#00F5FF]/5 blur-xl opacity-50" />
        
        {/* Main content */}
        <div className="relative">
          <PageHeader
            title="Play Patterns"
            description="Discover and analyze tactical patterns in your games"
            icon={Grid}
            actions={
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#00F5FF]/30 hover:border-[#00F5FF] hover:bg-[#00F5FF]/10 gap-2 transition-all duration-300"
                >
                  <Download className="h-4 w-4 text-[#00F5FF]" />
                  Export
                </Button>
                
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="border-[#00F5FF]/30 hover:border-[#00F5FF] hover:bg-[#00F5FF]/10 gap-2 transition-all duration-300"
                >
                  <Play className="h-4 w-4 text-[#00F5FF]" />
                  Analyze
                </Button>
                
                <Button 
                  className="btn-cyan-glow gap-2 transition-all duration-300"
                  size="sm"
                >
                  <Diamond className="h-4 w-4" />
                  Create Pattern
                </Button>
              </div>
            }
          />
        </div>
      </div>
      
      {/* Feature summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
        <FeatureCard 
          title="AI Analysis" 
          description="Automatic pattern recognition"
          icon={<Diamond className="h-5 w-5" />}
          delay={0.1}
        />
        <FeatureCard 
          title="Visual Editor" 
          description="Create custom patterns"
          icon={<Plus className="h-5 w-5" />}
          delay={0.2}
        />
        <FeatureCard 
          title="Match Integration" 
          description="Apply to real match data"
          icon={<Play className="h-5 w-5" />}
          delay={0.3}
        />
        <FeatureCard 
          title="Export Tools" 
          description="Share and distribute analyses"
          icon={<Download className="h-5 w-5" />}
          delay={0.4}
        />
      </div>
    </motion.div>
  );
};

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

const FeatureCard = ({ title, description, icon, delay = 0 }: FeatureCardProps) => {
  return (
    <motion.div 
      className="p-4 border border-white/10 rounded-lg bg-[#0F1122]/50 hover:bg-[#0F1122]/70 hover:border-[#00F5FF]/30 transition-all duration-300 cursor-pointer"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.4 }}
      whileHover={{ 
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(0, 245, 255, 0.15)'
      }}
    >
      <div className="flex gap-4 items-center">
        <div className="bg-[#00F5FF]/10 p-2.5 rounded text-[#00F5FF]">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-xs text-white/60">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default PatternPageHeader;
