
import React, { useEffect } from 'react';
import { BarChart, PieChart, Calendar, ChevronRight } from 'lucide-react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import StatisticsOverview from '../components/statistics/StatisticsOverview';
import StatisticsCharts from '../components/statistics/StatisticsCharts';
import StatisticsLeaderboard from '../components/statistics/StatisticsLeaderboard';
import UserPerformance from '../components/statistics/UserPerformance';

const Statistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader 
        title="Statistics"
        description="Detailed analytics, performance indicators and prediction accuracy based on past matches"
        icon={BarChart}
        variant="gradient"
        actions={
          <div className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg">
            <Calendar className="h-4 w-4 text-blue-400" />
            <span className="text-sm text-gray-300">Last 30 days</span>
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </div>
        }
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left column - 8/12 width */}
        <div className="lg:col-span-8 space-y-8">
          <StatisticsOverview />
          <StatisticsCharts />
        </div>
        
        {/* Right column - 4/12 width */}
        <div className="lg:col-span-4 space-y-8">
          <UserPerformance />
          <StatisticsLeaderboard />
        </div>
      </div>
    </AppLayout>
  );
};

export default Statistics;
