
import React, { useState, useEffect } from 'react';
import { Shield, Trophy, Globe, CalendarDays, Star } from 'lucide-react';
import { toast } from "@/components/ui/use-toast";
import { PREMIER_LEAGUE_TEAMS, Team } from '../data/premier-league-teams';
import TeamDetail from '../components/teams/TeamDetail';
import TeamStatsCard from '../components/teams/TeamStatsCard';
import TeamComparison from '../components/teams/TeamComparison';
import TeamFilterBar from '../components/teams/TeamFilterBar';
import TeamCompareButton from '../components/teams/TeamCompareButton';
import TeamListSection from '../components/teams/TeamListSection';
import AppLayout from '@/components/common/AppLayout';
import PageHeader from '@/components/common/PageHeader';
import { useTeamSelection } from '../hooks/useTeamSelection';

const Teams = () => {
  // State management
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  
  const { 
    selectedTeam, 
    setSelectedTeam, 
    teamsToCompare, 
    setTeamsToCompare,
    showComparison, 
    setShowComparison,
    favoriteTeams,
    toggleFavorite,
    handleTeamClick,
    handleCloseDetail,
    handleCompareTeam,
    handleCloseComparison
  } = useTeamSelection();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Filtered teams based on search query
  const filteredTeams = PREMIER_LEAGUE_TEAMS.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
          <TeamPageActions 
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            filterOpen={filterOpen}
            setFilterOpen={setFilterOpen}
            filterButtons={filterButtons}
            teamsToCompare={teamsToCompare}
            showComparison={showComparison}
            setShowComparison={setShowComparison}
          />
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

// Extracted component for page actions
const TeamPageActions = ({ 
  searchQuery, 
  setSearchQuery, 
  filterOpen, 
  setFilterOpen, 
  filterButtons,
  teamsToCompare,
  showComparison,
  setShowComparison
}) => {
  return (
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
  );
};

export default Teams;
