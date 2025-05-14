"use client"

import { useMemo } from "react"
import type { Match } from "./types"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MatchesTable } from "./MatchesTable"
import { StandingsTable } from "./StandingsTable"
import { FormTable } from "./FormTable"
import { calculateStandings, calculateTeamForms } from "./utils/calculations"
import LeagueStatsDashboard from "./LeagueStatsDashboard"

interface LeagueTabsViewProps {
  matches: Match[]
  league: any // Add league prop
  defaultTab?: string
  onTabChange?: (tab: string) => void
  onMatchClick?: (match: Match) => void
}

export const LeagueTabsView = ({ 
  matches, 
  league, 
  defaultTab = "matches",
  onTabChange,
  onMatchClick
}: LeagueTabsViewProps) => {
  const standings = useMemo(() => calculateStandings(matches), [matches])
  const teamForms = useMemo(() => calculateTeamForms(matches), [matches])

  return (
    <Tabs defaultValue={defaultTab} onValueChange={onTabChange} className="w-full">
      <TabsList className="grid grid-cols-4 bg-black/20 w-full rounded-xl">
        <TabsTrigger
          value="matches"
          className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
        >
          Matches
        </TabsTrigger>
        <TabsTrigger
          value="standings"
          className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
        >
          Standings
        </TabsTrigger>
        <TabsTrigger
          value="form"
          className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
        >
          Form
        </TabsTrigger>
        <TabsTrigger
          value="statistics"
          className="py-3 rounded-none border-b-2 border-transparent data-[state=active]:border-blue-500 data-[state=active]:bg-black/20"
        >
          Statistics
        </TabsTrigger>
      </TabsList>

      <TabsContent value="matches" className="p-0 mt-6">
        <MatchesTable matches={matches} onMatchClick={onMatchClick} />
      </TabsContent>
      <TabsContent value="standings" className="p-0 mt-6">
        <StandingsTable standings={standings} />
      </TabsContent>
      <TabsContent value="form" className="p-0 mt-6">
        <FormTable teamForms={teamForms} />
      </TabsContent>
      <TabsContent value="statistics" className="p-0 mt-6">
        <LeagueStatsDashboard league={league} matches={matches} />
      </TabsContent>
    </Tabs>
  )
}
