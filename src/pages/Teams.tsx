
import React, { useState, useEffect } from 'react';
import { Shield, Search, Filter, Trophy, Globe, CalendarDays, Star, GitCompare, X } from 'lucide-react';
import { PREMIER_LEAGUE_TEAMS, Team } from '../data/premier-league-teams';
import TeamGrid from '../components/teams/TeamGrid';
import TeamDetail from '../components/teams/TeamDetail';
import TeamStatsCard from '../components/teams/TeamStatsCard';
import TeamComparison from '../components/teams/TeamComparison';
import TeamCard from '../components/teams/TeamCard';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import AppLayout from '@/components/common/AppLayout';
import PageHeader from '@/components/common/PageHeader';

const Teams = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<Team | null>(null);
  const [teamsToCompare, setTeamsToCompare] = useState<Team[]>([]);
  const [showComparison, setShowComparison] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [favoriteTeams, setFavoriteTeams] = useState<string[]>([]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    // Load favorite teams from localStorage in a real app
    const storedFavorites = localStorage.getItem('favoriteTeams');
    if (storedFavorites) {
      setFavoriteTeams(JSON.parse(storedFavorites));
    }
  }, []);

  const filteredTeams = PREMIER_LEAGUE_TEAMS.filter(team => 
    team.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  // Filter buttons for the team section
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
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 bg-white/5 border-white/10 text-white focus-visible:ring-blue-500/30 w-full"
                placeholder="Csapat keresése..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <DropdownMenu open={filterOpen} onOpenChange={setFilterOpen}>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="h-10 bg-white/5 border-white/10 hover:bg-white/10">
                  <Filter className="h-4 w-4 text-gray-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="bg-gray-900 border border-white/10">
                {filterButtons.map((button, index) => (
                  <DropdownMenuItem key={index} className="text-white hover:bg-white/10 cursor-pointer">
                    <div className="flex items-center gap-2">
                      {button.icon}
                      <span>{button.label}</span>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 h-10"
              onClick={() => {
                if (teamsToCompare.length === 2) {
                  setShowComparison(true);
                }
              }}
              disabled={teamsToCompare.length !== 2}
            >
              <GitCompare className="h-4 w-4 mr-2" />
              Összehasonlítás
              {teamsToCompare.length > 0 && (
                <span className="ml-1 bg-white/20 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {teamsToCompare.length}
                </span>
              )}
            </Button>
          </div>
        }
      />
      
      <div className="space-y-8">
        <TeamStatsCard />
        
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-amber-400" />
              <h2 className="text-xl font-bold text-white">Premier League csapatok</h2>
            </div>
            
            {teamsToCompare.length > 0 && (
              <div className="flex items-center gap-2 bg-white/5 rounded-lg px-3 py-1.5">
                <div className="flex items-center space-x-1">
                  {teamsToCompare.map((team, index) => (
                    <div key={index} className="flex items-center">
                      <img 
                        src={team.logoUrl} 
                        alt={team.name} 
                        className="h-6 w-6 object-contain" 
                      />
                      <span className="text-xs text-white ml-1 mr-2">{team.name}</span>
                    </div>
                  ))}
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-6 w-6 p-0 rounded-full"
                  onClick={() => setTeamsToCompare([])}
                >
                  <X className="h-3 w-3 text-gray-400" />
                </Button>
              </div>
            )}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTeams.map((team) => (
              <div key={team.id} className="relative group">
                <Button
                  variant="ghost" 
                  size="icon"
                  className={`absolute top-2 right-2 z-10 h-8 w-8 rounded-full ${
                    favoriteTeams.includes(team.id) ? 'bg-amber-500/20' : 'bg-white/10'
                  } hover:bg-white/20`}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(team.id);
                  }}
                >
                  <Star className={`h-4 w-4 ${
                    favoriteTeams.includes(team.id) ? 'text-amber-400 fill-amber-400' : 'text-gray-400'
                  }`} />
                </Button>
                <div 
                  className="absolute bottom-0 left-0 right-0 h-0 bg-blue-500/20 transition-all duration-300 group-hover:h-full opacity-0 group-hover:opacity-100"
                  onClick={() => handleTeamClick(team)}
                >
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button 
                      size="sm"
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleTeamClick(team);
                      }}
                    >
                      Részletek
                    </Button>
                    <Button 
                      size="sm"
                      variant="outline"
                      className="bg-white/10 border-white/10 hover:bg-white/20 text-white"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCompareTeam(team);
                      }}
                      disabled={teamsToCompare.length === 2 && !teamsToCompare.find(t => t.id === team.id)}
                    >
                      {teamsToCompare.find(t => t.id === team.id) ? 'Kiválasztva' : 'Összehasonlítás'}
                    </Button>
                  </div>
                </div>
                
                <TeamCard team={team} onClick={handleTeamClick} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
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
