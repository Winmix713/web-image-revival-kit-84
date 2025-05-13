
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Download, Package, Globe, Copy, Check, ExternalLink, CheckCircle, AlertCircle, Sparkles } from "lucide-react";
import { toast } from "sonner";
import ComponentShowcase from "@/components/system/ComponentShowcase";
import DesignTokens from "@/components/system/DesignTokens";
import CssUtilities from "@/components/system/CssUtilities";
import InstallationGuide from "@/components/system/InstallationGuide";
import PackageExport from "@/components/system/PackageExport";

const System = () => {
  const [activeTab, setActiveTab] = useState("components");
  const [copied, setCopied] = useState(false);
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success("Command copied to clipboard");
  };

  const handleComponentSelection = (component: string) => {
    setSelectedComponents(prev => 
      prev.includes(component) 
        ? prev.filter(c => c !== component) 
        : [...prev, component]
    );
  };

  const handleGeneratePackage = () => {
    if (selectedComponents.length === 0) {
      toast.error("Please select at least one component");
      return;
    }
    toast.success(`Package generated with ${selectedComponents.length} components`, {
      description: "Download will start automatically"
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="mb-8 space-y-4">
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">WinMix Design System</h1>
          <p className="text-gray-400 text-lg">
            A comprehensive collection of reusable components, design tokens, and guidelines for creating consistent interfaces
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge>v1.0.0</Badge>
          <Badge variant="outline" className="text-blue-400 border-blue-400">React</Badge>
          <Badge variant="outline" className="text-purple-400 border-purple-400">Vite</Badge>
          <Badge variant="outline" className="text-teal-400 border-teal-400">Tailwind CSS</Badge>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <div className="bg-gray-900/40 border border-white/5 backdrop-blur-sm rounded-lg p-1">
          <TabsList className="w-full grid grid-cols-2 md:grid-cols-5 bg-gray-900/60">
            <TabsTrigger value="components" className="data-[state=active]:bg-blue-500/20">
              Components
            </TabsTrigger>
            <TabsTrigger value="design-tokens" className="data-[state=active]:bg-blue-500/20">
              Design Tokens
            </TabsTrigger>
            <TabsTrigger value="css-utilities" className="data-[state=active]:bg-blue-500/20">
              CSS Utilities
            </TabsTrigger>
            <TabsTrigger value="installation" className="data-[state=active]:bg-blue-500/20">
              Installation
            </TabsTrigger>
            <TabsTrigger value="export" className="data-[state=active]:bg-blue-500/20">
              Export
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="components" className="animate-slide-in-bottom space-y-8">
          <ComponentShowcase />
        </TabsContent>

        <TabsContent value="design-tokens" className="animate-slide-in-bottom space-y-6">
          <DesignTokens />
        </TabsContent>

        <TabsContent value="css-utilities" className="animate-slide-in-bottom space-y-6">
          <CssUtilities />
        </TabsContent>

        <TabsContent value="installation" className="animate-slide-in-bottom space-y-6">
          <InstallationGuide />
        </TabsContent>

        <TabsContent value="export" className="animate-slide-in-bottom space-y-6">
          <PackageExport 
            onComponentSelection={handleComponentSelection}
            selectedComponents={selectedComponents}
            onGeneratePackage={handleGeneratePackage}
            onCopyCommand={handleCopyCommand}
            copied={copied}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default System;
