
import React from "react";
import { BarChart2 } from "lucide-react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import MagicInterface from "@/components/magic-interface/MagicInterface";

const LeagueManagement = () => {
  return (
    <AppLayout backgroundVariant="vibrant">
      <PageHeader 
        title="League Management"
        description="Manage and organize your leagues"
        icon={BarChart2}
      />

      <MagicInterface 
        title="League Management Interface"
        subtitle="Powerful tools for managing your leagues"
      />
    </AppLayout>
  );
};

export default LeagueManagement;
