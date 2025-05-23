
import React from 'react';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface TeamDetailFooterProps {
  onClose: () => void;
}

const TeamDetailFooter: React.FC<TeamDetailFooterProps> = ({ onClose }) => {
  return (
    <div className="p-4 border-t border-white/10 flex justify-end">
      <Button 
        onClick={onClose} 
        variant="default"
        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
      >
        <X className="h-4 w-4 mr-2" />
        Bezárás
      </Button>
    </div>
  );
};

export default TeamDetailFooter;
