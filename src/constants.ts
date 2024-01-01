import axios, { AxiosResponse } from 'axios';

export const API_URL = 'https://api.rpslabs.io';
export const PROVIDER = 'https://rpc.ankr.com/eth_goerli';
export const fetcher: (
  endpoint: string,
  apiKey: string
) => Promise<any> = async (endpoint) => {
  const responseData = null;
  try {
    const response: AxiosResponse<any> = await axios.get(endpoint);
    if (response.data.code !== 200) {
      throw new Error(response.data.message);
    }
  } catch (error: any) {
    return error.message || { message: 'An error occurred', code: 500 };
  }
  return responseData;
};
