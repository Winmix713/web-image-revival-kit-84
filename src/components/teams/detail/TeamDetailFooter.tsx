
import React from 'react';
import { Button } from '@/components/ui/button';

interface TeamDetailFooterProps {
  onClose: () => void;
}

const TeamDetailFooter: React.FC<TeamDetailFooterProps> = ({ onClose }) => {
  return (
    <div className="p-4 border-t border-white/10 flex justify-end">
      <Button 
        onClick={onClose} 
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
      >
        Bezárás
      </Button>
    </div>
  );
};

export default TeamDetailFooter;
