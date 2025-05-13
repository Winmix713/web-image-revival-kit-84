import React, { useState } from 'react';
import { Team } from '../../data/premier-league-teams';
import { BarChart3, X } from 'lucide-react';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';

interface TeamComparisonProps {
  teams: Team[];
  onClose: () => void;
}

const TeamComparison: React.FC<TeamComparisonProps> = ({ teams, onClose }) => {
  const stats = [
    { name: 'Játékosok', teamA: 26, teamB: 24 },
    { name: 'Győzelmek', teamA: 12, teamB: 9 },
    { name: 'Vereségek', teamA: 6, teamB: 8 },
    { name: 'Lövések/meccs', teamA: 14.2, teamB: 11.8 },
    { name: 'Gólok', teamA: 32, teamB: 24 },
    { name: 'Kapott gólok', teamA: 20, teamB: 28 },
    { name: 'Védések', teamA: 56, teamB: 48 },
    { name: 'Gólpasszok', teamA: 24, teamB: 18 },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/80 border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl animate-scale-up">
        <div className="p-4 flex justify-between items-center border-b border-white/10">
          <div className="flex items-center gap-2">
            <BarChart3 className="h-5 w-5 text-blue-400" />
            <h3 className="text-lg font-semibold text-white">Csapat összehasonlítás</h3>
          </div>
          <button 
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        </div>
        
        <div className="p-6">
          <div className="flex items-center justify-around mb-8">
            {teams.map((team, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="h-20 w-20 rounded-full overflow-hidden bg-gradient-to-br from-black/40 to-black/20 p-2 flex items-center justify-center border border-white/10 mb-3">
                  <img 
                    src={team.logoUrl} 
                    alt={`${team.name} logo`} 
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <h2 className="text-xl font-bold text-white">{team.name}</h2>
              </div>
            ))}
          </div>
          
          <div className="bg-white/5 rounded-lg p-4 border border-white/5 mb-6">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-white/10">
                  <TableHead className="text-gray-400">Statisztika</TableHead>
                  <TableHead className="text-right text-gray-400">{teams[0]?.name || "Csapat A"}</TableHead>
                  <TableHead className="text-right text-gray-400">{teams[1]?.name || "Csapat B"}</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {stats.map((stat, index) => (
                  <TableRow key={index} className="border-b border-white/5">
                    <TableCell className="text-white">{stat.name}</TableCell>
                    <TableCell className="text-right">
                      <span className={`font-semibold ${stat.teamA > stat.teamB ? 'text-emerald-400' : 'text-white'}`}>
                        {typeof stat.teamA === 'number' && stat.teamA % 1 !== 0 ? stat.teamA.toFixed(1) : stat.teamA}
                      </span>
                    </TableCell>
                    <TableCell className="text-right">
                      <span className={`font-semibold ${stat.teamB > stat.teamA ? 'text-emerald-400' : 'text-white'}`}>
                        {typeof stat.teamB === 'number' && stat.teamB % 1 !== 0 ? stat.teamB.toFixed(1) : stat.teamB}
                      </span>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <div className="mb-6">
            <h4 className="text-sm font-medium text-gray-400 mb-3">Legutóbbi egymás elleni mérkőzések</h4>
            <div className="grid grid-cols-1 gap-3">
              {[
                { date: '2023-03-15', homeTeam: teams[0]?.name || 'Csapat A', awayTeam: teams[1]?.name || 'Csapat B', homeScore: 2, awayScore: 1 },
                { date: '2022-10-22', homeTeam: teams[1]?.name || 'Csapat B', awayTeam: teams[0]?.name || 'Csapat A', homeScore: 0, awayScore: 3 },
                { date: '2022-01-08', homeTeam: teams[0]?.name || 'Csapat A', awayTeam: teams[1]?.name || 'Csapat B', homeScore: 1, awayScore: 1 }
              ].map((match, index) => (
                <div key={index} className="bg-white/5 rounded-lg p-3 border border-white/5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">{match.date}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-white">{match.homeTeam}</span>
                    <div className="bg-black/30 px-2 py-1 rounded text-sm font-medium">
                      {match.homeScore} - {match.awayScore}
                    </div>
                    <span className="text-sm text-white">{match.awayTeam}</span>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-blue-500/20 text-blue-400">
                    {
                      match.homeScore > match.awayScore ? `${match.homeTeam} győzelem` :
                      match.homeScore < match.awayScore ? `${match.awayTeam} győzelem` : 'Döntetlen'
                    }
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end">
            <button 
              onClick={onClose} 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-medium px-4 py-2 rounded-xl"
            >
              Bezárás
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamComparison;
