
import React from 'react';

interface TeamFormCardProps {
  teamId: string;
}

const TeamFormCard: React.FC<TeamFormCardProps> = ({ teamId }) => {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/5">
      <h4 className="text-sm font-medium text-gray-400 mb-3">Forma</h4>
      <div className="flex items-center gap-2 justify-between">
        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <span className="text-xs font-bold text-green-500">W</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-red-500/20 flex items-center justify-center">
          <span className="text-xs font-bold text-red-500">L</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <span className="text-xs font-bold text-green-500">W</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-yellow-500/20 flex items-center justify-center">
          <span className="text-xs font-bold text-yellow-500">D</span>
        </div>
        <div className="h-8 w-8 rounded-full bg-green-500/20 flex items-center justify-center">
          <span className="text-xs font-bold text-green-500">W</span>
        </div>
      </div>
      <div className="mt-3">
        <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full w-[68%] bg-emerald-500 rounded-full"></div>
        </div>
        <div className="flex items-center justify-between mt-1.5">
          <span className="text-xs text-gray-400">5 mérkőzés</span>
          <span className="text-xs text-emerald-400">68% győzelem</span>
        </div>
      </div>
    </div>
  );
};

export default TeamFormCard;
