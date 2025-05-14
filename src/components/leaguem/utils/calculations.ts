
import type { Match, TeamStanding, TeamForm } from '../types';

export function calculateStandings(matches: Match[]): TeamStanding[] {
  const standings: Record<string, TeamStanding> = {};

  // Process each match to build standings
  matches.forEach(match => {
    // Initialize teams if they don't exist in standings
    if (!standings[match.home_team]) {
      standings[match.home_team] = {
        team: match.home_team,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      };
    }
    
    if (!standings[match.away_team]) {
      standings[match.away_team] = {
        team: match.away_team,
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        goalDifference: 0,
        points: 0
      };
    }

    // Update team statistics
    const homeTeam = standings[match.home_team];
    const awayTeam = standings[match.away_team];
    
    homeTeam.played += 1;
    awayTeam.played += 1;
    
    homeTeam.goalsFor += match.home_score;
    homeTeam.goalsAgainst += match.away_score;
    
    awayTeam.goalsFor += match.away_score;
    awayTeam.goalsAgainst += match.home_score;
    
    // Determine match result
    if (match.home_score > match.away_score) {
      // Home team won
      homeTeam.won += 1;
      awayTeam.lost += 1;
      homeTeam.points += 3;
    } else if (match.home_score < match.away_score) {
      // Away team won
      awayTeam.won += 1;
      homeTeam.lost += 1;
      awayTeam.points += 3;
    } else {
      // Draw
      homeTeam.drawn += 1;
      awayTeam.drawn += 1;
      homeTeam.points += 1;
      awayTeam.points += 1;
    }
    
    // Update goal difference
    homeTeam.goalDifference = homeTeam.goalsFor - homeTeam.goalsAgainst;
    awayTeam.goalDifference = awayTeam.goalsFor - awayTeam.goalsAgainst;
  });

  // Convert to array and sort
  return Object.values(standings).sort((a, b) => {
    // Sort by points (descending)
    if (a.points !== b.points) {
      return b.points - a.points;
    }
    
    // If points are equal, sort by goal difference
    if (a.goalDifference !== b.goalDifference) {
      return b.goalDifference - a.goalDifference;
    }
    
    // If goal difference is equal, sort by goals for
    if (a.goalsFor !== b.goalsFor) {
      return b.goalsFor - a.goalsFor;
    }
    
    // If still equal, sort alphabetically
    return a.team.localeCompare(b.team);
  });
}

export function calculateTeamForms(matches: Match[]): TeamForm[] {
  const formData: Record<string, TeamForm> = {};
  
  // Sort matches by date (assuming date is in a sortable format)
  const sortedMatches = [...matches].sort((a, b) => {
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });
  
  // Process each match to build form data
  sortedMatches.forEach(match => {
    // Initialize teams if they don't exist
    if (!formData[match.home_team]) {
      formData[match.home_team] = {
        team: match.home_team,
        form: [],
        position: 0,
        played: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0
      };
    }
    
    if (!formData[match.away_team]) {
      formData[match.away_team] = {
        team: match.away_team,
        form: [],
        position: 0,
        played: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0
      };
    }
    
    // Update team stats
    const homeTeam = formData[match.home_team];
    const awayTeam = formData[match.away_team];
    
    homeTeam.played += 1;
    awayTeam.played += 1;
    
    homeTeam.goalsFor += match.home_score;
    homeTeam.goalsAgainst += match.away_score;
    
    awayTeam.goalsFor += match.away_score;
    awayTeam.goalsAgainst += match.home_score;
    
    // Update form (last 5 matches)
    if (match.home_score > match.away_score) {
      // Home win
      if (homeTeam.form.length >= 5) homeTeam.form.shift();
      if (awayTeam.form.length >= 5) awayTeam.form.shift();
      
      homeTeam.form.push('W');
      awayTeam.form.push('L');
      homeTeam.points += 3;
    } else if (match.away_score > match.home_score) {
      // Away win
      if (homeTeam.form.length >= 5) homeTeam.form.shift();
      if (awayTeam.form.length >= 5) awayTeam.form.shift();
      
      homeTeam.form.push('L');
      awayTeam.form.push('W');
      awayTeam.points += 3;
    } else {
      // Draw
      if (homeTeam.form.length >= 5) homeTeam.form.shift();
      if (awayTeam.form.length >= 5) awayTeam.form.shift();
      
      homeTeam.form.push('D');
      awayTeam.form.push('D');
      homeTeam.points += 1;
      awayTeam.points += 1;
    }
  });

  // Sort teams based on points
  const sortedTeams = Object.values(formData).sort((a, b) => b.points - a.points);
  
  // Assign positions
  sortedTeams.forEach((team, index) => {
    team.position = index + 1;
  });

  return sortedTeams;
}
