
import React from "react";
import { BarChart2, Clock, Grid, LineChart, Medal, Settings, Table2, Trophy } from "lucide-react";
import { sidebarItems } from "../data/mockData";

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
          <h1 className="font-bold text-xl text-white">V-SPORTS</h1>
        </div>
        <p className="text-muted-foreground text-sm mt-1">League Management</p>
      </div>
      
      <nav className="flex-grow px-3 py-2">
        {sidebarItems.map((item, index) => (
          <div
            key={index}
            className={`${item.isActive ? "sidebar-item sidebar-item-active" : "sidebar-item"} mb-1 relative`}
          >
            {iconMap[item.icon]}
            <div>
              <div className="flex items-center gap-2">
                {item.title}
                {item.isNew && <span className="new-badge">NEW</span>}
              </div>
              <span className="text-xs text-muted-foreground">{item.description}</span>
            </div>
            <div className="ml-auto text-gray-500">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
        ))}
      </nav>
      
      <div className="m-3 p-4 bg-accent rounded-lg">
        <div className="flex items-center gap-3">
          <LineChart className="h-5 w-5 text-blue-500" />
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
