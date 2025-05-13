
import React from 'react';
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Copy, Check, Download } from 'lucide-react';
import { Card } from "@/components/ui/card";

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
  const components = [
    "Button", "Card", "Checkbox", "Dropdown", "Input",
    "Modal", "Select", "Table", "Tabs", "Toast"
  ];

  return (
    <div className="space-y-6">
      <Card className="p-6 bg-gray-900/40 border-white/5">
        <h3 className="text-lg font-semibold text-white mb-4">Export Components</h3>
        <p className="text-gray-400 mb-6">Select the components you want to include in your package</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6">
          {components.map((component) => (
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
        
        <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={onGeneratePackage}>
          <Download className="h-4 w-4 mr-2" />
          Generate Package
        </Button>
      </Card>
      
      <Card className="p-6 bg-gray-900/40 border-white/5">
        <h3 className="text-lg font-semibold text-white mb-4">Installation</h3>
        <p className="text-gray-400 mb-6">Use this command to install the generated package</p>
        
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
      </Card>
    </div>
  );
};

export default PackageExport;
