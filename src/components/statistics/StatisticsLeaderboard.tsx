
import React from 'react';
import { Trophy } from 'lucide-react';

const users = [
  { rank: 1, name: 'FutballGuru', avatar: '/placeholder.svg', points: 2485, winRate: 94 },
  { rank: 2, name: 'SportMester', avatar: '/placeholder.svg', points: 2320, winRate: 91 },
  { rank: 3, name: 'TipperKing', avatar: '/placeholder.svg', points: 2150, winRate: 89 },
  { rank: 4, name: 'PredictorPro', avatar: '/placeholder.svg', points: 1980, winRate: 87 },
  { rank: 5, name: 'BettingExpert', avatar: '/placeholder.svg', points: 1875, winRate: 85 },
];

const StatisticsLeaderboard = () => {
  return (
    <div className="animate-fade-in bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5" style={{animationDelay: '0.4s'}}>
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-400" />
          Legjobb tippelők
        </h3>
      </div>
      
      <div className="space-y-4">
        {users.map((user, index) => (
          <div 
            key={index}
            className={`flex items-center gap-3 p-2.5 rounded-lg ${
              user.rank === 1 ? 'bg-gradient-to-r from-amber-500/20 to-amber-500/5 border border-amber-500/20' : 
              user.rank === 2 ? 'bg-gradient-to-r from-gray-500/20 to-gray-500/5 border border-gray-500/20' :
              user.rank === 3 ? 'bg-gradient-to-r from-amber-700/20 to-amber-700/5 border border-amber-700/20' :
              'bg-gradient-to-r from-white/5 to-white/0 border border-white/5'
            }`}
          >
            <div className="h-7 w-7 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-sm border border-white/10">
              <span className={`text-xs font-semibold ${
                user.rank === 1 ? 'text-amber-400' : 
                user.rank === 2 ? 'text-gray-300' :
                user.rank === 3 ? 'text-amber-700' :
                'text-white'
              }`}>
                {user.rank}
              </span>
            </div>
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-0.5">
              <div className="h-full w-full rounded-full bg-gradient-to-br from-blue-500 to-blue-700"></div>
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white">{user.name}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-400">Pontszám</p>
              <p className="text-sm font-semibold text-white">{user.points}</p>
            </div>
            <div className="text-right min-w-[40px]">
              <p className="text-xs text-gray-400">Siker</p>
              <p className="text-sm font-semibold text-emerald-400">{user.winRate}%</p>
            </div>
          </div>
        ))}
      </div>
      
      <button className="w-full mt-4 py-2 text-sm text-center text-blue-400 hover:text-blue-300 transition-colors">
        Teljes ranglista megtekintése
      </button>
    </div>
  );
};

export default StatisticsLeaderboard;
