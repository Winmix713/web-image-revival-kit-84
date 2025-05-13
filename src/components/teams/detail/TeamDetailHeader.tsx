
import React from 'react';
import { ArrowLeft, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Team } from '../../../data/premier-league-teams';

interface TeamDetailHeaderProps {
  team: Team;
  onClose: () => void;
}

const TeamDetailHeader: React.FC<TeamDetailHeaderProps> = ({ team, onClose }) => {
  return (
    <div className="p-4 flex justify-between items-center border-b border-white/10">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onClose}
        className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
      >
        <ArrowLeft className="h-4 w-4 text-gray-400" />
      </Button>
      <h3 className="text-lg font-semibold text-white">Csapat részletek</h3>
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={onClose}
        className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"
      >
        <X className="h-4 w-4 text-gray-400" />
      </Button>
    </div>
  );
};

export default TeamDetailHeader;
