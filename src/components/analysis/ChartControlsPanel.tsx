
import React from 'react';
import { Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import ChartTypeSelector from './ChartTypeSelector';
import { useAnalytics } from '@/hooks/useAnalytics';

const ChartControlsPanel = () => {
  const { selectedTeam, setSelectedTeam, setChartType } = useAnalytics();
  
  const handleChartTypeChange = (type: string) => {
    setChartType(type);
  };
  
  const handleTeamFilterClear = () => {
    setSelectedTeam(null);
  };
  
  return (
    <div className="flex items-center justify-between mb-6">
      <div className="flex items-center gap-2">
        {selectedTeam && (
          <Button 
            variant="outline" 
            size="sm" 
            className="h-8 bg-blue-500/10 border-blue-500/20 text-xs"
            onClick={handleTeamFilterClear}
          >
            {selectedTeam} <span className="ml-1">×</span>
          </Button>
        )}
        <div className="relative">
          <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-gray-400" />
          <Input 
            placeholder="Filter by team..." 
            className="pl-8 h-8 w-[180px] bg-white/5 border-white/10 text-sm" 
          />
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <Button variant="outline" size="sm" className="h-8 bg-white/5 border-white/10">
          <Filter className="h-3.5 w-3.5 mr-2" />
          <span className="text-xs">Filters</span>
        </Button>
        <ChartTypeSelector onTypeChange={handleChartTypeChange} />
      </div>
    </div>
  );
};

export default ChartControlsPanel;
