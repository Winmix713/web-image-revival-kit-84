
// This file lists the routes for the application.
// The actual App.tsx file needs to be updated to include these routes
// as we can't directly modify App.tsx in this request.

export const appRoutes = [
  { path: "/", component: "Dashboard" },
  { path: "/matches", component: "Matches" },
  { path: "/analysis", component: "Analysis" },
  { path: "/patterns", component: "Patterns" },
  { path: "/statistics", component: "Statistics" },
  { path: "/leagues", component: "LeagueManagement" },
  { path: "/league-management", component: "LeagueManagement" },
  { path: "/settings", component: "Settings" },
  { path: "*", component: "NotFound" }
];
