
import React from 'react';
import { Shield, Users, Trophy, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Team } from '../../../data/premier-league-teams';

interface TeamInfoPanelProps {
  team: Team;
  onCompare: (team: Team) => void;
}

const TeamInfoPanel: React.FC<TeamInfoPanelProps> = ({ team, onCompare }) => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="h-20 w-20 rounded-md overflow-hidden bg-gradient-to-br from-black/40 to-black/20 p-2 flex items-center justify-center border border-white/10">
        <img 
          src={team.logoUrl} 
          alt={`${team.name} logo`} 
          className="h-14 w-14 object-contain"
        />
      </div>
      <div className="flex-1">
        <h2 className="text-2xl font-bold text-white">{team.name}</h2>
        <div className="flex items-center gap-1 mt-1">
          <Shield className="h-3.5 w-3.5 text-blue-400" />
          <span className="text-xs text-blue-400 font-medium">Premier League</span>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <div className="bg-white/5 rounded-full px-3 py-1 flex items-center gap-1">
            <Users className="h-3.5 w-3.5 text-gray-400" />
            <span className="text-xs text-gray-300">26 játékos</span>
          </div>
          <div className="bg-white/5 rounded-full px-3 py-1 flex items-center gap-1">
            <Trophy className="h-3.5 w-3.5 text-amber-400" />
            <span className="text-xs text-gray-300">12 trófea</span>
          </div>
          <Button
            onClick={() => onCompare(team)}
            className="bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 text-xs px-3 py-1 h-auto rounded-full"
          >
            <GitCompare className="h-3.5 w-3.5 mr-1" />
            Összehasonlítás
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamInfoPanel;
