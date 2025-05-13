
import React, { useState } from 'react';
import { Team } from '../../data/premier-league-teams';
import { Shield, Users, Trophy, BarChart, X, Clock, Calendar, ArrowLeft, ChartBar, User, GitCompare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PlayersList from './PlayersList';
import PerformanceChart from './PerformanceChart';
import TeamDetailHeader from './detail/TeamDetailHeader';
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
          
          <div className="flex gap-2 border-b border-white/10 mb-6">
            <button 
              className={`px-4 py-2 text-sm font-medium relative ${activeTab === 'overview' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('overview')}
            >
              Áttekintés
              {activeTab === 'overview' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
              )}
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium relative ${activeTab === 'players' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('players')}
            >
              Játékosok
              {activeTab === 'players' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
              )}
            </button>
            <button 
              className={`px-4 py-2 text-sm font-medium relative ${activeTab === 'stats' ? 'text-white' : 'text-gray-400 hover:text-gray-300'}`}
              onClick={() => setActiveTab('stats')}
            >
              Statisztikák
              {activeTab === 'stats' && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500"></div>
              )}
            </button>
          </div>
          
          {activeTab === 'overview' && <TeamOverview teamId={team.id} teamName={team.name} />}
          
          {activeTab === 'players' && (
            <PlayersList teamId={team.id} teamName={team.name} />
          )}
          
          {activeTab === 'stats' && (
            <PerformanceChart teamId={team.id} teamName={team.name} />
          )}
        </div>
        
        <div className="p-4 border-t border-white/10 flex justify-end">
          <Button 
            onClick={onClose} 
            className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white"
          >
            Bezárás
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TeamDetail;
