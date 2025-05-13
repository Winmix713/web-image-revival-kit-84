
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, Download, Code, Package2, Settings, Layers } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ComponentGroup {
  name: string;
  components: string[];
}

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
  const [activeTab, setActiveTab] = useState("components");
  
  // Organize components by category for better UX
  const componentGroups: ComponentGroup[] = [
    {
      name: "Basic UI",
      components: ["Button", "Card", "Checkbox", "Dropdown", "Input"]
    },
    {
      name: "Advanced UI",
      components: ["Modal", "Select", "Table", "Tabs", "Toast"]
    },
    {
      name: "Layout",
      components: ["Container", "Grid", "Flex", "Box", "Stack"]
    },
    {
      name: "Data Display",
      components: ["Avatar", "Badge", "List", "Stat", "Progress"]
    }
  ];

  return (
    <div className="space-y-6">
      <Tabs defaultValue="components" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid grid-cols-3 mb-4">
          <TabsTrigger value="components" className="flex items-center gap-2">
            <Layers className="h-4 w-4" />
            <span>Components</span>
          </TabsTrigger>
          <TabsTrigger value="settings" className="flex items-center gap-2">
            <Settings className="h-4 w-4" />
            <span>Settings</span>
          </TabsTrigger>
          <TabsTrigger value="installation" className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            <span>Installation</span>
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="components" className="space-y-6">
          <Card className="p-6 bg-gray-900/40 border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4">Export Components</h3>
            <p className="text-gray-400 mb-6">Select the components you want to include in your package</p>
            
            {componentGroups.map((group) => (
              <div key={group.name} className="mb-6">
                <h4 className="text-sm font-medium text-gray-300 mb-3">{group.name}</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                  {group.components.map((component) => (
                    <div 
                      key={component}
                      className="flex items-center space-x-2 bg-gray-800/50 p-3 rounded-lg border border-white/5 hover:border-blue-500/30 cursor-pointer transition-all"
                      onClick={() => onComponentSelection(component)}
                    >
                      <Checkbox
                        checked={selectedComponents.includes(component)}
                        onCheckedChange={() => onComponentSelection(component)}
                      />
                      <label className="text-sm text-gray-300 cursor-pointer">{component}</label>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-400">
                {selectedComponents.length} components selected
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700" onClick={onGeneratePackage}>
                <Package2 className="h-4 w-4 mr-2" />
                Generate Package
              </Button>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="settings" className="space-y-4">
          <Card className="p-6 bg-gray-900/40 border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4">Package Settings</h3>
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-300 block mb-2">Package Name</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800/50 border border-white/10 rounded-md px-3 py-2 text-white"
                  placeholder="@your-org/components" 
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-300 block mb-2">Version</label>
                <input 
                  type="text" 
                  className="w-full bg-gray-800/50 border border-white/10 rounded-md px-3 py-2 text-white"
                  placeholder="1.0.0" 
                />
              </div>
              
              <div>
                <label className="text-sm text-gray-300 block mb-2">Output Format</label>
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="bg-blue-600/20 border-blue-500/30 text-white">
                    ESM
                  </Button>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white">
                    CJS
                  </Button>
                  <Button variant="outline" className="bg-white/5 border-white/10 text-white">
                    UMD
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="types" />
                <label htmlFor="types" className="text-sm text-gray-300">Include TypeScript types</label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="minify" />
                <label htmlFor="minify" className="text-sm text-gray-300">Minify output</label>
              </div>
            </div>
          </Card>
        </TabsContent>
        
        <TabsContent value="installation" className="space-y-4">
          <Card className="p-6 bg-gray-900/40 border-white/5">
            <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
            <p className="text-gray-400 mb-6">Use these commands to install and use the generated package</p>
            
            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">NPM</h4>
                <div className="bg-black rounded-md p-4 mb-4 relative">
                  <code className="text-gray-300 font-mono text-sm">npm install @winmix/components@latest</code>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute right-2 top-2 h-8 w-8 p-0 bg-gray-800/70 hover:bg-gray-700"
                    onClick={() => onCopyCommand("npm install @winmix/components@latest")}
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">Yarn</h4>
                <div className="bg-black rounded-md p-4 mb-4 relative">
                  <code className="text-gray-300 font-mono text-sm">yarn add @winmix/components@latest</code>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute right-2 top-2 h-8 w-8 p-0 bg-gray-800/70 hover:bg-gray-700"
                    onClick={() => onCopyCommand("yarn add @winmix/components@latest")}
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-300 mb-2">pnpm</h4>
                <div className="bg-black rounded-md p-4 relative">
                  <code className="text-gray-300 font-mono text-sm">pnpm add @winmix/components@latest</code>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute right-2 top-2 h-8 w-8 p-0 bg-gray-800/70 hover:bg-gray-700"
                    onClick={() => onCopyCommand("pnpm add @winmix/components@latest")}
                  >
                    {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </div>
            
            <Separator className="my-6 bg-white/10" />
            
            <div>
              <h4 className="text-sm font-medium text-gray-300 mb-2">Usage Example</h4>
              <div className="bg-black rounded-md p-4 relative">
                <pre className="text-gray-300 font-mono text-sm overflow-x-auto">
{`import { Button } from '@winmix/components';

function App() {
  return (
    <Button variant="primary">
      Hello World
    </Button>
  );
}`}
                </pre>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute right-2 top-2 h-8 w-8 p-0 bg-gray-800/70 hover:bg-gray-700"
                  onClick={() => onCopyCommand(`import { Button } from '@winmix/components';\n\nfunction App() {\n  return (\n    <Button variant="primary">\n      Hello World\n    </Button>\n  );\n}`)}
                >
                  {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PackageExport;
