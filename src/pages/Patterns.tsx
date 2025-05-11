
import React, { useState } from "react";
import { Grid, BarChart2, Layers, Diamond, PieChart } from "lucide-react";
import AppLayout from "@/components/common/AppLayout";
import PageHeader from "@/components/common/PageHeader";
import PatternBackground from "@/components/patterns/PatternBackground";
import PatternCard from "@/components/patterns/PatternCard";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion } from "framer-motion";

const PatternsPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const patternCategories = [
    { 
      id: "offensive", 
      title: "Offensive Patterns", 
      description: "Analyze attacking strategies and movement patterns",
      color: "#00F5FF",
      icon: <BarChart2 className="h-8 w-8 text-white" />
    },
    { 
      id: "defensive", 
      title: "Defensive Patterns", 
      description: "Discover defensive positioning and pressure tactics",
      color: "#B026FF", 
      icon: <Layers className="h-8 w-8 text-white" /> 
    },
    { 
      id: "possession", 
      title: "Possession Patterns", 
      description: "Review ball control and passing sequences",
      color: "#FAFF00", 
      icon: <Diamond className="h-8 w-8 text-white" />
    },
    { 
      id: "transition", 
      title: "Transition Patterns", 
      description: "Examine quick counter-attacks and defensive recovery",
      color: "#00F5FF",
      icon: <Grid className="h-8 w-8 text-white" />
    },
    { 
      id: "setpiece", 
      title: "Set Piece Patterns", 
      description: "Analyze corner kicks, free kicks and penalties",
      color: "#B026FF", 
      icon: <PieChart className="h-8 w-8 text-white" />
    }
  ];

  return (
    <AppLayout>
      {/* Custom 3D background */}
      <PatternBackground />
      
      {/* Main content */}
      <div className="relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <PageHeader
            title="Play Patterns"
            description="Discover and analyze tactical patterns in your games"
            icon={Grid}
            actions={
              <Button className="bg-[#00F5FF] hover:bg-[#00F5FF]/80 text-[#0F1122] gap-2 shadow-glow-blue-md hover:shadow-glow-blue-lg transition-all">
                <Diamond className="h-4 w-4" />
                Create Pattern
              </Button>
            }
          />
        </motion.div>
        
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Tabs 
            defaultValue="all" 
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="bg-[#0F1122]/50 backdrop-blur-md border border-[#00F5FF]/20 w-full flex justify-center mb-6">
              <TabsTrigger 
                value="all"
                className="data-[state=active]:bg-[#00F5FF]/20 data-[state=active]:text-[#00F5FF] data-[state=active]:shadow-glow-blue-sm"
              >
                All Patterns
              </TabsTrigger>
              <TabsTrigger 
                value="offensive"
                className="data-[state=active]:bg-[#00F5FF]/20 data-[state=active]:text-[#00F5FF] data-[state=active]:shadow-glow-blue-sm"
              >
                Offensive
              </TabsTrigger>
              <TabsTrigger 
                value="defensive"
                className="data-[state=active]:bg-[#B026FF]/20 data-[state=active]:text-[#B026FF] data-[state=active]:shadow-glow-purple-sm"
              >
                Defensive
              </TabsTrigger>
              <TabsTrigger 
                value="possession"
                className="data-[state=active]:bg-[#FAFF00]/20 data-[state=active]:text-[#FAFF00]"
              >
                Possession
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patternCategories.map((category, index) => (
                  <PatternCard 
                    key={category.id}
                    title={category.title}
                    description={category.description}
                    color={category.color}
                    icon={category.icon}
                    index={index}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="offensive" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patternCategories
                  .filter(cat => cat.id === "offensive" || cat.id === "transition")
                  .map((category, index) => (
                    <PatternCard 
                      key={category.id}
                      title={category.title}
                      description={category.description}
                      color={category.color}
                      icon={category.icon}
                      index={index}
                    />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="defensive" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patternCategories
                  .filter(cat => cat.id === "defensive")
                  .map((category, index) => (
                    <PatternCard 
                      key={category.id}
                      title={category.title}
                      description={category.description}
                      color={category.color}
                      icon={category.icon}
                      index={index}
                    />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="possession" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {patternCategories
                  .filter(cat => cat.id === "possession" || cat.id === "setpiece")
                  .map((category, index) => (
                    <PatternCard 
                      key={category.id}
                      title={category.title}
                      description={category.description}
                      color={category.color}
                      icon={category.icon}
                      index={index}
                    />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="bg-[#0F1122]/60 backdrop-blur-lg border border-[#B026FF]/20 rounded-lg p-6 shadow-glow-purple-sm">
            <h2 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#B026FF] to-[#00F5FF] mb-4">
              Advanced Pattern Analysis
            </h2>
            <p className="text-white/70 mb-6">
              Our AI-powered pattern recognition helps you identify tactical trends across multiple matches.
              Discover recurring patterns that lead to scoring opportunities or defensive vulnerabilities.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#0F1122]/80 border border-white/5 rounded p-4 hover:border-[#00F5FF]/30 hover:shadow-glow-blue-sm transition-all">
                <div className="text-4xl font-bold text-[#00F5FF] mb-2">87%</div>
                <div className="text-sm text-white/50">Success rate on offensive patterns</div>
              </div>
              
              <div className="bg-[#0F1122]/80 border border-white/5 rounded p-4 hover:border-[#B026FF]/30 hover:shadow-glow-purple-sm transition-all">
                <div className="text-4xl font-bold text-[#B026FF] mb-2">24</div>
                <div className="text-sm text-white/50">Unique patterns identified</div>
              </div>
              
              <div className="bg-[#0F1122]/80 border border-white/5 rounded p-4 hover:border-[#FAFF00]/30 transition-all">
                <div className="text-4xl font-bold text-[#FAFF00] mb-2">12.4s</div>
                <div className="text-sm text-white/50">Average pattern duration</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AppLayout>
  );
};

export default PatternsPage;
