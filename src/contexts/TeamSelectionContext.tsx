
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Team } from '../data/premier-league-teams';
import { toast } from "@/components/ui/use-toast";

interface TeamSelectionContextType {
  selectedTeam: Team | null;
  setSelectedTeam: (team: Team | null) => void;
  teamsToCompare: Team[];
  setTeamsToCompare: (teams: Team[]) => void;
  showComparison: boolean;
  setShowComparison: (show: boolean) => void;
  favoriteTeams: string[];
  toggleFavorite: (teamId: string) => void;
  handleTeamClick: (team: Team) => void;
  handleCloseDetail: () => void;
  handleCompareTeam: (team: Team) => void;
  handleCloseComparison: () => void;
}

const TeamSelectionContext = createContext<TeamSelectionContextType | undefined>(undefined);

export const TeamSelectionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teamsToCompare, setTeamsToCompare] = useState<Team[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>([]);

  useEffect(() => {
    // Load favorite teams from localStorage
    const storedFavorites = localStorage.getItem('favoriteTeams');
    if (storedFavorites) {
      setFavoriteTeams(JSON.parse(storedFavorites));
    }
  }, []);

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
        toast({
          title: "Csapatok összehasonlítása",
          description: `${updatedTeams[0].name} és ${updatedTeams[1].name} összehasonlítása`,
        });
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
    
    // Show toast notification
    const action = favoriteTeams.includes(teamId) ? "eltávolítva" : "hozzáadva";
    toast({
      title: `Csapat ${action} a kedvencekből`,
      description: `A csapat sikeresen ${action} a kedvencek listájából.`
    });
  };

  return (
    <TeamSelectionContext.Provider
      value={{
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
        handleCloseComparison,
      }}
    >
      {children}
    </TeamSelectionContext.Provider>
  );
};

export const useTeamSelection = () => {
  const context = useContext(TeamSelectionContext);
  if (context === undefined) {
    throw new Error('useTeamSelection must be used within a TeamSelectionProvider');
  }
  return context;
};
