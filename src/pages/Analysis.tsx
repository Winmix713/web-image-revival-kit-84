
import React, { useState } from 'react';
import { LineChart } from 'lucide-react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import TimeFrameSelector from '@/components/analysis/TimeFrameSelector';
import TeamPerformanceChart from '@/components/analysis/TeamPerformanceChart';
import GoalAnalysisChart from '@/components/analysis/GoalAnalysisChart';
import AnalysisTabs from '@/components/analysis/AnalysisTabs';
import SeasonAnalyticsCard from '@/components/analysis/SeasonAnalyticsCard';
import { createGrid } from '@/lib/grid-utils';
import AnalyticsContext from '@/contexts/AnalyticsContext';

const Analysis = () => {
  const [timeFrame, setTimeFrame] = useState('month');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);
  const [chartType, setChartType] = useState('line');

  const analyticsContextValue = {
    timeFrame,
    setTimeFrame,
    selectedTeam,
    setSelectedTeam,
    chartType,
    setChartType
  };

  return (
    <AnalyticsContext.Provider value={analyticsContextValue}>
      <AppLayout backgroundVariant="vibrant">
        <PageHeader 
          title="Analysis Dashboard"
          description="Advanced analytics and performance insights for your teams and leagues"
          icon={LineChart}
          variant="gradient"
          actions={
            <TimeFrameSelector timeFrame={timeFrame} setTimeFrame={setTimeFrame} />
          }
        />

        <AnalyticsCharts />
        
        <AnalysisTabs timeFrame={timeFrame} />
        
        <SeasonAnalyticsCard />
      </AppLayout>
    </AnalyticsContext.Provider>
  );
};

// Extracted component for charts section
const AnalyticsCharts = () => {
  return (
    <div className={createGrid("twoColumn", "mb-8")}>
      <TeamPerformanceChart />
      <GoalAnalysisChart />
    </div>
  );
};

export default Analysis;
