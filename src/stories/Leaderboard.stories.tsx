import '../../dist/index.css';
import { StoryFn, Meta } from '@storybook/react';
import { Leaderboard, LeaderboardProps } from '../components/Leaderboard';
import { RPSProvider } from '../RpsProvider';

export default {
  title: 'Components/Leaderboard',
  component: Leaderboard,
  argTypes: {
    theme: {
      control: { type: 'radio', options: ['light', 'dark'] },
      defaultValue: 'light', // Default theme
    },
  },
} as Meta<typeof Leaderboard>;

const Template: StoryFn<LeaderboardProps> = (args) => (
  <RPSProvider apiKey="your-api-key" theme={args.theme} activeChain="sepolia">
    <Leaderboard {...args} />
  </RPSProvider>
);

export const Default = Template.bind({});
Default.args = {
  theme: 'light',
};
