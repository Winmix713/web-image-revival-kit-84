
import React from 'react';
import { BarChart3, Calendar, Trophy, Users } from "lucide-react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import StatsCard from "@/components/common/StatsCard";
import ContentCard from "@/components/common/ContentCard";
import DashboardOverview from '../components/dashboard/DashboardOverview';
import PredictionPerformanceChart from '../components/dashboard/PredictionPerformanceChart';
import RecentMatchesCard from '../components/dashboard/RecentMatchesCard';
import TeamInsightsCard from '../components/dashboard/TeamInsightsCard';
import UpcomingMatchesCard from '../components/dashboard/UpcomingMatchesCard';

const Dashboard = () => {
  return (
    <AppLayout backgroundVariant="default">
      <PageHeader 
        title="League Dashboard"
        description="Manage your sports leagues in one place"
        icon={Trophy}
        variant="gradient"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard 
          title="Active Leagues"
          value="24"
          icon={Trophy}
          color="blue"
          delay={0}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard 
          title="Total Matches"
          value="256"
          icon={Calendar}
          color="red"
          delay={100}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard 
          title="Total Teams"
          value="48"
          icon={Users}
          color="purple"
          delay={200}
          trend={{ value: 3, isPositive: false }}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <DashboardOverview />
        <div className="lg:col-span-2">
          <PredictionPerformanceChart />
        </div>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <RecentMatchesCard />
        </div>
        <TeamInsightsCard />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-1">
          <UpcomingMatchesCard />
        </div>
        <div className="lg:col-span-2">
          <ContentCard className="h-full" variant="glass" animationDelay={350}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-white">Performance Overview</h2>
              <div className="flex gap-2">
                <TabButton isActive={false}>Weekly</TabButton>
                <TabButton isActive={true}>Monthly</TabButton>
                <TabButton isActive={false}>Yearly</TabButton>
              </div>
            </div>
            <div className="w-full h-[calc(100%-4rem)] rounded-lg bg-gradient-to-r from-[#3a36e0]/5 via-[#9b87f5]/10 to-transparent border border-white/5 p-4">
              <div className="flex items-end justify-between h-full pb-4">
                {[35, 45, 30, 60, 25, 65, 40, 70, 55, 50, 80, 60].map((height, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className="w-2 md:w-4 bg-gradient-to-t from-[#3a36e0] to-[#9b87f5] rounded-t-sm"
                      style={{ 
                        height: `${height}%`,
                        transition: 'height 1s ease-out',
                        transitionDelay: `${index * 0.05}s`
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </ContentCard>
        </div>
      </div>
    </AppLayout>
  );
};

const TabButton = ({ children, isActive = false }: { children: React.ReactNode; isActive?: boolean }) => {
  return (
    <div className={`px-3 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
      isActive 
        ? 'bg-[#3a36e0] text-white' 
        : 'bg-secondary text-muted-foreground hover:text-white'
    }`}>
      {children}
    </div>
  );
};

export default Dashboard;
