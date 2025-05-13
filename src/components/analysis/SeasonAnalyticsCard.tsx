
import React from 'react';
import { BarChart } from 'lucide-react';
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";
import { createGrid } from '@/lib/grid-utils';

const SeasonAnalyticsCard: React.FC = () => {
  return (
    <ContentCard variant="glass" animationDelay={500} className="mb-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-white">Season Analytics</h2>
        <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
          Export Data
        </Button>
      </div>
      
      <div className={createGrid("twoColumn", "lg:grid-cols-3 gap-6")}>
        <div className="lg:col-span-2">
          <div className="h-64 bg-white/5 rounded-lg p-4 flex items-center justify-center">
            <BarChart className="h-24 w-24 text-[#3a36e0]/50" strokeWidth={1.5} />
          </div>
        </div>
        
        <div className="space-y-4">
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="text-sm text-gray-400">Total Matches</div>
              <div className="text-lg font-semibold text-white">124</div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-400">Prediction Accuracy</div>
              <div className="text-lg font-semibold text-white">78.2%</div>
            </div>
          </div>
          
          <div className="bg-white/5 p-4 rounded-lg">
            <div className="text-sm text-gray-400 mb-2">Result Distribution</div>
            <div className="grid grid-cols-3 gap-2">
              <div className="text-center p-3 bg-green-500/10 rounded-lg">
                <div className="text-green-400 text-lg font-semibold">48%</div>
                <div className="text-xs text-gray-400">Win</div>
              </div>
              <div className="text-center p-3 bg-yellow-500/10 rounded-lg">
                <div className="text-yellow-400 text-lg font-semibold">28%</div>
                <div className="text-xs text-gray-400">Draw</div>
              </div>
              <div className="text-center p-3 bg-red-500/10 rounded-lg">
                <div className="text-red-400 text-lg font-semibold">24%</div>
                <div className="text-xs text-gray-400">Loss</div>
              </div>
            </div>
          </div>
          
          <Button className="w-full btn-primary-glow">
            Generate Report
          </Button>
        </div>
      </div>
    </ContentCard>
  );
};

export default SeasonAnalyticsCard;
