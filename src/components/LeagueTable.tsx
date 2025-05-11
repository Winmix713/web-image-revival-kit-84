
import React from "react";
import { Eye, Pencil, Trash, Check } from "lucide-react";
import { leagueData } from "../data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const LeagueTable = () => {
  return (
    <div className="bg-card rounded-xl overflow-hidden border border-border">
      <div className="p-4 flex justify-between items-center">
        <div className="relative">
          <Input
            placeholder="Search leagues..."
            className="pl-9 bg-secondary text-white w-64"
          />
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>

        <Button className="bg-blue-500 hover:bg-blue-600 text-white gap-2">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            ></path>
          </svg>
          New League
        </Button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-border text-left">
              <th className="text-xs font-medium text-muted-foreground p-3 pl-6">Season</th>
              <th className="text-xs font-medium text-muted-foreground p-3">Winner</th>
              <th className="text-xs font-medium text-muted-foreground p-3">Second Place</th>
              <th className="text-xs font-medium text-muted-foreground p-3">Third Place</th>
              <th className="text-xs font-medium text-muted-foreground p-3">Status</th>
              <th className="text-xs font-medium text-muted-foreground p-3 text-right pr-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leagueData.map((league) => (
              <tr key={league.id} className="border-t border-border hover:bg-muted/20">
                <td className="p-3 pl-6 text-sm">{league.season}</td>
                <td className="p-3 text-sm">{league.winner}</td>
                <td className="p-3 text-sm">{league.secondPlace}</td>
                <td className="p-3 text-sm">{league.thirdPlace}</td>
                <td className="p-3">
                  <span className="progress-badge">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
                    {league.status}
                  </span>
                </td>
                <td className="p-3 text-right pr-6">
                  <div className="flex justify-end gap-2">
                    <button className="p-1.5 rounded-md bg-secondary/80 hover:bg-secondary text-muted-foreground">
                      <Eye className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-md bg-secondary/80 hover:bg-secondary text-muted-foreground">
                      <Pencil className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-md bg-secondary/80 hover:bg-secondary text-muted-foreground">
                      <Check className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 rounded-md bg-secondary/80 hover:bg-secondary text-muted-foreground">
                      <Trash className="h-4 w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeagueTable;
