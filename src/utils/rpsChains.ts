// Chain configurations
import { RPSRaffleSepoliaABI, RPSRaffleLineaABI } from '../constants/abis';

const mainnet = {
  id: 1,
  name: 'Ethereum',
  baseApiUrl: 'https://api.rpslabs.io',
  routerContract: '',
  raffleContract: '',
};

const linea = {
  id: 59140,
  name: 'Linea',
  baseApiUrl: 'https://sdkapi-goerli.io',
  routerContract: '0x352DFD20F0af84683dAD7980301A566e7A3De259',
  raffleContract: '0xE77CA2f7f238A8412d8a3F18996FF7431215503A',
  abi: RPSRaffleLineaABI,
};

const sepolia = {
  id: 58008,
  name: 'Sepolia',
  baseApiUrl: 'https://sdkapi.rpslabs.io',
  raffleContract: '0xf2D607e56CCba8054aD258dC75F80D886Be6A5d4',
  routerContract: '0x2b416A200FFbCA827C0Bc26985a9ecb612E4B6eD',
  abi: RPSRaffleSepoliaABI,
};

export const rpsChains = { mainnet, linea, sepolia };
