
// Import existing type definitions
export * from './component-export';
export * from './integration';
export * from './navigation';
export * from './routes';
export * from './team';
export * from './league';

// Add Team type definition
export interface Team {
  id: number;
  name: string;
  logo?: string;
  league?: string;
  country?: string;
  position?: number;
  form?: string;
  stats?: {
    played: number;
    wins: number;
    draws: number;
    losses: number;
    goalsFor: number;
    goalsAgainst: number;
  };
}
