
import React from 'react';
import { createGrid } from '@/lib/grid-utils';
import TeamPerformanceChart from './TeamPerformanceChart';
import GoalAnalysisChart from './GoalAnalysisChart';
import { useAnalytics } from '@/hooks/useAnalytics';

const AnalyticsCharts = () => {
  const { chartType } = useAnalytics();
  
  return (
    <div className={createGrid("twoColumn", "mb-8")}>
      <TeamPerformanceChart chartType={chartType} />
      <GoalAnalysisChart chartType={chartType} />
    </div>
  );
};

export default AnalyticsCharts;
