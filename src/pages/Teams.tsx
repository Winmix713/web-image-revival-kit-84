
import { useState } from "react";
import { Filter, Search } from "lucide-react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import TeamGrid from "@/components/teams/TeamGrid";
import TeamFilterBar from "@/components/teams/TeamFilterBar";
import SelectedTeamsDisplay from "@/components/teams/SelectedTeamsDisplay";
import { Button } from "@/components/ui/button";
import { useTeamSelection } from "@/hooks/useTeamSelection";
import useTeamFilters from "@/hooks/useTeamFilters";
import { teams } from "@/data/teams";

const Teams = () => {
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { selectedTeams, toggleTeam, clearSelection, isSelected } = useTeamSelection();
  const teamFilters = useTeamFilters(teams);
  
  // Add the missing functions for search
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const filteredBySearch = teamFilters.filteredTeams.filter(
    team => team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <AppLayout backgroundVariant="vibrant">
      <PageHeader
        title="Teams"
        description="Browse and select teams to view performance data"
        icon={Search}
      />

      <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-8">
        <div className="relative w-full lg:w-96">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search teams..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full bg-white/5 text-white border border-white/10 rounded-lg pl-10 pr-4 py-3
              focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent
              transition-all duration-200 placeholder:text-gray-500"
          />
        </div>

        <Button
          onClick={() => setShowFilters(!showFilters)}
          variant="outline"
          className="bg-white/5 border-white/10 text-white hover:bg-white/10 flex gap-2"
        >
          <Filter className="h-4 w-4" />
          {showFilters ? "Hide Filters" : "Show Filters"}
        </Button>
      </div>

      {showFilters && (
        <TeamFilterBar
          filters={teamFilters.filters}
          leagues={teamFilters.leagues}
          countries={teamFilters.countries}
          onFilterChange={teamFilters.updateFilter}
          onReset={teamFilters.resetFilters}
        />
      )}

      {selectedTeams.length > 0 && (
        <SelectedTeamsDisplay
          selectedTeams={selectedTeams}
          onClearSelection={clearSelection}
        />
      )}

      <TeamGrid
        teams={filteredBySearch}
        onToggleTeam={toggleTeam}
        isSelected={isSelected}
      />
    </AppLayout>
  );
};

export default Teams;
