
import { memo } from "react";
import type { Match } from "../types";
import { Card, CardContent } from "@/components/ui/card";

interface MatchesCardsViewProps {
  matches: Match[];
  onMatchClick?: (match: Match) => void;
}

export const MatchesCardsView = memo(({ matches, onMatchClick }: MatchesCardsViewProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
      {matches.map((match, idx) => (
        <Card 
          key={idx} 
          className="bg-black/20 border-white/5 hover:border-blue-500/20 transition-all cursor-pointer"
          onClick={() => onMatchClick?.(match)}
        >
          <CardContent className="p-4">
            <div className="text-xs text-gray-400 mb-2">
              {match.date} • {match.round || "Round N/A"}
            </div>
            
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium">{match.home_team}</div>
              <div className="bg-black/30 px-2 py-1 rounded font-semibold">
                {match.home_score} - {match.away_score}
              </div>
              <div className="font-medium text-right">{match.away_team}</div>
            </div>
            
            <div className="text-xs text-gray-400 text-center">
              HT: {match.ht_home_score} - {match.ht_away_score}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});

MatchesCardsView.displayName = "MatchesCardsView";
