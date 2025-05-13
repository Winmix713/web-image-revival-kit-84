
import React from 'react';
import { Trophy, Check, Clock, Calendar } from 'lucide-react';

const MatchesSummaryCard: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5 animate-fade-in" style={{ animationDelay: '0.1s' }}>
      <div className="flex items-center gap-2 mb-4">
        <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
          <Trophy className="h-4 w-4 text-blue-400" />
        </div>
        <h3 className="text-lg font-semibold text-white">Mérkőzés statisztikák</h3>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-gradient-to-br from-blue-500/10 to-transparent backdrop-blur-sm rounded-lg p-4 border border-blue-500/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Mérkőzések</p>
              <p className="text-2xl font-bold text-white mt-1">124</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center">
              <Calendar className="h-4 w-4 text-blue-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-500/10 to-transparent backdrop-blur-sm rounded-lg p-4 border border-green-500/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Élő</p>
              <p className="text-2xl font-bold text-white mt-1">3</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-green-500/10 flex items-center justify-center">
              <Clock className="h-4 w-4 text-green-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-500/10 to-transparent backdrop-blur-sm rounded-lg p-4 border border-purple-500/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Teljesítmény</p>
              <p className="text-2xl font-bold text-white mt-1">76%</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-purple-500/10 flex items-center justify-center">
              <Check className="h-4 w-4 text-purple-400" />
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-amber-500/10 to-transparent backdrop-blur-sm rounded-lg p-4 border border-amber-500/10">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs text-gray-400">Tippek</p>
              <p className="text-2xl font-bold text-white mt-1">82</p>
            </div>
            <div className="h-8 w-8 rounded-full bg-amber-500/10 flex items-center justify-center">
              <Trophy className="h-4 w-4 text-amber-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchesSummaryCard;
