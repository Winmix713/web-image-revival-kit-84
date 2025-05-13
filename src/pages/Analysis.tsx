
import React from 'react';
import { LineChart } from 'lucide-react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import TimeFrameSelector from '@/components/analysis/TimeFrameSelector';
import AnalysisTabs from '@/components/analysis/AnalysisTabs';
import SeasonAnalyticsCard from '@/components/analysis/SeasonAnalyticsCard';
import AnalyticsProvider from '@/components/analysis/AnalyticsProvider';
import AnalyticsCharts from '@/components/analysis/AnalyticsCharts';
import ChartControlsPanel from '@/components/analysis/ChartControlsPanel';

const Analysis = () => {
  return (
    <AnalyticsProvider>
      <AppLayout backgroundVariant="vibrant">
        <PageHeader 
          title="Analysis Dashboard"
          description="Advanced analytics and performance insights for your teams and leagues"
          icon={LineChart}
          variant="gradient"
          actions={
            <TimeFrameSelector />
          }
        />
        
        <ChartControlsPanel />
        <AnalyticsCharts />
        
        <AnalysisTabs />
        
        <SeasonAnalyticsCard />
      </AppLayout>
    </AnalyticsProvider>
  );
};

export default Analysis;
