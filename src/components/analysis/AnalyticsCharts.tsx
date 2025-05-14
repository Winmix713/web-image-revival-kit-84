
import { useState } from 'react';
import TeamPerformanceChart from './TeamPerformanceChart';
import GoalAnalysisChart from './GoalAnalysisChart';

interface AnalyticsChartsProps {
  chartType?: string;
}

export const AnalyticsCharts = ({ chartType = 'team-performance' }: AnalyticsChartsProps) => {
  const [selectedChart, setSelectedChart] = useState(chartType);

  return (
    <div className="space-y-8">
      {selectedChart === 'team-performance' && (
        <TeamPerformanceChart />
      )}
      {selectedChart === 'goal-analysis' && (
        <GoalAnalysisChart />
      )}
    </div>
  );
};
