
import React from 'react';
import { Button } from "@/components/ui/button";
import { useAnalytics } from '@/hooks/useAnalytics';

const TimeFrameSelector = () => {
  const { timeFrame, setTimeFrame } = useAnalytics();
  
  const timeOptions = [
    { value: 'week', label: 'Weekly' },
    { value: 'month', label: 'Monthly' },
    { value: 'season', label: 'Season' }
  ];
  
  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-md p-1">
      {timeOptions.map((option) => (
        <Button
          key={option.value}
          variant="ghost"
          size="sm"
          className={`h-8 px-3 ${
            timeFrame === option.value 
              ? 'bg-white/10 text-white' 
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
          onClick={() => setTimeFrame(option.value)}
        >
          {option.label}
        </Button>
      ))}
    </div>
  );
};

export default TimeFrameSelector;
