
import React from "react";
import { 
  Layout, 
  type, 
  Palette, 
  FileCode, 
  LayoutGrid, 
  FormInput, 
  ChartBar, 
  Trophy, 
  Box, 
  PanelLeft, 
  Gauge, 
  Settings,
  Layers,
  AlertCircle
} from "lucide-react";

// Define the types for our component library data
export interface ComponentItem {
  name: string;
  description: string;
  isNew?: boolean;
  isPremium?: boolean;
}

export interface ComponentCategory {
  name: string;
  icon: React.FC<{ className?: string }>;
  components: ComponentItem[];
}

// Export the component library data
export const COMPONENT_LIBRARY: ComponentCategory[] = [
  {
    name: "Layout",
    icon: Layout,
    components: [
      { name: "Header", description: "Navigation header with logo" },
      { name: "Footer", description: "Page footer with links and credits" },
      { name: "HeroSection", description: "Hero section with animated background" },
      { name: "CallToAction", description: "CTA section with gradient background" },
      { name: "Sidebar", description: "Collapsible sidebar navigation" },
      { name: "Container", description: "Responsive container component" },
    ]
  },
  {
    name: "Typography",
    icon: type,
    components: [
      { name: "Heading", description: "Various heading styles" },
      { name: "Paragraph", description: "Text paragraph with styles" },
      { name: "Badge", description: "Small status badges" },
      { name: "Caption", description: "Small caption text" },
      { name: "Quote", description: "Stylized quote block" },
    ]
  },
  {
    name: "UI Elements",
    icon: Palette,
    components: [
      { name: "Button", description: "Styled buttons with variants" },
      { name: "Card", description: "Content card component" },
      { name: "Avatar", description: "User avatar component" },
      { name: "Logo", description: "Animated logo component" },
      { name: "Tabs", description: "Tab navigation component" },
      { name: "Spinner", description: "Loading spinner animations" },
    ]
  },
  {
    name: "Form",
    icon: FormInput,
    components: [
      { name: "Input", description: "Text input field" },
      { name: "Select", description: "Dropdown selection component" },
      { name: "Checkbox", description: "Checkbox input component" },
      { name: "RadioGroup", description: "Radio button group" },
      { name: "Switch", description: "Toggle switch component" },
      { name: "Slider", description: "Range slider component" },
    ]
  },
  {
    name: "Navigation",
    icon: PanelLeft,
    components: [
      { name: "Navigation", description: "Main navigation component" },
      { name: "FancyNavigation", description: "Enhanced navigation with effects" },
      { name: "Breadcrumb", description: "Breadcrumb navigation" },
      { name: "Pagination", description: "Page navigation component" },
      { name: "Menu", description: "Dropdown menu component" },
    ]
  },
  {
    name: "Charts",
    icon: ChartBar,
    components: [
      { name: "BarChart", description: "Bar chart visualization" },
      { name: "LineChart", description: "Line chart visualization" },
      { name: "PieChart", description: "Pie chart visualization" },
      { name: "RadarChart", description: "Radar chart visualization" },
      { name: "AreaChart", description: "Area chart visualization" },
      { name: "ScatterPlot", description: "Scatter plot visualization" },
    ]
  },
  {
    name: "Match & Prediction",
    icon: Trophy,
    components: [
      { name: "MatchCard", description: "Match details card" },
      { name: "PredictionCard", description: "Prediction results card" },
      { name: "TeamComparison", description: "Team comparison component" },
      { name: "MatchStatistics", description: "Match statistics display" },
      { name: "PredictionControls", description: "Prediction input controls" },
      { name: "TeamsDisplay", description: "Team logos and names display" },
    ]
  },
  {
    name: "Feedback",
    icon: AlertCircle,
    components: [
      { name: "Toast", description: "Toast notification component" },
      { name: "Alert", description: "Alert message component" },
      { name: "Dialog", description: "Modal dialog component" },
      { name: "Tooltip", description: "Tooltip component" },
      { name: "Progress", description: "Progress indicator component" },
    ]
  },
  {
    name: "Data Display",
    icon: Layers,
    components: [
      { name: "Table", description: "Data table component" },
      { name: "List", description: "List component with variants" },
      { name: "Timeline", description: "Timeline component" },
      { name: "Tree", description: "Tree view component" },
      { name: "Stat", description: "Statistics display component" },
    ]
  },
  {
    name: "Dashboard",
    icon: Gauge,
    components: [
      { name: "DashboardCard", description: "Dashboard card component" },
      { name: "StatCard", description: "Statistics card component" },
      { name: "ActivityFeed", description: "Activity feed component" },
      { name: "LeaderboardTable", description: "Leaderboard table component" },
    ]
  },
  {
    name: "System",
    icon: Settings,
    components: [
      { name: "ThemeProvider", description: "Theme context provider" },
      { name: "ErrorBoundary", description: "Error catching component" },
      { name: "AuthProvider", description: "Authentication provider" },
      { name: "QueryProvider", description: "Data query provider" },
      { name: "ComponentShowcase", description: "Component demo display" },
      { name: "Brandbook", description: "Design system documentation" },
    ]
  },
  {
    name: "Utility",
    icon: Box,
    components: [
      { name: "Portal", description: "React portal component" },
      { name: "Transition", description: "Animation transition wrapper" },
      { name: "Skeleton", description: "Loading skeleton component" },
      { name: "AspectRatio", description: "Maintain aspect ratio component" },
      { name: "Collapse", description: "Collapsible content component" },
    ]
  },
];
