
import { useState, useEffect, useMemo } from 'react';
import { Team } from '@/types/team';

interface FilterOptions {
  searchTerm: string;
  league: string;
  country: string;
  sort: 'name' | 'rank' | 'founded' | 'winRate';
}

const defaultOptions: FilterOptions = {
  searchTerm: '',
  league: '',
  country: '',
  sort: 'name'
};

export const useTeamFilters = (teams: Team[]) => {
  const [filters, setFilters] = useState<FilterOptions>(defaultOptions);
  
  // Extract unique values for filter dropdowns
  const leagues = useMemo(() => {
    const uniqueLeagues = new Set<string>();
    teams.forEach(team => {
      if (team.league) {
        uniqueLeagues.add(team.league);
      }
    });
    return Array.from(uniqueLeagues).sort();
  }, [teams]);
  
  const countries = useMemo(() => {
    const uniqueCountries = new Set<string>();
    teams.forEach(team => {
      if (team.country) {
        uniqueCountries.add(team.country);
      }
    });
    return Array.from(uniqueCountries).sort();
  }, [teams]);
  
  // Apply filters and sorting
  const filteredTeams = useMemo(() => {
    return teams.filter(team => {
      // Apply text search
      if (filters.searchTerm && !team.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
        return false;
      }
      
      // Apply league filter
      if (filters.league && team.league !== filters.league) {
        return false;
      }
      
      // Apply country filter
      if (filters.country && team.country !== filters.country) {
        return false;
      }
      
      return true;
    }).sort((a, b) => {
      // Apply sorting
      switch (filters.sort) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'founded':
          const aFounded = a.founded || 0;
          const bFounded = b.founded || 0;
          return aFounded - bFounded;
        case 'rank':
          const aRank = a.stats?.rank || 0;
          const bRank = b.stats?.rank || 0;
          return aRank - bRank;
        case 'winRate':
          const aWinRate = a.stats?.winRate || 0;
          const bWinRate = b.stats?.winRate || 0;
          return bWinRate - aWinRate;
        default:
          return 0;
      }
    });
  }, [teams, filters]);
  
  // Reset filters
  const resetFilters = () => setFilters(defaultOptions);
  
  // Update individual filters
  const updateFilter = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };
  
  return {
    filters,
    filteredTeams,
    leagues,
    countries,
    updateFilter,
    resetFilters
  };
};

export default useTeamFilters;
