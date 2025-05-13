
import React, { useEffect } from 'react';
import { BarChart, PieChart, Calendar, ChevronRight, Users, TrendingUp, Award } from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StatisticsOverview from '../components/statistics/StatisticsOverview';
import StatisticsCharts from '../components/statistics/StatisticsCharts';
import StatisticsLeaderboard from '../components/statistics/StatisticsLeaderboard';
import UserPerformance from '../components/statistics/UserPerformance';

const Statistics = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 via-gray-950 to-black overflow-hidden">
      {/* Enhanced background effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(139,92,246,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>
      </div>
      
      <Header />
      
      <main className="pt-24 pb-20">
        <section className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10">
            <div className="animate-fade-in">
              <div className="inline-flex items-center gap-2.5 mb-3 bg-gradient-to-r from-blue-500/10 to-transparent px-4 py-2 rounded-full">
                <BarChart className="w-5 h-5 text-blue-400" />
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  Statisztikák
                </h1>
              </div>
              <p className="text-gray-400 max-w-lg">
                Részletes elemzések, teljesítmény mutatók és előrejelzési pontosság az elmúlt meccsek alapján.
              </p>
            </div>
            
            <div className="mt-4 md:mt-0 flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-lg">
              <Calendar className="h-4 w-4 text-blue-400" />
              <span className="text-sm text-gray-300">Elmúlt 30 nap</span>
              <ChevronRight className="h-4 w-4 text-gray-500" />
            </div>
          </div>
          
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
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Statistics;
