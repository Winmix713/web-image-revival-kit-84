
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check, ExternalLink } from "lucide-react";

const InstallationGuide = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Installation Guide</h2>
        <p className="text-gray-400 mb-6">
          Learn how to install and set up the design system in your project
        </p>
      </div>

      <Tabs defaultValue="npm" className="w-full">
        <TabsList className="mb-4 bg-gray-800/50 grid grid-cols-3">
          <TabsTrigger value="npm" className="data-[state=active]:bg-blue-500/20">
            NPM
          </TabsTrigger>
          <TabsTrigger value="manual" className="data-[state=active]:bg-blue-500/20">
            Manual Setup
          </TabsTrigger>
          <TabsTrigger value="cdn" className="data-[state=active]:bg-blue-500/20">
            CDN
          </TabsTrigger>
        </TabsList>

        {/* NPM Installation */}
        <TabsContent value="npm" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Install with NPM</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">npm install winmix-design-system</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("npm-install", "npm install winmix-design-system")}
                >
                  {copiedCode === "npm-install" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>

              <h4 className="text-white font-medium mt-4">Import Styles</h4>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">import "winmix-design-system/styles.css";</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("npm-import-styles", 'import "winmix-design-system/styles.css";')}
                >
                  {copiedCode === "npm-import-styles" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>

              <h4 className="text-white font-medium mt-4">Import Components</h4>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">import {"{ Button, Card }"} from "winmix-design-system";</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("npm-import-components", 'import { Button, Card } from "winmix-design-system";')}
                >
                  {copiedCode === "npm-import-components" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Configure Tailwind CSS</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Update your tailwind.config.js to include the design system's presets:
              </p>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative overflow-auto max-h-96">
                <pre className="text-white">
{`/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('winmix-design-system/tailwind.config')
  ],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/winmix-design-system/**/*.js',
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
}`}
                </pre>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("npm-tailwind-config", `/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [
    require('winmix-design-system/tailwind.config')
  ],
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/winmix-design-system/**/*.js',
  ],
  theme: {
    extend: {
      // Your custom theme extensions
    },
  },
  plugins: [],
}`)}
                >
                  {copiedCode === "npm-tailwind-config" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Manual Installation */}
        <TabsContent value="manual" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Manual Setup</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="text-white font-medium">1. Download the files</h4>
              <p className="text-gray-400">
                Download the component files and style sheets from the repository.
              </p>
              
              <h4 className="text-white font-medium mt-4">2. Copy Files Structure</h4>
              <p className="text-gray-400 mb-2">
                Copy the following files to your project:
              </p>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative overflow-auto max-h-80">
                <pre className="text-white">
{`src/
├── components/
│   └── ui/
│       ├── button.tsx
│       ├── card.tsx
│       ├── avatar.tsx
│       └── ...
├── lib/
│   └── utils.ts
└── styles/
    ├── globals.css
    └── tokens.css`}
                </pre>
              </div>

              <h4 className="text-white font-medium mt-4">3. Configure Tailwind CSS</h4>
              <p className="text-gray-400 mb-2">
                Add these paths to your tailwind.config.js:
              </p>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <pre className="text-white">
{`/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Your current content paths
    './components/**/*.{js,ts,jsx,tsx}',
    // Add the design system components
    './components/ui/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}`}
                </pre>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("manual-tailwind", `/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Your current content paths
    './components/**/*.{js,ts,jsx,tsx}',
    // Add the design system components
    './components/ui/**/*.{js,ts,jsx,tsx}',
  ],
  // ...
}`)}
                >
                  {copiedCode === "manual-tailwind" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>

              <h4 className="text-white font-medium mt-4">4. Import Styles</h4>
              <p className="text-gray-400 mb-2">
                Import the CSS files in your main stylesheet:
              </p>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">@import "./styles/tokens.css";</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("manual-import", '@import "./styles/tokens.css";')}
                >
                  {copiedCode === "manual-import" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Dependencies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-4">
                Install these required dependencies:
              </p>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">npm install react react-dom tailwindcss postcss autoprefixer</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("manual-deps", 'npm install react react-dom tailwindcss postcss autoprefixer')}
                >
                  {copiedCode === "manual-deps" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
              
              <p className="text-gray-400 mt-4 mb-2">
                Component-specific dependencies:
              </p>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">npm install @radix-ui/react-dialog @radix-ui/react-toast lucide-react class-variance-authority tailwind-merge</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("manual-ui-deps", 'npm install @radix-ui/react-dialog @radix-ui/react-toast lucide-react class-variance-authority tailwind-merge')}
                >
                  {copiedCode === "manual-ui-deps" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CDN Installation */}
        <TabsContent value="cdn" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Use via CDN</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <h4 className="text-white font-medium">1. Add CSS from CDN</h4>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">&lt;link rel="stylesheet" href="https://cdn.winmix.com/design-system@1.0.0/style.css"&gt;</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("cdn-css", '<link rel="stylesheet" href="https://cdn.winmix.com/design-system@1.0.0/style.css">')}
                >
                  {copiedCode === "cdn-css" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>

              <h4 className="text-white font-medium mt-4">2. Add JavaScript from CDN</h4>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative">
                <p className="text-white">&lt;script src="https://cdn.winmix.com/design-system@1.0.0/index.js"&gt;&lt;/script&gt;</p>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("cdn-js", '<script src="https://cdn.winmix.com/design-system@1.0.0/index.js"></script>')}
                >
                  {copiedCode === "cdn-js" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>

              <h4 className="text-white font-medium mt-4">3. Use Components</h4>
              <div className="bg-black/50 p-3 rounded-md font-mono text-sm relative overflow-auto max-h-80">
                <pre className="text-white">
{`<!DOCTYPE html>
<html>
<head>
  <title>WinMix Design System Example</title>
  <link rel="stylesheet" href="https://cdn.winmix.com/design-system@1.0.0/style.css">
</head>
<body>
  <div id="app"></div>
  
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.winmix.com/design-system@1.0.0/index.js"></script>
  
  <script>
    const { Button, Card, CardHeader, CardContent, CardTitle } = WinMixDS;
    
    const App = () => {
      return React.createElement(Card, {}, [
        React.createElement(CardHeader, {}, 
          React.createElement(CardTitle, {}, "Hello World")
        ),
        React.createElement(CardContent, {}, 
          React.createElement(Button, {}, "Click Me")
        )
      ]);
    };
    
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('app')
    );
  </script>
</body>
</html>`}
                </pre>
                <button 
                  className="absolute top-2 right-2 opacity-70 hover:opacity-100 transition-opacity"
                  onClick={() => handleCopyCode("cdn-example", `<!DOCTYPE html>
<html>
<head>
  <title>WinMix Design System Example</title>
  <link rel="stylesheet" href="https://cdn.winmix.com/design-system@1.0.0/style.css">
</head>
<body>
  <div id="app"></div>
  
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.winmix.com/design-system@1.0.0/index.js"></script>
  
  <script>
    const { Button, Card, CardHeader, CardContent, CardTitle } = WinMixDS;
    
    const App = () => {
      return React.createElement(Card, {}, [
        React.createElement(CardHeader, {}, 
          React.createElement(CardTitle, {}, "Hello World")
        ),
        React.createElement(CardContent, {}, 
          React.createElement(Button, {}, "Click Me")
        )
      ]);
    };
    
    ReactDOM.render(
      React.createElement(App),
      document.getElementById('app')
    );
  </script>
</body>
</html>`)}
                >
                  {copiedCode === "cdn-example" ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4 text-gray-400" />}
                </button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">CDN Limitations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4 text-gray-400">
                <p>
                  While using the CDN is the quickest way to get started, it comes with some limitations:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li>Less flexibility for customization</li>
                  <li>Potential performance impact from loading external resources</li>
                  <li>No tree-shaking (you get all components even if you only use a few)</li>
                  <li>Harder to integrate with build tools and bundlers</li>
                  <li>Version management can be more difficult</li>
                </ul>
                <p>
                  For production applications, we recommend using the NPM package for better performance and customization options.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Card className="bg-gray-900/40 border border-white/5">
        <CardHeader>
          <CardTitle className="text-white">Additional Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <a href="#" className="block p-4 bg-gray-800/50 rounded-lg border border-white/10 hover:bg-gray-800/70 transition-colors group">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Documentation</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400 mt-1">Complete reference for all components</p>
            </a>
            
            <a href="#" className="block p-4 bg-gray-800/50 rounded-lg border border-white/10 hover:bg-gray-800/70 transition-colors group">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">Tutorials</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400 mt-1">Step-by-step guides for beginners</p>
            </a>
            
            <a href="#" className="block p-4 bg-gray-800/50 rounded-lg border border-white/10 hover:bg-gray-800/70 transition-colors group">
              <div className="flex items-center gap-2">
                <span className="text-white font-medium">GitHub</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
              </div>
              <p className="text-sm text-gray-400 mt-1">Source code and contribution guidelines</p>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default InstallationGuide;
