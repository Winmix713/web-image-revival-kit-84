
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LeagueTable from "@/components/LeagueTable";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 relative">
          {/* Enhanced background effects */}
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-[#3a36e0]/10 via-[#9b87f5]/5 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ff4a4a]/5 blur-3xl pointer-events-none" />
          <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#9b87f5]/5 blur-3xl pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-[#3a36e0]/10 text-primary">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">League Dashboard</h1>
                <p className="text-muted-foreground text-sm">Manage your sports leagues in one place</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="bg-card/30 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#3a36e0]/20 flex items-center justify-center text-[#9b87f5]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Active Leagues</p>
                    <h3 className="text-2xl font-bold">24</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#ff4a4a]/20 flex items-center justify-center text-[#ff4a4a]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Matches</p>
                    <h3 className="text-2xl font-bold">256</h3>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card/30 backdrop-blur-sm border border-border shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-[#6e59A5]/20 flex items-center justify-center text-[#9b87f5]">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">Total Teams</p>
                    <h3 className="text-2xl font-bold">48</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="mb-8 bg-secondary/20 backdrop-blur-sm border border-border shadow-lg rounded-xl p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold">Performance Overview</h2>
                  <p className="text-sm text-muted-foreground">League statistics and performance</p>
                </div>
                <div className="flex gap-2">
                  <div className="px-2 py-1 rounded-md bg-secondary text-xs">Weekly</div>
                  <div className="px-2 py-1 rounded-md bg-accent text-accent-foreground text-xs">Monthly</div>
                  <div className="px-2 py-1 rounded-md bg-secondary text-xs">Yearly</div>
                </div>
              </div>
              <div className="w-full h-48 md:h-64 rounded-lg bg-gradient-to-r from-[#3a36e0]/5 via-[#9b87f5]/10 to-transparent" />
            </div>
            
            <div className="my-8">
              <LeagueTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
