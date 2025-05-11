
import React from "react";
import { BarChart2, Clock, Grid, LineChart, Medal, Settings, Table2, Trophy } from "lucide-react";
import { sidebarItems } from "../data/mockData";
import { Badge } from "@/components/ui/badge";

const iconMap: Record<string, React.ReactNode> = {
  Trophy: <Trophy className="h-5 w-5 icon-box" />,
  Table2: <Table2 className="h-5 w-5 icon-box" />,
  LineChart: <LineChart className="h-5 w-5 icon-box" />,
  Grid: <Grid className="h-5 w-5 icon-box" />,
  Clock: <Clock className="h-5 w-5 icon-box" />,
  Medal: <Medal className="h-5 w-5 icon-box" />,
  BarChart2: <BarChart2 className="h-5 w-5 icon-box" />,
  Settings: <Settings className="h-5 w-5 icon-box" />,
};

const Sidebar = () => {
  return (
    <div className="h-full w-72 bg-sidebar overflow-auto flex flex-col border-r border-border">
      <div className="py-6 px-6 flex flex-col">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded bg-[#3a36e0] flex items-center justify-center mr-2">
            <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.5-4.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-7 7a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" />
            </svg>
          </div>
          <h1 className="font-bold text-xl text-white">V-SPORTS</h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1">League Management</p>
      </div>
      
      <div className="mx-3 px-3 py-2 border-b border-border">
        <div className="relative">
          <input 
            type="text" 
            className="w-full h-9 bg-background rounded-lg px-9 text-sm focus:outline-none focus:ring-2 focus:ring-[#9b87f5]" 
            placeholder="Search..."
          />
          <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>
      
      <nav className="flex-grow px-3 py-4 space-y-1">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`${
              item.isActive 
                ? "sidebar-item sidebar-item-active bg-[#3a36e0] text-white hover:bg-[#3a36e0]/90" 
                : "sidebar-item hover:bg-sidebar-accent"
            } group mb-1 relative rounded-lg transition-all duration-200 overflow-hidden`}
          >
            <span className={`${item.isActive ? "opacity-100" : "opacity-0"} absolute left-0 top-0 bottom-0 w-0.5 bg-white group-hover:opacity-100 transition-opacity`}></span>
            <div className="flex items-center">
              <div className={`${item.isActive ? "text-white" : "text-[#9b87f5]"} group-hover:text-white transition-colors`}>
                {iconMap[item.icon]}
              </div>
              <div className="ml-3">
                <div className="flex items-center gap-2">
                  {item.title}
                  {item.isNew && (
                    <Badge className="bg-[#ff4a4a] text-xs px-1.5 py-0 uppercase font-medium">
                      NEW
                    </Badge>
                  )}
                </div>
                <span className="text-xs text-muted-foreground">{item.description}</span>
              </div>
            </div>
            <div className="ml-auto text-gray-500">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </nav>
      
      <div className="m-3 p-4 bg-gradient-to-r from-[#3a36e0]/30 to-[#9b87f5]/20 backdrop-blur-sm rounded-lg border border-[#9b87f5]/20">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-[#9b87f5]/20 flex items-center justify-center">
            <LineChart className="h-5 w-5 text-[#9b87f5]" />
          </div>
          <div>
            <div className="text-xs text-muted-foreground">Next analysis update</div>
            <div className="font-medium text-white">Today, 18:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
