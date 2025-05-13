
import React, { ReactNode, useState } from 'react';
import AnalyticsContext, { AnalyticsContextType } from '@/contexts/AnalyticsContext';

interface AnalyticsProviderProps {
  children: ReactNode;
  defaultTimeFrame?: string;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ 
  children,
  defaultTimeFrame = 'month'
}) => {
  const [timeFrame, setTimeFrame] = useState<string>(defaultTimeFrame);
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [chartType, setChartType] = useState<string>('line');

  const contextValue: AnalyticsContextType = {
    timeFrame,
    setTimeFrame,
    selectedTeam,
    setSelectedTeam,
    chartType,
    setChartType
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export default AnalyticsProvider;
