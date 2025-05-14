
import { memo, useState } from "react"
import { Trophy, ChevronRight, Edit2, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { LeagueData } from "@/types/league"
import type { Match } from "@/types/match"

// Sample data for display
const sampleLeagues = [
  {
    id: "premier-league-2023",
    name: "Premier League",
    season: "2023-2024",
    status: "in-progress" as const,
    teams: [
      { id: "1", name: "Manchester City", logo: "/placeholder.svg" },
      { id: "2", name: "Arsenal", logo: "/placeholder.svg" },
      { id: "3", name: "Liverpool", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "la-liga-2023",
    name: "La Liga",
    season: "2023-2024",
    status: "in-progress" as const,
    teams: [
      { id: "4", name: "Real Madrid", logo: "/placeholder.svg" },
      { id: "5", name: "Barcelona", logo: "/placeholder.svg" },
      { id: "6", name: "Atletico Madrid", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "bundesliga-2023",
    name: "Bundesliga",
    season: "2023-2024",
    status: "in-progress" as const,
    teams: [
      { id: "7", name: "Bayern Munich", logo: "/placeholder.svg" },
      { id: "8", name: "Borussia Dortmund", logo: "/placeholder.svg" },
      { id: "9", name: "RB Leipzig", logo: "/placeholder.svg" },
    ]
  },
  {
    id: "serie-a-2022",
    name: "Serie A",
    season: "2022-2023",
    status: "completed" as const,
    winner: "Napoli",
    teams: [
      { id: "10", name: "Inter Milan", logo: "/placeholder.svg" },
      { id: "11", name: "Juventus", logo: "/placeholder.svg" },
      { id: "12", name: "AC Milan", logo: "/placeholder.svg" },
    ]
  }
]

interface LeagueSeasonsProps {
  onEdit: () => void
  onSelect: (league: LeagueData, matches: Match[]) => void
}

export const LeagueSeasons = memo(({ onEdit, onSelect }: LeagueSeasonsProps) => {
  const [leagues] = useState<LeagueData[]>(sampleLeagues)
  const [matches] = useState<Match[]>([])

  const activeLeagues = leagues.filter(league => league.status === "in-progress")
  const completedLeagues = leagues.filter(league => league.status === "completed")
  
  return (
    <div className="space-y-10">
      {/* Active Leagues */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Active Leagues</h2>
          <Button 
            onClick={onEdit}
            variant="outline" 
            className="bg-black/20 border-white/10 text-white text-sm"
            size="sm"
          >
            <Edit2 className="mr-2 h-4 w-4" />
            Manage Leagues
          </Button>
        </div>
        
        {activeLeagues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {activeLeagues.map(league => (
              <Card 
                key={league.id} 
                className="bg-black/20 border-white/5 hover:border-blue-500/20 transition-all cursor-pointer hover:shadow-lg"
                onClick={() => onSelect(league, matches)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">{league.name}</span>
                    <span className="text-sm text-gray-400">{league.season}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-blue-500/20 text-blue-400 px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        In Progress
                      </div>
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-black/20 border-white/5">
            <CardContent className="p-6 text-center">
              <p className="text-gray-400">No active leagues found</p>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Completed Leagues */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Completed Leagues</h2>
        {completedLeagues.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {completedLeagues.map(league => (
              <Card 
                key={league.id} 
                className="bg-black/20 border-white/5 hover:border-blue-500/20 transition-all cursor-pointer hover:shadow-lg"
                onClick={() => onSelect(league, matches)}
              >
                <CardContent className="p-6 flex items-center justify-between">
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-semibold">{league.name}</span>
                    <span className="text-sm text-gray-400">{league.season}</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full text-xs inline-flex items-center gap-1">
                        <Trophy className="w-3 h-3" />
                        Completed
                      </div>
                      {league.winner && (
                        <span className="text-xs text-gray-400">
                          Winner: <span className="text-white">{league.winner}</span>
                        </span>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="text-gray-500" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card className="bg-black/20 border-white/5">
            <CardContent className="p-6 text-center">
              <p className="text-gray-400">No completed leagues found</p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
})

LeagueSeasons.displayName = "LeagueSeasons"
