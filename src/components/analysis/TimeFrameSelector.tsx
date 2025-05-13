
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import AnalyticsContext from '@/contexts/AnalyticsContext';

interface TimeFrameSelectorProps {
  timeFrame: string;
  setTimeFrame: (timeFrame: string) => void;
}

const TimeFrameSelector: React.FC<TimeFrameSelectorProps> = ({ 
  timeFrame, 
  setTimeFrame 
}) => {
  const { chartType, setChartType } = useContext(AnalyticsContext);
  
  const timeFrames = [
    { value: 'week', label: 'Week' },
    { value: 'month', label: 'Month' },
    { value: 'quarter', label: 'Quarter' },
    { value: 'year', label: 'Year' },
  ];
  
  return (
    <div className="flex items-center space-x-4">
      <div className="flex items-center gap-2">
        {timeFrames.map((item) => (
          <Button 
            key={item.value}
            variant={timeFrame === item.value ? 'default' : 'outline'} 
            size="sm"
            className={timeFrame === item.value 
              ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
              : 'bg-white/5 border-white/10 text-white hover:bg-white/10'} 
            onClick={() => setTimeFrame(item.value)}
          >
            {item.label}
          </Button>
        ))}
      </div>
      
      <div className="h-6 w-px bg-white/10 mx-2"></div>
      
      <ChartTypeToggle chartType={chartType} setChartType={setChartType} />
    </div>
  );
};

// Chart Type Toggle Component
const ChartTypeToggle = ({ chartType, setChartType }) => {
  const chartTypes = [
    { value: 'line', label: 'Line' },
    { value: 'bar', label: 'Bar' },
    { value: 'area', label: 'Area' },
  ];
  
  return (
    <div className="flex items-center gap-2">
      {chartTypes.map((type) => (
        <Button 
          key={type.value}
          variant={chartType === type.value ? 'default' : 'outline'} 
          size="sm"
          className={chartType === type.value 
            ? 'bg-gradient-to-r from-purple-600 to-purple-700 text-white' 
            : 'bg-white/5 border-white/10 text-white hover:bg-white/10'} 
          onClick={() => setChartType(type.value)}
        >
          {type.label}
        </Button>
      ))}
    </div>
  );
};

export default TimeFrameSelector;
