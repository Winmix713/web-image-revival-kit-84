
import { Player } from "../components/teams/PlayerCard";

export interface TeamPerformance {
  period: string; // Could be month, season, etc.
  points: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  form: string; // e.g. "WWDLW"
  position: number;
}

export interface TeamStats {
  totalMatches: number;
  wins: number;
  draws: number;
  losses: number;
  goalsFor: number;
  goalsAgainst: number;
  cleanSheets: number;
  points: number;
  winPercentage: number;
  formLastFive: string;
}

export interface TeamSquad {
  players: Player[];
  averageAge: number;
  totalValue: string;
  foreignPlayers: number;
  domesticPlayers: number;
}

export interface TeamComparisonData {
  teamA: {
    id: string;
    name: string;
    stats: TeamStats;
  };
  teamB: {
    id: string;
    name: string;
    stats: TeamStats;
  };
  headToHead: {
    totalMatches: number;
    teamAWins: number;
    teamBWins: number;
    draws: number;
    recentMatches: Array<{
      date: string;
      homeTeam: string;
      awayTeam: string;
      homeScore: number;
      awayScore: number;
      winner: 'home' | 'away' | 'draw';
    }>;
  };
}
