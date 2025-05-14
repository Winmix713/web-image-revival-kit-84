
import { useState, useEffect, useMemo } from 'react';
// Fix the import to use the correct type
import type { Team } from '@/types';

export interface FilterOptions {
  league: string;
  country: string;
}

export const useTeamFilters = (teams: Team[]) => {
  const [filters, setFilters] = useState<FilterOptions>({
    league: '',
    country: ''
  });

  // Extract unique leagues and countries from teams
  const leagues = useMemo(() => 
    Array.from(new Set(teams.map(team => team.league || ''))).filter(Boolean).sort(),
  [teams]);
  
  const countries = useMemo(() => 
    Array.from(new Set(teams.map(team => team.country || ''))).filter(Boolean).sort(),
  [teams]);

  // Filter teams based on selected filters
  const filteredTeams = useMemo(() => {
    return teams.filter(team => {
      const matchesLeague = !filters.league || team.league === filters.league;
      const matchesCountry = !filters.country || team.country === filters.country;
      return matchesLeague && matchesCountry;
    });
  }, [teams, filters]);

  const updateFilter = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const resetFilters = () => {
    setFilters({ league: '', country: '' });
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
