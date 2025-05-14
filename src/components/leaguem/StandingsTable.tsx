
import { memo } from "react";
import type { TeamStanding } from "./types";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface StandingsTableProps {
  standings: TeamStanding[];
  className?: string;
}

export const StandingsTable = memo(({ standings = [], className = "" }: StandingsTableProps) => {
  if (standings.length === 0) {
    return (
      <div className="text-gray-400 text-center p-4 bg-black/20 rounded-lg border border-white/5">
        No standings data available.
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="text-xl font-bold text-white mb-6">League Standings</h3>
      <div className="overflow-x-auto rounded-lg bg-black/20 border border-white/5">
        <Table>
          <TableHeader className="bg-black/40">
            <TableRow className="border-b border-white/5 hover:bg-transparent">
              <TableHead className="text-gray-400 font-normal">Pos</TableHead>
              <TableHead className="text-gray-400 font-normal">Team</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">P</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">W</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">D</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">L</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">GF</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">GA</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">GD</TableHead>
              <TableHead className="text-gray-400 font-normal text-center">Pts</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {standings.map((team, index) => (
              <TableRow key={`${team.team}-${index}`} className="border-b border-white/5 hover:bg-white/5">
                <TableCell>{index + 1}</TableCell>
                <TableCell className="font-medium">{team.team}</TableCell>
                <TableCell className="text-center">{team.played}</TableCell>
                <TableCell className="text-center">{team.won}</TableCell>
                <TableCell className="text-center">{team.drawn}</TableCell>
                <TableCell className="text-center">{team.lost}</TableCell>
                <TableCell className="text-center">{team.goalsFor}</TableCell>
                <TableCell className="text-center">{team.goalsAgainst}</TableCell>
                <TableCell className="text-center">
                  <span
                    className={
                      team.goalDifference > 0
                        ? "text-emerald-400"
                        : team.goalDifference < 0
                        ? "text-red-400"
                        : ""
                    }
                  >
                    {team.goalDifference}
                  </span>
                </TableCell>
                <TableCell className="text-center font-bold">{team.points}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
});

StandingsTable.displayName = "StandingsTable";
