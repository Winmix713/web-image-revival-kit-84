
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";
import PatternCategoryGrid from "./PatternCategoryGrid";

interface PatternTabsProps {
  activeTab: string;
  setActiveTab: (value: string) => void;
  patternCategories: any[];
}

const PatternTabs = ({ activeTab, setActiveTab, patternCategories }: PatternTabsProps) => {
  // Animation variants for the tab contents
  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <motion.div 
      className="mb-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <Tabs 
        defaultValue="all" 
        value={activeTab}
        onValueChange={setActiveTab}
        className="w-full"
      >
        <div className="relative overflow-hidden rounded-lg mb-8">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00F5FF]/20 via-[#B026FF]/15 to-[#FAFF00]/10 blur-lg opacity-30" />
          
          <TabsList className="bg-[#0F1122]/70 backdrop-blur-xl border border-[#00F5FF]/20 w-full flex justify-center relative z-10 p-1">
            <TabsTrigger 
              value="all"
              className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#00F5FF]"
            >
              <span className="relative z-10">All Patterns</span>
              {activeTab === "all" && (
                <motion.div 
                  layoutId="tab-highlight"
                  className="absolute inset-0 bg-[#00F5FF]/10 border border-[#00F5FF]/30 rounded-md shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </TabsTrigger>
            
            <TabsTrigger 
              value="offensive"
              className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#00F5FF]"
            >
              <span className="relative z-10">Offensive</span>
              {activeTab === "offensive" && (
                <motion.div 
                  layoutId="tab-highlight"
                  className="absolute inset-0 bg-[#00F5FF]/10 border border-[#00F5FF]/30 rounded-md shadow-[0_0_10px_rgba(0,245,255,0.5)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </TabsTrigger>
            
            <TabsTrigger 
              value="defensive"
              className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#B026FF]"
            >
              <span className="relative z-10">Defensive</span>
              {activeTab === "defensive" && (
                <motion.div 
                  layoutId="tab-highlight"
                  className="absolute inset-0 bg-[#B026FF]/10 border border-[#B026FF]/30 rounded-md shadow-[0_0_10px_rgba(176,38,255,0.5)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </TabsTrigger>
            
            <TabsTrigger 
              value="possession"
              className="relative px-6 py-2.5 data-[state=active]:bg-transparent data-[state=active]:text-[#FAFF00]"
            >
              <span className="relative z-10">Possession</span>
              {activeTab === "possession" && (
                <motion.div 
                  layoutId="tab-highlight"
                  className="absolute inset-0 bg-[#FAFF00]/10 border border-[#FAFF00]/30 rounded-md shadow-[0_0_10px_rgba(250,255,0,0.5)]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="all" className="mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            key="all"
          >
            <PatternCategoryGrid categories={patternCategories} filter="all" />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="offensive" className="mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            key="offensive"
          >
            <PatternCategoryGrid categories={patternCategories} filter="offensive" />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="defensive" className="mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            key="defensive"
          >
            <PatternCategoryGrid categories={patternCategories} filter="defensive" />
          </motion.div>
        </TabsContent>
        
        <TabsContent value="possession" className="mt-0">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={contentVariants}
            key="possession"
          >
            <PatternCategoryGrid categories={patternCategories} filter="possession" />
          </motion.div>
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default PatternTabs;
