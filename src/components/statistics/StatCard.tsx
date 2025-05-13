
import React, { ReactNode } from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  icon: ReactNode;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatCard = ({ icon, title, value, change, isPositive }: StatCardProps) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/90 to-gray-800/30 backdrop-blur-md border border-white/10 rounded-xl p-5 hover:border-blue-500/20 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] group relative overflow-hidden">
      <div className="flex items-center justify-between mb-3">
        <div className="h-8 w-8 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors duration-300">
          {icon}
        </div>
        <div className={`flex items-center text-xs ${isPositive ? 'text-emerald-400' : 'text-red-400'}`}>
          {isPositive ? (
            <TrendingUp className="h-3 w-3 mr-1" />
          ) : (
            <TrendingDown className="h-3 w-3 mr-1" />
          )}
          <span>{change}</span>
        </div>
      </div>
      <div className="space-y-0.5">
        <p className="text-gray-400 text-xs">{title}</p>
        <p className="text-2xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
