
import React from 'react';

interface TeamDetailTabsProps {
  activeTab: 'overview' | 'players' | 'stats';
  setActiveTab: (tab: 'overview' | 'players' | 'stats') => void;
}

const TeamDetailTabs: React.FC<TeamDetailTabsProps> = ({ activeTab, setActiveTab }) => {
  return (
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
  );
};

export default TeamDetailTabs;
