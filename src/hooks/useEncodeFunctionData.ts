import { useEffect, useState } from 'react';
import Web3 from 'web3';
import { PROVIDER } from '../constants';

interface ApiHookResult {
  data: any;
  error: any;
  isError: boolean;
  isLoading: boolean;
  isSuccess: boolean;
}

// Define your custom hook
export function useEnodeFunctionData({
  abi,
  functionName,
  params,
}: {
  abi: any[];
  functionName: string;
  params: string[];
}): ApiHookResult {
  const [data, setData] = useState<string>('');
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setData('');
    setError('');
    setIsLoading(true);
    setIsSuccess(false);
    setIsError(false);

    try {
      const web3 = new Web3(PROVIDER);
      const abiFunction = abi.find((item: any) => item.name === functionName);
      if (abiFunction) {
        const encodedData = web3.eth.abi.encodeFunctionCall(
          abiFunction,
          params
        );
        setData(encodedData);
        setIsSuccess(true);
        setIsLoading(false);
      } else {
        setIsError(true);
        setIsLoading(false);
        setError('Function not found in ABI');
      }
    } catch (e: any) {
      setError(e);
      setIsError(true);
      setIsLoading(false);
    }
  }, [abi, functionName, params]);

  return {
    data,
    error,
    isLoading,
    isSuccess,
    isError,
  };
}
