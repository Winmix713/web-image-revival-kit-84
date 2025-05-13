
import React from 'react';

interface SeasonStatsCardProps {
  teamId: string;
}

const SeasonStatsCard: React.FC<SeasonStatsCardProps> = ({ teamId }) => {
  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/5 mb-6">
      <h4 className="text-sm font-medium text-gray-400 mb-3">Szezon statisztikák</h4>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-400 mb-1">Meccs</p>
          <p className="text-lg font-semibold text-white">28</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Győzelem</p>
          <p className="text-lg font-semibold text-emerald-400">18</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Vereség</p>
          <p className="text-lg font-semibold text-red-400">6</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Gólok</p>
          <p className="text-lg font-semibold text-white">48</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Kapott gólok</p>
          <p className="text-lg font-semibold text-white">24</p>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-1">Pont</p>
          <p className="text-lg font-semibold text-blue-400">57</p>
        </div>
      </div>
    </div>
  );
};

export default SeasonStatsCard;
