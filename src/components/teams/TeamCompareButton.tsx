
import React from 'react';
import { GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Team } from '../../data/premier-league-teams';

interface TeamCompareButtonProps {
  teamsToCompare: Team[];
  showComparison: boolean;
  setShowComparison: (show: boolean) => void;
}

const TeamCompareButton: React.FC<TeamCompareButtonProps> = ({ 
  teamsToCompare, 
  showComparison,
  setShowComparison 
}) => {
  return (
    <Button 
      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-10"
      onClick={() => {
        if (teamsToCompare.length === 2) {
          setShowComparison(true);
        }
      }}
      disabled={teamsToCompare.length !== 2}
    >
      <GitCompare className="h-4 w-4 mr-2" />
      Összehasonlítás
      {teamsToCompare.length > 0 && (
        <span className="ml-1 bg-white/20 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {teamsToCompare.length}
        </span>
      )}
    </Button>
  );
};

export default TeamCompareButton;
