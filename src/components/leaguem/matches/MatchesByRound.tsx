
import { memo } from "react";
import type { Match } from "../types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MatchesByRoundProps {
  matchesByRound: Record<string, Match[]>;
}

export const MatchesByRound = memo(({ matchesByRound }: MatchesByRoundProps) => {
  const rounds = Object.keys(matchesByRound);
  
  return (
    <div className="space-y-6">
      {rounds.map(round => (
        <Card key={round} className="bg-black/20 border-white/5 hover:border-blue-500/20 transition-all">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg font-semibold">{round}</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader className="bg-black/40">
                <TableRow className="border-b border-white/5 hover:bg-transparent">
                  <TableHead className="text-gray-400 font-normal">Date</TableHead>
                  <TableHead className="text-gray-400 font-normal">Home</TableHead>
                  <TableHead className="text-gray-400 font-normal text-center">Score</TableHead>
                  <TableHead className="text-gray-400 font-normal">Away</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {matchesByRound[round].map((match, idx) => (
                  <TableRow key={idx} className="border-b border-white/5 hover:bg-white/5">
                    <TableCell>{match.date}</TableCell>
                    <TableCell>{match.home_team}</TableCell>
                    <TableCell className="text-center">
                      {match.home_score} - {match.away_score}
                      <div className="text-xs text-gray-400">
                        {match.ht_home_score} - {match.ht_away_score} HT
                      </div>
                    </TableCell>
                    <TableCell>{match.away_team}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ))}
    </div>
  );
});

MatchesByRound.displayName = "MatchesByRound";
