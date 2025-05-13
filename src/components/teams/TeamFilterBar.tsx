
import React from 'react';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';

interface TeamFilterBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  filterOpen: boolean;
  setFilterOpen: (open: boolean) => void;
  filterButtons: { icon: React.ReactNode, label: string }[];
}

const TeamFilterBar: React.FC<TeamFilterBarProps> = ({ 
  searchQuery, 
  setSearchQuery, 
  filterOpen, 
  setFilterOpen, 
  filterButtons 
}) => {
  return (
    <div className="flex items-center gap-3">
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <FilterDropdown 
        filterButtons={filterButtons} 
        filterOpen={filterOpen} 
        setFilterOpen={setFilterOpen} 
      />
    </div>
  );
};

// Component for search bar
const SearchBar = ({ 
  searchQuery, 
  setSearchQuery 
}: { 
  searchQuery: string, 
  setSearchQuery: (query: string) => void 
}) => {
  return (
    <div className="relative w-full md:w-64">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30 w-full"
        placeholder="Csapat keresése..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </div>
  );
};

// Component for filter dropdown
const FilterDropdown = ({ 
  filterButtons, 
  filterOpen, 
  setFilterOpen 
}: { 
  filterButtons: { icon: React.ReactNode, label: string }[], 
  filterOpen: boolean, 
  setFilterOpen: (open: boolean) => void 
}) => {
  return (
    <DropdownMenu open={filterOpen} onOpenChange={setFilterOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="h-10 bg-white/5 border-white/10 hover:bg-white/10">
          <Filter className="h-4 w-4 text-gray-400" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-gray-900 border border-white/10">
        {filterButtons.map((button, index) => (
          <DropdownMenuItem key={index} className="text-white hover:bg-white/10 cursor-pointer">
            <div className="flex items-center gap-2">
              {button.icon}
              <span>{button.label}</span>
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TeamFilterBar;
