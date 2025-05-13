
import React from 'react';
import { User, TrendingUp } from 'lucide-react';

export interface Player {
  id: number;
  name: string;
  position: string;
  number: number;
  nationality: string;
  imageUrl?: string;
  stats: {
    appearances: number;
    goals?: number;
    assists?: number;
    cleanSheets?: number;
    saves?: number;
  };
}

interface PlayerCardProps {
  player: Player;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-4 hover:border-blue-500/20 transition-all duration-300 group">
      <div className="flex items-center gap-3">
        <div className="h-12 w-12 rounded-full overflow-hidden bg-gradient-to-br from-black/40 to-black/20 flex items-center justify-center border border-white/10">
          {player.imageUrl ? (
            <img 
              src={player.imageUrl} 
              alt={player.name} 
              className="h-full w-full object-cover" 
            />
          ) : (
            <User className="h-6 w-6 text-gray-400" />
          )}
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-semibold text-white">{player.name}</h3>
            <span className="text-xs px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-400">
              #{player.number}
            </span>
          </div>
          <div className="flex items-center gap-1 mt-1">
            <span className="text-xs text-gray-400">{player.position}</span>
            <span className="text-xs text-gray-600 mx-1">•</span>
            <span className="text-xs text-gray-400">{player.nationality}</span>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-2 mt-4">
        <div className="flex flex-col items-center bg-white/5 rounded-lg px-2 py-2">
          <span className="text-xs text-gray-400">Meccs</span>
          <span className="text-lg font-semibold text-white">{player.stats.appearances}</span>
        </div>
        
        {player.position !== 'Goalkeeper' ? (
          <>
            <div className="flex flex-col items-center bg-white/5 rounded-lg px-2 py-2">
              <span className="text-xs text-gray-400">Gól</span>
              <span className="text-lg font-semibold text-white">{player.stats.goals || 0}</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 rounded-lg px-2 py-2">
              <span className="text-xs text-gray-400">Gólpassz</span>
              <span className="text-lg font-semibold text-white">{player.stats.assists || 0}</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center bg-white/5 rounded-lg px-2 py-2">
              <span className="text-xs text-gray-400">Kapott nélkül</span>
              <span className="text-lg font-semibold text-white">{player.stats.cleanSheets || 0}</span>
            </div>
            <div className="flex flex-col items-center bg-white/5 rounded-lg px-2 py-2">
              <span className="text-xs text-gray-400">Védés</span>
              <span className="text-lg font-semibold text-white">{player.stats.saves || 0}</span>
            </div>
          </>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-white/5 flex items-center justify-between">
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <TrendingUp className="h-3 w-3 text-blue-400" />
          Forma: Jó
        </span>
        <button className="text-xs text-blue-400 hover:text-blue-300 transition-colors">
          Részletek
        </button>
      </div>
    </div>
  );
};

export default PlayerCard;
