
import React from 'react';
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import { Settings } from "lucide-react";
import PredictionSystem from '@/components/PredictionSystem';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentDocumentation from '@/components/system/ComponentDocumentation';
import DesignTokens from '@/components/system/DesignTokens';
import CssUtilities from '@/components/system/CssUtilities';

const System = () => {
  return (
    <AppLayout backgroundVariant="subtle">
      <PageHeader
        title="Rendszer"
        description="Rendszerbeállítások és dokumentáció"
        icon={Settings}
        variant="default"
      />

      <Tabs defaultValue="prediction" className="mb-8">
        <TabsList className="bg-white/5 border border-white/10 mb-6">
          <TabsTrigger value="prediction">Predikciós Rendszer</TabsTrigger>
          <TabsTrigger value="components">Komponensek</TabsTrigger>
          <TabsTrigger value="design">Tervezési Rendszer</TabsTrigger>
          <TabsTrigger value="utilities">Segédeszközök</TabsTrigger>
        </TabsList>

        <TabsContent value="prediction" className="mt-4">
          <PredictionSystem />
        </TabsContent>

        <TabsContent value="components">
          <ComponentDocumentation />
        </TabsContent>
        
        <TabsContent value="design">
          <DesignTokens />
        </TabsContent>

        <TabsContent value="utilities">
          <CssUtilities />
        </TabsContent>
      </Tabs>
    </AppLayout>
  );
};

export default System;
