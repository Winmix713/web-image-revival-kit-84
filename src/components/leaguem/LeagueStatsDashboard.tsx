
import { memo } from "react";
import type { Match } from "./types";

interface LeagueStatsDashboardProps {
  league: any;
  matches: Match[];
}

const LeagueStatsDashboard = memo(({ league, matches }: LeagueStatsDashboardProps) => {
  // Calculate some basic stats
  const totalGoals = matches.reduce((sum, match) => sum + match.home_score + match.away_score, 0);
  const avgGoalsPerMatch = matches.length > 0 ? totalGoals / matches.length : 0;
  
  const homeWins = matches.filter(match => match.home_score > match.away_score).length;
  const awayWins = matches.filter(match => match.away_score > match.home_score).length;
  const draws = matches.filter(match => match.home_score === match.away_score).length;
  
  const homeWinPercentage = matches.length > 0 ? (homeWins / matches.length) * 100 : 0;
  const awayWinPercentage = matches.length > 0 ? (awayWins / matches.length) * 100 : 0;
  const drawPercentage = matches.length > 0 ? (draws / matches.length) * 100 : 0;

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-bold text-white mb-6">League Statistics</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-black/20 border border-white/5 rounded-lg p-6">
          <div className="text-gray-400 mb-2">Total Matches</div>
          <div className="text-2xl font-bold">{matches.length}</div>
        </div>
        
        <div className="bg-black/20 border border-white/5 rounded-lg p-6">
          <div className="text-gray-400 mb-2">Total Goals</div>
          <div className="text-2xl font-bold">{totalGoals}</div>
        </div>
        
        <div className="bg-black/20 border border-white/5 rounded-lg p-6">
          <div className="text-gray-400 mb-2">Average Goals/Match</div>
          <div className="text-2xl font-bold">{avgGoalsPerMatch.toFixed(2)}</div>
        </div>
      </div>
      
      <div className="bg-black/20 border border-white/5 rounded-lg p-6">
        <h4 className="text-lg font-semibold mb-4">Match Outcomes</h4>
        
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-gray-400 mb-1">Home Wins</div>
            <div className="text-xl font-bold">{homeWins}</div>
            <div className="text-sm text-emerald-400">{homeWinPercentage.toFixed(1)}%</div>
          </div>
          
          <div>
            <div className="text-gray-400 mb-1">Away Wins</div>
            <div className="text-xl font-bold">{awayWins}</div>
            <div className="text-sm text-blue-400">{awayWinPercentage.toFixed(1)}%</div>
          </div>
          
          <div>
            <div className="text-gray-400 mb-1">Draws</div>
            <div className="text-xl font-bold">{draws}</div>
            <div className="text-sm text-amber-400">{drawPercentage.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    </div>
  );
});

LeagueStatsDashboard.displayName = "LeagueStatsDashboard";

export default LeagueStatsDashboard;
