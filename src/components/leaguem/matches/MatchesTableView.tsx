
import { memo } from "react";
import type { Match } from "../types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface MatchesTableViewProps {
  matches: Match[];
  onRequestSort: (key: string) => void;
  getSortIcon: (key: string) => JSX.Element;
}

export const MatchesTableView = memo(({ matches, onRequestSort, getSortIcon }: MatchesTableViewProps) => {
  return (
    <div className="overflow-x-auto rounded-lg bg-black/20 border border-white/5">
      <Table>
        <TableHeader className="bg-black/40">
          <TableRow className="border-b border-white/5 hover:bg-transparent">
            <TableHead 
              onClick={() => onRequestSort("date")}
              className="text-gray-400 font-normal cursor-pointer"
            >
              <div className="flex items-center">
                Date {getSortIcon("date")}
              </div>
            </TableHead>
            <TableHead className="text-gray-400 font-normal">Round</TableHead>
            <TableHead className="text-gray-400 font-normal">Home</TableHead>
            <TableHead className="text-gray-400 font-normal text-center">Score</TableHead>
            <TableHead className="text-gray-400 font-normal">Away</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matches.map((match, idx) => (
            <TableRow key={idx} className="border-b border-white/5 hover:bg-white/5">
              <TableCell>{match.date}</TableCell>
              <TableCell>{match.round || "N/A"}</TableCell>
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
    </div>
  );
});

MatchesTableView.displayName = "MatchesTableView";
