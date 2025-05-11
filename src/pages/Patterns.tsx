
import React, { useState } from "react";
import AppLayout from "@/components/common/AppLayout";
import PatternBackground from "@/components/patterns/PatternBackground";
import PatternPageHeader from "@/components/patterns/PatternPageHeader";
import PatternTabs from "@/components/patterns/PatternTabs";
import PatternStats from "@/components/patterns/PatternStats";
import { getPatternCategories } from "@/components/patterns/patternCategories";

const PatternsPage = () => {
  const [activeTab, setActiveTab] = useState("all");
  const patternCategories = getPatternCategories();

  return (
    <AppLayout>
      {/* Custom 3D background */}
      <PatternBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <PatternPageHeader />
        
        <PatternTabs 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          patternCategories={patternCategories} 
        />
        
        <PatternStats />
      </div>
    </AppLayout>
  );
};

export default PatternsPage;
