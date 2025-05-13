
import React from 'react';

interface RecentMatchesCardProps {
  teamId: string;
  teamName: string;
}

const RecentMatchesCard: React.FC<RecentMatchesCardProps> = ({ teamId, teamName }) => {
  const recentMatches = [
    { date: '2023-04-22', home: teamName, away: 'Chelsea', homeScore: 2, awayScore: 1, result: 'win' },
    { date: '2023-04-15', home: 'Newcastle', away: teamName, homeScore: 0, awayScore: 3, result: 'win' },
    { date: '2023-04-08', home: teamName, away: 'Wolves', homeScore: 1, awayScore: 1, result: 'draw' },
  ];

  return (
    <div className="bg-white/5 rounded-lg p-4 border border-white/5 mb-6">
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-sm font-medium text-gray-400">Legutóbbi mérkőzések</h4>
        <button className="text-xs text-blue-400 hover:text-blue-300">Összes megtekintése</button>
      </div>
      <div className="space-y-3">
        {recentMatches.map((match, index) => (
          <div key={index} className="flex items-center justify-between p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
            <span className="text-xs text-gray-400">{match.date}</span>
            <div className="flex items-center gap-2">
              <span className={`text-sm ${match.home === teamName ? 'text-white font-medium' : 'text-gray-400'}`}>
                {match.home}
              </span>
              <div className="px-2 py-1 bg-black/30 rounded text-xs font-medium">
                {match.homeScore} - {match.awayScore}
              </div>
              <span className={`text-sm ${match.away === teamName ? 'text-white font-medium' : 'text-gray-400'}`}>
                {match.away}
              </span>
            </div>
            <span className={`text-xs rounded-full px-2 py-1 ${
              match.result === 'win' ? 'bg-green-500/20 text-green-400' : 
              match.result === 'loss' ? 'bg-red-500/20 text-red-400' : 
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {match.result === 'win' ? 'Győzelem' : match.result === 'loss' ? 'Vereség' : 'Döntetlen'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentMatchesCard;
