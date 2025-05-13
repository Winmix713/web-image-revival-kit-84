
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface TeamStatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | number;
  iconColor?: string;
}

const TeamStatItem: React.FC<TeamStatItemProps> = ({ 
  icon, 
  label, 
  value, 
  iconColor = 'text-blue-400' 
}) => {
  return (
    <div className="flex flex-col items-center bg-white/5 rounded-lg px-3 py-2.5">
      <div className={`${iconColor} mb-1`}>
        {icon}
      </div>
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-lg font-semibold text-white">{value}</p>
    </div>
  );
};

export default TeamStatItem;
