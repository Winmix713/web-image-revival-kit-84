
import { useState, useEffect, useCallback } from 'react';
import { Team } from '../data/premier-league-teams';

export const useTeamFilters = (teams: Team[]) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<string>('name');
  const [filterType, setFilterType] = useState<string | null>(null);
  
  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };
  
  const handleSortChange = (sortType: string) => {
    setSortBy(sortType);
  };
  
  const handleFilterChange = (filter: string | null) => {
    setFilterType(filter);
  };
  
  const filteredTeams = useCallback(() => {
    return teams.filter((team) => {
      const matchesSearch = team.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      if (!filterType) return matchesSearch;
      
      switch (filterType) {
        case 'trophies':
          return matchesSearch && team.stats?.trophies > 0;
        case 'international':
          // Example filter for international teams
          return matchesSearch && team.country !== 'England';
        case 'favorites':
          // This would be implemented with the actual favorites logic
          return matchesSearch;
        default:
          return matchesSearch;
      }
    }).sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'founded':
          return (a.founded || 0) - (b.founded || 0);
        case 'trophies':
          return (b.stats?.trophies || 0) - (a.stats?.trophies || 0);
        default:
          return 0;
      }
    });
  }, [teams, searchQuery, filterType, sortBy]);
  
  return {
    searchQuery,
    filteredTeams: filteredTeams(),
    handleSearchChange,
    handleSortChange,
    handleFilterChange,
    filterType,
    sortBy
  };
};
