
import React from 'react';
import { Button } from "@/components/ui/button";

interface TimeFrameSelectorProps {
  timeFrame: string;
  setTimeFrame: (timeFrame: string) => void;
}

const TimeFrameSelector: React.FC<TimeFrameSelectorProps> = ({ 
  timeFrame, 
  setTimeFrame 
}) => {
  return (
    <div className="flex items-center gap-2">
      <Button 
        variant={timeFrame === 'week' ? 'default' : 'outline'} 
        size="sm"
        className={timeFrame === 'week' 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
          : 'bg-white/5 border-white/10 text-white hover:bg-white/10'} 
        onClick={() => setTimeFrame('week')}
      >
        Week
      </Button>
      <Button 
        variant={timeFrame === 'month' ? 'default' : 'outline'} 
        size="sm"
        className={timeFrame === 'month' 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
          : 'bg-white/5 border-white/10 text-white hover:bg-white/10'} 
        onClick={() => setTimeFrame('month')}
      >
        Month
      </Button>
      <Button 
        variant={timeFrame === 'year' ? 'default' : 'outline'} 
        size="sm"
        className={timeFrame === 'year' 
          ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
          : 'bg-white/5 border-white/10 text-white hover:bg-white/10'} 
        onClick={() => setTimeFrame('year')}
      >
        Year
      </Button>
    </div>
  );
};

export default TimeFrameSelector;
