
import React from 'react';
import ContentCard from "../common/ContentCard";
import { Separator } from '@/components/ui/separator';
import { useAnalytics } from '@/hooks/useAnalytics';
import { LineChart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface TabContentProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const TabContent: React.FC<TabContentProps> = ({ title, description, children }) => {
  return (
    <ContentCard variant="glass" animationDelay={300}>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      {description && <p className="text-gray-400 text-sm mb-6">{description}</p>}
      {children}
    </ContentCard>
  );
};

export const PerformanceTrendsContent: React.FC = () => {
  const { timeFrame } = useAnalytics();
  
  return (
    <ContentCard variant="glass" animationDelay={300} className="lg:col-span-2 p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-white">Performance Trends</h3>
      </div>
      
      <div className="w-full h-64 relative">
        <div className="w-full h-full flex items-center justify-center bg-white/5 rounded">
          <LineChart className="h-24 w-24 text-[#3a36e0]/50" strokeWidth={1.5} />
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

export const TeamAnalysisContent: React.FC = () => {
  return (
    <TabContent 
      title="Team Analysis" 
      description="View comprehensive team statistics and performance metrics."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Liverpool", "Arsenal", "Manchester City"].map((team) => (
          <div key={team} className="bg-white/5 p-4 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-blue-500/20 flex items-center justify-center">
              {team[0]}
            </div>
            <div>
              <div className="font-medium text-white">{team}</div>
              <div className="text-xs text-gray-400">View analytics</div>
            </div>
          </div>
        ))}
      </div>
    </TabContent>
  );
};

export const PlayerAnalysisContent: React.FC = () => {
  return (
    <TabContent 
      title="Player Analysis" 
      description="Analyze individual player performance and statistics."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {["Mohamed Salah", "Erling Haaland", "Kevin De Bruyne", "Bukayo Saka"].map((player) => (
          <div key={player} className="bg-white/5 p-4 rounded-lg flex items-center gap-3 hover:bg-white/10 transition-colors cursor-pointer">
            <div className="h-10 w-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400 font-medium">
              {player.split(' ').map(part => part[0]).join('')}
            </div>
            <div>
              <div className="font-medium text-white">{player}</div>
              <div className="text-xs text-gray-400">View player stats</div>
            </div>
          </div>
        ))}
      </div>
      
      <Button variant="outline" size="sm" className="mt-4 bg-white/5 border-white/10">
        View All Players
      </Button>
    </TabContent>
  );
};

export const PredictionAnalyticsContent: React.FC = () => {
  return (
    <TabContent 
      title="Prediction Analytics" 
      description="Track prediction accuracy and performance over time."
    >
      <div className="mb-6">
        <div className="bg-white/5 p-4 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="text-sm font-medium text-gray-300">Prediction Accuracy</div>
            <div className="text-lg font-bold text-white">76%</div>
          </div>
          
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-green-500 to-emerald-400" style={{ width: '76%' }}></div>
          </div>
          
          <div className="flex justify-between mt-1 text-xs text-gray-400">
            <div>Last 7 days</div>
            <div className="text-green-400">+2.4%</div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {["Home wins", "Draws", "Away wins"].map((type, index) => (
          <div key={type} className="bg-white/5 p-3 rounded text-center">
            <div className="text-xs text-gray-400 mb-1">{type}</div>
            <div className="text-lg font-semibold text-white">
              {68 + (index * 4)}%
            </div>
            <div className={`text-xs ${index !== 1 ? "text-green-400" : "text-red-400"} flex items-center justify-center`}>
              {index !== 1 ? "↑" : "↓"} {index !== 1 ? "3.1%" : "1.8%"}
            </div>
          </div>
        ))}
      </div>
    </TabContent>
  );
};
