
import React from 'react';
import { Trophy, Share, BellDot, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TeamStatsCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/10 rounded-xl p-5 animate-fade-in">
      <div className="flex items-start justify-between mb-5">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-400" /> 
          Csapat statisztikák
        </h2>
        <div className="flex items-center gap-2">
          <Button 
            variant="ghost"
            className="h-9 w-9 p-0 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10"
          >
            <Share className="h-4 w-4 text-gray-400" />
          </Button>
          <Button 
            variant="ghost"
            className="h-9 w-9 p-0 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 relative"
          >
            <BellDot className="h-4 w-4 text-gray-400" />
            <div className="absolute top-0.5 right-0.5 h-2 w-2 bg-blue-500 rounded-full"></div>
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Összes mérkőzés', value: '24', color: 'text-blue-400', icon: <Check className="h-5 w-5" /> },
          { label: 'Megtippelt hazai', value: '14', color: 'text-emerald-400', icon: <Check className="h-5 w-5" /> },
          { label: 'Megtippelt vendég', value: '8', color: 'text-purple-400', icon: <Check className="h-5 w-5" /> },
          { label: 'Sikeres tippek', value: '58%', color: 'text-amber-400', icon: <Check className="h-5 w-5" /> }
        ].map((stat, index) => (
          <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/5">
            <div className={`h-9 w-9 rounded-full flex items-center justify-center mb-3 ${stat.color.replace('text', 'bg')}/20`}>
              <div className={stat.color}>
                {stat.icon}
              </div>
            </div>
            <div>
              <p className="text-gray-400 text-xs mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamStatsCard;
