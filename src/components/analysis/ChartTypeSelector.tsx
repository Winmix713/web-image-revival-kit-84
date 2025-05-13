
import React, { useState } from 'react';
import { BarChart, LineChart, PieChart } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface ChartTypeSelectorProps {
  selectedType?: string;
  onTypeChange?: (type: string) => void;
}

const ChartTypeSelector: React.FC<ChartTypeSelectorProps> = ({ 
  selectedType = 'bar', 
  onTypeChange 
}) => {
  const [chartType, setChartType] = useState(selectedType);
  
  const handleSelect = (type: string) => {
    setChartType(type);
    if (onTypeChange) {
      onTypeChange(type);
    }
  };
  
  return (
    <div className="flex items-center border border-white/10 rounded-md overflow-hidden">
      <Button 
        variant="ghost"
        size="sm"
        className={`rounded-none h-8 px-2 ${chartType === 'bar' ? 'bg-white/10' : ''}`}
        onClick={() => handleSelect('bar')}
      >
        <BarChart className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost"
        size="sm"
        className={`rounded-none h-8 px-2 ${chartType === 'line' ? 'bg-white/10' : ''}`}
        onClick={() => handleSelect('line')}
      >
        <LineChart className="h-4 w-4" />
      </Button>
      <Button 
        variant="ghost"
        size="sm"
        className={`rounded-none h-8 px-2 ${chartType === 'pie' ? 'bg-white/10' : ''}`}
        onClick={() => handleSelect('pie')}
      >
        <PieChart className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default ChartTypeSelector;
