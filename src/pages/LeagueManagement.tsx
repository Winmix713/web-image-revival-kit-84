
import React from "react";
import { BarChart2, Plus } from "lucide-react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import LeagueTable from "@/components/LeagueTable";
import StatsCard from "@/components/common/StatsCard";
import ContentCard from "@/components/common/ContentCard";
import { Button } from "@/components/ui/button";

const LeagueManagement = () => {
  return (
    <AppLayout backgroundVariant="vibrant">
      <PageHeader 
        title="League Management"
        description="Manage and organize your leagues"
        icon={BarChart2}
        actions={
          <Button className="bg-gradient-to-r from-[#3a36e0] to-[#6e59A5] hover:from-[#3a36e0] hover:to-[#5a459b] text-white gap-2 shadow-md hover:shadow-[0_0_15px_rgba(58,54,224,0.5)] transition-all">
            <Plus className="h-4 w-4" />
            New League
          </Button>
        }
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatsCard
          title="Active Leagues"
          value="12"
          icon={BarChart2}
          color="blue"
          trend={{ value: 8, isPositive: true }}
          delay={100}
        />
        
        <StatsCard
          title="Completed Leagues"
          value="24"
          icon={BarChart2}
          color="purple"
          trend={{ value: 15, isPositive: true }}
          delay={200}
        />
        
        <StatsCard
          title="Teams Registered"
          value="146"
          icon={BarChart2}
          color="green"
          trend={{ value: 4, isPositive: true }}
          delay={300}
        />
      </div>
      
      <LeagueTable />
    </AppLayout>
  );
};

export default LeagueManagement;
