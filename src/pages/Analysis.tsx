
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

const Analysis = () => {
  const [timeFrame, setTimeFrame] = useState('month');

  return (
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

      <div className={createGrid("twoColumn", "mb-8")}>
        <TeamPerformanceChart />
        <GoalAnalysisChart />
      </div>

      <AnalysisTabs timeFrame={timeFrame} />
      
      <SeasonAnalyticsCard />
    </AppLayout>
  );
};

export default Analysis;
