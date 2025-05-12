
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import PatternCard from "./PatternCard";
import { Check, Info, AlertCircle } from "lucide-react";

// Component registry with metadata and code examples
export const componentRegistry = [
  {
    id: "buttons",
    category: "basic",
    title: "Buttons",
    description: "Interactive button components in various styles",
    color: "#00F5FF",
    icon: <Check size={24} />,
    component: (
      <div className="flex flex-wrap gap-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button className="btn-cyan-glow">Cyan Glow</Button>
        <Button className="btn-purple-glow">Purple Glow</Button>
      </div>
    ),
    reactCode: `import { Button } from "@/components/ui/button";

// Default button
<Button>Default Button</Button>

// Secondary button
<Button variant="secondary">Secondary</Button>

// Outline button
<Button variant="outline">Outline</Button>

// Ghost button
<Button variant="ghost">Ghost</Button>

// Custom styles with built-in utility classes
<Button className="btn-cyan-glow">Cyan Glow</Button>
<Button className="btn-purple-glow">Purple Glow</Button>`,
    cssCode: `.btn-cyan-glow {
  @apply bg-gradient-to-r from-[#00F5FF] to-[#00D1DD] 
  hover:from-[#20F5FF] hover:to-[#20D1DD] 
  text-[#0F1122] shadow-md 
  hover:shadow-[0_0_15px_rgba(0,245,255,0.5)] transition-all;
}

.btn-purple-glow {
  @apply bg-gradient-to-r from-[#B026FF] to-[#8026DD] 
  hover:from-[#C036FF] hover:to-[#9036DD] 
  text-white shadow-md 
  hover:shadow-[0_0_15px_rgba(176,38,255,0.5)] transition-all;
}`
  },
  {
    id: "cards",
    category: "layout",
    title: "Cards",
    description: "Containers for organizing content with various styling options",
    color: "#B026FF",
    icon: <Info size={24} />,
    component: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Default Card</CardTitle>
            <CardDescription>Basic card component with header and content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Main card content goes here.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm">Action</Button>
          </CardFooter>
        </Card>
        
        <Card className="enhanced-glass">
          <CardHeader>
            <CardTitle>Enhanced Glass Card</CardTitle>
            <CardDescription>Glassmorphism styling with hover effects</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Card with glassmorphism effects.</p>
          </CardContent>
          <CardFooter>
            <Button size="sm" className="btn-cyan-glow">Action</Button>
          </CardFooter>
        </Card>
      </div>
    ),
    reactCode: `import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Default Card
<Card>
  <CardHeader>
    <CardTitle>Default Card</CardTitle>
    <CardDescription>Basic card component with header and content sections</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main card content goes here.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm">Action</Button>
  </CardFooter>
</Card>

// Enhanced Glass Card
<Card className="enhanced-glass">
  <CardHeader>
    <CardTitle>Enhanced Glass Card</CardTitle>
    <CardDescription>Glassmorphism styling with hover effects</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card with glassmorphism effects.</p>
  </CardContent>
  <CardFooter>
    <Button size="sm" className="btn-cyan-glow">Action</Button>
  </CardFooter>
</Card>`,
    cssCode: `.enhanced-glass {
  @apply backdrop-blur-2xl bg-white/5 border border-white/10 
  shadow-lg shadow-black/10 hover:shadow-xl 
  hover:shadow-[#3a36e0]/15 hover:border-[#3a36e0]/20 
  transition-all duration-300;
}

.enhanced-glass-card {
  @apply backdrop-blur-2xl bg-gradient-to-br from-white/10 to-white/5 
  border border-white/20 shadow-lg shadow-black/20 
  hover:shadow-xl hover:shadow-[#3a36e0]/15 transition-all duration-300;
}`
  },
  {
    id: "badges",
    category: "basic",
    title: "Badges",
    description: "Small status indicators and labels for UI elements",
    color: "#FAFF00",
    icon: <AlertCircle size={24} />,
    component: (
      <div className="flex flex-wrap gap-4">
        <Badge>Default</Badge>
        <Badge variant="secondary">Secondary</Badge>
        <Badge variant="outline">Outline</Badge>
        <Badge variant="destructive">Destructive</Badge>
        <span className="new-badge">New</span>
        <span className="status-active">Active</span>
        <span className="status-pending">Pending</span>
        <span className="status-inactive">Inactive</span>
      </div>
    ),
    reactCode: `import { Badge } from "@/components/ui/badge";

// Default badge
<Badge>Default</Badge>

// Secondary badge
<Badge variant="secondary">Secondary</Badge>

// Outline badge
<Badge variant="outline">Outline</Badge>

// Destructive badge
<Badge variant="destructive">Destructive</Badge>

// Custom badge styles
<span className="new-badge">New</span>
<span className="status-active">Active</span>
<span className="status-pending">Pending</span>
<span className="status-inactive">Inactive</span>`,
    cssCode: `.new-badge {
  @apply bg-[#ff4a4a] text-xs text-white px-1.5 py-0.5 
  rounded-sm uppercase font-medium;
}

.status-active {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
  font-medium bg-green-500/20 text-green-400 border border-green-500/30;
}

.status-pending {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
  font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30;
}

.status-inactive {
  @apply inline-flex items-center px-2.5 py-0.5 rounded-full text-xs 
  font-medium bg-red-500/20 text-red-400 border border-red-500/30;
}`
  },
  {
    id: "progress",
    category: "feedback",
    title: "Progress",
    description: "Visual indicators for loading states and process completion",
    color: "#00F5FF",
    icon: <Check size={24} />,
    component: (
      <div className="space-y-6">
        <div className="space-y-2">
          <p className="text-sm">Default Progress (70%)</p>
          <Progress value={70} />
        </div>
        
        <div className="space-y-2">
          <p className="text-sm">Custom Styled Progress (40%)</p>
          <Progress 
            value={40} 
            className="h-2 bg-[#0F1122]/50" 
            indicatorClassName="bg-gradient-to-r from-[#00F5FF] to-[#B026FF]" 
          />
        </div>
      </div>
    ),
    reactCode: `import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";

// Static progress
<Progress value={70} />

// Custom styled progress
<Progress 
  value={40} 
  className="h-2 bg-[#0F1122]/50" 
  indicatorClassName="bg-gradient-to-r from-[#00F5FF] to-[#B026FF]" 
/>

// Animated progress example
function AnimatedProgress() {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(100);
    }, 500);
    return () => clearTimeout(timer);
  }, []);
  
  return <Progress value={progress} />;
}`,
    cssCode: `/* Custom Progress Styles */
.progress-badge {
  @apply text-xs inline-flex items-center px-2.5 py-1 
  rounded-full bg-[#3a36e0]/20 text-[#9b87f5] gap-1.5 
  border border-[#9b87f5]/20;
}

/* Gradient Progress Bar */
.progress-gradient .indicator {
  @apply bg-gradient-to-r from-[#00F5FF] to-[#B026FF];
}`
  },
  {
    id: "avatars",
    category: "data-display",
    title: "Avatars",
    description: "User profile images with fallback options",
    color: "#B026FF",
    icon: <Info size={24} />,
    component: (
      <div className="flex flex-wrap gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <Avatar className="h-14 w-14 ring-2 ring-[#00F5FF] ring-offset-2 ring-offset-[#0F1122]">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        
        <Avatar className="h-10 w-10 border-2 border-[#B026FF] shadow-[0_0_10px_rgba(176,38,255,0.5)]">
          <AvatarFallback className="bg-gradient-to-r from-[#B026FF] to-[#00F5FF] text-white">JD</AvatarFallback>
        </Avatar>
      </div>
    ),
    reactCode: `import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Default avatar
<Avatar>
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Custom styled avatar with ring
<Avatar className="h-14 w-14 ring-2 ring-[#00F5FF] ring-offset-2 ring-offset-[#0F1122]">
  <AvatarImage src="https://github.com/shadcn.png" />
  <AvatarFallback>CN</AvatarFallback>
</Avatar>

// Avatar with gradient fallback
<Avatar className="h-10 w-10 border-2 border-[#B026FF] shadow-[0_0_10px_rgba(176,38,255,0.5)]">
  <AvatarFallback className="bg-gradient-to-r from-[#B026FF] to-[#00F5FF] text-white">JD</AvatarFallback>
</Avatar>`,
    cssCode: `/* Custom Avatar Styles */
.avatar-glow {
  @apply border-2 border-[#00F5FF] shadow-[0_0_10px_rgba(0,245,255,0.5)];
}

.avatar-glow-purple {
  @apply border-2 border-[#B026FF] shadow-[0_0_10px_rgba(176,38,255,0.5)];
}

.avatar-gradient-bg {
  @apply bg-gradient-to-r from-[#B026FF] to-[#00F5FF] text-white;
}`
  },
  {
    id: "alerts",
    category: "feedback",
    title: "Alerts",
    description: "Informational messages and notifications",
    color: "#FAFF00",
    icon: <AlertCircle size={24} />,
    component: (
      <div className="space-y-4">
        <Alert>
          <AlertTitle>Default Alert</AlertTitle>
          <AlertDescription>
            A simple alert component for informational messages.
          </AlertDescription>
        </Alert>
        
        <Alert variant="destructive">
          <AlertTitle>Error Alert</AlertTitle>
          <AlertDescription>
            Used to display error messages and warnings.
          </AlertDescription>
        </Alert>
        
        <Alert className="border-l-4 border-l-[#00F5FF] bg-[#00F5FF]/10">
          <AlertTitle className="text-[#00F5FF]">Custom Info Alert</AlertTitle>
          <AlertDescription>
            Custom styled alert with left border accent.
          </AlertDescription>
        </Alert>
      </div>
    ),
    reactCode: `import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Info } from "lucide-react";

// Default alert
<Alert>
  <AlertTitle>Default Alert</AlertTitle>
  <AlertDescription>
    A simple alert component for informational messages.
  </AlertDescription>
</Alert>

// Destructive alert for errors
<Alert variant="destructive">
  <AlertTitle>Error Alert</AlertTitle>
  <AlertDescription>
    Used to display error messages and warnings.
  </AlertDescription>
</Alert>

// Custom styled alert
<Alert className="border-l-4 border-l-[#00F5FF] bg-[#00F5FF]/10">
  <AlertTitle className="text-[#00F5FF]">Custom Info Alert</AlertTitle>
  <AlertDescription>
    Custom styled alert with left border accent.
  </AlertDescription>
</Alert>

// Alert with icon
<Alert>
  <Info className="h-4 w-4" />
  <AlertTitle>Information</AlertTitle>
  <AlertDescription>
    Alert with an icon for better visual hierarchy.
  </AlertDescription>
</Alert>`,
    cssCode: `/* Custom Alert Styles */
.alert-info {
  @apply border-l-4 border-l-[#00F5FF] bg-[#00F5FF]/10;
}

.alert-info .alert-title {
  @apply text-[#00F5FF];
}

.alert-warning {
  @apply border-l-4 border-l-[#FAFF00] bg-[#FAFF00]/10;
}

.alert-warning .alert-title {
  @apply text-[#FAFF00];
}

.alert-danger {
  @apply border-l-4 border-l-[#ff4a4a] bg-[#ff4a4a]/10;
}

.alert-danger .alert-title {
  @apply text-[#ff4a4a];
}`
  }
];

// Categories for organizing components
export const componentCategories = [
  { id: "all", name: "All Components" },
  { id: "basic", name: "Basic Elements" },
  { id: "layout", name: "Layout Components" },
  { id: "data-display", name: "Data Display" },
  { id: "feedback", name: "Feedback Components" }
];

export const getFilteredComponents = (filter: string) => {
  if (filter === "all") {
    return componentRegistry;
  } else {
    return componentRegistry.filter(component => component.category === filter);
  }
};
