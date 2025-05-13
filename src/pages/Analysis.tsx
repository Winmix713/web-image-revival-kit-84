
import React, { useState } from 'react';
import { BarChart3, LineChart, PieChart, BarChart } from 'lucide-react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Analysis = () => {
  const [timeFrame, setTimeFrame] = useState('month');

  return (
    <AppLayout backgroundVariant="vibrant">
      <PageHeader 
        title="Analysis Dashboard"
        description="Advanced analytics and performance insights for your teams and leagues"
        icon={LineChart}
        variant="gradient"
        actions={
          <div className="flex items-center gap-2">
            <Button 
              variant={timeFrame === 'week' ? 'default' : 'outline'} 
              size="sm"
              className={timeFrame === 'week' ? 'bg-[#3a36e0]' : 'bg-white/5 border-white/10'} 
              onClick={() => setTimeFrame('week')}
            >
              Week
            </Button>
            <Button 
              variant={timeFrame === 'month' ? 'default' : 'outline'} 
              size="sm"
              className={timeFrame === 'month' ? 'bg-[#3a36e0]' : 'bg-white/5 border-white/10'} 
              onClick={() => setTimeFrame('month')}
            >
              Month
            </Button>
            <Button 
              variant={timeFrame === 'year' ? 'default' : 'outline'} 
              size="sm"
              className={timeFrame === 'year' ? 'bg-[#3a36e0]' : 'bg-white/5 border-white/10'} 
              onClick={() => setTimeFrame('year')}
            >
              Year
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
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
      </div>

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
      
      <ContentCard variant="glass" animationDelay={500} className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-white">Season Analytics</h2>
          <Button variant="outline" size="sm" className="bg-white/5 border-white/10">
            Export Data
          </Button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
    </AppLayout>
  );
};

const ChartTypeSelector = () => {
  const [chartType, setChartType] = useState('bar');
  
  return (
    <div className="flex items-center border border-white/10 rounded-md overflow-hidden">
      <Button 
        variant="ghost"
        size="sm"
        className={`rounded-none h-8 px-2 ${chartType === 'bar' ? 'bg-white/10' : ''}`}
        onClick={() => setChartType('bar')}
      >
        <BarChart className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost"
        size="sm"
        className={`rounded-none h-8 px-2 ${chartType === 'line' ? 'bg-white/10' : ''}`}
        onClick={() => setChartType('line')}
      >
        <LineChart className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost"
        size="sm"
        className={`rounded-none h-8 px-2 ${chartType === 'pie' ? 'bg-white/10' : ''}`}
        onClick={() => setChartType('pie')}
      >
        <PieChart className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Analysis;
