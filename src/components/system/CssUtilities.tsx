
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

const CssUtilities = () => {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">CSS Utilities</h2>
        <p className="text-gray-400 mb-6">
          Custom utility classes to help you build your UI faster
        </p>
      </div>

      <Tabs defaultValue="layouts" className="w-full">
        <TabsList className="mb-4 bg-gray-800/50 grid grid-cols-4">
          <TabsTrigger value="layouts" className="data-[state=active]:bg-blue-500/20">
            Layout
          </TabsTrigger>
          <TabsTrigger value="effects" className="data-[state=active]:bg-blue-500/20">
            Effects
          </TabsTrigger>
          <TabsTrigger value="backgrounds" className="data-[state=active]:bg-blue-500/20">
            Backgrounds
          </TabsTrigger>
          <TabsTrigger value="typography" className="data-[state=active]:bg-blue-500/20">
            Typography
          </TabsTrigger>
        </TabsList>

        {/* Layouts */}
        <TabsContent value="layouts" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Container Utilities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-2">.container</p>
                <div className="h-12 bg-blue-500/20 border border-blue-500/30 rounded flex items-center justify-center">
                  <p className="text-sm text-white">Width determined by current breakpoint</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Centers the content and sets a max-width at each responsive breakpoint
                </p>
              </div>

              <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                <p className="text-sm text-gray-400 mb-2">.mx-auto</p>
                <div className="h-12 w-3/4 mx-auto bg-blue-500/20 border border-blue-500/30 rounded flex items-center justify-center">
                  <p className="text-sm text-white">Horizontally centered</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Centers an element horizontally using auto margins
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Grid Layout Utilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.grid-cols-{"{1-12}"}</p>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-8 bg-blue-500/20 border border-blue-500/30 rounded flex items-center justify-center">
                        <p className="text-xs text-white">Item {i}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Creates a grid with a specified number of columns
                  </p>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.gap-{"{size}"}</p>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="h-8 bg-blue-500/20 border border-blue-500/30 rounded flex items-center justify-center">
                        <p className="text-xs text-white">Gap 4</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Sets the gap between grid items
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Layout utility examples */

/* Container */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* Flex and Grid */
.flex { display: flex; }
.grid { display: grid; }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("layouts", `/* Layout utility examples */

/* Container */
.container {
  width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container {
    max-width: 1024px;
  }
}

@media (min-width: 1280px) {
  .container {
    max-width: 1280px;
  }
}

/* Flex and Grid */
.flex { display: flex; }
.grid { display: grid; }
.grid-cols-3 { grid-template-columns: repeat(3, minmax(0, 1fr)); }
.gap-2 { gap: 0.5rem; }
.gap-4 { gap: 1rem; }
.mx-auto { margin-left: auto; margin-right: auto; }`)}
            >
              {copiedCode === "layouts" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>

        {/* Effects */}
        <TabsContent value="effects" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Glassmorphism Utilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.glass-morphism</p>
                  <div className="p-6 backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] rounded-lg">
                    <p className="text-white">Glass Effect</p>
                    <p className="text-xs text-gray-400 mt-1">Transparent background with blur</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.neo-blur</p>
                  <div className="p-6 backdrop-blur-2xl bg-black/40 border border-white/10 rounded-lg">
                    <p className="text-white">Neo Blur</p>
                    <p className="text-xs text-gray-400 mt-1">Darker glass effect</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Hover Effects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.hover-scale</p>
                  <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg transition-transform duration-200 hover:scale-105">
                    <p className="text-white">Hover over me</p>
                    <p className="text-xs text-gray-300 mt-1">Scales up on hover</p>
                  </div>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.hover-glow</p>
                  <div className="p-4 bg-blue-500/20 border border-blue-500/30 rounded-lg transition-shadow duration-200 hover:shadow-[0_0_8px_4px_rgba(59,130,246,0.3)]">
                    <p className="text-white">Hover over me</p>
                    <p className="text-xs text-gray-300 mt-1">Adds glow on hover</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Effect utility classes */

/* Glassmorphism effects */
.glass-morphism {
  @apply backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)];
}

.neo-blur {
  @apply backdrop-blur-2xl bg-black/40 border border-white/10;
}

/* Hover effects */
.hover-scale {
  @apply transition-transform duration-200 hover:scale-105;
}

.hover-glow {
  @apply transition-shadow duration-200 hover:shadow-[0_0_8px_4px_rgba(59,130,246,0.3)];
}

