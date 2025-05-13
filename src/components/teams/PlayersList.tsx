
import React, { useState } from 'react';
import PlayerCard, { Player } from './PlayerCard';
import { User, Filter, Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface PlayersListProps {
  teamId: string;
  teamName: string;
}

const PlayersList: React.FC<PlayersListProps> = ({ teamId, teamName }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [positionFilter, setPositionFilter] = useState('All');

  // Mock player data - in a real app, this would come from an API
  const players: Player[] = [
    {
      id: 1,
      name: 'Kapus Gábor',
      position: 'Goalkeeper',
      number: 1,
      nationality: 'Magyar',
      stats: { appearances: 18, cleanSheets: 6, saves: 72 }
    },
    {
      id: 2,
      name: 'Védő Viktor',
      position: 'Defender',
      number: 4,
      nationality: 'Magyar',
      stats: { appearances: 22, goals: 1, assists: 2 }
    },
    {
      id: 3,
      name: 'Középpályás Károly',
      position: 'Midfielder',
      number: 8,
      nationality: 'Román',
      stats: { appearances: 24, goals: 3, assists: 7 }
    },
    {
      id: 4,
      name: 'Támadó Tamás',
      position: 'Forward',
      number: 9,
      nationality: 'Magyar',
      stats: { appearances: 20, goals: 12, assists: 4 }
    },
    {
      id: 5,
      name: 'Balhátvéd Balázs',
      position: 'Defender',
      number: 3,
      nationality: 'Szerb',
      stats: { appearances: 16, goals: 0, assists: 1 }
    },
    {
      id: 6,
      name: 'Jobbhátvéd János',
      position: 'Defender',
      number: 2,
      nationality: 'Magyar',
      stats: { appearances: 21, goals: 0, assists: 3 }
    },
    {
      id: 7,
      name: 'Támadó Tibor',
      position: 'Forward',
      number: 11,
      nationality: 'Horvát',
      stats: { appearances: 19, goals: 8, assists: 2 }
    },
    {
      id: 8,
      name: 'Középpályás Kristóf',
      position: 'Midfielder',
      number: 6,
      nationality: 'Magyar',
      stats: { appearances: 23, goals: 2, assists: 4 }
    }
  ];

  const positions = ['All', 'Goalkeeper', 'Defender', 'Midfielder', 'Forward'];
  
  const filteredPlayers = players.filter(player => {
    const matchesSearch = player.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition = positionFilter === 'All' || player.position === positionFilter;
    return matchesSearch && matchesPosition;
  });

  const positionTranslations: {[key: string]: string} = {
    'Goalkeeper': 'Kapus',
    'Defender': 'Védő',
    'Midfielder': 'Középpályás',
    'Forward': 'Támadó',
    'All': 'Összes'
  };

  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center">
            <User className="h-4 w-4 text-blue-400" />
          </div>
          <h2 className="text-lg font-bold text-white">{teamName} játékosok</h2>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30 w-[200px]"
              placeholder="Játékos keresése..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="relative inline-block">
            <button className="flex items-center justify-center h-10 px-4 rounded-md bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-white">
              <Filter className="h-4 w-4 text-gray-400 mr-2" />
              <span className="text-sm">{positionTranslations[positionFilter]}</span>
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg overflow-hidden z-20 border border-white/10 hidden group-focus:block">
              {positions.map((position) => (
                <button
                  key={position}
                  className="block w-full text-left px-4 py-2 text-sm text-white hover:bg-white/10 transition-colors"
                  onClick={() => setPositionFilter(position)}
                >
                  {positionTranslations[position]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredPlayers.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>
      
      {filteredPlayers.length === 0 && (
        <div className="py-12 text-center">
          <p className="text-gray-400">Nincs találat a keresési feltételeknek megfelelően</p>
        </div>
      )}
    </div>
  );
};

export default PlayersList;
