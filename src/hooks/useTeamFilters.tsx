
import { useState, useMemo } from 'react';
import { Team } from '../data/premier-league-teams';

export const useTeamFilters = (teams: Team[]) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  
  const filteredTeams = useMemo(() => {
    return teams.filter(team => 
      team.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [teams, searchQuery]);

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const handleFilterChange = (filter: string | null) => {
    setActiveFilter(filter === activeFilter ? null : filter);
  };

  return {
    searchQuery,
    activeFilter,
    filteredTeams,
    handleSearchChange,
    handleFilterChange
  };
};