.story-link {
  @apply relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left;
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("effects", `/* Effect utility classes */

/* Glassmorphism effects */
.glass-morphism {
  @apply backdrop-blur-xl bg-white/5 border border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)];
}

.neo-blur {
  @apply backdrop-blur-2xl bg-black/40 border border-white/10;
}

/* Hover effects */
.hover-scale {
  @apply transition-transform duration-200 hover:scale-105;
}

.hover-glow {
  @apply transition-shadow duration-200 hover:shadow-[0_0_8px_4px_rgba(59,130,246,0.3)];
}

.story-link {
  @apply relative inline-block after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left;
}`)}
            >
              {copiedCode === "effects" ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-gray-400" />
              )}
            </button>
          </div>
        </TabsContent>

        {/* Backgrounds */}
        <TabsContent value="backgrounds" className="space-y-6">
          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Gradient Backgrounds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">.bg-gradient-blue</p>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-blue-500/30 to-indigo-700/30 flex items-center justify-center">
                    <span className="text-white">Blue Gradient</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">.bg-gradient-purple</p>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-purple-500/30 to-pink-600/30 flex items-center justify-center">
                    <span className="text-white">Purple Gradient</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">.bg-gradient-green</p>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-green-400/30 to-teal-500/30 flex items-center justify-center">
                    <span className="text-white">Green Gradient</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">.bg-gradient-orange</p>
                  <div className="h-24 rounded-lg bg-gradient-to-br from-orange-400/30 to-red-500/30 flex items-center justify-center">
                    <span className="text-white">Orange Gradient</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Pattern Backgrounds</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="text-sm text-gray-400 mb-2">.bg-grid</p>
                  <div className="h-24 rounded-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNDB2NDBIMHoiLz48cGF0aCBkPSJNMCAwaDJ2NDBIMHptNCAwaDJ2NDBINHptNCAwaDJ2NDBIOHptNCAwaDJ2NDBoLTJ6bTQgMGgydjQwaC0yem00IDBoMnY0MGgtMnptNCAwaDJ2NDBoLTJ6bTQgMGgydjQwaC0yem00IDBoMnY0MGgtMnptNCAwaDJ2NDBoLTJ6TTAgMGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6bTAgNGg0MHYySDB6IiBmaWxsPSIjMzMzIiBvcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] flex items-center justify-center">
                    <span className="text-white">Grid Pattern</span>
                  </div>
                </div>
                <div>
                  <p className="text-sm text-gray-400 mb-2">.bg-dots</p>
                  <div className="h-24 rounded-lg bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoMjB2MjBIMHoiLz48Y2lyY2xlIGZpbGw9IiNmZmYiIGN4PSIxMCIgY3k9IjEwIiByPSIxIiBvcGFjaXR5PSIuMiIvPjwvZz48L3N2Zz4=')] flex items-center justify-center">
                    <span className="text-white">Dots Pattern</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Background utility classes */

/* Gradient backgrounds */
.bg-gradient-blue {
  @apply bg-gradient-to-br from-blue-500/30 to-indigo-700/30;
}

.bg-gradient-purple {
  @apply bg-gradient-to-br from-purple-500/30 to-pink-600/30;
}

.bg-gradient-green {
  @apply bg-gradient-to-br from-green-400/30 to-teal-500/30;
}

.bg-gradient-orange {
  @apply bg-gradient-to-br from-orange-400/30 to-red-500/30;
}

/* Pattern backgrounds */
.bg-grid {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 0h2v40H0zm4 0h2v40H4zm4 0h2v40H8zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zM0 0h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0z' fill='%23333' opacity='.1'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-dots {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Ccircle fill='%23fff' cx='10' cy='10' r='1' opacity='.2'/%3E%3C/g%3E%3C/svg%3E");
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("backgrounds", `/* Background utility classes */

/* Gradient backgrounds */
.bg-gradient-blue {
  @apply bg-gradient-to-br from-blue-500/30 to-indigo-700/30;
}

.bg-gradient-purple {
  @apply bg-gradient-to-br from-purple-500/30 to-pink-600/30;
}

.bg-gradient-green {
  @apply bg-gradient-to-br from-green-400/30 to-teal-500/30;
}

.bg-gradient-orange {
  @apply bg-gradient-to-br from-orange-400/30 to-red-500/30;
}

/* Pattern backgrounds */
.bg-grid {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h40v40H0z'/%3E%3Cpath d='M0 0h2v40H0zm4 0h2v40H4zm4 0h2v40H8zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zm4 0h2v40h-2zM0 0h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0zm0 4h40v2H0z' fill='%23333' opacity='.1'/%3E%3C/g%3E%3C/svg%3E");
}

.bg-dots {
  background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3Ccircle fill='%23fff' cx='10' cy='10' r='1' opacity='.2'/%3E%3C/g%3E%3C/svg%3E");
}`)}
            >
              {copiedCode === "backgrounds" ? (
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
              <CardTitle className="text-white">Text Gradients</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.text-gradient</p>
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent">
                    Beautiful Text Gradient
                  </h3>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.text-gradient-blue</p>
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Blue Text Gradient
                  </h3>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.text-gradient-purple</p>
                  <h3 className="text-2xl font-bold bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent">
                    Purple Text Gradient
                  </h3>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.text-gradient-rainbow</p>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                    Rainbow Text Gradient
                  </h3>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-900/40 border border-white/5">
            <CardHeader>
              <CardTitle className="text-white">Text Utilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.truncate</p>
                  <p className="truncate text-white">
                    This is a very long text that will be truncated because it's too long to fit in one line.
                    It should display an ellipsis at the end to indicate that there's more content.
                  </p>
                </div>
                
                <div className="p-4 bg-gray-800/50 rounded-lg border border-white/10">
                  <p className="text-sm text-gray-400 mb-2">.line-clamp-2</p>
                  <p className="line-clamp-2 text-white">
                    This multi-line text will be clamped to show only 2 lines maximum.
                    No matter how long the content is, it will be cut off after the second line.
                    This is the third line which should not be visible.
                    And this is the fourth line which should definitely not be visible.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm relative">
            <div className="text-white overflow-auto max-h-72">
              {`/* Typography utility classes */

/* Text gradients */
.text-gradient {
  @apply bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent;
}

.text-gradient-blue {
  @apply bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent;
}

.text-gradient-purple {
  @apply bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent;
}

.text-gradient-rainbow {
  @apply bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent;
}

/* Text utilities */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`}
            </div>
            <button
              className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
              onClick={() => handleCopyCode("typography", `/* Typography utility classes */

/* Text gradients */
.text-gradient {
  @apply bg-gradient-to-br from-white via-white/90 to-white/70 bg-clip-text text-transparent;
}

.text-gradient-blue {
  @apply bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text text-transparent;
}

.text-gradient-purple {
  @apply bg-gradient-to-br from-purple-400 to-pink-600 bg-clip-text text-transparent;
}

.text-gradient-rainbow {
  @apply bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent;
}

/* Text utilities */
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}`)}
            >
              {copiedCode === "typography" ? (
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

export default CssUtilities;
