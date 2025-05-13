
import React from 'react';
import ContentCard from "@/components/common/ContentCard";
import ChartTypeSelector from './ChartTypeSelector';

const TeamPerformanceChart: React.FC = () => {
  return (
    <ContentCard variant="glass" animationDelay={100}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">Team Performance</h2>
        <ChartTypeSelector />
      </div>
      
      <div className="h-64 bg-white/5 rounded-lg p-4 flex items-center justify-center">
        <div className="flex items-end justify-between h-full w-full pb-4">
          {[25, 40, 35, 60, 45, 85, 70, 60, 45, 55, 65, 75].map((height, index) => (
            <div key={index} className="flex flex-col items-center">
              <div 
                className="w-2 md:w-4 bg-gradient-to-t from-[#3a36e0] to-[#9b87f5] rounded-t-sm"
                style={{ 
                  height: `${height}%`,
                  transition: 'height 1s ease-out',
                  transitionDelay: `${index * 0.05}s`
                }}
              />
              <span className="text-xs text-gray-400 mt-1">{index + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </ContentCard>
  );
};

export default TeamPerformanceChart;
