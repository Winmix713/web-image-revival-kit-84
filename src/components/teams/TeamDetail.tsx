
import React, { useState } from 'react';
import { Team } from '../../data/premier-league-teams';
import PlayersList from './PlayersList';
import PerformanceChart from './PerformanceChart';
import TeamDetailHeader from './detail/TeamDetailHeader';
import TeamInfoPanel from './detail/TeamInfoPanel';
import TeamDetailTabs from './detail/TeamDetailTabs';
import TeamDetailFooter from './detail/TeamDetailFooter';
import TeamOverview from './detail/TeamOverview';

interface TeamDetailProps {
  team: Team;
  onClose: () => void;
  onCompare: (team: Team) => void;
}

const TeamDetail: React.FC<TeamDetailProps> = ({ team, onClose, onCompare }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'players' | 'stats'>('overview');
  
  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in">
      <div className="bg-gradient-to-br from-gray-900/90 to-gray-900/80 border border-white/10 rounded-2xl w-full max-w-6xl h-[90vh] shadow-2xl animate-scale-up flex flex-col">
        <TeamDetailHeader team={team} onClose={onClose} />
        
        <div className="p-6 flex-1 overflow-auto">
          <TeamInfoPanel team={team} onCompare={onCompare} />
          
          <TeamDetailTabs activeTab={activeTab} setActiveTab={setActiveTab} />
          
          {activeTab === 'overview' && <TeamOverview teamId={team.id} teamName={team.name} />}
          
          {activeTab === 'players' && (
            <PlayersList teamId={team.id} teamName={team.name} />
          )}
          
          {activeTab === 'stats' && (
            <PerformanceChart teamId={team.id} teamName={team.name} />
          )}
        </div>
        
        <TeamDetailFooter onClose={onClose} />
      </div>
    </div>
  );
};

export default TeamDetail;
