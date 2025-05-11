
import React from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import MagicInterface from "@/components/magic-interface/MagicInterface";

const LeagueManagement = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex flex-1 overflow-hidden pt-[72px]">
        <Sidebar />
        <main className="flex-1 overflow-auto p-6 relative">
          {/* Enhanced background effects */}
          <div className="fixed top-0 right-0 w-full h-full pointer-events-none">
            <div className="absolute top-0 right-0 w-full h-64 bg-gradient-to-b from-[#3a36e0]/10 via-[#9b87f5]/5 to-transparent" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-[#ff4a4a]/5 blur-3xl" />
            <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-[#9b87f5]/5 blur-3xl" />
            <div className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-[#3a36e0]/5 blur-3xl" />
          </div>
          
          <div className="relative z-10 mx-auto">
            <div className="flex items-center gap-4 mb-8 slide-up">
              <div className="p-3 rounded-lg bg-[#3a36e0]/15 text-[#9b87f5] pulse-glow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">League Management</h1>
                <p className="text-muted-foreground text-sm">Manage and organize your leagues</p>
              </div>
            </div>

            <MagicInterface />
          </div>
        </main>
      </div>
    </div>
  );
};

export default LeagueManagement;
