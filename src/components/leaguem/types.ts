
export interface Match {
  date: string;
  home_team: string;
  away_team: string;
  ht_home_score: number;
  ht_away_score: number;
  home_score: number;
  away_score: number;
  round?: string;
}

export interface TeamForm {
  team: string;
  form: ('W' | 'D' | 'L')[];
  position: number;
  played: number;
  goalsFor: number;
  goalsAgainst: number;
  points: number;
}

export interface LeagueData {
  id: string;
  name: string;
  season: string;
  status: 'in-progress' | 'completed';
  winner?: string;
  secondPlace?: string;
  thirdPlace?: string;
  teams?: TeamInfo[];
}

export interface TeamInfo {
  id: string;
  name: string;
  logo: string;
}

export interface TeamStanding {
  team: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
}
