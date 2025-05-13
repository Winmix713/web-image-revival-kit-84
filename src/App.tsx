
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import LeagueManagement from "./pages/LeagueManagement";
import PatternsPage from "./pages/Patterns";
import Statistics from "./pages/Statistics";
import Matches from "./pages/Matches";
import Analysis from "./pages/Analysis";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/leagues" element={<LeagueManagement />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/analysis" element={<Analysis />} />
          <Route path="/patterns" element={<PatternsPage />} />
          <Route path="/statistics" element={<Statistics />} />
          <Route path="/league-management" element={<LeagueManagement />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
