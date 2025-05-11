
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
        <TabsList className="bg-[#0F1122]/50 backdrop-blur-md border border-[#00F5FF]/20 w-full flex justify-center mb-6">
          <TabsTrigger 
            value="all"
            className="data-[state=active]:bg-[#00F5FF]/20 data-[state=active]:text-[#00F5FF] data-[state=active]:shadow-glow-blue-sm"
          >
            All Patterns
          </TabsTrigger>
          <TabsTrigger 
            value="offensive"
            className="data-[state=active]:bg-[#00F5FF]/20 data-[state=active]:text-[#00F5FF] data-[state=active]:shadow-glow-blue-sm"
          >
            Offensive
          </TabsTrigger>
          <TabsTrigger 
            value="defensive"
            className="data-[state=active]:bg-[#B026FF]/20 data-[state=active]:text-[#B026FF] data-[state=active]:shadow-glow-purple-sm"
          >
            Defensive
          </TabsTrigger>
          <TabsTrigger 
            value="possession"
            className="data-[state=active]:bg-[#FAFF00]/20 data-[state=active]:text-[#FAFF00]"
          >
            Possession
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <PatternCategoryGrid categories={patternCategories} filter="all" />
        </TabsContent>
        
        <TabsContent value="offensive" className="mt-0">
          <PatternCategoryGrid categories={patternCategories} filter="offensive" />
        </TabsContent>
        
        <TabsContent value="defensive" className="mt-0">
          <PatternCategoryGrid categories={patternCategories} filter="defensive" />
        </TabsContent>
        
        <TabsContent value="possession" className="mt-0">
          <PatternCategoryGrid categories={patternCategories} filter="possession" />
        </TabsContent>
      </Tabs>
    </motion.div>
  );
};

export default PatternTabs;
