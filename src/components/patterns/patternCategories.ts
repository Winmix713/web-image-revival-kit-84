
import { BarChart2, Layers, Diamond, Grid, PieChart } from "lucide-react";
import React from "react";

export const getPatternCategories = () => [
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
