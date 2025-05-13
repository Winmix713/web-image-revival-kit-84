
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Webhook, LineChart, ApiSquare } from "lucide-react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import ApiServices from './integrations/ApiServices';
import WebhookSetup from './integrations/WebhookSetup';
import DatabaseConnection from './integrations/DatabaseConnection';
import AnalyticsIntegration from './integrations/AnalyticsIntegration';

const Integrations = () => {
  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader
        title="Integrations"
        description="Connect external services and data sources"
        icon={ApiSquare}
        variant="default"
      />
      
      <Tabs defaultValue="api" className="w-full">
        <TabsList className="bg-white/5 border border-white/10 mb-6">
          <TabsTrigger value="api" className="flex items-center gap-2">
            <ApiSquare className="h-4 w-4" />
            <span>API Services</span>
          </TabsTrigger>
          <TabsTrigger value="webhooks" className="flex items-center gap-2">
            <Webhook className="h-4 w-4" />
            <span>Webhooks</span>
          </TabsTrigger>
          <TabsTrigger value="database" className="flex items-center gap-2">
            <Database className="h-4 w-4" />
            <span>Database</span>
          </TabsTrigger>
          <TabsTrigger value="analytics" className="flex items-center gap-2">
            <LineChart className="h-4 w-4" />
            <span>Analytics</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="api" className="mt-4">
          <ApiServices />
        </TabsContent>
        
        <TabsContent value="webhooks" className="mt-4">
          <WebhookSetup />
        </TabsContent>
        
        <TabsContent value="database" className="mt-4">
          <DatabaseConnection />
        </TabsContent>
        
        <TabsContent value="analytics" className="mt-4">
          <AnalyticsIntegration />
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default Integrations;
