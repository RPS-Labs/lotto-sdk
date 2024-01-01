import useSWR from 'swr';
import { API_URL, fetcher } from '../constants';
import { useRPSSDK } from '../provider';

interface ApiHookResult {
  data: any;
  error: any;
  isLoading: boolean;
  isValidating: boolean;
  mutate: (data: any, options: any) => {};
}

// Define your custom hook
export function usePot(): ApiHookResult {
  const { apiKey } = useRPSSDK();
  const { data, error, isLoading, isValidating, mutate } = useSWR(
    `${API_URL}/potInfo`,
    (url) => fetcher(url, apiKey ?? '')
  );

  return {
    data,
    error,
    isLoading,
    isValidating,
    mutate,
  };
}
