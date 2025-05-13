
import React from 'react';
import { Calendar, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

interface MatchFiltersProps {
  onFilterChange: (filter: string) => void;
  activeFilter: string;
}

const MatchFilters: React.FC<MatchFiltersProps> = ({ onFilterChange, activeFilter }) => {
  return (
    <div className="bg-gradient-to-br from-gray-900/60 to-gray-900/40 backdrop-blur-md border border-white/5 rounded-xl p-4 mb-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-blue-400" />
          <h3 className="text-sm font-medium text-white">Mérkőzés szűrők</h3>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <div className="w-full sm:w-auto">
            <Select value={activeFilter} onValueChange={onFilterChange}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white w-full sm:w-[180px]">
                <SelectValue placeholder="Összes mérkőzés" />
              </SelectTrigger>
              <SelectContent className="bg-gray-900 text-white border-white/10">
                <SelectItem value="all">Összes mérkőzés</SelectItem>
                <SelectItem value="upcoming">Közelgő mérkőzések</SelectItem>
                <SelectItem value="live">Élő mérkőzések</SelectItem>
                <SelectItem value="completed">Befejezett mérkőzések</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <Button 
            variant="outline" 
            size="sm"
            className="bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white flex gap-2 items-center"
          >
            <Calendar className="h-3.5 w-3.5 text-blue-400" />
            <span>Dátum</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MatchFilters;
