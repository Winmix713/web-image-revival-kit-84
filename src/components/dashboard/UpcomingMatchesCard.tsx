
import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const UpcomingMatchesCard = () => {
  const upcomingMatches = [
    {
      id: 1,
      homeTeam: {
        name: "London Ágyúk",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t3.png"
      },
      awayTeam: {
        name: "Liverpool",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t14.png"
      },
      date: "2023-05-15T15:00:00",
      winProbability: {
        home: 45,
        draw: 25,
        away: 30
      }
    },
    {
      id: 2,
      homeTeam: {
        name: "Chelsea",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t8.png"
      },
      awayTeam: {
        name: "Tottenham",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t6.png"
      },
      date: "2023-05-16T19:30:00",
      winProbability: {
        home: 40,
        draw: 30,
        away: 30
      }
    },
    {
      id: 3,
      homeTeam: {
        name: "Manchester Kék",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t43.png"
      },
      awayTeam: {
        name: "Newcastle",
        logo: "https://resources.premierleague.com/premierleague/badges/50/t4.png"
      },
      date: "2023-05-17T18:00:00",
      winProbability: {
        home: 55,
        draw: 25,
        away: 20
      }
    }
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('hu-HU', {
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString('hu-HU', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <Card className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 shadow-none animate-fade-in" style={{ animationDelay: '0.4s' }}>
      <CardContent className="p-0">
        <div className="p-5 border-b border-white/5">
          <h3 className="text-lg font-semibold text-white">Közelgő mérkőzések</h3>
        </div>
        <div className="space-y-4 p-5">
          {upcomingMatches.map((match) => (
            <div key={match.id} className="bg-black/20 rounded-lg p-4 border border-white/5">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center text-xs text-gray-400 gap-2">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{formatDate(match.date)}</span>
                </div>
                <div className="flex items-center text-xs text-gray-400 gap-2">
                  <Clock className="h-3.5 w-3.5" />
                  <span>{formatTime(match.date)}</span>
                </div>
              </div>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <img src={match.homeTeam.logo} alt={match.homeTeam.name} className="w-8 h-8" />
                  <span className="font-medium text-white">{match.homeTeam.name}</span>
                </div>
                <span className="text-gray-400 font-bold">vs</span>
                <div className="flex items-center gap-3">
                  <span className="font-medium text-white">{match.awayTeam.name}</span>
                  <img src={match.awayTeam.logo} alt={match.awayTeam.name} className="w-8 h-8" />
                </div>
              </div>
              
              <div className="flex space-x-2">
                <div className="flex-1">
                  <div className="h-1.5 w-full bg-gray-700/50 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-emerald-500 rounded-full" 
                      style={{ width: `${match.winProbability.home}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-emerald-400">H: {match.winProbability.home}%</span>
                    <span className="text-xs text-amber-400">D: {match.winProbability.draw}%</span>
                    <span className="text-xs text-blue-400">V: {match.winProbability.away}%</span>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="bg-blue-500/10 border-blue-500/30 hover:bg-blue-500/20 text-xs px-3">
                  Tippelés
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 text-center border-t border-white/5">
          <button className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
            Összes mérkőzés megtekintése
          </button>
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingMatchesCard;
