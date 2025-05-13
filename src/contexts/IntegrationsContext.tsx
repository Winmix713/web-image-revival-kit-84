
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Integration } from '@/types/integration';

type IntegrationsState = {
  integrations: Integration[];
  isLoading: boolean;
  error: string | null;
};

type IntegrationsAction = 
  | { type: 'FETCH_INTEGRATIONS_START' }
  | { type: 'FETCH_INTEGRATIONS_SUCCESS'; payload: Integration[] }
  | { type: 'FETCH_INTEGRATIONS_ERROR'; payload: string }
  | { type: 'ADD_INTEGRATION'; payload: Integration }
  | { type: 'UPDATE_INTEGRATION'; payload: Integration }
  | { type: 'REMOVE_INTEGRATION'; payload: string };

const initialState: IntegrationsState = {
  integrations: [],
  isLoading: false,
  error: null
};

const IntegrationsContext = createContext<{
  state: IntegrationsState;
  dispatch: React.Dispatch<IntegrationsAction>;
  addIntegration: (integration: Omit<Integration, 'id' | 'lastUpdated'>) => Promise<void>;
  updateIntegration: (integration: Integration) => Promise<void>;
  removeIntegration: (id: string) => Promise<void>;
  getIntegrationsByType: (type: 'api' | 'webhook' | 'database' | 'analytics') => Integration[];
} | undefined>(undefined);

const integrationsReducer = (state: IntegrationsState, action: IntegrationsAction): IntegrationsState => {
  switch (action.type) {
    case 'FETCH_INTEGRATIONS_START':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_INTEGRATIONS_SUCCESS':
      return { ...state, integrations: action.payload, isLoading: false };
    case 'FETCH_INTEGRATIONS_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    case 'ADD_INTEGRATION':
      return { ...state, integrations: [...state.integrations, action.payload] };
    case 'UPDATE_INTEGRATION':
      return { 
        ...state, 
        integrations: state.integrations.map(i => 
          i.id === action.payload.id ? action.payload : i
        ) 
      };
    case 'REMOVE_INTEGRATION':
      return { 
        ...state, 
        integrations: state.integrations.filter(i => i.id !== action.payload) 
      };
    default:
      return state;
  }
};

export const IntegrationsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(integrationsReducer, initialState);

  // Mock fetching integrations
  useEffect(() => {
    const fetchIntegrations = async () => {
      dispatch({ type: 'FETCH_INTEGRATIONS_START' });
      try {
        // In a real app, this would be an API call
        // Simulating API delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Mock data
        const mockIntegrations: Integration[] = [
          {
            id: '1',
            name: 'Football Data API',
            description: 'Access to comprehensive football statistics and data',
            status: 'active',
            type: 'api',
            endpoint: 'https://api.football-data.org/v2/',
            authMethod: 'apiKey',
            lastUpdated: '2023-10-15T10:30:00Z'
          },
          {
            id: '2',
            name: 'Match Results Notification',
            description: 'Send match results to external service',
            status: 'active',
            type: 'webhook',
            url: 'https://hooks.zapier.com/hooks/catch/123456/abcdef/',
            events: ['match.completed', 'score.updated'],
            lastUpdated: '2023-10-12T08:15:00Z'
          },
          {
            id: '3',
            name: 'Main PostgreSQL Database',
            description: 'Primary database for match and prediction data',
            status: 'active',
            type: 'database',
            provider: 'postgres',
            host: 'db.example.com',
            port: 5432,
            user: 'matchprediction_user',
            lastUpdated: '2023-09-20T15:30:00Z'
          },
          {
            id: '4',
            name: 'Google Analytics',
            description: 'Track user engagement and behavior',
            status: 'active',
            type: 'analytics',
            provider: 'google',
            trackingId: 'G-1234567890',
            lastUpdated: '2023-10-05T09:45:00Z'
          }
        ];
        
        dispatch({ type: 'FETCH_INTEGRATIONS_SUCCESS', payload: mockIntegrations });
      } catch (error) {
        dispatch({ type: 'FETCH_INTEGRATIONS_ERROR', payload: 'Failed to load integrations' });
      }
    };

    fetchIntegrations();
  }, []);
  
  const addIntegration = async (integration: Omit<Integration, 'id' | 'lastUpdated'>) => {
    try {
      // In a real app, this would be an API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const newIntegration = {
        ...integration,
        id: Date.now().toString(),
        lastUpdated: new Date().toISOString()
      } as Integration;
      
      dispatch({ type: 'ADD_INTEGRATION', payload: newIntegration });
    } catch (error) {
      console.error('Failed to add integration:', error);
    }
  };
  
  const updateIntegration = async (integration: Integration) => {
    try {
      // In a real app, this would be an API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      const updatedIntegration = {
        ...integration,
        lastUpdated: new Date().toISOString()
      };
      
      dispatch({ type: 'UPDATE_INTEGRATION', payload: updatedIntegration });
    } catch (error) {
      console.error('Failed to update integration:', error);
    }
  };
  
  const removeIntegration = async (id: string) => {
    try {
      // In a real app, this would be an API call
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 800));
      
      dispatch({ type: 'REMOVE_INTEGRATION', payload: id });
    } catch (error) {
      console.error('Failed to remove integration:', error);
    }
  };
  
  const getIntegrationsByType = (type: 'api' | 'webhook' | 'database' | 'analytics') => {
    return state.integrations.filter(integration => integration.type === type);
  };
  
  return (
    <IntegrationsContext.Provider value={{ 
      state, 
      dispatch,
      addIntegration,
      updateIntegration,
      removeIntegration,
      getIntegrationsByType
    }}>
      {children}
    </IntegrationsContext.Provider>
  );
};

export const useIntegrations = () => {
  const context = useContext(IntegrationsContext);
  if (context === undefined) {
    throw new Error('useIntegrations must be used within an IntegrationsProvider');
  }
  return context;
};
