
import React from 'react';
import { Search, Filter, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';

interface FilterButton {
  icon: React.ReactNode;
  label: string;
}

interface TeamFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterOpen: boolean;
  setFilterOpen: (open: boolean) => void;
  filterButtons: FilterButton[];
}

const TeamFilterBar: React.FC<TeamFilterBarProps> = ({
  searchQuery,
  setSearchQuery,
  filterOpen,
  setFilterOpen,
  filterButtons
}) => {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          className="pl-10 bg-white/5 border-white/10 text-white w-[240px] focus-visible:ring-blue-500/30"
          placeholder="Csapat keresése..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Collapsible open={filterOpen} onOpenChange={setFilterOpen}>
        <CollapsibleTrigger asChild>
          <Button variant="outline" size="icon" className="bg-white/5 border-white/10 hover:bg-white/10">
            <Filter className="h-4 w-4 text-gray-400" />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="absolute z-10 mt-2 p-4 bg-gray-900/90 backdrop-blur-lg border border-white/10 rounded-lg shadow-xl w-[300px] right-0">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-sm font-medium text-white">Szűrők</h3>
            <Button 
              variant="ghost" 
              size="sm" 
              className="h-7 w-7 p-0" 
              onClick={() => setFilterOpen(false)}
            >
              <X className="h-4 w-4 text-gray-400" />
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {filterButtons.map((button, index) => (
              <Button
                key={index}
                variant="outline"
                className="bg-white/5 border-white/10 hover:bg-white/10 justify-start"
              >
                {button.icon}
                <span className="ml-2 text-sm">{button.label}</span>
              </Button>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};

export default TeamFilterBar;
