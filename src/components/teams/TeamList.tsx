
import React from 'react';
import { Star, GitCompare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Team } from '../../data/premier-league-teams';
import TeamCard from './TeamCard';
import { createGrid } from '@/lib/grid-utils';

interface TeamListProps {
  teams: Team[];
  teamsToCompare: Team[];
  favoriteTeams: string[];
  handleTeamClick: (team: Team) => void;
  handleCompareTeam: (team: Team) => void;
  toggleFavorite: (teamId: string) => void;
}

const TeamList: React.FC<TeamListProps> = ({ 
  teams, 
  teamsToCompare, 
  favoriteTeams, 
  handleTeamClick, 
  handleCompareTeam, 
  toggleFavorite 
}) => {
  return (
    <div className={createGrid("teams")}>
      {teams.map((team) => (
        <TeamItem 
          key={team.id}
          team={team}
          isFavorite={favoriteTeams.includes(team.id)}
          isSelected={teamsToCompare.some(t => t.id === team.id)}
          onTeamClick={handleTeamClick}
          onCompare={handleCompareTeam}
          onToggleFavorite={toggleFavorite}
          isCompareDisabled={teamsToCompare.length === 2 && !teamsToCompare.some(t => t.id === team.id)}
        />
      ))}
    </div>
  );
};

// Component for individual team item
const TeamItem = ({ 
  team, 
  isFavorite, 
  isSelected,
  onTeamClick, 
  onCompare, 
  onToggleFavorite,
  isCompareDisabled
}: { 
  team: Team, 
  isFavorite: boolean,
  isSelected: boolean,
  onTeamClick: (team: Team) => void, 
  onCompare: (team: Team) => void,
  onToggleFavorite: (teamId: string) => void,
  isCompareDisabled: boolean
}) => {
  return (
    <div className="relative group">
      <Button
        variant="ghost" 
        size="icon"
        className={`absolute top-2 right-2 z-10 h-8 w-8 rounded-full ${
          isFavorite ? 'bg-amber-500/20' : 'bg-white/10'
        } hover:bg-white/20`}
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite(team.id);
        }}
      >
        <Star className={`h-4 w-4 ${
          isFavorite ? 'text-amber-400 fill-amber-400' : 'text-gray-400'
        }`} />
      </Button>
      <div 
        className="absolute bottom-0 left-0 right-0 h-0 bg-blue-500/20 transition-all duration-300 group-hover:h-full opacity-0 group-hover:opacity-100"
        onClick={() => onTeamClick(team)}
      >
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
            onClick={(e) => {
              e.stopPropagation();
              onTeamClick(team);
            }}
          >
            Részletek
          </Button>
          <Button 
            size="sm"
            variant="outline"
            className="bg-white/10 border-white/10 hover:bg-white/20 text-white"
            onClick={(e) => {
              e.stopPropagation();
              onCompare(team);
            }}
            disabled={isCompareDisabled}
          >
            {isSelected ? 'Kiválasztva' : 'Összehasonlítás'}
          </Button>
        </div>
      </div>
      
      <TeamCard team={team} onClick={onTeamClick} />
    </div>
  );
};

export default TeamList;
