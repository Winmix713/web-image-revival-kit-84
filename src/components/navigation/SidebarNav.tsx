
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  LineChart, 
  BarChart, 
  Calendar, 
  Settings, 
  Trophy, 
  LayoutDashboard, 
  Clock,
  Database,
  TrendingUp
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface NavItem {
  icon: React.ElementType;
  title: string;
  description: string;
  href: string;
  isNew?: boolean;
}

export const SidebarNav: React.FC = () => {
  const location = useLocation();
  
  const navItems: NavItem[] = [
    {
      icon: Trophy,
      title: "Leagues",
      description: "Manage your leagues",
      href: "/leagues",
    },
    {
      icon: Calendar,
      title: "Matches",
      description: "View all match data",
      href: "/matches",
    },
    {
      icon: LineChart,
      title: "Analysis",
      description: "Match prediction analytics",
      href: "/analysis",
    },
    {
      icon: LayoutDashboard,
      title: "League Management",
      description: "Create and manage leagues",
      href: "/league-management",
      isNew: true
    },
    {
      icon: Database,
      title: "Integrations",
      description: "External data sources",
      href: "/integrations",
    },
    {
      icon: TrendingUp,
      title: "Predictions",
      description: "Match predictions",
      href: "/predictions",
      isNew: true
    },
    {
      icon: Settings,
      title: "Settings",
      description: "System configuration",
      href: "/settings",
    },
  ];

  return (
    <div className="space-y-1.5 pt-3">
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.href;
        
        return (
          <Link
            key={index}
            to={item.href}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg transition-all relative",
              isActive 
                ? "bg-sidebar-accent text-white" 
                : "hover:bg-white/5 text-gray-300"
            )}
          >
            <div className="flex items-center justify-center h-8 w-8 rounded-lg bg-white/10">
              {React.createElement(item.icon, { className: "h-5 w-5" })}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-medium">{item.title}</span>
                {item.isNew && (
                  <Badge className="bg-blue-600 text-xs h-5 px-1.5">NEW</Badge>
                )}
              </div>
              <p className="text-xs text-gray-400 truncate">{item.description}</p>
            </div>
            
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        );
      })}

      <div className="mt-8 mx-3 p-4 bg-sidebar-accent/30 rounded-lg border border-white/5">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
            <Clock className="h-5 w-5 text-blue-400" />
          </div>
          <div>
            <div className="text-xs text-gray-400">Next analysis update</div>
            <div className="text-sm font-medium text-white">Today, 18:00</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNav;
