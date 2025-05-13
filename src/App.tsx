
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getAllRoutes } from "./config/routes.config";

// Import all pages dynamically
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LeagueManagement from "./pages/LeagueManagement";
import Statistics from "./pages/Statistics";
import Matches from "./pages/Matches";
import Analysis from "./pages/Analysis";
import Settings from "./pages/Settings";
import Teams from "./pages/Teams";
import System from "./pages/System";
import Integrations from "./pages/Integrations";

// Provide context
import { IntegrationsProvider } from "./contexts/IntegrationsContext";

const queryClient = new QueryClient();

// Map of all components
const components = {
  Index,
  Dashboard,
  NotFound,
  LeagueManagement,
  Statistics,
  Matches,
  Analysis,
  Settings,
  Teams,
  System,
  Integrations
};

const App = () => {
  const routes = getAllRoutes();

  return (
    <QueryClientProvider client={queryClient}>
      <IntegrationsProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              {routes.map((route) => {
                // @ts-ignore - Dynamic component mapping
                const Component = components[route.component];
                return <Route key={route.path} path={route.path} element={<Component />} />;
              })}
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </IntegrationsProvider>
    </QueryClientProvider>
  );
};

export default App;
