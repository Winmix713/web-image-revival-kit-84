
import React from 'react';
import Header from '../components/Header';
import PredictionSystem from '../components/PredictionSystem';
import DashboardOverview from '../components/dashboard/DashboardOverview';
import RecentMatchesCard from '../components/dashboard/RecentMatchesCard';
import PredictionPerformanceChart from '../components/dashboard/PredictionPerformanceChart';
import TeamInsightsCard from '../components/dashboard/TeamInsightsCard';
import UpcomingMatchesCard from '../components/dashboard/UpcomingMatchesCard';
import { BarChart } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black">
      <Header />
      <div className="container mx-auto px-4 pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2.5 mb-3 bg-gradient-to-r from-blue-500/10 to-transparent px-4 py-2 rounded-full">
              <BarChart className="w-5 h-5 text-blue-400" />
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Vezérlőpult
              </h1>
            </div>
          </div>
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
            <PredictionSystem />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
