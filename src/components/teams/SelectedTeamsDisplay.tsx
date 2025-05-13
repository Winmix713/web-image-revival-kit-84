
import React from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Team } from '../../data/premier-league-teams';

interface SelectedTeamsDisplayProps {
  teamsToCompare: Team[];
  setTeamsToCompare: (teams: Team[]) => void;
}

const SelectedTeamsDisplay: React.FC<SelectedTeamsDisplayProps> = ({ 
  teamsToCompare, 
  setTeamsToCompare 
}) => {
  if (teamsToCompare.length === 0) return null;
  
  return (
    <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5">
      <div className="flex items-center space-x-1">
        {teamsToCompare.map((team, index) => (
          <div key={index} className="flex items-center">
            <img 
              src={team.logoUrl} 
              alt={team.name} 
              className="h-6 w-6 object-contain" 
            />
            <span className="text-xs text-white ml-1 mr-2">{team.name}</span>
          </div>
        ))}
      </div>
      <Button 
        variant="ghost" 
        size="sm" 
        className="h-6 w-6 p-0 rounded-full"
        onClick={() => setTeamsToCompare([])}
      >
        <X className="h-3 w-3 text-gray-400" />
      </Button>
    </div>
  );
};

export default SelectedTeamsDisplay;
