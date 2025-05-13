
import React from 'react';
import { Team } from '../../data/premier-league-teams';
import TeamCard from './TeamCard';

interface TeamGridProps {
  teams: Team[];
  onTeamClick: (team: Team) => void;
}

const TeamGrid: React.FC<TeamGridProps> = ({ teams, onTeamClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          team={team}
          onClick={onTeamClick}
        />
      ))}
    </div>
  );
};

export default TeamGrid;
