
import { Grid, Calendar, List } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MatchesHeaderProps {
  viewType: "rounds" | "all" | "cards";
  onViewTypeChange: (viewType: "rounds" | "all" | "cards") => void;
  onRequestSort: (key: string) => void;
  getSortIcon: (key: string) => JSX.Element;
}

export const MatchesHeader = ({ viewType, onViewTypeChange, onRequestSort, getSortIcon }: MatchesHeaderProps) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
      <h2 className="text-xl font-bold">Matches</h2>
      <div className="flex gap-2">
        <Button
          variant={viewType === "cards" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewTypeChange("cards")}
          className={viewType === "cards" ? "bg-blue-500" : "bg-black/30 border-white/10 text-white"}
        >
          <Grid className="w-4 h-4 mr-1" />
          Cards
        </Button>
        <Button
          variant={viewType === "rounds" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewTypeChange("rounds")}
          className={viewType === "rounds" ? "bg-blue-500" : "bg-black/30 border-white/10 text-white"}
        >
          <Calendar className="w-4 h-4 mr-1" />
          By Round
        </Button>
        <Button
          variant={viewType === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => onViewTypeChange("all")}
          className={viewType === "all" ? "bg-blue-500" : "bg-black/30 border-white/10 text-white"}
        >
          <List className="w-4 h-4 mr-1" />
          Table
        </Button>
      </div>
    </div>
  );
};
