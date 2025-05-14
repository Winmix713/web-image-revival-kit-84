
import { useState, useCallback, useMemo } from "react"
import { BarChart2 } from "lucide-react"
import AppLayout from "@/components/common/AppLayout"
import PageHeader from "@/components/common/PageHeader"
import { CSVUploader } from "@/components/leaguem/CSVUploader"
import { LeagueTable } from "@/components/leaguem/LeagueTable"
import { LeagueEditor } from "@/components/leaguem/LeagueEditor"
import { LeagueDetails } from "@/components/leaguem/LeagueDetails"
import { StandingsTable } from "@/components/leaguem/StandingsTable"
import { FormTable } from "@/components/leaguem/FormTable"
import StatsCard from "@/components/common/StatsCard"
import ContentCard from "@/components/common/ContentCard"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import type { LeagueData, Match } from "@/types/league"

// Sample data for testing
const sampleLeagues: LeagueData[] = [
  {
    id: "premier-league-2023",
    name: "Premier League",
    season: "2023-2024",
    status: "in-progress",
  },
  {
    id: "la-liga-2023",
    name: "La Liga",
    season: "2023-2024",
    status: "in-progress",
  },
  {
    id: "bundesliga-2023",
    name: "Bundesliga",
    season: "2023-2024",
    status: "in-progress",
  }
]

const LeagueManagement = () => {
  const [matches, setMatches] = useState<Match[]>([])
  const [view, setView] = useState<"list" | "editor" | "details">("list")
  const [selectedLeague, setSelectedLeague] = useState<LeagueData | null>(null)
  const [leagues, setLeagues] = useState<LeagueData[]>(sampleLeagues)
  const [searchTerm, setSearchTerm] = useState("")
  
  const filteredLeagues = useMemo(() => {
    if (!searchTerm.trim()) return leagues
    
    return leagues.filter(league => 
      league.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      league.season.toLowerCase().includes(searchTerm.toLowerCase())
    )
  }, [leagues, searchTerm])

  const handleNewLeague = () => {
    setSelectedLeague(null)
    setView("editor")
  }
  
  const handleLeagueAction = (leagueId: string, action: "view" | "edit" | "complete" | "delete") => {
    const league = leagues.find(l => l.id === leagueId)
    
    if (!league) {
      toast.error("League not found")
      return
    }
    
    switch (action) {
      case "view":
        setSelectedLeague(league)
        setView("details")
        break
      case "edit":
        setSelectedLeague(league)
        setView("editor")
        break
      case "complete":
        setLeagues(leagues.map(l => 
          l.id === leagueId ? { ...l, status: "completed" } : l
        ))
        toast.success(`${league.name} marked as completed`)
        break
      case "delete":
        setLeagues(leagues.filter(l => l.id !== leagueId))
        toast.success(`${league.name} deleted`)
        break
    }
  }
  
  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }
  
  const handleUpdateLeague = (updatedLeague: LeagueData) => {
    if (updatedLeague.id) {
      // Update existing league
      setLeagues(leagues.map(l => 
        l.id === updatedLeague.id ? updatedLeague : l
      ))
    } else {
      // Add new league
      const newLeague = {
        ...updatedLeague,
        id: `league-${Date.now()}`,
        status: "in-progress" as const,
      }
      setLeagues([...leagues, newLeague])
    }
  }
  
  const handleUpdateMatches = (newMatches: Match[]) => {
    setMatches(newMatches)
  }
  
  const handleBack = () => {
    setView("list")
  }

  return (
    <AppLayout backgroundVariant="vibrant">
      <PageHeader 
        title="League Management"
        description="Manage and organize your leagues"
        icon={BarChart2}
        actions={
          <Button 
            onClick={handleNewLeague}
            className="bg-gradient-to-r from-[#3a36e0] to-[#6e59A5] hover:from-[#3a36e0] hover:to-[#5a459b] text-white gap-2 shadow-md hover:shadow-[0_0_15px_rgba(58,54,224,0.5)] transition-all"
          >
            New League
          </Button>
        }
      />
      
      {view === "list" && (
        <div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatsCard
              title="Active Leagues"
              value={leagues.filter(l => l.status === "in-progress").length.toString()}
              icon={BarChart2}
              color="blue"
              trend={{ value: 8, isPositive: true }}
              delay={100}
            />
            
            <StatsCard
              title="Completed Leagues"
              value={leagues.filter(l => l.status === "completed").length.toString()}
              icon={BarChart2}
              color="purple"
              trend={{ value: 15, isPositive: true }}
              delay={200}
            />
            
            <StatsCard
              title="Teams Registered"
              value="146"
              icon={BarChart2}
              color="green"
              trend={{ value: 4, isPositive: true }}
              delay={300}
            />
          </div>
          
          <LeagueTable
            leagues={filteredLeagues} 
            onLeagueAction={handleLeagueAction}
            onSearch={handleSearch}
            onNewLeague={handleNewLeague}
          />
        </div>
      )}
      
      {view === "editor" && (
        <LeagueEditor 
          onBack={handleBack}
          league={selectedLeague || undefined}
        />
      )}
      
      {view === "details" && selectedLeague && (
        <LeagueDetails
          league={selectedLeague}
          matches={matches}
          onBack={handleBack}
          onUpdateLeague={handleUpdateLeague}
          onUpdateMatches={handleUpdateMatches}
        />
      )}
    </AppLayout>
  )
}

export default LeagueManagement
