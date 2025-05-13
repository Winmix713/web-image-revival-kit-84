
import React, { useState } from 'react';
import { ChevronDown, Package2, Code, Layout, Puzzle, Copy, Check, ExternalLink } from 'lucide-react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from '@/components/ui/collapsible';
import { Separator } from "@/components/ui/separator";

interface ComponentExample {
  name: string;
  code: string;
  description: string;
}

interface ComponentDocProps {
  name: string;
  description: string;
  category: 'ui' | 'layout' | 'data' | 'form';
  examples: ComponentExample[];
  props?: {
    name: string;
    type: string;
    default?: string;
    description: string;
    required?: boolean;
  }[];
  usage?: {
    imports: string;
    basic: string;
  };
}

const ComponentDoc: React.FC<ComponentDocProps> = ({
  name,
  description,
  category,
  examples,
  props = [],
  usage = { imports: '', basic: '' }
}) => {
  const [openSection, setOpenSection] = useState<string | null>('overview');
  const [copied, setCopied] = useState<string | null>(null);

  const getCategoryIcon = () => {
    switch (category) {
      case 'ui': return <Puzzle className="h-5 w-5 text-blue-400" />;
      case 'layout': return <Layout className="h-5 w-5 text-emerald-400" />;
      case 'data': return <Package2 className="h-5 w-5 text-amber-400" />;
      case 'form': return <Code className="h-5 w-5 text-purple-400" />;
      default: return <Puzzle className="h-5 w-5 text-blue-400" />;
    }
  };

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 mb-8 max-w-4xl mx-auto">
      <div className="flex items-center gap-3 mb-6">
        {getCategoryIcon()}
        <h2 className="text-2xl font-bold text-white">{name}</h2>
        <span className="px-2 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-400 uppercase">
          {category}
        </span>
      </div>
      
      <p className="text-gray-300 mb-8">{description}</p>
      
      <div className="space-y-4">
        {/* Overview Section */}
        <Collapsible 
          open={openSection === 'overview'}
          onOpenChange={() => setOpenSection(openSection === 'overview' ? null : 'overview')}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">Overview</span>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${openSection === 'overview' ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="p-4 bg-black/20 rounded-lg mt-2">
            <div className="mb-4">
              <h4 className="text-sm font-medium text-gray-400 mb-2">Basic Usage</h4>
              <div className="relative">
                <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">{usage.imports}</pre>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-2 right-2 h-8 w-8 p-0"
                  onClick={() => copyToClipboard(usage.imports, 'imports')}
                >
                  {copied === 'imports' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-400" />}
                </Button>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-400 mb-2">Basic Example</h4>
              <div className="relative">
                <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                  <pre className="text-sm text-gray-300 font-mono">{usage.basic}</pre>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="absolute top-2 right-2 h-8 w-8 p-0"
                  onClick={() => copyToClipboard(usage.basic, 'basic')}
                >
                  {copied === 'basic' ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-400" />}
                </Button>
              </div>
            </div>
          </CollapsibleContent>
        </Collapsible>
        
        {/* Props Section */}
        {props.length > 0 && (
          <Collapsible 
            open={openSection === 'props'}
            onOpenChange={() => setOpenSection(openSection === 'props' ? null : 'props')}
          >
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left">
              <div className="flex items-center gap-2">
                <span className="font-medium text-white">Props</span>
              </div>
              <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${openSection === 'props' ? 'rotate-180' : ''}`} />
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 bg-black/20 rounded-lg mt-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="p-2 text-sm font-medium text-gray-400">Name</th>
                      <th className="p-2 text-sm font-medium text-gray-400">Type</th>
                      <th className="p-2 text-sm font-medium text-gray-400">Default</th>
                      <th className="p-2 text-sm font-medium text-gray-400">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.map((prop, index) => (
                      <tr key={index} className={index !== props.length - 1 ? "border-b border-white/5" : ""}>
                        <td className="p-2 text-sm text-white">
                          {prop.name}
                          {prop.required && <span className="text-red-400 ml-1">*</span>}
                        </td>
                        <td className="p-2 text-sm text-blue-400 font-mono">{prop.type}</td>
                        <td className="p-2 text-sm text-gray-400 font-mono">{prop.default || '-'}</td>
                        <td className="p-2 text-sm text-gray-300">{prop.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CollapsibleContent>
          </Collapsible>
        )}
        
        {/* Examples Section */}
        <Collapsible 
          open={openSection === 'examples'}
          onOpenChange={() => setOpenSection(openSection === 'examples' ? null : 'examples')}
        >
          <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-white/5 hover:bg-white/10 rounded-lg text-left">
            <div className="flex items-center gap-2">
              <span className="font-medium text-white">Examples</span>
            </div>
            <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform ${openSection === 'examples' ? 'rotate-180' : ''}`} />
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 mt-2">
            {examples.map((example, index) => (
              <div key={index} className="p-4 bg-black/20 rounded-lg">
                <h4 className="text-sm font-medium text-white mb-2">{example.name}</h4>
                <p className="text-sm text-gray-300 mb-4">{example.description}</p>
                <div className="relative">
                  <div className="bg-gray-800 rounded-md p-4 overflow-x-auto">
                    <pre className="text-sm text-gray-300 font-mono">{example.code}</pre>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="absolute top-2 right-2 h-8 w-8 p-0"
                    onClick={() => copyToClipboard(example.code, `example-${index}`)}
                  >
                    {copied === `example-${index}` ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4 text-gray-400" />}
                  </Button>
                </div>
              </div>
            ))}
          </CollapsibleContent>
        </Collapsible>
      </div>
      
      <Separator className="my-6 bg-white/10" />
      
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Last updated: {new Date().toLocaleDateString()}
        </div>
        <Button variant="outline" className="bg-white/5 border-white/10">
          <ExternalLink className="h-4 w-4 mr-2" />
          View Source
        </Button>
      </div>
    </div>
  );
};

export default ComponentDoc;
