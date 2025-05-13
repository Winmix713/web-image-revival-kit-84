
import React from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from "@/components/ui/table";
import { Trophy, Award, Medal } from 'lucide-react';

interface LeaderboardEntry {
  rank: number;
  username: string;
  points: number;
  accuracy: string;
  streak: number;
}

const leaderboardData: LeaderboardEntry[] = [
  { rank: 1, username: "FociBajnok22", points: 1250, accuracy: "83%", streak: 7 },
  { rank: 2, username: "MesterTippelo", points: 1120, accuracy: "79%", streak: 5 },
  { rank: 3, username: "Prediktátor", points: 980, accuracy: "74%", streak: 3 },
  { rank: 4, username: "SportGuru", points: 870, accuracy: "71%", streak: 2 },
  { rank: 5, username: "BajnokTipp", points: 790, accuracy: "68%", streak: 0 }
];

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Trophy className="h-5 w-5 text-yellow-500" />;
    case 2:
      return <Award className="h-5 w-5 text-gray-400" />;
    case 3:
      return <Medal className="h-5 w-5 text-amber-600" />;
    default:
      return <span className="text-sm font-medium text-muted-foreground">#{rank}</span>;
  }
};

const LeaderboardTable = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-gradient">Legjobb Tippelők</h2>
      <div className="rounded-xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-sm">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-white/10 hover:bg-transparent">
              <TableHead className="w-[100px] text-blue-400">#</TableHead>
              <TableHead className="text-blue-400">Felhasználó</TableHead>
              <TableHead className="text-blue-400">Pontszám</TableHead>
              <TableHead className="text-blue-400">Pontosság</TableHead>
              <TableHead className="text-blue-400">Széria</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboardData.map((entry) => (
              <TableRow 
                key={entry.rank}
                className="border-b border-white/5 transition-colors hover:bg-white/5"
              >
                <TableCell className="font-medium">
                  <div className="flex items-center gap-2">
                    {getRankIcon(entry.rank)}
                  </div>
                </TableCell>
                <TableCell className="font-medium text-white">
                  {entry.username}
                </TableCell>
                <TableCell className="font-medium text-blue-400">
                  {entry.points}
                </TableCell>
                <TableCell className="text-green-400">
                  {entry.accuracy}
                </TableCell>
                <TableCell>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400">
                    {entry.streak}
                  </span>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default LeaderboardTable;
