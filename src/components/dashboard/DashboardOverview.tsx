
import React from 'react';
import { Activity, Trophy, BarChart, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const DashboardOverview = () => {
  const stats = [
    {
      title: "Pontozás",
      value: "846",
      icon: <Trophy className="h-5 w-5 text-amber-400" />,
      change: "+12%",
      bgColor: "bg-amber-500/10",
      textColor: "text-amber-400",
      borderColor: "border-amber-500/20"
    },
    {
      title: "Pontosság",
      value: "74%",
      icon: <BarChart className="h-5 w-5 text-emerald-400" />,
      change: "+3%",
      bgColor: "bg-emerald-500/10",
      textColor: "text-emerald-400",
      borderColor: "border-emerald-500/20"
    },
    {
      title: "Aktivitás",
      value: "32",
      icon: <Activity className="h-5 w-5 text-blue-400" />,
      change: "+18%",
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-400",
      borderColor: "border-blue-500/20"
    },
    {
      title: "Sorozat",
      value: "4",
      icon: <Zap className="h-5 w-5 text-purple-400" />,
      change: "+2",
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-400",
      borderColor: "border-purple-500/20"
    }
  ];

  return (
    <Card className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 shadow-none animate-fade-in">
      <CardContent className="p-0">
        <div className="p-5 border-b border-white/5">
          <h3 className="text-lg font-semibold text-white">Áttekintés</h3>
        </div>
        <div className="grid grid-cols-2 gap-4 p-5">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`${stat.bgColor} ${stat.borderColor} backdrop-blur-sm rounded-lg p-4 border hover:shadow-lg transition-shadow duration-300`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs text-gray-400">{stat.title}</p>
                  <p className={`text-xl font-bold ${stat.textColor} mt-1`}>{stat.value}</p>
                </div>
                <div className={`h-8 w-8 rounded-full ${stat.bgColor} flex items-center justify-center`}>
                  {stat.icon}
                </div>
              </div>
              <div className="mt-3">
                <div className={`inline-flex text-xs ${stat.textColor} font-medium bg-white/5 rounded-full px-2 py-0.5`}>
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default DashboardOverview;
