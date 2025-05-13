
import React from 'react';
import { Trophy } from 'lucide-react';
import { Team } from '../../data/premier-league-teams';
import TeamList from './TeamList';
import SelectedTeamsDisplay from './SelectedTeamsDisplay';

interface TeamListSectionProps { 
  teams: Team[];
  teamsToCompare: Team[];
  favoriteTeams: string[];
  handleTeamClick: (team: Team) => void;
  handleCompareTeam: (team: Team) => void;
  toggleFavorite: (teamId: string) => void;
  setTeamsToCompare: (teams: Team[]) => void;
}

const TeamListSection: React.FC<TeamListSectionProps> = ({ 
  teams,
  teamsToCompare,
  favoriteTeams,
  handleTeamClick,
  handleCompareTeam,
  toggleFavorite,
  setTeamsToCompare
}) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-400" />
          <h2 className="text-xl font-bold text-white">Premier League csapatok</h2>
        </div>
        
        <SelectedTeamsDisplay 
          teamsToCompare={teamsToCompare} 
          setTeamsToCompare={setTeamsToCompare}
        />
      </div>
      
      <TeamList 
        teams={teams}
        teamsToCompare={teamsToCompare}
        favoriteTeams={favoriteTeams}
        handleTeamClick={handleTeamClick}
        handleCompareTeam={handleCompareTeam}
        toggleFavorite={toggleFavorite}
      />
    </div>
  );
};

export default TeamListSection;
