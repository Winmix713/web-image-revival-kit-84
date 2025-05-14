
import { memo } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LeagueData, Match } from "@/types/league"

interface LeagueListViewProps {
  dataUpdatedAt: Date
  isRefreshing: boolean
  onRefresh: () => void
  onEdit: () => void
  onSelectLeague: (league: LeagueData, matches: Match[]) => void
}

export const LeagueListView = memo(({
  dataUpdatedAt,
  isRefreshing,
  onRefresh,
  onEdit,
  onSelectLeague
}: LeagueListViewProps) => {
  const seasonSelector = (
    <div className="relative flex items-center">
      <Button variant="outline" className="bg-black/20 border-white/10 text-white flex items-center gap-2">
        <span>2023-2024 Szezon</span>
        <ChevronDown className="h-4 w-4" />
      </Button>
    </div>
  )

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold">League Management</h1>
          <p className="text-muted-foreground">
            Last updated: {dataUpdatedAt.toLocaleTimeString()}
            {isRefreshing && " (refreshing...)"}
          </p>
        </div>
        {seasonSelector}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Integration cards would go here */}
      </div>
      
      <div>
        <Button onClick={onEdit} className="mb-4">
          Edit Leagues
        </Button>
        {/* League listings would go here */}
      </div>
    </div>
  )
})

LeagueListView.displayName = "LeagueListView"
