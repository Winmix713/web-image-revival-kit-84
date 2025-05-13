
import React, { useState, useEffect } from 'react';
import { Shield, Trophy, Globe, CalendarDays, Star } from 'lucide-react';
import { PREMIER_LEAGUE_TEAMS, Team } from '../data/premier-league-teams';
import TeamDetail from '../components/teams/TeamDetail';
import TeamStatsCard from '../components/teams/TeamStatsCard';
import TeamComparison from '../components/teams/TeamComparison';
import TeamFilterBar from '../components/teams/TeamFilterBar';
import TeamCompareButton from '../components/teams/TeamCompareButton';
import TeamListSection from '../components/teams/TeamListSection';
import AppLayout from '@/components/common/AppLayout';
import PageHeader from '@/components/common/PageHeader';

const Teams = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teamsToCompare, setTeamsToCompare] = useState<Team[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Load favorite teams from localStorage
    const storedFavorites = localStorage.getItem('favoriteTeams');
    if (storedFavorites) {
      setFavoriteTeams(JSON.parse(storedFavorites));
    }
  }, []);

  // Filtered teams based on search query
  const filteredTeams = PREMIER_LEAGUE_TEAMS.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Event handlers
  const handleTeamClick = (team: Team) => {
    setSelectedTeam(team);
  };

  const handleCloseDetail = () => {
    setSelectedTeam(null);
  };

  const handleCompareTeam = (team: Team) => {
    if (teamsToCompare.length < 2 && !teamsToCompare.find(t => t.id === team.id)) {
      const updatedTeams = [...teamsToCompare, team];
      setTeamsToCompare(updatedTeams);
      
      if (updatedTeams.length === 2) {
        setSelectedTeam(null);
        setShowComparison(true);
      }
    }
  };

  const handleCloseComparison = () => {
    setShowComparison(false);
    setTeamsToCompare([]);
  };

  const toggleFavorite = (teamId: string) => {
    const updatedFavorites = favoriteTeams.includes(teamId)
      ? favoriteTeams.filter(id => id !== teamId)
      : [...favoriteTeams, teamId];
    
    setFavoriteTeams(updatedFavorites);
    localStorage.setItem('favoriteTeams', JSON.stringify(updatedFavorites));
  };

  // Filter button configuration
  const filterButtons = [
    { icon: <Trophy className="h-4 w-4" />, label: "Trófeák" },
    { icon: <Globe className="h-4 w-4" />, label: "Származás" },
    { icon: <CalendarDays className="h-4 w-4" />, label: "Alapítás éve" },
    { icon: <Star className="h-4 w-4" />, label: "Kedvencek" },
  ];

  return (
    <AppLayout backgroundVariant="subtle" headerTitle="Csapatok">
      <PageHeader 
        title="Csapatok"
        description="Válaszd ki kedvenc csapataidat és fedezd fel statisztikáikat, játékosaikat és teljesítményüket."
        icon={Shield}
        variant="gradient"
        actions={
          <div className="flex items-center gap-3">
            <TeamFilterBar 
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
              filterOpen={filterOpen}
              setFilterOpen={setFilterOpen}
              filterButtons={filterButtons}
            />
            <TeamCompareButton 
              teamsToCompare={teamsToCompare} 
              showComparison={showComparison}
              setShowComparison={setShowComparison} 
            />
          </div>
        }
      />
      
      <div className="space-y-8">
        <TeamStatsCard />
        
        <TeamListSection 
          teams={filteredTeams}
          teamsToCompare={teamsToCompare}
          favoriteTeams={favoriteTeams}
          handleTeamClick={handleTeamClick}
          handleCompareTeam={handleCompareTeam}
          toggleFavorite={toggleFavorite}
          setTeamsToCompare={setTeamsToCompare}
        />
      </div>
      
      {/* Modals */}
      {selectedTeam && (
        <TeamDetail 
          team={selectedTeam} 
          onClose={handleCloseDetail} 
          onCompare={handleCompareTeam} 
        />
      )}
      
      {showComparison && teamsToCompare.length === 2 && (
        <TeamComparison 
          teams={teamsToCompare} 
          onClose={handleCloseComparison} 
        />
      )}
    </AppLayout>
  );
};

export default Teams;
