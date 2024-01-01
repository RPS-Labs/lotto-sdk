import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useMemo,
} from 'react';
import { rpsChains } from './utils/rpsChains';

interface ChainConfig {
  abi?: readonly any[];
  baseApiUrl: string;
  id: number;
  name: string;
  raffleContract: string;
  routerContract: string;
}

interface RPSContextType {
  activeChain: string;
  apiKey: string;
  currentTheme: 'light' | 'dark';
  getChainConfig: () => ChainConfig;
  toggleTheme: () => void;
}

const defaultContextValue: RPSContextType = {
  apiKey: '',
  activeChain: '',
  currentTheme: 'light',
  toggleTheme: () => {},
  getChainConfig: () => rpsChains.sepolia, // Default to sepolia testnet
};

interface RPSProviderProps {
  activeChain: string;
  apiKey: string;
  children: ReactNode;
  theme?: 'light' | 'dark';
}

const RPSContext = createContext<RPSContextType>(defaultContextValue);

export const RPSProvider: React.FC<RPSProviderProps> = ({
  children,
  apiKey,
  theme = 'light',
  activeChain,
}) => {
  const [currentTheme, setTheme] = useState<'light' | 'dark'>(theme);

  useEffect(() => {
    setTheme(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  const getChainConfig = () =>
    Object.values(rpsChains).find(
      (chain) => chain.id.toString() === activeChain
    ) || rpsChains.sepolia;

  const contextValue = useMemo(
    () => ({
      apiKey,
      activeChain,
      currentTheme,
      toggleTheme,
      getChainConfig,
    }),
    [apiKey, activeChain, currentTheme, toggleTheme]
  );

  return (
    <RPSContext.Provider value={contextValue}>{children}</RPSContext.Provider>
  );
};

export const useTheme = (): 'light' | 'dark' => {
  const context = useContext(RPSContext);
  return context.currentTheme;
};

export const useApiKey = (): string => {
  const context = useContext(RPSContext);
  return context.apiKey;
};

export const useActiveChain = (): string => {
  const context = useContext(RPSContext);
  return context.activeChain;
};

export const useChainConfig = (): ChainConfig => {
  const context = useContext(RPSContext);
  return context.getChainConfig();
};
