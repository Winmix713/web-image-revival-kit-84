
import React, { useState, useEffect } from 'react';
import { Shield, Trophy, Globe, CalendarDays, Star } from 'lucide-react';
import { PREMIER_LEAGUE_TEAMS } from '../data/premier-league-teams';
import TeamDetail from '../components/teams/TeamDetail';
import TeamStatsCard from '../components/teams/TeamStatsCard';
import TeamComparison from '../components/teams/TeamComparison';
import TeamFilterBar from '../components/teams/TeamFilterBar';
import TeamCompareButton from '../components/teams/TeamCompareButton';
import TeamListSection from '../components/teams/TeamListSection';
import AppLayout from '@/components/common/AppLayout';
import PageHeader from '@/components/common/PageHeader';
import { TeamSelectionProvider, useTeamSelection } from '../contexts/TeamSelectionContext';
import { useTeamFilters } from '../hooks/useTeamFilters';

// Filter button configuration
const filterButtons = [
  { icon: <Trophy className="h-4 w-4" />, label: "Trófeák" },
  { icon: <Globe className="h-4 w-4" />, label: "Származás" },
  { icon: <CalendarDays className="h-4 w-4" />, label: "Alapítás éve" },
  { icon: <Star className="h-4 w-4" />, label: "Kedvencek" },
];

const TeamsContent = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  
  const { 
    selectedTeam, 
    teamsToCompare, 
    showComparison, 
    setShowComparison,
    favoriteTeams,
    handleTeamClick,
    handleCloseDetail,
    handleCompareTeam,
    handleCloseComparison,
    setTeamsToCompare
  } = useTeamSelection();
  
  const {
    searchQuery,
    filteredTeams,
    handleSearchChange
  } = useTeamFilters(PREMIER_LEAGUE_TEAMS);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              setSearchQuery={handleSearchChange}
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
          toggleFavorite={(teamId) => useTeamSelection().toggleFavorite(teamId)}
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

const Teams = () => {
  return (
    <TeamSelectionProvider>
      <TeamsContent />
    </TeamSelectionProvider>
  );
};

export default Teams;
