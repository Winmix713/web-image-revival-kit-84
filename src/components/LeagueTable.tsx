
import React from "react";
import { Eye, Pencil, Trash, Check } from "lucide-react";
import { leagueData } from "../data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

const LeagueTable = () => {
  return (
    <div className="space-y-4">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <h2 className="text-xl font-bold">League Management</h2>
        <div className="relative w-full md:w-auto">
          <Input
            placeholder="Search leagues..."
            className="pl-9 bg-secondary/50 text-white w-full md:w-64 border-border hover:border-primary/50 transition-colors"
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

        <Button className="bg-[#3a36e0] hover:bg-[#2a26d0] text-white gap-2 shadow-md hover:shadow-lg transition-all">
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

      <div className="bg-card/30 backdrop-blur-sm rounded-xl overflow-hidden border border-border shadow-lg transition-all">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-b border-border hover:bg-transparent">
                <TableHead className="text-xs font-medium text-muted-foreground p-4 pl-6">Season</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground p-4">Winner</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground p-4">Second Place</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground p-4">Third Place</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground p-4">Status</TableHead>
                <TableHead className="text-xs font-medium text-muted-foreground p-4 text-right pr-6">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leagueData.map((league) => (
                <TableRow key={league.id} className="border-t border-border hover:bg-secondary/20 transition-colors">
                  <TableCell className="p-4 pl-6 text-sm font-medium">{league.season}</TableCell>
                  <TableCell className="p-4 text-sm">{league.winner}</TableCell>
                  <TableCell className="p-4 text-sm">{league.secondPlace}</TableCell>
                  <TableCell className="p-4 text-sm">{league.thirdPlace}</TableCell>
                  <TableCell className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#3a36e0]/20 text-[#9b87f5] border border-[#9b87f5]/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#9b87f5] mr-1.5 animate-pulse"></span>
                      {league.status}
                    </span>
                  </TableCell>
                  <TableCell className="p-4 text-right pr-6">
                    <div className="flex justify-end gap-2">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-white transition-colors">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto">
                          View league details
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-white transition-colors">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto">
                          Edit league
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-white transition-colors">
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Complete</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto">
                          Mark as complete
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-[#ff4a4a] transition-colors">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto">
                          Delete league
                        </HoverCardContent>
                      </HoverCard>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="border-t border-border p-2">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </div>
  );
};

export default LeagueTable;
