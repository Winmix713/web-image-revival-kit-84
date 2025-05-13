
import React from 'react';
import ContentCard from "@/components/common/ContentCard";
import ChartTypeSelector from './ChartTypeSelector';

const GoalAnalysisChart: React.FC = () => {
  return (
    <ContentCard variant="glass" animationDelay={200}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Goal Analysis</h2>
        <ChartTypeSelector />
      </div>
      
      <div className="h-64 bg-white/5 rounded-lg p-4 flex items-center justify-center">
        <div className="w-48 h-48 rounded-full border-8 border-[#3a36e0]/30 relative">
          <div 
            className="absolute top-0 left-0 w-1/2 h-full bg-[#3a36e0] rounded-l-full"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          ></div>
          <div 
            className="absolute top-0 right-0 w-1/2 h-full bg-[#9b87f5] rounded-r-full"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center bg-background/80 rounded-full m-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">68%</div>
              <div className="text-xs text-gray-400">Success Rate</div>
            </div>
          </div>
          <div className="absolute top-1/4 -right-24 flex items-center">
            <div className="h-0.5 w-12 bg-[#9b87f5]"></div>
            <div className="text-sm text-white ml-2">Home (42%)</div>
          </div>
          <div className="absolute top-2/3 -right-24 flex items-center">
            <div className="h-0.5 w-12 bg-[#3a36e0]"></div>
            <div className="text-sm text-white ml-2">Away (58%)</div>
          </div>
        </div>
      </div>
    </ContentCard>
  );
};

export default GoalAnalysisChart;
