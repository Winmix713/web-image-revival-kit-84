
import { useState, useEffect } from 'react';
import { useIntegrations } from '@/contexts/IntegrationsContext';
import { Integration } from '@/types/integration';

interface IntegrationsStats {
  total: number;
  active: number;
  inactive: number;
  error: number;
  byType: {
    api: number;
    webhook: number;
    database: number;
    analytics: number;
  };
}

export const useIntegrationsData = () => {
  const { state, getIntegrationsByType } = useIntegrations();
  const [stats, setStats] = useState<IntegrationsStats>({
    total: 0,
    active: 0,
    inactive: 0,
    error: 0,
    byType: {
      api: 0,
      webhook: 0,
      database: 0,
      analytics: 0
    }
  });

  useEffect(() => {
    // Calculate stats when integrations change
    const { integrations } = state;
    
    const newStats: IntegrationsStats = {
      total: integrations.length,
      active: integrations.filter(i => i.status === 'active').length,
      inactive: integrations.filter(i => i.status === 'inactive').length,
      error: integrations.filter(i => i.status === 'error').length,
      byType: {
        api: integrations.filter(i => i.type === 'api').length,
        webhook: integrations.filter(i => i.type === 'webhook').length,
        database: integrations.filter(i => i.type === 'database').length,
        analytics: integrations.filter(i => i.type === 'analytics').length
      }
    };
    
    setStats(newStats);
  }, [state.integrations]);
  
  const getRecentIntegrations = (limit: number = 5): Integration[] => {
    // Sort by lastUpdated and take the most recent
    return [...state.integrations]
      .sort((a, b) => new Date(b.lastUpdated || '').getTime() - new Date(a.lastUpdated || '').getTime())
      .slice(0, limit);
  };
  
  return {
    stats,
    isLoading: state.isLoading,
    error: state.error,
    getRecentIntegrations,
    getIntegrationsByType
  };
};

export default useIntegrationsData;
