
export interface IntegrationBase {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'inactive' | 'pending' | 'error';
  lastUpdated?: string;
}

export interface ApiServiceIntegration extends IntegrationBase {
  type: 'api';
  endpoint: string;
  authMethod: 'apiKey' | 'oauth' | 'bearer' | 'none';
  apiKey?: string;
  headers?: Record<string, string>;
}

export interface WebhookIntegration extends IntegrationBase {
  type: 'webhook';
  url: string;
  events: string[];
  secret?: string;
}

export interface DatabaseIntegration extends IntegrationBase {
  type: 'database';
  provider: 'mysql' | 'postgres' | 'mongodb' | 'firebase' | 'supabase';
  connectionString?: string;
  host?: string;
  port?: number;
  user?: string;
}

export interface AnalyticsIntegration extends IntegrationBase {
  type: 'analytics';
  provider: 'google' | 'matomo' | 'mixpanel' | 'custom';
  trackingId?: string;
  customEndpoint?: string;
}

export type Integration = 
  | ApiServiceIntegration 
  | WebhookIntegration 
  | DatabaseIntegration 
  | AnalyticsIntegration;
