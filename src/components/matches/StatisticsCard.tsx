
import React from 'react';
import { Trophy, Share, BellDot, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface StatisticsCardProps {
  title: string;
  icon: React.ReactNode;
  value: string;
  change: string;
  isPositive: boolean;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  title,
  icon,
  value,
  change,
  isPositive
}) => {
  return (
    <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-5 animate-fade-in">
      <div className="flex items-center justify-between mb-5">
        <div className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center">
          {icon}
        </div>
        <div className={`px-2.5 py-1 rounded-full ${isPositive ? 'bg-emerald-500/20 text-emerald-400' : 'bg-red-500/20 text-red-400'} text-xs font-medium flex items-center gap-1`}>
          <span>{isPositive ? '+' : ''}{change}</span>
        </div>
      </div>
      
      <div>
        <p className="text-gray-400 text-sm mb-1">{title}</p>
        <p className="text-3xl font-bold text-white">{value}</p>
      </div>
    </div>
  );
};

export default StatisticsCard;
