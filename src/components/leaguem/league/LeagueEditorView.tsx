
import { memo } from "react"
import { LeagueEditor } from "../LeagueEditor"

interface LeagueEditorViewProps {
  onBack: () => void
}

export const LeagueEditorView = memo(({ onBack }: LeagueEditorViewProps) => {
  return <LeagueEditor onBack={onBack} />
})

LeagueEditorView.displayName = "LeagueEditorView"
