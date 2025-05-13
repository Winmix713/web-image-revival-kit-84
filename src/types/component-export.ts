
// Types for component export functionality

/**
 * Represents a component to be exported
 */
export interface ExportableComponent {
  name: string;
  path: string;
  dependencies: string[];
  isSelected: boolean;
}

/**
 * Represents export format options
 */
export type ExportFormat = 'module' | 'commonjs' | 'standalone';

/**
 * Represents the package configuration for export
 */
export interface PackageConfig {
  name: string;
  version: string;
  description?: string;
  author?: string;
  license?: string;
  format: ExportFormat;
  includeDependencies: 'all' | 'minimal' | 'none';
  selectedComponents: string[];
}

/**
 * Represents the package output
 */
export interface PackageOutput {
  fileName: string;
  size: number; // in bytes
  components: string[];
  format: ExportFormat;
}
