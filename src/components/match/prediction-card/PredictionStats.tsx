
import React from 'react';
import { Team } from '../../../data/premier-league-teams';
import StatsSection from './StatsSection';

interface PredictionStatsProps {
  match: { home: Team | null; away: Team | null };
}

const PredictionStats: React.FC<PredictionStatsProps> = ({ match }) => {
  if (!match.home || !match.away) return null;
  
  // Generate random prediction stats for the demo
  const homeWin = Math.floor(Math.random() * 30) + 30; // 30-60%
  const draw = Math.floor(Math.random() * 20) + 10; // 10-30%
  const awayWin = 100 - homeWin - draw; // Remaining percentage
  
  const homeGoals = (Math.random() * 2 + 0.5).toFixed(1);
  const awayGoals = (Math.random() * 2 + 0.3).toFixed(1);
  
  const predictionResult = homeWin > awayWin ? (homeWin > 50 ? 'home' : 'draw') : (awayWin > 50 ? 'away' : 'draw');
  
  return (
    <div className="mt-6 space-y-6">
      <StatsSection
        title="Predikció eredménye"
        labels={['Hazai győzelem', 'Döntetlen', 'Vendég győzelem']}
        values={[homeWin, draw, awayWin]}
        colors={['emerald', 'amber', 'blue']}
        predictionResult={predictionResult}
      />
      
      <div className="grid grid-cols-2 gap-8 mt-4">
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm text-gray-400">Várható gólok</span>
            <span className="text-lg font-semibold text-emerald-400">{homeGoals}</span>
          </div>
          <div className="bg-gray-700/30 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-emerald-500 h-full rounded-full" 
              style={{ width: `${parseFloat(homeGoals) * 20}%` }}
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <div className="flex justify-between">
            <span className="text-sm text-gray-400">Várható gólok</span>
            <span className="text-lg font-semibold text-blue-400">{awayGoals}</span>
          </div>
          <div className="bg-gray-700/30 h-1.5 rounded-full overflow-hidden">
            <div 
              className="bg-blue-500 h-full rounded-full" 
              style={{ width: `${parseFloat(awayGoals) * 20}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PredictionStats;
