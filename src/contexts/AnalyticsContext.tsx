
import { createContext } from 'react';

export interface AnalyticsContextType {
  timeFrame: string;
  setTimeFrame: (timeFrame: string) => void;
  selectedTeam: string | null;
  setSelectedTeam: (team: string | null) => void;
  chartType: string;
  setChartType: (type: string) => void;
}

const defaultContext: AnalyticsContextType = {
  timeFrame: 'month',
  setTimeFrame: () => {},
  selectedTeam: null,
  setSelectedTeam: () => {},
  chartType: 'line',
  setChartType: () => {}
};

const AnalyticsContext = createContext<AnalyticsContextType>(defaultContext);

export default AnalyticsContext;
