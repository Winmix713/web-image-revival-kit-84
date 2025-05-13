
import React, { useState } from 'react';
import { Layout, Search, Package2, BookOpen, Code, Grid } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ComponentDoc from '@/components/system/ComponentDocumentation';
import PackageExport from '@/components/system/PackageExport';
import AppLayout from '@/components/common/AppLayout';
import PageHeader from '@/components/common/PageHeader';

const ComponentLibrary = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedComponents, setSelectedComponents] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  
  // Sample component documentation
  const buttonDoc = {
    name: 'Button',
    description: 'Buttons allow users to trigger an action or event with a single click. For example, you can use a button for allowing a user to submit a form or to navigate to a new page.',
    category: 'ui' as const,
    examples: [
      {
        name: 'Basic Button',
        code: `<Button>Click me</Button>`,
        description: 'A simple button with default styling.'
      },
      {
        name: 'Button Variants',
        code: `<Button variant="default">Default</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>`,
        description: 'Buttons come in different variants to indicate different actions.'
      }
    ],
    props: [
      {
        name: 'variant',
        type: '"default" | "destructive" | "outline" | "ghost" | "link"',
        default: 'default',
        description: 'The visual style of the button.'
      },
      {
        name: 'size',
        type: '"default" | "sm" | "lg" | "icon"',
        default: 'default',
        description: 'The size of the button.'
      }
    ],
    usage: {
      imports: `import { Button } from "@/components/ui/button"`,
      basic: `<Button>Click me</Button>`
    }
  };
  
  const cardDoc = {
    name: 'Card',
    description: 'Cards are used to group related content and actions in the same unit. They can contain text, buttons, images, and other UI elements.',
    category: 'ui' as const,
    examples: [
      {
        name: 'Basic Card',
        code: `<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>Card content goes here</CardContent>\n  <CardFooter>\n    <Button>Action</Button>\n  </CardFooter>\n</Card>`,
        description: 'A basic card with header, content, and footer.'
      }
    ],
    props: [
      {
        name: 'className',
        type: 'string',
        description: 'Additional CSS class names for the card.'
      }
    ],
    usage: {
      imports: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"`,
      basic: `<Card>\n  <CardContent>Basic card</CardContent>\n</Card>`
    }
  };

  const handleComponentSelection = (component: string) => {
    setSelectedComponents(prevSelected =>
      prevSelected.includes(component)
        ? prevSelected.filter(c => c !== component)
        : [...prevSelected, component]
    );
  };

  const handleGeneratePackage = () => {
    console.log('Generating package with:', selectedComponents);
    // Implementation for package generation would go here
  };

  const handleCopyCommand = (command: string) => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AppLayout backgroundVariant="default" headerTitle="Component Library">
      <PageHeader
        title="Component Library"
        description="A collection of reusable components for building modern user interfaces."
        icon={Package2}
        variant="gradient"
        actions={
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                className="pl-10 bg-white/5 border-white/10 text-white w-[240px] focus-visible:ring-blue-500/30"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Button className="bg-gradient-to-r from-blue-600 to-blue-700">
              <Code className="h-4 w-4 mr-2" />
              Documentation
            </Button>
          </div>
        }
      />

      <Tabs defaultValue="overview" value={activeTab} onValueChange={setActiveTab} className="mb-6">
        <TabsList className="grid grid-cols-4 w-full max-w-md mx-auto">
          <TabsTrigger value="overview" className="flex items-center justify-center gap-2">
            <Grid className="h-4 w-4" />
            <span>Overview</span>
          </TabsTrigger>
          <TabsTrigger value="docs" className="flex items-center justify-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>Documentation</span>
          </TabsTrigger>
          <TabsTrigger value="usage" className="flex items-center justify-center gap-2">
            <Code className="h-4 w-4" />
            <span>Usage</span>
          </TabsTrigger>
          <TabsTrigger value="export" className="flex items-center justify-center gap-2">
            <Package2 className="h-4 w-4" />
            <span>Export</span>
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="space-y-8">
        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-3 mb-4 inline-block">
                <Layout className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">UI Components</h3>
              <p className="text-gray-400 mb-4">Basic interface building blocks like buttons, inputs, and cards.</p>
              <p className="text-sm text-blue-400">15 components</p>
            </div>
            
            <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="rounded-lg bg-gradient-to-br from-emerald-500/20 to-green-500/20 p-3 mb-4 inline-block">
                <Grid className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Layout Components</h3>
              <p className="text-gray-400 mb-4">Organize content with grids, containers, and structural elements.</p>
              <p className="text-sm text-emerald-400">8 components</p>
            </div>
            
            <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6 hover:border-blue-500/30 transition-all cursor-pointer">
              <div className="rounded-lg bg-gradient-to-br from-amber-500/20 to-yellow-500/20 p-3 mb-4 inline-block">
                <Package2 className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Data Display</h3>
              <p className="text-gray-400 mb-4">Components for presenting data like tables, charts, and statistics.</p>
              <p className="text-sm text-amber-400">12 components</p>
            </div>
          </div>
          
          <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Component Usage Statistics</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Total Components</p>
                <p className="text-2xl font-bold text-white">35</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Most Used</p>
                <p className="text-2xl font-bold text-white">Button</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Last Updated</p>
                <p className="text-2xl font-bold text-white">Today</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <p className="text-gray-400 text-sm mb-1">Dependencies</p>
                <p className="text-2xl font-bold text-white">3</p>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="docs" className="space-y-6">
          <ComponentDoc {...buttonDoc} />
          <ComponentDoc {...cardDoc} />
        </TabsContent>
        
        <TabsContent value="usage">
          <div className="bg-gray-900/40 border border-white/10 rounded-xl p-6">
            <h3 className="text-xl font-bold text-white mb-4">Component Usage Guidelines</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Installation</h4>
                <div className="bg-black rounded-md p-4 mb-2">
                  <pre className="text-sm text-gray-300 font-mono">npm install @winmix/components</pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Basic Usage</h4>
                <div className="bg-black rounded-md p-4 mb-2">
                  <pre className="text-sm text-gray-300 font-mono">
{`import { Button } from '@winmix/components';

function App() {
  return (
    <Button variant="primary">
      Hello World
    </Button>
  );
}`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-white mb-2">Theming</h4>
                <p className="text-gray-400 mb-4">Components can be themed by adjusting your tailwind.config.js</p>
                <div className="bg-black rounded-md p-4 mb-2">
                  <pre className="text-sm text-gray-300 font-mono">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        secondary: '#10B981',
      }
    }
  },
  plugins: [require('@winmix/components/plugin')],
}`}
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        
        <TabsContent value="export">
          <PackageExport
            onComponentSelection={handleComponentSelection}
            selectedComponents={selectedComponents}
            onGeneratePackage={handleGeneratePackage}
            onCopyCommand={handleCopyCommand}
            copied={copied}
          />
        </TabsContent>
      </div>
    </AppLayout>
  );
};

export default ComponentLibrary;
