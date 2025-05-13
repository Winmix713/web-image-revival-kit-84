
import React from 'react';
import { LineChart } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";

interface AnalysisTabsProps {
  timeFrame: string;
}

const AnalysisTabs: React.FC<AnalysisTabsProps> = ({ timeFrame }) => {
  return (
    <Tabs defaultValue="overview" className="mb-8">
      <TabsList className="bg-white/5 border border-white/10">
        <TabsTrigger 
          value="overview"
          className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
        >
          Overview
        </TabsTrigger>
        <TabsTrigger 
          value="teams" 
          className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
        >
          Teams
        </TabsTrigger>
        <TabsTrigger 
          value="players" 
          className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
        >
          Players
        </TabsTrigger>
        <TabsTrigger 
          value="predictions" 
          className="data-[state=active]:bg-[#3a36e0] data-[state=active]:text-white"
        >
          Predictions
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <PerformanceTrendsCard timeFrame={timeFrame} />
          <TopPerformersCard />
        </div>
      </TabsContent>
      
      <TabsContent value="teams" className="mt-4">
        <ContentCard variant="glass" animationDelay={300}>
          <h3 className="text-lg font-semibold text-white mb-4">Team Analysis</h3>
          <p className="text-gray-400">Select a team to view detailed performance analytics.</p>
        </ContentCard>
      </TabsContent>
      
      <TabsContent value="players" className="mt-4">
        <ContentCard variant="glass" animationDelay={300}>
          <h3 className="text-lg font-semibold text-white mb-4">Player Analysis</h3>
          <p className="text-gray-400">Select a player to view detailed performance analytics.</p>
        </ContentCard>
      </TabsContent>
      
      <TabsContent value="predictions" className="mt-4">
        <ContentCard variant="glass" animationDelay={300}>
          <h3 className="text-lg font-semibold text-white mb-4">Prediction Analytics</h3>
          <p className="text-gray-400">View prediction accuracy and performance over time.</p>
        </ContentCard>
      </TabsContent>
    </Tabs>
  );
};

const PerformanceTrendsCard: React.FC<{ timeFrame: string }> = ({ timeFrame }) => {
  return (
    <ContentCard variant="glass" animationDelay={300} className="lg:col-span-2 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Performance Trends</h3>
      </div>
      
      <div className="w-full h-64 relative">
        {/* Line chart placeholder */}
        <div className="w-full h-full flex items-center justify-center bg-white/5 rounded">
          <LineChart className="h-24 w-24 text-[#3a36e0]/50" strokeWidth={1.5} />
        </div>
        <div className="absolute bottom-2 left-0 right-0 flex justify-between px-4">
          <span className="text-xs text-gray-400">Jan</span>
          <span className="text-xs text-gray-400">Feb</span>
          <span className="text-xs text-gray-400">Mar</span>
          <span className="text-xs text-gray-400">Apr</span>
          <span className="text-xs text-gray-400">May</span>
          <span className="text-xs text-gray-400">Jun</span>
        </div>
      </div>
      
      <Separator className="my-4 bg-white/10" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Goals", "Assists", "Clean Sheets"].map((stat, index) => (
          <div key={stat} className="bg-white/5 p-3 rounded">
            <div className="text-xs text-gray-400 mb-1">{stat}</div>
            <div className="text-lg font-semibold text-white">
              {124 - (index * 32)}
            </div>
            <div className={`text-xs ${index === 0 ? "text-green-400" : "text-red-400"} flex items-center`}>
              {index === 0 ? "↑" : "↓"} {index === 0 ? "4.2%" : "2.8%"} from last {timeFrame}
            </div>
          </div>
        ))}
      </div>
    </ContentCard>
  );
};

const TopPerformersCard: React.FC = () => {
  return (
    <ContentCard variant="glass" animationDelay={400} className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Top Performers</h3>
      </div>
      
      <div className="space-y-4">
        {["Liverpool", "Arsenal", "Manchester City", "Tottenham", "Chelsea"].map((team, index) => (
          <div key={team} className="flex items-center">
            <div className="mr-3 text-sm font-medium w-6 text-right text-gray-400">
              {index + 1}
            </div>
            <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-white font-bold text-sm mr-3">
              {team[0]}
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium text-white">{team}</div>
              <div className="h-1.5 bg-white/10 rounded-full mt-1.5 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-[#3a36e0] to-[#9b87f5]"
                  style={{ width: `${95 - (index * 10)}%` }}
                ></div>
              </div>
            </div>
            <div className="ml-3 text-sm font-medium text-white">
              {95 - (index * 10)}%
            </div>
          </div>
        ))}
      </div>
      
      <Separator className="my-4 bg-white/10" />
      
      <Button variant="outline" size="sm" className="w-full bg-white/5 border-white/10">
        View All Teams
      </Button>
    </ContentCard>
  );
};

export default AnalysisTabs;
