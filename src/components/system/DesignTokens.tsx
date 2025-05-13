
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

const DesignTokens = () => {
  const [copiedToken, setCopiedToken] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedToken(id);
    setTimeout(() => setCopiedToken(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Design Tokens</h2>
        <p className="text-gray-400 mb-6">
          Foundational design values that can be used across your projects
        </p>
      </div>

      <Tabs defaultValue="colors" className="w-full">
        <TabsList className="mb-4 bg-gray-800/50 grid grid-cols-5">
          <TabsTrigger value="colors" className="data-[state=active]:bg-blue-500/20">
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="data-[state=active]:bg-blue-500/20">
            Typography
          </TabsTrigger>
          <TabsTrigger value="spacing" className="data-[state=active]:bg-blue-500/20">
            Spacing
          </TabsTrigger>
          <TabsTrigger value="shadows" className="data-[state=active]:bg-blue-500/20">
            Shadows
          </TabsTrigger>
          <TabsTrigger value="animations" className="data-[state=active]:bg-blue-500/20">
            Animations
          </TabsTrigger>
        </TabsList>

        {/* Colors */}
        <TabsContent value="colors" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Primary Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorToken name="background" value="hsl(var(--background))" hexValue="#020205" />
                <ColorToken name="foreground" value="hsl(var(--foreground))" hexValue="#FCFCFC" />
                <ColorToken name="primary" value="hsl(var(--primary))" hexValue="#171A1F" />
                <ColorToken name="primary-foreground" value="hsl(var(--primary-foreground))" hexValue="#FAFAFA" />
                <ColorToken name="secondary" value="hsl(var(--secondary))" hexValue="#272B37" />
                <ColorToken name="secondary-foreground" value="hsl(var(--secondary-foreground))" hexValue="#FAFAFA" />
                <ColorToken name="muted" value="hsl(var(--muted))" hexValue="#272B37" />
                <ColorToken name="muted-foreground" value="hsl(var(--muted-foreground))" hexValue="#A6A8B0" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Accent Colors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <ColorToken name="accent" value="hsl(var(--accent))" hexValue="#272B37" />
                <ColorToken name="accent-foreground" value="hsl(var(--accent-foreground))" hexValue="#FAFAFA" />
                <ColorToken name="destructive" value="hsl(var(--destructive))" hexValue="#7C2D12" />
                <ColorToken name="destructive-foreground" value="hsl(var(--destructive-foreground))" hexValue="#FAFAFA" />
                <ColorToken name="border" value="hsl(var(--border))" hexValue="#272B37" />
                <ColorToken name="input" value="hsl(var(--input))" hexValue="#272B37" />
                <ColorToken name="ring" value="hsl(var(--ring))" hexValue="#D6D9E6" />
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("colors", `:root {
  --background: 240 10% 3.9%;
  --foreground: 0 0% 98%;
  --card: 240 10% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 240 10% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 240 5.9% 10%;
  --secondary: 240 3.7% 15.9%;
  --secondary-foreground: 0 0% 98%;
  --muted: 240 3.7% 15.9%;
  --muted-foreground: 240 5% 64.9%;
  --accent: 240 3.7% 15.9%;
  --accent-foreground: 0 0% 98%;
  --destructive: 0 62.8% 30.6%;
  --destructive-foreground: 0 0% 98%;
  --border: 240 3.7% 15.9%;
  --input: 240 3.7% 15.9%;
  --ring: 240 4.9% 83.9%;
}`)}
            >
              {copiedToken === "colors" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>

        {/* Typography */}
        <TabsContent value="typography" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Font Families</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-sm text-gray-400">Default Font</p>
                  <p className="text-xl text-white font-sans">The quick brown fox jumps over the lazy dog</p>
                  <p className="text-xs text-gray-500">font-sans</p>
                </div>
                <div className="space-y-1 pt-2">
                  <p className="text-sm text-gray-400">Monospace Font</p>
                  <p className="text-xl text-white font-mono">The quick brown fox jumps over the lazy dog</p>
                  <p className="text-xs text-gray-500">font-mono</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Font Sizes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-xs</span>
                  <span className="text-xs text-white">Extra Small - 0.75rem</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-sm</span>
                  <span className="text-sm text-white">Small - 0.875rem</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-base</span>
                  <span className="text-base text-white">Base - 1rem</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-lg</span>
                  <span className="text-lg text-white">Large - 1.125rem</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-xl</span>
                  <span className="text-xl text-white">Extra Large - 1.25rem</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-2xl</span>
                  <span className="text-2xl text-white">2XL - 1.5rem</span>
                </div>
                <div className="flex items-center justify-between pb-2 border-b border-white/10">
                  <span className="text-gray-400">text-3xl</span>
                  <span className="text-3xl text-white">3XL - 1.875rem</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">text-4xl</span>
                  <span className="text-4xl text-white">4XL - 2.25rem</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Font configuration in Tailwind CSS */
theme: {
  fontFamily: {
    sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem' }],
    'sm': ['0.875rem', { lineHeight: '1.25rem' }],
    'base': ['1rem', { lineHeight: '1.5rem' }],
    'lg': ['1.125rem', { lineHeight: '1.75rem' }],
    'xl': ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  }
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("typography", `/* Font configuration in Tailwind CSS */
theme: {
  fontFamily: {
    sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    'xs': ['0.75rem', { lineHeight: '1rem' }],
    'sm': ['0.875rem', { lineHeight: '1.25rem' }],
    'base': ['1rem', { lineHeight: '1.5rem' }],
    'lg': ['1.125rem', { lineHeight: '1.75rem' }],
    'xl': ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
    '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
    '5xl': ['3rem', { lineHeight: '1' }],
    '6xl': ['3.75rem', { lineHeight: '1' }],
  }
}`)}
            >
              {copiedToken === "typography" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>

        {/* Spacing */}
        <TabsContent value="spacing" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Spacing Scale</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: "0", value: "0px" },
                  { name: "0.5", value: "0.125rem (2px)" },
                  { name: "1", value: "0.25rem (4px)" },
                  { name: "1.5", value: "0.375rem (6px)" },
                  { name: "2", value: "0.5rem (8px)" },
                  { name: "3", value: "0.75rem (12px)" },
                  { name: "4", value: "1rem (16px)" },
                  { name: "5", value: "1.25rem (20px)" },
                  { name: "6", value: "1.5rem (24px)" },
                  { name: "8", value: "2rem (32px)" },
                  { name: "10", value: "2.5rem (40px)" },
                  { name: "12", value: "3rem (48px)" },
                  { name: "16", value: "4rem (64px)" },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between pb-2 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div 
                        className="bg-blue-500 rounded-md" 
                        style={{ 
                          width: item.name === "0" ? 4 : `${parseFloat(item.name) * 0.25}rem`, 
                          height: item.name === "0" ? 4 : `${parseFloat(item.name) * 0.25}rem` 
                        }}
                      />
                      <span className="text-gray-400">p-{item.name}, m-{item.name}</span>
                    </div>
                    <span className="text-white">{item.value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Spacing configuration in Tailwind CSS */
theme: {
  spacing: {
    '0': '0px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    // ... and more
  }
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("spacing", `/* Spacing configuration in Tailwind CSS */
theme: {
  spacing: {
    '0': '0px',
    '0.5': '0.125rem',
    '1': '0.25rem',
    '1.5': '0.375rem',
    '2': '0.5rem',
    '2.5': '0.625rem',
    '3': '0.75rem',
    '3.5': '0.875rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '7': '1.75rem',
    '8': '2rem',
    '9': '2.25rem',
    '10': '2.5rem',
    '11': '2.75rem',
    '12': '3rem',
    '14': '3.5rem',
    '16': '4rem',
    // ... and more
  }
}`)}
            >
              {copiedToken === "spacing" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>

        {/* Shadows */}
        <TabsContent value="shadows" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="bg-gray-900/40 border border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Shadow Utilities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800 rounded-lg shadow-sm">
                    <p className="text-white mb-2">shadow-sm</p>
                    <p className="text-gray-400 text-xs">0px 1px 2px 0px rgba(0, 0, 0, 0.05)</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg shadow">
                    <p className="text-white mb-2">shadow (default)</p>
                    <p className="text-gray-400 text-xs">0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg shadow-md">
                    <p className="text-white mb-2">shadow-md</p>
                    <p className="text-gray-400 text-xs">0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gray-900/40 border border-white/5">
              <CardHeader>
                <CardTitle className="text-white">Advanced Shadow Effects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
                    <p className="text-white mb-2">shadow-lg</p>
                    <p className="text-gray-400 text-xs">0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg shadow-xl">
                    <p className="text-white mb-2">shadow-xl</p>
                    <p className="text-gray-400 text-xs">0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)</p>
                  </div>
                  <div className="p-6 bg-gray-800 rounded-lg shadow-2xl">
                    <p className="text-white mb-2">shadow-2xl</p>
                    <p className="text-gray-400 text-xs">0px 25px 50px -12px rgba(0, 0, 0, 0.25)</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Shadow configuration in Tailwind CSS */
theme: {
  boxShadow: {
    sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    DEFAULT: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
    none: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)'
  }
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("shadows", `/* Shadow configuration in Tailwind CSS */
theme: {
  boxShadow: {
    sm: '0px 1px 2px 0px rgba(0, 0, 0, 0.05)',
    DEFAULT: '0px 1px 3px 0px rgba(0, 0, 0, 0.1), 0px 1px 2px -1px rgba(0, 0, 0, 0.1)',
    md: '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -2px rgba(0, 0, 0, 0.1)',
    lg: '0px 10px 15px -3px rgba(0, 0, 0, 0.1), 0px 4px 6px -4px rgba(0, 0, 0, 0.1)',
    xl: '0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 8px 10px -6px rgba(0, 0, 0, 0.1)',
    '2xl': '0px 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0px 2px 4px 0px rgba(0, 0, 0, 0.05)',
    none: '0px 0px 0px 0px rgba(0, 0, 0, 0.0)'
  }
}`)}
            >
              {copiedToken === "shadows" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>

        {/* Animations */}
        <TabsContent value="animations" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Animation Presets</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-white">fade-in</span>
                    <span className="text-xs text-gray-400">0.3s ease-out</span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-md flex items-center justify-center animate-fade-in">
                    <p className="text-white">Example Content</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-white">pulse-subtle</span>
                    <span className="text-xs text-gray-400">2s ease-in-out infinite</span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-md flex items-center justify-center animate-pulse-subtle">
                    <p className="text-white">Example Content</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-white">float</span>
                    <span className="text-xs text-gray-400">3s ease-in-out infinite</span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-md flex items-center justify-center animate-float">
                    <p className="text-white">Example Content</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <div className="mb-2 flex justify-between items-center">
                    <span className="text-white">slide-in-bottom</span>
                    <span className="text-xs text-gray-400">0.5s ease-out</span>
                  </div>
                  <div className="h-16 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded-md flex items-center justify-center animate-slide-in-bottom">
                    <p className="text-white">Example Content</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Animation configuration in Tailwind CSS */
theme: {
  extend: {
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)"
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)"
        }
      },
      "pulse-subtle": {
        "0%, 100%": {
          opacity: "0.6"
        },
        "50%": {
          opacity: "0.8"
        }
      },
      "float": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" }
      },
      "slide-in-bottom": {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" }
      },
    },
    animation: {
      "fade-in": "fade-in 0.3s ease-out",
      "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      "float": "float 3s ease-in-out infinite",
      "slide-in-bottom": "slide-in-bottom 0.5s ease-out"
    }
  }
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("animations", `/* Animation configuration in Tailwind CSS */
theme: {
  extend: {
    keyframes: {
      "fade-in": {
        "0%": {
          opacity: "0",
          transform: "translateY(10px)"
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)"
        }
      },
      "pulse-subtle": {
        "0%, 100%": {
          opacity: "0.6"
        },
        "50%": {
          opacity: "0.8"
        }
      },
      "float": {
        "0%, 100%": { transform: "translateY(0)" },
        "50%": { transform: "translateY(-5px)" }
      },
      "slide-in-bottom": {
        "0%": { transform: "translateY(20px)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" }
      },
    },
    animation: {
      "fade-in": "fade-in 0.3s ease-out",
      "pulse-subtle": "pulse-subtle 2s ease-in-out infinite",
      "float": "float 3s ease-in-out infinite",
      "slide-in-bottom": "slide-in-bottom 0.5s ease-out"
    }
  }
}`)}
            >
              {copiedToken === "animations" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

// Color Token Component
const ColorToken = ({ name, value, hexValue }: { name: string; value: string; hexValue: string }) => {
  return (
    <div className="space-y-2">
      <div
        className="h-16 w-full rounded-md border border-white/5"
        style={{ backgroundColor: hexValue }}
      ></div>
      <div className="space-y-1">
        <p className="text-sm font-medium text-white">{name}</p>
        <p className="text-xs text-gray-400">{value}</p>
        <p className="text-xs text-gray-500">{hexValue}</p>
      </div>
    </div>
  );
};

export default DesignTokens;
