
import { useState, useMemo } from 'react';
import type { Match } from '../components/leaguem/types';

interface SortConfig {
  key: string;
  direction: 'asc' | 'desc';
}

interface Filters {
  team?: string;
  round?: string;
  date?: {
    from?: string;
    to?: string;
  };
}

export function useMatchFiltering(matches: Match[]) {
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);
  const [filters, setFilters] = useState<Filters>({});

  const sortedMatches = useMemo(() => {
    let sortableMatches = [...matches];
    
    // Apply filters
    if (filters.team) {
      sortableMatches = sortableMatches.filter(
        match => match.home_team.includes(filters.team!) || match.away_team.includes(filters.team!)
      );
    }
    
    if (filters.round) {
      sortableMatches = sortableMatches.filter(match => match.round === filters.round);
    }
    
    if (filters.date?.from) {
      const fromDate = new Date(filters.date.from);
      sortableMatches = sortableMatches.filter(match => new Date(match.date) >= fromDate);
    }
    
    if (filters.date?.to) {
      const toDate = new Date(filters.date.to);
      sortableMatches = sortableMatches.filter(match => new Date(match.date) <= toDate);
    }
    
    // Apply sorting
    if (sortConfig !== null) {
      sortableMatches.sort((a, b) => {
        if (a[sortConfig.key as keyof Match] < b[sortConfig.key as keyof Match]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key as keyof Match] > b[sortConfig.key as keyof Match]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }
    
    return sortableMatches;
  }, [matches, sortConfig, filters]);

  const requestSort = (key: string) => {
    let direction: 'asc' | 'desc' = 'asc';
    
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    
    setSortConfig({ key, direction });
  };

  // Group matches by round
  const matchesByRound = useMemo(() => {
    return sortedMatches.reduce<Record<string, Match[]>>((groups, match) => {
      const round = match.round || 'Unknown Round';
      if (!groups[round]) {
        groups[round] = [];
      }
      groups[round].push(match);
      return groups;
    }, {});
  }, [sortedMatches]);

  return { sortedMatches, matchesByRound, requestSort, setFilters, sortConfig };
}
