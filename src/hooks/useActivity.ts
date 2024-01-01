import useSWR from 'swr';
import { API_URL, fetcher } from '../constants';
import { useRPSSDK } from '../provider';

interface ActivityProps {
  chain: 'ethereum' | 'linea' | 'sepolia' | 'taiko' | 'mantle' | 'scroll';
}

interface ApiHookResult {
  data: any;
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  mutate: (data: any, options: any) => {};
}

// Define your custom hook
export function useActivity({ chain }: ActivityProps): ApiHookResult {
  const { apiKey } = useRPSSDK();
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    [`${API_URL}/pot/latest_raffle?chain=${chain}`, apiKey],
    ([url, apiKeyParam]) => fetcher(url, apiKeyParam ?? '')
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
