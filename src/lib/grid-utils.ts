
/**
 * Grid utility functions for consistent layouts across the application
 */

import { cn } from "./utils";

/**
 * Responsive grid configuration for consistent layouts
 */
export const gridClasses = {
  // Standard grids
  standard: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  
  // Two-column grid with wider first column (8/12 - 4/12)
  asymmetric: "grid grid-cols-1 lg:grid-cols-12 gap-8",
  
  // Equal two-column split
  twoColumn: "grid grid-cols-1 lg:grid-cols-2 gap-6",
  
  // Dashboard card grids
  cards: "grid grid-cols-1 md:grid-cols-3 gap-6",
  
  // List view grid
  list: "grid grid-cols-1 gap-4",
  
  // Form group grid
  form: "grid grid-cols-1 md:grid-cols-2 gap-6",

  // Team grid for team listings
  teams: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",

  // Statistics grid for metrics display
  stats: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",
};

/**
 * Returns responsive container classes based on content type
 */
export const containerClasses = {
  // Full-width container
  full: "w-full",
  
  // Container with max width
  default: "max-w-7xl mx-auto",
  
  // Narrow container for forms
  narrow: "max-w-3xl mx-auto",
  
  // Wide container for dashboards
  wide: "max-w-screen-2xl mx-auto",
};

/**
 * Returns text truncation classes for preventing overflow
 */
export const textClasses = {
  truncate: "truncate",
  multiLine: "line-clamp-2",
  noWrap: "whitespace-nowrap",
  withTooltip: "truncate group-hover:overflow-visible",
};

/**
 * Helper function to create responsive grid classes
 */
export const createGrid = (
  type: keyof typeof gridClasses = "standard", 
  customClasses?: string
) => {
  return cn(gridClasses[type], customClasses);
};

/**
 * Helper function to create responsive container classes
 */
export const createContainer = (
  type: keyof typeof containerClasses = "default",
  customClasses?: string
) => {
  return cn(containerClasses[type], customClasses);
};

/**
 * Helper function to create text truncation classes
 */
export const createTextStyle = (
  type: keyof typeof textClasses = "truncate",
  customClasses?: string
) => {
  return cn(textClasses[type], customClasses);
};
