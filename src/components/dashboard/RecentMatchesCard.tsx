
import React from 'react';
import { Check, X, Minus } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const RecentMatchesCard = () => {
  const recentMatches = [
    {
      id: 1,
      homeTeam: {
        name: "Liverpool",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t14.png"
      },
      awayTeam: {
        name: "Chelsea",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t8.png"
      },
      result: "3-1",
      prediction: "home",
      actual: "home",
      correct: true
    },
    {
      id: 2,
      homeTeam: {
        name: "Vörös Ördögök",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t1.png"
      },
      awayTeam: {
        name: "Manchester Kék",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t43.png"
      },
      result: "1-1",
      prediction: "home",
      actual: "draw",
      correct: false
    },
    {
      id: 3,
      homeTeam: {
        name: "Tottenham",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t6.png"
      },
      awayTeam: {
        name: "London Ágyúk",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t3.png"
      },
      result: "1-2",
      prediction: "away",
      actual: "away",
      correct: true
    },
    {
      id: 4,
      homeTeam: {
        name: "Wolverhampton",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t39.png"
      },
      awayTeam: {
        name: "Everton",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t11.png"
      },
      result: "2-0",
      prediction: "home",
      actual: "home",
      correct: true
    }
  ];

  const getPredictionLabel = (prediction: string) => {
    switch (prediction) {
      case 'home': return 'Hazai';
      case 'away': return 'Vendég';
      case 'draw': return 'Döntetlen';
      default: return '';
    }
  };

  return (
    <Card className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 shadow-none animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <CardContent className="p-0">
        <div className="p-5 border-b border-white/5">
          <h3 className="text-lg font-semibold text-white">Legutóbbi mérkőzések</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-white/5 text-gray-400">
                <th className="text-left p-4">Mérkőzés</th>
                <th className="p-4">Eredmény</th>
                <th className="p-4">Tipp</th>
                <th className="p-4">Valós</th>
                <th className="p-4">Státusz</th>
              </tr>
            </thead>
            <tbody>
              {recentMatches.map((match) => (
                <tr key={match.id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-2">
                        <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-6 h-6" />
                        <span className="text-white">{match.homeTeam.name}</span>
                      </div>
                      <span className="text-gray-400">vs</span>
                      <div className="flex items-center space-x-2">
                        <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-6 h-6" />
                        <span className="text-white">{match.awayTeam.name}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-white font-semibold">{match.result}</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      match.prediction === 'home' ? 'bg-emerald-500/20 text-emerald-400' : 
                      match.prediction === 'draw' ? 'bg-amber-500/20 text-amber-400' : 
                      'bg-blue-500/20 text-blue-400'
                    }`}>
                      {getPredictionLabel(match.prediction)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                      match.actual === 'home' ? 'bg-emerald-500/10 text-emerald-400' : 
                      match.actual === 'draw' ? 'bg-amber-500/10 text-amber-400' : 
                      'bg-blue-500/10 text-blue-400'
                    }`}>
                      {getPredictionLabel(match.actual)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    {match.correct ? (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-emerald-500/20">
                        <Check className="w-4 h-4 text-emerald-400" />
                      </div>
                    ) : (
                      <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-500/20">
                        <X className="w-4 h-4 text-red-400" />
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 text-center">
          <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
            Összes mérkőzés megtekintése
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentMatchesCard;
