
import React, { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, Check } from "lucide-react";

const ComponentShowcase = () => {
  const [activeTab, setActiveTab] = useState("preview");
  const [copiedComponent, setCopiedComponent] = useState<string | null>(null);

  const handleCopyCode = (id: string, code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedComponent(id);
    setTimeout(() => setCopiedComponent(null), 2000);
  };

  return (
    <div className="space-y-10">
      <div>
        <h2 className="text-2xl font-bold text-white mb-4">Components</h2>
        <p className="text-gray-400 mb-6">
          A collection of reusable components built with Tailwind CSS and Radix UI
        </p>
      </div>

      <div className="space-y-8">
        {/* Button Component */}
        <Accordion type="single" collapsible className="bg-gray-900/40 border border-white/5 rounded-lg">
          <AccordionItem value="button" className="border-white/5">
            <AccordionTrigger className="px-4 py-2 hover:bg-gray-800/50">
              <div className="flex items-center">
                <span className="text-lg font-medium text-white">Button</span>
                <Badge className="ml-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">UI Component</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4 bg-gray-800/50">
                  <TabsTrigger value="preview" className="data-[state=active]:bg-blue-500/20">
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-blue-500/20">
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="props" className="data-[state=active]:bg-blue-500/20">
                    Props
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="p-4 border border-white/5 rounded-lg bg-gray-800/30">
                  <div className="flex flex-wrap gap-4">
                    <Button variant="default">Default</Button>
                    <Button variant="destructive">Destructive</Button>
                    <Button variant="outline">Outline</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="ghost">Ghost</Button>
                    <Button variant="link">Link</Button>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="relative">
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm overflow-auto max-h-72 text-white">
                    {`import { Button } from "@/components/ui/button"\n\n<Button variant="default">Default</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>`}
                  </div>
                  <button
                    className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
                    onClick={() => handleCopyCode("button", `import { Button } from "@/components/ui/button"\n\n<Button variant="default">Default</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="link">Link</Button>`)}
                  >
                    {copiedComponent === "button" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </TabsContent>

                <TabsContent value="props" className="p-4 border border-white/5 rounded-lg bg-gray-800/30">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-2 text-gray-400">Name</th>
                          <th className="text-left p-2 text-gray-400">Type</th>
                          <th className="text-left p-2 text-gray-400">Default</th>
                          <th className="text-left p-2 text-gray-400">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">variant</td>
                          <td className="p-2 text-blue-400">
                            <code>default | destructive | outline | secondary | ghost | link</code>
                          </td>
                          <td className="p-2 text-gray-400">
                            <code>default</code>
                          </td>
                          <td className="p-2 text-gray-300">The visual style of the button</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">size</td>
                          <td className="p-2 text-blue-400">
                            <code>default | sm | lg | icon</code>
                          </td>
                          <td className="p-2 text-gray-400">
                            <code>default</code>
                          </td>
                          <td className="p-2 text-gray-300">The size of the button</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-white">asChild</td>
                          <td className="p-2 text-blue-400">
                            <code>boolean</code>
                          </td>
                          <td className="p-2 text-gray-400">
                            <code>false</code>
                          </td>
                          <td className="p-2 text-gray-300">
                            Whether to render as a child element or not
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Card Component */}
        <Accordion type="single" collapsible className="bg-gray-900/40 border border-white/5 rounded-lg">
          <AccordionItem value="card" className="border-white/5">
            <AccordionTrigger className="px-4 py-2 hover:bg-gray-800/50">
              <div className="flex items-center">
                <span className="text-lg font-medium text-white">Card</span>
                <Badge className="ml-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">UI Component</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4 bg-gray-800/50">
                  <TabsTrigger value="preview" className="data-[state=active]:bg-blue-500/20">
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-blue-500/20">
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="props" className="data-[state=active]:bg-blue-500/20">
                    Props
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="p-4 border border-white/5 rounded-lg bg-gray-800/30">
                  <div className="max-w-sm mx-auto">
                    <Card className="bg-gray-900/70 border-white/10">
                      <CardHeader>
                        <CardTitle>Card Title</CardTitle>
                        <CardDescription>Card Description</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-400">
                          This is the main content area of the card. You can add any content here.
                        </p>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline">Cancel</Button>
                        <Button>Submit</Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="relative">
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm overflow-auto max-h-72 text-white">
                    {`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\nimport { Button } from "@/components/ui/button"\n\n<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>This is the main content area of the card.</p>\n  </CardContent>\n  <CardFooter className="flex justify-between">\n    <Button variant="outline">Cancel</Button>\n    <Button>Submit</Button>\n  </CardFooter>\n</Card>`}
                  </div>
                  <button
                    className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
                    onClick={() => handleCopyCode("card", `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"\nimport { Button } from "@/components/ui/button"\n\n<Card>\n  <CardHeader>\n    <CardTitle>Card Title</CardTitle>\n    <CardDescription>Card Description</CardDescription>\n  </CardHeader>\n  <CardContent>\n    <p>This is the main content area of the card.</p>\n  </CardContent>\n  <CardFooter className="flex justify-between">\n    <Button variant="outline">Cancel</Button>\n    <Button>Submit</Button>\n  </CardFooter>\n</Card>`)}
                  >
                    {copiedComponent === "card" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </TabsContent>

                <TabsContent value="props" className="p-4 border border-white/5 rounded-lg bg-gray-800/30">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-2 text-gray-400">Component</th>
                          <th className="text-left p-2 text-gray-400">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">Card</td>
                          <td className="p-2 text-gray-300">The main container component</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">CardHeader</td>
                          <td className="p-2 text-gray-300">Contains the card title and description</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">CardTitle</td>
                          <td className="p-2 text-gray-300">The title displayed at the top of the card</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">CardDescription</td>
                          <td className="p-2 text-gray-300">The description displayed below the title</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">CardContent</td>
                          <td className="p-2 text-gray-300">The main content area of the card</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-white">CardFooter</td>
                          <td className="p-2 text-gray-300">The footer area, typically used for actions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Avatar Component */}
        <Accordion type="single" collapsible className="bg-gray-900/40 border border-white/5 rounded-lg">
          <AccordionItem value="avatar" className="border-white/5">
            <AccordionTrigger className="px-4 py-2 hover:bg-gray-800/50">
              <div className="flex items-center">
                <span className="text-lg font-medium text-white">Avatar</span>
                <Badge className="ml-2 bg-blue-500/20 text-blue-400 hover:bg-blue-500/30">UI Component</Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="mb-4 bg-gray-800/50">
                  <TabsTrigger value="preview" className="data-[state=active]:bg-blue-500/20">
                    Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="data-[state=active]:bg-blue-500/20">
                    Code
                  </TabsTrigger>
                  <TabsTrigger value="props" className="data-[state=active]:bg-blue-500/20">
                    Props
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="preview" className="p-4 border border-white/5 rounded-lg bg-gray-800/30">
                  <div className="flex space-x-4 justify-center">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn-wrong.png" />
                      <AvatarFallback>JP</AvatarFallback>
                    </Avatar>
                  </div>
                </TabsContent>

                <TabsContent value="code" className="relative">
                  <div className="bg-gray-800/50 p-4 rounded-lg font-mono text-sm overflow-auto max-h-72 text-white">
                    {`import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`}
                  </div>
                  <button
                    className="absolute top-3 right-3 p-2 bg-gray-700/50 rounded hover:bg-gray-700/70 transition"
                    onClick={() => handleCopyCode("avatar", `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"\n\n<Avatar>\n  <AvatarImage src="https://github.com/shadcn.png" />\n  <AvatarFallback>CN</AvatarFallback>\n</Avatar>`)}
                  >
                    {copiedComponent === "avatar" ? (
                      <Check className="h-4 w-4 text-green-500" />
                    ) : (
                      <Copy className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </TabsContent>

                <TabsContent value="props" className="p-4 border border-white/5 rounded-lg bg-gray-800/30">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left p-2 text-gray-400">Component</th>
                          <th className="text-left p-2 text-gray-400">Description</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">Avatar</td>
                          <td className="p-2 text-gray-300">The main container component</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-2 text-white">AvatarImage</td>
                          <td className="p-2 text-gray-300">Displays the image</td>
                        </tr>
                        <tr>
                          <td className="p-2 text-white">AvatarFallback</td>
                          <td className="p-2 text-gray-300">Fallback displayed when image fails to load</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </TabsContent>
              </Tabs>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="text-center pt-4">
        <Button variant="outline" className="border-white/10 text-blue-400">
          View All Components
        </Button>
      </div>
    </div>
  );
};

export default ComponentShowcase;
