
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
// Fix the import to use the correct icon
import { Database, Webhook, BarChart3 } from "lucide-react";
import ApiServices from './integrations/ApiServices';
import WebhookSetup from './integrations/WebhookSetup';
import DatabaseConnection from './integrations/DatabaseConnection';
import AnalyticsIntegration from './integrations/AnalyticsIntegration';

const Integrations = () => {
  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader
        title="Integrations"
        description="Connect your system with external services and data sources"
        icon={Database}
      />
      
      <Tabs defaultValue="api" className="mt-6">
        <TabsList className="grid grid-cols-4 w-full max-w-3xl">
          <TabsTrigger value="api">API Services</TabsTrigger>
          <TabsTrigger value="webhooks">Webhooks</TabsTrigger>
          <TabsTrigger value="database">Database</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="mt-6">
          <ApiServices />
        </TabsContent>
        
        <TabsContent value="webhooks" className="mt-6">
          <WebhookSetup />
        </TabsContent>
        
        <TabsContent value="database" className="mt-6">
          <DatabaseConnection />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-6">
          <AnalyticsIntegration />
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Integrations;
