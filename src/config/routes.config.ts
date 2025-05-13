
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  ChartBar, 
  Settings, 
  LineChart, 
  BarChart2,
  Trophy,
  FileQuestion
} from 'lucide-react';
import type { RouteConfig } from '@/types/routes';

/**
 * Application route configuration
 * Used to generate navigation and routing
 */
export const routesConfig: RouteConfig[] = [
  { 
    path: "/", 
    name: "Dashboard",
    component: "Dashboard",
    icon: LayoutDashboard,
    showInNav: true,
    showInSidebar: true
  },
  { 
    path: "/teams", 
    name: "Teams",
    component: "Teams",
    icon: Users,
    showInNav: true,
    showInSidebar: true
  },
  { 
    path: "/matches", 
    name: "Matches",
    component: "Matches",
    icon: Calendar,
    showInNav: true,
    showInSidebar: true
  },
  { 
    path: "/statistics", 
    name: "Statistics",
    component: "Statistics",
    icon: ChartBar,
    showInNav: true,
    showInSidebar: true
  },
  { 
    path: "/analysis", 
    name: "Analysis",
    component: "Analysis",
    icon: LineChart,
    showInNav: true,
    showInSidebar: true,
    isNew: true
  },
  { 
    path: "/league-management", 
    name: "League Management",
    component: "LeagueManagement",
    icon: Trophy,
    showInNav: true,
    showInSidebar: true,
    isNew: true
  },
  { 
    path: "/settings", 
    name: "Settings",
    component: "Settings",
    icon: Settings,
    showInNav: true,
    showInSidebar: true
  },
  { 
    path: "/system", 
    name: "System",
    component: "System",
    icon: BarChart2,
    showInNav: true,
    showInSidebar: false
  },
  { 
    path: "*", 
    name: "Not Found",
    component: "NotFound",
    icon: FileQuestion,
    showInNav: false,
    showInSidebar: false
  },
];

/**
 * Get routes for header navigation
 */
export const getNavRoutes = () => {
  return routesConfig.filter(route => route.showInNav);
};

/**
 * Get routes for sidebar navigation
 */
export const getSidebarRoutes = () => {
  return routesConfig.filter(route => route.showInSidebar);
};

/**
 * Get all routes for application router
 */
export const getAllRoutes = () => {
  return routesConfig;
};

export default routesConfig;
