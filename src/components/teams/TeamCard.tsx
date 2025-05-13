
import React from 'react';
import { Team } from '../../data/premier-league-teams';
import { Shield, Users, Trophy, BarChart, ChevronRight } from 'lucide-react';

interface TeamCardProps {
  team: Team;
  onClick: (team: Team) => void;
}

const TeamCard: React.FC<TeamCardProps> = ({ team, onClick }) => {
  // Statisztikai elemek egyszerűbb kezeléséhez
  const statItems = [
    { 
      icon: <Users className="h-4 w-4 text-blue-400 mb-1" />, 
      label: "Játékosok", 
      value: "26" 
    },
    { 
      icon: <Trophy className="h-4 w-4 text-amber-400 mb-1" />, 
      label: "Trófeák", 
      value: "12" 
    },
    { 
      icon: <BarChart className="h-4 w-4 text-emerald-400 mb-1" />, 
      label: "Rang", 
      value: "#4" 
    }
  ];

  return (
    <div 
      className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-5 hover:border-blue-500/20 transition-all duration-300 group cursor-pointer"
      onClick={() => onClick(team)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-md overflow-hidden bg-gradient-to-br from-black/40 to-black/20 p-1 flex items-center justify-center border border-white/5">
            <img
              src={team.logoUrl}
              alt={`${team.name} logo`}
              className="h-10 w-10 object-contain"
            />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white truncate">{team.name}</h3>
            <div className="flex items-center gap-1 mt-1">
              <Shield className="h-3.5 w-3.5 text-blue-400" />
              <span className="text-xs text-blue-400 font-medium">{team.league}</span>
            </div>
          </div>
        </div>
        <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
          <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-400" />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 mt-4">
        {statItems.map((item, index) => (
          <div key={index} className="flex flex-col items-center bg-white/5 rounded-lg px-3 py-2.5">
            {item.icon}
            <p className="text-xs text-gray-400">{item.label}</p>
            <p className="text-lg font-semibold text-white">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
