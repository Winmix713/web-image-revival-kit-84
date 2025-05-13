
import React from 'react';
import { Clock, Calendar } from 'lucide-react';

interface NextMatchCardProps {
  teamId: string;
  teamName: string;
}

const NextMatchCard: React.FC<NextMatchCardProps> = ({ teamId, teamName }) => {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
      <h4 className="text-sm font-medium text-gray-400 mb-3">Következő mérkőzés</h4>
      <div className="flex items-center justify-between">
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-black/20 p-1 flex items-center justify-center">
            <img src={`https://resources.premierleague.com/premierleague/badges/50/t${teamId}.png`} alt={teamName} className="h-8 w-8 object-contain" />
          </div>
          <span className="text-xs text-white mt-1">{teamName}</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-xs text-gray-400">VS</span>
          <span className="text-xs text-blue-400 mt-1 flex items-center gap-1">
            <Clock className="h-3 w-3" />
            <span>21:00</span>
          </span>
        </div>
        <div className="flex flex-col items-center">
          <div className="h-12 w-12 rounded-full bg-black/20 p-1 flex items-center justify-center">
            <img src="https://resources.premierleague.com/premierleague/badges/50/t8.png" alt="Chelsea" className="h-8 w-8 object-contain" />
          </div>
          <span className="text-xs text-white mt-1">Chelsea</span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <span className="text-xs text-gray-400 flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          <span>2023. május 15.</span>
        </span>
      </div>
    </div>
  );
};

export default NextMatchCard;
