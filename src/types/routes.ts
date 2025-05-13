
import { LucideIcon } from "lucide-react";

export interface RouteConfig {
  /**
   * The URL path for the route
   */
  path: string;
  
  /**
   * The display name of the route
   */
  name: string;
  
  /**
   * The component name to render for this route
   */
  component: string;
  
  /**
   * Icon to display in navigation
   */
  icon: LucideIcon;
  
  /**
   * Whether to show this route in the main navigation
   */
  showInNav: boolean;
  
  /**
   * Whether to show this route in the sidebar
   */
  showInSidebar: boolean;
  
  /**
   * Whether this is a new feature
   */
  isNew?: boolean;
  
  /**
   * Description for sidebar navigation
   */
  description?: string;
}

export interface NavItem {
  text: string;
  href: string;
  icon: React.ReactNode;
  isActive?: boolean;
  isNew?: boolean;
}
