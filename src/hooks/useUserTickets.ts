import useSWR from 'swr';
import { API_URL, fetcher } from '../constants';
import { useRPSSDK } from '../provider';

interface UserTicketsProps {
  chain: 'ethereum' | 'linea' | 'sepolia' | 'taiko' | 'mantle' | 'scroll';

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
export function useUserTickets({
  chain,
  user,
}: UserTicketsProps): ApiHookResult {
  const { apiKey } = useRPSSDK();
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `${API_URL}/user/${user}/tickets?chain=${chain}`,
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
