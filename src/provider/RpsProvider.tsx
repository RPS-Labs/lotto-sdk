import {
  createContext,
  useContext,
  createElement,
  PropsWithChildren,
} from 'react';

export type RPSSDKContextProps = {
  activeChain: string;
  apiKey: string | null;
  theme: 'light' | 'dark';
};

export const RPSSDKContext = createContext<RPSSDKContextProps | undefined>(
  undefined
);

export const RPSProvider = ({
  children,
  apiKey,
  activeChain,
  theme,
}: PropsWithChildren<{
  activeChain: string;
  apiKey: string | null;
  theme: 'light' | 'dark';
}>) =>
  createElement(
    RPSSDKContext.Provider,
    { value: { apiKey, activeChain, theme } },
    children
  );

export const useRPSSDK = (): RPSSDKContextProps => {
  const context = useContext(RPSSDKContext);

  if (context === undefined) {
    throw new Error('useRPSSDK must be used within an RPSProvider');
  }

  return context;
};
