
import React, { useEffect, useRef } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import LeagueTable from "@/components/LeagueTable";
import { Card, CardContent } from "@/components/ui/card";
import { Trophy, BarChart3, Users, Calendar } from "lucide-react";

const Index = () => {
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
          
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="flex items-center gap-4 mb-8 slide-up">
              <div className="p-3 rounded-lg bg-[#3a36e0]/15 text-[#9b87f5] pulse-glow">
                <Trophy className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold gradient-text">League Dashboard</h1>
                <p className="text-muted-foreground text-sm">Manage your sports leagues in one place</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatsCard 
                title="Active Leagues"
                value="24"
                icon={<Trophy className="h-6 w-6" />}
                color="blue"
                delay={0}
              />
              <StatsCard 
                title="Total Matches"
                value="256"
                icon={<Calendar className="h-6 w-6" />}
                color="red"
                delay={100}
              />
              <StatsCard 
                title="Total Teams"
                value="48"
                icon={<Users className="h-6 w-6" />}
                color="purple"
                delay={200}
              />
            </div>
            
            <div className="mb-8 glass-card rounded-xl p-6 slide-up" style={{ animationDelay: '0.15s' }}>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-white">Performance Overview</h2>
                  <p className="text-sm text-muted-foreground">League statistics and performance</p>
                </div>
                <div className="flex gap-2">
                  <TabButton isActive={false}>Weekly</TabButton>
                  <TabButton isActive={true}>Monthly</TabButton>
                  <TabButton isActive={false}>Yearly</TabButton>
                </div>
              </div>
              <div className="w-full h-48 md:h-64 rounded-lg bg-gradient-to-r from-[#3a36e0]/5 via-[#9b87f5]/10 to-transparent border border-white/5 p-4">
                <div className="flex items-end justify-between h-full pb-4">
                  {[35, 45, 30, 60, 25, 65, 40, 70, 55, 50, 80, 60].map((height, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <div 
                        className="w-2 md:w-4 bg-gradient-to-t from-[#3a36e0] to-[#9b87f5] rounded-t-sm"
                        style={{ 
                          height: `${height}%`,
                          transition: 'height 1s ease-out',
                          transitionDelay: `${index * 0.05}s`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="my-8 slide-up" style={{ animationDelay: '0.25s' }}>
              <LeagueTable />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const StatsCard = ({ 
  title, 
  value, 
  icon, 
  color = "blue",
  delay = 0 
}: { 
  title: string; 
  value: string; 
  icon: React.ReactNode;
  color: "blue" | "red" | "purple";
  delay?: number;
}) => {
  const colorMap = {
    blue: "bg-[#3a36e0]/20 text-[#9b87f5]",
    red: "bg-[#ff4a4a]/20 text-[#ff4a4a]",
    purple: "bg-[#6e59A5]/20 text-[#9b87f5]",
  };

  return (
    <Card className="glass-card slide-up" style={{ animationDelay: `${delay}ms` }}>
      <CardContent className="p-6 flex items-center gap-4">
        <div className={`h-12 w-12 rounded-lg flex items-center justify-center ${colorMap[color]}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-bold text-white">{value}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

const TabButton = ({ children, isActive = false }: { children: React.ReactNode; isActive?: boolean }) => {
  return (
    <div className={`px-3 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
      isActive 
        ? 'bg-[#3a36e0] text-white' 
        : 'bg-secondary text-muted-foreground hover:text-white'
    }`}>
      {children}
    </div>
  );
};

export default Index;
