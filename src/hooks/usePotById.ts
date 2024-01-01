import useSWR from 'swr';
import { API_URL, fetcher } from '../constants';
import { useRPSSDK } from '../provider';

interface PotByIdProps {
  chain: 'ethereum' | 'linea' | 'sepolia' | 'taiko' | 'mantle' | 'scroll';
  potId: string;
  user: string;
  // Add more parameters as needed
}

interface ApiHookResult {
  data: any;
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  mutate: (data: any, options: any) => {};
}

// Define your custom hook
export function usePotById({
  chain,
  user,
  potId,
}: PotByIdProps): ApiHookResult {
  const { apiKey } = useRPSSDK();
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `${API_URL}/user/${user}/pot/${potId}?chain=${chain}`,
    (url: string) => fetcher(url, apiKey ?? '')
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
