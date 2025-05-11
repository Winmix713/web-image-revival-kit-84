
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LeagueTable from "@/components/LeagueTable";

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 relative">
          {/* Background blur effect with gradient */}
          <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-[#ff4a4a]/10 via-[#007bff]/5 to-transparent pointer-events-none" />
          
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="bg-secondary/20 backdrop-blur-sm border border-border shadow-lg rounded-xl p-8 mt-6 mb-8">
              <div className="w-full h-48 md:h-64 rounded-lg bg-gradient-to-r from-[#ff4a4a]/10 via-[#007bff]/5 to-transparent" />
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
