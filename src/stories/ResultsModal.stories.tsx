import '../../dist/index.css';
import { Meta, StoryFn } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { WagmiConfig, createConfig, configureChains, mainnet } from 'wagmi';

import { publicProvider } from 'wagmi/providers/public';

import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { InjectedConnector } from 'wagmi/connectors/injected';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';

import { RPSProvider } from '../RpsProvider';
import { ResultsModal } from '../components/modal/results/ResultsModal';

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [publicProvider()]
);

// Set up wagmi config
const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        projectId: '...',
      },
    }),
    new InjectedConnector({
      chains,
      options: {
        name: 'Injected',
        shimDisconnect: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

export default {
  title: 'Modal/ResultsModal',
  component: ResultsModal,
  argTypes: {
    theme: {
      control: 'radio',
      options: ['light', 'dark'],
    },
  },
} as Meta<typeof ResultsModal>;

const Template: StoryFn<typeof ResultsModal> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <WagmiConfig config={config}>
      <ResultsModal {...args} />
    </WagmiConfig>
  </RPSProvider>
);

export const Winner = Template.bind({});
Winner.args = {
  isClaimed: false,
  isLoading: false,
  isSuccess: false,
  isWinner: true,
  onClose: () => action('Modal Closed')(),
  prizeAmount: '1.0',
  trigger: (
    <button
      type="button"
      className="px-4 py-2 bg-blue-200 border-none rounded-md outline-none focus:outline-none"
    >
      Check Results
    </button>
  ),
  winningTicketIds: [1234],
};

export const Loading = Template.bind({});
Loading.args = {
  ...Winner.args,
  isLoading: true,
  theme: 'light',
};

export const Claimed = Template.bind({});
Claimed.args = {
  ...Winner.args,
  isClaimed: true,
  theme: 'light',
};

export const NotWinner = Template.bind({});
NotWinner.args = {
  ...Winner.args,
  isWinner: false,
  theme: 'light',
};
