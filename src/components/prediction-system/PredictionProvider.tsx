
import React, { createContext, useState, ReactNode, useContext } from 'react';

interface PredictionContextType {
  activeModel: string;
  setActiveModel: (model: string) => void;
  accuracy: number;
  lastUpdated: Date | null;
  isLoading: boolean;
  refreshPredictions: () => Promise<void>;
}

const PredictionContext = createContext<PredictionContextType | undefined>(undefined);

export const usePrediction = () => {
  const context = useContext(PredictionContext);
  if (!context) {
    throw new Error('usePrediction must be used within a PredictionProvider');
  }
  return context;
};

interface PredictionProviderProps {
  children: ReactNode;
}

const PredictionProvider: React.FC<PredictionProviderProps> = ({ children }) => {
  const [activeModel, setActiveModel] = useState<string>("random-forest");
  const [accuracy, setAccuracy] = useState<number>(78);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(new Date());
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const refreshPredictions = async () => {
    setIsLoading(true);
    // Simulate API call with a delay
    await new Promise(resolve => setTimeout(resolve, 800));
    setLastUpdated(new Date());
    setAccuracy(Math.floor(Math.random() * 5) + 75); // Random accuracy between 75-80
    setIsLoading(false);
  };

  const contextValue: PredictionContextType = {
    activeModel,
    setActiveModel,
    accuracy,
    lastUpdated,
    isLoading,
    refreshPredictions
  };

  return (
    <PredictionContext.Provider value={contextValue}>
      {children}
    </PredictionContext.Provider>
  );
};

export default PredictionProvider;
