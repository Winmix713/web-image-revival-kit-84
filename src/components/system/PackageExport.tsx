
import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Package, Globe, Copy, Check, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { COMPONENT_LIBRARY } from "./component-library-data";

interface PackageExportProps {
  onComponentSelection: (component: string) => void;
  selectedComponents: string[];
  onGeneratePackage: () => void;
  onCopyCommand: (command: string) => void;
  copied: boolean;
}

const PackageExport: React.FC<PackageExportProps> = ({
  onComponentSelection,
  selectedComponents,
  onGeneratePackage,
  onCopyCommand,
  copied
}) => {
  const [packageName, setPackageName] = useState("winmix-ui");
  const [packageVersion, setPackageVersion] = useState("1.0.0");
  const [exportFormat, setExportFormat] = useState("module");
  const [installMethod, setInstallMethod] = useState("npm");
  
  // Generate install command based on the selected method
  const getInstallCommand = () => {
    switch (installMethod) {
      case "npm":
        return `npm install ${packageName}@${packageVersion}`;
      case "yarn":
        return `yarn add ${packageName}@${packageVersion}`;
      case "pnpm":
        return `pnpm add ${packageName}@${packageVersion}`;
      default:
        return `npm install ${packageName}@${packageVersion}`;
    }
  };

  // Calculate estimated bundle size based on selected components
  const calculateBundleSize = () => {
    const baseSize = 25; // Base size in KB
    const perComponentSize = 5; // Size per component in KB
    return baseSize + (selectedComponents.length * perComponentSize);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm md:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="w-5 h-5 text-blue-400" />
              Component Export
            </CardTitle>
            <CardDescription>
              Customize and export only the components you need
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Package Name</label>
                <Input 
                  value={packageName} 
                  onChange={(e) => setPackageName(e.target.value)}
                  placeholder="package-name"
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Version</label>
                <Input 
                  value={packageVersion} 
                  onChange={(e) => setPackageVersion(e.target.value)}
                  placeholder="1.0.0"
                  className="bg-black/50 border-white/10 text-white"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Export Format</label>
                <Select value={exportFormat} onValueChange={setExportFormat}>
                  <SelectTrigger className="bg-black/50 border-white/10 text-white">
                    <SelectValue placeholder="Select format" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/10">
                    <SelectItem value="module">ES Module</SelectItem>
                    <SelectItem value="commonjs">CommonJS</SelectItem>
                    <SelectItem value="standalone">Standalone</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm text-gray-400 mb-1 block">Dependencies</label>
                <Select defaultValue="minimal">
                  <SelectTrigger className="bg-black/50 border-white/10 text-white">
                    <SelectValue placeholder="Select dependencies" />
                  </SelectTrigger>
                  <SelectContent className="bg-gray-900 border-white/10">
                    <SelectItem value="all">Include All</SelectItem>
                    <SelectItem value="minimal">Minimal (Peer)</SelectItem>
                    <SelectItem value="none">None</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="flex items-center justify-between bg-blue-500/10 rounded-lg p-3 border border-blue-500/20">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-blue-400" />
                <span className="text-white text-sm">Selected components: <strong>{selectedComponents.length}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white text-sm">Estimated bundle size: <strong>{calculateBundleSize()} KB</strong></span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button onClick={onGeneratePackage} className="bg-blue-600 hover:bg-blue-700">
              <Download className="w-4 h-4 mr-2" />
              Generate Package
            </Button>
          </CardFooter>
        </Card>

        <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-400" />
              Installation
            </CardTitle>
            <CardDescription>
              How to install the generated package
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Tabs defaultValue="npm" onValueChange={setInstallMethod}>
              <TabsList className="bg-black/50 grid w-full grid-cols-3">
                <TabsTrigger value="npm">npm</TabsTrigger>
                <TabsTrigger value="yarn">yarn</TabsTrigger>
                <TabsTrigger value="pnpm">pnpm</TabsTrigger>
              </TabsList>
            </Tabs>
            
            <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative group">
              <p className="text-white break-all">{getInstallCommand()}</p>
              <button 
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                onClick={() => onCopyCommand(getInstallCommand())}
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
              </button>
            </div>
            
            <div className="p-3 border border-white/10 rounded-lg bg-black/20">
              <h4 className="text-sm font-medium text-white mb-2">After installation</h4>
              <p className="text-xs text-gray-400">Import components from the package:</p>
              <pre className="mt-2 overflow-x-auto p-2 bg-black/40 rounded text-xs text-blue-300">
                import {'{'}
                  {selectedComponents.length > 0 
                    ? selectedComponents.join(', ')
                    : 'Component'
                  }
                {'}'} from '{packageName}';
              </pre>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>Component Selection</span>
            <Badge variant="outline" className="text-blue-400 border-blue-400">
              {selectedComponents.length} selected
            </Badge>
          </CardTitle>
          <CardDescription>
            Select the components you want to include in your export package
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <Input
              placeholder="Search components..."
              className="bg-black/50 border-white/10 text-white"
            />
            
            <Accordion type="multiple" className="w-full">
              {COMPONENT_LIBRARY.map((category) => (
                <AccordionItem key={category.name} value={category.name} className="border-white/10">
                  <AccordionTrigger className="hover:bg-white/5 px-4 py-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <category.icon className="h-5 w-5 text-blue-400" />
                      <span>{category.name}</span>
                      <Badge className="ml-2 bg-blue-500/20 text-blue-300">{category.components.length}</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-2">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {category.components.map((component) => (
                        <div 
                          key={component.name}
                          className={`flex items-center gap-2 p-2 rounded-lg border ${
                            selectedComponents.includes(component.name) 
                              ? 'bg-blue-500/10 border-blue-500/30' 
                              : 'border-transparent hover:bg-white/5'
                          } cursor-pointer transition-colors duration-200`}
                          onClick={() => onComponentSelection(component.name)}
                        >
                          <Checkbox 
                            checked={selectedComponents.includes(component.name)}
                            className="border-white/20 data-[state=checked]:bg-blue-500"
                          />
                          <label className="cursor-pointer text-sm flex-1">{component.name}</label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </CardContent>
        <CardFooter className="justify-between border-t border-white/10 pt-6">
          <Button variant="outline" className="border-white/10" onClick={() => setSelectedComponents([])}>
            Clear Selection
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700" onClick={onGeneratePackage}>
            <Package className="w-4 h-4 mr-2" />
            Generate Package
          </Button>
        </CardFooter>
      </Card>
      
      <Card className="bg-gray-900/40 border border-white/5 backdrop-blur-sm">
        <CardHeader>
          <CardTitle>Component Usage Documentation</CardTitle>
          <CardDescription>Access comprehensive documentation for each component</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between border border-white/10 rounded-lg p-4 bg-black/30">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                <ExternalLink className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <h3 className="text-white font-medium">Component Documentation</h3>
                <p className="text-sm text-gray-400">Complete API reference and usage examples</p>
              </div>
            </div>
            <Button variant="outline" className="border-white/10">
              View Docs
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PackageExport;
