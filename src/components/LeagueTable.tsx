
import React from "react";
import { Eye, Pencil, Trash, Check, Search as SearchIcon, Plus } from "lucide-react";
import { leagueData } from "../data/mockData";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Pagination, PaginationContent, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import ContentCard from "@/components/common/ContentCard";

const LeagueTable = () => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center">
        <h2 className="text-xl font-bold gradient-text">League Management</h2>
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Input
              placeholder="Search leagues..."
              className="pl-9 bg-secondary/50 text-white w-full border-border hover:border-primary/50 focus:border-[#9b87f5] transition-colors"
            />
            <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>

          <Button className="bg-[#3a36e0] hover:bg-[#2a26d0] text-white gap-2 shadow-md hover:shadow-[0_0_15px_rgba(58,54,224,0.5)] transition-all w-full sm:w-auto">
            <Plus className="h-4 w-4" />
            New League
          </Button>
        </div>
      </div>

      <ContentCard variant="glass" className="overflow-hidden">
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
                <TableRow key={league.id} className="border-t border-border hover:bg-white/5 transition-colors">
                  <TableCell className="p-4 pl-6 text-sm font-medium">{league.season}</TableCell>
                  <TableCell className="p-4 text-sm">{league.winner}</TableCell>
                  <TableCell className="p-4 text-sm">{league.secondPlace}</TableCell>
                  <TableCell className="p-4 text-sm">{league.thirdPlace}</TableCell>
                  <TableCell className="p-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-[#3a36e0]/25 text-[#9b87f5] border border-[#9b87f5]/30 shadow-sm shadow-[#3a36e0]/10">
                      <span className="h-2 w-2 rounded-full bg-[#9b87f5] mr-1.5 animate-pulse"></span>
                      {league.status}
                    </span>
                  </TableCell>
                  <TableCell className="p-4 text-right pr-6">
                    <div className="flex justify-end gap-2">
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-white transition-colors hover:scale-105">
                            <Eye className="h-4 w-4" />
                            <span className="sr-only">View</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto backdrop-blur-md bg-card/80 border border-white/10">
                          View league details
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-white transition-colors hover:scale-105">
                            <Pencil className="h-4 w-4" />
                            <span className="sr-only">Edit</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto backdrop-blur-md bg-card/80 border border-white/10">
                          Edit league
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-white transition-colors hover:scale-105">
                            <Check className="h-4 w-4" />
                            <span className="sr-only">Complete</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto backdrop-blur-md bg-card/80 border border-white/10">
                          Mark as complete
                        </HoverCardContent>
                      </HoverCard>
                      <HoverCard>
                        <HoverCardTrigger asChild>
                          <Button size="icon" variant="ghost" className="h-8 w-8 rounded-md bg-secondary/30 hover:bg-secondary text-muted-foreground hover:text-[#ff4a4a] transition-colors hover:scale-105">
                            <Trash className="h-4 w-4" />
                            <span className="sr-only">Delete</span>
                          </Button>
                        </HoverCardTrigger>
                        <HoverCardContent side="left" className="w-auto backdrop-blur-md bg-card/80 border border-white/10">
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
        <div className="border-t border-border p-3 bg-background/20">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" className="hover:bg-white/10" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive className="bg-[#3a36e0]/40 border border-[#9b87f5]/30 hover:bg-[#3a36e0]/60">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="hover:bg-white/10">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" className="hover:bg-white/10">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" className="hover:bg-white/10" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </ContentCard>
    </div>
  );
};

export default LeagueTable;
